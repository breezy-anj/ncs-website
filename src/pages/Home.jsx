import Footer from "../components/Footer"
import CursorDrivenParticleTypography from "../components/CursorDrivenParticleTypography"
import { LiquidMetalButton } from "../components/LiquidMetalButton"
import SocialCards from "../components/ui/card-fan-carousel"
import { Component as ImageAutoSlider } from "../components/ui/image-auto-slider"


const assetPathPrefix = "/assets"
const imgRectangle71 = `${assetPathPrefix}/58748.png`
const imgRectangle114 = `${assetPathPrefix}/7c482.png`
const imgRectangle60 = `${assetPathPrefix}/b9948.png`
const imgRectangle115 = `${assetPathPrefix}/9f50b.png`
const imgRectangle45 = `${assetPathPrefix}/35193.png`
const imgRectangle48 = `${assetPathPrefix}/bb76c.png`
const imgRectangle50 = `${assetPathPrefix}/78cf7.png`
const imgNcsLogo = `${assetPathPrefix}/8f22e.svg`
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

const eventFanCards = eventGalleryItems.map((item) => ({
  imgUrl: item.photo.url,
  alt: item.photo.text,
  linkUrl: item.href,
}))

export default function Home({ activePage = "Home", onNavigate }) {
  return (
    <div
      className="bg-transparent relative w-full max-w-[1668px] min-h-screen mx-auto flex flex-col items-center pt-[27px] pb-[40px] shrink-0 overflow-hidden"
      data-node-id="1:24"
      data-name="Home"
    >
      <div
        className="content-stretch flex flex-col gap-[50px] items-center w-full max-w-[1518px] px-4 md:px-8"
        data-node-id="1:25"
      >
        <div
          className="content-stretch flex flex-col gap-24 md:gap-[200px] items-center relative shrink-0 w-full"
          data-node-id="1:36"
        >
          <div
            className="flex flex-col-reverse md:grid md:grid-cols-[max-content] md:grid-rows-[max-content] md:inline-grid place-items-center md:place-items-start relative shrink-0 w-full"
            data-node-id="1:37"
          >
            {/* Right illustration with smooth floating animation */}
            <div
              className="relative z-0 animate-float w-full max-w-[400px] md:max-w-none md:w-[1038px] md:h-[840px] md:col-1 md:row-1 md:ml-[480px] md:-mt-[35px] pointer-events-none select-none mb-10 md:mb-0"
              data-node-id="1:38"
              data-name="Hero Illustration"
            >
              <img
                alt="NCS Hero Illustration"
                className="block md:absolute inset-0 max-w-full md:max-w-none w-full h-auto md:size-full object-contain pointer-events-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
                src="/assets/hero1.svg"
              />
            </div>

            {/* Left Typography & CTA */}
            <div
              className="flex flex-col gap-8 md:gap-[44px] items-center md:items-start text-center md:text-left relative z-10 w-full md:w-[820px] md:col-1 md:row-1 md:mt-[25px]"
              data-node-id="1:39"
            >
              <div className="flex flex-col gap-4 md:gap-[14px] not-italic items-center md:items-start relative shrink-0 w-full">
                <p
                  className="font-['Space_Mono',monospace] leading-[normal] md:ml-[4px] text-[#b0b0b0] text-[14px] md:text-[18px] tracking-[1.5px] uppercase whitespace-pre text-center md:text-left"
                  data-node-id="1:43"
                >
                  {`LEARN  •  BUILD  •  BELONG`}
                </p>
                <div
                  className="bg-clip-text font-['Inter:Bold',sans-serif] font-extrabold text-[72px] sm:text-[96px] md:text-[145.2px] leading-[0.92] text-transparent tracking-[-2px] md:tracking-[-5.8px] w-full md:w-[820px] select-none hover:tracking-0 md:hover:tracking-[-4px] transition-all duration-500"
                  data-node-id="1:42"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #FFFFFF 0%, #B8B8B8 50%, #6E6E6E 100%)",
                  }}
                >
                  <p className="mb-0">NIBBLE</p>
                  <p className="mb-0">COMPUTER</p>
                  <p className="mb-0">SOCIETY</p>
                </div>
                <p
                  className="font-['Space_Mono',monospace] leading-[normal] md:ml-[4px] text-[#b0b0b0] text-[10px] sm:text-[12px] md:text-[18px] tracking-[1.5px] uppercase whitespace-pre text-center md:text-left max-w-full overflow-hidden text-ellipsis"
                  data-node-id="1:41"
                >
                  {`PEOPLE  •  TECHNOLOGY  •  IDEAS  •  TOGETHER`}
                </p>
              </div>

              {/* Join the Community Pill Button with Liquid Metal Shader */}
              <LiquidMetalButton
                label="Join the Community"
                width={260}
                height={56}
                fontSize={20}
                textColor="#ffffff"
                icon={
                  <span className="text-white text-[20px] font-semibold leading-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    ↗
                  </span>
                }
                onClick={() => {
                  const connectEl = document.getElementById("connect-section")
                  if (connectEl) {
                    connectEl.scrollIntoView({ behavior: "smooth" })
                  } else {
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      behavior: "smooth",
                    })
                  }
                }}
              />
            </div>
          </div>

          <div
            className="flex flex-col gap-10 md:gap-[20px] items-center relative shrink-0 w-full max-w-[1400px]"
            data-node-id="1:48"
          >
            <div className="flex flex-col items-center text-center gap-6 w-full mb-6">
              <h2
                className="font-['Inter'] font-black text-[64px] md:text-[120px] lg:text-[165px] leading-none tracking-[-0.04em] text-transparent bg-clip-text select-none text-center uppercase"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #FFFFFF 0%, #D4D4D8 45%, #52525B 100%)",
                  textShadow: "0 10px 40px rgba(0,0,0,0.9)",
                }}
              >
                CLUBS
              </h2>
              <p className="font-['Inter'] font-light text-[18px] md:text-[26px] lg:text-[38px] leading-[1.42] text-[#E4E4E7] max-w-[1340px] text-center tracking-[-0.02em]">
                Explore our specialized clubs in Web Development, Programming, Design, and Technology. Discover new skills, unleash your creativity, and turn your ideas into reality. Join our vibrant community and build your future with us!
              </p>
            </div>
            <div
              className="flex flex-col gap-12 md:gap-[90px] items-stretch relative shrink-0 w-full"
              data-node-id="1:50"
            >
              {/* Row 1: PROGRAMMING + Yellow Card */}
              <div
                className="group flex flex-col md:flex-row items-center justify-between w-full cursor-pointer transition-all duration-300 hover:scale-[1.01] gap-6 md:gap-0"
                data-node-id="1:52"
              >
                <p
                  className="font-['Inter:Bold'] font-bold leading-none not-italic text-[60px] sm:text-[90px] md:text-[156.816px] text-white tracking-[-2px] md:tracking-[-6.2726px] whitespace-nowrap select-none group-hover:text-amber-100 transition-colors duration-300 text-center md:text-left"
                  data-node-id="1:53"
                >
                  PROGRAMMING
                </p>
                <div
                  className="bg-size-[1024px_1024px,auto_auto] bg-top-left h-[229px] overflow-clip relative rounded-[34px] w-[198px] flex items-center justify-center shadow-lg shrink-0 transition-all duration-300 group-hover:scale-[1.2] group-hover:-rotate-2 group-hover:shadow-[0_20px_40px_rgba(253,211,68,0.4)]"
                  data-node-id="1:54"
                  style={{
                    backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(90deg, rgb(253, 211, 68) 0%, rgb(253, 211, 68) 100%)`,
                  }}
                >
                  <img
                    alt="Programming"
                    className="absolute w-[124px] h-[124px] object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-50"
                    src={imgProgrammingIcon}
                  />
                  <div className="absolute inset-0 p-5 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-black">
                    <span className="opacity-60 text-[10px] font-['Space_Mono',monospace] uppercase tracking-[1px] mb-2">Programming</span>
                    <p className="opacity-95 text-[12px] font-['Helvetica_Neue:Regular'] leading-[1.3]">
                      Where problem-solving meets pure creativity. We take tricky problems and turn them into clean, working code, taking abstract logic and turning it into tools that actually work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 2: Purple Card + DEVELOPMENT */}
              <div
                className="group flex flex-col-reverse md:flex-row items-center justify-start gap-6 md:gap-[35px] w-full cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                data-node-id="1:56"
              >
                <div
                  className="bg-size-[1024px_1024px,auto_auto] bg-top-left h-[229px] overflow-clip relative rounded-[34px] w-[198px] flex items-center justify-center shadow-lg shrink-0 transition-all duration-300 group-hover:scale-[1.2] group-hover:rotate-2 group-hover:shadow-[0_20px_40px_rgba(102,99,255,0.4)]"
                  data-node-id="1:58"
                  style={{
                    backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(90deg, rgb(102, 99, 255) 0%, rgb(102, 99, 255) 100%)`,
                  }}
                >
                  <img
                    alt="Development"
                    className="absolute w-[124px] h-[124px] object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-50"
                    src={imgDevelopmentIcon}
                  />
                  <div className="absolute inset-0 p-5 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-black">
                    <span className="opacity-70 text-[10px] font-['Space_Mono',monospace] uppercase tracking-[1px] mb-2">Development</span>
                    <p className="opacity-100 text-[12px] font-['Helvetica_Neue:Regular'] leading-[1.3]">
                      From a rough idea to something you can actually use. We build, tweak, and polish, creating web and mobile apps that bring fresh concepts to life.
                    </p>
                  </div>
                </div>
                <p
                  className="font-['Inter:Bold'] font-bold leading-none not-italic text-[60px] sm:text-[90px] md:text-[156.816px] text-white tracking-[-2px] md:tracking-[-6.2726px] whitespace-nowrap select-none group-hover:text-indigo-100 transition-colors duration-300 text-center md:text-left"
                  data-node-id="1:57"
                >
                  DEVELOPMENT
                </p>
              </div>

              {/* Row 3: DESIGNING + Pink Card */}
              <div
                className="group flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[35px] w-full md:ml-[60px] cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                data-node-id="1:60"
              >
                <p
                  className="font-['Inter:Bold'] font-bold leading-none not-italic text-[60px] sm:text-[90px] md:text-[156.816px] text-white tracking-[-2px] md:tracking-[-6.2726px] whitespace-nowrap select-none group-hover:text-pink-100 transition-colors duration-300 text-center md:text-left"
                  data-node-id="1:61"
                >
                  DESIGNING
                </p>
                <div
                  className="bg-size-[1024px_1024px,auto_auto] bg-top-left h-[229px] overflow-clip relative rounded-[34px] w-[198px] flex items-center justify-center shadow-lg shrink-0 transition-all duration-300 group-hover:scale-[1.2] group-hover:-rotate-2 group-hover:shadow-[0_20px_40px_rgba(255,109,253,0.4)]"
                  data-node-id="1:62"
                  style={{
                    backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(90deg, rgb(255, 109, 253) 0%, rgb(255, 109, 253) 100%)`,
                  }}
                >
                  <img
                    alt="Designing"
                    className="absolute w-[124px] h-[124px] object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-50"
                    src={imgVector1}
                  />
                  <div className="absolute inset-0 p-5 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-black">
                    <span className="opacity-60 text-[10px] font-['Space_Mono',monospace] uppercase tracking-[1px] mb-2">Design</span>
                    <p className="opacity-95 text-[12px] font-['Helvetica_Neue:Regular'] leading-[1.3]">
                      Giving ideas a visual voice. We focus on clean visuals, good user experience, and smart UI, creating designs that look great and feel effortless to use.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 4: Green Card + TECHNICAL */}
              <div
                className="group flex flex-col-reverse md:flex-row items-center justify-start gap-6 md:gap-[35px] w-full md:ml-[70px] cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                data-node-id="1:64"
              >
                <div
                  className="bg-size-[1024px_1024px,auto_auto] bg-top-left h-[229px] overflow-clip relative rounded-[34px] w-[198px] flex items-center justify-center shadow-lg shrink-0 transition-all duration-300 group-hover:scale-[1.2] group-hover:rotate-2 group-hover:shadow-[0_20px_40px_rgba(179,253,68,0.4)]"
                  data-node-id="1:66"
                  style={{
                    backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(90deg, rgb(179, 253, 68) 0%, rgb(179, 253, 68) 100%)`,
                  }}
                >
                  <img
                    alt="Technical"
                    className="absolute w-[124px] h-[124px] object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-50"
                    src={imgTechnicalIcon}
                  />
                  <div className="absolute inset-0 p-5 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-black">
                    <span className="opacity-60 text-[10px] font-['Space_Mono',monospace] uppercase tracking-[1px] mb-2">Technical</span>
                    <p className="opacity-95 text-[12px] font-['Helvetica_Neue:Regular'] leading-[1.3]">
                      Exploring what's coming next in tech. We dive hands-on into AI, open-source projects, and new tools, figuring out how the newest tech works under the hood.
                    </p>
                  </div>
                </div>
                <p
                  className="font-['Inter:Bold'] font-bold leading-none not-italic text-[60px] sm:text-[90px] md:text-[156.816px] text-white tracking-[-2px] md:tracking-[-6.2726px] whitespace-nowrap select-none group-hover:text-lime-100 transition-colors duration-300 text-center md:text-left"
                  data-node-id="1:65"
                >
                  TECHNICAL
                </p>
              </div>
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <section className="mx-auto w-full max-w-[1446px] text-center shrink-0">
            <div className="flex flex-col items-center text-center gap-6 w-full mb-6">
              <h2
                className="font-['Inter'] font-black text-[64px] md:text-[120px] lg:text-[165px] leading-none tracking-[-0.04em] text-transparent bg-clip-text select-none text-center uppercase"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #FFFFFF 0%, #D4D4D8 45%, #52525B 100%)",
                  textShadow: "0 10px 40px rgba(0,0,0,0.9)",
                }}
              >
                HIGHLIGHTS
              </h2>
              <p className="font-['Inter'] font-light text-[18px] md:text-[26px] lg:text-[38px] leading-[1.42] text-[#E4E4E7] max-w-[1340px] text-center tracking-[-0.02em]">
                From brainstorming ideas to building amazing things, every moment tells a story. Take a look at our events, workshops, and the people who make our community thrive.
              </p>
            </div>

            <div className="relative mt-12 md:mt-16 w-full h-[650px] sm:h-[750px] md:h-[840px] lg:h-[900px] rounded-[32px] overflow-hidden border border-white/10 bg-[#070707] shadow-2xl">
              <ImageAutoSlider />
            {/* Desktop: 3D Highlights Wheel */}
            <div className="hidden md:block relative mt-12 md:mt-16 w-full h-[650px] sm:h-[750px] md:h-[840px] lg:h-[900px] rounded-[32px] overflow-hidden border border-white/10 bg-[#070707] shadow-2xl">
              <HighlightsWheel label="NCS FAMILY" action="View" className="h-full w-full bg-transparent" />

            </div>
            {/* Mobile: Horizontally scrollable photo strip */}
            <div className="flex md:hidden w-full overflow-x-auto gap-4 py-4 mt-6 px-2 snap-x snap-mandatory scrollbar-hide">
              {[
                "/assets/highlights/web/IMG_2969.webp",
                "/assets/highlights/web/DSC04982.webp",
                "/assets/highlights/web/DSC05186.webp",
                "/assets/highlights/web/DSC05537.webp",
                "/assets/highlights/web/IMG_1634.webp",
                "/assets/highlights/web/IMG_2495.webp",
              ].map((src, i) => (
                <div key={i} className="shrink-0 snap-start w-[260px] h-[180px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img src={src} alt={`NCS Highlight ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </section>
          <div
            className="flex flex-col gap-[20px] items-center relative shrink-0 w-full max-w-[1446px]"
            data-node-id="1:151"
          >
            <h2
              className="font-['Inter'] font-black text-[64px] md:text-[120px] lg:text-[165px] leading-none tracking-[-0.04em] text-transparent bg-clip-text select-none text-center uppercase relative shrink-0 w-full"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #FFFFFF 0%, #D4D4D8 45%, #52525B 100%)",
                textShadow: "0 10px 40px rgba(0,0,0,0.9)",
              }}
            >
              EVENTS
            </h2>
            <div
              className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full"
              data-node-id="1:153"
            >
              <div className="font-['Satoshi:Medium','Poppins:SemiBold',sans-serif] text-[18px] md:text-[30px] text-center text-[#c2c2c2] tracking-normal leading-[1.6] max-w-[1200px] mt-4 mb-8 px-4">
                <p>
                  Ideas worth sharing. Experiences worth remembering. Join us for events that spark curiosity, inspire creativity, and bring our community together.
                </p>
              </div>
              <SocialCards cards={eventFanCards} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
