import React, { useState, useEffect } from "react"

/**
 * YouTube-style Ghost / Skeleton Loading Overlay for Profile Cards.
 * Matches the exact w-[200px] h-[600px] rounded-[300px] capsule geometry.
 */
export function ProfileCardGhostOverlay({ src, className = "" }) {
  const [loaded, setLoaded] = useState(false)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    if (!src) {
      setLoaded(true)
      return
    }

    const img = new Image()
    img.src = src

    if (img.complete) {
      setLoaded(true)
      return
    }

    img.onload = () => setLoaded(true)
    img.onerror = () => setLoaded(true)
  }, [src])

  // Remove from DOM shortly after fade-out transition finishes to save GPU memory
  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 700)
      return () => clearTimeout(timer)
    }
  }, [loaded])

  if (!shouldRender) return null

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 z-30 overflow-hidden rounded-[300px] bg-[#0c101c] border border-white/10 transition-opacity duration-600 ease-out pointer-events-none select-none ${
        loaded ? "opacity-0" : "opacity-100"
      } ${className}`}
    >
      {/* Background subtle radial ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/70" />

      {/* Animated diagonal shimmer sweep wave */}
      <div className="absolute -inset-x-[150%] inset-y-0 w-[400%] bg-gradient-to-r from-transparent via-white/[0.09] to-transparent animate-ghost-sweep pointer-events-none" />

      {/* Upper Avatar Ghost Silhouette (Head + Shoulders) */}
      <div className="absolute top-[88px] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
        {/* Head */}
        <div className="w-[96px] h-[108px] rounded-full bg-white/[0.06] border border-white/5 shadow-inner" />
        {/* Shoulders / Bust */}
        <div className="w-[164px] h-[155px] -mt-5 rounded-t-[82px] bg-white/[0.04] border border-white/5" />
      </div>

      {/* Dark gradient fade for the lower text zone */}
      <div
        className="absolute bottom-0 inset-x-0 h-[260px] rounded-b-[200px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(12,16,28,0) 0%, rgba(12,16,28,0.85) 35%, rgb(12,16,28) 100%)",
        }}
      />

      {/* Ghost text skeleton placeholders matching the exact card typography positions */}
      <div className="absolute top-[425px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[9px] w-full px-5 text-center">
        {/* Name Bar 1 */}
        <div className="w-[115px] h-[20px] rounded-full bg-white/[0.11] animate-pulse" />
        {/* Name Bar 2 */}
        <div className="w-[85px] h-[18px] rounded-full bg-white/[0.08] animate-pulse" />
        {/* Role Bar */}
        <div className="w-[95px] h-[13px] rounded-full bg-white/[0.05] mt-1 animate-pulse" />
      </div>
    </div>
  )
}

/**
 * Standalone Profile Card Ghost / Skeleton Component
 * Can be placed directly in any grid or list with matching dimensions.
 */
export function ProfileCardSkeleton({ className = "" }) {
  return (
    <div
      className={`relative w-[200px] h-[600px] rounded-[300px] overflow-hidden bg-[#0c101c] border border-white/10 ${className}`}
    >
      <ProfileCardGhostOverlay src={null} />
    </div>
  )
}

export default ProfileCardGhostOverlay
