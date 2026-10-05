import React, { useState, useEffect, useRef } from "react"
import { LiquidMetalButton } from "./LiquidMetalButton"

const assetPathPrefix = "/assets"

// Assets
const imgHeroIllustration = `${assetPathPrefix}/hero sec illust.svg`
const imgVectorLeaf = `${assetPathPrefix}/Vector.svg`
const imgPhoto1 = `${assetPathPrefix}/82f8e.png` // Offline session in lab
const imgPhoto2 = `${assetPathPrefix}/1e5cf.png` // Large group community photo
const imgPhoto3 = `${assetPathPrefix}/2890e.png` // Event team members photo

/**
 * Crescent Moon with Golden Star Icon Badge
 */
function MoonStarBadge({ className = "" }) {
  return (
    <div
      className={`relative size-[84px] md:size-[98px] rounded-full overflow-hidden shrink-0 flex items-center justify-center shadow-[0_0_35px_rgba(0,33,92,0.6)] ${className}`}
      style={{
        background: "radial-gradient(circle at 35% 35%, #0a2558 0%, #001233 100%)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer subtle glow */}
        <circle cx="50" cy="50" r="48" fill="#001844" />
        
        {/* Crescent Moon Shape in Cream / Off-White */}
        <path
          d="M66 12C50 16 38 32 38 50C38 68 50 84 66 88C78 84 86 74 88 64C72 74 54 66 52 50C50 34 68 22 88 36C86 26 78 16 66 12Z"
          fill="#FBF1E0"
        />

        {/* 4-Pointed Golden Star Sparkle inside Crescent */}
        <g transform="translate(42, 50)">
          <path
            d="M0 -14 C1 -5 5 -1 14 0 C5 1 1 5 0 14 C-1 5 -5 1 -14 0 C-5 -1 -1 -5 0 -14 Z"
            fill="#FEB80A"
          />
          <circle cx="0" cy="0" r="2.5" fill="#FFFDF0" />
        </g>
      </svg>
    </div>
  )
}

/**
 * About Section Component
 */
export default function AboutSection() {
  const containerRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Smooth mouse parallax interpolation
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
      setMousePos({ x, y })
    }

    const elem = containerRef.current
    if (elem) {
      elem.addEventListener("mousemove", handleMouseMove)
      elem.addEventListener("mouseenter", () => setIsHovered(true))
      elem.addEventListener("mouseleave", () => {
        setIsHovered(false)
        setMousePos({ x: 0, y: 0 })
      })
    }

    return () => {
      if (elem) {
        elem.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full max-w-[1540px] mx-auto flex flex-col items-center py-[60px] md:py-[100px] select-none z-20 overflow-visible"
    >
      {/* =========================================================
          1. HERO HEADER: BADGE + "WHERE IDEAS GO DIGITAL." + LEAF
      ========================================================= */}
      <div className="relative w-full flex flex-col items-center text-center px-4 mb-16">
        {/* Crescent Moon + Star Badge on the left */}
        <div className="absolute left-[30px] md:left-[80px] lg:left-[120px] top-[-10px] md:top-[10px] animate-float-gentle z-10">
          <MoonStarBadge />
        </div>

        {/* Decorative Multicolor Leaf on the right */}
        <div className="absolute right-[30px] md:right-[80px] lg:right-[120px] top-[-25px] md:top-[-10px] animate-float z-10 pointer-events-none">
          <img
            src={imgVectorLeaf}
            alt=""
            className="w-[85px] h-[90px] md:w-[110px] md:h-[115px] object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Main Heading */}
        <div className="flex flex-col items-center justify-center max-w-[1100px] z-10 mt-6 md:mt-2">
          <h1
            className="font-['Satoshi',Arial,sans-serif] font-black text-[56px] sm:text-[80px] md:text-[108px] lg:text-[117.8px] leading-[normal] tracking-normal text-white uppercase text-center drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
            style={{
              textShadow: "0 4px 20px rgba(0,0,0,0.8), 0 0 60px rgba(255,255,255,0.15)",
            }}
          >
            <span>WHERE IDEAS</span>
            <br />
            <span>GO DIGITAL.</span>
          </h1>

          {/* Subtitle / Intro Paragraph */}
          <div className="mt-8 md:mt-10 max-w-[820px] text-center px-4">
            <p className="font-['Satoshi',Arial,sans-serif] font-medium font-medium text-[16px] sm:text-[18px] md:text-[21.5px] leading-[1.6] text-[#C4C4C7] tracking-normal">
              NCS is a community of programmers, developers, designers, and AI/ML enthusiasts driven by curiosity and creativity.
              <br className="hidden md:inline" />{" "}
              We come together to learn, build, experiment, and turn ideas into impactful tech, while growing our skills and exploring what&apos;s next in technology.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          2. PHOTO GRID: 3 CARDS WITH IMAGES & DESCRIPTIONS
      ========================================================= */}
      <div className="w-full max-w-[1440px] px-6 my-10 md:my-14 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {/* Card 1: Offline Learning Sessions */}
          <div className="group flex flex-col items-center bg-[#07090E]/60 backdrop-blur-md rounded-[28px] p-5 border border-white/10 hover:border-white/25 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
            <div className="w-full h-[260px] sm:h-[280px] rounded-[20px] overflow-hidden bg-black/40 relative shadow-inner">
              <img
                src={imgPhoto1}
                alt="NCS Learning Session"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
            </div>
            <div className="p-4 pt-5 text-center flex-1 flex flex-col justify-start">
              <p className="font-['Satoshi',Arial,sans-serif] font-medium font-medium text-[16px] sm:text-[18px] lg:text-[24.166px] leading-[normal] text-[#B5B5BE]">
                We conduct offline, live learning sessions where members can get their doubts resolved, learn new concepts, and gain practical knowledge through interactive sessions and peer-to-peer learning.
              </p>
            </div>
          </div>

          {/* Card 2: Engaging Tech Events & Workshops */}
          <div className="group flex flex-col items-center bg-[#07090E]/60 backdrop-blur-md rounded-[28px] p-5 border border-white/10 hover:border-white/25 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
            <div className="w-full h-[260px] sm:h-[280px] rounded-[20px] overflow-hidden bg-black/40 relative shadow-inner">
              <img
                src={imgPhoto2}
                alt="NCS Tech Events and Community"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
            </div>
            <div className="p-4 pt-5 text-center flex-1 flex flex-col justify-start">
              <p className="font-['Satoshi',Arial,sans-serif] font-medium font-medium text-[16px] sm:text-[18px] lg:text-[24.166px] leading-[normal] text-[#B5B5BE]">
                We organize engaging tech events, workshops, and interactive sessions that bring students together to learn, connect, and explore. From hackathons like IN OUT to hands-on activities, we create experiences where ideas turn into action.
              </p>
            </div>
          </div>

          {/* Card 3: Family & Growth Culture */}
          <div className="group flex flex-col items-center bg-[#07090E]/60 backdrop-blur-md rounded-[28px] p-5 border border-white/10 hover:border-white/25 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
            <div className="w-full h-[260px] sm:h-[280px] rounded-[20px] overflow-hidden bg-black/40 relative shadow-inner">
              <img
                src={imgPhoto3}
                alt="NCS Family and Growth"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
            </div>
            <div className="p-4 pt-5 text-center flex-1 flex flex-col justify-start">
              <p className="font-['Satoshi',Arial,sans-serif] font-medium font-medium text-[16px] sm:text-[18px] lg:text-[24.166px] leading-[normal] text-[#B5B5BE]">
                More than a tech society, we&apos;re a family that learns, supports, and grows together. We share ideas, celebrate every win, and help each other become better together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          3. TAGLINE ACCENT: "Where Curious Minds Come Together..."
      ========================================================= */}
      <div className="w-full flex justify-center text-center px-4 my-8 md:my-12 z-10">
        <p
          className="font-['Playfair_Display',_Georgia,_serif] italic font-semibold text-[22px] sm:text-[28px] md:text-[34px] leading-relaxed text-[#FEB80A] tracking-[-0.01em] drop-shadow-[0_2px_15px_rgba(254,184,10,0.35)] max-w-[800px]"
          style={{
            fontFamily: "'Playfair Display', 'Caveat', Georgia, serif",
          }}
        >
          &ldquo;Where Curious Minds Come Together to Build What&apos;s Next.&rdquo;
        </p>
      </div>

      {/* =========================================================
          4. HERO BOOK & PORTAL SVG ILLUSTRATION (WITH MOVING EFFECT)
      ========================================================= */}
      <div className="relative w-full max-w-[1300px] flex justify-center items-center my-6 md:my-10 px-4 overflow-visible">
        {/* Soft Background Radial Light Aura */}
        <div
          className="absolute w-[600px] md:w-[900px] h-[400px] md:h-[600px] rounded-full pointer-events-none -z-10 blur-[100px] opacity-40 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 146, 253, 0.45) 0%, rgba(199, 87, 252, 0.25) 45%, transparent 70%)",
          }}
        />

        {/* Animated Floating & Cursor Parallax Graphic Wrapper */}
        <div
          className="relative w-full max-w-[1150px] transition-transform duration-300 ease-out animate-float pointer-events-auto"
          style={{
            transform: isHovered
              ? `translate3d(${mousePos.x * 16}px, ${mousePos.y * 16}px, 0) rotateX(${-mousePos.y * 4}deg) rotateY(${mousePos.x * 4}deg)`
              : undefined,
            transformStyle: "preserve-3d",
          }}
        >
          <img
            src={imgHeroIllustration}
            alt="NCS Book and City of Ideas Illustration"
            className="block w-full h-auto object-contain drop-shadow-[0_30px_70px_rgba(0,33,92,0.8)] filter transition-all duration-300 hover:drop-shadow-[0_40px_90px_rgba(0,146,253,0.7)]"
            loading="lazy"
          />
        </div>
      </div>

    </section>
  )
}
