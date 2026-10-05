import React from "react"

/**
 * TeamCardBottomOverlay
 * Wraps the name/designation area of each profile card.
 * - Desktop:
 *   - Default: Displays member's name and designation.
 *   - On card hover: backdrop blur panel activates, name/designation fades out,
 *     lorem ipsum text and social links fade in.
 * - Mobile:
 *   - Hover effect is completely removed.
 *   - Member name and designation stay visible at all times.
 *   - Social link icons (GitHub & LinkedIn) are displayed directly below the designation.
 */
export default function TeamCardBottomOverlay({ children, linkedinUrl, githubUrl }) {
  const finalLinkedin = linkedinUrl || "https://linkedin.com"
  const finalGithub = githubUrl || "https://github.com"

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[300px] z-20">
      {/* Desktop only: Bottom backdrop-blur panel activated on card hover */}
      <div
        className="hidden md:block absolute bottom-0 inset-x-0 h-[205px] rounded-b-[200px] pointer-events-none transition-all duration-500 ease-out group-hover:backdrop-blur-md opacity-0 group-hover:opacity-100"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 25%, rgba(0, 0, 0, 0.88) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 25%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 25%)",
        }}
      />

      {/* Member Name & Designation */}
      {/* On desktop: fades out on hover. On mobile: always visible without hover */}
      <div className="transition-all duration-400 ease-out md:group-hover:opacity-0 md:group-hover:scale-90 -translate-y-8 md:translate-y-0">
        {children}
      </div>

      {/* Desktop Hover State: 50-character lorem ipsum + social links on desktop hover only */}
      <div className="hidden md:flex absolute bottom-0 inset-x-0 h-[205px] flex-col items-center justify-between text-center px-4 pt-6 pb-6 opacity-0 scale-90 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-400 ease-out z-30">
        <p className="font-['Inter'] font-medium text-[13px] leading-[1.45] text-white/95 tracking-[-0.01em] max-w-[170px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Lorem ipsum dolor sit amet, consectetur elit diam.
        </p>
        <div className="flex items-center justify-center gap-3">
          {/* GitHub link */}
          <a
            href={finalGithub}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="size-9 p-2 rounded-full bg-white/10 hover:bg-white/25 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg border border-white/20 text-white cursor-pointer pointer-events-auto"
          >
            <svg className="size-full" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
          {/* LinkedIn link */}
          <a
            href={finalLinkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="size-9 p-2 rounded-full bg-white/10 hover:bg-white/25 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg border border-white/20 text-white cursor-pointer pointer-events-auto"
          >
            <svg className="size-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile State (md:hidden): Link icons directly visible below designation without hover */}
      <div className="md:hidden absolute bottom-3.5 inset-x-0 flex items-center justify-center gap-2.5 z-30 pointer-events-auto">
        {/* GitHub link */}
        <a
          href={finalGithub}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="size-11 p-2.5 rounded-full bg-white/15 hover:bg-white/30 active:scale-90 transition-all flex items-center justify-center border border-white/25 text-white cursor-pointer pointer-events-auto shadow-md"
        >
          <svg className="size-full" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        </a>
        {/* LinkedIn link */}
        <a
          href={finalLinkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="size-11 p-2.5 rounded-full bg-white/15 hover:bg-white/30 active:scale-90 transition-all flex items-center justify-center border border-white/25 text-white cursor-pointer pointer-events-auto shadow-md"
        >
          <svg className="size-full" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
