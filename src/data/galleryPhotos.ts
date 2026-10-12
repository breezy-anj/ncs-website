import { publicAsset } from "../lib/publicAsset"

export interface GalleryPhoto {
  id: string | number
  image: string
  title?: string
  caption?: string
}

export const inoutHacks30Photos: GalleryPhoto[] = [
  { id: 1, image: publicAsset("assets/events/inout-hacks.webp"), title: "INOUT Hacks Poster", caption: "Grand Finale 2026" },
  { id: 2, image: publicAsset("assets/82f8e.png"), title: "Grand Finale Stage", caption: "All participants and organizers" },
  { id: 3, image: publicAsset("assets/1e5cf.png"), title: "Hacker Lounge", caption: "Late-night jamming & discussions" },
  { id: 4, image: publicAsset("assets/2890e.png"), title: "Organizing Team", caption: "Nibble Computer Society" },
  { id: 5, image: publicAsset("assets/highlights/web/DSC04982.webp"), title: "Opening Keynote", caption: "Hackathon kickoff in the auditorium" },
  { id: 6, image: publicAsset("assets/highlights/web/DSC05186.webp"), title: "Sprint in Action", caption: "Teams brainstorming architecture" },
  { id: 7, image: publicAsset("assets/highlights/web/DSC05537.webp"), title: "Prototype Pitch", caption: "Showcasing live demos to the jury" },
  { id: 8, image: publicAsset("assets/highlights/web/IMG_1634.webp"), title: "Whiteboarding", caption: "Mapping system flows and database schemas" },
  { id: 9, image: publicAsset("assets/highlights/web/IMG_1635.webp"), title: "Code Sprint", caption: "Fast-paced overnight building" },
  { id: 10, image: publicAsset("assets/highlights/web/IMG_1647.webp"), title: "Architecture Review", caption: "Refining tech stacks and API pipelines" },
  { id: 11, image: publicAsset("assets/highlights/web/IMG_1736.webp"), title: "UI/UX Prototyping", caption: "Polishing interface details in Figma" },
  { id: 12, image: publicAsset("assets/highlights/web/IMG_1795.webp"), title: "Mentor Guidance", caption: "Domain leads assisting teams" },
  { id: 13, image: publicAsset("assets/highlights/web/IMG_1957_1.webp"), title: "Midnight Energy", caption: "Coffee, code, and camaraderie" },
  { id: 14, image: publicAsset("assets/highlights/web/IMG_2403.webp"), title: "Debugging Session", caption: "Tracking down elusive runtime bugs" },
  { id: 15, image: publicAsset("assets/highlights/web/IMG_2495.webp"), title: "Live Testing", caption: "Testing production deployments" },
  { id: 16, image: publicAsset("assets/highlights/web/IMG_2526.webp"), title: "Full-Stack Polish", caption: "Connecting client apps with backend APIs" },
  { id: 17, image: publicAsset("assets/highlights/web/IMG_2554.webp"), title: "Judging Panel", caption: "Project evaluation round 1" },
  { id: 18, image: publicAsset("assets/highlights/web/IMG_2952.webp"), title: "Final Presentations", caption: "Presenting solutions on the main stage" },
  { id: 19, image: publicAsset("assets/highlights/web/IMG_2969.webp"), title: "Winner Announcement", caption: "Celebrating exceptional innovation" },
  { id: 20, image: publicAsset("assets/highlights/web/IMG_2979.webp"), title: "Victory Celebration", caption: "Trophy and prize distribution" },
  { id: 21, image: publicAsset("assets/highlights/web/IMG_2984.webp"), title: "Stage Showcase", caption: "Top 3 teams presenting their builds" },
  { id: 22, image: publicAsset("assets/highlights/web/IMG_3002.webp"), title: "Winner Felicitation", caption: "Honoring outstanding technical craft" },
  { id: 23, image: publicAsset("assets/highlights/web/IMG_3010.webp"), title: "Memento Handover", caption: "Recognizing mentors and contributors" },
  { id: 24, image: publicAsset("assets/highlights/web/IMG_3012.webp"), title: "Society Group Photo", caption: "Core coordinators and volunteers" },
  { id: 25, image: publicAsset("assets/highlights/web/IMG_3016.webp"), title: "Closing Ceremony", caption: "Wrapping up 36 hours of relentless creation" },
  { id: 26, image: publicAsset("assets/highlights/web/IMG_4240.webp"), title: "Post-Event Hangout", caption: "Reliving key milestones and laughs" },
  { id: 27, image: publicAsset("assets/highlights/web/IMG_4252.webp"), title: "Volunteers Group Photo", caption: "The incredible crew behind the scenes" },
  { id: 28, image: publicAsset("assets/highlights/web/IMG_4262.webp"), title: "Memories & Milestones", caption: "Another chapter etched in NCS history" },
  { id: 29, image: publicAsset("assets/events/blind-code.webp"), title: "Blind Code Arena", caption: "Zealicon competitive coding duel" },
  { id: 30, image: publicAsset("assets/events/craffiti.webp"), title: "Craffiti Design Sprint", caption: "Digital art and design workshop" },
]
