"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export interface Screenshot {
  src: string;
  area: "nutzer" | "admin";
  /** Titel in der Großansicht */
  title: string;
  /** Beschreibung in der Großansicht */
  description: string;
  /** Kurzlabel auf der Karte */
  label: string;
  /** Text unter dem Vorschaubild */
  caption: string;
  alt: string;
}

// Bereiche mit Zwischenüberschrift
const AREAS: { key: Screenshot["area"]; heading: string }[] = [
  { key: "nutzer", heading: "Nutzer-Frontend (Symfony)" },
  { key: "admin", heading: "Admin-Frontend (React)" },
];

const OPEN_EVENT = "screenshot-gallery:open";

// Button "Screenshots ansehen" (oben auf der Ticketsystem-Seite)
export function GalleryOpenButton({ count, className = "" }: { count: number; className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className={`inline-flex items-center justify-center gap-2 rounded border border-primary px-5 py-2.5 text-sm text-primary transition hover:bg-primary hover:text-black ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="10" r="1.5" />
        <path d="M21 16l-5-5-8 8" />
      </svg>
      Screenshots ansehen ({count})
    </button>
  );
}

// Raster mit Vorschaubildern
export default function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Öffnen über den Button "Screenshots ansehen"
  useEffect(() => {
    const open = () => setOpenIndex(0);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  return (
    <>
      {AREAS.map((area) => (
        <div key={area.key} className="mb-8 last:mb-0">
          {/* Zwischenüberschrift */}
          <h3 className="mb-4 !text-lg text-primary">{area.heading}</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {screenshots.map((shot, index) =>
              shot.area !== area.key ? null : (
                // Vorschaukarte
                <figure
                  key={shot.src}
                  className="rounded border border-primary/30 bg-black/40 p-4 transition-colors hover:border-primary/70"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    className="group relative mb-3 block aspect-video w-full cursor-zoom-in overflow-hidden rounded bg-black/60"
                    aria-label={`${shot.title} vergrößern`}
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105"
                    />
                    {/* Hover-Hinweis "Vergrößern" */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/45 group-hover:opacity-100 group-focus-visible:bg-black/45 group-focus-visible:opacity-100"
                    >
                      <span className="inline-flex items-center gap-2 rounded-full border border-primary/60 bg-black/70 px-4 py-2 text-sm text-primary">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="7" />
                          <path d="M21 21l-4.5-4.5M11 8v6M8 11h6" />
                        </svg>
                        Vergrößern
                      </span>
                    </span>
                  </button>
                  {/* Bildunterschrift */}
                  <figcaption className="text-sm text-white/70">
                    <strong className="text-white">{shot.label}:</strong> {shot.caption}
                  </figcaption>
                </figure>
              )
            )}
          </div>
        </div>
      ))}

      {/* Großansicht */}
      {openIndex !== null && (
        <Lightbox
          images={screenshots}
          currentIndex={openIndex}
          onClose={() => setOpenIndex(null)}
          onPrevious={() => setOpenIndex((i) => (i !== null && i > 0 ? i - 1 : i))}
          onNext={() => setOpenIndex((i) => (i !== null && i < screenshots.length - 1 ? i + 1 : i))}
        />
      )}
    </>
  );
}

interface LightboxProps {
  images: Screenshot[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

// Großansicht eines Screenshots
function Lightbox({ images, currentIndex, onClose, onPrevious, onNext }: LightboxProps) {
  const current = images[currentIndex];
  const closeRef = useRef<HTMLButtonElement>(null);

  // Fokus setzen, Seite im Hintergrund nicht scrollbar
  useEffect(() => {
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Tastatursteuerung
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrevious, onNext]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.title}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-4 flex w-full max-w-5xl flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Schließen */}
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute -top-10 right-0 text-2xl text-white/60 transition hover:text-white"
          aria-label="Galerie schließen"
        >
          ✕
        </button>

        {/* Bild */}
        <div className="relative mx-auto mb-6 aspect-video w-[min(100%,calc(60vh*16/9))] overflow-hidden rounded-lg border border-primary/30 bg-black">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-contain"
          />
        </div>

        {/* Titel und Beschreibung */}
        <div className="mb-4 text-center">
          <h3 className="mb-2 text-xl font-bold text-primary">{current.title}</h3>
          <p className="max-h-20 overflow-y-auto text-sm text-white/75">{current.description}</p>
        </div>

        {/* Navigation: Zurück, Zähler, Weiter */}
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onPrevious}
            className="flex items-center gap-2 rounded border border-primary/50 bg-black/40 px-4 py-2 text-primary transition hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={currentIndex === 0}
            aria-label="Vorheriges Bild"
          >
            <span className="text-xl">←</span>
            <span className="hidden sm:inline">Zurück</span>
          </button>

          <div className="text-center text-sm text-white/60">
            {currentIndex + 1} / {images.length}
          </div>

          <button
            type="button"
            onClick={onNext}
            className="flex items-center gap-2 rounded border border-primary/50 bg-black/40 px-4 py-2 text-primary transition hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={currentIndex === images.length - 1}
            aria-label="Nächstes Bild"
          >
            <span className="hidden sm:inline">Weiter</span>
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* Tastatur-Hinweis */}
        <p className="mt-4 text-center text-xs text-white/60">
          Tastatur: ← → zum Navigieren, ESC zum Schließen
        </p>
      </div>
    </div>,
    document.body
  );
}
