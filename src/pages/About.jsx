import React, { useEffect } from "react"
import AboutSection from "../components/AboutSection"
import TimelineBlock01 from "../components/TimelineBlock01"

export default function About({ activePage = "About", onNavigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <div
      className="bg-transparent relative w-full max-w-[1668px] min-h-screen mx-auto flex flex-col items-center pt-[27px] pb-[40px] shrink-0"
      data-node-id="about-page"
      data-name="About"
    >
      <div className="content-stretch flex flex-col items-center w-full max-w-[1480px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full flex flex-col items-center">
          <AboutSection />
        </div>
        <div className="w-full mt-10 md:mt-16">
          <TimelineBlock01 />
        </div>
      </div>
    </div>
  )
}
