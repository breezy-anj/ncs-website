import { useState, useEffect, useRef } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Project"
import Teams from "./pages/Teams"
import Alumni from "./pages/Alumni"
import Recruitment from "./pages/Recruitment"
import CircularGalleryDemo from "./components/ui/circular-gallery-demo"
import CardFanCarouselDemo from "./components/ui/card-fan-carousel-demo"
import BeamsBackground from "./components/BeamsBackground"
import ProjectBackground from "./components/ProjectBackground"
import Navbar from "./components/Navbar"

export default function App() {
  const location = useLocation()
  const getPageFromPath = (path) => {
    if (path === "/") return "Home"
    if (path === "/about") return "About"
    if (path === "/project") return "Project"
    if (path === "/team") return "Team"
    if (path === "/alumni") return "Alumni"
    if (path === "/recruitment") return "Recruitment"
    if (path === "/gallery") return "Gallery"
    if (path === "/fan-carousel") return "Fan Carousel"
    return "Home"
  }
  const page = getPageFromPath(location.pathname)

  const [scale, setScale] = useState(1)
  const [contentHeight, setContentHeight] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const innerRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [page])

  useEffect(() => {
    const updateDimensions = () => {
      const screenW = window.innerWidth
      setIsMobile(screenW < 768)
      const baseW = 1668
      
      if (screenW < baseW) {
        const padding = screenW < 768 ? 8 : screenW < 1280 ? 20 : 32
        
        let newScale = 1
        
        if (screenW < 768) {
          // On mobile, only Teams and Alumni get scaled (clamped to 0.55 for panning).
          // Other pages (Home, About, Project, Recruitment) are natively responsive, so scale = 1.
          if (page === "Team" || page === "Alumni") {
            newScale = Math.max(0.55, (screenW - padding) / baseW)
          } else {
            newScale = 1
          }
        } else {
          // On tablet/small-desktop, scale everything except Home
          if (page === "Home") {
            newScale = 1
          } else {
            newScale = Math.min(1, (screenW - padding) / baseW)
          }
        }
        
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

  const scrollRef = useRef(null)

  // Determine if this is a grid page that needs horizontal scrolling on mobile
  const isGridPage = (page === "Team" || page === "Alumni")
  const needsHorizontalScroll = isGridPage && isMobile

  useEffect(() => {
    if (needsHorizontalScroll && scrollRef.current) {
      // Center the horizontal scroll on load so the user sees the middle of the grid
      const scrollableWidth = 1668 * scale
      const screenWidth = window.innerWidth
      if (scrollableWidth > screenWidth) {
        scrollRef.current.scrollLeft = (scrollableWidth - screenWidth) / 2
      }
    }
  }, [needsHorizontalScroll, scale, page])

  return (
    <div className="bg-transparent min-h-screen w-full flex flex-col items-center overflow-x-hidden text-white relative">
      {/* 3D Ethereal Light Beams Background on Home/Team/Alumni, Special 3D Rotating Layers on Project */}
      {page === "Gallery" || page === "Fan Carousel" ? null : page === "Project" ? <ProjectBackground /> : <BeamsBackground />}

      {/* Responsive Navbar */}
      <div className="w-full relative z-50 flex justify-center pt-[27px]">
        <div className="w-full max-w-[1668px] px-4 md:px-0">
          <Navbar />
        </div>
      </div>

      {/* Responsive Scaled Page Content Layer */}
      <main
        ref={scrollRef}
        className={`relative z-10 w-full flex ${needsHorizontalScroll ? 'justify-start overflow-x-auto scrollbar-hide' : 'justify-center'}`}
        style={{
          height:
            contentHeight && scale < 1 ? `${contentHeight * scale}px` : "auto",
          minHeight: "100vh",
          overflowY: "visible",
        }}
      >
        <div
          ref={innerRef}
          className="w-[1668px] shrink-0 flex justify-center transition-transform duration-150 ease-out"
          style={{
            transform: scale < 1 ? `scale(${scale})` : "none",
            transformOrigin: needsHorizontalScroll ? "top left" : "top center",
          }}
        >
          <Routes>
            <Route path="/" element={<Home activePage={page} />} />
            <Route path="/about" element={<About activePage={page} />} />
            <Route path="/project" element={<Project activePage={page} />} />
            <Route path="/team" element={<Teams activePage={page} />} />
            <Route path="/alumni" element={<Alumni activePage={page} />} />
            <Route path="/recruitment" element={<Recruitment activePage={page} />} />
            <Route path="/gallery" element={<CircularGalleryDemo />} />
            <Route path="/fan-carousel" element={<CardFanCarouselDemo />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
