import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import {
  FolderGit2,
  GraduationCap,
  Home as HomeIcon,
  Info,
  UserPlus,
  Users,
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
    <nav className="relative z-30 select-none shrink-0 flex items-center justify-center">
      <div className="relative mx-auto h-[106px] w-[1539px] max-w-full rounded-[53px] bg-white shadow-xl px-[40px] flex items-center justify-between">
        <button
          type="button"
          onClick={() => onNavigate?.("Home")}
          className="relative h-[54.39px] w-[122.96px] shrink-0 cursor-pointer transition-transform hover:scale-105 focus:outline-none"
          aria-label="Nibble Computer Society - Home"
        >
          <img
            alt=""
            className="block size-full max-w-none object-contain pointer-events-none"
            src={imgNcsLogo}
          />
        </button>

        <div className="flex items-center h-[68px] px-3 rounded-[34px] bg-neutral-100/90 border border-black/5 shadow-inner gap-2 xl:gap-3">
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
                  "relative flex items-center justify-center gap-2.5 h-[52px] px-5 rounded-full cursor-pointer transition-colors duration-200 focus:outline-none select-none",
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
                  size={22}
                  strokeWidth={2.2}
                  aria-hidden
                  className={cn(
                    "relative z-10 shrink-0 transition-colors duration-200",
                    isActive ? "text-white" : "text-neutral-800",
                  )}
                />
                <span
                  className={cn(
                    "relative z-10 whitespace-nowrap text-[20px] tracking-[0.1px] transition-colors duration-200 leading-none",
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
          className="flex h-[66px] px-[38px] shrink-0 cursor-pointer items-center justify-center rounded-[33px] bg-black text-center font-normal tracking-[0.11px] text-[#fffefe] transition-all hover:bg-neutral-800 focus:outline-none"
          style={{ fontFamily: "'Satoshi', Arial, sans-serif", fontSize: "29.1px" }}
        >
          <span style={{ lineHeight: 1 }}>Connect</span>
        </button>
      </div>
    </nav>
  )
}

