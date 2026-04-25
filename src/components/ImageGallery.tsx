"use client";

import { useEffect } from "react";

interface GalleryImage {
  src: string;
  title: string;
  description: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function ImageGallery({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: ImageGalleryProps) {
  const current = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrevious, onNext]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative max-h-[90vh] max-w-5xl w-full mx-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/60 hover:text-white transition text-2xl"
          aria-label="Galerie schließen"
        >
          ✕
        </button>

        {/* Image Container */}
        <div className="relative mb-6 overflow-hidden rounded-lg bg-black/40 border border-primary/30">
          <img
            src={current.src}
            alt={current.title}
            className="w-full max-h-[60vh] object-contain"
          />
        </div>

        {/* Image Info */}
        <div className="mb-4 text-center">
          <h3 className="mb-2 text-xl font-bold text-primary">{current.title}</h3>
          <p className="text-sm text-white/75 max-h-20 overflow-y-auto">
            {current.description}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          {/* Previous Button */}
          <button
            onClick={onPrevious}
            className="flex items-center gap-2 rounded border border-primary/50 bg-black/40 px-4 py-2 text-primary transition hover:bg-primary/10"
            disabled={currentIndex === 0}
            aria-label="Vorheriges Bild"
          >
            <span className="text-xl">←</span>
            <span className="hidden sm:inline">Zurück</span>
          </button>

          {/* Counter */}
          <div className="text-center text-sm text-white/60">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="flex items-center gap-2 rounded border border-primary/50 bg-black/40 px-4 py-2 text-primary transition hover:bg-primary/10"
            disabled={currentIndex === images.length - 1}
            aria-label="Nächstes Bild"
          >
            <span className="hidden sm:inline">Weiter</span>
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* Keyboard Hint */}
        <p className="mt-4 text-center text-xs text-white/40">
          Tastatur: ← → zum Navigieren, ESC zum Schließen
        </p>
      </div>
    </div>
  );
}
