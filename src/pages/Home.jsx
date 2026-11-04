import React, { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import Footer from "../components/Footer"
import CarouselStacked from "../components/ui/carousel-07"
import { ImageAutoSlider } from "../components/ui/image-auto-slider"
import InteractiveRobot from "../components/ui/interactive-robot"
import { highlightImages } from "../data/highlightImages"
import { publicAsset } from "../lib/publicAsset"


const assetPathPrefix = publicAsset("assets")
const imgRectangle71 = `${assetPathPrefix}/58748.png`
const imgRectangle114 = `${assetPathPrefix}/7c482.png`
const imgRectangle60 = `${assetPathPrefix}/b9948.png`
const imgRectangle115 = `${assetPathPrefix}/9f50b.png`
const imgRectangle45 = `${assetPathPrefix}/35193.png`
const imgRectangle48 = `${assetPathPrefix}/bb76c.png`
const imgRectangle50 = `${assetPathPrefix}/78cf7.png`
const imgNcsLogo = `${assetPathPrefix}/8f22e.svg`
const imgNcsLogoWhite = publicAsset("assets/ncs-logo-white.svg")
const imgRobotStatic = publicAsset("assets/robot-static.webp")
const imgVector = `${assetPathPrefix}/69fdb.svg`
const imgVector1 = `${assetPathPrefix}/67b5d.svg`
const imgGroup1000002935 = `${assetPathPrefix}/84ab0.svg`
const imgGithub = `${assetPathPrefix}/e31ad.svg`
const imgFacebook = `${assetPathPrefix}/70124.svg`
const imgInstagram = `${assetPathPrefix}/42741.svg`
const imgLinkedin = `${assetPathPrefix}/linkedin-icon.svg`
const imgLine1 = `${assetPathPrefix}/2d226.svg`
const imgProgrammingIcon = `${assetPathPrefix}/programming-icon.svg`
const imgDevelopmentIcon = `${assetPathPrefix}/development-icon.svg`
const imgTechnicalIcon = `${assetPathPrefix}/technical-icon.svg`

const img581563659182268897793053042502331000629764086N1 = `${assetPathPrefix}/ba642.png`
const img623285865179398910581122732442702553504556033N1 = `${assetPathPrefix}/46a8e.png`
const img625070985180983354599209501403270473272173120N1 = `${assetPathPrefix}/f43fa.png`
const img639494071182369026933053048550229231404010493N1 = `${assetPathPrefix}/2a0cf.png`
const imgFrame1171276288 = `${assetPathPrefix}/4f846.png`
const eventGalleryItems = [
  {
    common: "Orientation Programme",
    binomial: "Welcome to Nibble Computer Society",
    href: "https://www.instagram.com/p/DNxMB5Z0g6w/?stkn=MzRlODBiNWFlZA==",
    photo: {
      url: imgRectangle45,
      text: "Orientation Programme event poster",
      by: "Nibble Computer Society",
    },
  },
  {
    common: "Nibble Month Workshop",
    binomial: "Learn, build, and create together",
    href: "https://www.instagram.com/p/DQzn6p7EvXs/?stkn=MzRlODBiNWFlZA==",
    photo: {
      url: imgRectangle48,
      text: "Nibble Month Workshop event poster",
      by: "Nibble Computer Society",
    },
  },
  {
    common: "INOUT Hacks",
    binomial: "Hackathon by Nibble Computer Society",
    href: "https://www.instagram.com/reel/DXtnr23iQ6Y/?stkn=MzRlODBiNWFlZA==",
    photo: {
      url: imgRectangle50,
      text: "INOUT Hacks event poster",
      by: "Nibble Computer Society",
    },
  },
  {
    common: "ATOMS Design Workshop",
    binomial: "Workshop Series · Week 2",
    photo: {
      url: img581563659182268897793053042502331000629764086N1,
      text: "ATOMS design workshop poster",
      by: "Nibble Computer Society",
    },
  },
  {
    common: "Blind Code",
    binomial: "Zealicon 2025",
    photo: {
      url: img623285865179398910581122732442702553504556033N1,
      text: "Blind Code event poster for Zealicon 2025",
      by: "Nibble Computer Society",
    },
  },
  {
    common: "Craftli",
    binomial: "Zealicon 2025 · Creative Workshop",
    photo: {
      url: img625070985180983354599209501403270473272173120N1,
      text: "Craftli creative workshop poster",
      by: "Nibble Computer Society",
    },
  },
  {
    common: "Annual Recruitment",
    binomial: "Nibble Computer Society · 2026",
    photo: {
      url: img639494071182369026933053048550229231404010493N1,
      text: "Nibble Computer Society annual recruitment poster for 2026",
      by: "Nibble Computer Society",
    },
  },
]

const eventSlides = eventGalleryItems.map((item) => ({
  image: item.photo.url,
  title: item.common,
  description: item.binomial,
  badge: item.common.toLowerCase().includes("hack")
    ? "Hackathon"
    : item.common.toLowerCase().includes("workshop")
    ? "Workshop"
    : item.common.toLowerCase().includes("code")
    ? "Competition"
    : "Event",
  linkUrl: item.href,
}))

let hasHomeLoadedOnce =
  typeof window !== "undefined" && Boolean(sessionStorage.getItem("ncs_home_loaded"))

export default function Home({ activePage = "Home", onNavigate }) {
  const [isSplineLoaded, setIsSplineLoaded] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setIsSplineLoaded(true)
    document.body.style.overflow = ""
    document.body.classList.remove("spline-loading")
  }, [])

  return (
    <div
      className="bg-transparent relative w-full max-w-[1668px] min-h-screen mx-auto flex flex-col items-center pt-0 pb-[40px] shrink-0 overflow-hidden"
      data-node-id="1:24"
      data-name="Home"
    >
      <div
        className="content-stretch flex flex-col gap-10 md:gap-14 items-center w-full max-w-[1480px] px-3 sm:px-6 md:px-10 lg:px-14 xl:px-20"
        data-node-id="1:25"
      >
        <div
          className="content-stretch flex flex-col gap-12 sm:gap-16 md:gap-20 items-center relative shrink-0 w-full"
          data-node-id="1:36"
        >
          {/* Hero Section */}
          <div
            className="relative w-full min-h-[calc(100vh-84px)] lg:h-[calc(100vh-84px)] lg:max-h-[820px] flex flex-col justify-between items-center pt-1 sm:pt-2 md:pt-4 pb-2 sm:pb-4 overflow-visible select-none"
            data-node-id="1:37"
          >
            {/* Center Typography & CTA */}
            <div className="flex flex-col items-center text-center w-full max-w-[1200px] gap-2.5 sm:gap-3.5 md:gap-4 z-10 select-none">
              {/* 1. Tracked Subheading */}
              <p className="font-['Satoshi',Arial,sans-serif] font-medium text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.25em] text-white/70 uppercase">
                NIBBLE COMPUTER SOCIETY
              </p>

              {/* 2. Main Title: WHERE CURIOSITY BUILDS THE FUTURE */}
              <h1 className="font-['Satoshi',Arial,sans-serif] font-black text-[32px] xs:text-[40px] sm:text-[54px] md:text-[66px] lg:text-[76px] xl:text-[84px] leading-[0.96] tracking-[-0.035em] uppercase text-center flex flex-col items-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-100 to-neutral-400 drop-shadow-[0_4px_24px_rgba(255,255,255,0.12)]">
                  WHERE CURIOSITY
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-100 to-neutral-400 drop-shadow-[0_4px_24px_rgba(255,255,255,0.12)]">
                  BUILDS THE FUTURE
                </span>
              </h1>

              {/* 3. Subtitle description */}
              <div className="font-['Satoshi',Arial,sans-serif] font-normal text-[12px] xs:text-[13px] sm:text-[15px] md:text-[16px] leading-[1.45] text-white/60 max-w-[580px] px-4 text-center">
                <p className="mb-0">A community of builders, designers, developers and problem solvers</p>
                <p className="mb-0">turning bold ideas into technology</p>
              </div>

              {/* 4. Explore NCS Button */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => {
                    const clubsEl = document.getElementById("clubs-section")
                    if (clubsEl) {
                      clubsEl.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-[12px] sm:text-[13px] md:text-[14px] font-medium backdrop-blur-md transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                >
                  <span>Explore NCS</span>
                  <span className="text-sm font-semibold">↗</span>
                </button>
              </div>
            </div>

            {/* 5. Five-Element Row: 4 Club Cards + Center Robot */}
            <div className="relative w-full max-w-[1240px] mx-auto mt-auto flex items-end justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-2 overflow-visible select-none">
              {/* Card 1: Technical (Green) */}
              <div
                onClick={() => {
                  const target = document.querySelector('[data-node-id="1:64"]') || document.getElementById("clubs-section")
                  target?.scrollIntoView({ behavior: "smooth" })
                }}
                className="group relative w-[72px] xs:w-[95px] sm:w-[130px] md:w-[165px] lg:w-[190px] xl:w-[210px] h-[115px] xs:h-[148px] sm:h-[195px] md:h-[235px] lg:h-[265px] xl:h-[285px] rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[30px] lg:rounded-[34px] overflow-hidden flex flex-col items-center justify-between p-2 xs:p-2.5 sm:p-3 md:p-3.5 shadow-lg border border-black/10 select-none cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 shrink-0"
                style={{
                  backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(135deg, rgb(179, 253, 68) 0%, rgb(179, 253, 68) 100%)`,
                  backgroundSize: "cover, 100% 100%",
                  backgroundPosition: "center, center",
                  backgroundRepeat: "no-repeat, no-repeat",
                }}
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <img
                    alt="Technical"
                    className="w-[55%] h-[55%] max-w-[80px] max-h-[80px] object-contain transition-transform duration-300 group-hover:scale-110"
                    src={imgTechnicalIcon}
                  />
                </div>
                <div className="w-full text-center py-1 sm:py-1.5 px-2 rounded-full bg-black/15 backdrop-blur-sm border border-black/5">
                  <span className="font-['Satoshi',Arial,sans-serif] font-bold text-[9px] xs:text-[11px] sm:text-[13px] md:text-[14px] text-black tracking-tight">
                    Technical
                  </span>
                </div>
              </div>

              {/* Card 2: Development (Blue) */}
              <div
                onClick={() => {
                  const target = document.querySelector('[data-node-id="1:56"]') || document.getElementById("clubs-section")
                  target?.scrollIntoView({ behavior: "smooth" })
                }}
                className="group relative w-[68px] xs:w-[88px] sm:w-[120px] md:w-[150px] lg:w-[172px] xl:w-[190px] h-[95px] xs:h-[122px] sm:h-[162px] md:h-[195px] lg:h-[220px] xl:h-[238px] rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[30px] lg:rounded-[34px] overflow-hidden flex flex-col items-center justify-between p-2 xs:p-2.5 sm:p-3 md:p-3.5 shadow-lg border border-black/10 select-none cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 shrink-0"
                style={{
                  backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(135deg, rgb(102, 99, 255) 0%, rgb(102, 99, 255) 100%)`,
                  backgroundSize: "cover, 100% 100%",
                  backgroundPosition: "center, center",
                  backgroundRepeat: "no-repeat, no-repeat",
                }}
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <img
                    alt="Development"
                    className="w-[55%] h-[55%] max-w-[80px] max-h-[80px] object-contain transition-transform duration-300 group-hover:scale-110"
                    src={imgDevelopmentIcon}
                  />
                </div>
                <div className="w-full text-center py-1 sm:py-1.5 px-2 rounded-full bg-black/15 backdrop-blur-sm border border-black/5">
                  <span className="font-['Satoshi',Arial,sans-serif] font-bold text-[9px] xs:text-[11px] sm:text-[13px] md:text-[14px] text-black tracking-tight">
                    Development
                  </span>
                </div>
              </div>

              {/* Center Robot - Interactive & Optimized (20% larger, only tilts when cursor is around it) */}
              <InteractiveRobot
                src={imgRobotStatic}
                alt="Nibble Robot"
                className="w-[102px] xs:w-[132px] sm:w-[174px] md:w-[216px] lg:w-[252px] xl:w-[276px] h-[126px] xs:h-[162px] sm:h-[216px] md:h-[258px] lg:h-[288px] xl:h-[312px]"
              />

              {/* Card 3: Design (Yellow) */}
              <div
                onClick={() => {
                  const target = document.querySelector('[data-node-id="1:60"]') || document.getElementById("clubs-section")
                  target?.scrollIntoView({ behavior: "smooth" })
                }}
                className="group relative w-[68px] xs:w-[88px] sm:w-[120px] md:w-[150px] lg:w-[172px] xl:w-[190px] h-[95px] xs:h-[122px] sm:h-[162px] md:h-[195px] lg:h-[220px] xl:h-[238px] rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[30px] lg:rounded-[34px] overflow-hidden flex flex-col items-center justify-between p-2 xs:p-2.5 sm:p-3 md:p-3.5 shadow-lg border border-black/10 select-none cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 shrink-0"
                style={{
                  backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(135deg, rgb(253, 211, 68) 0%, rgb(253, 211, 68) 100%)`,
                  backgroundSize: "cover, 100% 100%",
                  backgroundPosition: "center, center",
                  backgroundRepeat: "no-repeat, no-repeat",
                }}
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <img
                    alt="Design"
                    className="w-[55%] h-[55%] max-w-[80px] max-h-[80px] object-contain transition-transform duration-300 group-hover:scale-110"
                    src={imgVector1}
                  />
                </div>
                <div className="w-full text-center py-1 sm:py-1.5 px-2 rounded-full bg-black/15 backdrop-blur-sm border border-black/5">
                  <span className="font-['Satoshi',Arial,sans-serif] font-bold text-[9px] xs:text-[11px] sm:text-[13px] md:text-[14px] text-black tracking-tight">
                    Design
                  </span>
                </div>
              </div>

              {/* Card 4: Programming (Pink) */}
              <div
                onClick={() => {
                  const target = document.querySelector('[data-node-id="1:52"]') || document.getElementById("clubs-section")
                  target?.scrollIntoView({ behavior: "smooth" })
                }}
                className="group relative w-[72px] xs:w-[95px] sm:w-[130px] md:w-[165px] lg:w-[190px] xl:w-[210px] h-[115px] xs:h-[148px] sm:h-[195px] md:h-[235px] lg:h-[265px] xl:h-[285px] rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[30px] lg:rounded-[34px] overflow-hidden flex flex-col items-center justify-between p-2 xs:p-2.5 sm:p-3 md:p-3.5 shadow-lg border border-black/10 select-none cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 shrink-0"
                style={{
                  backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(135deg, rgb(255, 109, 253) 0%, rgb(255, 109, 253) 100%)`,
                  backgroundSize: "cover, 100% 100%",
                  backgroundPosition: "center, center",
                  backgroundRepeat: "no-repeat, no-repeat",
                }}
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <svg
                    className="w-[55%] h-[55%] max-w-[80px] max-h-[80px] object-contain transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 100 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 24L12 40L30 56"
                      stroke="black"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M59 15L41 65"
                      stroke="black"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M70 24L88 40L70 56"
                      stroke="black"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-full text-center py-1 sm:py-1.5 px-2 rounded-full bg-black/15 backdrop-blur-sm border border-black/5">
                  <span className="font-['Satoshi',Arial,sans-serif] font-bold text-[9px] xs:text-[11px] sm:text-[13px] md:text-[14px] text-black tracking-tight">
                    Programming
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            id="clubs-section"
            className="flex flex-col gap-10 md:gap-[20px] items-center relative shrink-0 w-full max-w-[1400px]"
            data-node-id="1:48"
          >
            <div className="flex flex-col items-center text-center gap-4 sm:gap-6 w-full mb-6">
              <h2
                className="font-['Satoshi',Arial,sans-serif] font-black text-[36px] sm:text-[68px] md:text-[80px] leading-none tracking-tight text-transparent bg-clip-text select-none text-center uppercase"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #FFFFFF 0%, #D4D4D8 45%, #52525B 100%)",
                  textShadow: "0 10px 40px rgba(0,0,0,0.9)",
                }}
              >
                CLUBS
              </h2>
              <p className="font-['Satoshi',Arial,sans-serif] font-normal text-[14px] sm:text-[17px] md:text-[22px] lg:text-[24px] leading-[1.5] text-white/60 md:text-white/70 max-w-[1340px] w-full px-4 text-center break-words">
                Explore our specialized clubs in Web Development, Programming, Design, and Technology. Discover new skills, unleash your creativity, and turn your ideas into reality. Join our vibrant community and build your future with us!
              </p>
            </div>

            {/* Mobile 2x2 Grid of Club Cards */}
            <div className="grid grid-cols-2 gap-3.5 w-full max-w-[420px] mx-auto px-2 md:hidden">
              {/* Card 1: Programming */}
              <div
                className="group relative h-[215px] rounded-[24px] overflow-hidden flex flex-col items-center justify-between p-3.5 shadow-lg border border-black/10 select-none cursor-pointer transition-all duration-300 active:scale-95"
                style={{
                  backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(135deg, rgb(255, 109, 253) 0%, rgb(255, 109, 253) 100%)`,
                  backgroundSize: "cover, 100% 100%",
                  backgroundPosition: "center, center",
                  backgroundRepeat: "no-repeat, no-repeat",
                }}
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <svg
                    className="w-[72px] h-[72px] object-contain transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 100 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 24L12 40L30 56"
                      stroke="black"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M59 15L41 65"
                      stroke="black"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M70 24L88 40L70 56"
                      stroke="black"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-full text-center py-1 px-2 rounded-full bg-black/15 backdrop-blur-sm">
                  <span className="font-['Satoshi',Arial,sans-serif] font-black text-[12px] tracking-[0.8px] text-black uppercase">
                    Programming
                  </span>
                </div>
              </div>

              {/* Card 2: Development */}
              <div
                className="group relative h-[215px] rounded-[24px] overflow-hidden flex flex-col items-center justify-between p-3.5 shadow-lg border border-black/10 select-none cursor-pointer transition-all duration-300 active:scale-95"
                style={{
                  backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(135deg, rgb(102, 99, 255) 0%, rgb(102, 99, 255) 100%)`,
                  backgroundSize: "cover, 100% 100%",
                  backgroundPosition: "center, center",
                  backgroundRepeat: "no-repeat, no-repeat",
                }}
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <img
                    alt="Development"
                    className="w-[72px] h-[72px] object-contain transition-transform duration-300 group-hover:scale-110"
                    src={imgDevelopmentIcon}
                  />
                </div>
                <div className="w-full text-center py-1 px-2 rounded-full bg-black/15 backdrop-blur-sm">
                  <span className="font-['Satoshi',Arial,sans-serif] font-black text-[12px] tracking-[0.8px] text-black uppercase">
                    Development
                  </span>
                </div>
              </div>

              {/* Card 3: Designing */}
              <div
                className="group relative h-[215px] rounded-[24px] overflow-hidden flex flex-col items-center justify-between p-3.5 shadow-lg border border-black/10 select-none cursor-pointer transition-all duration-300 active:scale-95"
                style={{
                  backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(135deg, rgb(253, 211, 68) 0%, rgb(253, 211, 68) 100%)`,
                  backgroundSize: "cover, 100% 100%",
                  backgroundPosition: "center, center",
                  backgroundRepeat: "no-repeat, no-repeat",
                }}
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <img
                    alt="Designing"
                    className="w-[72px] h-[72px] object-contain transition-transform duration-300 group-hover:scale-110"
                    src={imgVector1}
                  />
                </div>
                <div className="w-full text-center py-1 px-2 rounded-full bg-black/15 backdrop-blur-sm">
                  <span className="font-['Satoshi',Arial,sans-serif] font-black text-[12px] tracking-[0.8px] text-black uppercase">
                    Designing
                  </span>
                </div>
              </div>

              {/* Card 4: Technical */}
              <div
                className="group relative h-[215px] rounded-[24px] overflow-hidden flex flex-col items-center justify-between p-3.5 shadow-lg border border-black/10 select-none cursor-pointer transition-all duration-300 active:scale-95"
                style={{
                  backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(135deg, rgb(179, 253, 68) 0%, rgb(179, 253, 68) 100%)`,
                  backgroundSize: "cover, 100% 100%",
                  backgroundPosition: "center, center",
                  backgroundRepeat: "no-repeat, no-repeat",
                }}
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <img
                    alt="Technical"
                    className="w-[72px] h-[72px] object-contain transition-transform duration-300 group-hover:scale-110"
                    src={imgTechnicalIcon}
                  />
                </div>
                <div className="w-full text-center py-1 px-2 rounded-full bg-black/15 backdrop-blur-sm">
                  <span className="font-['Satoshi',Arial,sans-serif] font-black text-[12px] tracking-[0.8px] text-black uppercase">
                    Technical
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Club Rows */}
            <div
              className="hidden md:flex flex-col gap-12 md:gap-[90px] items-stretch relative shrink-0 w-full"
              data-node-id="1:50"
            >
              {/* Row 1: PROGRAMMING + Pink Card */}
              <div
                className="group flex flex-col md:flex-row items-center justify-center w-full cursor-pointer transition-all duration-300 hover:scale-[1.01] gap-6 md:gap-[clamp(20px,4vw,80px)]"
                data-node-id="1:52"
              >
                <p
                  className="font-['Satoshi',Arial,sans-serif] font-black leading-none not-italic text-[30px] xs:text-[36px] sm:text-[50px] md:text-[clamp(44px,6vw,96px)] lg:text-[clamp(76px,7.5vw,120px)] xl:text-[140px] text-white tracking-tight whitespace-nowrap select-none group-hover:text-pink-100 transition-colors duration-300 text-center md:text-left"
                  data-node-id="1:53"
                >
                  PROGRAMMING
                </p>
                <div
                  className="h-[clamp(160px,18vw,229px)] overflow-clip relative rounded-[clamp(22px,2.5vw,34px)] w-[clamp(138px,15vw,198px)] flex items-center justify-center shadow-lg shrink-0 transition-all duration-300 group-hover:scale-[1.2] group-hover:-rotate-2 group-hover:shadow-[0_20px_40px_rgba(255,109,253,0.4)]"
                  data-node-id="1:54"
                  style={{
                    backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(135deg, rgb(255, 109, 253) 0%, rgb(255, 109, 253) 100%)`,
                    backgroundSize: "cover, 100% 100%",
                    backgroundPosition: "center, center",
                    backgroundRepeat: "no-repeat, no-repeat",
                  }}
                >
                  <svg
                    className="absolute w-[clamp(80px,9vw,124px)] h-[clamp(80px,9vw,124px)] object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-50"
                    viewBox="0 0 100 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 24L12 40L30 56"
                      stroke="black"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M59 15L41 65"
                      stroke="black"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M70 24L88 40L70 56"
                      stroke="black"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="absolute inset-0 p-5 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-black">
                    <span className="opacity-60 text-[10px] font-['Satoshi',Arial,sans-serif] font-black uppercase tracking-[1px] mb-2">Programming</span>
                    <p className="opacity-95 text-[12px] font-['Satoshi',Arial,sans-serif] leading-[1.3]">
                      Where problem-solving meets pure creativity. We take tricky problems and turn them into clean, working code, taking abstract logic and turning it into tools that actually work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 2: Purple Card + DEVELOPMENT */}
              <div
                className="group flex flex-col-reverse md:flex-row items-center justify-start gap-6 md:gap-[clamp(16px,2.5vw,35px)] w-full cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                data-node-id="1:56"
              >
                <div
                  className="h-[clamp(160px,18vw,229px)] overflow-clip relative rounded-[clamp(22px,2.5vw,34px)] w-[clamp(138px,15vw,198px)] flex items-center justify-center shadow-lg shrink-0 transition-all duration-300 group-hover:scale-[1.2] group-hover:rotate-2 group-hover:shadow-[0_20px_40px_rgba(102,99,255,0.4)]"
                  data-node-id="1:58"
                  style={{
                    backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(135deg, rgb(102, 99, 255) 0%, rgb(102, 99, 255) 100%)`,
                    backgroundSize: "cover, 100% 100%",
                    backgroundPosition: "center, center",
                    backgroundRepeat: "no-repeat, no-repeat",
                  }}
                >
                  <img
                    alt="Development"
                    className="absolute w-[clamp(80px,9vw,124px)] h-[clamp(80px,9vw,124px)] object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-50"
                    src={imgDevelopmentIcon}
                  />
                  <div className="absolute inset-0 p-5 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-black">
                    <span className="opacity-70 text-[10px] font-['Satoshi',Arial,sans-serif] font-black uppercase tracking-[1px] mb-2">Development</span>
                    <p className="opacity-100 text-[12px] font-['Satoshi',Arial,sans-serif] leading-[1.3]">
                      From a rough idea to something you can actually use. We build, tweak, and polish, creating web and mobile apps that bring fresh concepts to life.
                    </p>
                  </div>
                </div>
                <p
                  className="font-['Satoshi',Arial,sans-serif] font-black leading-none not-italic text-[30px] xs:text-[36px] sm:text-[50px] md:text-[clamp(44px,6vw,96px)] lg:text-[clamp(76px,7.5vw,120px)] xl:text-[140px] text-white tracking-tight whitespace-nowrap select-none group-hover:text-indigo-100 transition-colors duration-300 text-center md:text-left"
                  data-node-id="1:57"
                >
                  DEVELOPMENT
                </p>
              </div>

              {/* Row 3: DESIGNING + Yellow Card */}
              <div
                className="group flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[clamp(16px,2.5vw,35px)] w-full md:ml-[clamp(10px,3vw,60px)] cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                data-node-id="1:60"
              >
                <p
                  className="font-['Satoshi',Arial,sans-serif] font-black leading-none not-italic text-[30px] xs:text-[36px] sm:text-[50px] md:text-[clamp(44px,6vw,96px)] lg:text-[clamp(76px,7.5vw,120px)] xl:text-[140px] text-white tracking-tight whitespace-nowrap select-none group-hover:text-amber-100 transition-colors duration-300 text-center md:text-left"
                  data-node-id="1:61"
                >
                  DESIGNING
                </p>
                <div
                  className="bg-size-[1024px_1024px,auto_auto] bg-top-left h-[clamp(160px,18vw,229px)] overflow-clip relative rounded-[clamp(22px,2.5vw,34px)] w-[clamp(138px,15vw,198px)] flex items-center justify-center shadow-lg shrink-0 transition-all duration-300 group-hover:scale-[1.2] group-hover:-rotate-2 group-hover:shadow-[0_20px_40px_rgba(253,211,68,0.4)]"
                  data-node-id="1:62"
                  style={{
                    backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(90deg, rgb(253, 211, 68) 0%, rgb(253, 211, 68) 100%)`,
                  }}
                >
                  <img
                    alt="Designing"
                    className="absolute w-[clamp(80px,9vw,124px)] h-[clamp(80px,9vw,124px)] object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-50"
                    src={imgVector1}
                  />
                  <div className="absolute inset-0 p-5 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-black">
                    <span className="opacity-60 text-[10px] font-['Satoshi',Arial,sans-serif] font-black uppercase tracking-[1px] mb-2">Design</span>
                    <p className="opacity-95 text-[12px] font-['Satoshi',Arial,sans-serif] leading-[1.3]">
                      Giving ideas a visual voice. We focus on clean visuals, good user experience, and smart UI, creating designs that look great and feel effortless to use.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 4: Green Card + TECHNICAL */}
              <div
                className="group flex flex-col-reverse md:flex-row items-center justify-start gap-6 md:gap-[clamp(16px,2.5vw,35px)] w-full md:ml-[clamp(10px,3.5vw,70px)] cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                data-node-id="1:64"
              >
                <div
                  className="bg-size-[1024px_1024px,auto_auto] bg-top-left h-[clamp(160px,18vw,229px)] overflow-clip relative rounded-[clamp(22px,2.5vw,34px)] w-[clamp(138px,15vw,198px)] flex items-center justify-center shadow-lg shrink-0 transition-all duration-300 group-hover:scale-[1.2] group-hover:rotate-2 group-hover:shadow-[0_20px_40px_rgba(179,253,68,0.4)]"
                  data-node-id="1:66"
                  style={{
                    backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(90deg, rgb(179, 253, 68) 0%, rgb(179, 253, 68) 100%)`,
                  }}
                >
                  <img
                    alt="Technical"
                    className="absolute w-[clamp(80px,9vw,124px)] h-[clamp(80px,9vw,124px)] object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-50"
                    src={imgTechnicalIcon}
                  />
                  <div className="absolute inset-0 p-5 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-black">
                    <span className="opacity-60 text-[10px] font-['Satoshi',Arial,sans-serif] font-black uppercase tracking-[1px] mb-2">Technical</span>
                    <p className="opacity-95 text-[12px] font-['Satoshi',Arial,sans-serif] leading-[1.3]">
                      Exploring what's coming next in tech. We dive hands-on into AI, open-source projects, and new tools, figuring out how the newest tech works under the hood.
                    </p>
                  </div>
                </div>
                <p
                  className="font-['Satoshi',Arial,sans-serif] font-black leading-none not-italic text-[30px] xs:text-[36px] sm:text-[50px] md:text-[clamp(44px,6vw,96px)] lg:text-[clamp(76px,7.5vw,120px)] xl:text-[140px] text-white tracking-tight whitespace-nowrap select-none group-hover:text-lime-100 transition-colors duration-300 text-center md:text-left"
                  data-node-id="1:65"
                >
                  TECHNICAL
                </p>
              </div>
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <section className="mx-auto w-full max-w-[1446px] text-center shrink-0">
            <div className="flex flex-col items-center text-center gap-4 sm:gap-6 w-full mb-6">
              <h2
                className="font-['Satoshi',Arial,sans-serif] font-black text-[36px] sm:text-[68px] md:text-[80px] leading-none tracking-tight text-transparent bg-clip-text select-none text-center uppercase"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #FFFFFF 0%, #D4D4D8 45%, #52525B 100%)",
                  textShadow: "0 10px 40px rgba(0,0,0,0.9)",
                }}
              >
                HIGHLIGHTS
              </h2>
              <p className="font-['Satoshi',Arial,sans-serif] font-normal text-[14px] sm:text-[17px] md:text-[22px] lg:text-[24px] leading-[1.5] text-white/60 md:text-white/70 max-w-[1340px] w-full px-4 text-center break-words">
                From brainstorming ideas to building amazing things, every moment tells a story. Take a look at our events, workshops, and the people who make our community thrive.
              </p>
            </div>

            <div className="relative mt-8 md:mt-12 w-full overflow-hidden bg-transparent">
              <ImageAutoSlider images={highlightImages} />
            </div>
          </section>
          <div
            className="flex flex-col gap-[20px] items-center relative shrink-0 w-full max-w-[1446px] overflow-hidden"
            data-node-id="1:151"
          >
            <h2
              className="font-['Satoshi',Arial,sans-serif] font-black text-[36px] sm:text-[68px] md:text-[80px] leading-none tracking-tight text-transparent bg-clip-text select-none text-center uppercase relative shrink-0 w-full"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #FFFFFF 0%, #D4D4D8 45%, #52525B 100%)",
                textShadow: "0 10px 40px rgba(0,0,0,0.9)",
              }}
            >
              EVENTS
            </h2>
            <div
              className="content-stretch flex flex-col gap-[24px] sm:gap-[32px] items-center relative shrink-0 w-full"
              data-node-id="1:153"
            >
              <div className="font-['Satoshi',Arial,sans-serif] font-medium text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px] text-center text-white/60 md:text-white/70 tracking-normal leading-[1.6] max-w-[1200px] w-full mt-2 mb-6 px-4 break-words">
                <p>
                  Ideas worth sharing. Experiences worth remembering. Join us for events that spark curiosity, inspire creativity, and bring our community together.
                </p>
              </div>
              <CarouselStacked slides={eventSlides} />
            </div>
          </div>
          <div className="w-full -mt-12 md:-mt-[120px]">
            <Footer />
          </div>
        </div>
      </div>

      {/* Full-Screen Loading Screen: Black background with NCS Logo in the middle */}
      {isMounted &&
        createPortal(
          <AnimatePresence>
            {!isSplineLoaded && (
              <motion.div
                className="fixed inset-0 z-[999999] w-screen h-screen bg-black flex items-center justify-center p-6 select-none overflow-hidden"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  initial={{ opacity: 0.85, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-[140px] xs:w-[160px] sm:w-[190px] md:w-[220px] flex items-center justify-center pointer-events-none select-none"
                >
                  <img
                    src={imgNcsLogoWhite}
                    alt="Nibble Computer Society"
                    className="w-full h-auto object-contain filter drop-shadow-[0_2px_16px_rgba(255,255,255,0.2)]"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  )
}
