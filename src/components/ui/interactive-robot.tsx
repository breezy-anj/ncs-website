"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { playClickSound } from "../../lib/sound"

export interface InteractiveRobotProps {
  src: string
  alt?: string
  className?: string
  /** Active distance in px around the robot where cursor movements trigger gaze. Default: 550 */
  radius?: number
  /** Maximum degrees of 3D tilt. Default: 18 */
  maxTilt?: number
  onClick?: () => void
}

/**
 * InteractiveRobot — High-performance robot mascot that only reacts and moves
 * when the cursor moves around it.
 *
 * Performance optimizations:
 * 1. Zero autonomous loop animations: completely idle when the cursor is still.
 * 2. Framer Motion useMotionValue + useSpring runs outside React render loops (0 re-renders on mousemove).
 * 3. 300ms cached bounding rect with scroll/resize invalidation avoids forced synchronous layout reflows.
 * 4. Hardware-accelerated 3D GPU transforms with perspective.
 * 5. Touch device support with touchmove/touchend.
 * 6. Respects prefers-reduced-motion.
 */
export default function InteractiveRobot({
  src,
  alt = "Nibble Robot",
  className = "",
  radius = 550,
  maxTilt = 18,
  onClick,
}: InteractiveRobotProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const cachedRect = React.useRef<DOMRect | null>(null)
  const lastRectTime = React.useRef(0)
  const idleTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isBouncing, setIsBouncing] = React.useState(false)
  const [reducedMotion, setReducedMotion] = React.useState(false)

  // Motion values [-50, 50]
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  // Spring physics: responsive, crisp, and smoothly damped
  const springConfig = { damping: 22, stiffness: 190, mass: 0.55 }
  const springX = useSpring(rawX, springConfig)
  const springY = useSpring(rawY, springConfig)

  // 3D Perspective Transforms
  const rotateY = useTransform(springX, [-50, 50], [-maxTilt, maxTilt])
  const rotateX = useTransform(springY, [-50, 50], [maxTilt * 0.8, -maxTilt * 0.8])
  const rotateZ = useTransform(springX, [-50, 50], [-3, 3])
  const transX = useTransform(springX, [-50, 50], [-12, 12])
  const transY = useTransform(springY, [-50, 50], [-9, 9])

  // Reduced motion preference
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  // Invalidate cached rect on scroll or resize
  React.useEffect(() => {
    const invalidate = () => {
      cachedRect.current = null
    }
    window.addEventListener("scroll", invalidate, { passive: true })
    window.addEventListener("resize", invalidate, { passive: true })
    return () => {
      window.removeEventListener("scroll", invalidate)
      window.removeEventListener("resize", invalidate)
    }
  }, [])

  // Cursor & touch tracking — ONLY moves when cursor/touch moves around it
  React.useEffect(() => {
    if (reducedMotion) return

    const getRect = () => {
      const now = performance.now()
      if (!cachedRect.current || now - lastRectTime.current > 350) {
        if (containerRef.current) {
          cachedRect.current = containerRef.current.getBoundingClientRect()
          lastRectTime.current = now
        }
      }
      return cachedRect.current
    }

    const handlePointerMove = (e: PointerEvent | MouseEvent) => {
      const rect = getRect()
      if (!rect) return

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY
      const dist = Math.hypot(dx, dy)

      if (dist < radius) {
        // Within active radius: lean and gaze toward cursor
        const effectiveRadius = radius * 0.75
        const normX = Math.max(-1, Math.min(1, dx / effectiveRadius))
        const normY = Math.max(-1, Math.min(1, dy / effectiveRadius))

        rawX.set(normX * 50)
        rawY.set(normY * 50)

        // Reset idle timer: if cursor stops moving for 1200ms, ease smoothly back to neutral
        if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
        idleTimerRef.current = setTimeout(() => {
          rawX.set(0)
          rawY.set(0)
        }, 1200)
      } else {
        // Outside radius: settle at resting state
        rawX.set(0)
        rawY.set(0)
      }
    }

    const handlePointerLeave = () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
      rawX.set(0)
      rawY.set(0)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        handlePointerMove(touch as unknown as MouseEvent)
      }
    }

    const handleTouchEnd = () => {
      handlePointerLeave()
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("mouseleave", handlePointerLeave, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    window.addEventListener("touchend", handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("mouseleave", handlePointerLeave)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    }
  }, [radius, reducedMotion, rawX, rawY])

  const handleClick = () => {
    playClickSound()
    setIsBouncing(true)
    setTimeout(() => setIsBouncing(false), 600)
    onClick?.()
  }

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      style={{ perspective: 1000 }}
      className={`relative z-10 flex flex-col items-center justify-end shrink-0 cursor-pointer ${className}`}
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          rotateX: reducedMotion ? 0 : rotateX,
          rotateY: reducedMotion ? 0 : rotateY,
          rotateZ: reducedMotion ? 0 : rotateZ,
          x: reducedMotion ? 0 : transX,
          y: reducedMotion ? 0 : transY,
        }}
        animate={
          isBouncing
            ? {
                y: [-4, -18, 0],
                scale: [1, 1.08, 1],
                rotateZ: [0, -3, 3, 0],
              }
            : undefined
        }
        transition={
          isBouncing
            ? {
                duration: 0.5,
                ease: "easeOut",
              }
            : undefined
        }
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.25, ease: "easeOut" },
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="w-full h-full flex flex-col items-center justify-end select-none will-change-transform"
      >
        <img
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          className="w-full h-full object-contain filter drop-shadow-[0_20px_36px_rgba(0,0,0,0.85)] pointer-events-none select-none transition-filter duration-300"
        />
      </motion.div>
    </div>
  )
}
