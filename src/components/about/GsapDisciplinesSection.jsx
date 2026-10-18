import React, { useState, useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ProgrammingIcon, DevelopmentIcon, DesigningIcon, TechnicalIcon } from "./ClubIcons"
import { Terminal, Sparkles, ChevronRight, Cpu, Layers, Palette, Code2 } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const DISCIPLINES = [
  {
    id: "programming",
    name: "Programming",
    title: "Algorithmic Precision & Computational Problem Solving",
    color: "#0ae448",
    badge: "CORE ALGORITHMS",
    icon: ProgrammingIcon,
    slogan: "Where logic meets speed and every millisecond counts.",
    description:
      "The Programming Club is the intellectual engine of NCS. We delve deep into data structures, advanced graph theory, dynamic programming, and computational geometry. Members regularly compete in global contests, ICPC, and competitive programming arenas, cultivating the problem-solving instincts demanded by top tech enterprises.",
    focusAreas: [
      "Data Structures & Algorithms",
      "Competitive Programming",
      "Graph Theory & DP",
      "ICPC & Codeforces Contests",
      "Time & Space Optimization",
      "Clean Computational Logic",
    ],
    stats: [
      { label: "Algorithmic Efficiency", val: "99.4%" },
      { label: "Contest Podiums", val: "40+" },
      { label: "Weekly Problem Sets", val: "25+" },
    ],
    codeSnippet: `// Programming Club · Fast Graph Traversal
template <typename T>
void dijkstra(int src, const vector<vector<pair<int, T>>>& adj) {
    priority_queue<pair<T, int>, vector<pair<T, int>>, greater<>> pq;
    vector<T> dist(adj.size(), numeric_limits<T>::max());
    dist[src] = 0;
    pq.emplace(0, src);
    while (!pq.empty()) {
        auto [d, u] = pq.top(); pq.pop();
        if (d > dist[u]) continue;
        for (const auto& [v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.emplace(dist[v], v);
            }
        }
    }
}`,
    fileLabel: "fast_dijkstra.cpp",
  },
  {
    id: "development",
    name: "Development",
    title: "Production-Grade Full-Stack & Cloud Engineering",
    color: "#38bdf8",
    badge: "FULL-STACK & CLOUD",
    icon: DevelopmentIcon,
    slogan: "From back-of-the-napkin sketches to resilient distributed systems.",
    description:
      "The Development Club turns ambitious concepts into battle-tested software. We engineer high-performance web applications, scalable mobile experiences, microservice architectures, and robust cloud deployments. Our members maintain open-source campus platforms used daily by thousands of students.",
    focusAreas: [
      "Modern Web (React / Next.js / TypeScript)",
      "Distributed Backend Systems (Node / Go)",
      "Cloud Infrastructure & Docker",
      "PostgreSQL, Redis & Vector DBs",
      "REST & GraphQL Microservices",
      "Open Source Campus Infrastructure",
    ],
    stats: [
      { label: "Production Uptime", val: "99.98%" },
      { label: "Daily Active Users", val: "5,000+" },
      { label: "Open Source Repos", val: "30+" },
    ],
    codeSnippet: `// Development Club · Cloud Orchestrator
import { createServer } from "node:http";
import { rateLimiter, telemetry } from "@ncs/edge";

export async function bootstrapCluster({ workers = 4, port = 8080 }) {
  const server = createServer(async (req, res) => {
    await telemetry.trace(req, async () => {
      if (rateLimiter.isExceeded(req.ip)) {
        return res.writeHead(429).end("Too Many Requests");
      }
      return routeHandler(req, res);
    });
  });
  return server.listen(port, () => console.log(\`Ready on :\${port}\`));
}`,
    fileLabel: "cluster_bootstrap.ts",
  },
  {
    id: "designing",
    name: "Designing",
    title: "Spatial UI/UX, Design Systems & Kinetic Motion",
    color: "#c084fc",
    badge: "SPATIAL & MOTION",
    icon: DesigningIcon,
    slogan: "Giving ideas an irresistible visual voice and dynamic rhythm.",
    description:
      "The Designing Club crafts digital experiences that evoke wonder. We fuse user-centric UI/UX research with cutting-edge visual design, 3D graphics, fluid GSAP micro-animations, and complete design systems. We believe high-impact engineering is incomplete without extraordinary aesthetic polish.",
    focusAreas: [
      "Comprehensive Design Systems",
      "Fluid GSAP Kinetic Animations",
      "3D Spatial Graphics (Spline / Blender)",
      "User Psychology & Interaction Flows",
      "Interactive Prototyping in Figma",
      "Brand Identity & Visual Storytelling",
    ],
    stats: [
      { label: "Target Framerate", val: "60 FPS" },
      { label: "Design Systems Built", val: "12+" },
      { label: "User Delight Score", val: "100%" },
    ],
    codeSnippet: `// Designing Club · GSAP Spatial Spring
import gsap from "gsap";

export function animateSpatialElement(element, targetDepth = 120) {
  return gsap.timeline()
    .to(element, {
      z: targetDepth,
      rotateX: -8,
      rotateY: 15,
      filter: "drop-shadow(0 25px 35px rgba(192,132,252,0.45))",
      duration: 1.6,
      ease: "elastic.out(1.2, 0.4)"
    });
}`,
    fileLabel: "spatial_motion.js",
  },
  {
    id: "technical",
    name: "Technical",
    title: "Frontier AI, Systems Engineering & Deep Tech",
    color: "#f59e0b",
    badge: "AI & DEEP TECH",
    icon: TechnicalIcon,
    slogan: "Demystifying complex technologies and empowering the next wave.",
    description:
      "The Technical Club explores frontier computing: Generative AI, Large Language Models, deep learning vision models, low-level Linux systems, and cybersecurity. We conduct campus-wide bootcamps, publish research guides, and orchestrate technical challenges that spark intellectual curiosity.",
    focusAreas: [
      "Generative AI & LLM Fine-Tuning",
      "Computer Vision & Deep Learning",
      "Linux Kernel & Shell Architecture",
      "DevOps, CI/CD & Security",
      "Campus Workshops & Hands-on Labs",
      "Hardware-Software Interfacing",
    ],
    stats: [
      { label: "Workshop Attendees", val: "2,000+" },
      { label: "AI Models Deployed", val: "18+" },
      { label: "Hands-on Sprints", val: "100%" },
    ],
    codeSnippet: `// Technical Club · Neural Transformer Block
import torch
import torch.nn as nn

class SpatialAttention(nn.Module):
    def __init__(self, d_model=512, n_heads=8):
        super().__init__()
        self.attn = nn.MultiheadAttention(d_model, n_heads, batch_first=True)
        self.norm = nn.LayerNorm(d_model)
        self.mlp = nn.Sequential(
            nn.Linear(d_model, d_model * 4),
            nn.GELU(),
            nn.Linear(d_model * 4, d_model)
        )
    def forward(self, x):
        res, _ = self.attn(x, x, x)
        x = self.norm(x + res)
        return self.norm(x + self.mlp(x))`,
    fileLabel: "spatial_attention.py",
  },
]

export default function GsapDisciplinesSection() {
  const [selectedId, setSelectedId] = useState(DISCIPLINES[0].id)
  const sectionRef = useRef(null)
  const cardStageRef = useRef(null)

  const activeDiscipline =
    DISCIPLINES.find((d) => d.id === selectedId) || DISCIPLINES[0]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Connect to Lenis if available
      if (window.lenis) {
        window.lenis.on("scroll", ScrollTrigger.update)
      }

      gsap.fromTo(
        ".gsap-disc-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animate showcase container on tab change
  useEffect(() => {
    if (cardStageRef.current) {
      gsap.fromTo(
        cardStageRef.current,
        { opacity: 0, y: 15, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power2.out" }
      )
    }
  }, [selectedId])

  // Mouse move 3D tilt effect on interactive showcase
  const handleMouseMove = (e) => {
    if (!cardStageRef.current) return
    const rect = cardStageRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    gsap.to(cardStageRef.current, {
      rotationY: (x / rect.width) * 8,
      rotationX: -(y / rect.height) * 8,
      ease: "power1.out",
      duration: 0.5,
    })
  }

  const handleMouseLeave = () => {
    if (!cardStageRef.current) return
    gsap.to(cardStageRef.current, {
      rotationY: 0,
      rotationX: 0,
      ease: "power2.out",
      duration: 0.6,
    })
  }

  const ActiveIcon = activeDiscipline.icon

  return (
    <section
      id="disciplines"
      ref={sectionRef}
      className="relative w-full max-w-[1480px] mx-auto py-16 sm:py-24 px-4 select-none z-10"
    >
      {/* Background glow accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none -z-10 blur-[150px] opacity-25 transition-colors duration-700"
        style={{
          background: `radial-gradient(circle, ${activeDiscipline.color} 0%, transparent 70%)`,
        }}
      />

      {/* Header Container */}
      <div className="gsap-disc-header flex flex-col items-center text-center space-y-3 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase bg-white/5 border border-white/10 text-white/80 backdrop-blur-md">
          <Sparkles size={13} style={{ color: activeDiscipline.color }} />
          THE 4 PILLARS OF NIBBLE
        </div>
        <h2 className="font-['Satoshi'] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase">
          THE 4 CORE DISCIPLINES
        </h2>
        <p className="font-['Satoshi'] text-sm sm:text-base text-white/60 max-w-[640px]">
          A harmonized quartet of specialized clubs. Each pushing the boundaries
          of their craft while building together under one unified banner.
        </p>

        {/* Tab Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4">
          {DISCIPLINES.map((d) => {
            const isSelected = selectedId === d.id
            const Icon = d.icon

            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setSelectedId(d.id)}
                className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-['Satoshi'] font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "text-black shadow-lg scale-105"
                    : "text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10"
                }`}
                style={{
                  backgroundColor: isSelected ? d.color : undefined,
                  boxShadow: isSelected ? `0 0 25px ${d.color}66` : undefined,
                }}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-black" : "text-white/60"}`} />
                <span>{d.name} Club</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Interactive Discipline Showcase Stage */}
      <div
        ref={cardStageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full rounded-[28px] sm:rounded-[36px] p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/15 shadow-[0_25px_65px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-500"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <div className="w-full bg-[#090b10]/95 rounded-[26px] sm:rounded-[34px] p-6 sm:p-9 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Narrative, Focus Areas & Stats */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Top Badge & Slogan */}
            <div className="space-y-2">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border"
                style={{
                  color: activeDiscipline.color,
                  borderColor: `${activeDiscipline.color}40`,
                  backgroundColor: `${activeDiscipline.color}15`,
                }}
              >
                <ActiveIcon className="w-3.5 h-3.5" />
                <span>{activeDiscipline.badge}</span>
              </div>
              <h3 className="font-['Satoshi'] font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
                {activeDiscipline.title}
              </h3>
              <p
                className="font-['Satoshi'] text-sm sm:text-base font-medium italic"
                style={{ color: activeDiscipline.color }}
              >
                &ldquo;{activeDiscipline.slogan}&rdquo;
              </p>
            </div>

            {/* Description */}
            <p className="font-['Satoshi'] text-sm sm:text-base text-white/70 leading-relaxed font-normal">
              {activeDiscipline.description}
            </p>

            {/* Focus Area Tags Grid */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-white/50">
                Key Specializations & Competencies:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeDiscipline.focusAreas.map((area, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white/5 border border-white/10 text-white/85 hover:border-white/30 transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10">
              {activeDiscipline.stats.map((st, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="font-['Satoshi'] font-black text-xl sm:text-2xl"
                    style={{ color: activeDiscipline.color }}
                  >
                    {st.val}
                  </span>
                  <span className="text-[11px] font-mono text-white/50 leading-tight mt-0.5">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Holographic Club Icon & Code Box */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {/* Holographic 3D Icon Card */}
            <div
              className="relative w-full rounded-2xl p-8 flex flex-col items-center justify-center overflow-hidden border border-white/10"
              style={{
                background: `linear-gradient(135deg, ${activeDiscipline.color}15 0%, rgba(0,0,0,0.6) 100%)`,
                boxShadow: `inset 0 0 40px ${activeDiscipline.color}15`,
              }}
            >
              {/* Rotating glow ring backdrop */}
              <div
                className="absolute size-48 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ backgroundColor: activeDiscipline.color }}
              />

              {/* Massive SVG Icon */}
              <div
                className="relative z-10 transition-transform duration-500 hover:scale-110 drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
                style={{ color: activeDiscipline.color }}
              >
                <ActiveIcon className="w-24 h-24 sm:w-28 sm:h-28" />
              </div>

              <div className="mt-4 text-center z-10">
                <span className="font-['Satoshi'] font-bold text-lg text-white">
                  {activeDiscipline.name} Domain
                </span>
                <p className="text-xs font-mono text-white/50">
                  Engineered at Nibble Computer Society
                </p>
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="w-full bg-[#050608] rounded-2xl p-4 border border-white/10 font-mono text-xs text-white/80 overflow-hidden">
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 text-white/50 text-[11px]">
                <div className="flex items-center gap-2">
                  <Terminal size={13} style={{ color: activeDiscipline.color }} />
                  <span className="text-white/80">{activeDiscipline.fileLabel}</span>
                </div>
                <span
                  className="px-2 py-0.5 rounded text-[10px] font-bold"
                  style={{
                    color: activeDiscipline.color,
                    backgroundColor: `${activeDiscipline.color}18`,
                  }}
                >
                  Verified
                </span>
              </div>
              <pre className="overflow-x-auto text-left leading-relaxed text-[#a3e635] text-[11.5px] max-h-[160px]">
                <code>{activeDiscipline.codeSnippet}</code>
              </pre>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
