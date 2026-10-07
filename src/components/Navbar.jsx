import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar,
  FolderGit2,
  GraduationCap,
  Home as HomeIcon,
  Images,
  Info,
  UserPlus,
  Users,
} from "lucide-react"
import { publicAsset } from "../lib/publicAsset"

const imgNcsLogo = publicAsset("assets/ncs-logo-white.svg")

const navItems = [
  { label: "Home", page: "Home", icon: HomeIcon, path: "/" },
  { label: "About", page: "About", icon: Info, path: "/about" },
  { label: "Events", page: "Events", icon: Calendar, path: "/events" },
  { label: "Gallery", page: "Gallery", icon: Images, path: "/gallery" },
  { label: "Project", page: "Project", icon: FolderGit2, path: "/project" },
  { label: "Team", page: "Team", icon: Users, path: "/team" },
  { label: "Alumni", page: "Alumni", icon: GraduationCap, path: "/alumni" },
  { label: "Recruitment", page: "Recruitment", icon: UserPlus, path: "/recruitment" },
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isCtaHovered, setIsCtaHovered] = useState(false)

  const getPageFromPath = (path) => {
    if (path === "/") return "Home"
    if (path === "/about") return "About"
    if (path === "/events") return "Events"
    if (path === "/gallery") return "Gallery"
    if (path === "/project") return "Project"
    if (path === "/team") return "Team"
    if (path === "/alumni") return "Alumni"
    if (path === "/recruitment") return "Recruitment"
    return "Home"
  }
  const activePage = getPageFromPath(location.pathname)

  const onNavigate = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      navigate(path)
    }
    setIsMobileOpen(false)
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
    setIsMobileOpen(false)
  }

  return (
    <nav className="relative z-50 select-none shrink-0 flex items-center justify-center w-full px-3 sm:px-4 pointer-events-auto">
      {/* Outer Metallic / Glass Rim */}
      <div
        className="w-full max-w-[1160px] p-[2.5px] rounded-[28px] lg:rounded-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(200, 200, 200, 0.25) 12%, rgba(130, 130, 130, 0.15) 50%, rgba(80, 80, 80, 0.2) 85%, rgba(255, 255, 255, 0.45) 100%)",
          boxShadow:
            "0.3px 4.4px 2.2px 0px rgba(0, 0, 0, 0.05), 0.5px 7.2px 3.6px 0px rgba(0, 0, 0, 0.08), 0.8px 11.7px 5.9px 0px rgba(0, 0, 0, 0.12), 1.3px 19.2px 9.6px 0px rgba(0, 0, 0, 0.18), 2.2px 33px 16.5px 0px rgba(0, 0, 0, 0.24), 4px 60px 30px 0px rgba(0, 0, 0, 0.45)",
        }}
      >
        {/* Inner Liquid Glass Core */}
        <div
          className="relative w-full overflow-hidden rounded-[26px] lg:rounded-full"
          style={{
            background:
              "linear-gradient(150deg, rgba(25, 25, 30, 0.72) 0%, rgba(16, 16, 20, 0.85) 50%, rgba(24, 24, 28, 0.78) 100%)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            boxShadow:
              "inset 0px 1px 1.5px 0px rgba(255, 255, 255, 0.3), inset 0px -1px 1.5px 0px rgba(0, 0, 0, 0.6)",
          }}
        >
          {/* Main Top Row (Header) */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 md:py-2.5 min-h-[56px] md:min-h-[62px]">
            {/* Brand Logo & Title */}
            <button
              type="button"
              onClick={() => onNavigate("/")}
              className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group focus:outline-none"
              aria-label="Nibble Computer Society - Home"
            >
              <div className="relative h-[28px] sm:h-[32px] w-[64px] sm:w-[72px] shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={imgNcsLogo}
                  alt="NCS Logo"
                  className="block size-full object-contain pointer-events-none drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]"
                />
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 p-1 rounded-full bg-white/[0.04] border border-white/10 shadow-[inset_0px_1px_2px_rgba(0,0,0,0.5)]">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activePage === item.page

                return (
                  <button
                    key={item.page}
                    type="button"
                    onClick={() => onNavigate(item.path)}
                    className={`relative flex items-center gap-1.5 h-[34px] xl:h-[36px] px-2.5 xl:px-3.5 rounded-full cursor-pointer transition-colors duration-200 select-none text-[12px] xl:text-[13.5px] font-['Satoshi',Arial,sans-serif] ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-white/65 hover:text-white font-medium hover:bg-white/[0.08]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="liquidGlassActivePill"
                        className="absolute inset-0 rounded-full z-0"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.08) 100%)",
                          boxShadow:
                            "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.5), 0px 4px 12px -2px rgba(0, 0, 0, 0.4)",
                          border: "1px solid rgba(255, 255, 255, 0.25)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    <Icon
                      size={15}
                      className={`relative z-10 shrink-0 transition-colors ${
                        isActive ? "text-white" : "text-white/60"
                      }`}
                    />
                    <span className="relative z-10 tracking-[0.2px] leading-none">
                      {item.label}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Right: Liquid Glass CTA Button ("Connect") */}
            <div className="hidden sm:flex items-center">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onMouseEnter={() => setIsCtaHovered(true)}
                onMouseLeave={() => setIsCtaHovered(false)}
                onClick={handleConnectClick}
                className="relative overflow-hidden cursor-pointer flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-full text-[13px] sm:text-[14px] font-['Satoshi',Arial,sans-serif] font-semibold text-white tracking-[0.3px] transition-all focus:outline-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgb(38, 38, 44) 0%, rgb(10, 10, 14) 100%)",
                  boxShadow:
                    "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.35), inset 0px -1px 1px 0px rgba(0, 0, 0, 0.6), 0px 6px 16px -4px rgba(0, 0, 0, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                }}
              >
                {/* Diagonal Hover Light Shine Beam */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{
                    x: isCtaHovered ? "150%" : "-100%",
                    opacity: isCtaHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute inset-y-0 w-[45px] pointer-events-none -skew-x-20"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)",
                  }}
                />
                <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Connect
                </span>
              </motion.button>
            </div>

            {/* Mobile Animated Menu Hamburger (3 lines) / Close Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex lg:hidden relative size-9 sm:size-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 active:scale-95 border border-white/20 text-white transition-all cursor-pointer focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-4 h-3.5 flex flex-col justify-between items-center pointer-events-none">
                <span
                  className={`w-4 h-[1.8px] bg-white rounded-full transition-transform duration-100 ease-out origin-center ${
                    isMobileOpen ? "rotate-45 translate-y-[5.8px]" : ""
                  }`}
                />
                <span
                  className={`w-4 h-[1.8px] bg-white rounded-full transition-opacity duration-75 ease-out ${
                    isMobileOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-4 h-[1.8px] bg-white rounded-full transition-transform duration-100 ease-out origin-center ${
                    isMobileOpen ? "-rotate-45 -translate-y-[5.8px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Accordion Drawer */}
          <div
            className={`grid transition-[grid-template-rows] duration-200 ease-out lg:hidden ${
              isMobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-white/10 px-3 pb-4 pt-2 flex flex-col gap-1.5">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activePage === item.page
                  return (
                    <button
                      key={item.page}
                      type="button"
                      onClick={() => onNavigate(item.path)}
                      className={`flex items-center gap-3 h-[46px] px-4 rounded-2xl w-full text-left font-['Satoshi',Arial,sans-serif] text-[15px] transition-all cursor-pointer ${
                        isActive
                          ? "bg-white/20 text-white font-semibold shadow-[inset_0px_1px_0px_rgba(255,255,255,0.4)]"
                          : "text-white/70 hover:text-white hover:bg-white/[0.08]"
                      }`}
                    >
                      <Icon
                        size={18}
                        className={isActive ? "text-white" : "text-white/60"}
                      />
                      <span>{item.label}</span>
                    </button>
                  )
                })}

                {/* Mobile Connect Button */}
                <button
                  type="button"
                  onClick={handleConnectClick}
                  className="flex sm:hidden items-center justify-center h-[46px] mt-2 rounded-2xl bg-white text-black font-semibold text-[15px] font-['Satoshi',Arial,sans-serif] shadow-lg active:scale-98 transition-transform cursor-pointer"
                >
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
