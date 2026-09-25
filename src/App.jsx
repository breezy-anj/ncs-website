import { useState, useEffect, useRef } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Project"
import Teams from "./pages/Teams"
import Alumni from "./pages/Alumni"
import BeamsBackground from "./components/BeamsBackground"
import ProjectBackground from "./components/ProjectBackground"

export default function App() {
  const location = useLocation()
  const getPageFromPath = (path) => {
    if (path === "/") return "Home"
    if (path === "/about") return "About"
    if (path === "/project") return "Project"
    if (path === "/team") return "Team"
    if (path === "/alumni") return "Alumni"
    return "Home"
  }
  const page = getPageFromPath(location.pathname)

  const [scale, setScale] = useState(1)
  const [contentHeight, setContentHeight] = useState(0)
  const innerRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [page])

  useEffect(() => {
    const updateDimensions = () => {
      const screenW = window.innerWidth
      const baseW = 1668
      if (screenW < baseW) {
        const padding = screenW < 768 ? 8 : screenW < 1280 ? 20 : 32
        const newScale = Math.min(
          1,
          Math.max(0.45, (screenW - padding) / baseW),
        )
        setScale(newScale)
      } else {
        setScale(1)
      }

      if (innerRef.current) {
        setContentHeight(innerRef.current.offsetHeight)
      }
    }

    updateDimensions()

    const ro = new ResizeObserver(() => {
      if (innerRef.current) {
        setContentHeight(innerRef.current.offsetHeight)
      }
    })

    if (innerRef.current) {
      ro.observe(innerRef.current)
    }

    window.addEventListener("resize", updateDimensions)

    return () => {
      ro.disconnect()
      window.removeEventListener("resize", updateDimensions)
    }
  }, [page])

  return (
    <div className="bg-transparent min-h-screen w-full flex flex-col items-center overflow-x-hidden text-white relative">
      {/* 3D Ethereal Light Beams Background on Home/Team/Alumni, Special 3D Rotating Layers on Project */}
      {page === "Project" ? <ProjectBackground /> : <BeamsBackground />}

      {/* Responsive Scaled Page Content Layer */}
      <main
        className="relative z-10 w-full flex justify-center"
        style={{
          height:
            contentHeight && scale < 1 ? `${contentHeight * scale}px` : "auto",
          minHeight: "100vh",
          overflow: "visible",
        }}
      >
        <div
          ref={innerRef}
          className="w-[1668px] shrink-0 flex justify-center origin-top transition-transform duration-150 ease-out"
          style={{
            transform: scale < 1 ? `scale(${scale})` : "none",
          }}
        >
          <Routes>
            <Route path="/" element={<Home activePage={page} />} />
            <Route path="/about" element={<About activePage={page} />} />
            <Route path="/project" element={<Project activePage={page} />} />
            <Route path="/team" element={<Teams activePage={page} />} />
            <Route path="/alumni" element={<Alumni activePage={page} />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
