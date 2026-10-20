import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { InteractiveFolderGallery } from "../components/ui/interactive-folder-gallery"
import { inoutHacks30Photos } from "../data/galleryPhotos"
import Footer from "../components/Footer"

export default function Gallery({ activePage = "Gallery", onNavigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
    const prevTitle = document.title
    document.title = "PHOTO BOOTH - NCS"
    return () => {
      document.title = prevTitle
    }
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
            PHOTO BOOTH
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Satoshi',Arial,sans-serif] font-normal text-[15px] sm:text-[18px] md:text-[22px] leading-[1.55] text-white/70 max-w-[960px] w-full px-2 text-center"
          >
            Click any event folder below to open the Photo Booth gallery. Browse snapshots with your arrow keys or through the bottom filmstrip reel.
          </motion.p>
        </div>

        {/* 4 Interactive Folder Galleries Side by Side in One Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full max-w-[1600px] pt-2 sm:pt-4">
          {/* Folder 1: INOUT Hacks */}
          <div className="flex flex-col items-center justify-between rounded-[24px] bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/10 p-3.5 sm:p-4 backdrop-blur-xl shadow-xl overflow-visible transition-all duration-300 hover:border-white/25">
            <div className="text-center mb-1">
              <h3 className="text-lg sm:text-xl font-bold text-white font-['Satoshi',Arial,sans-serif] tracking-tight">
                INOUT Hacks 2025
              </h3>
              <p className="text-white/60 text-xs mt-1 line-clamp-2 max-w-[250px] leading-relaxed">
                Overnight building sprints, prototype pitching & team synergy
              </p>
            </div>
            <InteractiveFolderGallery
              folderName="INOUT Hacks '25"
              photos={inoutHacks30Photos}
              className="py-2"
            />
          </div>

          {/* Folder 2: Nibble Month */}
          <div className="flex flex-col items-center justify-between rounded-[24px] bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/10 p-3.5 sm:p-4 backdrop-blur-xl shadow-xl overflow-visible transition-all duration-300 hover:border-white/25">
            <div className="text-center mb-1">
              <h3 className="text-lg sm:text-xl font-bold text-white font-['Satoshi',Arial,sans-serif] tracking-tight">
                Nibble Month
              </h3>
              <p className="text-white/60 text-xs mt-1 line-clamp-2 max-w-[250px] leading-relaxed">
                Hands-on developer bootcamps & full-stack development
              </p>
            </div>
            <InteractiveFolderGallery
              folderName="Nibble Month '25"
              className="py-2"
            />
          </div>

          {/* Folder 3: Blind Code */}
          <div className="flex flex-col items-center justify-between rounded-[24px] bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/10 p-3.5 sm:p-4 backdrop-blur-xl shadow-xl overflow-visible transition-all duration-300 hover:border-white/25">
            <div className="text-center mb-1">
              <h3 className="text-lg sm:text-xl font-bold text-white font-['Satoshi',Arial,sans-serif] tracking-tight">
                Blind Code
              </h3>
              <p className="text-white/60 text-xs mt-1 line-clamp-2 max-w-[250px] leading-relaxed">
                Screen-off algorithmic problem solving under zealicon pressure
              </p>
            </div>
            <InteractiveFolderGallery
              folderName="Blind Code Arena"
              className="py-2"
            />
          </div>

          {/* Folder 4: Orientation Programme */}
          <div className="flex flex-col items-center justify-between rounded-[24px] bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/10 p-3.5 sm:p-4 backdrop-blur-xl shadow-xl overflow-visible transition-all duration-300 hover:border-white/25">
            <div className="text-center mb-1">
              <h3 className="text-lg sm:text-xl font-bold text-white font-['Satoshi',Arial,sans-serif] tracking-tight">
                Orientation '26
              </h3>
              <p className="text-white/60 text-xs mt-1 line-clamp-2 max-w-[250px] leading-relaxed">
                Induction walkthroughs, domain demos & society icebreakers
              </p>
            </div>
            <InteractiveFolderGallery
              folderName="Orientation '26"
              className="py-2"
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
