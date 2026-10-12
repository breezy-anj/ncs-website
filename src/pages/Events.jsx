import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Trophy, ExternalLink, Code2, Users, Rocket } from "lucide-react"
import CarouselStacked from "../components/ui/carousel-07"
import Footer from "../components/Footer"
import { publicAsset } from "../lib/publicAsset"

const assetPathPrefix = publicAsset("assets")
const imgAtoms = `${assetPathPrefix}/events/atoms.webp`
const imgAnnualRecruitment = `${assetPathPrefix}/events/annual-recruitment.webp`
const imgInOutHacks = `${assetPathPrefix}/events/inout-hacks.webp`
const imgHowToHackathon = `${assetPathPrefix}/events/how-to-hackathon.webp`
const imgWeber = `${assetPathPrefix}/events/weber.webp`
const imgCodex = `${assetPathPrefix}/events/codex.webp`
const imgBlindCode = `${assetPathPrefix}/events/blind-code.webp`
const imgVRExpo = `${assetPathPrefix}/events/vr-expo.webp`
const imgLoot = `${assetPathPrefix}/events/loot.webp`
const imgSherlocked = `${assetPathPrefix}/events/sherlocked.webp`

const allEvents = [
  {
    id: "annual-recruitment",
    title: "Annual Recruitments",
    subtitle: "Hiring Drive · Nibble Computer Society",
    category: "Recruitment",
    date: "23rd – 25th Feb",
    description:
      "Discovering the next generation of builders across Programming, Development, Designing, and Technical domains with task-based creative challenges.",
    href: "https://recruitments.hackncs.in",
    buttonText: "Register Now",
    photo: imgAnnualRecruitment,
    tags: ["Hiring Drive", "Induction", "Team", "Domains"],
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  },
  {
    id: "inout-hacks",
    title: "InOut Hacks",
    subtitle: "Hackathon · Flagship Hackathon by NCS",
    category: "Hackathon",
    date: "Annual Hackathon",
    description:
      "A fast-paced overnight hackathon bringing together the brightest minds to architect, design, and deploy impactful tech solutions across web, AI, and systems.",
    href: "https://www.instagram.com/reel/DXtnr23iQ6Y/?stkn=MzRlODBiNWFlZA==",
    photo: imgInOutHacks,
    tags: ["Hackathon", "Coding", "Innovation", "Overnight"],
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    id: "how-to-hackathon",
    title: "How To Hackathon",
    subtitle: "Guidance Seminar · Roadmap & Mentoring",
    category: "Seminar",
    date: "29th September",
    description:
      "Comprehensive roadmap session guiding first-time hackers through ideation, team building, tech stack selection, prototype pitching, and winning strategies.",
    photo: imgHowToHackathon,
    tags: ["Roadmap", "Mentoring", "Hackathon", "Build Projects"],
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
  },
  {
    id: "atoms",
    title: "Atoms",
    subtitle: "Nibble Month Workshop · Design Series",
    category: "Workshop",
    date: "17–19th Nov",
    description:
      "Exploring design systems, modern typography, Figma micro-interactions, and visual storytelling to build interfaces that feel premium, fluid, and intuitive.",
    photo: imgAtoms,
    tags: ["UI/UX", "Figma", "Design Systems", "Prototyping"],
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  },
  {
    id: "weber",
    title: "Weber",
    subtitle: "Nibble Month Workshop · Web Development",
    category: "Workshop",
    date: "24-26th November",
    description:
      "An intensive series of hands-on bootcamps covering modern full-stack development, Git workflows, UI/UX design fundamentals, and cloud deployment pipelines.",
    href: "https://www.instagram.com/p/DQzn6p7EvXs/?stkn=MzRlODBiNWFlZA==",
    photo: imgWeber,
    tags: ["Web Dev", "Full-Stack", "Hands-on", "Mentorship"],
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
  {
    id: "codex",
    title: "Codex",
    subtitle: "Nibble Month Workshop · Programming Workshop",
    category: "Workshop",
    date: "10-12th November",
    description:
      "Foundational programming bootcamp covering data structures, algorithmic thinking, efficient problem-solving patterns, and core computing concepts.",
    photo: imgCodex,
    tags: ["Programming", "Algorithms", "Data Structures", "Bootcamp"],
    badgeColor: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  },
  {
    id: "blind-code",
    title: "Blind Code",
    subtitle: "Zealicon Event · Competitive Programming",
    category: "Competition",
    date: "Zealicon 2025",
    description:
      "Turn off the monitor and trust your algorithms! Blind Code tests developers' pure syntax mastery, mental models, and algorithmic precision under high pressure.",
    photo: imgBlindCode,
    tags: ["Competitive Programming", "Algorithms", "Precision"],
    badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  },
  {
    id: "vr-expo",
    title: "VR Expo",
    subtitle: "Zealicon Event · Virtual Reality Showcase",
    category: "Expo",
    date: "14th May · Zealicon",
    description:
      "Immersive hands-on virtual reality exhibition showcasing interactive 3D simulations, spatial computing environments, and emerging metaverse technologies.",
    photo: imgVRExpo,
    tags: ["Virtual Reality", "Spatial Computing", "Metaverse", "Showcase"],
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  },
  {
    id: "loot",
    title: "Loot",
    subtitle: "Zealicon Event · Loot Hits the Jackpot",
    category: "Competition",
    date: "May 20–22 · Online",
    description:
      "The premier technical treasure hunt and digital adventure where participants decipher cryptic clues, solve riddles, and race against the clock to claim the jackpot.",
    photo: imgLoot,
    tags: ["Treasure Hunt", "Cryptic Clues", "Zealicon", "Adventure"],
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  },
  {
    id: "sherlocked",
    title: "Sherlocked",
    subtitle: "Zealicon Event · Las Adventures",
    category: "Competition",
    date: "Zealicon 2025",
    description:
      "A mystery investigation contest testing deductive reasoning, cyber sleuthing, pattern recognition, and problem-solving through narrative-driven challenges.",
    photo: imgSherlocked,
    tags: ["Deduction", "Mystery", "Cyber Sleuthing", "Investigation"],
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  },
]

const eventSlides = [
  {
    image: `${assetPathPrefix}/2a0cf.png`,
    title: "Annual Recruitments",
    description: "Hiring Drive · Nibble Computer Society",
    badge: "Recruitment",
  },
  {
    image: `${assetPathPrefix}/events/inout-hacks.webp`,
    title: "InOut Hacks",
    description: "Hackathon · Flagship Hackathon by NCS",
    badge: "Hackathon",
    linkUrl: "https://www.instagram.com/reel/DXtnr23iQ6Y/?stkn=MzRlODBiNWFlZA==",
  },
  {
    image: `${assetPathPrefix}/ba642.png`,
    title: "Atoms",
    description: "Nibble Month Workshop · Design Series",
    badge: "Workshop",
  },
  {
    image: `${assetPathPrefix}/bb76c.png`,
    title: "Weber",
    description: "Nibble Month Workshop · Web Development",
    badge: "Workshop",
    linkUrl: "https://www.instagram.com/p/DQzn6p7EvXs/?stkn=MzRlODBiNWFlZA==",
  },
  {
    image: `${assetPathPrefix}/events/blind-code.webp`,
    title: "Blind Code",
    description: "Zealicon Event · Competitive Programming",
    badge: "Competition",
  },
  {
    image: `${assetPathPrefix}/events/craffiti.webp`,
    title: "Craffiti",
    description: "Zealicon Event · Creative Workshop",
    badge: "Workshop",
  },
  {
    image: `${assetPathPrefix}/35193.png`,
    title: "Orientation Programme",
    description: "Welcome to Nibble Computer Society",
    badge: "Orientation",
    linkUrl: "https://www.instagram.com/p/DNxMB5Z0g6w/?stkn=MzRlODBiNWFlZA==",
  },
]

const categories = ["All", "Recruitment", "Hackathon", "Seminar", "Workshop", "Competition", "Expo"]

export default function Events({ activePage = "Events", onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const filteredEvents =
    selectedCategory === "All"
      ? allEvents
      : allEvents.filter((e) => e.category === selectedCategory)

  return (
    <div
      className="bg-transparent relative w-full max-w-[1668px] min-h-screen mx-auto flex flex-col items-center pt-2 sm:pt-4 md:pt-6 pb-[40px] shrink-0 overflow-hidden select-none"
      data-node-id="events-page"
      data-name="Events"
    >
      <div className="content-stretch flex flex-col gap-10 sm:gap-14 md:gap-[50px] items-center w-full max-w-[1518px] px-4 md:px-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6 w-full max-w-[1280px] pt-4 sm:pt-6">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Satoshi',Arial,sans-serif] font-black text-[38px] sm:text-[64px] md:text-[84px] lg:text-[96px] leading-[1.02] tracking-tight text-transparent bg-clip-text select-none text-center uppercase"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #FFFFFF 0%, #D4D4D8 45%, #52525B 100%)",
              textShadow: "0 10px 40px rgba(0,0,0,0.9)",
            }}
          >
            EVENTS & WORKSHOPS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Satoshi',Arial,sans-serif] font-normal text-[15px] sm:text-[18px] md:text-[22px] leading-[1.55] text-white/70 max-w-[960px] w-full px-2 text-center"
          >
            From high-energy hackathons to hands-on workshops, explore events crafted to spark curiosity, sharpen technical craft, and bring the developer community together.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full pt-4">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-['Satoshi',Arial,sans-serif] font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white text-black shadow-[0_0_24px_rgba(255,255,255,0.35)] scale-105"
                    : "bg-white/[0.05] hover:bg-white/[0.12] text-white/70 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-[1440px]">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative flex flex-col rounded-[28px] overflow-hidden bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/25 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              >
                {/* Poster Image Container */}
                <div className="relative w-full h-[240px] sm:h-[260px] overflow-hidden bg-black/40 flex items-center justify-center">
                  <img
                    src={event.photo}
                    alt={event.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Badge */}
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border backdrop-blur-md ${event.badgeColor}`}
                  >
                    {event.category}
                  </span>

                  {event.date && (
                    <span className="absolute top-4 right-4 text-xs font-medium text-white/70 bg-black/50 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
                      {event.date}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6 sm:p-7 justify-between gap-4">
                  <div>
                    <h3 className="font-['Satoshi',Arial,sans-serif] font-bold text-xl sm:text-2xl text-white group-hover:text-blue-300 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-white/50 text-xs sm:text-sm mt-1 font-medium">
                      {event.subtitle}
                    </p>
                    <p className="text-white/75 text-sm sm:text-[15px] mt-3 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Tags & Action */}
                  <div className="pt-2 flex flex-col gap-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.06] text-white/60 border border-white/5"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {event.href ? (
                      <a
                        href={event.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer"
                      >
                        <span>{event.buttonText || "View Reel / Post"}</span>
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <div className="inline-flex items-center justify-center py-2.5 rounded-xl bg-white/[0.04] text-white/40 text-xs sm:text-sm">
                        <span>Past Society Event</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive 3D Stacked Carousel */}
        <div className="w-full flex flex-col items-center relative pt-8 sm:pt-14">
          <CarouselStacked slides={eventSlides} />
        </div>

        {/* Footer */}
        <div className="w-full mt-10 md:mt-16">
          <Footer />
        </div>
      </div>
    </div>
  )
}
