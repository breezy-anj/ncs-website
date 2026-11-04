"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { playClickSound } from "../../lib/sound"

export interface InteractiveRobotProps {
  src: string
  alt?: string
  className?: string
  /** Active distance in px around the robot where cursor movements trigger 3D gaze. Default: 280 */
  radius?: number
  /** Maximum degrees of 3D tilt. Default: 16 */
  maxTilt?: number
  onClick?: () => void
}

/**
 * InteractiveRobot — Statically grounded 3D mascot that only tilts/gazes
 * when the cursor moves in its immediate vicinity.
 *
 * Grounded & Stable:
 * - Anchored at the base (`transformOrigin: "center bottom"`) — never slides or drifts across X/Y.
 * - Only tilts in 3D (`rotateY`, `rotateX`, subtle `rotateZ`) to face the cursor.
 * - Active strictly when the cursor moves around the robot (radius ~280px).
 * - Smoothly eases back to neutral rest when the cursor leaves its vicinity.
 * - Zero autonomous animations or CPU loops when idle.
 */
export default function InteractiveRobot({
  src,
  alt = "Nibble Robot",
  className = "",
  radius = 280,
  maxTilt = 16,
  onClick,
}: InteractiveRobotProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const cachedRect = React.useRef<DOMRect | null>(null)
  const lastRectTime = React.useRef(0)
  const [isBouncing, setIsBouncing] = React.useState(false)
  const [reducedMotion, setReducedMotion] = React.useState(false)

  // Motion values [-50, 50]
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  // Spring physics: responsive, crisp, and smoothly damped
  const springConfig = { damping: 24, stiffness: 200, mass: 0.5 }
  const springX = useSpring(rawX, springConfig)
  const springY = useSpring(rawY, springConfig)

  // 3D Perspective Tilt (Grounded at base — NO X/Y translation sliding!)
  const rotateY = useTransform(springX, [-50, 50], [-maxTilt, maxTilt])
  const rotateX = useTransform(springY, [-50, 50], [maxTilt * 0.7, -maxTilt * 0.7])
  const rotateZ = useTransform(springX, [-50, 50], [-2.5, 2.5])

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

  // Cursor & touch tracking — ONLY triggers when cursor/touch moves around the robot
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
        // Within active radius around the robot: tilt to look towards cursor
        const effectiveRadius = radius * 0.85
        const normX = Math.max(-1, Math.min(1, dx / effectiveRadius))
        const normY = Math.max(-1, Math.min(1, dy / effectiveRadius))

        rawX.set(normX * 50)
        rawY.set(normY * 50)
      } else {
        // Outside immediate vicinity: ease back to neutral standing pose
        rawX.set(0)
        rawY.set(0)
      }
    }

    const handlePointerLeave = () => {
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
    }
  }, [radius, reducedMotion, rawX, rawY])

  const handleClick = () => {
    playClickSound()
    setIsBouncing(true)
    setTimeout(() => setIsBouncing(false), 500)
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
          transformOrigin: "center bottom",
          rotateX: reducedMotion ? 0 : rotateX,
          rotateY: reducedMotion ? 0 : rotateY,
          rotateZ: reducedMotion ? 0 : rotateZ,
        }}
        animate={
          isBouncing
            ? {
                y: [0, -14, 0],
                scale: [1, 1.06, 1],
              }
            : undefined
        }
        transition={
          isBouncing
            ? {
                duration: 0.45,
                ease: "easeOut",
              }
            : undefined
        }
        whileHover={{
          scale: 1.04,
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        whileTap={{
          scale: 0.97,
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
