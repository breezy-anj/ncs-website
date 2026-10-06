import React, { useState, useEffect } from "react"

import Footer from "../components/Footer"
import { motion, AnimatePresence } from "framer-motion"

const assetPathPrefix = "/assets"
const heroIllustration = `${assetPathPrefix}/reqruitment.svg`
const imgNotifyBtn = `${assetPathPrefix}/notifysvg.svg`

export default function Recruitment({ activePage = "Recruitment", onNavigate }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const handleNotifySubmit = (e) => {
    e.preventDefault()
    if (email.trim() && email.includes("@")) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsModalOpen(false)
        setIsSubmitted(false)
        setEmail("")
      }, 2500)
    }
  }

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

          {/* Left Column: Typography & Notify Button */}
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

            {/* Notify Me Pill Button */}
            <div className="mt-9">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-108 active:scale-95 hover:shadow-[0_8px_30px_rgba(168,85,247,0.5)] rounded-full focus:outline-none"
                aria-label="Notify me when recruitments open"
              >
                <img
                  src={imgNotifyBtn}
                  alt="Notify me"
                  className="h-[54px] lg:h-[58px] w-auto object-contain rounded-full pointer-events-none drop-shadow-md"
                />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="relative flex items-center justify-center w-full md:w-auto max-w-[420px] sm:max-w-[580px] md:max-w-[800px] lg:max-w-[920px] xl:max-w-[980px] shrink-0 z-10"
          >
            {/* Floating Container */}
            <div className="animate-float-gentle relative flex items-center justify-center w-full">
              <img
                src={heroIllustration}
                alt="Recruitment Portal Illustration"
                className="w-full max-w-[420px] sm:max-w-[580px] md:w-[740px] lg:w-[860px] xl:w-[940px] h-auto object-contain pointer-events-none drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Footer (includes NIBBLE title, LET'S CONNECT dock, Infinite Team Marquee, and slogan) */}
        <Footer />
      </div>

      {/* Interactive Modal for "Notify me" */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[500px] bg-[#0c1022]/95 border border-indigo-500/40 rounded-[32px] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(99,102,241,0.25)] text-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Accent Gradient */}
              <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[240px] h-[180px] bg-gradient-to-b from-indigo-500/40 to-transparent blur-[60px] pointer-events-none" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer focus:outline-none"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {isSubmitted ? (
                <div className="py-8 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-indigo-500/20 border border-indigo-400 flex items-center justify-center text-indigo-300 mb-2 shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-['Satoshi',Arial,sans-serif] font-bold font-bold text-[26px] text-white">You're On The List!</h3>
                  <p className="font-['Satoshi',Arial,sans-serif] text-white/70 text-[16px] max-w-[340px]">
                    We'll email you the moment NCS recruitment rounds go live. Stay sharp! 🚀
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-400 mb-4 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <h3 className="font-['Satoshi',Arial,sans-serif] font-bold font-bold text-[28px] text-white tracking-tight mb-2">
                    Get Recruitment Alerts
                  </h3>
                  <p className="font-['Satoshi',Arial,sans-serif] text-white/70 text-[16px] max-w-[360px] mb-6">
                    Enter your college or personal email. We will notify you right when registrations open!
                  </p>

                  <form onSubmit={handleNotifySubmit} className="w-full flex flex-col gap-3.5">
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 transition-all text-[16px] font-['Satoshi',Arial,sans-serif]"
                    />
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 hover:from-blue-500 hover:via-indigo-500 hover:to-indigo-600 text-white font-semibold text-[17px] font-['Satoshi',Arial,sans-serif] font-medium shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] transition-all cursor-pointer"
                    >
                      Remind Me
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
