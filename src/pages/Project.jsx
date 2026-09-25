import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { LiquidMetalButton } from "../components/LiquidMetalButton"

const assetPathPrefix = "/assets"
const imgRectangle124 = `${assetPathPrefix}/0e70d.png`
const imgRectangle125 = `${assetPathPrefix}/a201b.png`
const imgRectangle126 = `${assetPathPrefix}/86c2d.png`
const imgRectangle127 = `${assetPathPrefix}/12f0d.png`
const imgNcsLogo = `${assetPathPrefix}/d3aad.svg`
const imgVector = `${assetPathPrefix}/79f69.svg`
const imgVector1 = `${assetPathPrefix}/54ba9.svg`
const imgLine1 = `${assetPathPrefix}/57d57.svg`

export default function Project({ activePage = "Project", onNavigate }) {
  return (
    <div
      className="bg-transparent relative w-[1571px] min-h-screen mx-auto flex flex-col items-center pt-[27px] pb-[40px] shrink-0"
      data-node-id="1:187"
      data-name="project"
    >
      <div
        className="content-stretch flex flex-col gap-[50px] items-center w-[1571px]"
        data-node-id="1:189"
      >
        <Navbar activePage={activePage} onNavigate={onNavigate} />
        <div
          className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0 w-full"
          data-node-id="1:201"
        >
          <p
            className="[text-underline-position:from-font] [word-break:break-word] bg-clip-text decoration-from-font decoration-solid font-['Helvetica_Neue:Regular'] leading-[normal] not-italic relative shrink-0 text-[80px] text-[transparent] text-center tracking-[-3.2px] underline w-full"
            data-node-id="1:202"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1571 95' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(78.55 0 0 19.4 785.5 47.5)'><stop stop-color='rgba(255,255,255,1)' offset='0.33'/><stop stop-color='rgba(204,204,204,1)' offset='0.665'/><stop stop-color='rgba(153,153,153,1)' offset='1'/></radialGradient></defs></svg>\")",
            }}
          >
            PROJECTS
          </p>
          <div
            className="content-stretch flex gap-[77px] items-start relative shrink-0 w-full"
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
                    <LiquidMetalButton
                      label="View Project"
                      width={157}
                      height={38}
                      fontSize={15}
                      icon={
                        <div className="relative shrink-0 size-[12px] opacity-90">
                          <img
                            alt=""
                            className="block size-full object-contain"
                            src={imgVector1}
                          />
                        </div>
                      }
                      onClick={() =>
                        window.open(
                          "https://github.com/ncs-jss/registration",
                          "_blank",
                        )
                      }
                    />
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
                    <LiquidMetalButton
                      label="View Project"
                      width={157}
                      height={38}
                      fontSize={15}
                      icon={
                        <div className="relative shrink-0 size-[12px] opacity-90">
                          <img
                            alt=""
                            className="block size-full object-contain"
                            src={imgVector1}
                          />
                        </div>
                      }
                      onClick={() =>
                        window.open(
                          "https://github.com/ncs-jss/MCQ-Module",
                          "_blank",
                        )
                      }
                    />
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
                    <LiquidMetalButton
                      label="View Project"
                      width={157}
                      height={38}
                      fontSize={15}
                      icon={
                        <div className="relative shrink-0 size-[12px] opacity-90">
                          <img
                            alt=""
                            className="block size-full object-contain"
                            src={imgVector1}
                          />
                        </div>
                      }
                      onClick={() =>
                        window.open(
                          "https://github.com/ncs-jss/registration",
                          "_blank",
                        )
                      }
                    />
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
                    <LiquidMetalButton
                      label="View Project"
                      width={157}
                      height={38}
                      fontSize={15}
                      icon={
                        <div className="relative shrink-0 size-[12px] opacity-90">
                          <img
                            alt=""
                            className="block size-full object-contain"
                            src={imgVector1}
                          />
                        </div>
                      }
                      onClick={() =>
                        window.open(
                          "https://github.com/ncs-jss/registration",
                          "_blank",
                        )
                      }
                    />
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
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
