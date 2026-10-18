import React, { useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Terminal, ArrowRight, FolderGit2, UserPlus, Mail, Sparkles } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function GsapCtaSection() {
  const navigate = useNavigate()
  const sectionRef = useRef(null)
  const buttonsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Connect to Lenis if available
      if (window.lenis) {
        window.lenis.on("scroll", ScrollTrigger.update)
      }

      gsap.fromTo(
        ".gsap-cta-box",
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
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

  const handleNavigate = (path) => {
    if (window.lenis) {
      window.lenis.scrollTo(0)
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    navigate(path)
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full max-w-[1480px] mx-auto py-16 sm:py-24 px-4 select-none z-10"
    >
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full pointer-events-none -z-10 blur-[150px] opacity-25 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0ae448]/30 via-[#38bdf8]/20 to-transparent" />

      {/* Main Container */}
      <div className="gsap-cta-box w-full rounded-[30px] sm:rounded-[38px] p-1 bg-gradient-to-b from-white/25 via-white/5 to-white/10 border border-white/15 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        <div className="w-full bg-[#08090e]/95 rounded-[28px] sm:rounded-[36px] p-7 sm:p-12 md:p-16 flex flex-col items-center text-center space-y-8">
          
          {/* Monospace Terminal Status */}
          <div className="w-full max-w-[700px] bg-black/60 rounded-2xl p-4 sm:p-5 border border-white/10 font-mono text-left text-xs sm:text-[13px] text-white/80 space-y-1.5 shadow-inner">
            <div className="flex items-center gap-2 pb-2 mb-2 border-b border-white/10 text-white/40 text-[11px]">
              <Terminal size={14} className="text-[#0ae448]" />
              <span>ncs-status-telemetry.sh</span>
              <span className="ml-auto text-[#0ae448]">All Systems Operational</span>
            </div>
            <p className="text-white/60">
              $ <span className="text-[#38bdf8]">ncs</span>.connect(<span className="text-[#fbbf24]">&quot;future&quot;</span>)
            </p>
            <p className="text-[#0ae448]">
              &gt; [OK] 4 core disciplines synchronized: Programming, Dev, Design, Tech.
            </p>
            <p className="text-white/70">
              &gt; [OK] 500+ active builders &amp; global alumni network ready.
            </p>
            <p className="text-[#c084fc]">
              &gt; [PROMPT] The stage is set. Will you build with us?
            </p>
          </div>

          {/* Heading + Slogan */}
          <div className="max-w-[850px] space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase bg-[#0ae448]/10 border border-[#0ae448]/30 text-[#0ae448] backdrop-blur-md">
              <Sparkles size={13} className="text-[#0ae448]" />
              READY TO ANIMATE THE FUTURE?
            </div>
            <h2 className="font-['Satoshi'] font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[1.05]">
              BECOME PART OF THE STORY
            </h2>
            <p className="font-['Satoshi'] text-base sm:text-lg text-white/70 max-w-[650px] mx-auto leading-relaxed">
              Whether you are an aspiring programmer, an ambitious builder, an
              imaginative designer, or an alumni looking to reconnect — your place in
              our ecosystem is waiting.
            </p>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => handleNavigate("/project")}
              className="px-7 py-3.5 rounded-full font-['Satoshi'] font-bold text-sm sm:text-base text-black bg-[#0ae448] hover:bg-[#00df89] transition-all duration-300 shadow-[0_0_25px_rgba(10,228,72,0.4)] hover:shadow-[0_0_35px_rgba(10,228,72,0.65)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <FolderGit2 size={17} className="text-black" />
              <span>Explore Projects</span>
              <ArrowRight size={16} className="text-black" />
            </button>

            <button
              type="button"
              onClick={() => handleNavigate("/recruitment")}
              className="px-7 py-3.5 rounded-full font-['Satoshi'] font-bold text-sm sm:text-base text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 backdrop-blur-md"
            >
              <UserPlus size={17} className="text-[#38bdf8]" />
              <span>Join Recruitment</span>
            </button>

            <button
              type="button"
              onClick={() => handleNavigate("/contact")}
              className="px-6 py-3.5 rounded-full font-['Satoshi'] font-semibold text-sm sm:text-base text-white/80 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Mail size={16} className="text-[#c084fc]" />
              <span>Contact Us</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
