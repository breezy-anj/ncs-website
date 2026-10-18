import React from "react"
import { cn } from "@/lib/utils"

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
  repeat?: number
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 2,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex overflow-hidden p-2 [--duration:40s] [--gap:1.5rem] [gap:var(--gap)] select-none",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      style={{
        transform: "translate3d(0, 0, 0)",
        backfaceVisibility: "hidden",
      }}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)] will-change-transform", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "[animation-direction:reverse]": reverse,
            })}
            style={{
              transform: "translate3d(0, 0, 0)",
              backfaceVisibility: "hidden",
            }}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
