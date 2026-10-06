
import Footer from "../components/Footer"
import { LiquidMetalButton } from "../components/LiquidMetalButton"
import { ExternalLink } from "lucide-react"

const assetPathPrefix = "/assets"
const imgRectangle124 = `${assetPathPrefix}/0e70d.png`
const imgRectangle125 = `${assetPathPrefix}/a201b.png`
const imgRectangle126 = `${assetPathPrefix}/86c2d.png`
const imgRectangle127 = `${assetPathPrefix}/12f0d.png`
const imgRectangle128 = `${assetPathPrefix}/9fda2.png`
const imgRectangle129 = `${assetPathPrefix}/92e35.png`
const imgRectangle130 = `${assetPathPrefix}/ccb7c.png`
const imgRectangle131 = `${assetPathPrefix}/5eeea.png`
const imgNcsLogo = `${assetPathPrefix}/d3aad.svg`
const imgVector = `${assetPathPrefix}/79f69.svg`
const imgVector1 = `${assetPathPrefix}/54ba9.svg`
const imgLine1 = `${assetPathPrefix}/57d57.svg`

function ViewProjectButton({ url, className = "" }) {
  return (
    <a
      href={url || "https://github.com/ncs-jss"}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-[12px] bg-[#212124]/90 hover:bg-[#2d2d32] border border-white/25 hover:border-white/50 text-[#f4f4f5] hover:text-white transition-all duration-200 shadow-md backdrop-blur-md cursor-pointer select-none group/vp ${className}`}
    >
      <span className="font-['Satoshi',Arial,sans-serif] text-[15px] font-medium tracking-tight whitespace-nowrap">
        View Project
      </span>
      <ExternalLink className="size-4 text-white/80 group-hover/vp:text-white transition-colors shrink-0" />
    </a>
  )
}

const allProjects = [
  {
    name: "JSS Infotech",
    image: imgRectangle124,
    description:
      "A digital hub of knowledge, bringing you updates on notices, assignments, and placement opportunities.",
    technologies: ["Django", "Python", "PostgreSQL"],
    url: "https://github.com/ncs-jss",
  },
  {
    name: "MCQ Module",
    image: imgRectangle125,
    description:
      "Picture this: an online theater for teachers and societies, where multiple-choice questions take the stage and the results pop up like magic tricks!",
    technologies: ["Php", "Laravel", "MySQL"],
    url: "https://github.com/ncs-jss",
  },
  {
    name: "Event Manager",
    image: imgRectangle126,
    description:
      "A college event-tracking web app, keeping students informed about daily happenings on campus. Stay in the loop, never miss out!",
    technologies: ["React", "Node", "MongoDB"],
    url: "https://github.com/ncs-jss",
  },
  {
    name: "T & P Portal",
    image: imgRectangle127,
    description:
      "An online portal for managing & automating the recruitment procedure for T&P Centre.",
    technologies: ["Python", "Html", "JavaScript"],
    url: "https://github.com/ncs-jss",
  },
  {
    name: "Know Your College",
    image: imgRectangle128,
    description:
      "'Know Your College', is a nifty web application that's your virtual compass for navigating the expansive world of JSS. It's your go-to guide for unraveling the intriguing corners of the college and its lively neighborhood.",
    technologies: ["React", "Node", "MongoDB"],
    url: "https://github.com/ncs-jss/Proj_kc01",
  },
  {
    name: "Codepad",
    image: imgRectangle129,
    description:
      "An online IDE (compiler) for running programs in C, C++, Python, Java with frequent questions to solve.",
    technologies: ["PHP", "Laravel", "MySQL"],
    url: "https://github.com/ncs-jss/Code-Pad",
  },
  {
    name: "Registration Module",
    image: imgRectangle130,
    description:
      "A platform for registration of students with record of their Unique IDs for various events like Zealicon.",
    technologies: ["JavaScript"],
    url: "https://github.com/ncs-jss/Registration_Module",
  },
  {
    name: "Plexus",
    image: imgRectangle131,
    description:
      "It is an online platform to host all kinds of digital events like Quizes etc. without any friction or technical know-how.",
    technologies: ["PHP", "Laravel", "MySQL"],
    url: "https://github.com/ncs-jss/plexus",
  },
]

const additionalProjects = allProjects.slice(4)

export default function Project({ activePage = "Project", onNavigate }) {
  return (
    <div
      className="bg-transparent relative w-full max-w-[1571px] min-h-screen mx-auto flex flex-col items-center pt-[27px] pb-[40px] shrink-0"
      data-node-id="1:187"
      data-name="project"
    >
      <div
        className="content-stretch flex flex-col gap-[50px] items-center w-full max-w-[1571px] px-4 md:px-8"
        data-node-id="1:189"
      >

        <div
          className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0 w-full"
          data-node-id="1:201"
        >
          <div className="flex flex-col items-center text-center gap-6 w-full mb-6">
            <p
              className="bg-clip-text font-['Satoshi:Black','Poppins:SemiBold',sans-serif] relative shrink-0 text-[48px] sm:text-[64px] md:text-[80px] text-[transparent] tracking-[-2px] md:tracking-[-3.2px] whitespace-nowrap"
              style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 263 108' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(13.15 0 0 22.055 131.5 54)'><stop stop-color='rgba(153,153,153,1)' offset='0.33'/><stop stop-color='rgba(204,204,204,1)' offset='0.665'/><stop stop-color='rgba(255,255,255,1)' offset='1'/></radialGradient></defs></svg>\")" }}
            >
              PROJECTS
            </p>
            <p className="font-['Satoshi',Arial,sans-serif] font-normal text-[14px] sm:text-[18px] md:text-[26px] lg:text-[34px] leading-[1.5] text-white/60 md:text-white/70 max-w-[1340px] w-full px-4 text-center tracking-tight break-words">
              We build a tech-driven campus culture by hosting hands-on events and building tools for students and faculty. Our projects help the college community stay updated, sharpen their problem-solving skills, and stay connected.
            </p>
          </div>
          {/* Mobile 2x4 Grid of Project Cards */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4 w-full max-w-[420px] mx-auto px-1 md:hidden select-none">
            {allProjects.map((project) => (
              <a
                key={project.name}
                href={project.url || "#"}
                target={project.url ? "_blank" : "_self"}
                rel="noreferrer"
                className="group flex flex-col gap-2.5 items-center w-full cursor-pointer active:scale-95 transition-transform duration-200"
              >
                {/* Glass Card Container */}
                <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md h-[215px] sm:h-[235px] overflow-hidden relative rounded-[24px] w-full border border-white/20 transition-all duration-300 group-hover:border-white/40 shadow-lg p-2 flex items-center justify-center">
                  {/* Frame Vector */}
                  <div className="absolute inset-2 pointer-events-none">
                    <img
                      alt=""
                      className="size-full object-contain"
                      src={imgVector}
                    />
                  </div>
                  {/* Inner Image Container */}
                  <div className="relative w-[82%] h-[60%] border-2 border-white rounded-[6px] overflow-hidden shadow-inner bg-black/40">
                    <img
                      alt={project.name}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={project.image}
                    />
                  </div>
                  {/* Mobile View Project Button */}
                  <div className="absolute bottom-2.5 right-2.5 z-20 flex items-center gap-1 px-2 py-0.5 rounded-[8px] bg-[#212124]/90 border border-white/20 text-white/90 text-[10px] font-medium backdrop-blur-md shadow-md">
                    <span>View Project</span>
                    <ExternalLink className="size-2.5 text-white/80" />
                  </div>
                </div>

                {/* Title & Tech Badges */}
                <div className="flex flex-col items-center gap-1 w-full px-1">
                  <p className="font-['Helvetica_Neue:Regular'] font-bold text-[15px] sm:text-[17px] text-center text-white leading-tight tracking-tight line-clamp-1 group-hover:text-amber-200 transition-colors">
                    {project.name}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-[rgba(255,255,255,0.2)] px-1.5 py-0.5 rounded-[12px] font-['Helvetica_Neue:Medium'] text-[8px] sm:text-[9px] text-center text-white whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="font-['Helvetica_Neue:Regular'] text-[11px] sm:text-[12px] text-center text-white/70 leading-[1.35] line-clamp-3 px-0.5">
                  {project.description}
                </p>
              </a>
            ))}
          </div>

          {/* Desktop View: Original Layout */}
          <div
            className="hidden md:flex content-stretch flex-wrap justify-center gap-x-[77px] gap-y-[100px] items-start relative shrink-0 w-full"
            data-node-id="1:203"
          >
            <div
              className="group content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-[335px] cursor-pointer transition-all duration-300 hover:-translate-y-4"
              data-node-id="1:204"
            >
              <div
                className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md h-[455px] overflow-clip relative rounded-[40px] shrink-0 w-full border border-white/20 transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] group-hover:border-white/40"
                data-node-id="1:205"
              >
                <div
                  className="absolute contents left-[15px] top-[19px]"
                  data-node-id="1:206"
                >
                  <div
                    className="absolute contents inset-[4.18%_4.9%_3.77%_4.48%]"
                    data-node-id="1:207"
                  >
                    <div
                      className="absolute inset-[4.18%_4.9%_3.77%_4.48%]"
                      data-node-id="1:208"
                      data-name="Vector"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgVector}
                      />
                    </div>
                    <div
                      className="absolute border-3 border-solid border-white inset-[20.22%_7.46%_27.91%_7.16%] overflow-hidden rounded-[8px]"
                      data-node-id="1:209"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute h-[131.12%] left-[-22.03%] max-w-none top-[-15.28%] w-[144.06%] transition-transform duration-500 group-hover:scale-105"
                          src={imgRectangle124}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[141px] top-[344px] z-30">
                    <ViewProjectButton url={allProjects[0].url} />
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-center relative shrink-0 w-[212px]"
                data-node-id="1:214"
              >
                <p
                  className="[word-break:break-word] font-['Helvetica_Neue:Regular'] leading-[normal] min-w-full not-italic relative shrink-0 text-[40px] text-center text-white tracking-[-1.6px] w-[min-content] group-hover:text-amber-200 transition-colors"
                  data-node-id="1:215"
                >
                  JSS Infotech
                </p>
                <div
                  className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                  data-node-id="1:216"
                >
                  <div
                    className="bg-[rgba(255,255,255,0.2)] col-1 h-[16px] ml-0 mt-0 overflow-clip relative rounded-[24px] row-1 w-[42.4px]"
                    data-node-id="1:217"
                  >
                    <p
                      className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica_Neue:Medium'] leading-[normal] left-[21.1px] not-italic text-[8px] text-center text-white top-[2.4px] tracking-[-0.32px] whitespace-nowrap"
                      data-node-id="1:218"
                    >
                      Django
                    </p>
                  </div>
                  <div
                    className="bg-[rgba(255,255,255,0.2)] col-1 h-[16px] ml-[49.6px] mt-[0.8px] overflow-clip relative rounded-[24px] row-1 w-[42.4px]"
                    data-node-id="1:219"
                  >
                    <p
                      className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica_Neue:Medium'] leading-[normal] left-[21.1px] not-italic text-[8px] text-center text-white top-[2.4px] tracking-[-0.32px] whitespace-nowrap"
                      data-node-id="1:218"
                    >
                      Python
                    </p>
                  </div>
                  <div
                    className="bg-[rgba(255,255,255,0.2)] col-1 h-[16px] ml-[99.2px] mt-[0.8px] overflow-clip relative rounded-[24px] row-1 w-[52px]"
                    data-node-id="1:221"
                  >
                    <p
                      className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica_Neue:Medium'] leading-[normal] left-[26.4px] not-italic text-[8px] text-center text-white top-[3.2px] tracking-[-0.32px] whitespace-nowrap"
                      data-node-id="1:222"
                    >
                      PostgreSQL
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex items-center justify-center relative shrink-0"
                data-node-id="1:223"
              >
                <p
                  className="[word-break:break-word] font-['Helvetica_Neue:Regular'] leading-[normal] not-italic relative shrink-0 text-[22px] text-center text-white/90 tracking-[-0.88px] w-[286px]"
                  data-node-id="1:224"
                >
                  A digital hub of knowledge, bringing you updates on notices,
                  assignments, and placement opportunities.
                </p>
              </div>
            </div>
            {/* Project Card 2: MCQ Module */}
            <div
              className="group content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-[335px] cursor-pointer transition-all duration-300 hover:-translate-y-4"
              data-node-id="1:225"
            >
              <div
                className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md h-[455px] overflow-clip relative rounded-[40px] shrink-0 w-full border border-white/20 transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] group-hover:border-white/40"
                data-node-id="1:226"
              >
                <div
                  className="absolute contents left-[15px] top-[19px]"
                  data-node-id="1:227"
                >
                  <div
                    className="absolute contents inset-[4.18%_4.9%_3.77%_4.48%]"
                    data-node-id="1:228"
                  >
                    <div
                      className="absolute inset-[4.18%_4.9%_3.77%_4.48%]"
                      data-node-id="1:229"
                      data-name="Vector"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgVector}
                      />
                    </div>
                    <div
                      className="absolute border-3 border-solid border-white inset-[20.22%_7.46%_27.91%_7.16%] overflow-hidden rounded-[8px]"
                      data-node-id="1:230"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt="MCQ Module"
                          className="absolute h-[131.12%] left-[-22.03%] max-w-none top-[-15.28%] w-[144.06%] transition-transform duration-500 group-hover:scale-105"
                          src={imgRectangle125}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[141px] top-[344px] z-30">
                    <ViewProjectButton url={allProjects[1].url} />
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0 w-[212px]"
                data-node-id="1:235"
              >
                <p
                  className="[word-break:break-word] font-['Helvetica_Neue:Regular'] leading-[normal] not-italic relative shrink-0 text-[40px] text-center text-white tracking-[-1.6px] w-[231px] group-hover:text-amber-200 transition-colors"
                  data-node-id="1:236"
                >
                  MCQ Module
                </p>
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0"
                  data-node-id="1:237"
                >
                  <div
                    className="bg-[rgba(255,255,255,0.2)] h-[16px] overflow-clip relative rounded-[24px] shrink-0 w-[42.4px]"
                    data-node-id="1:238"
                  >
                    <p
                      className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica_Neue:Medium'] leading-[normal] left-[21.1px] not-italic text-[8px] text-center text-white top-[2.4px] tracking-[-0.32px] whitespace-nowrap"
                      data-node-id="1:239"
                    >
                      Php
                    </p>
                  </div>
                  <div
                    className="bg-[rgba(255,255,255,0.2)] h-[16px] overflow-clip relative rounded-[24px] shrink-0 w-[42.4px]"
                    data-node-id="1:240"
                  >
                    <p
                      className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica_Neue:Medium'] leading-[normal] left-[21.1px] not-italic text-[8px] text-center text-white top-[2.4px] tracking-[-0.32px] whitespace-nowrap"
                      data-node-id="1:241"
                    >
                      Laravel
                    </p>
                  </div>
                  <div
                    className="bg-[rgba(255,255,255,0.2)] h-[16px] overflow-clip relative rounded-[24px] shrink-0 w-[41px]"
                    data-node-id="1:242"
                  >
                    <p
                      className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica_Neue:Medium'] leading-[normal] left-[20.11px] not-italic text-[8px] text-center text-white top-[3px] tracking-[-0.32px] whitespace-nowrap"
                      data-node-id="1:243"
                    >
                      MySQL
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex items-center justify-center relative shrink-0"
                data-node-id="1:244"
              >
                <p
                  className="[word-break:break-word] font-['Helvetica_Neue:Regular'] h-[156px] leading-[normal] not-italic relative shrink-0 text-[22px] text-center text-white/90 tracking-[-0.88px] w-[286px]"
                  data-node-id="1:245"
                >
                  Picture this: an online theater for teachers and societies,
                  where multiple-choice questions take the stage and the results
                  pop up like magic tricks!
                </p>
              </div>
            </div>

            {/* Project Card 3: Event Manager */}
            <div
              className="group content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-[335px] cursor-pointer transition-all duration-300 hover:-translate-y-4"
              data-node-id="1:246"
            >
              <div
                className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md h-[455px] overflow-clip relative rounded-[40px] shrink-0 w-full border border-white/20 transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] group-hover:border-white/40"
                data-node-id="1:247"
              >
                <div
                  className="absolute contents left-[15px] top-[19px]"
                  data-node-id="1:248"
                >
                  <div
                    className="absolute contents inset-[4.18%_4.9%_3.77%_4.48%]"
                    data-node-id="1:249"
                  >
                    <div
                      className="absolute inset-[4.18%_4.9%_3.77%_4.48%]"
                      data-node-id="1:250"
                      data-name="Vector"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgVector}
                      />
                    </div>
                    <div
                      className="absolute border-3 border-solid border-white inset-[20.22%_7.46%_27.91%_7.16%] overflow-hidden rounded-[8px]"
                      data-node-id="1:251"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt="Event Manager"
                          className="absolute h-[131.12%] left-[-22.03%] max-w-none top-[-15.28%] w-[144.06%] transition-transform duration-500 group-hover:scale-105"
                          src={imgRectangle126}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[141px] top-[344px] z-30">
                    <ViewProjectButton url={allProjects[2].url} />
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0 w-[212px]"
                data-node-id="1:256"
              >
                <p
                  className="[word-break:break-word] font-['Helvetica_Neue:Regular'] leading-[normal] not-italic relative shrink-0 text-[40px] text-center text-white tracking-[-1.6px] w-[257px] group-hover:text-amber-200 transition-colors"
                  data-node-id="1:257"
                >
                  Event Manager
                </p>
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0"
                  data-node-id="1:258"
                >
                  <div
                    className="bg-[rgba(255,255,255,0.2)] h-[16px] overflow-clip relative rounded-[24px] shrink-0 w-[37px]"
                    data-node-id="1:259"
                  >
                    <p
                      className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica_Neue:Medium'] leading-[normal] left-[19px] not-italic text-[8px] text-center text-white top-[3px] tracking-[-0.32px] whitespace-nowrap"
                      data-node-id="1:260"
                    >
                      React
                    </p>
                  </div>
                  <div
                    className="bg-[rgba(255,255,255,0.2)] h-[16px] overflow-clip relative rounded-[24px] shrink-0 w-[35px]"
                    data-node-id="1:261"
                  >
                    <p
                      className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica_Neue:Medium'] leading-[normal] left-[18.3px] not-italic text-[8px] text-center text-white top-[3px] tracking-[-0.32px] whitespace-nowrap"
                      data-node-id="1:262"
                    >
                      Node
                    </p>
                  </div>
                  <div
                    className="bg-[rgba(255,255,255,0.2)] h-[16px] overflow-clip relative rounded-[24px] shrink-0 w-[44px]"
                    data-node-id="1:263"
                  >
                    <p
                      className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica_Neue:Medium'] leading-[normal] left-[22.1px] not-italic text-[8px] text-center text-white top-[3px] tracking-[-0.32px] whitespace-nowrap"
                      data-node-id="1:264"
                    >
                      MongoDB
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex items-center justify-center relative shrink-0"
                data-node-id="1:265"
              >
                <p
                  className="[word-break:break-word] font-['Helvetica_Neue:Regular'] h-[130px] leading-[normal] not-italic relative shrink-0 text-[22px] text-center text-white/90 tracking-[-0.88px] w-[286px]"
                  data-node-id="1:266"
                >
                  A college event-tracking web app, keeping students informed
                  about daily happenings on campus. Stay in the loop, never miss
                  out!
                </p>
              </div>
            </div>

            {/* Project Card 4: T & P Portal */}
            <div
              className="group content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-[335px] cursor-pointer transition-all duration-300 hover:-translate-y-4"
              data-node-id="1:267"
            >
              <div
                className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md h-[455px] overflow-clip relative rounded-[40px] shrink-0 w-full border border-white/20 transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] group-hover:border-white/40"
                data-node-id="1:268"
              >
                <div
                  className="absolute contents left-[15px] top-[19px]"
                  data-node-id="1:269"
                >
                  <div
                    className="absolute contents inset-[4.18%_4.9%_3.77%_4.48%]"
                    data-node-id="1:270"
                  >
                    <div
                      className="absolute inset-[4.18%_4.9%_3.77%_4.48%]"
                      data-node-id="1:271"
                      data-name="Vector"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgVector}
                      />
                    </div>
                    <div
                      className="absolute border-3 border-solid border-white inset-[20.22%_7.46%_27.91%_7.16%] overflow-hidden rounded-[8px]"
                      data-node-id="1:272"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt="T & P Portal"
                          className="absolute h-[131.12%] left-[-21.89%] max-w-none top-[-7.63%] w-[144.06%] transition-transform duration-500 group-hover:scale-105"
                          src={imgRectangle127}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[141px] top-[344px] z-30">
                    <ViewProjectButton url={allProjects[3].url} />
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0 w-[212px]"
                data-node-id="1:277"
              >
                <p
                  className="[word-break:break-word] font-['Helvetica_Neue:Regular'] leading-[normal] not-italic relative shrink-0 text-[40px] text-center text-white tracking-[-1.6px] w-[257px] group-hover:text-amber-200 transition-colors"
                  data-node-id="1:278"
                >{`T & P Portal`}</p>
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0"
                  data-node-id="1:279"
                >
                  <div
                    className="bg-[rgba(255,255,255,0.2)] h-[16px] overflow-clip relative rounded-[24px] shrink-0 w-[37px]"
                    data-node-id="1:280"
                  >
                    <p
                      className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica_Neue:Medium'] leading-[normal] left-[19px] not-italic text-[8px] text-center text-white top-[3px] tracking-[-0.32px] whitespace-nowrap"
                      data-node-id="1:281"
                    >
                      Python
                    </p>
                  </div>
                  <div
                    className="bg-[rgba(255,255,255,0.2)] h-[16px] overflow-clip relative rounded-[24px] shrink-0 w-[35px]"
                    data-node-id="1:282"
                  >
                    <p
                      className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica_Neue:Medium'] leading-[normal] left-[18.3px] not-italic text-[8px] text-center text-white top-[3px] tracking-[-0.32px] whitespace-nowrap"
                      data-node-id="1:283"
                    >
                      Html
                    </p>
                  </div>
                  <div
                    className="bg-[rgba(255,255,255,0.2)] h-[16px] overflow-clip relative rounded-[24px] shrink-0 w-[50px]"
                    data-node-id="1:284"
                  >
                    <p
                      className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica_Neue:Medium'] leading-[normal] left-[25px] not-italic text-[8px] text-center text-white top-[3px] tracking-[-0.32px] whitespace-nowrap"
                      data-node-id="1:285"
                    >
                      JavaScript
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex items-center justify-center relative shrink-0"
                data-node-id="1:286"
              >
                <p
                  className="[word-break:break-word] font-['Helvetica_Neue:Regular'] h-[130px] leading-[normal] not-italic relative shrink-0 text-[22px] text-center text-white/90 tracking-[-0.88px] w-[286px]"
                  data-node-id="1:287"
                >{`An online portal for managing & automating the recruitment procedure for T&P Centre.`}</p>
              </div>
            </div>
            {additionalProjects.map((project) => (
              <div
                key={project.name}
                className="group content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-[335px] cursor-pointer transition-all duration-300 hover:-translate-y-4"
              >
                <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md h-[455px] overflow-clip relative rounded-[40px] shrink-0 w-full border border-white/20 transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] group-hover:border-white/40">
                  <div className="absolute contents left-[15px] top-[19px]">
                    <div className="absolute contents inset-[4.18%_4.9%_3.77%_4.48%]">
                      <div className="absolute inset-[4.18%_4.9%_3.77%_4.48%]">
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgVector}
                        />
                      </div>
                      <div className="absolute border-3 border-solid border-white inset-[20.22%_7.46%_27.91%_7.16%] overflow-hidden rounded-[8px]">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img
                            alt={project.name}
                            className="absolute h-[131.12%] left-[-22.03%] max-w-none top-[-15.28%] w-[144.06%] transition-transform duration-500 group-hover:scale-105"
                            src={project.image}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[141px] top-[344px] z-30">
                      <ViewProjectButton url={project.url} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-[3px] w-full">
                  <p className="font-['Helvetica_Neue:Regular'] leading-[normal] text-[32px] text-center text-white tracking-[-1.28px] group-hover:text-amber-200 transition-colors">
                    {project.name}
                  </p>
                  <div className="flex flex-wrap justify-center gap-[8px]">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="bg-[rgba(255,255,255,0.2)] px-[7px] py-[2px] rounded-[24px] font-['Helvetica_Neue:Medium'] text-[8px] text-center text-white"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-[6px] w-full">
                  <p className="font-['Helvetica_Neue:Regular'] leading-[normal] text-[18px] text-center text-white/90 tracking-[-0.5px] w-[286px]">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
