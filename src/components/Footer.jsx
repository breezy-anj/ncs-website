import React from "react"

const assetPathPrefix = "/assets"

const imgGithub = `${assetPathPrefix}/e31ad.svg`
const imgFacebook = `${assetPathPrefix}/70124.svg`
const imgInstagram = `${assetPathPrefix}/42741.svg`
const imgLinkedin = `${assetPathPrefix}/linkedin-icon.svg`

const imgVector3 = `${assetPathPrefix}/d7780.png`
const imgVector4 = `${assetPathPrefix}/09399.png`
const imgVector5 = `${assetPathPrefix}/7f2b2.png`
const imgVector6 = `${assetPathPrefix}/2dcb7.png`
const imgVector7 = `${assetPathPrefix}/eb3f6.png`
const imgVector8 = `${assetPathPrefix}/37c1c.png`
const imgVector9 = `${assetPathPrefix}/8c5e3.png`
const imgVector10 = `${assetPathPrefix}/5f41c.png`
const imgVector11 = `${assetPathPrefix}/57606.png`
const imgVector12 = `${assetPathPrefix}/78659.png`
const imgVector13 = `${assetPathPrefix}/aafdb.png`
const imgVector14 = `${assetPathPrefix}/1cfb8.png`
const imgVector15 = `${assetPathPrefix}/24d85.png`
const imgVector16 = `${assetPathPrefix}/ec320.png`
const imgVector17 = `${assetPathPrefix}/3d9e6.png`
const imgVector18 = `${assetPathPrefix}/a155c.png`
const imgVector19 = `${assetPathPrefix}/c4f90.png`
const imgVector20 = `${assetPathPrefix}/76641.png`
const imgVector21 = `${assetPathPrefix}/f40de.png`
const imgVector22 = `${assetPathPrefix}/bef56.png`
const imgVector23 = `${assetPathPrefix}/38532.png`
const imgVector24 = `${assetPathPrefix}/c7450.png`
const imgVector25 = `${assetPathPrefix}/b0174.png`
const imgVector26 = `${assetPathPrefix}/c9cff.png`
const imgVector27 = `${assetPathPrefix}/a218b.png`
const imgVector28 = `${assetPathPrefix}/91fb7.png`
const imgVector29 = `${assetPathPrefix}/755d4.png`
const imgVector30 = `${assetPathPrefix}/941a9.png`
const imgVector31 = `${assetPathPrefix}/e9298.png`
const imgVector32 = `${assetPathPrefix}/06448.png`
const imgVector33 = `${assetPathPrefix}/4d211.png`
const imgVector34 = `${assetPathPrefix}/a46e7.png`
const imgVector35 = `${assetPathPrefix}/ece41.png`
const imgVector36 = `${assetPathPrefix}/d3514.png`
const imgVector37 = `${assetPathPrefix}/1310c.png`
const imgVector38 = `${assetPathPrefix}/e8a90.png`
const imgVector39 = `${assetPathPrefix}/1cab6.png`
const imgVector40 = `${assetPathPrefix}/3830c.png`

// Decorative Botanical Leaves SVG
const imgVectorLeaf = `${assetPathPrefix}/Vector.svg`

const domainGroups = [
  {
    domain: "DESIGN",
    members: [
      { name: "Ajeet Bharti", photo: imgVector3 },
      { name: "Pranjyaditya Singh Chauhan", photo: imgVector4 },
      { name: "Athrva Gupta", photo: imgVector5 },
      { name: "Bhaskar Shah", photo: imgVector6 },
      { name: "Darshita Jain", photo: imgVector7 },
      { name: "Piyush Gautam", photo: imgVector8 },
    ],
  },
  {
    domain: "DEVOPS",
    members: [
      { name: "Kuldeep Singh", photo: imgVector9 },
      { name: "Naziya Praveen", photo: imgVector10 },
      { name: "Shivam Goyal", photo: imgVector11 },
      { name: "Khushi Mishra", photo: imgVector12 },
      { name: "Vibha Gupta", photo: imgVector13 },
      { name: "Shreyansh Shekhar Dwivedi", photo: imgVector14 },
      { name: "Lakshya Dubey", photo: imgVector15 },
      { name: "Ayush Vashisth", photo: imgVector16 },
      { name: "Aditya Kumar", photo: imgVector17 },
      { name: "Saishree Saxena", photo: imgVector18 },
      { name: "Anjneya Singh", photo: imgVector19 },
      { name: "Tanishka Israni", photo: imgVector20 },
    ],
  },
  {
    domain: "PROGRAM",
    members: [
      { name: "Ajinkya Mishra", photo: imgVector21 },
      { name: "Om Tripathi", photo: imgVector22 },
      { name: "Pranjal Gupta", photo: imgVector23 },
      { name: "Gaurang Agarwal", photo: imgVector24 },
      { name: "Anshika Saini", photo: imgVector25 },
      { name: "Aryan Singh", photo: imgVector26 },
      { name: "Shivani Trivedi", photo: imgVector27 },
      { name: "Shreyansh Shrivastava", photo: imgVector28 },
      { name: "Shreyansh Pandey", photo: imgVector29 },
      { name: "Utkarsh Shukla", photo: imgVector30 },
      { name: "Sanskar Pal", photo: imgVector31 },
      { name: "Aanya Gogia", photo: imgVector32 },
      { name: "Karnika", photo: imgVector33 },
      { name: "Aryan Singh", photo: imgVector34 },
      { name: "Mohd Fahad", photo: imgVector35 },
      { name: "Siddhi Saxena", photo: imgVector36 },
    ],
  },
  {
    domain: "TECHNICAL",
    members: [
      { name: "Pragati Rajput", photo: imgVector37 },
      { name: "Vishnu Tiwari", photo: imgVector38 },
      { name: "Ansh Mittal", photo: imgVector39 },
      { name: "Tanishq Marwari", photo: imgVector40 },
    ],
  },
]

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

function DomainBadge({ domain }) {
  return (
    <div className="flex items-center gap-2.5 shrink-0 mx-4 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/35 shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
      <span className="size-2 rounded-full bg-cyan-300 animate-pulse shadow-[0_0_8px_#67e8f9]" />
      <span
        className="text-white text-[15px] sm:text-[17px] font-black tracking-wider uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        style={{ fontFamily: "'Space Mono', 'Inter', monospace" }}
      >
        {domain}
      </span>
    </div>
  )
}

function MemberCard({ name, photo }) {
  return (
    <div className="flex items-center gap-3.5 shrink-0 group/card cursor-pointer px-4 sm:px-5">
      {/* Avatar with Chamfered Cut Corners (Top-Left & Bottom-Right) */}
      <div
        className="relative w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] shrink-0 overflow-hidden bg-black/50 transition-transform duration-300 group-hover/card:scale-108 shadow-md"
        style={{
          clipPath:
            "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
        }}
      >
        <img
          alt={name}
          src={photo}
          className="w-full h-full object-cover block"
          loading="lazy"
        />
      </div>

      {/* Member Name on Right Side */}
      <span
        className="text-white text-[15px] sm:text-[17px] font-medium tracking-tight whitespace-nowrap transition-colors duration-200 group-hover/card:text-blue-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {name}
      </span>
    </div>
  )
}

function SingleRibbonTrack() {
  return (
    <div className="flex items-center shrink-0">
      {domainGroups.map((group, gIdx) => (
        <React.Fragment key={`${group.domain}-${gIdx}`}>
          <DomainBadge domain={group.domain} />
          {group.members.map((m, idx) => (
            <MemberCard
              key={`${m.name}-${idx}`}
              name={m.name}
              photo={m.photo}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer
      id="connect-section"
      className="w-full flex flex-col items-center pt-[90px] pb-[70px] select-none relative z-20"
    >
      <GlassFilter />

      {/* 1. Top: Giant NIBBLE Heading */}
      <div className="w-full flex flex-col items-center max-w-[1500px] px-4 mb-8">
        <div className="flex justify-center items-center w-full">
          <h1
            className="font-['Inter'] font-black text-[110px] sm:text-[170px] md:text-[230px] leading-none tracking-[-0.04em] text-transparent bg-clip-text select-none text-center"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 50%, #4B5563 100%)",
              textShadow: "0 10px 40px rgba(0,0,0,0.8)",
            }}
          >
            NIBBLE
          </h1>
        </div>
      </div>

      {/* 2. Middle: Liquid Glass Royal Blue Team Ribbon spanning full width cleanly */}
      <div className="relative w-full my-10 flex justify-center">
        {/* Top-Left Botanical Leaf Accent */}
        <img
          alt=""
          src={imgVectorLeaf}
          className="absolute -top-[48px] left-[24px] w-[88px] h-[92px] pointer-events-none z-30 drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]"
        />

        {/* Liquid Glass Blue Ribbon Bar */}
        <div
          className="marquee-group relative w-full overflow-hidden py-4 border-y border-blue-400/50"
          style={{
            backgroundColor: "rgba(0, 56, 130, 0.90)",
            backdropFilter: "blur(6px)",
            boxShadow:
              "inset 2px 2px 2px 0 rgba(255, 255, 255, 0.45), inset -1px -1px 2px 1px rgba(255, 255, 255, 0.25), 0 0 50px rgba(0, 56, 130, 0.6)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 60px, black calc(100% - 60px), transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 60px, black calc(100% - 60px), transparent 100%)",
          }}
        >
          {/* Internal SVG Glass Distortion Layer */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              filter: "url(#glass-distortion)",
              opacity: 0.7,
            }}
          />

          {/* Continuous Infinite Marquee Track */}
          <div
            className="relative z-10 flex items-center w-max animate-marquee-left"
            style={{
              ["--marquee-duration"]: "150s",
            }}
          >
            <SingleRibbonTrack />
            <SingleRibbonTrack />
            <SingleRibbonTrack />
          </div>
        </div>

        {/* Bottom-Right Botanical Leaf Accent */}
        <img
          alt=""
          src={imgVectorLeaf}
          className="absolute -bottom-[48px] right-[24px] w-[88px] h-[92px] pointer-events-none z-30 drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]"
          style={{ transform: "rotate(180deg) scaleX(-1)" }}
        />
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
