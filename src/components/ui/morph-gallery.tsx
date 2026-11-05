"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

export type MorphItem = {
  /** Full-size image. */
  src: string
  /** Thumbnail for the strip. Falls back to `src`. */
  thumb?: string
  alt?: string
}

export type MorphGalleryProps = {
  items: MorphItem[]
  /** **Must be a definite length.** The gallery fills this box. */
  height?: string
  /** Milliseconds of transition (default: 450). */
  duration?: number
  noiseScale?: number
  edge?: number
  drift?: number
  /** Wrap past the ends. */
  loop?: boolean
  /** Milliseconds between automatic advances. 0 (default) is off. */
  autoplay?: number
  arrows?: boolean
  thumbnails?: boolean
  /** Controlled index. Omit for uncontrolled. */
  index?: number
  defaultIndex?: number
  onIndexChange?: (index: number) => void
  className?: string
}

// #region gallery helpers
/** Wrap past the ends when looping, clamp at them when not. */
export const wrapIndex = (i: number, n: number, loop: boolean): number => {
  if (n <= 0) return 0
  return loop ? ((i % n) + n) % n : Math.min(Math.max(i, 0), n - 1)
}

/** Quintic in-out easing helper */
export const easeInOutQuint = (t: number): number => {
  const x = Math.min(Math.max(t, 0), 1)
  return x < 0.5 ? 16 * x ** 5 : 1 - (-2 * x + 2) ** 5 / 2
}

/** Cover scale helper for aspect ratios */
export const coverScale = (
  canvasAspect: number,
  imgAspect: number,
): [number, number] =>
  canvasAspect > imgAspect
    ? [1, imgAspect / canvasAspect]
    : [canvasAspect / imgAspect, 1]
// #endregion

export default function MorphGallery({
  items,
  height = "100svh",
  duration = 450,
  loop = true,
  autoplay = 0,
  arrows = true,
  thumbnails = true,
  index,
  defaultIndex = 0,
  onIndexChange,
  className = "",
}: MorphGalleryProps) {
  const [uncontrolled, setUncontrolled] = React.useState(() =>
    wrapIndex(defaultIndex, items.length, loop),
  )
  const active = index === undefined ? uncontrolled : wrapIndex(index, items.length, loop)

  const [reduced, setReduced] = React.useState(false)
  const [paused, setPaused] = React.useState(false)

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener("change", sync)
    return () => mq.removeEventListener("change", sync)
  }, [])

  const go = React.useCallback(
    (next: number) => {
      const wrapped = wrapIndex(next, items.length, loop)
      if (index === undefined) setUncontrolled(wrapped)
      onIndexChange?.(wrapped)
    },
    [index, items.length, loop, onIndexChange],
  )

  // ---- autoplay ------------------------------------------------------------
  React.useEffect(() => {
    if (!autoplay || reduced || paused || items.length < 2) return
    const id = window.setInterval(() => go(active + 1), Math.max(autoplay, 600))
    return () => window.clearInterval(id)
  }, [autoplay, reduced, paused, active, go, items.length])

  React.useEffect(() => {
    const sync = () => setPaused(document.hidden)
    document.addEventListener("visibilitychange", sync)
    return () => document.removeEventListener("visibilitychange", sync)
  }, [])

  // ---- pointer and keyboard navigation -------------------------------------
  const swipe = React.useRef<number | null>(null)
  const onPointerDown = (e: React.PointerEvent) => {
    swipe.current = e.clientX
  }
  const onPointerUp = (e: React.PointerEvent) => {
    const startX = swipe.current
    swipe.current = null
    if (startX === null) return
    const dx = e.clientX - startX
    if (Math.abs(dx) > 48) go(active + (dx < 0 ? 1 : -1))
  }
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      go(active - 1)
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      go(active + 1)
    }
  }

  const atStart = !loop && active === 0
  const atEnd = !loop && active === items.length - 1
  const current = items[active]

  const arrowClass =
    "absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center " +
    "rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md " +
    "transition-colors hover:bg-white/25 focus-visible:outline focus-visible:outline-2 " +
    "focus-visible:outline-offset-2 focus-visible:outline-white " +
    "disabled:pointer-events-none disabled:opacity-25 cursor-pointer"

  const listRef = React.useRef<HTMLUListElement | null>(null)
  React.useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector<HTMLElement>('[aria-current="true"]')
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
      }
    }
  }, [active])

  const transitionDurationSec = reduced ? 0 : Math.min(Math.max(duration / 1000, 0.2), 0.8)

  return (
    <section
      className={"relative w-full overflow-hidden bg-black " + className}
      style={{ height }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image gallery"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Smooth Image Cross-Fade Viewport */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black flex items-center justify-center">
        <AnimatePresence mode="sync">
          {items[active] && (
            <motion.img
              key={items[active].src || active}
              src={items[active].src}
              alt={items[active].alt ?? ""}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: transitionDurationSec, ease: "easeInOut" }}
              className="absolute inset-0 block h-full w-full object-cover select-none pointer-events-none"
              style={{ maxWidth: "none" }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Bottom vignette overlay for thumbnail legibility */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-56 bg-gradient-to-b from-transparent to-black/65"
        aria-hidden="true"
      />

      {/* Navigation Arrows */}
      {arrows && items.length > 1 && (
        <>
          <button
            type="button"
            className={arrowClass + " left-4 sm:left-8"}
            onClick={() => go(active - 1)}
            disabled={atStart}
            aria-label="Previous image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            className={arrowClass + " right-4 sm:right-8"}
            onClick={() => go(active + 1)}
            disabled={atEnd}
            aria-label="Next image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      {/* Bottom Thumbnail Strip */}
      {thumbnails && items.length > 1 && (
        <ul
          ref={listRef}
          className={
            "absolute inset-x-0 bottom-8 z-10 mx-auto flex w-max max-w-[calc(100%-2rem)] gap-2 " +
            "list-none overflow-x-auto scroll-smooth p-0 pb-2.5 " +
            "[&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:rounded [&::-webkit-scrollbar-track]:bg-white/10 " +
            "[&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:bg-white/30 " +
            "max-sm:hidden"
          }
        >
          {items.map((item, i) => (
            <li key={item.src + "-" + i} className="shrink-0 list-none">
              <button
                type="button"
                onClick={() => go(i)}
                aria-current={i === active}
                aria-label={item.alt ? "Show " + item.alt : "Show image " + (i + 1)}
                className={
                  "block cursor-pointer overflow-hidden rounded border-2 bg-transparent p-0 transition " +
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white " +
                  (i === active
                    ? "border-white opacity-100"
                    : "border-transparent opacity-55 hover:opacity-85")
                }
              >
                <img
                  src={item.thumb ?? item.src}
                  alt=""
                  width={80}
                  height={50}
                  loading="lazy"
                  decoding="async"
                  className="block object-cover"
                  style={{ maxWidth: "none", width: 80, height: 50 }}
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      <span className="sr-only" aria-live="polite">
        {current ? current.alt ?? "Image " + (active + 1) : ""}
        {" — "}
        {active + 1} of {items.length}
      </span>
    </section>
  )
}
