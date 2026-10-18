import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Sparkles } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const JOURNEY_STEPS = [
  {
    number: "01",
    tag: "THE SPARK",
    title: "Curiosity Into Creation",
    quote:
      "Every great journey begins with a question. At NCS, students explore technology, discover their interests, and find the confidence to turn curiosity into creation.",
    accent: "#0ae448",
  },
  {
    number: "02",
    tag: "THE DISCIPLINE",
    title: "Professional Mindset",
    quote:
      "Deadlines, responsibilities, teamwork, and accountability become part of the journey. We help students develop the mindset that the professional world expects.",
    accent: "#38bdf8",
  },
  {
    number: "03",
    tag: "THE CRAFT",
    title: "Hands-On Experience",
    quote:
      "From writing the first line of code to designing an interface or developing a complete project, we turn learning into hands-on experience and ideas into something real.",
    accent: "#c084fc",
  },
  {
    number: "04",
    tag: "THE COMMUNITY",
    title: "Growing Together",
    quote:
      "Behind every project, hackathon, and breakthrough are people who challenge, support, and inspire each other. At NCS, we grow together and celebrate every win together.",
    accent: "#f59e0b",
  },
  {
    number: "05",
    tag: "THE IMPACT",
    title: "Voice & Communication",
    quote:
      "Great minds need more than great ideas. Through discussions, presentations, and shared experiences, students learn to communicate confidently and make their ideas heard.",
    accent: "#ec4899",
  },
  {
    number: "06",
    tag: "THE DESTINATION",
    title: "Who We Become",
    quote:
      "We come together as students with potential and grow into programmers, developers, designers, and professionals ready to take on new challenges. Because NCS isn't just about what we build — it's about who we become.",
    accent: "#0ae448",
  },
]

export default function GsapHorizontalTextScroll() {
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const progressBarRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    // Wait for page layout and Framer Motion transition to settle
    const timer = setTimeout(() => {
      const container = containerRef.current
      const track = trackRef.current
      if (!container || !track) return

      // Connect Lenis smooth scroll if available
      if (window.lenis) {
        window.lenis.on("scroll", ScrollTrigger.update)
      }

      // Calculate total horizontal scroll distance
      const getScrollAmount = () => {
        return -(track.scrollWidth - window.innerWidth + window.innerWidth * 0.1)
      }

      const ctx = gsap.context(() => {
        const tween = gsap.to(track, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${track.scrollWidth - window.innerWidth + 600}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              // Update progress bar
              if (progressBarRef.current) {
                progressBarRef.current.style.transform = `scaleX(${self.progress})`
              }
              // Calculate active step index
              const stepIndex = Math.min(
                JOURNEY_STEPS.length - 1,
                Math.floor(self.progress * JOURNEY_STEPS.length)
              )
              setActiveStep(stepIndex)
            },
          },
        })
      }, container)

      ScrollTrigger.refresh()

      return () => {
        ctx.revert()
      }
    }, 450)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      ref={containerRef}
      className="bg-transparent relative w-full h-screen overflow-hidden flex flex-col justify-between py-6 sm:py-8 select-none z-10"
    >
      {/* Top Header Bar inside pinned viewport */}
      <div className="w-full max-w-[1550px] mx-auto px-6 sm:px-10 flex items-center justify-between z-20 pt-16 sm:pt-20">
        <div className="flex items-center gap-2.5">
          <span className="size-2 rounded-full bg-[#0ae448] animate-pulse shadow-[0_0_8px_#0ae448]" />
          <span className="font-mono text-xs uppercase tracking-widest text-white/60">
            THE NCS JOURNEY &middot; SCROLL TO DISCOVER
          </span>
        </div>

        {/* Live Step Counter */}
        <div className="font-mono text-xs tracking-wider text-white/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
          <span className="text-[#0ae448] font-bold">
            {JOURNEY_STEPS[activeStep].number}
          </span>
          <span className="text-white/40"> / 06</span>
        </div>
      </div>

      {/* Main Horizontal Track */}
      <div className="relative w-full overflow-visible my-auto">
        <div
          ref={trackRef}
          className="flex flex-row items-center will-change-transform pl-[6vw] sm:pl-[8vw] pr-[15vw] space-x-8 sm:space-x-12 md:space-x-16"
        >
          {JOURNEY_STEPS.map((step, idx) => {
            const isActive = activeStep === idx

            return (
              <div
                key={step.number}
                className="w-[85vw] sm:w-[75vw] md:w-[65vw] lg:w-[55vw] xl:w-[48vw] shrink-0"
              >
                <div
                  className={`group relative p-8 sm:p-12 md:p-16 rounded-[28px] sm:rounded-[36px] bg-white/[0.03] hover:bg-white/[0.05] border transition-all duration-500 backdrop-blur-md flex flex-col justify-between ${
                    isActive
                      ? "border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.6)] scale-[1.01]"
                      : "border-white/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  {/* Top Header Row of the Panel */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono text-xs font-bold tracking-widest px-3 py-1 rounded-full border"
                        style={{
                          color: step.accent,
                          borderColor: `${step.accent}40`,
                          backgroundColor: `${step.accent}12`,
                        }}
                      >
                        {step.tag}
                      </span>
                      <h4 className="font-['Satoshi'] font-bold text-sm sm:text-base text-white/75">
                        {step.title}
                      </h4>
                    </div>

                    <span
                      className="font-mono text-2xl sm:text-3xl font-black"
                      style={{ color: step.accent }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Big Serif Quote (Matching the user's images in Playfair Display) */}
                  <p
                    className="font-['Playfair_Display',Georgia,serif] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.3] text-[#faf8f0] font-normal tracking-tight"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    &ldquo;{step.quote}&rdquo;
                  </p>

                  {/* Bottom Accent line */}
                  <div className="w-full h-1 bg-white/10 rounded-full mt-8 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        backgroundColor: step.accent,
                        width: isActive ? "100%" : "25%",
                        boxShadow: `0 0 10px ${step.accent}`,
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Progress Bar & Navigation Prompt */}
      <div className="w-full max-w-[1550px] mx-auto px-6 sm:px-10 z-20 pb-4 sm:pb-6">
        <div className="flex flex-col space-y-3">
          {/* Progress Bar Track */}
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="w-full h-full bg-[#0ae448] origin-left scale-x-0 shadow-[0_0_12px_#0ae448]"
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-white/40">
            <span>Scroll vertically to advance journey</span>
            <div className="flex items-center gap-1.5 text-[#0ae448]">
              <span>Continue scrolling</span>
              <ArrowRight size={13} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
