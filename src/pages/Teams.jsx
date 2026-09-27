import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const assetPathPrefix = "/assets";
const imgRectangle31 = `${assetPathPrefix}/e4014.png`;
const imgRectangle32 = `${assetPathPrefix}/13843.png`;
const imgRectangle33 = `${assetPathPrefix}/a965c.png`;
const imgRectangle34 = `${assetPathPrefix}/4fb82.png`;
const imgRectangle35 = `${assetPathPrefix}/2ba54.png`;
const imgRectangle36 = `${assetPathPrefix}/76ffc.png`;
const imgRectangle37 = `${assetPathPrefix}/b08c2.png`;
const imgRectangle38 = `${assetPathPrefix}/d6099.png`;
const imgRectangle39 = `${assetPathPrefix}/95320.png`;
const imgRectangle40 = `${assetPathPrefix}/8de3e.png`;
const imgRectangle41 = `${assetPathPrefix}/fa11a.png`;
const imgRectangle42 = `${assetPathPrefix}/d4363.png`;
const imgRectangle44 = `${assetPathPrefix}/1a3f7.png`;
const imgRectangle45 = `${assetPathPrefix}/e7c41.png`;
const imgRectangle46 = `${assetPathPrefix}/54c1e.png`;
const imgRectangle47 = `${assetPathPrefix}/45d44.png`;
const imgRectangle48 = `${assetPathPrefix}/eded3.png`;
const imgRectangle49 = `${assetPathPrefix}/5936a.png`;
const imgRectangle50 = `${assetPathPrefix}/bcc5d.png`;
const imgRectangle51 = `${assetPathPrefix}/1f7da.png`;
const imgRectangle52 = `${assetPathPrefix}/9992e.png`;
const imgRectangle53 = `${assetPathPrefix}/8a0a2.png`;
const imgRectangle54 = `${assetPathPrefix}/3e9a1.png`;
const imgRectangle55 = `${assetPathPrefix}/3598f.png`;
const imgRectangle56 = `${assetPathPrefix}/3fe2c.png`;
const imgRectangle57 = `${assetPathPrefix}/80f54.png`;
const imgRectangle58 = `${assetPathPrefix}/66178.png`;
const imgRectangle59 = `${assetPathPrefix}/19109.png`;
const imgRectangle60 = `${assetPathPrefix}/fefeb.png`;
const imgRectangle61 = `${assetPathPrefix}/dae7e.png`;
const imgRectangle62 = `${assetPathPrefix}/00b92.png`;
const imgRectangle63 = `${assetPathPrefix}/98caf.png`;
const imgRectangle64 = `${assetPathPrefix}/36acf.png`;
const imgRectangle65 = `${assetPathPrefix}/0bf96.png`;
const imgRectangle66 = `${assetPathPrefix}/7555f.png`;
const imgRectangle67 = `${assetPathPrefix}/70fac.png`;
const imgRectangle68 = `${assetPathPrefix}/a110b.png`;
const imgRectangle69 = `${assetPathPrefix}/33794.png`;
const imgNcsLogo = `${assetPathPrefix}/d3aad.svg`;
const imgLine1 = `${assetPathPrefix}/2d226.svg`;

function TeamCard({ 
  className, dataNodeId, 
  imgContainerClass, imgSrc, imgClass, 
  name, role, socials = []
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={className + " [perspective:1000px] cursor-pointer"}
      data-node-id={dataNodeId}
      onClick={(e) => { e.stopPropagation(); setIsFlipped(true); }}
      onMouseLeave={(e) => { e.stopPropagation(); setIsFlipped(false); }}
    >
      <div className={imgContainerClass}>
        <img alt="" className={imgClass} src={imgSrc} />
      </div>

      {/* The flip wrapper that contains only the gradient and text */}
      <div 
        className={"absolute inset-0 transition-transform duration-500 w-full h-full will-change-transform"}
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front Face: Gradient + Text */}
        <div 
          className="absolute inset-0 flex flex-col justify-end pb-8 items-center rounded-bl-[200px] rounded-br-[200px]"
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden",
            backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 45%, rgba(0, 0, 0, 0.95) 75%, rgb(0, 0, 0) 100%)",
            top: "352px", height: "248px"
          }}
        >
          <div className="flex flex-col font-['Poppins:SemiBold'] leading-[1.25] text-[28px] text-white text-center mb-2">
            {name.map((n, i) => <p key={i} className="mb-0" style={{margin: 0}}>{n}</p>)}
          </div>
          <p className="font-['Poppins:Regular'] text-[#ffd9e5] text-[16px] m-0" style={{margin: 0}}>{role}</p>
        </div>

        {/* Back Face: Gradient + Social Links */}
        <div 
          className="absolute inset-0 flex flex-col justify-end pb-12 items-center rounded-bl-[200px] rounded-br-[200px]"
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 30%, rgb(0, 0, 0) 100%)",
            top: "352px", height: "248px"
          }}
        >
          <div className="flex gap-4">
            {socials.length > 0 ? socials.map((socialObj, i) => {
              const platform = Object.keys(socialObj)[0];
              const link = socialObj[platform];
              let icon = null;
              if (platform === 'linkedin') {
                  icon = <svg className="w-6 h-6 text-white hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
              } else if (platform === 'github') {
                  icon = <svg className="w-6 h-6 text-white hover:text-gray-400 transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
              } else if (platform === 'x' || platform === 'twitter') {
                  icon = <svg className="w-6 h-6 text-white hover:text-gray-400 transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
              } else if (platform === 'instagram') {
                  icon = <svg className="w-6 h-6 text-white hover:text-pink-400 transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
              } else {
                  icon = <span className="text-white hover:text-gray-300 capitalize">{platform}</span>;
              }
              return (
                <a key={i} href={link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                  {icon}
                </a>
              );
            }) : <p className="text-white/70 text-sm">No links found</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Teams({
  activePage = "Team",
  onNavigate
}) {
  return <div className="bg-transparent relative w-[1668px] min-h-screen mx-auto flex flex-col items-center pt-[27px] pb-[40px] shrink-0" data-node-id="1:291" data-name="Teams">
      <div className="content-stretch flex flex-col gap-[102px] items-center w-[1667.976px]" data-node-id="1:294">
        <div className="content-stretch flex flex-col gap-[47px] items-center relative shrink-0 w-[1302.84px]" data-node-id="1:295">
          <Navbar activePage={activePage} onNavigate={onNavigate} />
          <div className="content-stretch flex flex-col gap-[85px] items-center relative shrink-0 w-full" data-node-id="1:306">
          <div className="flex flex-col items-center text-center gap-6 w-full mb-6">
            <h1 className="font-['Inter'] font-black text-[120px] sm:text-[145px] md:text-[165px] leading-none tracking-[-0.04em] text-transparent bg-clip-text select-none text-center uppercase" style={{
              backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #D4D4D8 45%, #52525B 100%)",
              textShadow: "0 10px 40px rgba(0,0,0,0.9)"
            }}>
              TEAMS
            </h1>
            <p className="font-['Inter'] font-light text-[26px] sm:text-[32px] md:text-[36px] lg:text-[38px] leading-[1.42] text-[#E4E4E7] max-w-[1340px] text-center tracking-[-0.02em]">
              For over two decades, NCS has been the heart of technical culture on campus. Founded in 2000, we bring together students who live and breathe code, development, and design. Through hands-on projects, workshops, and real-world building, we turn curiosity into capability, creating an environment where bold ideas take root and thrive.
            </p>
          </div>
            <div className="content-stretch flex flex-col gap-[110px] items-end relative shrink-0 w-full" data-node-id="1:308">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[100px] text-center text-white tracking-[-4px] w-[min-content]" data-node-id="1:309">
                4th Year
              </p>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="1:310" data-name="4TH YR">
                <div className="content-stretch flex flex-col gap-[17px] items-center leading-[0] relative shrink-0 w-[1285px]" data-node-id="1:311">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="1:312">
                    <TeamCard className="bg-[#cbd5d4] col-1 h-[600px] ml-[868px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:313" imgContainerClass="-translate-x-1/2 absolute h-[703.2px] left-[calc(50%-9.6px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[-89px] w-[472.55px]" imgClass="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle31} name={["Naziya", "Praveen"]} role="HOC Development" socials={[{
                    linkedin: "https://www.linkedin.com/in/naziya-parveen-769428303/"
                  }, {
                    github: "https://github.com/Naziya007"
                  }]} />
                    <TeamCard className="bg-[#ffc931] col-1 h-[600px] ml-[434px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:319" imgContainerClass="-translate-x-1/2 absolute h-[494px] left-1/2 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[106px] w-[332px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle32} name={["Pranjyaditya", "Singh", "Chauhan"]} role="HOC Design" socials={[{
                    instagram: "https://www.instagram.com/pranjyaditya/?hl=en"
                  }, {
                    linkedin: "https://in.linkedin.com/in/pranjyaditya-singh-chauhan-6b959b2a5"
                  }]} />
                    <TeamCard className="bg-[#feb9ce] col-1 h-[600px] ml-[651px] mt-[192px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:325" imgContainerClass="-translate-x-1/2 absolute h-[586px] left-[calc(50%-97px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[33px] w-[394px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle33} name={["Om", "Tripathi"]} role="HOC Programming" socials={[{
                    linkedin: "https://www.linkedin.com/in/om-tripathi-67332b26a/"
                  }, {
                    github: "https://github.com/OmTripathi7095"
                  }]} />
                    <TeamCard className="bg-[#ffc931] col-1 h-[600px] ml-[1085px] mt-[192px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:331" imgContainerClass="-translate-x-1/2 absolute h-[494px] left-[calc(50%-31px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[53px] w-[332px]" imgClass="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle34} name={["Ajeet", "Bharti"]} role="Creative Head" socials={[{
                    instagram: "https://www.instagram.com/ajeet_3d/"
                  }, {
                    linkedin: "https://www.linkedin.com/in/ajeet-bharti-191b94212"
                  }]} />
                    <TeamCard className="bg-[#feb9ce] col-1 h-[600px] ml-[217px] mt-[192px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:337" imgContainerClass="-translate-x-1/2 absolute h-[380.7px] left-[calc(50%-12.88px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[106px] w-[255.83px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle35} name={["Ajinkya", "Mishra"]} role="CTC" socials={[{
                    github: "https://github.com/AjinkyaMishra"
                  }, {
                    linkedin: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"
                  }]} />
                    <TeamCard className="bg-[#cbd5d4] col-1 h-[600px] ml-0 mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:343" imgContainerClass="-translate-x-1/2 absolute h-[586px] left-[calc(50%+12px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-0 w-[394px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle36} name={["Kuldeep", "Chaudhary"]} role="President" socials={[{
                    linkedin: "https://www.linkedin.com/in/kuldeepchaudhary108/"
                  }, {
                    github: "https://github.com/Kuldeepchaudhary108/"
                  }]} />
                  </div>
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="1:349">
                    <TeamCard className="bg-[#feb9ce] col-1 h-[600px] ml-[868px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:350" imgContainerClass="-translate-x-1/2 absolute h-[468.8px] left-[calc(50%+14.6px)] shadow-[2.88px_2.88px_2.88px_0px_rgba(0,0,0,0.25)] top-[87px] w-[315.034px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle37} name={["Gaurang", "Agarwal"]} role="General Secretary" socials={[{
                    linkedin: "https://www.linkedin.com/in/gaurangagarwal12"
                  }, {
                    x: "https://x.com/Gaurangagar"
                  }]} />
                    <TeamCard className="bg-[#cbd5d4] col-1 h-[600px] ml-[651px] mt-[189px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:356" imgContainerClass="-translate-x-1/2 absolute h-[586px] left-[calc(50%-10px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[98px] w-[394px]" imgClass="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle38} name={["Vibha", "Gupta"]} role="General Secretary" socials={[{
                    linkedin: "https://www.linkedin.com/in/vibha-gupta-257952296/"
                  }, {
                    github: "https://github.com/vibha32145"
                  }]} />
                    <TeamCard className="bg-[#cbd5d4] col-1 h-[600px] ml-[434px] mt-[3px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:362" imgContainerClass="-translate-x-1/2 absolute h-[586px] left-[calc(50%+12px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-0 w-[394px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle39} name={["Shivam", "Goyal"]} role="Management Head" socials={[{
                    instagram: "https://www.instagram.com/shivushivam_?igsh=MThuM2Z3dmduaDdieg=="
                  }, {
                    linkedin: "https://www.linkedin.com/in/shivamgoyal0308?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  }]} />
                    <TeamCard className="bg-[#cbd5d4] col-1 h-[600px] ml-[217px] mt-[192px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:368" imgContainerClass="-translate-x-1/2 absolute h-[433px] left-[calc(50%+33px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[90px] w-[268px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle40} name={["Khushi", "Mishra"]} role="Media Head" socials={[{
                    linkedin: "https://www.linkedin.com/in/khushi-mishra-86502a26a"
                  }, {
                    github: "https://github.com/khushi8511"
                  }]} />
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-node-id="1:374">
                      <TeamCard className="bg-[#feb9ce] col-1 h-[600px] ml-0 mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:375" imgContainerClass="-translate-x-1/2 absolute h-[586px] left-[calc(50%-40px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[95px] w-[394px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle41} name={["Pranjal", "Gupta"]} role="Finance Head" socials={[{
                      linkedin: "https://www.linkedin.com/in/pranjal-gupta-766898323"
                    }, {
                      github: "https://github.com/PranjalGupta280"
                    }, {
                      x: "https://x.com/TechnoVerse007c"
                    }]} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[100px] text-center text-white tracking-[-4px] w-[min-content]" data-node-id="1:381">
                3rd Year
              </p>
              <div className="content-stretch flex flex-col gap-[17px] items-center leading-[0] relative shrink-0 w-[1285px]" data-node-id="1:382">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="1:383">
                  <TeamCard className="bg-[#ffc931] col-1 h-[600px] ml-0 mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:414" imgContainerClass="-translate-x-1/2 absolute h-[436px] left-[calc(50%-0.5px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[61px] w-[293px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle47} name={["Athrva", "Gupta"]} role="Designer" socials={[{
                  linkedin: "https://www.linkedin.com/in/athrva-gupta-93936736a"
                }]} />
                  <TeamCard className="bg-[#feb9ce] col-1 h-[600px] ml-[217px] mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:384" imgContainerClass="-translate-x-1/2 absolute h-[380.7px] left-[calc(50%-17.08px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[110px] w-[255.83px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle42} name={["Anshika", "Sen"]} role="Programmer" socials={[{
                  linkedin: "https://www.linkedin.com/in/anshika-saini-581885350"
                }]} />
                  <TeamCard className="bg-[#feb9ce] col-1 h-[600px] ml-[434px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:396" imgContainerClass="-translate-x-1/2 absolute h-[586px] left-[calc(50%-40px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[95px] w-[394px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle44} name={["Aryan", "Singh"]} role="Programmer" socials={[{
                  linkedin: "https://www.linkedin.com/in/aryan-singh-661819286/"
                }, {
                  github: "https://github.com/Coder-Aryan09"
                }]} />
                  <TeamCard className="bg-[#feb9ce] col-1 h-[600px] ml-[651px] mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:408" imgContainerClass="-translate-x-1/2 absolute h-[586px] left-[calc(50%-48.76px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-0 w-[394px]" imgClass="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle46} name={["Shreyansh", "Pandey"]} role="Programmer" socials={[{
                  x: "https://x.com/shrey_007"
                }, {
                  linkedin: "https://www.linkedin.com/in/shreyansh-pandey-54949730b"
                }]} />
                  <TeamCard className="bg-[#feb9ce] col-1 h-[600px] ml-[868px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:402" imgContainerClass="-translate-x-1/2 absolute h-[439px] left-[calc(50%-47.82px)] shadow-[2.88px_2.88px_2.88px_0px_rgba(0,0,0,0.25)] top-[115.88px] w-[295px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle45} name={["Utkarsh", "Shukla"]} role="Programmer" socials={[{
                  x: "https://x.com/Utkarsh00018232"
                }, {
                  linkedin: "https://www.linkedin.com/in/utkarsh-shukla-b2442b329/"
                }]} />
                </div>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="1:420">
                  <TeamCard className="bg-[#feb9ce] col-1 h-[600px] ml-0 mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:421" imgContainerClass="-translate-x-1/2 absolute h-[548px] left-[calc(50%+13px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[13px] w-[368px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle48} name={["Shivangi", "Trivedi"]} role="Developer" socials={[{
                  linkedin: "https://www.linkedin.com/in/shivangi-trivedi031"
                }]} />
                  <TeamCard className="bg-[#cbd5d4] col-1 h-[600px] ml-[433.89px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:427" imgContainerClass="-translate-x-1/2 absolute h-[586px] left-[calc(50%+12px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-0 w-[394px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle49} name={["Ayush", "Vashisth"]} role="Developer" socials={[{
                  x: "https://x.com/ayushv005"
                }, {
                  linkedin: "https://www.linkedin.com/in/ayush-vashisth-4600a5338"
                }, {
                  github: "https://github.com/vasayu"
                }]} />
                  <TeamCard className="bg-[#cbd5d4] col-1 h-[600px] ml-[650.89px] mt-[160px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:433" imgContainerClass="-translate-x-1/2 absolute h-[1018.416px] left-[calc(50%+18.17px)] shadow-[10.161px_10.161px_10.161px_0px_rgba(0,0,0,0.25)] top-[-197px] w-[631.289px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle50} name={["Shreyansh", "Shrivastava"]} role="Developer" socials={[{
                  linkedin: "https://www.linkedin.com/in/shreyansh-shrivastva-416956300/"
                }]} />
                  <TeamCard className="bg-[#cbd5d4] col-1 h-[600px] ml-[867.89px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:445" imgContainerClass="-translate-x-1/2 absolute h-[494px] left-1/2 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[106px] w-[332px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle52} name={["Shreyansh", "Shekhar", "Dwivedi"]} role="Developer" socials={[{
                  x: "https://x.com/ShreyanshD44145"
                }, {
                  linkedin: "https://www.linkedin.com/in/shreyansh-shekhar-dwivedi-632293320"
                }]} />
                  <TeamCard className="bg-[#feb9ce] col-1 h-[600px] ml-[216.79px] mt-[160px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:451" imgContainerClass="-translate-x-1/2 absolute h-[618px] left-[calc(50%+46.16px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[-18.12px] w-[416px]" imgClass="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle51} name={["Lakshya", "Dubey"]} role="Developer" socials={[{
                  x: "https://x.com/Lakshya92116503"
                }, {
                  linkedin: "https://www.linkedin.com/in/lakshya-dubey01/"
                }, {
                  github: "https://github.com/lakshya-byte"
                }]} />
                </div>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="1:463">
                  <TeamCard className="bg-[#e4dcd2] col-1 h-[600px] ml-[217px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:464" imgContainerClass="-translate-x-1/2 absolute h-[600px] left-1/2 shadow-[10.161px_10.161px_10.161px_0px_rgba(0,0,0,0.25)] top-0 w-[372px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle53} name={["Pragati", "Rajput"]} role="Technical" socials={[{
                  linkedin: "https://www.linkedin.com/in/pragati-rajput-96100432b"
                }, {
                  github: "https://github.com/Pragati132005"
                }, {
                  x: "https://x.com/PragatiRaj1794?t=JJJVoQNak437wk0uUept5w&s=09"
                }]} />
                  <TeamCard className="bg-[#e4dcd2] col-1 h-[600px] ml-[434px] mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:470" imgContainerClass="-translate-x-1/2 absolute h-[573px] left-[calc(50%-3px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[27px] w-[332px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle54} name={["Vishnu", "Tiwari"]} role="Technical" socials={[]} />
                  <TeamCard className="bg-[#cbd5d4] col-1 h-[600px] ml-0 mt-[179px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:476" imgContainerClass="-translate-x-1/2 absolute h-[472px] left-[calc(50%-0.5px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[25px] w-[305px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle55} name={["Aditya", "Kumar"]} role="Developer" socials={[]} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[100px] text-center text-white tracking-[-4px] w-[min-content]" data-node-id="1:482">
                2nd Year
              </p>
              <div className="content-stretch flex flex-col gap-[17px] items-center leading-[0] relative shrink-0 w-[1286px]" data-node-id="1:483">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="1:484">
                  <TeamCard className="bg-[#ffc931] col-1 h-[600px] ml-0 mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:485" imgContainerClass="-translate-x-1/2 absolute h-[588px] left-[calc(50%+12.58px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[11.88px] w-[395px]" imgClass="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle56} name={["Bhaskar", "Shah"]} role="Designer" socials={[]} />
                  <TeamCard className="bg-[#ffc931] col-1 h-[600px] ml-[435px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:491" imgContainerClass="-translate-x-1/2 absolute h-[436px] left-[calc(50%-0.5px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[61px] w-[293px]" imgClass="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle57} name={["Piyush", "Gautam"]} role="Designer" socials={[]} />
                  <TeamCard className="bg-[#ffc931] col-1 h-[600px] ml-[217px] mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:497" imgContainerClass="-translate-x-1/2 absolute h-[472px] left-[calc(50%-0.5px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[25px] w-[305px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle58} name={["Darshita", "Jain"]} role="Designer" socials={[]} />
                  <TeamCard className="bg-[#feb9ce] col-1 h-[600px] ml-[652px] mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:503" imgContainerClass="-translate-x-1/2 absolute h-[415px] left-[calc(50%+8.5px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[12px] w-[279px]" imgClass="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle59} name={["Karnika"]} role="Programmer" socials={[]} />
                  <TeamCard className="bg-[#feb9ce] col-1 h-[600px] ml-[1086px] mt-[179px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:509" imgContainerClass="-translate-x-1/2 absolute h-[375px] left-[calc(50%+0.12px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[37px] w-[282px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle60} name={["Sanskar", "Pal"]} role="Programmer" socials={[]} />
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[869px] mt-0 place-items-start relative row-1" data-node-id="1:515">
                    <TeamCard className="bg-[#feb9ce] col-1 h-[600px] ml-0 mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:516" imgContainerClass="-translate-x-1/2 absolute h-[1168px] left-[calc(50%-0.94px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[-535.12px] w-[785px]" imgClass="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle61} name={["Sidhi", "Saxena"]} role="Programmer" socials={[]} />
                  </div>
                </div>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="1:522">
                  <TeamCard className="bg-[#cbd5d4] col-1 h-[600px] ml-[868px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:523" imgContainerClass="-translate-x-1/2 absolute h-[548px] left-[calc(50%+17.08px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[37.88px] w-[368px]" imgClass="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle62} name={["Saishree", "Saxena"]} role="Developer" socials={[]} />
                  <TeamCard className="bg-[#cbd5d4] col-1 h-[600px] ml-[651px] mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:529" imgContainerClass="-translate-x-1/2 absolute h-[499px] left-[calc(50%+16.58px)] shadow-[10.161px_10.161px_10.161px_0px_rgba(0,0,0,0.25)] top-[5.88px] w-[309px]" imgClass="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle63} name={["Anjneya", "Singh"]} role="Developer" socials={[]} />
                  <TeamCard className="bg-[#feb9ce] col-1 h-[600px] ml-0 mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:535" imgContainerClass="-translate-x-1/2 absolute h-[474px] left-[calc(50%-0.82px)] shadow-[2.88px_2.88px_2.88px_0px_rgba(0,0,0,0.25)] top-[14.88px] w-[319px]" imgClass="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle64} name={["Aryan", "Singh"]} role="Programmer" socials={[{
                  linkedin: "https://www.linkedin.com/in/aryan-singh-661819286/"
                }, {
                  github: "https://github.com/Coder-Aryan09"
                }]} />
                  <TeamCard className="bg-[#feb9ce] col-1 h-[600px] ml-[217px] mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:541" imgContainerClass="-translate-x-1/2 absolute h-[410px] left-[calc(50%+13.24px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[66px] w-[276px]" imgClass="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle65} name={["Aanya", "Gogia"]} role="Programmer" socials={[]} />
                  <TeamCard className="bg-[#feb9ce] col-1 h-[600px] ml-[434px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:547" imgContainerClass="-translate-x-1/2 absolute h-[486px] left-[calc(50%+45.66px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[30.88px] w-[327px]" imgClass="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle66} name={["Mohd", "Fahad"]} role="Programmer" socials={[]} />
                </div>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="1:553">
                  <TeamCard className="bg-[#e4dcd2] col-1 h-[600px] ml-[217px] mt-0 overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:554" imgContainerClass="-translate-x-1/2 absolute h-[558px] left-[calc(50%+20.08px)] shadow-[10.161px_10.161px_10.161px_0px_rgba(0,0,0,0.25)] top-[106.88px] w-[346px]" imgClass="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle67} name={["Tanishq", "Marwari"]} role="Technical" socials={[]} />
                  <TeamCard className="bg-[#e4dcd2] col-1 h-[600px] ml-[434px] mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:560" imgContainerClass="-translate-x-1/2 absolute h-[599px] left-[calc(50%+13.58px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[-21.12px] w-[347px]" imgClass="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle68} name={["Ansh", "Mittal"]} role="Technical" socials={[]} />
                  <TeamCard className="bg-[#cbd5d4] col-1 h-[600px] ml-0 mt-[177px] overflow-clip relative rounded-[300px] group cursor-pointer member-card row-1 w-[200px]" dataNodeId="1:566" imgContainerClass="-translate-x-1/2 absolute h-[586px] left-[calc(50%+18.08px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[-19.12px] w-[394px]" imgClass="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" imgSrc={imgRectangle69} name={["Tanishka", "Israni"]} role="Developer" socials={[]} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />

        
      </div>
    </div>;
}