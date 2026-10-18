import React, { useEffect } from "react"
import GsapBigTextHero from "../components/about/GsapBigTextHero"
import GsapHorizontalShowcase from "../components/about/GsapHorizontalShowcase"
import TeamMembersMarquee from "../components/about/TeamMembersMarquee"

export default function About({ activePage = "About" }) {
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, behavior: "instant" })
    }
  }, [])

  return (
    <div
      className="bg-transparent relative w-full min-h-screen mx-auto flex flex-col items-center justify-start"
      data-node-id="about-page"
      data-name="About"
    >
      {/* 1. Big animated text that covers the screen */}
      <GsapBigTextHero />

      {/* 2. GSAP Horizontal Showcase: user scrolls vertically, stuff scrolls horizontally */}
      <GsapHorizontalShowcase />

      {/* 3. Creative Team Members Marquee Section */}
      <TeamMembersMarquee />
    </div>
  )
}

