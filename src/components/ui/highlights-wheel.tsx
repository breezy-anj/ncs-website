import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export interface HighlightItem {
  image: string
  title: string
  href?: string
}

export interface HighlightsWheelProps extends React.HTMLAttributes<HTMLElement> {
  items?: HighlightItem[]
  label?: string
  action?: string
  className?: string
}

export const DEFAULT_HIGHLIGHT_ITEMS: HighlightItem[] = [
  { image: "/assets/highlights/web/IMG_2969.jpg", title: "InOut Grand Finale" },
  { image: "/assets/highlights/web/DSC04982.JPG", title: "Hackathon Opening" },
  { image: "/assets/highlights/web/DSC05186.JPG", title: "CodeCraft Workshop" },
  { image: "/assets/highlights/web/DSC05537.JPG", title: "Community Meetup" },
  { image: "/assets/highlights/web/IMG_1634.JPG", title: "Ideation & Brainstorming" },
  { image: "/assets/highlights/web/IMG_1635.JPG", title: "Collaborative Building" },
  { image: "/assets/highlights/web/IMG_1647.JPG", title: "Keynote & Tech Talk" },
  { image: "/assets/highlights/web/IMG_1736.JPG", title: "Mentorship Session" },
  { image: "/assets/highlights/web/IMG_1795.JPG", title: "Annual Fest Celebrations" },
  { image: "/assets/highlights/web/IMG_1957_1.jpeg", title: "Team Synergy" },
  { image: "/assets/highlights/web/IMG_2403.JPG", title: "Project Demos" },
  { image: "/assets/highlights/web/IMG_2495.JPG", title: "Hackathon Pitching" },
  { image: "/assets/highlights/web/IMG_2526.jpeg", title: "Audience Engagement" },
  { image: "/assets/highlights/web/IMG_2554.jpeg", title: "Winners Felicitation" },
  { image: "/assets/highlights/web/IMG_2952.jpg", title: "Stage Spotlight" },
  { image: "/assets/highlights/web/IMG_2979.jpg", title: "Networking Moments" },
  { image: "/assets/highlights/web/IMG_2984.jpg", title: "Inspiring Innovation" },
  { image: "/assets/highlights/web/IMG_3002.jpg", title: "Award Ceremony" },
  { image: "/assets/highlights/web/IMG_3010.jpg", title: "Closing Remarks" },
  { image: "/assets/highlights/web/IMG_3012.jpg", title: "Campus Celebration" },
  { image: "/assets/highlights/web/IMG_3016.jpg", title: "Society Milestones" },
  { image: "/assets/highlights/web/IMG_4240.jpg", title: "Tech Enthusiasts" },
  { image: "/assets/highlights/web/IMG_4252.jpg", title: "Nibble Family" },
  { image: "/assets/highlights/web/IMG_4262.jpg", title: "Core Team Memories" },
]

// Wheel geometry & animation constants
const UP = 0.58
const WP = 0.7
const GP = 1.5
const KP = 36
const QP = 1.95
const JP = 2.6
const YP = 0.68
const XP = 1.4
const ZP = 1.8
const WHEEL_SENSITIVITY = 900
const DRAG_SENSITIVITY = 420
const SETTLE_DELAY = 140
const LERP_FACTOR = 0.12

const clamp = (val: number, min: number, max: number) => Math.min(max, Math.max(min, val))
const lerp = (start: number, end: number, t: number) => start + (end - start) * t
const degToRad = (deg: number) => (deg * Math.PI) / 180
const bowOffset = (deg: number, bow: number) => -bow * (1 - Math.cos(degToRad(deg)))

function getCardTransform(
  angleZ: number,
  angleX: number,
  ringR: number,
  drumR: number,
  bow: number,
  progress: number
) {
  const x = progress * bowOffset(angleX, bow)
  const rotZ = (1 - progress) * angleZ
  const y = -(1 - progress) * ringR
  const rotX = progress * angleX
  const z = progress * drumR
  return `translateX(${x}px) rotateZ(${rotZ}deg) translateY(${y}px) rotateX(${rotX}deg) translateZ(${z}px)`
}

export default function HighlightsWheel({
  items = DEFAULT_HIGHLIGHT_ITEMS,
  label = "NCS FAMILY",
  action = "View",
  className,
  ...props
}: HighlightsWheelProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])
  const labelRef = useRef<HTMLDivElement>(null)
  const currentPos = useRef(0)
  const targetPos = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [dims, setDims] = useState({ w: 0, h: 0 })
  const total = items.length
  const maxIdx = Math.max(total - 1, 0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setPrefersReducedMotion(mq.matches)
    onChange()
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  // Auto-resize tracking
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const updateSize = () => setDims({ w: el.clientWidth, h: el.clientHeight })
    updateSize()
    const ro = new ResizeObserver(updateSize)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Dynamic layout calculations based on viewport container
  const layout = useMemo(() => {
    const { w, h } = dims
    const cardW = Math.min(h * UP * GP, w * WP)
    const cardH = cardW / GP
    const drumR = cardH * QP
    const ringR = cardH * YP
    const ringScale = total ? clamp(((2 * Math.PI * ringR) / total) * 0.95 / (cardW || 1), 0.22, 0.75) : 1
    const bow = cardH * XP
    const depth = cardH * JP

    return { cardW, cardH, ringR, ringScale, drumR, bow, depth }
  }, [dims, total])

  // Update position target with clamp
  const setTarget = useCallback(
    (pos: number) => {
      targetPos.current = clamp(pos, 0, maxIdx + 1)
    },
    [maxIdx]
  )

  // Physics animation loop
  useEffect(() => {
    if (!dims.h) return
    let animId = 0
    const { ringR, ringScale, drumR, bow } = layout

    const tick = () => {
      animId = requestAnimationFrame(tick)
      const diff = targetPos.current - currentPos.current
      if (Math.abs(diff) < 0.0005) {
        currentPos.current = targetPos.current
      } else {
        currentPos.current += diff * (prefersReducedMotion ? 1 : LERP_FACTOR)
      }

      const p = currentPos.current
      const progress = clamp(p, 0, 1)
      const drumStep = Math.max(0, p - 1)

      if (stageRef.current) {
        stageRef.current.style.transform = `translateZ(${-progress * drumR}px)`
      }

      for (let i = 0; i < total; i++) {
        const rel = i - drumStep
        const angleX = rel * KP
        const angleZ = (360 / total) * rel
        const cardEl = cardRefs.current[i]

        if (cardEl) {
          cardEl.style.transform = getCardTransform(angleZ, angleX, ringR, drumR, bow, progress)
          cardEl.style.opacity = progress > 0.5 && Math.abs(rel) > ZP ? "0" : "1"
          cardEl.style.zIndex = String(Math.round(100 - Math.abs(rel) * 2))

          const child = cardEl.firstElementChild as HTMLElement | null
          if (child) {
            child.style.transform = `scale(${lerp(ringScale, 1, progress)})`
          }
        }
      }

      if (labelRef.current) {
        labelRef.current.style.opacity = String(1 - progress)
      }

      const currentIdx = clamp(Math.round(drumStep), 0, maxIdx)
      setActiveIndex((prev) => (prev === currentIdx ? prev : currentIdx))
    }

    animId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animId)
  }, [layout, dims.h, total, maxIdx, prefersReducedMotion])

  // Mouse wheel listener with debounce settling
  const wheelTimer = useRef<number | null>(null)
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const handleWheel = (e: WheelEvent) => {
      const next = targetPos.current + e.deltaY / WHEEL_SENSITIVITY
      if (next > 0 && next < maxIdx + 1) {
        e.preventDefault()
      }
      setTarget(next)

      if (wheelTimer.current) window.clearTimeout(wheelTimer.current)
      wheelTimer.current = window.setTimeout(() => {
        setTarget(Math.round(targetPos.current))
      }, SETTLE_DELAY)
    }

    el.addEventListener("wheel", handleWheel, { passive: false })
    return () => {
      el.removeEventListener("wheel", handleWheel)
      if (wheelTimer.current) window.clearTimeout(wheelTimer.current)
    }
  }, [setTarget, maxIdx])

  // Pointer drag handling
  const dragStartY = useRef<number | null>(null)

  return (
    <section
      aria-label={label}
      className={cn(
        "relative h-full min-h-[24rem] w-full overflow-hidden select-none bg-transparent text-white",
        className
      )}
      {...props}
    >
      {/* 3D Interactive Stage */}
      <div
        ref={containerRef}
        tabIndex={0}
        role="listbox"
        aria-label={label}
        aria-activedescendant={`works-wheel-${activeIndex}`}
        className="absolute inset-0 cursor-grab touch-pan-x outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:cursor-grabbing"
        style={{ perspective: `${layout.depth}px` }}
        onPointerDown={(e) => {
          dragStartY.current = e.clientY
          e.currentTarget.setPointerCapture(e.pointerId)
        }}
        onPointerMove={(e) => {
          if (dragStartY.current !== null) {
            setTarget(targetPos.current + (dragStartY.current - e.clientY) / DRAG_SENSITIVITY)
            dragStartY.current = e.clientY
          }
        }}
        onPointerUp={() => {
          dragStartY.current = null
          if (targetPos.current > 1) {
            setTarget(Math.round(targetPos.current))
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            setTarget(Math.round(targetPos.current) + 1)
            e.preventDefault()
          } else if (e.key === "ArrowUp") {
            setTarget(Math.round(targetPos.current) - 1)
            e.preventDefault()
          }
        }}
      >
        <div
          ref={stageRef}
          className="absolute top-1/2 left-1/2 [transform-style:preserve-3d]"
        >
          {items.map((item, idx) => {
            const Comp = item.href ? "a" : "div"
            return (
              <Comp
                key={`${item.title}-${idx}`}
                id={`works-wheel-${idx}`}
                role="option"
                aria-selected={idx === activeIndex}
                href={item.href}
                onClick={() => setTarget(idx + 1)}
                ref={(el) => {
                  cardRefs.current[idx] = el
                }}
                className="group absolute [backface-visibility:hidden] cursor-pointer"
                style={{
                  width: layout.cardW,
                  height: layout.cardH,
                  marginLeft: -layout.cardW / 2,
                  marginTop: -layout.cardH / 2,
                }}
              >
                <span className="relative block size-full overflow-hidden rounded-2xl shadow-[0_24px_50px_-15px_rgba(0,0,0,0.9)] border border-white/10 transition-transform duration-300 group-hover:scale-[1.02] bg-[#111]">
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    className="size-full object-cover select-none pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm md:text-base font-semibold drop-shadow-md">
                      {item.title}
                    </p>
                  </div>
                </span>
              </Comp>
            )
          })}
        </div>
      </div>

      {/* Shimmering Center Label */}
      <div
        ref={labelRef}
        className="pointer-events-none absolute inset-0 flex items-center justify-center text-center z-10 transition-opacity duration-300 px-4 select-none"
      >
        <h2 className="relative inline-block font-['Satoshi:Black',Arial,sans-serif] text-[28px] sm:text-[38px] md:text-[48px] lg:text-[54px] font-black uppercase tracking-tight leading-none drop-shadow-[0_4px_24px_rgba(255,255,255,0.12)] bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 via-white to-zinc-400 animate-shimmer">
          {label}
        </h2>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-4 sm:left-8 flex items-center z-30 pointer-events-none">
        <button
          type="button"
          aria-label="Previous photo"
          onClick={() => setTarget(Math.max(0, targetPos.current - 1))}
          className="pointer-events-auto flex size-12 sm:size-14 items-center justify-center rounded-full bg-black/60 hover:bg-white hover:text-black text-white border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-2xl"
        >
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 sm:right-8 flex items-center z-30 pointer-events-none">
        <button
          type="button"
          aria-label="Next photo"
          onClick={() => setTarget(Math.min(maxIdx + 1, targetPos.current + 1))}
          className="pointer-events-auto flex size-12 sm:size-14 items-center justify-center rounded-full bg-black/60 hover:bg-white hover:text-black text-white border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-2xl"
        >
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
