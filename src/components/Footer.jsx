
import SphereImageGrid from "./ui/img-sphere"
import { ALL_38_TEAM_MEMBERS } from "../data/teamMembers"
import React from "react"
import { CursorDrivenParticleTypography } from "./CursorDrivenParticleTypography"

const assetPathPrefix = "/assets"

const imgGithub = `${assetPathPrefix}/e31ad.svg`
const imgFacebook = `${assetPathPrefix}/70124.svg`
const imgInstagram = `${assetPathPrefix}/42741.svg`
const imgLinkedin = `${assetPathPrefix}/linkedin-icon.svg`

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

export default function Footer() {
  return (
    <footer
      id="connect-section"
      className="w-full flex flex-col items-center pt-[90px] pb-[70px] select-none relative z-20"
    >
      <GlassFilter />

      {/* 1. Top: Giant Interactive Particle Physics NIBBLE Heading */}
      <div className="w-full flex flex-col items-center max-w-[1500px] px-4 mb-6 relative z-20">
        <div className="flex justify-center items-center w-full h-[240px] sm:h-[280px] md:h-[320px]">
          <CursorDrivenParticleTypography
            text="NIBBLE"
            fontSize={230}
            fontFamily="'Inter', sans-serif"
            particleSize={2.2}
            particleDensity={4.5}
            dispersionStrength={24}
            returnSpeed={0.08}
            color="#FFFFFF"
            className="w-full h-full min-h-0"
          />
        </div>
      </div>

      {/* 2. Interactive Team Image Sphere */}
      <div className="relative mt-[20px] w-full max-w-[1200px] flex items-center justify-center">
        <div className="absolute left-0 sm:left-4 md:left-10 top-1/2 -translate-y-1/2 z-30 pointer-events-none w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] md:w-[170px] md:h-[170px]">
          <img
            src={imgSphereLeafLeft}
            alt=""
            className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]"
          />
        </div>
        <div className="relative z-20 flex justify-center items-center py-4">
          <SphereImageGrid
            images={ALL_38_TEAM_MEMBERS}
            containerSize={640}
            sphereRadius={240}
            dragSensitivity={0.8}
            momentumDecay={0.96}
            maxRotationSpeed={6}
            baseImageScale={0.15}
            hoverScale={1.3}
            perspective={1000}
            autoRotate={true}
            autoRotateSpeed={0.25}
          />
        </div>
        <div className="absolute right-0 sm:right-4 md:right-10 top-1/2 -translate-y-1/2 z-30 pointer-events-none w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] md:w-[170px] md:h-[170px]">
          <img
            src={imgSphereLeafRight}
            alt=""
            className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(236,72,153,0.6)]"
          />
        </div>
      </div>

      {/* 3. Liquid Glass LET'S CONNECT Box */}
      <div className="w-full flex flex-col items-center max-w-[1500px] px-4 my-8">
        <GlassEffect className="rounded-[36px] p-8 sm:p-10 hover:rounded-[42px] max-w-[660px] w-full border border-white/20">
          <div className="flex flex-col items-center gap-3.5 text-center w-full">
            <h2 className="font-['Inter'] font-semibold text-[36px] sm:text-[40px] leading-tight text-white tracking-[-1px] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              LET&apos;S CONNECT
            </h2>
            <p className="font-['Inter'] font-normal text-[17px] sm:text-[18px] text-white/85 tracking-[-0.3px] -mt-1">
              Follow NCS and stay in the loop.
            </p>

            {/* Liquid Glass Social Icons Dock */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mt-3">
              <a
                href="https://github.com/ncs-jss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="relative shrink-0 size-[48px] sm:size-[54px] p-2.5 rounded-2xl bg-white/10 border border-white/20 hover:scale-115 hover:bg-white/20 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg"
                style={{
                  transitionTimingFunction:
                    "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
                }}
              >
                <img
                  alt="GitHub"
                  className="block size-full object-contain"
                  src={imgGithub}
                />
              </a>
              <a
                href="https://facebook.com/nibblecomputersociety"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="relative shrink-0 size-[48px] sm:size-[54px] p-2.5 rounded-2xl bg-white/10 border border-white/20 hover:scale-115 hover:bg-white/20 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg"
                style={{
                  transitionTimingFunction:
                    "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
                }}
              >
                <img
                  alt="Facebook"
                  className="block size-full object-contain"
                  src={imgFacebook}
                />
              </a>
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

      {/* 4. Bottom Content Container (Slogan & Attribution) */}
      <div className="w-full flex flex-col items-center gap-[15px] max-w-[1500px] px-4 mt-8">
        <div className="flex flex-col items-center text-center gap-2.5">
          <h3 className="font-['Inter'] font-medium text-[30px] sm:text-[38px] md:text-[44px] leading-tight text-white tracking-[-1.5px]">
            Designing, Coding, And Tomorrow&apos;s Innovations Today.
          </h3>
          <p className="font-['Inter'] font-normal text-[16px] sm:text-[20px] md:text-[22px] leading-normal text-white/80 tracking-[-0.5px]">
            Designed and developed with ❤️ by Nibble Computer Society
          </p>
        </div>
      </div>
    </footer>
  )
}
