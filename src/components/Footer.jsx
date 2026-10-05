

import React from "react"
import { CursorDrivenParticleTypography } from "./CursorDrivenParticleTypography"

const assetPathPrefix = "/assets"

const imgInstagram = `${assetPathPrefix}/42741.svg`
const imgLinkedin = `${assetPathPrefix}/linkedin-icon.svg`
const imgVectorLeaf = `${assetPathPrefix}/Vector.svg`

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

const imgSphereLeafLeft = `${assetPathPrefix}/cbf28.svg`
const imgSphereLeafRight = `${assetPathPrefix}/ac2ff.svg`

// SVG Liquid Glass Filter Component
const GlassFilter = () => (
  <svg style={{ display: "none" }} aria-hidden="true">
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />

      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />

      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="200"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
)

// Liquid Glass Effect Wrapper Component

const GlassEffect = ({
  children,
  className = "",
  style = {},
  href,
  target = "_blank",
}) => {
  const glassStyle = {
    boxShadow:
      "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.05)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  }

  const content = (
    <div
      className={`relative flex font-semibold overflow-hidden text-white cursor-pointer transition-all duration-700 ${className}`}
      style={glassStyle}
    >
      {/* Glass Layers */}
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-inherit"
        style={{
          backdropFilter: "blur(12px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />

      <div
        className="absolute inset-0 z-10 rounded-inherit"
        style={{ background: "rgba(255, 255, 255, 0.10)" }}
      />

      <div
        className="absolute inset-0 z-20 rounded-inherit overflow-hidden"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.4), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.2)",
        }}
      />

      {/* Content */}
      <div className="relative z-30 w-full">{children}</div>
    </div>
  )

  return href ? (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className="block no-underline"
    >
      {content}
    </a>
  ) : (
    content
  )
}

export default function Footer({ hideParticleLogo = false }) {
  return (
    <footer
      id="connect-section"
      className="w-full flex flex-col items-center pt-[90px] pb-[70px] select-none relative z-20"
    >
      <GlassFilter />

      {/* 1. Top: Giant Interactive Particle Physics NIBBLE Heading */}
      {!hideParticleLogo && (
        <div className="hidden md:flex w-full flex-col items-center max-w-[1500px] px-4 mb-6 relative z-20">
          <div className="flex justify-center items-center w-full h-[240px] sm:h-[280px] md:h-[320px]">
            <CursorDrivenParticleTypography
              text="NIBBLE"
              fontSize={230}
              fontFamily="'Satoshi', Arial, sans-serif"
              particleSize={2.2}
              particleDensity={4.5}
              dispersionStrength={24}
              returnSpeed={0.08}
              color="#FFFFFF"
              className="w-full h-full min-h-0"
            />
          </div>
        </div>
      )}

      {/* 2. Liquid Glass LET'S CONNECT Box */}
      <div className="w-full flex flex-col items-center max-w-[1500px] px-4 my-8">
        <GlassEffect className="rounded-[36px] p-8 sm:p-10 hover:rounded-[42px] max-w-[660px] w-full border border-white/20">
          <div className="flex flex-col items-center gap-3.5 text-center w-full">
            <h2 className="font-['Satoshi',Arial,sans-serif] font-bold font-bold text-[28px] md:text-[34px] lg:text-[38px] leading-tight text-white tracking-tight uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              LET&apos;S CONNECT
            </h2>
            <p className="font-['Satoshi',Arial,sans-serif] font-normal text-[18px] sm:text-[20px] text-white/85 tracking-normal -mt-1">
              Follow NCS and stay in the loop.
            </p>

            {/* Liquid Glass Social Icons Dock */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mt-3">
              <a
                href="https://instagram.com/hackncs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="relative shrink-0 size-[48px] sm:size-[54px] p-2.5 rounded-2xl bg-white/10 border border-white/20 hover:scale-115 hover:bg-white/20 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg"
                style={{
                  transitionTimingFunction:
                    "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
                }}
              >
                <img
                  alt="Instagram"
                  className="block size-full object-contain"
                  src={imgInstagram}
                />
              </a>
              <a
                href="https://linkedin.com/company/hackncs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="relative shrink-0 size-[48px] sm:size-[54px] p-2.5 rounded-2xl bg-white/10 border border-white/20 hover:scale-115 hover:bg-white/20 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg"
                style={{
                  transitionTimingFunction:
                    "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
                }}
              >
                <img
                  alt="LinkedIn"
                  className="block size-full object-contain"
                  src={imgLinkedin}
                />
              </a>
            </div>
          </div>
        </GlassEffect>
      </div>

      {/* 3. FOOTER STRIP: TEAM AVATARS + BOTANICAL LEAF ACCENTS */}
      <div className="relative w-full max-w-[1500px] my-12 flex flex-col items-center z-30">
        {/* Top-Left Botanical Leaf Accent */}
        <img
          alt=""
          src={imgVectorLeaf}
          className="absolute -top-[44px] left-0 md:left-[30px] w-[75px] h-[80px] md:w-[95px] md:h-[100px] pointer-events-none z-30 drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]"
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
          className="absolute -bottom-[44px] right-0 md:right-[30px] w-[75px] h-[80px] md:w-[95px] md:h-[100px] pointer-events-none z-30 drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]"
          style={{ transform: "rotate(180deg) scaleX(-1)" }}
        />
      </div>

      {/* 4. Bottom Content Container (Slogan & Attribution) */}
      <div className="w-full flex flex-col items-center gap-[15px] max-w-[1500px] px-4 mt-8">
        <div className="flex flex-col items-center text-center gap-2.5">
          <h3 className="font-['Satoshi',Arial,sans-serif] font-medium font-medium text-[24px] md:text-[34px] leading-tight text-white tracking-tight">
            Designing, Coding, And Tomorrow&apos;s Innovations Today.
          </h3>
          <p className="font-['Satoshi',Arial,sans-serif] font-normal text-[16px] md:text-[20px] leading-normal text-white/80 tracking-normal">
            Designed and developed with ❤️ by Nibble Computer Society
          </p>
        </div>
      </div>
    </footer>
  )
}
