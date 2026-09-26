import React, { useEffect, useRef, useState } from "react"
import type { HTMLAttributes } from "react"

const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(" ")

export interface GalleryItem {
  common: string
  binomial: string
  href?: string
  photo: {
    url: string
    text: string
    pos?: string
    by: string
  }
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[]
  /** Controls how far the items are from the center. */
  radius?: number
  /** Controls the speed of auto-rotation when not scrolling. */
  autoRotateSpeed?: number
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.02, style, ...props }, ref) => {
    const [rotation, setRotation] = useState(0)
    const [isScrolling, setIsScrolling] = useState(false)
    const targetRotationRef = useRef(0)
    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const animationFrameRef = useRef<number | null>(null)

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolling(true)
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)

        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
        targetRotationRef.current = scrollProgress * 360

        scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 150)
      }

      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => {
        window.removeEventListener("scroll", handleScroll)
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
      }
    }, [])

    useEffect(() => {
      let frameId: number
      const autoRotate = () => {
        setRotation((prev) =>
          isScrolling
            ? prev + (targetRotationRef.current - prev) * 0.12
            : prev + autoRotateSpeed,
        )
        frameId = requestAnimationFrame(autoRotate)
        animationFrameRef.current = frameId
      }

      frameId = requestAnimationFrame(autoRotate)
      animationFrameRef.current = frameId
      return () => cancelAnimationFrame(frameId)
    }, [isScrolling, autoRotateSpeed])

    const anglePerItem = items.length > 0 ? 360 / items.length : 0

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn("relative flex h-full w-full items-center justify-center", className)}
        {...props}
        style={{ perspective: "2000px", ...style }}
      >
        <div
          className="relative h-full w-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem
            const totalRotation = rotation % 360
            const relativeAngle = (itemAngle + totalRotation + 360) % 360
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle)
            const opacity = Math.max(0.3, 1 - normalizedAngle / 180)

            return (
              <div
                key={`${item.photo.url}-${i}`}
                role="group"
                aria-label={item.common}
                className="absolute h-[400px] w-[300px]"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: "50%",
                  top: "50%",
                  marginLeft: "-150px",
                  marginTop: "-200px",
                  opacity,
                  transition: "opacity 0.3s linear",
                }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.common} — open event details`}
                    className="group block h-full w-full text-inherit no-underline"
                  >
                    <GalleryCard item={item} />
                  </a>
                ) : (
                  <GalleryCard item={item} />
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  },
)

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-lg border border-border bg-card/70 shadow-2xl backdrop-blur-lg dark:bg-card/30">
      <img
        src={item.photo.url}
        alt={item.photo.text}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ objectPosition: item.photo.pos || "center" }}
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
        <h2 className="text-xl font-bold">{item.common}</h2>
        <em className="text-sm italic opacity-80">{item.binomial}</em>
        <p className="mt-2 text-xs opacity-70">Photo by: {item.photo.by}</p>
      </div>
    </div>
  )
}

CircularGallery.displayName = "CircularGallery"

export { CircularGallery }
