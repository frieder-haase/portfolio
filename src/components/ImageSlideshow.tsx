"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageSlideshowProps {
    images: string[];
    alt: string;
    interval?: number;
    sizes?: string;
}

export default function ImageSlideshow({
    images,
    alt,
    interval = 4000,
    sizes = "(min-width: 1024px) 50vw, 100vw",
}: ImageSlideshowProps) {
    const [index, setIndex] = useState<number>(0);
    const [paused, setPaused] = useState(false);

    // Automatischer Bildwechsel
    useEffect(() => {
        if (images.length <= 1 || paused) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval, paused]);

    return (
        <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            {/* Bilder */}
            <div className="relative aspect-video overflow-hidden">
                {images.map((src: string, i: number) => (
                    <Image
                        key={src}
                        src={src}
                        alt={i === index ? alt : ""}
                        aria-hidden={i !== index}
                        fill
                        sizes={sizes}
                        priority={i === 0}
                        className={`bild object-cover transition-opacity duration-700 ${
                            i === index ? "opacity-100" : "opacity-0"
                        }`}
                    />
                ))}
            </div>
            {/* Leiste mit Bildpunkten */}
            {images.length > 1 && (
                <div className="flex justify-center gap-2 border-t border-white/10 bg-white/5 px-3 py-2.5">
                    {images.map((_: string, i: number) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setIndex(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                i === index ? "bg-primary" : "bg-white/50 hover:bg-white/80"
                            }`}
                            aria-label={`Bild ${i + 1} anzeigen`}
                            aria-current={i === index}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
