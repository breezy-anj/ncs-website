"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Camera } from "lucide-react";
import { MacOSPhotoBooth } from "./macos-photo-booth";
import type { GalleryPhoto } from "../../data/galleryPhotos";

export type { GalleryPhoto };

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
  const [mounted, setMounted] = useState(false);

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

  // Manage body scroll when Photo Booth is active
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
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("photo-booth-open");
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPhotoBoothOpen]);

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
                      src={(item as GalleryPhoto).thumb || (item as GalleryPhoto).image}
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

      {/* Authentic macOS Photo Booth Modal */}
      {mounted &&
        createPortal(
          <MacOSPhotoBooth
            isOpen={isPhotoBoothOpen}
            onClose={() => setIsPhotoBoothOpen(false)}
            photos={photos}
            folderName={folderName}
            initialIndex={selectedIndex}
          />,
          document.body
        )}
    </div>
  );
}

export { InteractiveFolderGallery as Component };
