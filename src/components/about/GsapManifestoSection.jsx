import React, { useState, useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Zap, Target, Flame, Users, Sparkles, Activity } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const TENETS = [
  {
    id: "velocity",
    title: "Velocity",
    subtitle: "SHIP AT THE SPEED OF THOUGHT",
    color: "#0ae448",
    icon: Zap,
    description:
      "We believe momentum is everything. Rather than spending months in theoretical debate, we prototype rapidly, deploy iteratively, and pressure-test ideas in 48-hour hackathon sprints.",
    principle: "Working code trumps endless slide decks. Every single time.",
    easeSetting: "power4.out",
    durationVal: 1.2,
  },
  {
    id: "precision",
    title: "Precision",
    subtitle: "UNCOMPROMISING ARCHITECTURAL RIGOR",
    color: "#38bdf8",
    icon: Target,
    description:
      "Velocity without precision is chaos. We write modular, well-tested code, design resilient distributed architectures, and treat documentation and performance profiling with deep respect.",
    principle: "Code should be written for humans first, and compilers second.",
    easeSetting: "expo.out",
    durationVal: 1.6,
  },
  {
    id: "imagination",
    title: "Imagination",
    subtitle: "REJECT DIGITAL MONOTONY",
    color: "#c084fc",
    icon: Flame,
    description:
      "The web doesn't need another generic boilerplate. We embrace spatial 3D canvases, fluid kinetic typography, bespoke micro-interactions, and visual storytelling that evokes genuine awe.",
    principle: "Aesthetics and high performance are not mutually exclusive.",
    easeSetting: "elastic.out(1.2, 0.3)",
    durationVal: 2.0,
  },
  {
    id: "synergy",
    title: "Synergy",
    subtitle: "THE UNBROKEN CHAIN OF MENTORSHIP",
    color: "#f59e0b",
    icon: Users,
    description:
      "The true secret of NCS is radical peer-to-peer mentorship. Seniors invest deeply into first-years, demystifying the industry, running mock interviews, and sharing the unspoken playbook.",
    principle: "You don't truly understand a concept until you can teach it to someone else.",
    easeSetting: "back.out(2)",
    durationVal: 1.4,
  },
]

export default function GsapManifestoSection() {
  const [activeTenetId, setActiveTenetId] = useState(TENETS[0].id)
  const sectionRef = useRef(null)
  const visualizerBoxRef = useRef(null)
  const animBallRef = useRef(null)

  const activeTenet = TENETS.find((t) => t.id === activeTenetId) || TENETS[0]

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        ".gsap-manifesto-header",
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Trigger interactive visualizer animation when active tenet changes
  useEffect(() => {
    if (animBallRef.current) {
      gsap.fromTo(
        animBallRef.current,
        { scale: 0.4, x: -120, opacity: 0 },
        {
          scale: 1,
          x: 0,
          opacity: 1,
          duration: activeTenet.durationVal,
          ease: activeTenet.easeSetting,
        }
      )
    }
  }, [activeTenetId])

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative w-full max-w-[1480px] mx-auto py-16 sm:py-24 px-4 select-none z-10"
    >
      {/* Background glow accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none -z-10 blur-[160px] opacity-20 transition-colors duration-700"
        style={{
          background: `radial-gradient(circle, ${activeTenet.color} 0%, transparent 70%)`,
        }}
      />

      {/* Header Container */}
      <div className="gsap-manifesto-header flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase bg-white/5 border border-white/10 text-white/80 backdrop-blur-md">
          <Sparkles size={13} style={{ color: activeTenet.color }} />
          OUR CORE ETHOS
        </div>
        <h2 className="font-['Satoshi'] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase">
          THE NCS MANIFESTO
        </h2>
        <p className="font-['Satoshi'] text-sm sm:text-base text-white/60 max-w-[620px]">
          Four unyielding principles that guide how we learn, code, design,
          and collaborate every day.
        </p>
      </div>

      {/* 4 Tenets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
        {TENETS.map((tenet) => {
          const isSelected = activeTenetId === tenet.id
          const Icon = tenet.icon

          return (
            <div
              key={tenet.id}
              onClick={() => setActiveTenetId(tenet.id)}
              className={`group relative p-6 sm:p-7 rounded-[26px] border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden backdrop-blur-xl ${
                isSelected
                  ? "bg-white/[0.08] scale-[1.02] shadow-2xl"
                  : "bg-white/[0.03] hover:bg-white/[0.06] border-white/10"
              }`}
              style={{
                borderColor: isSelected ? `${tenet.color}70` : undefined,
                boxShadow: isSelected ? `0 10px 30px ${tenet.color}25` : undefined,
              }}
            >
              {/* Corner Glow */}
              <div
                className="absolute -top-10 -right-10 size-24 rounded-full blur-2xl opacity-30 pointer-events-none"
                style={{ backgroundColor: tenet.color }}
              />

              {/* Icon + Subtitle */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="size-11 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ color: tenet.color }}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    className="font-mono text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border"
                    style={{
                      color: tenet.color,
                      borderColor: `${tenet.color}30`,
                      backgroundColor: `${tenet.color}10`,
                    }}
                  >
                    {tenet.easeSetting}
                  </span>
                </div>

                <div className="space-y-1 mb-3">
                  <span className="font-mono text-[10.5px] text-white/40 tracking-wider">
                    {tenet.subtitle}
                  </span>
                  <h3 className="font-['Satoshi'] font-black text-2xl sm:text-3xl text-white tracking-tight">
                    {tenet.title}
                  </h3>
                </div>

                <p className="font-['Satoshi'] text-xs sm:text-[13.5px] text-white/65 leading-relaxed mb-4">
                  {tenet.description}
                </p>
              </div>

              {/* Bottom Axiom */}
              <div className="pt-3 border-t border-white/10">
                <p
                  className="font-['Satoshi'] text-xs font-medium italic"
                  style={{ color: tenet.color }}
                >
                  &ldquo;{tenet.principle}&rdquo;
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Interactive GSAP Motion Curve Visualizer */}
      <div
        ref={visualizerBoxRef}
        className="w-full rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 bg-[#090b10] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4">
          <div
            className="size-12 rounded-2xl flex items-center justify-center shrink-0 border"
            style={{
              borderColor: `${activeTenet.color}40`,
              backgroundColor: `${activeTenet.color}15`,
              color: activeTenet.color,
            }}
          >
            <Activity size={24} />
          </div>
          <div className="space-y-0.5 text-left">
            <span className="font-mono text-xs uppercase tracking-wider text-white/40">
              Interactive GSAP Physics Tester
            </span>
            <h4 className="font-['Satoshi'] font-bold text-lg text-white">
              Visualizing &quot;{activeTenet.title}&quot; Dynamics:{" "}
              <span style={{ color: activeTenet.color }}>{activeTenet.easeSetting}</span>
            </h4>
            <p className="font-['Satoshi'] text-xs text-white/60">
              Click any manifesto card above to inspect how differing GSAP velocity curves animate the visual node.
            </p>
          </div>
        </div>

        {/* Live Animating Node */}
        <div className="relative w-full md:w-[280px] h-[70px] bg-black/60 rounded-xl border border-white/10 flex items-center justify-center px-6 overflow-hidden">
          <div
            ref={animBallRef}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold text-black shadow-lg"
            style={{
              backgroundColor: activeTenet.color,
              boxShadow: `0 0 20px ${activeTenet.color}`,
            }}
          >
            <Sparkles size={13} className="text-black" />
            <span>{activeTenet.title} · {activeTenet.durationVal}s</span>
          </div>
        </div>
      </div>
    </section>
  )
}
