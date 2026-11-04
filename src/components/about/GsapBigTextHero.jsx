import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ShimmerText } from "../ui/shimmer-text"

export default function GsapBigTextHero() {
  const containerRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const sublineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Master Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      // Text lines reveal upwards with scale and blur fade
      tl.fromTo(
        line1Ref.current,
        { yPercent: 110, opacity: 0, rotateX: 30, filter: "blur(12px)" },
        { yPercent: 0, opacity: 1, rotateX: 0, filter: "blur(0px)", duration: 1.3 }
      )
        .fromTo(
          line2Ref.current,
          { yPercent: 110, opacity: 0, rotateX: 30, filter: "blur(12px)" },
          { yPercent: 0, opacity: 1, rotateX: 0, filter: "blur(0px)", duration: 1.3 },
          "-=1.0"
        )
        .fromTo(
          sublineRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.6"
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="bg-transparent relative w-full min-h-[calc(100vh-84px)] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 select-none overflow-hidden"
    >
      {/* Main Massive Screen-Covering Headline Box - Centered */}
      <div className="relative flex flex-col items-center justify-center text-center w-full max-w-[1550px] mx-auto py-2 sm:py-6">

        {/* LINE 1: "WHAT WE" */}
        <div className="relative w-full flex justify-center overflow-visible">
          <div className="overflow-visible py-1 px-2">
            <h1
              ref={line1Ref}
              className="font-['Satoshi'] font-black text-[13.5vw] sm:text-[14vw] md:text-[13vw] lg:text-[12.5vw] xl:text-[150px] 2xl:text-[185px] leading-[0.85] tracking-[-0.045em] text-[#faf8f0] uppercase flex items-baseline justify-center flex-nowrap"
              style={{
                fontFamily: "'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              <ShimmerText duration={2.5} delay={0.2} className="text-[#faf8f0]">
                WHAT WE
              </ShimmerText>
            </h1>
          </div>
        </div>

        {/* LINE 2: "DO AT NCS?" */}
        <div className="relative w-full flex justify-center overflow-visible -mt-1 sm:-mt-2 md:-mt-4">
          <div className="overflow-visible py-1 px-3 sm:px-6">
            <h1
              ref={line2Ref}
              className="font-['Satoshi'] font-black text-[13.5vw] sm:text-[14vw] md:text-[13vw] lg:text-[12.5vw] xl:text-[150px] 2xl:text-[185px] leading-[0.85] tracking-[-0.045em] text-[#faf8f0] uppercase flex items-baseline justify-center flex-nowrap"
              style={{
                fontFamily: "'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              <ShimmerText duration={2.5} delay={0.5} className="text-[#faf8f0] pr-2 sm:pr-4">
                DO AT NCS?
              </ShimmerText>
            </h1>
          </div>
        </div>

      </div>

      {/* Parenthetical Subline */}
      <div
        ref={sublineRef}
        className="relative z-10 mt-6 sm:mt-10 md:mt-12 text-center"
      >
        <p
          className="font-['Satoshi',Arial,sans-serif] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/70 font-normal tracking-tight"
          style={{ fontFamily: "'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif" }}
        >
          (and how curious minds turn raw ideas into software)
        </p>
      </div>
    </div>
  )
}
