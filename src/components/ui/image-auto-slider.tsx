const images = [
  { src: "/assets/highlights/web/IMG_2969.jpg", alt: "InOut Grand Finale" },
  { src: "/assets/highlights/web/DSC04982.JPG", alt: "Hackathon Opening" },
  { src: "/assets/highlights/web/DSC05186.JPG", alt: "CodeCraft Workshop" },
  { src: "/assets/highlights/web/DSC05537.JPG", alt: "Community Meetup" },
  { src: "/assets/highlights/web/IMG_1634.JPG", alt: "Ideation and Brainstorming" },
  { src: "/assets/highlights/web/IMG_1647.JPG", alt: "Keynote and Tech Talk" },
  { src: "/assets/highlights/web/IMG_1795.JPG", alt: "Annual Fest Celebrations" },
  { src: "/assets/highlights/web/IMG_2554.jpeg", alt: "Winners Felicitation" },
  { src: "/assets/highlights/web/IMG_3002.jpg", alt: "Stage Spotlight" },
  { src: "/assets/highlights/web/IMG_4262.jpg", alt: "Core Team Memories" },
]

const duplicatedImages = [...images, ...images]

export const Component = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/90 to-black" />

      <div className="relative z-10 flex w-full items-center justify-center py-8">
        <div className="image-auto-slider-mask w-full max-w-6xl">
          <div className="image-auto-slider-track flex w-max gap-6">
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                aria-hidden={index >= images.length}
                className="image-auto-slider-item h-48 w-48 shrink-0 overflow-hidden rounded-xl shadow-2xl md:h-64 md:w-64 lg:h-80 lg:w-80"
              >
                <img
                  src={image.src}
                  alt={index < images.length ? image.alt : ""}
                  className="h-full w-full object-cover"
                  loading={index < images.length ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-linear-to-t from-black to-transparent" />

      <style>{`
        @keyframes image-auto-slider-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .image-auto-slider-track {
          animation: image-auto-slider-scroll 20s linear infinite;
        }

        .image-auto-slider-mask {
          mask: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
        }

        .image-auto-slider-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-auto-slider-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        @media (prefers-reduced-motion: reduce) {
          .image-auto-slider-track { animation: none; }
        }
      `}</style>
    </div>
  )
}