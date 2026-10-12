"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Camera } from "lucide-react";

export interface GalleryPhoto {
  id: string | number;
  image: string;
  title?: string;
  caption?: string;
}

const defaultPhotos: GalleryPhoto[] = [];

export interface InteractiveFolderGalleryProps {
  photos?: GalleryPhoto[];
  folderName?: string;
  className?: string;
}

export function InteractiveFolderGallery({
  photos = defaultPhotos,
  folderName = "Event Gallery",
  className,
}: InteractiveFolderGalleryProps) {
  const [isPhotoBoothOpen, setIsPhotoBoothOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [hoverFolder, setHoverFolder] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [flashTrigger, setFlashTrigger] = useState(false);
  const [mounted, setMounted] = useState(false);

  const filmstripRef = useRef<HTMLDivElement>(null);
  const activeThumbnailRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openFolder = useCallback(() => {
    setSelectedIndex(0);
    setHasBeenOpened(true);
    setIsPhotoBoothOpen(true);
  }, []);

  // Take top 4 preview photos for the 3D folded stack preview
  const previewPhotos = photos.slice(0, 4);

  // Trigger camera shutter flash effect
  const changePhoto = useCallback((newIndex: number) => {
    if (photos.length === 0) return;
    setSelectedIndex(newIndex);
    setFlashTrigger(true);
    setTimeout(() => setFlashTrigger(false), 140);
  }, [photos.length]);

  const handleNext = useCallback(() => {
    if (photos.length === 0) return;
    changePhoto((selectedIndex + 1) % photos.length);
  }, [selectedIndex, photos.length, changePhoto]);

  const handlePrev = useCallback(() => {
    if (photos.length === 0) return;
    changePhoto((selectedIndex - 1 + photos.length) % photos.length);
  }, [selectedIndex, photos.length, changePhoto]);

  // Keep active thumbnail centered in filmstrip reel
  useEffect(() => {
    if (activeThumbnailRef.current && filmstripRef.current) {
      activeThumbnailRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selectedIndex, isPhotoBoothOpen]);

  // Manage body scroll & navbar hide class when Photo Booth is active
  useEffect(() => {
    if (!isPhotoBoothOpen) {
      document.body.classList.remove("photo-booth-open");
      return;
    }

    document.body.classList.add("photo-booth-open");
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPhotoBoothOpen(false);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("photo-booth-open");
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPhotoBoothOpen, handleNext, handlePrev]);

  const activePhoto = photos.length > 0 ? (photos[selectedIndex] || photos[0]) : null;

  // Placeholder list for empty folders so 3D effect remains tactile
  const stackItems = previewPhotos.length > 0 
    ? previewPhotos 
    : [{ id: "blank-1" }, { id: "blank-2" }];

  return (
    <div className={`w-full relative flex flex-col items-center ${className || ""}`}>
      {/* 3D Folder Container */}
      <div 
        className="relative w-full max-w-[270px] h-[230px] sm:h-[245px] flex flex-col items-center justify-center cursor-pointer select-none"
        onClick={openFolder}
      >
        <div className="relative w-full h-[230px] sm:h-[245px] flex justify-center pointer-events-none z-0">
          
          {/* Back of the Folder */}
          <motion.div
            className="absolute bottom-3 w-48 sm:w-52 h-32 sm:h-36 drop-shadow-xl"
            animate={{ scale: hoverFolder ? 1.02 : 1 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute top-0 left-0 w-20 sm:w-24 h-7 bg-gradient-to-t from-[#1e1e1e] to-[#2a2a2a] rounded-t-lg border-t border-l border-r border-white/10" />
            <div className="absolute top-6 left-0 right-0 bottom-0 bg-gradient-to-b from-[#1e1e1e] to-[#0a0a0a] rounded-b-xl rounded-tr-xl border border-white/10 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]" />
            <div className="absolute top-7 left-1.5 right-1.5 bottom-1.5 bg-black rounded-lg shadow-inner pointer-events-none" />
          </motion.div>

          {/* Fanned Preview Thumbnails */}
          <div className="absolute bottom-6 z-10 flex justify-center">
            {stackItems.map((item, i) => {
              const offset = i - (stackItems.length - 1) / 2;
              const stackY = hoverFolder ? offset * -8 - 28 : offset * -3;
              const stackX = hoverFolder ? offset * 22 : offset * 3;
              const stackRotate = hoverFolder ? offset * 7 : offset * 2.5;
              const stackScale = 1 - Math.abs(offset) * 0.04;

              const isPhoto = "image" in item && Boolean((item as GalleryPhoto).image);

              return (
                <motion.div
                  key={item.id}
                  className="absolute bottom-0 w-28 sm:w-32 h-38 sm:h-42 rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.7)] overflow-hidden border border-white/20 origin-bottom pointer-events-none"
                  animate={{
                    y: stackY,
                    x: stackX,
                    rotate: stackRotate,
                    scale: stackScale,
                    zIndex: i + 10,
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  {isPhoto ? (
                    <img
                      src={(item as GalleryPhoto).image}
                      alt="Preview"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-b from-[#252528] via-[#1a1a1d] to-[#0d0d0f] flex flex-col items-center justify-center border border-white/10 p-2">
                      <div className="size-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-1">
                        <Camera size={14} className="text-white/40" />
                      </div>
                      <span className="text-[10px] font-mono text-white/30">Photo</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

          {/* Front Flap of the Folder */}
          <motion.div
            className="absolute bottom-0 w-52 sm:w-56 h-26 sm:h-28 drop-shadow-[0_-15px_30px_rgba(0,0,0,0.9)] cursor-pointer z-20 pointer-events-auto group"
            style={{ transformOrigin: "bottom" }}
            animate={{
              rotateX: hoverFolder ? -25 : 0,
              y: hoverFolder ? 8 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onMouseEnter={() => setHoverFolder(true)}
            onMouseLeave={() => setHoverFolder(false)}
            onClick={(e) => {
              e.stopPropagation();
              openFolder();
            }}
          >
            <div className="w-full h-full bg-gradient-to-b from-[#2a2a2a] via-[#1f1f21] to-[#111113] rounded-xl border border-white/25 shadow-[inset_0_2px_8px_rgba(255,255,255,0.15)] relative overflow-hidden flex items-end justify-center pb-5 sm:pb-6 group-hover:border-white/40 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

              <div className="px-3 py-1.5 bg-black/85 rounded-lg border border-white/15 shadow-inner flex items-center gap-1.5 backdrop-blur-md group-hover:scale-105 transition-transform max-w-[90%]">
                <Camera size={12} className="text-white/80 shrink-0" />
                <span className="text-white font-medium text-[11px] sm:text-xs tracking-wide truncate">
                  {folderName}
                </span>
                <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-white/10 text-white/70 font-mono shrink-0">
                  {photos.length}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-Screen macOS Photo Booth Modal */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isPhotoBoothOpen && (
              <motion.div
                className="fixed inset-0 z-[99999] w-screen h-screen bg-[#0d0d0f] flex flex-col overflow-hidden select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Full Screen macOS Title Bar */}
                <div className="h-13 sm:h-14 bg-[#1b1b1e] border-b border-white/10 px-4 sm:px-6 md:px-8 flex items-center justify-between shrink-0 z-30 shadow-md">
                  {/* Traffic Light Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsPhotoBoothOpen(false)}
                      aria-label="Close Photo Booth"
                      className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:bg-[#ff3b30] border border-[#e0443e] cursor-pointer flex items-center justify-center group transition-colors"
                    >
                      <X size={8} className="text-[#4d0000] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsPhotoBoothOpen(false)}
                      aria-label="Minimize"
                      className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] hover:bg-[#ffaa00] border border-[#dea123] cursor-pointer"
                    />
                    <button
                      type="button"
                      onClick={() => setIsPhotoBoothOpen(false)}
                      aria-label="Full Screen"
                      className="w-3.5 h-3.5 rounded-full bg-[#27c93f] hover:bg-[#20b835] border border-[#1aab29] cursor-pointer"
                    />
                  </div>

                  {/* Window Title */}
                  <div className="flex items-center gap-2 text-white">
                    <Camera size={16} className="text-white/70" />
                    <span className="font-['Satoshi',Arial,sans-serif] font-bold text-sm sm:text-base tracking-tight truncate max-w-[220px] sm:max-w-md">
                      {folderName}
                    </span>
                    <span className="text-white/30 text-xs hidden sm:inline">·</span>
                    <span className="text-white/60 text-xs sm:text-sm font-medium hidden sm:inline">
                      macOS Photo Booth
                    </span>
                  </div>

                  {/* Counter & Close Action */}
                  <div className="flex items-center gap-3">
                    {photos.length > 0 && (
                      <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white font-mono text-xs">
                        {String(selectedIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => setIsPhotoBoothOpen(false)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer transition-colors"
                    >
                      <X size={14} />
                      <span className="hidden sm:inline">Done</span>
                    </button>
                  </div>
                </div>

                {/* Central Stage Viewfinder (Full Height Screen) */}
                <div className="flex-1 w-full bg-[#08080a] relative flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-hidden min-h-0">
                  {/* Shutter Flash Animation */}
                  <AnimatePresence>
                    {flashTrigger && (
                      <motion.div
                        className="absolute inset-0 bg-white z-40 pointer-events-none"
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.12 }}
                      />
                    )}
                  </AnimatePresence>

                  {activePhoto ? (
                    <>
                      {/* Photo Title Overlay */}
                      {activePhoto.title && (
                        <div className="absolute top-4 left-6 z-20 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 text-xs font-medium tracking-wide pointer-events-none">
                          {activePhoto.title}
                        </div>
                      )}

                      {/* Active High-Res Photo */}
                      <div className="relative size-full flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={activePhoto.id}
                            src={activePhoto.image}
                            alt={activePhoto.title || `Photo ${selectedIndex + 1}`}
                            className="max-h-full max-w-full object-contain rounded-xl sm:rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] border border-white/10"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.18 }}
                            decoding="async"
                          />
                        </AnimatePresence>
                      </div>

                      {/* Left Navigation Chevron */}
                      {photos.length > 1 && (
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 size-11 sm:size-14 rounded-full bg-black/65 hover:bg-black/90 border border-white/20 hover:border-white/50 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-2xl cursor-pointer z-20"
                          aria-label="Previous photo"
                        >
                          <ChevronLeft size={26} />
                        </button>
                      )}

                      {/* Right Navigation Chevron */}
                      {photos.length > 1 && (
                        <button
                          type="button"
                          onClick={handleNext}
                          className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 size-11 sm:size-14 rounded-full bg-black/65 hover:bg-black/90 border border-white/20 hover:border-white/50 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-2xl cursor-pointer z-20"
                          aria-label="Next photo"
                        >
                          <ChevronRight size={26} />
                        </button>
                      )}
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-3 p-8 text-center">
                      <div className="size-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Camera size={28} className="text-white/40" />
                      </div>
                      <h4 className="text-lg font-bold text-white font-['Satoshi',Arial,sans-serif]">
                        No Photos Yet
                      </h4>
                      <p className="text-sm text-white/50 max-w-sm">
                        Photos for this event folder will be added soon. Check back shortly!
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Filmstrip Reel Dock (White scroll removed, smooth scrolling preserved) */}
                {photos.length > 0 && (
                  <div className="bg-[#141416] border-t border-white/10 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 shrink-0 flex flex-col gap-1">
                    <div className="flex items-center justify-between text-[11px] text-white/50 font-medium">
                      <span>FILMSTRIP ({photos.length} MOMENTS)</span>
                      <span className="hidden sm:inline">USE ARROW KEYS ← → TO NAVIGATE · ESC TO EXIT</span>
                    </div>

                    <div
                      ref={filmstripRef}
                      className="flex items-center gap-2.5 overflow-x-auto py-1 scrollbar-hide scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                      {photos.map((photo, idx) => {
                        const isActive = idx === selectedIndex;
                        return (
                          <button
                            key={photo.id}
                            type="button"
                            ref={isActive ? activeThumbnailRef : null}
                            onClick={() => changePhoto(idx)}
                            className={`relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-200 ${
                              isActive
                                ? "border-blue-500 ring-2 ring-blue-500/80 shadow-[0_0_15px_rgba(59,130,246,0.65)] scale-105 z-10"
                                : "border-white/15 opacity-60 hover:opacity-100 hover:border-white/40 hover:scale-105"
                            }`}
                            aria-label={`Select photo ${idx + 1}`}
                          >
                            <img
                              src={photo.image}
                              alt={photo.title || `Thumbnail ${idx + 1}`}
                              loading="lazy"
                              decoding="async"
                              className="size-full object-cover pointer-events-none"
                            />
                            <span className="absolute bottom-1 right-1 px-1 py-0.2 rounded bg-black/80 text-[9px] font-mono text-white/90 pointer-events-none">
                              {idx + 1}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}

export { InteractiveFolderGallery as Component };
