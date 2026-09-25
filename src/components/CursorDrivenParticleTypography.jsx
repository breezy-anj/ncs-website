"use client"

// Keep DPR to 1.0 for particle canvas to conserve battery/GPU

// Draw initial static state

// If mouse is away and all particles are resting, sleep loop to save 100% CPU/battery

// Ensure fonts are loaded before reading pixels

import React, { useEffect, useRef } from "react"

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

class Particle {
  x
  y
  originX
  originY
  vx
  vy
  size
  color
  dispersion
  returnSpd

  constructor(x, y, size, color, dispersion, returnSpd) {
    this.x = x + (Math.random() - 0.5) * 10
    this.y = y + (Math.random() - 0.5) * 10
    this.originX = x
    this.originY = y
    this.vx = (Math.random() - 0.5) * 5
    this.vy = (Math.random() - 0.5) * 5
    this.size = size
    this.color = color
    this.dispersion = dispersion
    this.returnSpd = returnSpd
  }

  update(mouseX, mouseY) {
    const dx = mouseX - this.x
    const dy = mouseY - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    const interactionRadius = 140

    if (distance < interactionRadius && mouseX !== -1000 && mouseY !== -1000) {
      const forceDirectionX = dx / distance
      const forceDirectionY = dy / distance
      const force = (interactionRadius - distance) / interactionRadius

      const repulsionX = forceDirectionX * force * this.dispersion
      const repulsionY = forceDirectionY * force * this.dispersion

      this.vx -= repulsionX
      this.vy -= repulsionY
    }

    this.vx += (this.originX - this.x) * this.returnSpd
    this.vy += (this.originY - this.y) * this.returnSpd

    this.vx *= 0.85
    this.vy *= 0.85

    const distToOrigin = Math.sqrt(
      Math.pow(this.x - this.originX, 2) + Math.pow(this.y - this.originY, 2),
    )

    if (distToOrigin < 1 && Math.random() > 0.95) {
      this.vx += (Math.random() - 0.5) * 0.2
      this.vy += (Math.random() - 0.5) * 0.2
    }

    this.x += this.vx
    this.y += this.vy
  }

  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

export function CursorDrivenParticleTypography({
  className,
  text,
  fontSize = 120,
  fontFamily = "Inter, sans-serif",
  particleSize = 1.6,
  particleDensity = 5.5,
  dispersionStrength = 18,
  returnSpeed = 0.08,
  color = "#ffffff",
}) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId = null
    let particles = []
    let isVisible = false
    let isRunning = false

    let mouseX = -1000
    let mouseY = -1000

    let containerWidth = 0
    let containerHeight = 0

    const init = () => {
      if (!container) return

      containerWidth = container.clientWidth || 1058
      containerHeight = container.clientHeight || 350
      const dpr = 1.0
      canvas.width = containerWidth
      canvas.height = containerHeight
      canvas.style.width = `${containerWidth}px`
      canvas.style.height = `${containerHeight}px`

      ctx.setTransform(1, 0, 0, 1, 0, 0)

      const computedStyle = window.getComputedStyle(container)
      const textColor = color || computedStyle.color || "#ffffff"

      ctx.clearRect(0, 0, containerWidth, containerHeight)

      const effectiveFontSize = fontSize || Math.min(280, containerWidth * 0.28)
      ctx.fillStyle = textColor
      ctx.font = `bold ${effectiveFontSize}px ${fontFamily}`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      ctx.fillText(text, containerWidth / 2, containerHeight / 2)

      const textCoordinates = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height,
      )

      particles = []
      const step = Math.max(3, Math.floor(particleDensity))

      for (let y = 0; y < textCoordinates.height; y += step) {
        for (let x = 0; x < textCoordinates.width; x += step) {
          const index = (y * textCoordinates.width + x) * 4
          const alpha = textCoordinates.data[index + 3] || 0

          if (alpha > 128) {
            particles.push(
              new Particle(
                x,
                y,
                particleSize,
                textColor,
                dispersionStrength,
                returnSpeed,
              ),
            )
          }
        }
      }
      ctx.clearRect(0, 0, containerWidth, containerHeight)
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw(ctx)
      }
    }

    const startLoop = () => {
      if (isRunning || !isVisible) return
      isRunning = true
      let idleFrames = 0

      const animate = () => {
        if (!isVisible) {
          isRunning = false
          return
        }

        ctx.clearRect(0, 0, containerWidth, containerHeight)

        let maxMovement = 0
        for (let i = 0; i < particles.length; i++) {
          particles[i].update(mouseX, mouseY)
          particles[i].draw(ctx)

          const move = Math.abs(particles[i].vx) + Math.abs(particles[i].vy)
          if (move > maxMovement) maxMovement = move
        }
        if (mouseX === -1000 && maxMovement < 0.05) {
          idleFrames++
          if (idleFrames > 30) {
            isRunning = false
            animationFrameId = null
            return
          }
        } else {
          idleFrames = 0
        }

        animationFrameId = requestAnimationFrame(animate)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
      startLoop()
    }

    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }

    const handleResize = () => {
      init()
      startLoop()
    }
    if (document.fonts) {
      document.fonts.ready.then(() => {
        init()
      })
    }

    const timeoutId = setTimeout(() => {
      init()
    }, 100)

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        isVisible = entry.isIntersecting
        if (isVisible) {
          startLoop()
        } else {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId)
            animationFrameId = null
          }
          isRunning = false
        }
      },
      { threshold: 0.1 },
    )
    intersectionObserver.observe(container)

    canvas.addEventListener("mousemove", handleMouseMove, { passive: true })
    canvas.addEventListener("mouseleave", handleMouseLeave, { passive: true })

    return () => {
      clearTimeout(timeoutId)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [
    text,
    fontSize,
    fontFamily,
    particleSize,
    particleDensity,
    dispersionStrength,
    returnSpeed,
    color,
  ])

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full h-full min-h-[320px] flex items-center justify-center relative touch-none select-none",
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full pointer-events-auto"
      />
    </div>
  )
}

export default CursorDrivenParticleTypography
