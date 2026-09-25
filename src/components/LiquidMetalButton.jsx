import { Sparkles } from "lucide-react"
import React, { useEffect, useMemo, useRef, useState } from "react"

export function LiquidMetalButton({
  label = "Get Started",
  onClick,
  viewMode = "text",
  width,
  height,
  icon,
  fontSize = 16,
  textColor = "#ffffff",
  className = "",
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [ripples, setRipples] = useState([])
  const buttonRef = useRef(null)
  const rippleId = useRef(0)

  const dimensions = useMemo(() => {
    if (width && height) {
      return {
        width,
        height,
        innerWidth: width - 4,
        innerHeight: height - 4,
        shaderWidth: width,
        shaderHeight: height,
      }
    }
    if (viewMode === "icon") {
      return {
        width: 46,
        height: 46,
        innerWidth: 42,
        innerHeight: 42,
        shaderWidth: 46,
        shaderHeight: 46,
      }
    } else {
      return {
        width: 170,
        height: 52,
        innerWidth: 166,
        innerHeight: 48,
        shaderWidth: 170,
        shaderHeight: 52,
      }
    }
  }, [viewMode, width, height])

  useEffect(() => {
    const styleId = "liquid-metal-global-styles"
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style")
      style.id = styleId
      style.textContent = `
        @keyframes liquid-metal-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes liquid-shimmer {
          0% { transform: translate3d(-100%, 0, 0) rotate(25deg); }
          100% { transform: translate3d(200%, 0, 0) rotate(25deg); }
        }
        @keyframes ripple-animation {
          0% {
            transform: translate3d(-50%, -50%, 0) scale(0);
            opacity: 0.7;
          }
          100% {
            transform: translate3d(-50%, -50%, 0) scale(4);
            opacity: 0;
          }
        }
      `
      document.head.appendChild(style)
    }
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsPressed(false)
  }

  const handleClick = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const ripple = { x, y, id: rippleId.current++ }

      setRipples((prev) => [...prev, ripple])
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id))
      }, 600)
    }

    onClick?.()
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        style={{
          perspective: "1000px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div
          style={{
            position: "relative",
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
            transformStyle: "preserve-3d",
            transition:
              "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease",
            transform: isHovered ? "scale(1.05)" : "none",
          }}
        >
          {/* Label & Icon Layer */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transformStyle: "preserve-3d",
              transition:
                "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease, gap 0.4s ease",
              transform: "translateZ(20px)",
              zIndex: 30,
              pointerEvents: "none",
            }}
          >
            {viewMode === "icon" &&
              (icon || (
                <Sparkles
                  size={18}
                  style={{
                    color: textColor,
                    filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.8))",
                    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transform: "scale(1)",
                  }}
                />
              ))}
            {viewMode === "text" && (
              <>
                <span
                  style={{
                    fontSize: `${fontSize}px`,
                    color: textColor,
                    fontWeight: 600,
                    textShadow:
                      "0px 1px 4px rgba(0, 0, 0, 0.9), 0 0 10px rgba(255,255,255,0.2)",
                    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transform: "scale(1)",
                    whiteSpace: "nowrap",
                    letterSpacing: "-0.3px",
                  }}
                >
                  {label}
                </span>
                {icon}
              </>
            )}
          </div>

          {/* Inner Depth Layer */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              transformStyle: "preserve-3d",
              transition:
                "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease",
              transform: `translateZ(10px) ${
                isPressed
                  ? "translateY(1px) scale(0.98)"
                  : "translateY(0) scale(1)"
              }`,
              zIndex: 20,
            }}
          >
            <div
              style={{
                width: `${dimensions.innerWidth}px`,
                height: `${dimensions.innerHeight}px`,
                margin: "2px",
                borderRadius: "100px",
                background:
                  "linear-gradient(180deg, rgba(30, 30, 30, 0.85) 0%, rgba(10, 10, 10, 0.95) 100%)",
                boxShadow: isPressed
                  ? "inset 0px 2px 4px rgba(0, 0, 0, 0.6), inset 0px 1px 2px rgba(0, 0, 0, 0.5)"
                  : "inset 0 1px 1px rgba(255,255,255,0.15)",
                transition:
                  "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease, box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </div>

          {/* Liquid Metal Flow Base Layer */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              transformStyle: "preserve-3d",
              transition:
                "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease",
              transform: `translateZ(0px) ${
                isPressed
                  ? "translateY(1px) scale(0.98)"
                  : "translateY(0) scale(1)"
              }`,
              zIndex: 10,
            }}
          >
            <div
              style={{
                height: `${dimensions.height}px`,
                width: `${dimensions.width}px`,
                borderRadius: "100px",
                boxShadow: isPressed
                  ? "0px 0px 0px 1px rgba(0, 0, 0, 0.5), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)"
                  : isHovered
                    ? "0px 0px 0px 1.5px rgba(255, 255, 255, 0.4), 0px 15px 30px 0px rgba(0, 0, 0, 0.5), 0px 0px 25px rgba(255, 255, 255, 0.35)"
                    : "0px 0px 0px 1px rgba(255, 255, 255, 0.2), 0px 10px 20px 0px rgba(0, 0, 0, 0.3)",
                transition:
                  "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease, box-shadow 0.2s ease",
                background: "transparent",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Iridescent Liquid Metal Flow */}
              <div
                style={{
                  position: "absolute",
                  inset: -2,
                  borderRadius: "100px",
                  background:
                    "linear-gradient(135deg, #434343 0%, #000000 20%, #8a9ba8 40%, #ffffff 50%, #708090 60%, #1a1a1a 80%, #555555 100%)",
                  backgroundSize: "300% 300%",
                  animation: isHovered
                    ? "liquid-metal-flow 2.5s ease infinite"
                    : "none",
                  opacity: 0.95,
                  willChange: isHovered ? "background-position" : "auto",
                }}
              />

              {/* Shimmer gleam on hover */}
              {isHovered && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "100px",
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                    animation: "liquid-shimmer 1.5s infinite linear",
                    pointerEvents: "none",
                    willChange: "transform",
                  }}
                />
              )}
            </div>
          </div>

          {/* Interactive Click Button */}
          <button
            ref={buttonRef}
            type="button"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              zIndex: 40,
              transformStyle: "preserve-3d",
              transform: "translateZ(25px)",
              transition:
                "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease",
              overflow: "hidden",
              borderRadius: "100px",
            }}
            aria-label={label}
          >
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                style={{
                  position: "absolute",
                  left: `${ripple.x}px`,
                  top: `${ripple.y}px`,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)",
                  pointerEvents: "none",
                  animation: "ripple-animation 0.6s ease-out",
                }}
              />
            ))}
          </button>
        </div>
      </div>
    </div>
  )
}

export default LiquidMetalButton
