import React from "react"
import { useNavigate, useLocation } from "react-router-dom"

import { LiquidMetalButton } from "./LiquidMetalButton"

const imgNcsLogo = "/assets/8f22e.svg"

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const getPageFromPath = (path) => {
    if (path === "/") return "Home"
    if (path === "/project") return "Project"
    if (path === "/team") return "Team"
    if (path === "/alumni") return "Alumni"
    return "Home"
  }
  const activePage = getPageFromPath(location.pathname)

  const onNavigate = (page) => {
    if (page === "Home") navigate("/")
    if (page === "Project") navigate("/project")
    if (page === "Team") navigate("/team")
    if (page === "Alumni") navigate("/alumni")
  }
  const handleConnectClick = () => {
    const connectEl =
      document.getElementById("connect-section") ||
      document.getElementById("social-section")
    if (connectEl) {
      connectEl.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    }
  }

  const navItems = [
    { label: "Home", page: "Home" },
    { label: "Project", page: "Project" },
    { label: "Team", page: "Team" },
    { label: "Alumni", page: "Alumni" },
  ]

  return (
    <nav className="relative z-30 select-none shrink-0 flex items-center justify-center">
      <div className="bg-white/95 backdrop-blur-md h-[106px] w-[1298px] rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] px-[60px] flex items-center justify-between border border-white/20 transition-all duration-300">
        {/* NCS Logo */}
        <button
          type="button"
          onClick={() => onNavigate?.("Home")}
          className="h-[54px] w-[124px] flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none"
          aria-label="Nibble Computer Society - Home"
        >
          <img
            alt="NCS Logo"
            className="block w-full h-full object-contain pointer-events-none"
            src={imgNcsLogo}
          />
        </button>

        {/* Navigation Items */}
        <div className="flex items-center gap-[45px]">
          {navItems.map((item) => {
            const isActive = activePage === item.page
            return (
              <button
                key={item.page}
                type="button"
                onClick={() => onNavigate?.(item.page)}
                className={`relative text-[27px] font-['Inter',sans-serif] tracking-[-0.5px] cursor-pointer transition-all duration-200 py-2 px-4 rounded-full focus:outline-none leading-none flex items-center justify-center group ${
                  isActive
                    ? "font-bold text-black opacity-100 scale-105"
                    : "font-normal text-black/60 hover:text-black hover:opacity-100 hover:scale-105"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-[3px] bg-black rounded-full transition-all duration-300" />
                )}
              </button>
            )
          })}
        </div>

        {/* Connect Button with Liquid Metal Shader */}
        <LiquidMetalButton
          label="Connect"
          width={184}
          height={56}
          fontSize={25}
          textColor="#ffffff"
          onClick={handleConnectClick}
        />
      </div>
    </nav>
  )
}
