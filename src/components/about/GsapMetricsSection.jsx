import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Trophy, Users, Code, Calendar, Zap, Sparkles } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const METRICS = [
  {
    id: "years",
    targetValue: 14,
    suffix: "+",
    label: "Years of Excellence",
    telemetry: "time.active(2010..2026)",
    desc: "Over a decade of breeding visionary engineers, tech leads & startup founders.",
    color: "#0ae448",
    icon: Calendar,
  },
  {
    id: "members",
    targetValue: 500,
    suffix: "+",
    label: "Builders & Alumni",
    telemetry: "network.alumni.global()",
    desc: "Thriving worldwide alumni network at Google, Microsoft, Uber, Amazon & top startups.",
    color: "#38bdf8",
    icon: Users,
  },
  {
    id: "hackathons",
    targetValue: 50,
    suffix: "+",
    label: "Hackathon Laurels",
    telemetry: "laurels.podiums.won()",
    desc: "National championships across SIH, ETHIndia, InOut Hacks, HackCBS & beyond.",
    color: "#c084fc",
    icon: Trophy,
  },
  {
    id: "code",
    targetValue: 120,
    suffix: "k+",
    label: "Lines Shipped",
    telemetry: "git.commits.production()",
    desc: "Production code powering campus systems, open source packages, and client web apps.",
    color: "#f59e0b",
    icon: Code,
  },
  {
    id: "student",
    targetValue: 100,
    suffix: "%",
    label: "Student-Driven",
    telemetry: "autonomy.index(1.0)",
    desc: "Zero bureaucracy. Fully student-curated bootcamps, hackathons, and product sprints.",
    color: "#ec4899",
    icon: Zap,
  },
]

export default function GsapMetricsSection() {
  const sectionRef = useRef(null)
  const numberRefs = useRef([])
  const cardRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 1. Entrance animation for the container header
      gsap.fromTo(
        ".gsap-metrics-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      )

      // 2. Count up numbers animation on scroll
      METRICS.forEach((metric, idx) => {
        const el = numberRefs.current[idx]
        if (!el) return

        const counterObj = { val: 0 }

        gsap.to(counterObj, {
          val: metric.targetValue,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            if (el) {
              el.innerText = Math.floor(counterObj.val)
            }
          },
        })
      })

      // 3. Staggered card reveal
      const validCards = cardRefs.current.filter(Boolean)
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full max-w-[1480px] mx-auto py-16 sm:py-24 px-4 select-none z-10"
    >
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none -z-10 blur-[140px] opacity-20 bg-gradient-to-r from-[#0ae448]/20 via-[#38bdf8]/20 to-[#c084fc]/20" />

      {/* Header Container */}
      <div className="gsap-metrics-header flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase bg-white/5 border border-white/10 text-[#0ae448] backdrop-blur-md">
          <Sparkles size={13} className="text-[#0ae448]" />
          TELEMETRY · IMPACT MATRIX
        </div>
        <h2 className="font-['Satoshi'] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase">
          PROVEN IMPACT. BY THE NUMBERS.
        </h2>
        <p className="font-['Satoshi'] text-sm sm:text-base text-white/60 max-w-[620px]">
          Scroll-triggered telemetry reflecting 14+ years of campus engineering,
          continuous shipping, and unbroken community leadership.
        </p>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
        {METRICS.map((metric, idx) => {
          const Icon = metric.icon

          return (
            <div
              key={metric.id}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="group relative p-6 sm:p-7 rounded-[24px] bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden backdrop-blur-md"
            >
              {/* Top Accent Strip */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-75 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, transparent, ${metric.color}, transparent)`,
                }}
              />

              {/* Icon & Telemetry Tag */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className="size-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ color: metric.color }}
                >
                  <Icon size={20} />
                </div>
                <span className="font-mono text-[10.5px] text-white/40 tracking-wider">
                  {metric.telemetry}
                </span>
              </div>

              {/* Big Counter Number */}
              <div className="flex items-baseline gap-1 my-2">
                <span
                  ref={(el) => (numberRefs.current[idx] = el)}
                  className="font-['Satoshi'] font-black text-5xl sm:text-6xl tracking-tight text-white"
                >
                  0
                </span>
                <span
                  className="font-['Satoshi'] font-black text-3xl sm:text-4xl"
                  style={{ color: metric.color }}
                >
                  {metric.suffix}
                </span>
              </div>

              {/* Label & Description */}
              <div className="mt-2 space-y-1.5">
                <h4 className="font-['Satoshi'] font-bold text-base sm:text-lg text-white">
                  {metric.label}
                </h4>
                <p className="font-['Satoshi'] text-xs sm:text-[13px] text-white/55 leading-relaxed">
                  {metric.desc}
                </p>
              </div>

              {/* Bottom Progress Bar */}
              <div className="w-full h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 group-hover:w-full"
                  style={{
                    backgroundColor: metric.color,
                    width: "70%",
                    boxShadow: `0 0 10px ${metric.color}`,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
