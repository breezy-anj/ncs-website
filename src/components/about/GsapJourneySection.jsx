import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Compass, ShieldCheck, Hammer, HeartHandshake, Mic2, Award, Sparkles } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const MILESTONES = [
  {
    step: "01",
    phase: "PHASE_01 // INCEPTION",
    title: "Curiosity Into Creation",
    subtitle: "Every extraordinary journey begins with an honest question.",
    desc: "At NCS, first-year students explore diverse technologies, break away from cookie-cutter syllabi, and gain the self-belief required to write their very first line of code or design their initial wireframe.",
    icon: Compass,
    color: "#0ae448",
    takeaway: "Cultivating uninhibited curiosity and fearless experimentation.",
  },
  {
    step: "02",
    phase: "PHASE_02 // CRAFT",
    title: "Professional Mindset",
    subtitle: "From casual hobbyist to disciplined software craftsman.",
    desc: "Sprint deadlines, architecture debates, code reviews, and shared accountability become second nature. We instill the rigorous professional standard expected by premier engineering organizations globally.",
    icon: ShieldCheck,
    color: "#38bdf8",
    takeaway: "Clean code, git hygiene, test coverage, and documentation rigor.",
  },
  {
    step: "03",
    phase: "PHASE_03 // EXECUTION",
    title: "Hands-On Experience",
    subtitle: "Theory evaporates; real shipping experience endures.",
    desc: "From deploying live microservices to creating kinetic design systems and shipping full-stack products used by real humans. We turn passive tutorials into active, high-pressure execution.",
    icon: Hammer,
    color: "#c084fc",
    takeaway: "Building high-throughput web apps, ML models, and interactive tools.",
  },
  {
    step: "04",
    phase: "PHASE_04 // COHESION",
    title: "Growing Together",
    subtitle: "Individual talent sparks; cohesive teams build empires.",
    desc: "Behind every hackathon trophy and late-night production fix are teammates who challenge, mentor, and elevate one another. At NCS, we celebrate every win together and learn collectively from every failure.",
    icon: HeartHandshake,
    color: "#f59e0b",
    takeaway: "Uncompromising peer mentorship across all four college years.",
  },
  {
    step: "05",
    phase: "PHASE_05 // INFLUENCE",
    title: "Voice & Communication",
    subtitle: "Brilliant engineering demands persuasive storytelling.",
    desc: "Great minds need more than great code. Through tech symposiums, public workshops, project presentations, and design critiques, members learn to articulate visions and inspire stakeholders.",
    icon: Mic2,
    color: "#ec4899",
    takeaway: "Clear technical writing, public speaking, and architectural pitch.",
  },
  {
    step: "06",
    phase: "PHASE_06 // MASTERY",
    title: "Who We Become",
    subtitle: "The destination isn't what we build — it's who we become.",
    desc: "We enter as curious students with untapped potential and graduate as seasoned engineers, visionary designers, and empathetic leaders equipped to solve humanity's hardest technical problems.",
    icon: Award,
    color: "#0ae448",
    takeaway: "Alumni impacting global technology at unprecedented scale.",
  },
]

export default function GsapJourneySection() {
  const sectionRef = useRef(null)
  const lineProgressRef = useRef(null)
  const milestoneRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 1. Header entrance
      gsap.fromTo(
        ".gsap-journey-header",
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

      // 2. Vertical Timeline Progress Line scrub
      if (lineProgressRef.current) {
        gsap.fromTo(
          lineProgressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 85%",
              scrub: 0.5,
            },
          }
        )
      }

      // 3. Staggered reveal for each milestone card
      milestoneRefs.current.forEach((card, idx) => {
        if (!card) return
        const isEven = idx % 2 === 0

        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: isEven ? -40 : 40,
            scale: 0.94,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative w-full max-w-[1480px] mx-auto py-16 sm:py-24 px-4 select-none z-10"
    >
      {/* Background glow accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none -z-10 blur-[160px] opacity-20 bg-gradient-to-b from-[#0ae448]/15 via-[#38bdf8]/15 to-transparent" />

      {/* Header Container */}
      <div className="gsap-journey-header flex flex-col items-center text-center space-y-3 mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase bg-white/5 border border-white/10 text-[#0ae448] backdrop-blur-md">
          <Sparkles size={13} className="text-[#0ae448]" />
          THE TRANSFORMATION ENGINE
        </div>
        <h2 className="font-['Satoshi'] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase">
          HOW WE BUILD BUILDERS
        </h2>
        <p className="font-['Satoshi'] text-sm sm:text-base text-white/60 max-w-[640px]">
          The 6-stage evolutionary arc of a student at NCS. From writing their first
          loop to deploying global platforms and leading transformative teams.
        </p>
      </div>

      {/* Timeline Structure */}
      <div className="relative w-full max-w-[1200px] mx-auto">
        {/* Central Vertical Track Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-white/10 z-0">
          <div
            ref={lineProgressRef}
            className="w-full h-full origin-top"
            style={{
              background:
                "linear-gradient(180deg, #0ae448 0%, #38bdf8 35%, #c084fc 70%, #f59e0b 100%)",
              boxShadow: "0 0 15px rgba(10,228,72,0.6)",
            }}
          />
        </div>

        {/* Milestones List */}
        <div className="flex flex-col space-y-8 sm:space-y-12">
          {MILESTONES.map((item, idx) => {
            const isEven = idx % 2 === 0
            const Icon = item.icon

            return (
              <div
                key={item.step}
                ref={(el) => (milestoneRefs.current[idx] = el)}
                className={`relative flex flex-col md:flex-row items-center w-full ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Spacer Half */}
                <div className="hidden md:block w-1/2" />

                {/* Center Node Beacon (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 size-11 rounded-full items-center justify-center bg-[#090b10] border-2 z-10 shadow-lg"
                  style={{ borderColor: item.color }}
                >
                  <span
                    className="font-mono text-xs font-bold"
                    style={{ color: item.color }}
                  >
                    {item.step}
                  </span>
                </div>

                {/* Milestone Content Card */}
                <div
                  className={`w-full md:w-1/2 ${
                    isEven ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"
                  }`}
                >
                  <div className="group relative p-6 sm:p-8 rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1 backdrop-blur-xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.6)] overflow-hidden">
                    {/* Top neon line accent */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2.5px] opacity-75 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                      }}
                    />

                    {/* Header Row: Phase Tag + Mobile Step Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className="font-mono text-[11px] font-bold tracking-wider uppercase"
                        style={{ color: item.color }}
                      >
                        {item.phase}
                      </span>
                      <div className="md:hidden size-8 rounded-full flex items-center justify-center bg-black/60 border text-xs font-mono font-bold"
                        style={{ borderColor: item.color, color: item.color }}
                      >
                        {item.step}
                      </div>
                    </div>

                    {/* Title + Subtitle */}
                    <div className="space-y-1 mb-3">
                      <h3 className="font-['Satoshi'] font-black text-2xl sm:text-3xl text-white tracking-tight">
                        {item.title}
                      </h3>
                      <p className="font-['Satoshi'] text-xs sm:text-sm text-white/50 italic">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-['Satoshi'] text-sm text-white/70 leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    {/* Takeaway Pill */}
                    <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-white/60">
                      <Icon className="w-4 h-4 shrink-0" style={{ color: item.color }} />
                      <span className="truncate">{item.takeaway}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
