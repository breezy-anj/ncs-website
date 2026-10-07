import { useState, useEffect, useRef } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Home from "./pages/Home"
import About from "./pages/About"
import Events from "./pages/Events"
import Gallery from "./pages/Gallery"
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
    if (path === "/events") return "Events"
    if (path === "/gallery") return "Gallery"
    if (path === "/project") return "Project"
    if (path === "/team") return "Team"
    if (path === "/alumni") return "Alumni"
    if (path === "/recruitment") return "Recruitment"
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
          // On mobile, all pages (Home, About, Project, Recruitment, Team, Alumni) are natively responsive with mobile cards, so scale = 1.
          newScale = 1
        } else {
          // On tablet/small-desktop, scale everything except natively responsive pages
          if (page === "Home" || page === "Events" || page === "Gallery") {
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

  // With mobile wave stacks, all pages scroll natively vertically
  const needsHorizontalScroll = false

  return (
    <div className="bg-transparent min-h-screen w-full flex flex-col items-center overflow-x-hidden text-white relative">
      {/* 3D Ethereal Light Beams Background on Home/Team/Alumni, Special 3D Rotating Layers on Project */}
      {page === "Gallery" || page === "Fan Carousel" ? null : page === "Project" ? <ProjectBackground /> : <BeamsBackground />}

      {/* Sticky/Fixed Navbar Always on Top */}
      <header className="fixed top-0 inset-x-0 z-[100] flex justify-center pt-2 sm:pt-3 md:pt-4 pointer-events-none">
        <div className="w-full max-w-[1668px] px-3 sm:px-4 md:px-0 flex justify-center pointer-events-auto">
          <Navbar />
        </div>
      </header>

      {/* Responsive Scaled Page Content Layer */}
      <main
        ref={scrollRef}
        className={`relative z-10 w-full flex ${needsHorizontalScroll ? 'justify-start overflow-x-auto scrollbar-hide' : 'justify-center'} pt-[70px] sm:pt-[76px] md:pt-[84px]`}
        style={{
          height:
            contentHeight && scale < 1 ? `${contentHeight * scale}px` : "auto",
          minHeight: "100vh",
          overflowY: "visible",
        }}
      >
        <div
          ref={innerRef}
          className={`${scale < 1 ? "w-[1668px] shrink-0" : "w-full max-w-[1668px]"} flex justify-center transition-transform duration-150 ease-out`}
          style={{
            transform: scale < 1 ? `scale(${scale})` : "none",
            transformOrigin: needsHorizontalScroll ? "top left" : "top center",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full flex justify-center"
            >
              <Routes location={location}>
                <Route path="/" element={<Home activePage={page} />} />
                <Route path="/about" element={<About activePage={page} />} />
                <Route path="/events" element={<Events activePage={page} />} />
                <Route path="/gallery" element={<Gallery activePage={page} />} />
                <Route path="/project" element={<Project activePage={page} />} />
                <Route path="/team" element={<Teams activePage={page} />} />
                <Route path="/alumni" element={<Alumni activePage={page} />} />
                <Route path="/recruitment" element={<Recruitment activePage={page} />} />
                <Route path="/fan-carousel" element={<CardFanCarouselDemo />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
