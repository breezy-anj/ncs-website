import { publicAsset } from "../lib/publicAsset"

export interface GalleryPhoto {
  id: string | number
  image: string
  thumb?: string
  title?: string
  caption?: string
}

export const inoutHacks30Photos: GalleryPhoto[] = [
  { id: "inout-1", image: publicAsset("assets/gallery/inout/web/inout_01.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_01.webp"), title: "Grand Finale Kickoff", caption: "Participants assemble for the 36-hour hackathon" },
  { id: "inout-2", image: publicAsset("assets/gallery/inout/web/inout_02.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_02.webp"), title: "Auditorium Energy", caption: "Keynote address and problem statement release" },
  { id: "inout-3", image: publicAsset("assets/gallery/inout/web/inout_03.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_03.webp"), title: "Team Brainstorming", caption: "Architecting software and hardware solutions" },
  { id: "inout-4", image: publicAsset("assets/gallery/inout/web/inout_04.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_04.webp"), title: "Overnight Sprint", caption: "Builders working through midnight milestones" },
  { id: "inout-5", image: publicAsset("assets/gallery/inout/web/inout_05.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_05.webp"), title: "Mentorship Round", caption: "Industry mentors reviewing system architectures" },
  { id: "inout-6", image: publicAsset("assets/gallery/inout/web/inout_06.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_06.webp"), title: "Hacker Arena", caption: "Deep focus and collaborative development" },
  { id: "inout-7", image: publicAsset("assets/gallery/inout/web/inout_07.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_07.webp"), title: "Live Prototyping", caption: "Testing and wiring real-time prototypes" },
  { id: "inout-8", image: publicAsset("assets/gallery/inout/web/inout_08.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_08.webp"), title: "Code & Coffee", caption: "High energy fueling fast-paced sprints" },
  { id: "inout-9", image: publicAsset("assets/gallery/inout/web/inout_09.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_09.webp"), title: "Debugging Drills", caption: "Resolving edge cases before evaluation" },
  { id: "inout-10", image: publicAsset("assets/gallery/inout/web/inout_10.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_10.webp"), title: "Judging Evaluation", caption: "Jury panel analyzing live project demonstrations" },
  { id: "inout-11", image: publicAsset("assets/gallery/inout/web/inout_11.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_11.webp"), title: "Prototype Pitch", caption: "Teams demonstrating products on stage" },
  { id: "inout-12", image: publicAsset("assets/gallery/inout/web/inout_12.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_12.webp"), title: "Audience Cheers", caption: "Participants celebrating standout builds" },
  { id: "inout-13", image: publicAsset("assets/gallery/inout/web/inout_13.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_13.webp"), title: "Stage Showcase", caption: "Finalists presenting before faculty and mentors" },
  { id: "inout-14", image: publicAsset("assets/gallery/inout/web/inout_14.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_14.webp"), title: "Winner Felicitations", caption: "Honoring top innovative solutions" },
  { id: "inout-15", image: publicAsset("assets/gallery/inout/web/inout_15.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_15.webp"), title: "Trophy Celebration", caption: "Winners crowned on the grand stage" },
  { id: "inout-16", image: publicAsset("assets/gallery/inout/web/inout_16.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_16.webp"), title: "Organizing Crew", caption: "The Nibble team orchestrating the event" },
  { id: "inout-17", image: publicAsset("assets/gallery/inout/web/inout_17.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_17.webp"), title: "Society Group Photo", caption: "Mentors, leads, and coordinators" },
  { id: "inout-18", image: publicAsset("assets/gallery/inout/web/inout_18.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_18.webp"), title: "Awards & Mementos", caption: "Recognizing outstanding technical craft" },
  { id: "inout-19", image: publicAsset("assets/gallery/inout/web/inout_19.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_19.webp"), title: "Grand Finale Wrap-up", caption: "Celebrating unforgettable memories and builds" },
  { id: "inout-20", image: publicAsset("assets/gallery/inout/web/inout_20.webp"), thumb: publicAsset("assets/gallery/inout/thumbs/inout_20.webp"), title: "INOUT Hacks '25", caption: "Another landmark chapter in NCS history" },
]

export const orientation25Photos: GalleryPhoto[] = [
  { id: "orien-1", image: publicAsset("assets/gallery/orien/web/orien_01.webp"), thumb: publicAsset("assets/gallery/orien/thumbs/orien_01.webp"), title: "Freshers Auditorium", caption: "Auditorium packed for the grand orientation kickoff" },
  { id: "orien-2", image: publicAsset("assets/gallery/orien/web/orien_02.webp"), thumb: publicAsset("assets/gallery/orien/thumbs/orien_02.webp"), title: "Executive Keynote", caption: "Society leads sharing the vision and roadmap" },
  { id: "orien-3", image: publicAsset("assets/gallery/orien/web/orien_03.webp"), thumb: publicAsset("assets/gallery/orien/thumbs/orien_03.webp"), title: "Domain Introductions", caption: "Overview of Programming, Dev, Design & Technical wings" },
  { id: "orien-4", image: publicAsset("assets/gallery/orien/web/orien_04.webp"), thumb: publicAsset("assets/gallery/orien/thumbs/orien_04.webp"), title: "Auditorium Gathering", caption: "Interacting with freshmen eager to build" },
  { id: "orien-5", image: publicAsset("assets/gallery/orien/web/orien_05.webp"), thumb: publicAsset("assets/gallery/orien/thumbs/orien_05.webp"), title: "Auditorium Perspective", caption: "Excitement and energy across the hall" },
  { id: "orien-6", image: publicAsset("assets/gallery/orien/web/orien_06.webp"), thumb: publicAsset("assets/gallery/orien/thumbs/orien_06.webp"), title: "Speaker Session", caption: "Core team addressing first-year students" },
  { id: "orien-7", image: publicAsset("assets/gallery/orien/web/orien_07.webp"), thumb: publicAsset("assets/gallery/orien/thumbs/orien_07.webp"), title: "Live Stage Demo", caption: "Showcasing real-world projects and products" },
  { id: "orien-8", image: publicAsset("assets/gallery/orien/web/orien_08.webp"), thumb: publicAsset("assets/gallery/orien/thumbs/orien_08.webp"), title: "Interactive Q&A", caption: "Freshers asking questions about domains and culture" },
  { id: "orien-9", image: publicAsset("assets/gallery/orien/web/orien_09.webp"), thumb: publicAsset("assets/gallery/orien/thumbs/orien_09.webp"), title: "Core Team Welcome", caption: "Coordinators welcoming the newest student cohort" },
  { id: "orien-10", image: publicAsset("assets/gallery/orien/web/orien_10.webp"), thumb: publicAsset("assets/gallery/orien/thumbs/orien_10.webp"), title: "Faculty & Mentors", caption: "Guidance and inspiring words from faculty advisors" },
  { id: "orien-11", image: publicAsset("assets/gallery/orien/web/orien_11.webp"), thumb: publicAsset("assets/gallery/orien/thumbs/orien_11.webp"), title: "Society Showcase", caption: "Displaying past hackathon triumphs and milestones" },
  { id: "orien-12", image: publicAsset("assets/gallery/orien/web/orien_12.webp"), thumb: publicAsset("assets/gallery/orien/thumbs/orien_12.webp"), title: "Auditorium Floor", caption: "Warm society greetings and induction briefing" },
  { id: "orien-13", image: publicAsset("assets/gallery/orien/web/orien_13.webp"), thumb: publicAsset("assets/gallery/orien/thumbs/orien_13.webp"), title: "Icebreakers & Fun", caption: "Interactive trivia and society engagement games" },
  { id: "orien-14", image: publicAsset("assets/gallery/orien/web/orien_14.webp"), thumb: publicAsset("assets/gallery/orien/thumbs/orien_14.webp"), title: "Group Photo 1", caption: "Freshers and members gathering after the session" },
  { id: "orien-15", image: publicAsset("assets/gallery/orien/web/orien_15.webp"), thumb: publicAsset("assets/gallery/orien/thumbs/orien_15.webp"), title: "Group Photo 2", caption: "Smiles and memories marking a new beginning" },
  { id: "orien-16", image: publicAsset("assets/gallery/orien/web/orien_16.webp"), thumb: publicAsset("assets/gallery/orien/thumbs/orien_16.webp"), title: "Society Induction", caption: "Official welcome to the Nibble Computer Society family" },
]

export const nibbleMonthPhotos: GalleryPhoto[] = [
  { id: "workshop-1", image: publicAsset("assets/gallery/workshop/web/workshop_01.webp"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_01.webp"), title: "Hands-on Workshop", caption: "Students coding live with domain mentors" },
  { id: "workshop-2", image: publicAsset("assets/gallery/workshop/web/workshop_02.webp"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_02.webp"), title: "Logic Building", caption: "Breaking down system design and algorithmic flows" },
  { id: "workshop-3", image: publicAsset("assets/gallery/workshop/web/workshop_03.webp"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_03.webp"), title: "Architecture Walkthrough", caption: "Exploring frontend and backend communication" },
  { id: "workshop-4", image: publicAsset("assets/gallery/workshop/web/workshop_04.webp"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_04.webp"), title: "Pair Programming", caption: "Collaborative problem solving and debugging" },
  { id: "workshop-5", image: publicAsset("assets/gallery/workshop/web/workshop_05.webp"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_05.webp"), title: "Tech Mentorship", caption: "Mentors assisting students with setup and syntax" },
  { id: "workshop-6", image: publicAsset("assets/gallery/workshop/web/workshop_06.jpeg"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_06.webp"), title: "Interactive Lab", caption: "Real-time practice on developer tooling and Git" },
  { id: "workshop-7", image: publicAsset("assets/gallery/workshop/web/workshop_07.webp"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_07.webp"), title: "Classroom Engagement", caption: "Deep focus during hands-on coding drills" },
  { id: "workshop-8", image: publicAsset("assets/gallery/workshop/web/workshop_08.jpeg"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_08.webp"), title: "Developer Sprint", caption: "Building full-stack prototypes from scratch" },
  { id: "workshop-9", image: publicAsset("assets/gallery/workshop/web/workshop_09.webp"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_09.webp"), title: "Code Review Session", caption: "Examining clean code practices and structure" },
  { id: "workshop-10", image: publicAsset("assets/gallery/workshop/web/workshop_10.webp"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_10.webp"), title: "Domain Deep Dive", caption: "Exploring web, app, and backend stacks" },
  { id: "workshop-11", image: publicAsset("assets/gallery/workshop/web/workshop_11.webp"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_11.webp"), title: "Problem Solving Lab", caption: "Tackling algorithmic edge cases together" },
  { id: "workshop-12", image: publicAsset("assets/gallery/workshop/web/workshop_12.webp"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_12.webp"), title: "Project Ideation", caption: "Brainstorming impactful developer solutions" },
  { id: "workshop-13", image: publicAsset("assets/gallery/workshop/web/workshop_13.webp"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_13.webp"), title: "Live Coding Demo", caption: "Domain leads walking through practical implementations" },
  { id: "workshop-14", image: publicAsset("assets/gallery/workshop/web/workshop_14.webp"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_14.webp"), title: "Q&A and Debugging", caption: "Hands-on assistance with terminal and environment setups" },
  { id: "workshop-15", image: publicAsset("assets/gallery/workshop/web/workshop_15.webp"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_15.webp"), title: "Participant Focus", caption: "Enthusiastic builders learning new frameworks" },
  { id: "workshop-16", image: publicAsset("assets/gallery/workshop/web/workshop_16.webp"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_16.webp"), title: "Workshop Collaboration", caption: "Team brainstorming and architectural discussions" },
  { id: "workshop-17", image: publicAsset("assets/gallery/workshop/web/workshop_17.webp"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_17.webp"), title: "Mentor Assistance", caption: "Individual guidance for every aspiring developer" },
  { id: "workshop-18", image: publicAsset("assets/gallery/workshop/web/workshop_18.webp"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_18.webp"), title: "Classroom Energy", caption: "Vibrant learning environment and tech curiosity" },
  { id: "workshop-19", image: publicAsset("assets/gallery/workshop/web/workshop_19.webp"), thumb: publicAsset("assets/gallery/workshop/thumbs/workshop_19.webp"), title: "Sprint Completion", caption: "Finalizing workshop assignments and challenges" },
  { id: "workshop-20", image: publicAsset("assets/gallery/workshop/web/workshop_20.jpeg"), thumb: publicAsset("assets/gallery/workshop/web/workshop_20.jpeg"), title: "Certificate & Wrap-up", caption: "Celebrating a month of dedicated learning and building" },
]

export const workshopsPhotos = nibbleMonthPhotos

export const zealiconPhotos: GalleryPhoto[] = [
  { id: "zealicon-1", image: publicAsset("assets/gallery/zealicon/web/zealicon_01.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_01.webp"), title: "Zealicon Arena Kickoff", caption: "Opening of the annual college fest technical events" },
  { id: "zealicon-2", image: publicAsset("assets/gallery/zealicon/web/zealicon_02.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_02.webp"), title: "Technical Event Banner", caption: "Zealicon celebration at Nibble Computer Society" },
  { id: "zealicon-3", image: publicAsset("assets/gallery/zealicon/web/zealicon_03.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_03.webp"), title: "Competitive Coding Duel", caption: "High-stakes algorithmic duels on the big screen" },
  { id: "zealicon-4", image: publicAsset("assets/gallery/zealicon/web/zealicon_04.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_04.webp"), title: "Coder Spotlight", caption: "Participants analyzing test cases under time pressure" },
  { id: "zealicon-5", image: publicAsset("assets/gallery/zealicon/web/zealicon_05.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_05.webp"), title: "Arena Focus", caption: "Screen-off problem solving and intense algorithmic focus" },
  { id: "zealicon-6", image: publicAsset("assets/gallery/zealicon/web/zealicon_06.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_06.webp"), title: "Keystroke Duel", caption: "Precision and speed in algorithmic execution" },
  { id: "zealicon-7", image: publicAsset("assets/gallery/zealicon/web/zealicon_07.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_07.webp"), title: "Event Coordinators", caption: "Society members managing live leaderboards and test suites" },
  { id: "zealicon-8", image: publicAsset("assets/gallery/zealicon/web/zealicon_08.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_08.webp"), title: "Gaming & Coding Arena", caption: "Students battling in technical competitions" },
  { id: "zealicon-9", image: publicAsset("assets/gallery/zealicon/web/zealicon_09.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_09.webp"), title: "Judges Review", caption: "Evaluating submissions on optimization and elegance" },
  { id: "zealicon-10", image: publicAsset("assets/gallery/zealicon/web/zealicon_10.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_10.webp"), title: "Hall of Builders", caption: "Crowd cheering as leaderboard rankings update" },
  { id: "zealicon-11", image: publicAsset("assets/gallery/zealicon/web/zealicon_11.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_11.webp"), title: "Duel Arena Stage", caption: "Head-to-head live finals in the auditorium" },
  { id: "zealicon-12", image: publicAsset("assets/gallery/zealicon/web/zealicon_12.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_12.webp"), title: "Fest Highlights", caption: "Excitement and competitive spirit across events" },
  { id: "zealicon-13", image: publicAsset("assets/gallery/zealicon/web/zealicon_13.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_13.webp"), title: "Participant Strategy", caption: "Teams discussing optimal algorithms and data structures" },
  { id: "zealicon-14", image: publicAsset("assets/gallery/zealicon/web/zealicon_14.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_14.webp"), title: "Live Duel Watch", caption: "Audience watching code execute against hidden test cases" },
  { id: "zealicon-15", image: publicAsset("assets/gallery/zealicon/web/zealicon_15.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_15.webp"), title: "Stage Duelists", caption: "Finalists competing live for the championship title" },
  { id: "zealicon-16", image: publicAsset("assets/gallery/zealicon/web/zealicon_16.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_16.webp"), title: "Zealicon Moments", caption: "Unforgettable milestones during the annual fest" },
  { id: "zealicon-17", image: publicAsset("assets/gallery/zealicon/web/zealicon_17.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_17.webp"), title: "Winner Podium", caption: "Celebrating rapid thinkers and top technical talent" },
  { id: "zealicon-18", image: publicAsset("assets/gallery/zealicon/web/zealicon_18.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_18.webp"), title: "Trophy Distribution", caption: "Felicitation of winners with prizes and certificates" },
  { id: "zealicon-19", image: publicAsset("assets/gallery/zealicon/web/zealicon_19.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_19.webp"), title: "Volunteers & Crew", caption: "The team that made Zealicon technical events a triumph" },
  { id: "zealicon-20", image: publicAsset("assets/gallery/zealicon/web/zealicon_20.webp"), thumb: publicAsset("assets/gallery/zealicon/thumbs/zealicon_20.webp"), title: "Grand Finale Cheers", caption: "Closing ceremonies celebrating technical innovation" },
]









