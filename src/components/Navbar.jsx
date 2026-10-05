import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import {
  FolderGit2,
  GraduationCap,
  Home as HomeIcon,
  Info,
  UserPlus,
  Users,
  Menu,
  X,
} from "lucide-react"
import { cn } from "../lib/utils"

const imgNcsLogo = "/assets/8f22e.svg"

const navItems = [
  { label: "Home", page: "Home", icon: HomeIcon },
  { label: "About", page: "About", icon: Info },
  { label: "Project", page: "Project", icon: FolderGit2 },
  { label: "Team", page: "Team", icon: Users },
  { label: "Alumni", page: "Alumni", icon: GraduationCap },
  { label: "Recruitment", page: "Recruitment", icon: UserPlus },
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const getPageFromPath = (path) => {
    if (path === "/") return "Home"
    if (path === "/about") return "About"
    if (path === "/project") return "Project"
    if (path === "/team") return "Team"
    if (path === "/alumni") return "Alumni"
    if (path === "/recruitment") return "Recruitment"
    return "Home"
  }
  const activePage = getPageFromPath(location.pathname)

  const onNavigate = (page) => {
    if (page === "Home") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        navigate("/")
      }
    }
    if (page === "About") {
      if (location.pathname === "/about") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        navigate("/about")
      }
    }
    if (page === "Project") navigate("/project")
    if (page === "Team") navigate("/team")
    if (page === "Alumni") navigate("/alumni")
    if (page === "Recruitment") {
      if (location.pathname === "/recruitment") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        navigate("/recruitment")
      }
    }
    setIsMobileMenuOpen(false)
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

  return (
    <nav className="relative z-30 select-none shrink-0 flex items-center justify-center w-full">
      <div className="relative mx-auto h-[56px] sm:h-[60px] md:h-[68px] w-full max-w-[1100px] rounded-full bg-white shadow-xl px-3 sm:px-4 md:px-6 lg:px-7 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onNavigate?.("Home")}
          className="relative h-[30px] sm:h-[33px] md:h-[38px] w-[68px] sm:w-[75px] md:w-[86px] shrink-0 cursor-pointer transition-transform hover:scale-105 focus:outline-none"
          aria-label="Nibble Computer Society - Home"
        >
          <img
            alt=""
            className="block size-full max-w-none object-contain pointer-events-none"
            src={imgNcsLogo}
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center h-[44px] px-4 rounded-[22px] bg-neutral-100/90 border border-black/5 shadow-inner gap-1 xl:gap-1.5">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activePage === item.page

            return (
              <motion.button
                key={item.page}
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate?.(item.page)}
                className={cn(
                  "relative flex items-center justify-center gap-1.5 h-[36px] px-4 xl:px-5 rounded-full cursor-pointer transition-colors duration-200 focus:outline-none select-none",
                  isActive
                    ? "text-white"
                    : "text-neutral-700 hover:text-black hover:bg-white/80",
                )}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-black shadow-md z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                <Icon
                  size={16}
                  strokeWidth={2.2}
                  aria-hidden
                  className={cn(
                    "relative z-10 shrink-0 transition-colors duration-200",
                    isActive ? "text-white" : "text-neutral-800",
                  )}
                />
                <span
                  className={cn(
                    "relative z-10 whitespace-nowrap text-[14px] xl:text-[15px] tracking-[0.1px] transition-colors duration-200 leading-none",
                    isActive
                      ? "font-semibold text-white"
                      : "font-medium text-neutral-800",
                  )}
                  style={{ fontFamily: "'Satoshi', Arial, sans-serif" }}
                >
                  {item.label}
                </span>
              </motion.button>
            )
          })}
        </div>

        <button
          type="button"
          onClick={handleConnectClick}
          className="hidden md:flex h-[40px] px-4 lg:px-5 xl:px-6 shrink-0 cursor-pointer items-center justify-center rounded-[20px] bg-black text-center font-normal tracking-[0.11px] text-[16px] text-[#fffefe] transition-all hover:bg-neutral-800 focus:outline-none"
          style={{ fontFamily: "'Satoshi', Arial, sans-serif" }}
        >
          <span style={{ lineHeight: 1 }}>Connect</span>
        </button>

        {/* Mobile Nav Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex lg:hidden h-11 w-11 shrink-0 items-center justify-center rounded-full hover:bg-neutral-100 text-black transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[calc(100%+0.5rem)] left-4 right-4 bg-white shadow-2xl rounded-[24px] p-2 flex flex-col gap-1 lg:hidden border border-black/5">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activePage === item.page
            return (
              <button
                key={item.page}
                type="button"
                onClick={() => onNavigate?.(item.page)}
                className={cn(
                  "flex items-center gap-2.5 h-[48px] px-3 rounded-[24px] w-full transition-colors",
                  isActive ? "bg-black text-white" : "text-neutral-700 hover:bg-neutral-100"
                )}
              >
                <Icon size={20} className={isActive ? "text-white" : "text-neutral-800"} />
                <span className="text-[16px] font-medium" style={{ fontFamily: "'Satoshi', Arial, sans-serif" }}>
                  {item.label}
                </span>
              </button>
            )
          })}
          <button
            type="button"
            onClick={() => {
              handleConnectClick()
              setIsMobileMenuOpen(false)
            }}
            className="flex items-center justify-center h-[48px] mt-1 rounded-[24px] bg-neutral-900 text-white font-medium text-[16px]"
            style={{ fontFamily: "'Satoshi', Arial, sans-serif" }}
          >
            Connect
          </button>
        </div>
      )}
    </nav>
  )
}

