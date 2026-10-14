import React, { useEffect } from "react"
import AboutSection from "../components/AboutSection"

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
      <div className="content-stretch flex flex-col items-center w-full max-w-[1460px] px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36">
        <div className="w-full flex flex-col items-center">
          <AboutSection />
        </div>
      </div>
    </div>
  )
}
