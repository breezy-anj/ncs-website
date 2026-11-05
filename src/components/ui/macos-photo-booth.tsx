"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryPhoto } from "../../data/galleryPhotos";

export interface MacOSPhotoBoothProps {
  isOpen: boolean;
  onClose: () => void;
  photos: GalleryPhoto[];
  folderName?: string;
  initialIndex?: number;
}

export function MacOSPhotoBooth({
  isOpen,
  onClose,
  photos = [],
  folderName = "Event Gallery",
  initialIndex = 0,
}: MacOSPhotoBoothProps) {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const [isLoaded, setIsLoaded] = useState(false);

  const trayRef = useRef<HTMLDivElement>(null);
  const activeThumbnailRef = useRef<HTMLButtonElement>(null);

  // Sync index when initialIndex changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(initialIndex >= 0 && initialIndex < photos.length ? initialIndex : 0);
      setIsLoaded(false);
    }
  }, [isOpen, initialIndex, photos.length]);

  // Reset image loaded state when selected index changes
  useEffect(() => {
    setIsLoaded(false);
  }, [selectedIndex]);

  // Auto-scroll active thumbnail smoothly to center of tray
  useEffect(() => {
    if (isOpen && activeThumbnailRef.current && trayRef.current) {
      const tray = trayRef.current;
      const thumb = activeThumbnailRef.current;
      const trayRect = tray.getBoundingClientRect();
      const thumbRect = thumb.getBoundingClientRect();

      const scrollTarget =
        tray.scrollLeft +
        (thumbRect.left - trayRect.left) -
        trayRect.width / 2 +
        thumbRect.width / 2;

      tray.scrollTo({ left: scrollTarget, behavior: "smooth" });
    }
  }, [selectedIndex, isOpen]);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    if (photos.length === 0) return;
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  }, [photos.length]);

  const handleNext = useCallback(() => {
    if (photos.length === 0) return;
    setSelectedIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  }, [photos.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Home") {
        setSelectedIndex(0);
      } else if (e.key === "End") {
        setSelectedIndex(photos.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose, photos.length]);

  if (!isOpen) return null;

  const activePhoto = photos.length > 0 ? photos[selectedIndex] || photos[0] : null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[99999] w-screen h-screen bg-[#0a0a0c] flex flex-col overflow-hidden select-none"
    >
      {/* =========================================================================
          1. macOS Top Title Bar
         ========================================================================= */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-13 sm:h-14 bg-[#141417]/95 backdrop-blur-md border-b border-white/[0.08] px-4 sm:px-6 md:px-8 flex items-center justify-between shrink-0 z-30"
      >
        {/* Left: Traffic Lights */}
        <div className="flex items-center gap-2 group/traffic">
          <button
            type="button"
            onClick={onClose}
            title="Close (Esc)"
            aria-label="Close"
            className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:bg-[#ff3b30] border border-[#e0443e] cursor-pointer flex items-center justify-center transition-colors shadow-sm"
          >
            <X size={8} className="text-[#4d0000] opacity-0 group-hover/traffic:opacity-100 transition-opacity font-bold" />
          </button>
          <button
            type="button"
            onClick={onClose}
            title="Minimize"
            aria-label="Minimize"
            className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] hover:bg-[#ffaa00] border border-[#dea123] cursor-pointer flex items-center justify-center transition-colors shadow-sm"
          >
            <span className="text-[#5c3e00] text-[10px] leading-none opacity-0 group-hover/traffic:opacity-100 transition-opacity font-bold mb-0.5">
              −
            </span>
          </button>
          <button
            type="button"
            onClick={onClose}
            title="Exit Full Screen"
            aria-label="Exit Full Screen"
            className="w-3.5 h-3.5 rounded-full bg-[#27c93f] hover:bg-[#20b835] border border-[#1aab29] cursor-pointer flex items-center justify-center transition-colors shadow-sm"
          >
            <span className="text-[#00470b] text-[8px] leading-none opacity-0 group-hover/traffic:opacity-100 transition-opacity font-bold">
              ⤢
            </span>
          </button>
        </div>

        {/* Center: Title & Subtitle */}
        <div className="flex items-center gap-2 text-white/90">
          <Camera size={15} className="text-white/60 shrink-0" />
          <span className="font-['Satoshi',Arial,sans-serif] font-bold text-sm sm:text-base text-white tracking-tight">
            {folderName}
          </span>
          <span className="text-white/30 text-xs hidden xs:inline">·</span>
          <span className="text-white/50 text-xs sm:text-sm font-normal hidden xs:inline">
            macOS Photo Booth
          </span>
        </div>

        {/* Right: Counter Pill & Done Button */}
        <div className="flex items-center gap-3">
          {photos.length > 0 && (
            <div className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/80 font-mono text-xs tracking-wider">
              {String(selectedIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
            </div>
          )}

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer transition-colors"
          >
            <X size={13} />
            <span>Done</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          2. Main Photo Viewport
         ========================================================================= */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex-1 w-full relative flex items-center justify-center min-h-0 overflow-hidden px-4 sm:px-12 md:px-20 py-4 group/viewer"
      >
        {activePhoto ? (
          <>
            {/* Central Photo with Zero Border Radius */}
            <div className="relative max-w-full max-h-full flex items-center justify-center">
              {/* Instant low-res thumbnail placeholder */}
              {activePhoto.thumb && !isLoaded && (
                <img
                  src={activePhoto.thumb}
                  alt=""
                  aria-hidden="true"
                  className="max-w-full max-h-[calc(100vh-230px)] object-contain rounded-none blur-sm opacity-70"
                />
              )}

              {/* Full high-resolution WebP image */}
              <motion.img
                key={activePhoto.id}
                initial={{ opacity: 0.88 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                src={activePhoto.image}
                alt={activePhoto.title || `Photo ${selectedIndex + 1}`}
                onLoad={() => setIsLoaded(true)}
                className={`max-w-full max-h-[calc(100vh-230px)] object-contain rounded-none shadow-[0_25px_70px_rgba(0,0,0,0.85)] ${
                  !isLoaded && activePhoto.thumb ? "absolute inset-0" : ""
                }`}
              />
            </div>

            {/* Left Circular Navigation Arrow */}
            {photos.length > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Photo"
                className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/90 text-white/70 hover:text-white border border-white/15 backdrop-blur-md flex items-center justify-center cursor-pointer shadow-xl transition-all hover:scale-105 z-20"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* Right Circular Navigation Arrow */}
            {photos.length > 1 && (
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Photo"
                className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/90 text-white/70 hover:text-white border border-white/15 backdrop-blur-md flex items-center justify-center cursor-pointer shadow-xl transition-all hover:scale-105 z-20"
              >
                <ChevronRight size={22} />
              </button>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
              <Camera size={28} />
            </div>
            <h4 className="text-lg font-bold text-white">No Photos Yet</h4>
            <p className="text-sm text-white/50 max-w-sm">
              Photos for this event folder will be added soon.
            </p>
          </div>
        )}
      </div>

      {/* =========================================================================
          3. Bottom Filmstrip Reel & Info Row
         ========================================================================= */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full bg-[#0a0a0c]/95 border-t border-white/[0.07] px-4 sm:px-8 pb-4 pt-2.5 shrink-0 flex flex-col gap-2 z-30"
      >
        {/* Filmstrip Header Row */}
        <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-white/40 px-1">
          <span>FILMSTRIP ({photos.length} MOMENTS)</span>
          <span className="hidden sm:inline">USE ARROW KEYS ← → TO NAVIGATE · ESC TO EXIT</span>
        </div>

        {/* Horizontal Filmstrip Cards */}
        <div
          ref={trayRef}
          className="w-full flex items-center gap-2.5 sm:gap-3 overflow-x-auto py-1.5 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {photos.map((photo, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={photo.id}
                ref={isSelected ? activeThumbnailRef : null}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className={`group relative h-[60px] sm:h-[70px] aspect-[4/3] rounded-none overflow-hidden shrink-0 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "border-2 border-[#007aff] ring-2 ring-[#007aff]/30 scale-105 shadow-[0_0_16px_rgba(0,122,255,0.4)] opacity-100 z-10"
                    : "border border-white/10 opacity-60 hover:opacity-100 hover:scale-[1.02]"
                }`}
              >
                <img
                  src={photo.thumb || photo.image}
                  alt={photo.title || `Moment ${idx + 1}`}
                  className="w-full h-full object-cover rounded-none"
                  loading="lazy"
                />
                {/* Bottom-right Corner Index Badge */}
                <div className="absolute bottom-1 right-1 px-1.5 py-0.2 rounded-none bg-black/80 backdrop-blur-sm text-[9px] font-mono text-white/90 pointer-events-none">
                  {idx + 1}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MacOSPhotoBooth;
