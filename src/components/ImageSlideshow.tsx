"use client";
import { useState, useEffect } from "react";

interface ImageSlideshowProps {
    images: string[];
    alt: string;
    interval?: number;
}

export default function ImageSlideshow({ images, alt, interval = 4000 }: ImageSlideshowProps) {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="relative overflow-hidden rounded h-full">
            {images.map((src: string, i: number) => (
                <img
                    key={src}
                    src={src}
                    alt={alt}
                    className={`bild w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ${
                        i === index ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}
            {images.length > 1 && (
                <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
                    {images.map((_: string, i: number) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                                i === index ? "bg-primary" : "bg-white/40"
                            }`}
                            aria-label={`Bild ${i + 1} anzeigen`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}