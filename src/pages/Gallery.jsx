import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { Sparkles, Folder } from "lucide-react"
import { InteractiveFolderGallery } from "../components/ui/interactive-folder-gallery"
import Footer from "../components/Footer"

export default function Gallery({ activePage = "Gallery", onNavigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <div
      className="bg-transparent relative w-full max-w-[1668px] min-h-screen mx-auto flex flex-col items-center pt-2 sm:pt-4 md:pt-6 pb-[40px] shrink-0 overflow-hidden select-none"
      data-node-id="gallery-page"
      data-name="Gallery"
    >
      <div className="content-stretch flex flex-col gap-10 sm:gap-14 md:gap-[50px] items-center w-full max-w-[1518px] px-4 md:px-8">
        {/* Hero Header */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6 w-full max-w-[1280px] pt-4 sm:pt-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white/80 text-xs sm:text-sm font-['Satoshi',Arial,sans-serif] tracking-wider uppercase backdrop-blur-md"
          >
            <Sparkles size={14} className="text-cyan-400" />
            <span>Interactive Event Archives</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Satoshi',Arial,sans-serif] font-black text-[38px] sm:text-[64px] md:text-[84px] lg:text-[96px] leading-[1.02] tracking-tight text-transparent bg-clip-text select-none text-center uppercase"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #FFFFFF 0%, #D4D4D8 45%, #52525B 100%)",
              textShadow: "0 10px 40px rgba(0,0,0,0.9)",
            }}
          >
            SOCIETY GALLERY
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Satoshi',Arial,sans-serif] font-normal text-[15px] sm:text-[18px] md:text-[22px] leading-[1.55] text-white/70 max-w-[960px] w-full px-2 text-center"
          >
            Click any event folder below to unstack and view moments. Drag down on any photo to close the folder.
          </motion.p>
        </div>

        {/* 4 Interactive Folder Galleries */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 w-full max-w-[1440px] pt-2 sm:pt-4">
          {/* Folder 1: INOUT Hacks */}
          <div className="flex flex-col items-center rounded-[32px] bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/10 p-4 sm:p-6 backdrop-blur-xl shadow-xl overflow-visible">
            <div className="text-center mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                Hackathon
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 font-['Satoshi',Arial,sans-serif]">
                INOUT Hacks 2025
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-1">
                Overnight building sprints, prototype pitching, and team synergy
              </p>
            </div>
            <InteractiveFolderGallery
              folderName="INOUT Hacks '25"
              className="py-8 sm:py-12"
            />
          </div>

          {/* Folder 2: Nibble Month */}
          <div className="flex flex-col items-center rounded-[32px] bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/10 p-4 sm:p-6 backdrop-blur-xl shadow-xl overflow-visible">
            <div className="text-center mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                Workshop Series
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 font-['Satoshi',Arial,sans-serif]">
                Nibble Month Workshops
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-1">
                Hands-on developer bootcamps, git workflows, and full-stack sessions
              </p>
            </div>
            <InteractiveFolderGallery
              folderName="Nibble Month '25"
              className="py-8 sm:py-12"
            />
          </div>

          {/* Folder 3: Blind Code */}
          <div className="flex flex-col items-center rounded-[32px] bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/10 p-4 sm:p-6 backdrop-blur-xl shadow-xl overflow-visible">
            <div className="text-center mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
                Competitive Coding
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 font-['Satoshi',Arial,sans-serif]">
                Blind Code Zealicon
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-1">
                Screen-off algorithmic problem solving under zealicon championship pressure
              </p>
            </div>
            <InteractiveFolderGallery
              folderName="Blind Code Arena"
              className="py-8 sm:py-12"
            />
          </div>

          {/* Folder 4: Orientation Programme */}
          <div className="flex flex-col items-center rounded-[32px] bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/10 p-4 sm:p-6 backdrop-blur-xl shadow-xl overflow-visible">
            <div className="text-center mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                Orientation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 font-['Satoshi',Arial,sans-serif]">
                Freshers Orientation '26
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-1">
                Induction walkthroughs, domain demos, and community icebreakers
              </p>
            </div>
            <InteractiveFolderGallery
              folderName="Orientation '26"
              className="py-8 sm:py-12"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="w-full mt-10 md:mt-16">
          <Footer />
        </div>
      </div>
    </div>
  )
}
