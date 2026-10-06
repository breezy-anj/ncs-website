import React, { useState, useEffect, useRef } from "react"
import { LiquidMetalButton } from "./LiquidMetalButton"

const assetPathPrefix = "/assets"

// Assets
const imgHeroIllustration = `${assetPathPrefix}/hero sec illust.svg`
const imgVectorLeaf = `${assetPathPrefix}/Vector.svg`
const imgPhoto1 = `${assetPathPrefix}/about-learning-session.webp` // Offline session in lab
const imgPhoto2 = `${assetPathPrefix}/about-tech-events.webp` // Large group community photo (IN OUT Grand Finale)
const imgPhoto3 = `${assetPathPrefix}/about-community-family.webp` // Event team members photo

/**
 * Crescent Moon with Golden Star Icon Badge
 */
function MoonStarBadge({ className = "" }) {
  return (
    <svg
      width="239"
      height="228"
      viewBox="0 0 239 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-[85px] h-auto md:w-[110px] lg:w-[125px] shrink-0 ${className}`}
    >
      <g filter="url(#filter0_din_694_34)">
        <path d="M96.5149 6.75598C118.145 -2.64254 145.062 -1.88178 166.992 6.84698C222.35 28.8808 248.337 92.4317 227.78 147.598C208.512 199.277 145.047 234.705 92.0149 212.853C91.5199 212.651 91.0249 212.441 90.5374 212.222C76.6624 209.751 63.6198 205.657 51.6048 198.183C28.6098 183.578 12.3649 160.419 6.46239 133.817C0.312389 107.326 5.94489 76.353 20.4274 53.5272C34.6924 31.0427 57.5824 14.5654 83.6974 9.22648C87.9649 8.35274 92.2399 7.72109 96.5149 6.75598Z" fill="#001F56"/>
        <path d="M96.5126 6.75598C118.143 -2.64254 145.06 -1.88178 166.99 6.84698C222.348 28.8808 248.335 92.4317 227.778 147.598C208.51 199.277 145.045 234.705 92.0126 212.853C91.5176 212.651 91.0227 212.441 90.5352 212.222C94.8777 211.625 102.468 211.918 108.063 211.29C126.138 209.121 143.118 201.502 156.76 189.443C211.105 141.643 204.43 44.7936 135.738 14.3399C122.088 8.28883 111.01 7.62154 96.5126 6.75598Z" fill="#FDEDCB"/>
        <path d="M81.207 84.0859C85.167 105.314 86.352 109.606 107.637 115.309C86.532 120.056 85.662 125.634 81.207 146.061C79.1295 139.989 79.407 133.097 75.357 126.611C70.257 118.432 62.472 117.221 53.832 115.168C75.342 111.625 77.292 103.591 81.207 84.0859Z" fill="#FEB503"/>
        <path d="M50.9501 55.3615C52.3826 54.8506 53.9652 55.555 54.5502 56.9624C55.1277 58.3697 54.5051 59.9856 53.1251 60.6353C52.1726 61.0846 51.0476 60.9729 50.2001 60.3442C49.3601 59.7155 48.9251 58.6713 49.0826 57.6293C49.2401 56.5865 49.9601 55.7156 50.9501 55.3615Z" fill="#F9F1E8"/>
        <path d="M125.389 162.84C126.709 162.723 127.916 163.598 128.216 164.89C128.516 166.183 127.819 167.499 126.581 167.975C125.614 168.349 124.511 168.124 123.769 167.397C123.026 166.671 122.771 165.577 123.116 164.598C123.469 163.618 124.354 162.932 125.389 162.84Z" fill="#F9F1E8"/>
        <path d="M133.944 51.5048C134.754 50.9819 135.789 50.9752 136.599 51.4876C137.409 52.0007 137.852 52.9384 137.724 53.8904C137.604 54.8424 136.929 55.6346 136.014 55.9189C134.844 56.2827 133.584 55.7253 133.059 54.6128C132.542 53.5003 132.917 52.174 133.944 51.5048Z" fill="#F9F1E8"/>
      </g>
      <defs>
        <filter id="filter0_din_694_34" x="0" y="0" width="238.787" height="227.424" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_694_34"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_694_34"/>
          <feTurbulence type="fractalNoise" baseFrequency="2 2" stitchTiles="stitch" numOctaves="3" result="noise" seed="3335" />
          <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
          </feComponentTransfer>
          <feComposite operator="in" in2="effect2_innerShadow_694_34" in="coloredNoise1" result="noise1Clipped" />
          <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
          <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
          <feMerge result="effect3_noise_694_34">
            <feMergeNode in="effect2_innerShadow_694_34" />
            <feMergeNode in="color1" />
          </feMerge>
          <feBlend mode="normal" in="effect3_noise_694_34" in2="effect1_dropShadow_694_34" result="effect3_noise_694_34"/>
        </filter>
      </defs>
    </svg>
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
        <div className="hidden sm:block absolute left-[30px] md:left-[80px] lg:left-[120px] top-[-10px] md:top-[10px] animate-float-gentle z-10">
          <MoonStarBadge />
        </div>

        {/* Decorative Multicolor Leaf on the right */}
        <div className="hidden sm:block absolute right-[30px] md:right-[80px] lg:right-[120px] top-[-25px] md:top-[-10px] animate-float z-10 pointer-events-none">
          <img
            src={imgVectorLeaf}
            alt=""
            className="w-[85px] h-[90px] md:w-[110px] md:h-[115px] object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Main Heading */}
        <div className="flex flex-col items-center justify-center max-w-[1100px] z-10 mt-2 sm:mt-6 md:mt-2">
          <h1
            className="font-['Satoshi_Variable','Satoshi',Arial,sans-serif] font-black text-[34px] xs:text-[44px] sm:text-[80px] md:text-[108px] lg:text-[117.8px] leading-[1.35] tracking-normal uppercase text-center break-words"
            style={{
              background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 33%, #999999 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            <span>WHERE IDEAS</span>
            <br />
            <span>GO DIGITAL.</span>
          </h1>

          {/* Subtitle / Intro Paragraph */}
          <div className="mt-6 sm:mt-8 md:mt-10 max-w-[820px] text-center px-4 w-full">
            <p className="font-['Satoshi',Arial,sans-serif] font-medium text-[13px] sm:text-[16px] md:text-[20px] leading-[1.6] text-white/60 md:text-white/70 tracking-normal break-words">
              NCS is a community of programmers, developers, designers, and AI/ML enthusiasts driven by curiosity and creativity.
              <br className="hidden md:inline" />{" "}
              We come together to learn, build, experiment, and turn ideas into impactful tech, while growing our skills and exploring what&apos;s next in technology.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          2. PHOTO GRID: 3 CARDS WITH IMAGES & DESCRIPTIONS (NO BOX/BACKGROUND)
      ========================================================= */}
      <div className="w-full max-w-[1440px] px-4 sm:px-6 my-8 md:my-14 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          {/* Card 1: Offline Learning Sessions */}
          <div className="group flex flex-col items-center transition-all duration-400 hover:-translate-y-1">
            <div className="w-full h-[220px] sm:h-[280px] rounded-[22px] overflow-hidden relative shadow-lg">
              <img
                src={imgPhoto1}
                alt="NCS Learning Session"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>
            <div className="pt-4 sm:pt-5 text-center flex-1 flex flex-col justify-start px-1">
              <p className="font-['Satoshi',Arial,sans-serif] font-medium text-[13px] sm:text-[16px] lg:text-[22px] leading-[1.5] text-white/60 md:text-white/70 break-words">
                We conduct offline, live learning sessions where members can get their doubts resolved, learn new concepts, and gain practical knowledge through interactive sessions and peer-to-peer learning.
              </p>
            </div>
          </div>

          {/* Card 2: Engaging Tech Events & Workshops */}
          <div className="group flex flex-col items-center transition-all duration-400 hover:-translate-y-1">
            <div className="w-full h-[220px] sm:h-[280px] rounded-[22px] overflow-hidden relative shadow-lg">
              <img
                src={imgPhoto2}
                alt="NCS Tech Events and Community"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>
            <div className="pt-4 sm:pt-5 text-center flex-1 flex flex-col justify-start px-1">
              <p className="font-['Satoshi',Arial,sans-serif] font-medium text-[13px] sm:text-[16px] lg:text-[22px] leading-[1.5] text-white/60 md:text-white/70 break-words">
                We organize engaging tech events, workshops, and interactive sessions that bring students together to learn, connect, and explore. From hackathons like IN OUT to hands-on activities, we create experiences where ideas turn into action.
              </p>
            </div>
          </div>

          {/* Card 3: Family & Growth Culture */}
          <div className="group flex flex-col items-center transition-all duration-400 hover:-translate-y-1">
            <div className="w-full h-[220px] sm:h-[280px] rounded-[22px] overflow-hidden relative shadow-lg">
              <img
                src={imgPhoto3}
                alt="NCS Family and Growth"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>
            <div className="pt-4 sm:pt-5 text-center flex-1 flex flex-col justify-start px-1">
              <p className="font-['Satoshi',Arial,sans-serif] font-medium text-[13px] sm:text-[16px] lg:text-[22px] leading-[1.5] text-white/60 md:text-white/70 break-words">
                More than a tech society, we&apos;re a family that learns, supports, and grows together. We share ideas, celebrate every win, and help each other become better together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          3. TAGLINE ACCENT: "Where Curious Minds Come Together..."
      ========================================================= */}
      <div className="w-full flex justify-center text-center px-4 my-6 sm:my-8 md:my-12 z-10">
        <p
          className="font-['Playfair_Display',_Georgia,_serif] italic font-semibold text-[17px] sm:text-[24px] md:text-[34px] leading-relaxed text-[#FEB80A] tracking-[-0.01em] drop-shadow-[0_2px_15px_rgba(254,184,10,0.35)] max-w-[800px] break-words"
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
      <div className="relative w-full max-w-[1300px] flex justify-center items-center mt-10 mb-6 md:my-10 px-4 overflow-visible">
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
