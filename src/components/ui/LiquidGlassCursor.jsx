import React, { useEffect, useRef } from "react";

export default function LiquidGlassCursor() {
  const cursorRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    // Only activate on desktop devices with fine pointers
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const cursorEl = cursorRef.current;
    const innerEl = innerRef.current;
    if (!cursorEl) return;

    let isVisible = false;
    let lastHoverTarget = null;

    // Zero-latency instant DOM update directly on mousemove event
    const onMouseMove = (e) => {
      cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;

      if (!isVisible) {
        isVisible = true;
        cursorEl.style.opacity = "1";
      }

      // Check hover state efficiently without triggering React component re-renders
      const target = e.target;
      if (target !== lastHoverTarget && innerEl && target && target.closest) {
        lastHoverTarget = target;
        const isInteractive = Boolean(
          target.closest('a, button, [role="button"], input, textarea, select, label, .cursor-pointer')
        );
        if (isInteractive) {
          innerEl.style.transform = "scale(1.15) rotate(-3deg)";
        } else {
          innerEl.style.transform = "scale(1) rotate(0deg)";
        }
      }
    };

    const onMouseDown = () => {
      if (innerEl) innerEl.style.transform = "scale(0.88)";
    };

    const onMouseUp = () => {
      if (innerEl) innerEl.style.transform = "scale(1)";
    };

    const onMouseLeave = () => {
      if (cursorEl) {
        isVisible = false;
        cursorEl.style.opacity = "0";
      }
    };

    const onMouseEnter = () => {
      if (cursorEl) {
        isVisible = true;
        cursorEl.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  // Touch screens keep native cursor
  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  // Pointer arrow geometry (hotspot apex at 2, 2)
  const arrowPath = "M 2 2 L 2 38 L 12 29 L 20 48 L 28 44 L 20 26 L 32 26 Z";
  const innerPath = "M 4 5 L 4 34 L 12 27 L 19 44 L 25 41 L 18 25 L 29 25 Z";

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[999999] will-change-transform select-none"
      style={{
        opacity: 0,
        transition: "opacity 0.15s ease-out",
        background: "transparent",
      }}
    >
      <div
        ref={innerRef}
        className="relative w-[14px] h-[18px] origin-top-left transition-transform duration-100 ease-out"
        style={{ background: "transparent" }}
      >
        <svg
          viewBox="0 0 44 56"
          className="w-full h-full overflow-visible"
          style={{ background: "transparent" }}
        >
          <defs>
            {/* Shiny Liquid Metal Chrome Gradient (High-contrast metallic reflections) */}
            <linearGradient id="metal-chrome-rim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="15%" stopColor="#cbd5e1" />
              <stop offset="30%" stopColor="#475569" />
              <stop offset="50%" stopColor="#f8fafc" />
              <stop offset="68%" stopColor="#334155" />
              <stop offset="85%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            {/* Inner Metallic Bevel */}
            <linearGradient id="metal-chrome-bevel" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="25%" stopColor="#64748b" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="75%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>

            {/* Specular White Rim Highlight */}
            <linearGradient id="metal-specular-gleam" x1="0%" y1="0%" x2="40%" y2="80%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="75%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.3" />
            </linearGradient>

            {/* Translucent Frosted Glass Center Gradient */}
            <linearGradient id="translucent-glass-center" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.45)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.12)" />
              <stop offset="80%" stopColor="rgba(255, 255, 255, 0.08)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.35)" />
            </linearGradient>

            {/* Polished Chrome Sphere Stud Radial Gradient */}
            <radialGradient id="chrome-stud-gradient" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#cbd5e1" />
              <stop offset="80%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1e293b" />
            </radialGradient>
          </defs>

          {/* Base Dark Rim for Contrast */}
          <path
            d={arrowPath}
            fill="none"
            stroke="#0a0f1d"
            strokeWidth="4.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Middle: Translucent Frosted Glass Core */}
          <path
            d={arrowPath}
            fill="url(#translucent-glass-center)"
            stroke="none"
          />

          {/* Middle: Inner Translucent Facet Glow */}
          <path
            d={innerPath}
            fill="rgba(255, 255, 255, 0.15)"
            stroke="none"
          />

          {/* Sides: Polished Shiny Liquid Metal Outer Rim */}
          <path
            d={arrowPath}
            fill="none"
            stroke="url(#metal-chrome-rim)"
            strokeWidth="3.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Sides: Inner Beveled Metal Step Line */}
          <path
            d={innerPath}
            fill="none"
            stroke="url(#metal-chrome-bevel)"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* Sides: Razor-Sharp Specular Mirror Chrome Edge */}
          <path
            d={arrowPath}
            fill="none"
            stroke="url(#metal-specular-gleam)"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Specular Glint Line down left edge */}
          <line
            x1="5"
            y1="6"
            x2="5"
            y2="30"
            stroke="#ffffff"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* 3D Shiny Polished Chrome Rivet Studs at the Vertices */}
          {/* Top Apex Stud */}
          <circle cx="2" cy="2" r="2" fill="url(#chrome-stud-gradient)" stroke="#ffffff" strokeWidth="0.5" />
          <circle cx="1.6" cy="1.6" r="0.6" fill="#ffffff" />

          {/* Left Barb Stud */}
          <circle cx="2" cy="38" r="2" fill="url(#chrome-stud-gradient)" stroke="#ffffff" strokeWidth="0.5" />
          <circle cx="1.6" cy="37.6" r="0.6" fill="#ffffff" />

          {/* Inner Left Notch Stud */}
          <circle cx="12" cy="29" r="1.6" fill="url(#chrome-stud-gradient)" stroke="#ffffff" strokeWidth="0.5" />
          <circle cx="11.6" cy="28.6" r="0.4" fill="#ffffff" />

          {/* Stem Bottom-Left Stud */}
          <circle cx="20" cy="48" r="2" fill="url(#chrome-stud-gradient)" stroke="#ffffff" strokeWidth="0.5" />
          <circle cx="19.6" cy="47.6" r="0.6" fill="#ffffff" />

          {/* Stem Bottom-Right Stud */}
          <circle cx="28" cy="44" r="2" fill="url(#chrome-stud-gradient)" stroke="#ffffff" strokeWidth="0.5" />
          <circle cx="27.6" cy="43.6" r="0.6" fill="#ffffff" />

          {/* Stem Inner-Right Notch Stud */}
          <circle cx="20" cy="26" r="1.6" fill="url(#chrome-stud-gradient)" stroke="#ffffff" strokeWidth="0.5" />
          <circle cx="19.6" cy="25.6" r="0.4" fill="#ffffff" />

          {/* Right Barb Stud */}
          <circle cx="32" cy="26" r="2" fill="url(#chrome-stud-gradient)" stroke="#ffffff" strokeWidth="0.5" />
          <circle cx="31.6" cy="25.6" r="0.6" fill="#ffffff" />
        </svg>
      </div>
    </div>
  );
}
