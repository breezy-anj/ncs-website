import React, { useEffect, useRef } from "react"

export default function SplineRobot({ className = "" }) {
  const viewerRef = useRef(null)

  useEffect(() => {
    const viewer = viewerRef.current
    if (!viewer) return

    // 1. Remove the Spline watermark & ensure shadow DOM elements overflow freely
    const configureShadow = () => {
      try {
        const shadow = viewer.shadowRoot
        if (shadow) {
          const logo =
            shadow.querySelector("#logo") ||
            shadow.querySelector('a[href*="spline.design"]') ||
            shadow.querySelector(".spline-watermark") ||
            shadow.querySelector('[aria-label*="Spline"]')
          if (logo) logo.remove()

          if (!shadow.querySelector("#hide-spline-watermark-style")) {
            const style = document.createElement("style")
            style.id = "hide-spline-watermark-style"
            style.textContent = `
              :host {
                overflow: visible !important;
                pointer-events: none !important;
              }
              #container {
                overflow: visible !important;
                pointer-events: none !important;
              }
              #spline, canvas {
                overflow: visible !important;
                pointer-events: none !important;
              }
              #logo,
              #logo *,
              a[href*="spline.design"],
              a[href*="spline.design"] *,
              .spline-watermark,
              [aria-label*="Spline"] {
                display: none !important;
                opacity: 0 !important;
                visibility: hidden !important;
                pointer-events: none !important;
                width: 0 !important;
                height: 0 !important;
                position: absolute !important;
                top: -99999px !important;
                left: -99999px !important;
              }
            `
            shadow.appendChild(style)
          }

          const canvas = shadow.querySelector("canvas")
          if (canvas) {
            canvas.style.pointerEvents = "none"
          }
        }
      } catch (err) {}
    }

    // 2. Lock robot strictly in position: disable OrbitControls & detach Spline scroll/wheel listeners
    const lockRobotPosition = () => {
      try {
        const app = viewer._spline
        if (!app) return

        // Completely disable OrbitControls so camera cannot move, zoom, or rotate
        const controls =
          app._controls ||
          app.controls ||
          app._eventManager?.controlsManager?.orbitControls
        if (controls) {
          controls.enabled = false
          controls.enableZoom = false
          controls.enableRotate = false
          controls.enablePan = false
          try {
            controls.disconnect?.()
          } catch (e) {}
        }

        if (app._eventManager?.publish?.orbitControls) {
          app._eventManager.publish.orbitControls.enabled = false
          app._eventManager.publish.orbitControls.enableZoom = false
          app._eventManager.publish.orbitControls.enableRotate = false
          app._eventManager.publish.orbitControls.enablePan = false
        }

        // Disconnect and remove any Scroll/Wheel listeners attached to window by Spline
        const scrollHandler = app._eventManager?.handlers?.Scroll
        if (scrollHandler) {
          try {
            scrollHandler.disconnect?.()
          } catch (e) {}
          if (scrollHandler.onWheel) {
            window.removeEventListener("wheel", scrollHandler.onWheel)
            scrollHandler.onWheel = () => {}
          }
          if (scrollHandler.onScroll) {
            window.removeEventListener("scroll", scrollHandler.onScroll)
            scrollHandler.onScroll = () => {}
          }
        }

        // Remove any Scroll events from scene entities so scroll never alters robot position
        if (app._scene) {
          app._scene.traverse?.((obj) => {
            if (obj.events && Array.isArray(obj.events)) {
              obj.events = obj.events.filter(
                (ev) => ev.data?.type !== "Scroll" && ev.type !== "Scroll"
              )
            }
          })
        }
      } catch (e) {}
    }

    configureShadow()
    lockRobotPosition()

    const handleLoaded = () => {
      configureShadow()
      lockRobotPosition()
    }

    viewer.addEventListener("load-complete", handleLoaded)
    viewer.addEventListener("load", handleLoaded)

    // 3. The ONLY interactivity: head and eye gaze tracks cursor across the window
    const handleGlobalPointer = (e) => {
      const canvas = viewer.shadowRoot?.querySelector("canvas")
      if (canvas) {
        const synth = new PointerEvent("pointermove", {
          clientX: e.clientX,
          clientY: e.clientY,
          pageX: e.pageX,
          pageY: e.pageY,
          screenX: e.screenX,
          screenY: e.screenY,
          buttons: 0,
          bubbles: true,
          cancelable: true,
          pointerId: 1,
          pointerType: "mouse",
        })
        canvas.dispatchEvent(synth)
      }

      const app = viewer._spline
      const em = app?._eventManager
      if (em) {
        if (em.onMouseMove) {
          em.onMouseMove(e)
        }
        const lookAt = em.handlers?.LookAt
        if (lookAt) {
          if (lookAt.events) {
            for (const ev of lookAt.events) {
              ev.isReset = false
              if (ev.data) ev.data.resetOnPointerLeave = false
            }
          }
          if (lookAt.onMouseMove) {
            lookAt.onMouseMove(e)
          }
        }
        if (app._requestRenderAutoMode) {
          app._requestRenderAutoMode()
        }
      }
    }

    window.addEventListener("pointermove", handleGlobalPointer, { passive: true })

    const interval = setInterval(() => {
      configureShadow()
      lockRobotPosition()
    }, 200)
    const timeout = setTimeout(() => clearInterval(interval), 5000)

    return () => {
      viewer.removeEventListener("load-complete", handleLoaded)
      viewer.removeEventListener("load", handleLoaded)
      window.removeEventListener("pointermove", handleGlobalPointer)
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div
      className={`relative flex items-center justify-center shrink-0 overflow-visible select-none pointer-events-none ${className}`}
    >
      <spline-viewer
        ref={viewerRef}
        url="https://prod.spline.design/uf2wIxgO0yhwMjDR/scene.splinecode"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450%] h-[350%] block overflow-visible pointer-events-none scale-[0.88] origin-center"
        style={{
          width: "450%",
          height: "350%",
          background: "transparent",
          pointerEvents: "none",
        }}
      />
    </div>
  )
}
