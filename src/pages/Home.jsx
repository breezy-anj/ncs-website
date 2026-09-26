import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CursorDrivenParticleTypography from "../components/CursorDrivenParticleTypography"
import { LiquidMetalButton } from "../components/LiquidMetalButton"
import { CircularGallery } from "../components/ui/circular-gallery"

const assetPathPrefix = "/assets"
const imgFrame1171276288 = `${assetPathPrefix}/4f846.png`
const imgRectangle57 = `${assetPathPrefix}/82f8e.png`
const imgRectangle58 = `${assetPathPrefix}/1e5cf.png`
const imgRectangle59 = `${assetPathPrefix}/2890e.png`
const imgRectangle65 = `${assetPathPrefix}/bdbb7.png`
const imgRectangle64 = `${assetPathPrefix}/d4f3f.png`
const imgRectangle61 = `${assetPathPrefix}/a709e.png`
const imgRectangle62 = `${assetPathPrefix}/bbe17.png`
const imgRectangle63 = `${assetPathPrefix}/7bb82.png`
const imgRectangle66 = `${assetPathPrefix}/80376.png`
const imgRectangle67 = `${assetPathPrefix}/263e5.png`
const imgRectangle69 = `${assetPathPrefix}/612a9.png`
const imgRectangle70 = `${assetPathPrefix}/cfa52.png`
const imgRectangle71 = `${assetPathPrefix}/58748.png`
const imgRectangle72 = `${assetPathPrefix}/56dad.png`
const imgRectangle73 = `${assetPathPrefix}/f2953.png`
const imgRectangle74 = `${assetPathPrefix}/fc3a6.png`
const imgRectangle75 = `${assetPathPrefix}/f292d.png`
const imgRectangle76 = `${assetPathPrefix}/ae463.png`
const imgRectangle77 = `${assetPathPrefix}/22e9b.png`
const imgRectangle78 = `${assetPathPrefix}/5f77a.png`
const imgRectangle79 = `${assetPathPrefix}/88bf1.png`
const imgRectangle80 = `${assetPathPrefix}/e46c6.png`
const imgRectangle84 = `${assetPathPrefix}/5f1a1.png`
const imgRectangle86 = `${assetPathPrefix}/37fef.png`
const imgRectangle87 = `${assetPathPrefix}/24670.png`
const imgRectangle88 = `${assetPathPrefix}/bce08.png`
const imgRectangle89 = `${assetPathPrefix}/6b3ec.png`
const imgRectangle90 = `${assetPathPrefix}/46ee1.png`
const imgRectangle91 = `${assetPathPrefix}/3cd2d.png`
const imgRectangle92 = `${assetPathPrefix}/a5eaa.png`
const imgRectangle93 = `${assetPathPrefix}/96fc7.png`
const imgRectangle94 = `${assetPathPrefix}/6ce66.png`
const imgRectangle81 = `${assetPathPrefix}/6f303.png`
const imgRectangle82 = `${assetPathPrefix}/605b6.png`
const imgRectangle83 = `${assetPathPrefix}/ec0d1.png`
const imgRectangle95 = `${assetPathPrefix}/f6b8a.png`
const imgRectangle96 = `${assetPathPrefix}/2853a.png`
const imgRectangle97 = `${assetPathPrefix}/4eb20.png`
const imgRectangle98 = `${assetPathPrefix}/06f7a.png`
const imgRectangle99 = `${assetPathPrefix}/08de4.png`
const imgRectangle100 = `${assetPathPrefix}/f7af2.png`
const imgRectangle101 = `${assetPathPrefix}/8c1c9.png`
const imgRectangle102 = `${assetPathPrefix}/07de8.png`
const imgRectangle103 = `${assetPathPrefix}/2a0dc.png`
const imgRectangle104 = `${assetPathPrefix}/433ce.png`
const imgRectangle105 = `${assetPathPrefix}/b5d8d.png`
const imgRectangle106 = `${assetPathPrefix}/dd2d2.png`
const imgRectangle107 = `${assetPathPrefix}/54f3b.png`
const imgRectangle108 = `${assetPathPrefix}/2b885.png`
const imgRectangle109 = `${assetPathPrefix}/380c5.png`
const imgRectangle110 = `${assetPathPrefix}/fa829.png`
const imgRectangle111 = `${assetPathPrefix}/744af.png`
const imgRectangle112 = `${assetPathPrefix}/89f4f.png`
const imgRectangle113 = `${assetPathPrefix}/5135f.png`
const imgRectangle114 = `${assetPathPrefix}/7c482.png`
const imgRectangle68 = `${assetPathPrefix}/cf56a.png`
const imgRectangle60 = `${assetPathPrefix}/b9948.png`
const imgRectangle118 = `${assetPathPrefix}/2f419.png`
const imgRectangle117 = `${assetPathPrefix}/b1f71.png`
const imgRectangle116 = `${assetPathPrefix}/6e0af.png`
const imgRectangle115 = `${assetPathPrefix}/9f50b.png`
const imgRectangle119 = `${assetPathPrefix}/5beac.png`
const imgRectangle120 = `${assetPathPrefix}/1754d.png`
const imgRectangle121 = `${assetPathPrefix}/3fa85.png`
const imgRectangle122 = `${assetPathPrefix}/26af6.png`
const imgRectangle123 = `${assetPathPrefix}/e8a26.png`
const img581563659182268897793053042502331000629764086N1 = `${assetPathPrefix}/ba642.png`
const img623285865179398910581122732442702553504556033N1 = `${assetPathPrefix}/46a8e.png`
const img625070985180983354599209501403270473272173120N1 = `${assetPathPrefix}/f43fa.png`
const img639494071182369026933053048550229231404010493N1 = `${assetPathPrefix}/2a0cf.png`
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

export default function Home({ activePage = "Home", onNavigate }) {
  return (
    <div
      className="bg-transparent relative w-[1668px] min-h-screen mx-auto flex flex-col items-center pt-[27px] pb-[40px] shrink-0"
      data-node-id="1:24"
      data-name="Home"
    >
      <div
        className="content-stretch flex flex-col gap-[50px] items-center w-[1518px]"
        data-node-id="1:25"
      >
        <Navbar activePage={activePage} onNavigate={onNavigate} />
        <div
          className="content-stretch flex flex-col gap-[200px] items-center relative shrink-0 w-full"
          data-node-id="1:36"
        >
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full"
            data-node-id="1:37"
          >
            {/* Right illustration with smooth floating animation */}
            <div
              className="col-1 h-[840px] ml-[480px] mt-[-35px] relative row-1 w-[1038px] pointer-events-none select-none z-0 animate-float"
              data-node-id="1:38"
              data-name="Hero Illustration"
            >
              <img
                alt="NCS Hero Illustration"
                className="absolute block inset-0 max-w-none size-full object-contain pointer-events-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
                src="/assets/hero-illustration.png"
              />
            </div>

            {/* Left Typography & CTA */}
            <div
              className="col-1 content-stretch flex flex-col gap-[44px] items-start ml-0 mt-[25px] relative row-1 w-[820px] z-10"
              data-node-id="1:39"
            >
              <div className="flex flex-col gap-[14px] not-italic items-start relative shrink-0">
                <p
                  className="font-['Space_Mono',monospace] leading-[normal] ml-[4px] text-[#b0b0b0] text-[18px] tracking-[1.5px] uppercase whitespace-pre"
                  data-node-id="1:43"
                >
                  {`LEARN  •  BUILD  •  BELONG`}
                </p>
                <div
                  className="bg-clip-text font-['Inter:Bold',sans-serif] font-extrabold text-[145.2px] leading-[0.92] text-transparent tracking-[-5.8px] w-[820px] select-none hover:tracking-[-4px] transition-all duration-500"
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
                  className="font-['Space_Mono',monospace] leading-[normal] ml-[4px] text-[#b0b0b0] text-[18px] tracking-[1.5px] uppercase whitespace-pre"
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
            className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[1400px]"
            data-node-id="1:48"
          >
            <p
              className="[text-underline-position:from-font] [word-break:break-word] bg-clip-text decoration-from-font decoration-solid font-['Helvetica_Neue:Regular'] leading-[normal] min-w-full not-italic relative shrink-0 text-[80px] text-[transparent] tracking-[-3.2px] underline w-[min-content]"
              data-node-id="1:49"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1400 95' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(70 0 0 19.4 700 47.5)'><stop stop-color='rgba(255,255,255,1)' offset='0.33'/><stop stop-color='rgba(204,204,204,1)' offset='0.665'/><stop stop-color='rgba(153,153,153,1)' offset='1'/></radialGradient></defs></svg>\")",
              }}
            >
              CLUBS
            </p>
            <div
              className="flex flex-col gap-[90px] items-stretch relative shrink-0 w-[1400px]"
              data-node-id="1:50"
            >
              {/* Row 1: PROGRAMMING + Yellow Card */}
              <div
                className="group flex items-center justify-between w-full cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                data-node-id="1:52"
              >
                <p
                  className="font-['Inter:Bold'] font-bold leading-none not-italic text-[156.816px] text-white tracking-[-6.2726px] whitespace-nowrap select-none group-hover:text-amber-100 transition-colors duration-300"
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
                className="group flex items-center justify-start gap-[35px] w-full cursor-pointer transition-all duration-300 hover:scale-[1.01]"
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
                  <div className="absolute inset-0 p-5 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-white">
                    <span className="opacity-70 text-[10px] font-['Space_Mono',monospace] uppercase tracking-[1px] mb-2">Development</span>
                    <p className="opacity-100 text-[12px] font-['Helvetica_Neue:Regular'] leading-[1.3]">
                      From a rough idea to something you can actually use. We build, tweak, and polish, creating web and mobile apps that bring fresh concepts to life.
                    </p>
                  </div>
                </div>
                <p
                  className="font-['Inter:Bold'] font-bold leading-none not-italic text-[156.816px] text-white tracking-[-6.2726px] whitespace-nowrap select-none group-hover:text-indigo-100 transition-colors duration-300"
                  data-node-id="1:57"
                >
                  DEVELOPMENT
                </p>
              </div>

              {/* Row 3: DESIGNING + Pink Card */}
              <div
                className="group flex items-center justify-center gap-[35px] w-full ml-[60px] cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                data-node-id="1:60"
              >
                <p
                  className="font-['Inter:Bold'] font-bold leading-none not-italic text-[156.816px] text-white tracking-[-6.2726px] whitespace-nowrap select-none group-hover:text-pink-100 transition-colors duration-300"
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
                className="group flex items-center justify-start gap-[35px] w-full ml-[70px] cursor-pointer transition-all duration-300 hover:scale-[1.01]"
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
                  className="font-['Inter:Bold'] font-bold leading-none not-italic text-[156.816px] text-white tracking-[-6.2726px] whitespace-nowrap select-none group-hover:text-lime-100 transition-colors duration-300"
                  data-node-id="1:65"
                >
                  TECHNICAL
                </p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[1446px]"
            data-node-id="1:151"
          >
            <p
              className="[text-underline-position:from-font] [word-break:break-word] bg-clip-text decoration-from-font decoration-solid font-['Helvetica_Neue:Regular'] leading-[normal] not-italic relative shrink-0 text-[80px] text-[transparent] tracking-[-3.2px] underline w-full"
              data-node-id="1:152"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1446 95' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(72.3 0 0 19.4 723 47.5)'><stop stop-color='rgba(255,255,255,1)' offset='0.33'/><stop stop-color='rgba(204,204,204,1)' offset='0.665'/><stop stop-color='rgba(153,153,153,1)' offset='1'/></radialGradient></defs></svg>\")",
              }}
            >
              EVENTS
            </p>
            <div
              className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full"
              data-node-id="1:153"
            >
              <div className="font-['Inter:Semi_Bold'] font-semibold text-[128px] text-center text-white tracking-[-5.12px] leading-[1.08]">
                <p className="mb-0">CREATING</p>
                <p className="mb-0">COLLEGE EVENTS THAT</p>
                <p className="mb-0">LEAVE A MARK.</p>
              </div>
              <div className="relative h-[620px] w-full overflow-hidden">
                <CircularGallery
                  items={eventGalleryItems}
                  radius={490}
                  autoRotateSpeed={0.12}
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
