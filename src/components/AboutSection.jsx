import React, { useState, useEffect, useRef } from "react"
import { LiquidMetalButton } from "./LiquidMetalButton"

const assetPathPrefix = "/assets"

// Assets
const imgHeroIllustration = `${assetPathPrefix}/hero sec illust.svg`
const imgVectorLeaf = `${assetPathPrefix}/Vector.svg`
const imgPhoto1 = `${assetPathPrefix}/82f8e.png` // Offline session in lab
const imgPhoto2 = `${assetPathPrefix}/1e5cf.png` // Large group community photo
const imgPhoto3 = `${assetPathPrefix}/2890e.png` // Event team members photo

const imgGithub = `${assetPathPrefix}/e31ad.svg`
const imgFacebook = `${assetPathPrefix}/70124.svg`
const imgInstagram = `${assetPathPrefix}/42741.svg`
const imgLinkedin = `${assetPathPrefix}/linkedin-icon.svg`

// Team Member photos for footer strip
const teamMembers = [
  { name: "Ajeet Bharti", photo: `${assetPathPrefix}/d7780.png` },
  { name: "Pranjyaditya Singh", photo: `${assetPathPrefix}/09399.png` },
  { name: "Athrva Gupta", photo: `${assetPathPrefix}/7f2b2.png` },
  { name: "Bhaskar Shah", photo: `${assetPathPrefix}/2dcb7.png` },
  { name: "Darshita Jain", photo: `${assetPathPrefix}/eb3f6.png` },
  { name: "Piyush Gautam", photo: `${assetPathPrefix}/37c1c.png` },
  { name: "Kuldeep Singh", photo: `${assetPathPrefix}/8c5e3.png` },
  { name: "Naziya Praveen", photo: `${assetPathPrefix}/5f41c.png` },
  { name: "Shivam Goyal", photo: `${assetPathPrefix}/57606.png` },
  { name: "Khushi Mishra", photo: `${assetPathPrefix}/78659.png` },
  { name: "Vibha Gupta", photo: `${assetPathPrefix}/aafdb.png` },
  { name: "Saishree Saxena", photo: `${assetPathPrefix}/a155c.png` },
]

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
            className="font-['Inter'] font-black text-[56px] sm:text-[80px] md:text-[108px] lg:text-[124px] leading-[0.95] tracking-[-0.04em] text-white uppercase text-center drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
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
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[1.65] text-[#C4C4C7] tracking-[-0.01em]">
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
              <p className="font-['Inter'] font-normal text-[14px] sm:text-[15px] leading-[1.6] text-[#B5B5BE]">
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
              <p className="font-['Inter'] font-normal text-[14px] sm:text-[15px] leading-[1.6] text-[#B5B5BE]">
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
              <p className="font-['Inter'] font-normal text-[14px] sm:text-[15px] leading-[1.6] text-[#B5B5BE]">
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

      {/* =========================================================
          5. MASSIVE "NIBBLE" WORDMARK
      ========================================================= */}
      <div className="w-full flex justify-center items-center my-6 md:my-12 px-4 z-10">
        <h2
          className="font-['Inter'] font-black text-[110px] sm:text-[180px] md:text-[240px] lg:text-[280px] leading-none tracking-[-0.05em] text-transparent bg-clip-text select-none text-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #FFFFFF 0%, #D4D4D8 45%, #52525B 100%)",
            textShadow: "0 10px 40px rgba(0,0,0,0.9)",
          }}
        >
          NIBBLE
        </h2>
      </div>

      {/* =========================================================
          6. "LET'S CONNECT" PILL CONTAINER & SOCIAL ICONS
      ========================================================= */}
      <div className="w-full flex flex-col items-center px-4 my-8 z-10">
        <div
          className="rounded-[36px] p-8 sm:p-10 max-w-[620px] w-full flex flex-col items-center text-center gap-3.5 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
            backdropFilter: "blur(16px)",
          }}
        >
          <h3 className="font-['Inter'] font-bold text-[32px] sm:text-[38px] leading-tight text-white tracking-[-0.03em] uppercase">
            LET&apos;S CONNECT
          </h3>
          <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] text-white/80 tracking-[-0.01em] -mt-1">
            Follow NCS and stay in the loop.
          </p>

          {/* Social Icons Dock */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-3">
            <a
              href="https://github.com/nibble-computer-society"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="size-[48px] sm:size-[54px] p-2.5 rounded-2xl bg-white/10 border border-white/20 hover:scale-115 hover:bg-white/20 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer"
            >
              <img src={imgGithub} alt="GitHub" className="size-full object-contain" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="size-[48px] sm:size-[54px] p-2.5 rounded-2xl bg-white/10 border border-white/20 hover:scale-115 hover:bg-white/20 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer"
            >
              <img src={imgFacebook} alt="Facebook" className="size-full object-contain" />
            </a>
            <a
              href="https://instagram.com/hackncs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="size-[48px] sm:size-[54px] p-2.5 rounded-2xl bg-white/10 border border-white/20 hover:scale-115 hover:bg-white/20 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer"
            >
              <img src={imgInstagram} alt="Instagram" className="size-full object-contain" />
            </a>
            <a
              href="https://linkedin.com/company/hackncs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="size-[48px] sm:size-[54px] p-2.5 rounded-2xl bg-white/10 border border-white/20 hover:scale-115 hover:bg-white/20 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer"
            >
              <img src={imgLinkedin} alt="LinkedIn" className="size-full object-contain" />
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          7. FOOTER STRIP: TEAM AVATARS + BOTANICAL LEAF ACCENTS
      ========================================================= */}
      <div className="relative w-full my-12 flex flex-col items-center">
        {/* Top-Left Botanical Leaf Accent */}
        <img
          alt=""
          src={imgVectorLeaf}
          className="absolute -top-[44px] left-[30px] md:left-[60px] w-[75px] h-[80px] md:w-[95px] md:h-[100px] pointer-events-none z-30 drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]"
        />

        {/* Liquid Glass Blue Ribbon Bar with Team Members */}
        <div
          className="marquee-group relative w-full overflow-hidden py-3.5 border-y border-blue-400/40"
          style={{
            backgroundColor: "rgba(0, 42, 105, 0.85)",
            backdropFilter: "blur(10px)",
            boxShadow:
              "inset 0 2px 3px rgba(255,255,255,0.35), inset 0 -2px 3px rgba(255,255,255,0.2), 0 0 40px rgba(0,42,105,0.6)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 50px, black calc(100% - 50px), transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 50px, black calc(100% - 50px), transparent 100%)",
          }}
        >
          <div
            className="flex items-center w-max animate-marquee-left"
            style={{ ["--marquee-duration"]: "90s" }}
          >
            {/* Loop team member list twice for infinite continuous ribbon */}
            {[...teamMembers, ...teamMembers, ...teamMembers].map((member, idx) => (
              <div
                key={`${member.name}-${idx}`}
                className="flex items-center gap-3 shrink-0 px-4 group/avatar cursor-pointer"
              >
                <div
                  className="size-[54px] sm:size-[62px] shrink-0 overflow-hidden bg-black/60 shadow-md transition-transform duration-300 group-hover/avatar:scale-110"
                  style={{
                    clipPath:
                      "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                  }}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                </div>
                <span className="text-white text-[14px] sm:text-[15px] font-medium whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover/avatar:text-blue-200 transition-colors">
                  {member.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom-Right Botanical Leaf Accent */}
        <img
          alt=""
          src={imgVectorLeaf}
          className="absolute -bottom-[44px] right-[30px] md:right-[60px] w-[75px] h-[80px] md:w-[95px] md:h-[100px] pointer-events-none z-30 drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]"
          style={{ transform: "rotate(180deg) scaleX(-1)" }}
        />
      </div>

      {/* =========================================================
          8. BOTTOM TAGLINE & ATTRIBUTION
      ========================================================= */}
      <div className="w-full flex flex-col items-center text-center gap-3 px-4 mt-8 z-10">
        <h3 className="font-['Inter'] font-semibold text-[26px] sm:text-[34px] md:text-[42px] leading-tight text-white tracking-[-0.03em]">
          Designing, Coding, And Tomorrow&apos;s Innovations Today.
        </h3>
        <p className="font-['Inter'] font-normal text-[15px] sm:text-[18px] md:text-[20px] text-white/75 tracking-[-0.01em]">
          Designed and developed with ❤️ by Nibble Computer Society
        </p>
      </div>
    </section>
  )
}
