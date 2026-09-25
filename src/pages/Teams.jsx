import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const assetPathPrefix = "/assets"
const imgRectangle31 = `${assetPathPrefix}/e4014.png`
const imgRectangle32 = `${assetPathPrefix}/13843.png`
const imgRectangle33 = `${assetPathPrefix}/a965c.png`
const imgRectangle34 = `${assetPathPrefix}/4fb82.png`
const imgRectangle35 = `${assetPathPrefix}/2ba54.png`
const imgRectangle36 = `${assetPathPrefix}/76ffc.png`
const imgRectangle37 = `${assetPathPrefix}/b08c2.png`
const imgRectangle38 = `${assetPathPrefix}/d6099.png`
const imgRectangle39 = `${assetPathPrefix}/95320.png`
const imgRectangle40 = `${assetPathPrefix}/8de3e.png`
const imgRectangle41 = `${assetPathPrefix}/fa11a.png`
const imgRectangle42 = `${assetPathPrefix}/d4363.png`
const imgRectangle43 = `${assetPathPrefix}/ab3fe.png`
const imgRectangle44 = `${assetPathPrefix}/1a3f7.png`
const imgRectangle45 = `${assetPathPrefix}/e7c41.png`
const imgRectangle46 = `${assetPathPrefix}/54c1e.png`
const imgRectangle47 = `${assetPathPrefix}/45d44.png`
const imgRectangle48 = `${assetPathPrefix}/eded3.png`
const imgRectangle49 = `${assetPathPrefix}/5936a.png`
const imgRectangle50 = `${assetPathPrefix}/bcc5d.png`
const imgRectangle51 = `${assetPathPrefix}/1f7da.png`
const imgRectangle52 = `${assetPathPrefix}/9992e.png`
const imgRectangle53 = `${assetPathPrefix}/8a0a2.png`
const imgRectangle54 = `${assetPathPrefix}/3e9a1.png`
const imgRectangle55 = `${assetPathPrefix}/3598f.png`
const imgRectangle56 = `${assetPathPrefix}/3fe2c.png`
const imgRectangle57 = `${assetPathPrefix}/80f54.png`
const imgRectangle58 = `${assetPathPrefix}/66178.png`
const imgRectangle59 = `${assetPathPrefix}/19109.png`
const imgRectangle60 = `${assetPathPrefix}/fefeb.png`
const imgRectangle61 = `${assetPathPrefix}/dae7e.png`
const imgRectangle62 = `${assetPathPrefix}/00b92.png`
const imgRectangle63 = `${assetPathPrefix}/98caf.png`
const imgRectangle64 = `${assetPathPrefix}/36acf.png`
const imgRectangle65 = `${assetPathPrefix}/0bf96.png`
const imgRectangle66 = `${assetPathPrefix}/7555f.png`
const imgRectangle67 = `${assetPathPrefix}/70fac.png`
const imgRectangle68 = `${assetPathPrefix}/a110b.png`
const imgRectangle69 = `${assetPathPrefix}/33794.png`
const imgNcsLogo = `${assetPathPrefix}/d3aad.svg`
const imgLine1 = `${assetPathPrefix}/2d226.svg`

export default function Teams({ activePage = "Team", onNavigate }) {
  const [selectedMember, setSelectedMember] = useState(null)

  const handleCardClick = (e) => {
    const card = e.target.closest(".member-card")
    if (card) {
      const textContainer = card.querySelector(".text-center")

      let name = "Unknown"
      let role = "Unknown"

      if (textContainer) {
        const nameDiv = textContainer.querySelector("div")
        if (nameDiv) {
          const pTags = Array.from(nameDiv.querySelectorAll("p"))
          name = pTags.map((p) => p.innerText || p.textContent).join(" ")
        }

        // The role element is usually the direct p child of textContainer
        // So we can find the paragraph that isn't inside nameDiv
        const pTagsInContainer = Array.from(textContainer.querySelectorAll("p"))
        const roleP = pTagsInContainer.find(p => p.parentElement === textContainer)
        if (roleP) {
          role = roleP.innerText || roleP.textContent
        }
      }

      const imgElement = card.querySelector("img")
      const imgSrc = imgElement ? imgElement.getAttribute("src") : null
      const bgColorMatch = card.className.match(/bg-\[([^\]]+)\]/)
      const bgColor =
        card.style.backgroundColor ||
        (bgColorMatch ? bgColorMatch[1] : "#feb9ce")

      setSelectedMember({ 
        name, 
        role, 
        imgSrc, 
        bgColor,
        x: e.clientX,
        y: e.clientY
      })
    }
  }
  return (
    <div
      className="bg-transparent relative w-[1668px] min-h-screen mx-auto flex flex-col items-center pt-[27px] pb-[40px] shrink-0"
      data-node-id="1:291"
      data-name="Teams"
      onClick={handleCardClick}
    >
      <div
        className="content-stretch flex flex-col gap-[102px] items-center w-[1667.976px]"
        data-node-id="1:294"
      >
        <div
          className="content-stretch flex flex-col gap-[47px] items-center relative shrink-0 w-[1302.84px]"
          data-node-id="1:295"
        >
          <Navbar activePage={activePage} onNavigate={onNavigate} />
          <div
            className="content-stretch flex flex-col gap-[85px] items-center relative shrink-0 w-full"
            data-node-id="1:306"
          >
            <p
              className="[text-underline-position:from-font] [word-break:break-word] bg-clip-text decoration-from-font decoration-solid font-['Helvetica_Neue:Regular'] leading-[normal] not-italic relative shrink-0 text-[160px] text-[transparent] text-center tracking-[-6.4px] underline w-full"
              data-node-id="1:307"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1302.8 191' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(65.142 0 0 39.004 651.42 95.5)'><stop stop-color='rgba(255,255,255,1)' offset='0.33'/><stop stop-color='rgba(204,204,204,1)' offset='0.665'/><stop stop-color='rgba(153,153,153,1)' offset='1'/></radialGradient></defs></svg>\")",
              }}
            >
              TEAMS
            </p>
            <div
              className="content-stretch flex flex-col gap-[110px] items-end relative shrink-0 w-full"
              data-node-id="1:308"
            >
              <p
                className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[100px] text-center text-white tracking-[-4px] w-[min-content]"
                data-node-id="1:309"
              >
                4th Year
              </p>
              <div
                className="content-stretch flex flex-col items-center relative shrink-0 w-full"
                data-node-id="1:310"
                data-name="4TH YR"
              >
                <div
                  className="content-stretch flex flex-col gap-[17px] items-center leading-[0] relative shrink-0 w-[1285px]"
                  data-node-id="1:311"
                >
                  <div
                    className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                    data-node-id="1:312"
                  >
                    <div
                      className="bg-[#cbd5d4] col-1 h-[600px] ml-[868px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                      data-node-id="1:313"
                    >
                      <div
                        className="-translate-x-1/2 absolute h-[703.2px] left-[calc(50%-9.6px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[-89px] w-[472.55px]"
                        data-node-id="1:314"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                          src={imgRectangle31}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:315"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                      <div
                        className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                        data-node-id="1:316"
                      >
                        <div
                          className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                          data-node-id="1:317"
                        >
                          <p className="leading-[1.25] mb-0">Naziya</p>
                          <p className="leading-[1.25]">Praveen</p>
                        </div>
                        <p
                          className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                          data-node-id="1:318"
                        >
                          HOC Development
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-[#ffc931] col-1 h-[600px] ml-[434px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                      data-node-id="1:319"
                    >
                      <div
                        className="-translate-x-1/2 absolute h-[494px] left-1/2 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[106px] w-[332px]"
                        data-node-id="1:320"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                          src={imgRectangle32}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:321"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                      <div
                        className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                        data-node-id="1:322"
                      >
                        <div
                          className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                          data-node-id="1:323"
                        >
                          <p className="leading-[1.25] mb-0">Pranjyaditya</p>
                          <p className="leading-[1.25] mb-0">Singh</p>
                          <p className="leading-[1.25]">Chauhan</p>
                        </div>
                        <p
                          className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                          data-node-id="1:324"
                        >
                          HOC Design
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-[#feb9ce] col-1 h-[600px] ml-[651px] mt-[192px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                      data-node-id="1:325"
                    >
                      <div
                        className="-translate-x-1/2 absolute h-[586px] left-[calc(50%-97px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[33px] w-[394px]"
                        data-node-id="1:326"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                          src={imgRectangle33}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:327"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                      <div
                        className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                        data-node-id="1:328"
                      >
                        <div
                          className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                          data-node-id="1:329"
                        >
                          <p className="leading-[1.25] mb-0">Om</p>
                          <p className="leading-[1.25]">Tripathi</p>
                        </div>
                        <p
                          className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                          data-node-id="1:330"
                        >
                          HOC Programming
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-[#ffc931] col-1 h-[600px] ml-[1085px] mt-[192px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                      data-node-id="1:331"
                    >
                      <div
                        className="-translate-x-1/2 absolute h-[494px] left-[calc(50%-31px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[53px] w-[332px]"
                        data-node-id="1:332"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                          src={imgRectangle34}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:333"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                      <div
                        className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                        data-node-id="1:334"
                      >
                        <div
                          className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                          data-node-id="1:335"
                        >
                          <p className="leading-[1.25] mb-0">Ajeet</p>
                          <p className="leading-[1.25]">Bharti</p>
                        </div>
                        <p
                          className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                          data-node-id="1:336"
                        >
                          Creative Head
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-[#feb9ce] col-1 h-[600px] ml-[217px] mt-[192px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                      data-node-id="1:337"
                    >
                      <div
                        className="-translate-x-1/2 absolute h-[380.7px] left-[calc(50%-12.88px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[106px] w-[255.83px]"
                        data-node-id="1:338"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                          src={imgRectangle35}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:339"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                      <div
                        className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                        data-node-id="1:340"
                      >
                        <div
                          className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                          data-node-id="1:341"
                        >
                          <p className="leading-[1.25] mb-0">Ajinkya</p>
                          <p className="leading-[1.25]">Mishra</p>
                        </div>
                        <p
                          className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                          data-node-id="1:342"
                        >
                          CTC
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-[#cbd5d4] col-1 h-[600px] ml-0 mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                      data-node-id="1:343"
                    >
                      <div
                        className="-translate-x-1/2 absolute h-[586px] left-[calc(50%+12px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-0 w-[394px]"
                        data-node-id="1:344"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                          src={imgRectangle36}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:345"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                      <div
                        className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                        data-node-id="1:346"
                      >
                        <div
                          className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                          data-node-id="1:347"
                        >
                          <p className="leading-[1.25] mb-0">Kuldeep</p>
                          <p className="leading-[1.25]">Chaudhary</p>
                        </div>
                        <p
                          className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                          data-node-id="1:348"
                        >
                          President
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                    data-node-id="1:349"
                  >
                    <div
                      className="bg-[#feb9ce] col-1 h-[600px] ml-[868px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                      data-node-id="1:350"
                    >
                      <div
                        className="-translate-x-1/2 absolute h-[468.8px] left-[calc(50%+14.6px)] shadow-[2.88px_2.88px_2.88px_0px_rgba(0,0,0,0.25)] top-[87px] w-[315.034px]"
                        data-node-id="1:351"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                          src={imgRectangle37}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:352"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                      <div
                        className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                        data-node-id="1:353"
                      >
                        <div
                          className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                          data-node-id="1:354"
                        >
                          <p className="leading-[1.25] mb-0">Gaurang</p>
                          <p className="leading-[1.25]">Agarwal</p>
                        </div>
                        <p
                          className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                          data-node-id="1:355"
                        >
                          General Secretary
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-[#cbd5d4] col-1 h-[600px] ml-[651px] mt-[189px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                      data-node-id="1:356"
                    >
                      <div
                        className="-translate-x-1/2 absolute h-[586px] left-[calc(50%-10px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[98px] w-[394px]"
                        data-node-id="1:357"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                          src={imgRectangle38}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:358"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                      <div
                        className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                        data-node-id="1:359"
                      >
                        <div
                          className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                          data-node-id="1:360"
                        >
                          <p className="leading-[1.25] mb-0">Vibha</p>
                          <p className="leading-[1.25]">Gupta</p>
                        </div>
                        <p
                          className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                          data-node-id="1:361"
                        >
                          General Secretary
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-[#cbd5d4] col-1 h-[600px] ml-[434px] mt-[3px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                      data-node-id="1:362"
                    >
                      <div
                        className="-translate-x-1/2 absolute h-[586px] left-[calc(50%+12px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-0 w-[394px]"
                        data-node-id="1:363"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                          src={imgRectangle39}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:364"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                      <div
                        className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                        data-node-id="1:365"
                      >
                        <div
                          className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                          data-node-id="1:366"
                        >
                          <p className="leading-[1.25] mb-0">Shivam</p>
                          <p className="leading-[1.25]">Goyal</p>
                        </div>
                        <p
                          className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                          data-node-id="1:367"
                        >
                          Management Head
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-[#cbd5d4] col-1 h-[600px] ml-[217px] mt-[192px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                      data-node-id="1:368"
                    >
                      <div
                        className="-translate-x-1/2 absolute h-[433px] left-[calc(50%+33px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[90px] w-[268px]"
                        data-node-id="1:369"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                          src={imgRectangle40}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:370"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                      <div
                        className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                        data-node-id="1:371"
                      >
                        <div
                          className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                          data-node-id="1:372"
                        >
                          <p className="leading-[1.25] mb-0">Khushi</p>
                          <p className="leading-[1.25]">Mishra</p>
                        </div>
                        <p
                          className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                          data-node-id="1:373"
                        >
                          Media Head
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1"
                      data-node-id="1:374"
                    >
                      <div
                        className="bg-[#feb9ce] col-1 h-[600px] ml-0 mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                        data-node-id="1:375"
                      >
                        <div
                          className="-translate-x-1/2 absolute h-[586px] left-[calc(50%-40px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[95px] w-[394px]"
                          data-node-id="1:376"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                            src={imgRectangle41}
                          />
                        </div>
                        <div
                          className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                          data-node-id="1:377"
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                          }}
                        />
                        <div
                          className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                          data-node-id="1:378"
                        >
                          <div
                            className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                            data-node-id="1:379"
                          >
                            <p className="leading-[1.25] mb-0">Pranjal</p>
                            <p className="leading-[1.25]">Gupta</p>
                          </div>
                          <p
                            className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                            data-node-id="1:380"
                          >
                            Finance Head
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p
                className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[100px] text-center text-white tracking-[-4px] w-[min-content]"
                data-node-id="1:381"
              >
                3rd Year
              </p>
              <div
                className="content-stretch flex flex-col gap-[17px] items-center leading-[0] relative shrink-0 w-[1285px]"
                data-node-id="1:382"
              >
                <div
                  className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                  data-node-id="1:383"
                >
                  <div
                    className="bg-[#feb9ce] col-1 h-[600px] ml-[217px] mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:384"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[380.7px] left-[calc(50%-17.08px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[110px] w-[255.83px]"
                      data-node-id="1:385"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle42}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:386"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:387"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:388"
                      >
                        <p className="leading-[1.25] mb-0">Anshika</p>
                        <p className="leading-[1.25]">Sen</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:389"
                      >
                        Programmer
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#feb9ce] col-1 h-[600px] ml-[651px] mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:390"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[586px] left-[calc(50%+0.12px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[7px] w-[394px]"
                      data-node-id="1:391"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle43}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:392"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:393"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:394"
                      >
                        <p className="leading-[1.25] mb-0">Parth</p>
                        <p className="leading-[1.25]">Agarwal</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:395"
                      >
                        Programmer
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#feb9ce] col-1 h-[600px] ml-[434px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:396"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[586px] left-[calc(50%-40px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[95px] w-[394px]"
                      data-node-id="1:397"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle44}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:398"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:399"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:400"
                      >
                        <p className="leading-[1.25] mb-0">Aryan</p>
                        <p className="leading-[1.25]">Singh</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:401"
                      >
                        Programmer
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#feb9ce] col-1 h-[600px] ml-[868px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:402"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[439px] left-[calc(50%-47.82px)] shadow-[2.88px_2.88px_2.88px_0px_rgba(0,0,0,0.25)] top-[115.88px] w-[295px]"
                      data-node-id="1:403"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle45}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:404"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:405"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:406"
                      >
                        <p className="leading-[1.25] mb-0">Utkarsh</p>
                        <p className="leading-[1.25]">Shukla</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:407"
                      >
                        Programmer
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#feb9ce] col-1 h-[600px] ml-[1085px] mt-[179px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:408"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[586px] left-[calc(50%-48.76px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-0 w-[394px]"
                      data-node-id="1:409"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle46}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:410"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:411"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:412"
                      >
                        <p className="leading-[1.25] mb-0">Shreyansh</p>
                        <p className="leading-[1.25]">Pandey</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:413"
                      >
                        Programmer
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#ffc931] col-1 h-[600px] ml-0 mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:414"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[436px] left-[calc(50%-0.5px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[61px] w-[293px]"
                      data-node-id="1:415"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle47}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:416"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:417"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:418"
                      >
                        <p className="leading-[1.25] mb-0">Athrva</p>
                        <p className="leading-[1.25]">Gupta</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:419"
                      >
                        Designer
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                  data-node-id="1:420"
                >
                  <div
                    className="bg-[#feb9ce] col-1 h-[600px] ml-0 mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:421"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[548px] left-[calc(50%+13px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[13px] w-[368px]"
                      data-node-id="1:422"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle48}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:423"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:424"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:425"
                      >
                        <p className="leading-[1.25] mb-0">Shivangi</p>
                        <p className="leading-[1.25]">Trivedi</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:426"
                      >
                        Developer
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#cbd5d4] col-1 h-[600px] ml-[433.89px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:427"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[586px] left-[calc(50%+12px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-0 w-[394px]"
                      data-node-id="1:428"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle49}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:429"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:430"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:431"
                      >
                        <p className="leading-[1.25] mb-0">Ayush</p>
                        <p className="leading-[1.25]">Vashisth</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:432"
                      >
                        Developer
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#cbd5d4] col-1 h-[600px] ml-[650.89px] mt-[160px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:433"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[1018.416px] left-[calc(50%+18.17px)] shadow-[10.161px_10.161px_10.161px_0px_rgba(0,0,0,0.25)] top-[-197px] w-[631.289px]"
                      data-node-id="1:434"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle50}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:435"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:436"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:437"
                      >
                        <p className="leading-[1.25] mb-0">Shreyansh</p>
                        <p className="leading-[1.25]">Shrivastava</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:438"
                      >
                        Developer
                      </p>
                    </div>
                    <div
                      className="absolute bg-[#cbd5d4] h-[600px] left-[-0.28px] overflow-clip rounded-[300px] group cursor-pointer member-card top-0 w-[200px]"
                      data-node-id="1:439"
                    >
                      <div
                        className="-translate-x-1/2 absolute h-[618px] left-[calc(50%+46.16px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[-18.12px] w-[416px]"
                        data-node-id="1:440"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                          src={imgRectangle51}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:441"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                      <div
                        className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                        data-node-id="1:442"
                      >
                        <div
                          className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                          data-node-id="1:443"
                        >
                          <p className="leading-[1.25] mb-0">Lakshya</p>
                          <p className="leading-[1.25]">Dubey</p>
                        </div>
                        <p
                          className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                          data-node-id="1:444"
                        >
                          Developer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#cbd5d4] col-1 h-[600px] ml-[867.89px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:445"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[494px] left-1/2 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[106px] w-[332px]"
                      data-node-id="1:446"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle52}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:447"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:448"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:449"
                      >
                        <p className="leading-[1.25] mb-0">Shreyansh</p>
                        <p className="leading-[1.25] mb-0">Shekhar</p>
                        <p className="leading-[1.25]">Dwivedi</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:450"
                      >
                        Developer
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#feb9ce] col-1 h-[600px] ml-[216.79px] mt-[160px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:451"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[618px] left-[calc(50%+46.16px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[-18.12px] w-[416px]"
                      data-node-id="1:452"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle51}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:453"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:454"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:455"
                      >
                        <p className="leading-[1.25] mb-0">Lakshya</p>
                        <p className="leading-[1.25]">Dubey</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:456"
                      >
                        Developer
                      </p>
                    </div>
                    <div
                      className="absolute bg-[#feb9ce] h-[600px] left-[-0.19px] overflow-clip rounded-[300px] group cursor-pointer member-card top-0 w-[200px]"
                      data-node-id="1:457"
                    >
                      <div
                        className="-translate-x-1/2 absolute h-[1018.416px] left-[calc(50%+18.17px)] shadow-[10.161px_10.161px_10.161px_0px_rgba(0,0,0,0.25)] top-[-197px] w-[631.289px]"
                        data-node-id="1:458"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                          src={imgRectangle50}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:459"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                      <div
                        className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                        data-node-id="1:460"
                      >
                        <div
                          className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                          data-node-id="1:461"
                        >
                          <p className="leading-[1.25] mb-0">Shreyansh</p>
                          <p className="leading-[1.25]">Shrivastava</p>
                        </div>
                        <p
                          className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                          data-node-id="1:462"
                        >
                          Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                  data-node-id="1:463"
                >
                  <div
                    className="bg-[#e4dcd2] col-1 h-[600px] ml-[217px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:464"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[600px] left-1/2 shadow-[10.161px_10.161px_10.161px_0px_rgba(0,0,0,0.25)] top-0 w-[372px]"
                      data-node-id="1:465"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle53}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:466"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:467"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:468"
                      >
                        <p className="leading-[1.25] mb-0">Pragati</p>
                        <p className="leading-[1.25]">Rajput</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:469"
                      >
                        Technical
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#e4dcd2] col-1 h-[600px] ml-[434px] mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:470"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[573px] left-[calc(50%-3px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[27px] w-[332px]"
                      data-node-id="1:471"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle54}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:472"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:473"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:474"
                      >
                        <p className="leading-[1.25] mb-0">Vishnu</p>
                        <p className="leading-[1.25]">Tiwari</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:475"
                      >
                        Technical
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#cbd5d4] col-1 h-[600px] ml-0 mt-[179px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:476"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[472px] left-[calc(50%-0.5px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[25px] w-[305px]"
                      data-node-id="1:477"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle55}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:478"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:479"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:480"
                      >
                        <p className="leading-[1.25] mb-0">Aditya</p>
                        <p className="leading-[1.25]">Kumar</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:481"
                      >
                        Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p
                className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[100px] text-center text-white tracking-[-4px] w-[min-content]"
                data-node-id="1:482"
              >
                2nd Year
              </p>
              <div
                className="content-stretch flex flex-col gap-[17px] items-center leading-[0] relative shrink-0 w-[1286px]"
                data-node-id="1:483"
              >
                <div
                  className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                  data-node-id="1:484"
                >
                  <div
                    className="bg-[#ffc931] col-1 h-[600px] ml-0 mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:485"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[588px] left-[calc(50%+12.58px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[11.88px] w-[395px]"
                      data-node-id="1:486"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle56}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:487"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:488"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:489"
                      >
                        <p className="leading-[1.25] mb-0">Bhaskar</p>
                        <p className="leading-[1.25]">Shah</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:490"
                      >
                        Designer
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#ffc931] col-1 h-[600px] ml-[435px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:491"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[436px] left-[calc(50%-0.5px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[61px] w-[293px]"
                      data-node-id="1:492"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle57}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:493"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:494"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:495"
                      >
                        <p className="leading-[1.25] mb-0">Piyush</p>
                        <p className="leading-[1.25]">Gautam</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:496"
                      >
                        Designer
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#ffc931] col-1 h-[600px] ml-[217px] mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:497"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[472px] left-[calc(50%-0.5px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[25px] w-[305px]"
                      data-node-id="1:498"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle58}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:499"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:500"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:501"
                      >
                        <p className="leading-[1.25] mb-0">Darshita</p>
                        <p className="leading-[1.25]">Jain</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:502"
                      >
                        Designer
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#feb9ce] col-1 h-[600px] ml-[652px] mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:503"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[415px] left-[calc(50%+8.5px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[12px] w-[279px]"
                      data-node-id="1:504"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle59}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:505"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:506"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:507"
                      >
                        <p className="leading-[1.25]">Karnika</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:508"
                      >
                        Programmer
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#feb9ce] col-1 h-[600px] ml-[1086px] mt-[179px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:509"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[375px] left-[calc(50%+0.12px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[37px] w-[282px]"
                      data-node-id="1:510"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle60}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:511"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:512"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:513"
                      >
                        <p className="leading-[1.25] mb-0">Sanskar</p>
                        <p className="leading-[1.25]">Pal</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:514"
                      >
                        Programmer
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[869px] mt-0 place-items-start relative row-1"
                    data-node-id="1:515"
                  >
                    <div
                      className="bg-[#feb9ce] col-1 h-[600px] ml-0 mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                      data-node-id="1:516"
                    >
                      <div
                        className="-translate-x-1/2 absolute h-[1168px] left-[calc(50%-0.94px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[-535.12px] w-[785px]"
                        data-node-id="1:517"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                          src={imgRectangle61}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:518"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                      <div
                        className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                        data-node-id="1:519"
                      >
                        <div
                          className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                          data-node-id="1:520"
                        >
                          <p className="leading-[1.25] mb-0">Sidhi</p>
                          <p className="leading-[1.25]">Saxena</p>
                        </div>
                        <p
                          className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                          data-node-id="1:521"
                        >
                          Programmer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                  data-node-id="1:522"
                >
                  <div
                    className="bg-[#cbd5d4] col-1 h-[600px] ml-[868px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:523"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[548px] left-[calc(50%+17.08px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[37.88px] w-[368px]"
                      data-node-id="1:524"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle62}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:525"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:526"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:527"
                      >
                        <p className="leading-[1.25] mb-0">Saishree</p>
                        <p className="leading-[1.25]">Saxena</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:528"
                      >
                        Developer
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#cbd5d4] col-1 h-[600px] ml-[651px] mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:529"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[499px] left-[calc(50%+16.58px)] shadow-[10.161px_10.161px_10.161px_0px_rgba(0,0,0,0.25)] top-[5.88px] w-[309px]"
                      data-node-id="1:530"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle63}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:531"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:532"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:533"
                      >
                        <p className="leading-[1.25] mb-0">Anjneya</p>
                        <p className="leading-[1.25]">Singh</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:534"
                      >
                        Developer
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#feb9ce] col-1 h-[600px] ml-0 mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:535"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[474px] left-[calc(50%-0.82px)] shadow-[2.88px_2.88px_2.88px_0px_rgba(0,0,0,0.25)] top-[14.88px] w-[319px]"
                      data-node-id="1:536"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle64}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:537"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:538"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:539"
                      >
                        <p className="leading-[1.25] mb-0">Aryan</p>
                        <p className="leading-[1.25]">Singh</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:540"
                      >
                        Programmer
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#feb9ce] col-1 h-[600px] ml-[217px] mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:541"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[410px] left-[calc(50%+13.24px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[66px] w-[276px]"
                      data-node-id="1:542"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle65}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:543"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:544"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:545"
                      >
                        <p className="leading-[1.25] mb-0">Aanya</p>
                        <p className="leading-[1.25]">Gogia</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:546"
                      >
                        Programmer
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#feb9ce] col-1 h-[600px] ml-[434px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:547"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[486px] left-[calc(50%+45.66px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[30.88px] w-[327px]"
                      data-node-id="1:548"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle66}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:549"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:550"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:551"
                      >
                        <p className="leading-[1.25] mb-0">Mohd</p>
                        <p className="leading-[1.25]">Fahad</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:552"
                      >
                        Programmer
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                  data-node-id="1:553"
                >
                  <div
                    className="bg-[#e4dcd2] col-1 h-[600px] ml-[217px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:554"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[558px] left-[calc(50%+20.08px)] shadow-[10.161px_10.161px_10.161px_0px_rgba(0,0,0,0.25)] top-[106.88px] w-[346px]"
                      data-node-id="1:555"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle67}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:556"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:557"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:558"
                      >
                        <p className="leading-[1.25] mb-0">Tanishq</p>
                        <p className="leading-[1.25]">Marwari</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:559"
                      >
                        Technical
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#e4dcd2] col-1 h-[600px] ml-[434px] mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:560"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[599px] left-[calc(50%+13.58px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[-21.12px] w-[347px]"
                      data-node-id="1:561"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle68}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:562"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:563"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:564"
                      >
                        <p className="leading-[1.25] mb-0">Ansh</p>
                        <p className="leading-[1.25]">Mittal</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:565"
                      >
                        Technical
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#cbd5d4] col-1 h-[600px] ml-0 mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]"
                    data-node-id="1:566"
                  >
                    <div
                      className="-translate-x-1/2 absolute h-[586px] left-[calc(50%+18.08px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[-19.12px] w-[394px]"
                      data-node-id="1:567"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                        src={imgRectangle69}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:568"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap"
                      data-node-id="1:569"
                    >
                      <div
                        className="flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] relative shrink-0 text-[28px] text-white"
                        data-node-id="1:570"
                      >
                        <p className="leading-[1.25] mb-0">Tanishka</p>
                        <p className="leading-[1.25]">Israni</p>
                      </div>
                      <p
                        className="font-['Poppins:Regular'] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]"
                        data-node-id="1:571"
                      >
                        Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />

        {selectedMember && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setSelectedMember(null)}
            ></div>
            <div
              className="fixed z-50 bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 w-[340px] shadow-2xl transition-all duration-300 transform"
              style={{
                left: `${selectedMember.x}px`,
                top: `${selectedMember.y}px`,
                transform: "translate(-50%, -50%)",
                borderTop: `4px solid ${
                  selectedMember.bgColor.startsWith("#")
                    ? selectedMember.bgColor
                    : "#" + selectedMember.bgColor
                }`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
                onClick={() => setSelectedMember(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>

              <div className="flex flex-col items-center text-center mt-2">
                <h3 className="text-[22px] font-['Poppins',sans-serif] font-semibold text-white mb-1 leading-tight">
                  {selectedMember.name}
                </h3>
                <p className="text-[#ffd9e5] font-['Poppins',sans-serif] text-[14px] mb-5">
                  {selectedMember.role}
                </p>

                <div className="w-full h-[1px] bg-white/10 mb-5"></div>

                <p className="text-white/70 font-['Inter',sans-serif] text-[13px] leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>

                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center cursor-not-allowed hover:bg-white/10 transition-colors border border-white/5">
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center cursor-not-allowed hover:bg-white/10 transition-colors border border-white/5">
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center cursor-not-allowed hover:bg-white/10 transition-colors border border-white/5">
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
