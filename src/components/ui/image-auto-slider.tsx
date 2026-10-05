export interface ImageAutoSliderProps {
  images: { src: string; width: number; height: number }[]
}

export const ImageAutoSlider = ({ images }: ImageAutoSliderProps) => {
  const duplicatedImages = [...images, ...images]

  return (
    <div className="relative flex w-full items-center overflow-hidden bg-transparent">
      <div className="image-auto-slider-mask w-full py-8 md:py-10">
        <div className="image-auto-slider-track flex w-max items-center gap-5 sm:gap-6 md:gap-8">
          {duplicatedImages.map((image, index) => (
            <img
              key={`${image.src}-${index}`}
              src={image.src}
              alt={index < images.length ? `NCS Highlight ${index + 1}` : ""}
              aria-hidden={index >= images.length}
              width={image.width}
              height={image.height}
              className="image-auto-slider-item h-52 w-auto max-w-none shrink-0 rounded-2xl object-cover shadow-2xl sm:h-64 md:h-80 lg:h-96 xl:h-[420px]"
              loading="eager"
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes image-auto-slider-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .image-auto-slider-track {
          animation: image-auto-slider-scroll 40s linear infinite;
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