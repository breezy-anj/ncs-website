import React, { useEffect, useRef, useState } from "react"
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import PuzzleCube from "../components/ui/puzzle-cube"
import { Shuffle, RotateCcw, Sparkles } from "lucide-react"

export default function Recruitment({ activePage = "Recruitment", onNavigate }) {
  const cubeControls = useRef(null)
  const [isSolvedState, setIsSolvedState] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <div
      className="bg-transparent relative w-full max-w-[1668px] min-h-screen mx-auto flex flex-col items-center pt-[27px] pb-[40px] shrink-0 select-none"
      data-node-id="recruitment-page"
      data-name="Recruitment"
    >
      <div className="content-stretch flex flex-col gap-[60px] items-center w-full max-w-[1518px] px-4 md:px-8">
        {/* Hero Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-10 lg:px-16 pt-8 pb-12 relative gap-10 md:gap-0 min-h-auto md:min-h-[580px]">
          {/* Subtle Ambient Glow Behind Hero */}
          <div className="absolute left-[5%] top-[10%] w-[380px] h-[380px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute right-[10%] top-[15%] w-[420px] h-[420px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

          {/* Left Column: Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start max-w-[680px] z-10"
          >
            {/* Main Heading */}
            <div className="flex flex-col leading-none mb-6 md:mb-8 tracking-normal text-center md:text-left w-full">
              <h1 className="font-['Satoshi',Arial,sans-serif] font-bold text-[48px] sm:text-[100px] lg:text-[160px] text-white tracking-normal leading-[1.1] break-words">
                OOPS!
              </h1>
              <h2 className="font-['Satoshi',Arial,sans-serif] font-bold text-[28px] xs:text-[34px] sm:text-[52px] lg:text-[80px] text-white tracking-normal leading-[1.2] mt-2 break-words">
                <span className="bg-gradient-to-r from-[#2563eb] via-[#ec4899] to-[#3b82f6] bg-clip-text text-transparent font-normal">
                  NOT
                </span>
                <span className="text-white font-normal ml-2 sm:ml-3">
                  STARTED YET.
                </span>
              </h2>
            </div>

            {/* Explanatory Body Copy */}
            <div className="flex flex-col gap-1 sm:gap-1.5 text-[14px] sm:text-[18px] lg:text-[28px] font-['Satoshi',Arial,sans-serif] text-white/60 md:text-white/70 leading-[1.5] tracking-normal text-center md:text-left break-words w-full">
              <p className="font-normal">
                Good things takes time, just like great people.
              </p>
              <p className="font-normal">
                Recruitment at NCS is{" "}
                <span className="text-[#f59e0b] font-normal">
                  Coming Soon!
                </span>
              </p>

              {/* Minimal Line Divider */}
              <div className="w-[48px] sm:w-[68px] h-[1.5px] bg-white/40 my-3 sm:my-4 mx-auto md:mx-0" />

              <p className="font-normal">
                Stay connected to get updated.
              </p>
              <p className="font-normal">
                You can be our next{" "}
                <span className="text-[#3b82f6] font-normal">
                  NCS family member.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Puzzle Cube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="relative flex flex-col items-center justify-center w-full md:w-auto max-w-[420px] sm:max-w-[500px] md:max-w-[560px] lg:max-w-[620px] shrink-0 z-10"
          >
            {/* Ambient Radial Backlight Glow */}
            <div className="absolute inset-0 max-w-[480px] max-h-[480px] m-auto bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-purple-600/25 rounded-full blur-[100px] pointer-events-none" />

            {/* Cube Interactive Container */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <PuzzleCube
                size={480}
                order={3}
                view="iso"
                variant="solid"
                behavior="solve"
                speed={0.8}
                interactive={true}
                showGround={true}
                dark="#10121a"
                glow="#3b82f6"
                accent="#60a5fa"
                metal="#334155"
                controls={(api) => {
                  cubeControls.current = api
                }}
                onSolvedChange={(solved) => setIsSolvedState(solved)}
                className="w-full max-w-[290px] xs:max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              />

              {/* Quick Interactive Control Bar */}
              <div className="mt-2 sm:mt-4 flex items-center gap-2 sm:gap-2.5 z-20">
                <button
                  type="button"
                  onClick={() => cubeControls.current?.scramble()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 text-white/90 hover:text-white text-[12px] sm:text-[13px] font-medium backdrop-blur-md transition-all shadow-md cursor-pointer select-none"
                  title="Scramble the cube"
                >
                  <Shuffle className="size-3.5 text-blue-400" />
                  <span>Scramble</span>
                </button>

                <button
                  type="button"
                  onClick={() => cubeControls.current?.solve()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600/80 hover:bg-blue-600 active:scale-95 border border-blue-400/40 text-white text-[12px] sm:text-[13px] font-medium backdrop-blur-md transition-all shadow-md shadow-blue-600/30 cursor-pointer select-none"
                  title="Auto solve the cube"
                >
                  <Sparkles className="size-3.5 text-amber-300" />
                  <span>Solve</span>
                </button>

                <button
                  type="button"
                  onClick={() => cubeControls.current?.reset()}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 active:scale-95 border border-white/10 text-white/70 hover:text-white text-[12px] sm:text-[13px] font-medium backdrop-blur-md transition-all shadow-sm cursor-pointer select-none"
                  title="Reset to solved state"
                >
                  <RotateCcw className="size-3.5 text-white/60" />
                  <span className="hidden xs:inline">Reset</span>
                </button>
              </div>

              {/* Interaction Hint */}
              <p className="mt-2 text-[11px] sm:text-[12px] font-['Satoshi',Arial,sans-serif] text-white/50 text-center tracking-tight select-none">
                Drag stickers to twist layers • Drag outside to rotate view
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer (includes NIBBLE title, LET'S CONNECT dock, Infinite Team Marquee, and slogan) */}
        <Footer />
      </div>
    </div>
  )
}
