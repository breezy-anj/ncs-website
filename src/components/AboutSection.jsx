import React from "react"
import RadialOrbitalTimeline from "./ui/radial-orbital-timeline"

/**
 * 1. Programming Club SVG from /assets/programming-icon.svg
 */
function ProgrammingIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="16"
        y="20"
        width="88"
        height="60"
        rx="17"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <path
        d="M37 40L25 50L37 60"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M64 38L56 62"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M83 40L95 50L83 60"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 80V98"
        stroke="currentColor"
        strokeWidth="10.5"
        strokeLinecap="round"
      />
      <path
        d="M38 98H82"
        stroke="currentColor"
        strokeWidth="10.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/**
 * 2. Development Club SVG from /assets/development-icon.svg
 */
function DevelopmentIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="16"
        y="16"
        width="88"
        height="88"
        rx="18"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <line
        x1="16"
        y1="42"
        x2="104"
        y2="42"
        stroke="currentColor"
        strokeWidth="8.5"
      />
      <circle cx="32" cy="29" r="4.5" fill="currentColor" />
      <circle cx="45" cy="29" r="4.5" fill="currentColor" />
      <path
        d="M51 60L38 73L51 86"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M69 60L82 73L69 86"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * 3. Designing Club SVG from /assets/67b5d.svg
 */
function DesigningIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 134 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M62.1287 33.6985C64.3559 33.6956 64.7515 35.3488 64.7727 37.1192C64.885 46.5125 64.8537 55.9186 64.8779 65.3123C64.8823 67.0123 61.8421 68.3721 60.5641 69.4808C58.6997 71.1054 57.5861 73.3929 57.4747 75.8269C57.2403 80.4289 61.5963 84.996 66.3304 85.1922C68.9111 85.2813 71.421 84.3604 73.2999 82.635C77.5817 78.7487 77.3016 71.85 72.3766 68.7388C71.5904 68.242 70.6508 67.6235 69.9715 66.9947C69.0009 66.0961 69.2344 64.5057 69.1793 63.3234C69.2503 54.4011 69.1141 45.4751 69.2624 36.5542C69.306 33.9381 71.7244 32.9248 73.383 34.9651C79.6181 42.636 85.8752 50.2984 91.9807 58.0694C93.3276 59.784 94.7311 61.4137 96.0603 63.157C96.784 63.9893 97.6871 64.8967 97.9943 65.9625C98.4353 67.4924 95.4388 72.0408 94.6458 73.6056C92.5731 77.6955 90.6997 82.1108 89.5891 86.556C89.0338 88.778 88.6161 91.036 88.2071 93.287C87.7895 95.5868 87.724 98.6419 86.5396 100.672C85.2745 101.437 79.146 101.084 77.3668 101.067L65.2469 101.05C60.1991 101.052 54.9813 101.327 49.9543 101.03C49.3328 100.993 47.5575 100.876 47.1531 100.432C46.2069 99.3925 46.007 94.2767 45.7494 92.6629C44.8429 86.9834 42.4033 79.6844 39.8449 74.5069C39.042 72.882 35.4094 67.6144 35.6878 66.1145C35.8688 65.1384 56.6501 39.2077 59.3555 36.179C60.2082 35.2244 60.9992 34.349 62.1287 33.6985Z"
        fill="currentColor"
      />
      <path
        d="M61.5479 0.0464391C64.5761 -0.0442808 67.7255 0.0273893 70.7422 0.0189385C78.2651 -0.00211957 79.3154 3.53125 79.2006 9.74957C86.0244 9.80141 92.8486 9.81951 99.6727 9.80387C103.964 9.80555 108.971 9.91966 113.213 9.73592C115.572 4.37279 122.337 3.98292 125.437 8.7663C128.669 13.7541 123.264 19.5209 117.75 18.026C115.262 17.3515 114.37 16.1394 113.144 14.0981C105.495 13.9773 96.7377 14.3995 89.3215 14.0207C90.5166 14.6084 92.0622 14.996 93.3021 15.6265C96.374 17.1886 99.9497 19.2815 102.696 21.3071C111.339 27.6357 118.029 36.1567 122.036 45.9384C124.361 51.5623 125.493 57.1578 126.242 63.1765C126.557 65.71 126.996 64.6177 129.038 65.3705C129.741 65.6336 130.401 65.9945 130.997 66.4422C132.671 67.6973 133.633 69.4572 133.807 71.4606C134.228 76.9781 134.636 83.4115 127.188 84.1232C121.742 84.6436 114.729 84.6259 114.167 77.4892C113.693 71.4569 113.933 65.5063 121.742 64.9553C121.201 58.8253 120.172 52.9718 117.755 47.2366C111.912 33.3739 99.8233 21.9474 85.1728 17.1901C83.2116 16.5533 81.1937 16.0602 79.2894 15.2803C79.0712 19.7726 78.6243 22.8629 73.2 23.6111C72.6977 23.6572 72.1941 23.6882 71.6899 23.7042C69.9116 23.7565 68.0316 23.6855 66.271 23.7396C59.3429 23.9526 54.5362 23.6513 54.4715 15.3443C52.2547 16.0138 49.8802 16.7288 47.7037 17.499C31.7576 23.143 19.3864 36.355 14.4422 52.0833C13.1123 56.3146 12.6279 60.6711 12.035 65.0119C13.7426 64.9271 15.4275 65.4212 16.803 66.4105C20.0413 68.7088 19.4995 71.5227 19.672 74.8881C19.9071 79.472 18.769 83.5 13.3267 84.1485C10.0117 84.5764 3.35415 84.6845 1.2716 81.433C-0.387443 78.8427 -0.500142 70.267 1.39116 67.625C2.79656 65.6619 5.40066 65.1669 7.63919 64.9108C8.09223 61.3749 8.25253 57.7461 9.07624 54.2479C12.6789 39.2379 22.3095 26.2612 35.8126 18.2214C37.5326 17.2113 39.5064 16.0446 41.3091 15.2006C41.9929 14.8805 43.2781 14.7704 43.6851 14.1517C43.2646 13.9935 21.8021 14.0689 20.5631 14.2896C19.6196 15.9208 18.7885 17.0538 16.8968 17.8001C15.1726 18.466 13.2491 18.4487 11.5378 17.7518C9.9801 17.1187 8.76083 15.8862 8.16891 14.3466C4.85254 5.96066 17.4291 1.73312 20.4901 9.68025C23.2799 9.95248 29.43 9.80969 32.3346 9.80816L54.6186 9.77549C54.2717 4.5122 55.3394 0.512554 61.5479 0.0464391Z"
        fill="currentColor"
      />
      <path
        d="M47.6302 105.256C56.3649 105.14 65.159 105.289 73.8905 105.246C78.793 105.376 83.9354 104.955 88.7929 105.5C94.7589 106.169 96.5305 111.677 96.4145 116.712C96.3279 120.473 96.6702 124.311 93.6648 127.24C91.5813 129.271 89.3025 129.902 86.4619 129.912C76.8043 129.631 67.1651 130.077 57.3011 129.884C50.4059 129.749 38.2561 131.999 37.7818 121.537C37.6602 118.854 37.3815 113.034 38.2721 110.624C39.7899 106.518 43.5816 105.442 47.6302 105.256Z"
        fill="currentColor"
      />
    </svg>
  )
}

/**
 * 4. Technical Club SVG from /assets/technical-icon.svg
 */
function TechnicalIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="70"
        cy="70"
        r="15"
        stroke="currentColor"
        strokeWidth="8.5"
        fill="none"
      />
      <circle cx="70" cy="70" r="6" fill="currentColor" />
      <line
        x1="70"
        y1="55"
        x2="70"
        y2="30"
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      <circle cx="70" cy="22" r="8" fill="currentColor" />
      <line
        x1="70"
        y1="85"
        x2="70"
        y2="110"
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      <circle cx="70" cy="118" r="8" fill="currentColor" />
      <line
        x1="55"
        y1="70"
        x2="30"
        y2="70"
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      <circle cx="22" cy="70" r="8" fill="currentColor" />
      <line
        x1="85"
        y1="70"
        x2="110"
        y2="70"
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      <circle cx="118" cy="70" r="8" fill="currentColor" />
      <line
        x1="81"
        y1="59"
        x2="98"
        y2="42"
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      <circle cx="104" cy="36" r="8" fill="currentColor" />
      <line
        x1="81"
        y1="81"
        x2="98"
        y2="98"
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      <circle cx="104" cy="104" r="8" fill="currentColor" />
      <line
        x1="59"
        y1="81"
        x2="42"
        y2="98"
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      <circle cx="36" cy="104" r="8" fill="currentColor" />
      <line
        x1="59"
        y1="59"
        x2="42"
        y2="42"
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      <circle cx="36" cy="36" r="8" fill="currentColor" />
    </svg>
  )
}

/**
 * 4 Revolving Clubs Timeline Data using the exact 4 SVG files
 */
const fourClubsData = [
  {
    id: 1,
    title: "Programming",
    date: "Core Club",
    content:
      "Where problem-solving meets pure creativity. Turning tricky algorithmic challenges into clean, high-performance logic and real-world software.",
    category: "Club",
    icon: ProgrammingIcon,
    relatedIds: [2, 4],
    status: "completed",
    energy: 96,
  },
  {
    id: 2,
    title: "Development",
    date: "Core Club",
    content:
      "From a rough idea to digital reality. Building web, mobile, and cloud applications that power campus infrastructure and open-source tools.",
    category: "Club",
    icon: DevelopmentIcon,
    relatedIds: [1, 3],
    status: "completed",
    energy: 98,
  },
  {
    id: 3,
    title: "Designing",
    date: "Core Club",
    content:
      "Giving ideas a visual voice. Crafting intuitive UX flows, sleek UI design systems, 3D graphics, and branded experiences that delight.",
    category: "Club",
    icon: DesigningIcon,
    relatedIds: [2, 4],
    status: "completed",
    energy: 92,
  },
  {
    id: 4,
    title: "Technical",
    date: "Core Club",
    content:
      "Exploring frontier technologies, generative AI, machine learning architectures, system administration, and technical workshops.",
    category: "Club",
    icon: TechnicalIcon,
    relatedIds: [1, 3],
    status: "completed",
    energy: 90,
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full max-w-[1360px] mx-auto flex flex-col justify-center min-h-[100vh] -mt-[70px] sm:-mt-[76px] md:-mt-[84px] py-4 px-4 sm:px-8 select-none z-20"
    >
      {/* 
        Grid is vertically centered with respect to the vertical window height (ignoring navbar).
      */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full my-auto">
        {/* =========================================================
            LEFT COLUMN:
            Vertically centered relative to window height.
            1. ABOUT US (Satoshi font)
            2. "A community of curious minds..." (Playfair Display)
            3. Detailed Description (Satoshi font)
            With tight vertical spacing between text blocks.
        ========================================================= */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-3 sm:space-y-3.5 md:space-y-4 z-10">
          {/* ABOUT US Title in Satoshi Font */}
          <div className="flex flex-col tracking-tight">
            <h1 className="font-['Satoshi'] font-black text-6xl sm:text-7xl md:text-8xl lg:text-[102px] xl:text-[114px] leading-[0.88] uppercase text-white">
              ABOUT
            </h1>
            <h1 className="font-['Satoshi'] font-black text-6xl sm:text-7xl md:text-8xl lg:text-[102px] xl:text-[114px] leading-[0.88] uppercase bg-gradient-to-b from-[#8F9FFF] via-[#A78BFA] to-[#C8B6FE] bg-clip-text text-transparent">
              US
            </h1>
          </div>

          {/* Heading in Playfair Display */}
          <h2
            className="font-['Playfair_Display',Georgia,serif] text-2xl sm:text-3xl md:text-4xl lg:text-[37px] leading-[1.2] text-white font-normal max-w-[500px] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            A community of curious minds building what comes next.
          </h2>

          {/* Body Paragraph in Satoshi */}
          <p className="font-['Satoshi',sans-serif] text-sm sm:text-base md:text-[15.5px] leading-[1.65] text-white/65 max-w-[520px] font-normal">
            We are a community of programmers, developers, designers, and tech
            enthusiasts united by a shared passion for technology, creativity,
            and innovation. At NCS, we believe in learning beyond the classroom,
            building through experience, and growing through collaboration. We
            empower students to explore new possibilities, develop their skills,
            and transform ideas into impactful solutions.
          </p>
        </div>

        {/* =========================================================
            RIGHT COLUMN:
            Radial Orbital Timeline Component with the 4 club SVGs
        ========================================================= */}
        <div className="lg:col-span-7 w-full flex items-center justify-center relative min-h-[500px] lg:min-h-[580px]">
          {/* Subtle glow backdrop behind orbit */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full pointer-events-none -z-10 blur-[130px] opacity-35"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(59,130,246,0.2) 50%, transparent 70%)",
            }}
          />

          <RadialOrbitalTimeline
            timelineData={fourClubsData}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
