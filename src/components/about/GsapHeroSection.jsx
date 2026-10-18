import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { Play, Pause, RotateCcw, ArrowLeftRight, Copy, Check, Sparkles, Terminal, Code2, Cpu, Compass, Layers } from "lucide-react"
import { ProgrammingIcon, DevelopmentIcon, DesigningIcon, TechnicalIcon } from "./ClubIcons"

const EASING_OPTIONS = [
  { label: "Elastic", value: "elastic.out(1, 0.3)", desc: "Springy bounce & recoil" },
  { label: "Power4", value: "power4.out", desc: "Ultra smooth deceleration" },
  { label: "Back", value: "back.out(2)", desc: "Anticipatory overshoot" },
  { label: "Bounce", value: "bounce.out", desc: "Realistic gravity drops" },
  { label: "Expo", value: "expo.inOut", desc: "Dramatic acceleration & brake" },
]

const CLUBS = [
  {
    id: "prog",
    name: "Programming",
    tag: "ALGORITHMS & LOGIC",
    color: "#0ae448",
    gradient: "from-[#0ae448]/20 to-[#0ae448]/5",
    border: "border-[#0ae448]/40",
    glow: "shadow-[0_0_25px_rgba(10,228,72,0.25)]",
    icon: ProgrammingIcon,
    metric: "98% Opt",
    desc: "Competitive programming, graph theory & performance logic.",
  },
  {
    id: "dev",
    name: "Development",
    tag: "FULL-STACK & CLOUD",
    color: "#38bdf8",
    gradient: "from-[#38bdf8]/20 to-[#38bdf8]/5",
    border: "border-[#38bdf8]/40",
    glow: "shadow-[0_0_25px_rgba(56,189,248,0.25)]",
    icon: DevelopmentIcon,
    metric: "120k+ LOC",
    desc: "Scalable modern web, mobile apps & cloud platforms.",
  },
  {
    id: "des",
    name: "Designing",
    tag: "SPATIAL & KINETIC",
    color: "#c084fc",
    gradient: "from-[#c084fc]/20 to-[#c084fc]/5",
    border: "border-[#c084fc]/40",
    glow: "shadow-[0_0_25px_rgba(192,132,252,0.25)]",
    icon: DesigningIcon,
    metric: "60 FPS",
    desc: "Design systems, 3D graphics & fluid motion aesthetics.",
  },
  {
    id: "tech",
    name: "Technical",
    tag: "AI & INFRASTRUCTURE",
    color: "#f59e0b",
    gradient: "from-[#f59e0b]/20 to-[#f59e0b]/5",
    border: "border-[#f59e0b]/40",
    glow: "shadow-[0_0_25px_rgba(245,158,11,0.25)]",
    icon: TechnicalIcon,
    metric: "99.9% Uptime",
    desc: "Generative AI, machine learning, DevOps & Linux systems.",
  },
]

export default function GsapHeroSection({ onExploreJourney, onExploreDisciplines }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [selectedEase, setSelectedEase] = useState(EASING_OPTIONS[0].value)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [copied, setCopied] = useState(false)
  const [activeClubIndex, setActiveClubIndex] = useState(0)

  const heroRef = useRef(null)
  const title1Ref = useRef(null)
  const title2Ref = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef([])
  const timelineRef = useRef(null)
  const isScrubbingRef = useRef(false)

  // Initialize GSAP Entrance & Timeline Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance staggered reveal of headline
      const introTl = gsap.timeline({ defaults: { ease: "power4.out" } })
      
      introTl
        .fromTo(
          ".gsap-hero-badge",
          { opacity: 0, y: -20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 }
        )
        .fromTo(
          title1Ref.current,
          { opacity: 0, y: 40, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 },
          "-=0.5"
        )
        .fromTo(
          title2Ref.current,
          { opacity: 0, y: 40, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 },
          "-=0.7"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.6"
        )
        .fromTo(
          ".gsap-playground-container",
          { opacity: 0, y: 40, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 1 },
          "-=0.5"
        )

      // 2. Continuous Interactive GSAP Timeline for the 4 club cards
      buildClubTimeline(selectedEase, playbackSpeed)
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Rebuild GSAP timeline when easing or speed changes
  const buildClubTimeline = (easeValue, speed) => {
    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      timeScale: speed,
      onUpdate: () => {
        if (!isScrubbingRef.current && timelineRef.current) {
          setProgress(timelineRef.current.progress())
        }
      },
    })

    const validCards = cardsRef.current.filter(Boolean)
    if (validCards.length > 0) {
      tl.to(validCards, {
        y: (i) => (i % 2 === 0 ? -18 : 18),
        rotationY: (i) => (i % 2 === 0 ? 12 : -12),
        rotationZ: (i) => (i % 2 === 0 ? -4 : 4),
        scale: 1.05,
        stagger: {
          each: 0.16,
          from: "center",
        },
        duration: 2.4,
        ease: easeValue,
      })
    }

    timelineRef.current = tl
    if (!isPlaying) {
      tl.pause()
    }
  }

  // Handle Ease Curve Change
  const handleEaseChange = (ease) => {
    setSelectedEase(ease)
    const currentProgress = timelineRef.current ? timelineRef.current.progress() : 0
    buildClubTimeline(ease, playbackSpeed)
    if (timelineRef.current) {
      timelineRef.current.progress(currentProgress)
      if (!isPlaying) timelineRef.current.pause()
    }
  }

  // Handle Play/Pause
  const togglePlay = () => {
    if (!timelineRef.current) return
    if (isPlaying) {
      timelineRef.current.pause()
      setIsPlaying(false)
    } else {
      timelineRef.current.play()
      setIsPlaying(true)
    }
  }

  // Handle Restart
  const handleRestart = () => {
    if (!timelineRef.current) return
    timelineRef.current.restart()
    setIsPlaying(true)
  }

  // Handle Reverse
  const handleReverse = () => {
    if (!timelineRef.current) return
    timelineRef.current.reversed(!timelineRef.current.reversed())
    setIsPlaying(true)
  }

  // Handle Timeline Scrub Slider
  const handleScrub = (e) => {
    const val = parseFloat(e.target.value)
    setProgress(val)
    if (timelineRef.current) {
      timelineRef.current.progress(val)
    }
  }

  // Handle Speed Multiplier
  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed)
    if (timelineRef.current) {
      timelineRef.current.timeScale(speed)
    }
  }

  // Copy GSAP snippet
  const copyCode = () => {
    const snippet = `// GSAP Runtime v3.15 · Nibble Computer Society
const tl = gsap.timeline({ repeat: -1, yoyo: true });
tl.to(".ncs-club-nodes", {
  y: (i) => (i % 2 === 0 ? -18 : 18),
  rotationY: 12,
  scale: 1.05,
  ease: "${selectedEase}",
  stagger: 0.16,
  duration: ${(2.4 / playbackSpeed).toFixed(1)}
});`
    navigator.clipboard.writeText(snippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      ref={heroRef}
      className="relative w-full max-w-[1480px] mx-auto flex flex-col items-center pt-8 sm:pt-14 pb-16 px-4 select-none z-10"
    >
      {/* Background Neon Aura Radial Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[400px] rounded-full pointer-events-none -z-10 blur-[140px] opacity-25 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0ae448]/30 via-[#38bdf8]/15 to-transparent" />
      <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none -z-10 blur-[130px] opacity-20 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#c084fc]/30 via-transparent to-transparent" />

      {/* Floating Monospace GSAP Badges */}
      <div className="gsap-hero-badge flex flex-wrap items-center justify-center gap-2.5 mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide uppercase bg-[#0ae448]/10 border border-[#0ae448]/30 text-[#0ae448] backdrop-blur-md shadow-[0_0_20px_rgba(10,228,72,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ae448] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ae448]"></span>
          </span>
          GSAP POWERED ARCHITECTURE
        </div>
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wide uppercase bg-white/5 border border-white/10 text-white/70 backdrop-blur-md">
          <Layers size={13} className="text-[#38bdf8]" />
          EST. 2000s · JSSATE
        </div>
        <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wide uppercase bg-white/5 border border-white/10 text-white/70 backdrop-blur-md">
          <Compass size={13} className="text-[#c084fc]" />
          4 CORE DISCIPLINES
        </div>
      </div>

      {/* Hero Headline with Kinetic Split Spans */}
      <div className="text-center max-w-[1100px] mx-auto flex flex-col items-center space-y-2 sm:space-y-3">
        <h1
          ref={title1Ref}
          className="font-['Satoshi'] font-black text-4xl sm:text-6xl md:text-7xl lg:text-[84px] tracking-tight leading-[0.95] uppercase text-white"
        >
          WHERE CODE MEETS MOTION
        </h1>
        <h1
          ref={title2Ref}
          className="font-['Satoshi'] font-black text-4xl sm:text-6xl md:text-7xl lg:text-[84px] tracking-tight leading-[0.95] uppercase bg-gradient-to-r from-[#0ae448] via-[#38bdf8] to-[#c084fc] bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(10,228,72,0.3)]"
        >
          WE ANIMATE THE FUTURE
        </h1>
      </div>

      {/* Subhead Manifesto */}
      <p
        ref={subtitleRef}
        className="font-['Satoshi'] text-base sm:text-lg md:text-xl text-white/70 max-w-[760px] text-center mt-6 leading-relaxed font-normal"
      >
        <span className="text-white font-medium">Nibble Computer Society</span> is
        the premier student-led technical powerhouse at JSSATE. We bridge the gap between
        raw curiosity and production-grade engineering through high-velocity sprints,
        creative technology, and radical open collaboration.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-8">
        <button
          onClick={onExploreDisciplines}
          className="group relative px-6 sm:px-7 py-3 rounded-full text-sm sm:text-base font-semibold font-['Satoshi'] text-black bg-[#0ae448] hover:bg-[#00df89] transition-all duration-300 shadow-[0_0_25px_rgba(10,228,72,0.4)] hover:shadow-[0_0_35px_rgba(10,228,72,0.6)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
        >
          <Sparkles size={16} className="text-black" />
          <span>Explore 4 Disciplines</span>
        </button>
        <button
          onClick={onExploreJourney}
          className="group px-6 sm:px-7 py-3 rounded-full text-sm sm:text-base font-semibold font-['Satoshi'] text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 backdrop-blur-md"
        >
          <Code2 size={16} className="text-[#38bdf8]" />
          <span>The Transformation Journey</span>
        </button>
      </div>

      {/* ==============================================================
          THE SIGNATURE GSAP INTERACTIVE TIMELINE PLAYGROUND WIDGET
          Inspired directly by gsap.com landing page hero scrubber!
      ============================================================== */}
      <div className="gsap-playground-container w-full max-w-[1280px] mt-12 sm:mt-16 rounded-[28px] sm:rounded-[36px] p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/15 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        <div className="w-full bg-[#090b10]/95 rounded-[26px] sm:rounded-[34px] p-4 sm:p-7 md:p-8 flex flex-col space-y-6">
          
          {/* Header Bar: GSAP Controller Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="size-3 rounded-full bg-[#0ae448] shadow-[0_0_10px_#0ae448]" />
              <div className="flex flex-col">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                  GSAP Interactive Playhead v3.15
                </span>
                <span className="text-[11px] font-mono text-white/50">
                  Target: .ncs-club-nodes · Scrub, tweak easings & observe live physics
                </span>
              </div>
            </div>

            {/* Live Status Pill */}
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase ${isPlaying ? "bg-[#0ae448]/20 text-[#0ae448] border border-[#0ae448]/40" : "bg-amber-500/20 text-amber-400 border border-amber-500/40"}`}>
                {isPlaying ? "STATUS: PLAYING" : "STATUS: PAUSED"}
              </span>
              <span className="text-xs font-mono text-white/60">
                {(progress * 2.4).toFixed(2)}s / 2.40s
              </span>
            </div>
          </div>

          {/* Scrubber Range Slider & Playback Controls */}
          <div className="flex flex-col space-y-3.5 bg-black/40 p-4 sm:p-5 rounded-2xl border border-white/5">
            {/* Timeline Progress Bar */}
            <div className="relative w-full flex items-center">
              <input
                type="range"
                min="0"
                max="1"
                step="0.001"
                value={progress}
                onMouseDown={() => {
                  isScrubbingRef.current = true
                  if (timelineRef.current) timelineRef.current.pause()
                }}
                onMouseUp={() => {
                  isScrubbingRef.current = false
                  if (isPlaying && timelineRef.current) timelineRef.current.play()
                }}
                onChange={handleScrub}
                className="w-full h-2.5 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#0ae448] focus:outline-none"
                style={{
                  background: `linear-gradient(to right, #0ae448 0%, #38bdf8 ${progress * 100}%, rgba(255,255,255,0.12) ${progress * 100}%, rgba(255,255,255,0.12) 100%)`,
                }}
              />
            </div>

            {/* Controller Buttons Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              {/* Play / Pause / Restart / Reverse */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                >
                  {isPlaying ? <Pause size={14} className="text-[#0ae448]" /> : <Play size={14} className="text-[#0ae448]" />}
                  <span>{isPlaying ? "Pause" : "Play"}</span>
                </button>
                <button
                  type="button"
                  onClick={handleRestart}
                  className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                  title="Restart Timeline"
                >
                  <RotateCcw size={13} className="text-[#38bdf8]" />
                  <span>Restart</span>
                </button>
                <button
                  type="button"
                  onClick={handleReverse}
                  className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                  title="Reverse Playback"
                >
                  <ArrowLeftRight size={13} className="text-[#c084fc]" />
                  <span>Reverse</span>
                </button>
              </div>

              {/* Speed Multiplier */}
              <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10">
                <span className="text-[11px] font-mono text-white/50 px-2">Speed:</span>
                {[0.5, 1, 2].map((spd) => (
                  <button
                    key={spd}
                    type="button"
                    onClick={() => handleSpeedChange(spd)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${playbackSpeed === spd ? "bg-[#0ae448] text-black font-bold shadow-md" : "text-white/70 hover:text-white"}`}
                  >
                    {spd}x
                  </button>
                ))}
              </div>

              {/* Easing Preset Selector Chips */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-white/50 px-1">Ease:</span>
                {EASING_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleEaseChange(opt.value)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${selectedEase === opt.value ? "bg-[#38bdf8] text-black font-bold shadow-[0_0_12px_rgba(56,189,248,0.5)]" : "bg-white/5 hover:bg-white/15 text-white/75 border border-white/10"}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Live Interactive Stage: The 4 Core Club Cards */}
          <div className="relative w-full py-4 sm:py-6 overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 px-3 sm:px-4">
              {CLUBS.map((club, idx) => {
                const Icon = club.icon
                const isActive = activeClubIndex === idx

                return (
                  <div
                    key={club.id}
                    ref={(el) => (cardsRef.current[idx] = el)}
                    onClick={() => setActiveClubIndex(idx)}
                    className={`ncs-club-nodes relative group p-5 rounded-2xl bg-gradient-to-br ${club.gradient} border ${club.border} backdrop-blur-md transition-all duration-300 cursor-pointer overflow-hidden ${isActive ? "ring-2 ring-white/50 scale-[1.02]" : "hover:scale-[1.02]"}`}
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "800px",
                    }}
                  >
                    {/* Corner Accent Glow */}
                    <div
                      className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-40 pointer-events-none"
                      style={{ background: club.color }}
                    />

                    {/* Top Row: Icon + Metric */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="p-2.5 rounded-xl bg-black/50 border border-white/10 text-white flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ color: club.color }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-black/60 border border-white/15 text-white/90">
                        {club.metric}
                      </span>
                    </div>

                    {/* Tag + Club Name */}
                    <div className="space-y-1 mb-2.5">
                      <span
                        className="text-[10.5px] font-mono tracking-wider uppercase font-semibold"
                        style={{ color: club.color }}
                      >
                        {club.tag}
                      </span>
                      <h3 className="font-['Satoshi'] font-bold text-xl sm:text-2xl text-white tracking-tight">
                        {club.name}
                      </h3>
                    </div>

                    {/* Brief description */}
                    <p className="font-['Satoshi'] text-xs sm:text-[13px] text-white/65 leading-relaxed">
                      {club.desc}
                    </p>

                    {/* Bottom active marker */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/40">
                      <span>id: ncs_{club.id}</span>
                      <span className="group-hover:text-white transition-colors">
                        Click to inspect &rarr;
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Live Dynamic GSAP Code Console */}
          <div className="w-full bg-[#050608] rounded-2xl p-4 sm:p-5 border border-white/10 font-mono text-xs sm:text-[13px] text-white/80 relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-white/50 text-[11px]">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-[#0ae448]" />
                <span className="text-white/80">gsap-script-runtime.js</span>
                <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-[#0ae448]">Live</span>
              </div>
              <button
                type="button"
                onClick={copyCode}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                {copied ? <Check size={13} className="text-[#0ae448]" /> : <Copy size={13} />}
                <span>{copied ? "Copied!" : "Copy Snippet"}</span>
              </button>
            </div>

            <pre className="overflow-x-auto text-left leading-relaxed text-[#a3e635]">
              <code>
                <span className="text-white/40">// GSAP Engine v3.15 · Nibble Computer Society Live Controller</span>{"\n"}
                <span className="text-[#c084fc]">const</span> tl = gsap.<span className="text-[#38bdf8]">timeline</span>(&#123; repeat: -1, yoyo: <span className="text-[#f59e0b]">true</span> &#125;);{"\n"}
                tl.<span className="text-[#38bdf8]">to</span>(<span className="text-[#fbbf24]">&quot;.ncs-club-nodes&quot;</span>, &#123;{"\n"}
                {"  "}y: (i) =&gt; (i % 2 === 0 ? -18 : 18),{"\n"}
                {"  "}rotationY: (i) =&gt; (i % 2 === 0 ? 12 : -12),{"\n"}
                {"  "}scale: <span className="text-[#f59e0b]">1.05</span>,{"\n"}
                {"  "}ease: <span className="text-[#fbbf24]">&quot;{selectedEase}&quot;</span>,{"\n"}
                {"  "}stagger: <span className="text-[#f59e0b]">0.16</span>,{"\n"}
                {"  "}duration: <span className="text-[#f59e0b]">{(2.4 / playbackSpeed).toFixed(2)}</span>{"\n"}
                &#125;);
              </code>
            </pre>
          </div>

        </div>
      </div>
    </section>
  )
}
