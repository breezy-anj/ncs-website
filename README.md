# 🚀 Nibble Computer Society (NCS) Official Website

[![Live Deployment](https://img.shields.io/badge/Vercel-Live%20Demo-black?logo=vercel&logoColor=white&style=for-the-badge)](https://hackncs.vercel.app)
[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)

> **Nibble Computer Society (NCS)** is the premier technical society of JSS Academy of Technical Education, Noida. NCS is dedicated to fostering innovation, open-source development, algorithmic problem-solving, and building high-impact real-world software products.

🌐 **Live URL**: [https://hackncs.vercel.app](https://hackncs.vercel.app)

---

## 📸 Key Features & Architecture

### 🌌 1. Living WebGL Procedural Background
- **Custom Aether Shader**: Custom WebGL2 fragment shader generating ambient periodic raymarched cosmic wavefronts.
- **Power & Battery Optimized**: Throttled to 30 FPS with `powerPreference: "low-power"` and DPR capped to `1.0`, reducing GPU compute by **>70%** on laptops and high-DPI displays.
- **Unbreakable Auto-Recovery**: Event listeners for `webglcontextlost` and `visibilitychange` to guarantee zero blackouts or memory leaks.

### 🪐 2. Exclusive 3D Rotating Atmosphere on Projects
- **Layered 3D Planetary Motion**: Multi-depth rotating celestial elements with hardware-accelerated CSS 3D perspectives (`rotateX(15deg) translateZ(0)`).
- **GPU-Composited Transforms**: Direct layer promotion preventing CPU repaint overhead.

### ✨ 3. Physics-Driven Particle Typography
- **Interactive Cursor Dispersion**: Particle engine rendering "NIBBLE" that scatters on cursor contact with elastic return physics.
- **Smart Idle Sleep Engine**: Automatically pauses canvas ticks when the mouse is idle and particles are settled at origin (0% idle CPU usage).
- **Viewport Intersection Observer**: Activates canvas rendering only when scrolled into view.

### 💻 4. Flagship Projects Showcase
Direct access to live society repositories and production tools:
- **JSS Infotech**: College academic hub for notices, assignments, and placement tracking ([Repo](https://github.com/ncs-jss/registration)).
- **MCQ Module**: Automated assessment and quiz management platform ([Repo](https://github.com/ncs-jss/MCQ-Module)).
- **Event Manager**: Campus events tracker and attendee management system ([Repo](https://github.com/ncs-jss/registration)).
- **T&P Portal**: Recruitment drive automation and candidate management portal ([Repo](https://github.com/ncs-jss/registration)).

### 👥 5. Team & Alumni Directory
- **Team Roster**: Comprehensive index of leads, designers, developers, and competitive programmers.
- **Alumni Network**: Multi-year directory of graduated alumni and past society members.

### 📐 6. Proportional Scaling Engine
- Dynamic responsive container calculating proportional viewport scale:
  $$\text{scale} = \min\left(1, \max\left(0.45, \frac{\text{viewportWidth} - \text{padding}}{1668}\right)\right)$$
- Accommodates desktop monitors (1920px+), laptops (1280px–1536px), and tablets with zero horizontal clipping.

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Bundler & Dev Server** | [Vite 8](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first configuration) |
| **Graphics & Shaders** | [WebGL 2.0](https://www.khronos.org/webgl/) GLSL Shaders |
| **Animations & UI** | [Framer Motion](https://www.framer.com/motion/) + Custom CSS 3D Transforms |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```text
├── public/
│   ├── assets/              # Figma design assets, SVGs, event photos, and member headshots
│   └── robots.txt           # Search crawler directives
├── src/
│   ├── components/
│   │   ├── AetherBackground.tsx             # Optimized WebGL2 ambient fragment shader background
│   │   ├── ProjectBackground.tsx            # Layered 3D rotating planetary background for Projects
│   │   ├── CursorDrivenParticleTypography.tsx # Interactive physics particle typography engine
│   │   ├── LiquidMetalButton.tsx            # GPU-accelerated liquid metal button with depth layer
│   │   ├── Navbar.tsx                       # Floating pill navigation bar with active route highlight
│   │   └── Footer.tsx                       # Society footer with attribution and links
│   ├── pages/
│   │   ├── Home.tsx                         # Landing page with events, about, and particle interaction
│   │   ├── Project.tsx                      # Projects showcase cards with GitHub integration
│   │   ├── Teams.tsx                        # Domain-wise current society members
│   │   └── Alumni.tsx                       # Society alumni directory
│   ├── App.tsx                              # Main layout, router state & responsive scale engine
│   ├── index.css                            # Global CSS tokens, font declarations, and resets
│   └── main.tsx                             # Application DOM entry point
├── package.json                             # Dependencies and build scripts
├── tsconfig.json                            # TypeScript configuration
├── vite.config.ts                           # Vite configuration with Tailwind plugin
└── README.md                                # Project documentation
```

---

## ⚡ Getting Started Locally

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ncs-jss/hackncs.git
   cd hackncs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production bundle**:
   ```bash
   npm run preview
   ```

---

## 🚢 Deployment

The project is configured for continuous zero-config deployment on Vercel:

```bash
npx vercel --prod
```

---

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License & Attribution

Designed and Developed with ❤️ by **[Nibble Computer Society (NCS)](https://hackncs.vercel.app)**.
All rights reserved.
