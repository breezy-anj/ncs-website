"use client"

import React, { useEffect, useRef } from "react"

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

class Particle {
  constructor(x, y, size, dispersion, returnSpd) {
    this.x = x
    this.y = y
    this.originX = x
    this.originY = y
    this.vx = 0
    this.vy = 0
    this.size = size
    this.dispersion = dispersion
    this.returnSpd = returnSpd
  }

  update(mouseX, mouseY) {
    if (mouseX !== -1000 && mouseY !== -1000) {
      const dx = mouseX - this.x
      const dy = mouseY - this.y
      const distanceSq = dx * dx + dy * dy
      const interactionRadiusSq = 19600 // 140 * 140

      if (distanceSq < interactionRadiusSq && distanceSq > 0) {
        const distance = Math.sqrt(distanceSq)
        const force = (140 - distance) / 140
        const forceDirectionX = dx / distance
        const forceDirectionY = dy / distance

        this.vx -= forceDirectionX * force * this.dispersion
        this.vy -= forceDirectionY * force * this.dispersion
      }
    }

    this.vx += (this.originX - this.x) * this.returnSpd
    this.vy += (this.originY - this.y) * this.returnSpd

    this.vx *= 0.85
    this.vy *= 0.85

    this.x += this.vx
    this.y += this.vy
  }
}

export function CursorDrivenParticleTypography({
  className,
  text,
  fontSize = 200,
  fontFamily = "'Inter', sans-serif",
  particleSize = 1.8,
  particleDensity = 5,
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

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    let animationFrameId = null
    let particles = []
    let isVisible = true
    let isRunning = false

    let mouseX = -1000
    let mouseY = -1000

    let containerWidth = 0
    let containerHeight = 0
    let textColor = color || "#ffffff"

    const init = () => {
      if (!container) return

      containerWidth = container.clientWidth || 1200
      containerHeight = container.clientHeight || 280

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = containerWidth * dpr
      canvas.height = containerHeight * dpr
      canvas.style.width = `${containerWidth}px`
      canvas.style.height = `${containerHeight}px`

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      const computedStyle = window.getComputedStyle(container)
      textColor = color || computedStyle.color || "#ffffff"

      ctx.clearRect(0, 0, containerWidth, containerHeight)

      const effectiveFontSize = Math.min(
        fontSize,
        containerWidth * 0.22,
        containerHeight * 0.85,
      )
      ctx.fillStyle = textColor
      ctx.font = `900 ${effectiveFontSize}px ${fontFamily}`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      ctx.fillText(text, containerWidth / 2, containerHeight / 2)

      const textCoordinates = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height,
      )

      const sampled = []
      const step = Math.max(3, Math.floor(particleDensity * dpr))

      for (let y = 0; y < textCoordinates.height; y += step) {
        for (let x = 0; x < textCoordinates.width; x += step) {
          const index = (y * textCoordinates.width + x) * 4
          const alpha = textCoordinates.data[index + 3] || 0

          if (alpha > 128) {
            sampled.push(
              new Particle(
                x / dpr,
                y / dpr,
                particleSize,
                dispersionStrength,
                returnSpeed,
              ),
            )
          }
        }
      }

      // Limit particle count to ~850 max to guarantee 60-120fps on any device
      if (sampled.length > 900) {
        const factor = Math.ceil(sampled.length / 850)
        particles = sampled.filter((_, idx) => idx % factor === 0)
      } else {
        particles = sampled
      }

      // Single initial draw call
      ctx.clearRect(0, 0, containerWidth, containerHeight)
      ctx.fillStyle = textColor
      ctx.beginPath()
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx.moveTo(p.x + p.size, p.y)
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      }
      ctx.fill()
    }

    const startLoop = () => {
      if (isRunning || !isVisible) return
      isRunning = true
      let idleFrames = 0

      const animate = () => {
        if (!isVisible) {
          isRunning = false
          animationFrameId = null
          return
        }

        ctx.clearRect(0, 0, containerWidth, containerHeight)
        ctx.fillStyle = textColor
        ctx.beginPath()

        let maxMovement = 0
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]
          p.update(mouseX, mouseY)
          ctx.moveTo(p.x + p.size, p.y)
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)

          const move = Math.abs(p.vx) + Math.abs(p.vy)
          if (move > maxMovement) maxMovement = move
        }

        ctx.fill()

        // If mouse is away and particles have settled, stop animating to save 100% CPU
        if (mouseX === -1000 && maxMovement < 0.04) {
          idleFrames++
          if (idleFrames > 12) {
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
        startLoop()
      })
    }

    const timeoutId = setTimeout(() => {
      init()
      startLoop()
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
      { threshold: 0.05 },
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
        "w-full h-full min-h-[220px] flex items-center justify-center relative touch-none select-none",
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full pointer-events-auto cursor-pointer"
      />
    </div>
  )
}

export default CursorDrivenParticleTypography
