import React, { useEffect } from "react"
import Navbar from "../components/Navbar"
import AboutSection from "../components/AboutSection"

export default function About({ activePage = "About", onNavigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <div
      className="bg-transparent relative w-[1668px] min-h-screen mx-auto flex flex-col items-center pt-[27px] pb-[40px] shrink-0"
      data-node-id="about-page"
      data-name="About"
    >
      <div className="content-stretch flex flex-col gap-[50px] items-center w-[1518px]">
        <Navbar activePage={activePage} onNavigate={onNavigate} />
        <div className="w-full flex flex-col items-center">
          <AboutSection />
        </div>
      </div>
    </div>
  )
}
