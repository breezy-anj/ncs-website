export const ProjectBackground = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#09090b] pointer-events-none z-0">
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg) translate3d(0,0,0);
          }
          to {
            transform: rotate(360deg) translate3d(0,0,0);
          }
        }

        @keyframes spin-slow-reverse {
          from {
            transform: rotate(0deg) translate3d(0,0,0);
          }
          to {
            transform: rotate(-360deg) translate3d(0,0,0);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 60s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>

      {/* Moving App Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          perspective: "1200px",
          transform: "perspective(1200px) rotateX(15deg) translateZ(0)",
          transformOrigin: "center bottom",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Back Layer */}
        <div className="absolute inset-0 animate-spin-slow">
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              width: "1600px",
              height: "1600px",
              transform:
                "translate(-50%, -50%) rotate(279.05deg) translateZ(0)",
              willChange: "transform",
            }}
          >
            <img
              src="https://cdn.21st.dev/assets/mirror/c6/c66b4f0c389b961a3676312892ca1387d7f8bd1973f44a33c7d47840d297633f.png"
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </div>

        {/* Middle Layer */}
        <div className="absolute inset-0 animate-spin-slow-reverse">
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              width: "1000px",
              height: "1000px",
              transform:
                "translate(-50%, -50%) rotate(304.42deg) translateZ(0)",
              willChange: "transform",
            }}
          >
            <img
              src="https://cdn.21st.dev/assets/mirror/75/75f75d84f07a61893dc2a16aad0c781c32b9e758c8f0adda2a8b252c431fdd82.png"
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-60"
            />
          </div>
        </div>

        {/* Front Layer */}
        <div className="absolute inset-0 animate-spin-slow">
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              width: "800px",
              height: "800px",
              transform: "translate(-50%, -50%) rotate(48.33deg) translateZ(0)",
              willChange: "transform",
            }}
          >
            <img
              src="https://cdn.21st.dev/assets/mirror/e0/e08cdf40df3bedc96255e0e30240d7583b0a309da36bcd8a760d3c35cc67a286.png"
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectBackground
