"use client";
import { useEffect, useRef, useState } from "react";

const techstack = [
    { src: "/assets/logos/html.svg", label: "HTML", objectFit: "object-contain" },
    { src: "/assets/logos/css.svg", label: "CSS", objectFit: "object-contain" },
    { src: "/assets/logos/javascript.svg", label: "JavaScript", objectFit: "object-contain" },
    { src: "/assets/logos/react.svg", label: "React", objectFit: "object-contain" },
    { src: "/assets/logos/symfony.svg", label: "Symfony", objectFit: "object-contain" },
    { src: "/assets/logos/nextjs.png", label: "Next.js", objectFit: "object-contain" },
    { src: "/assets/logos/php.svg", label: "PHP", objectFit: "object-contain" },
    { src: "/assets/logos/tailwind.svg", label: "Tailwind CSS", objectFit: "object-contain" },
    { src: "/assets/logos/bootstrap.svg", label: "Bootstrap", objectFit: "object-contain" },
    { src: "/assets/logos/photoshop.svg", label: "Photoshop", objectFit: "object-contain" },
    { src: "/assets/logos/illustrator.svg", label: "Illustrator", objectFit: "object-contain" },
    { src: "/assets/logos/indesign.svg", label: "InDesign", objectFit: "object-contain" },
    { src: "/assets/logos/blender.svg", label: "Blender", objectFit: "object-contain" },
    { src: "/assets/logos/zbrush.svg", label: "ZBrush", objectFit: "object-contain" },
    { src: "/assets/logos/maya.svg", label: "Autodesk Maya", objectFit: "object-contain" },
    { src: "/assets/logos/marvelousdesigner.png", label: "Marvelous Designer", objectFit: "object-contain" },
    { src: "/assets/logos/substance.svg", label: "Substance Painter", objectFit: "object-contain" },
    { src: "/assets/logos/unreal.svg", label: "Unreal Engine", objectFit: "object-contain" },
];

export default function AboutMe() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    const positionRef = useRef(0);
    const speedRef = useRef(30); // px pro Sekunde, normal
    const isFastRef = useRef(false);
    const trackWidthRef = useRef(0);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (trackRef.current) {
            // Breite einer Kopie (Liste ist doppelt, also halbe Gesamtbreite)
            trackWidthRef.current = trackRef.current.scrollWidth / 2;
        }

        let lastTime = performance.now();
        let frameId: number;

        const tick = (time: number) => {
            const delta = (time - lastTime) / 1000;
            lastTime = time;

            const currentSpeed = isFastRef.current ? speedRef.current * 12 : speedRef.current;
            positionRef.current -= currentSpeed * delta;

            if (Math.abs(positionRef.current) >= trackWidthRef.current) {
                positionRef.current = 0;
            }

            if (trackRef.current) {
                trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
            }

            frameId = requestAnimationFrame(tick);
        };

        frameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frameId);
    }, []);

    const startFast = () => { isFastRef.current = true; };
    const stopFast = () => { isFastRef.current = false; };

    return (
        <section
            ref={sectionRef}
            className={`container mx-auto my-8 lg:my-16 px-4 lg:px-0 transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
        >
            {/* Über Mich Sektion */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
                <img
                    src="/assets/me.jpg"
                    alt="Bild von Frieder Haase"
                    className="w-40 h-40 lg:w-56 lg:h-56 rounded-full object-cover object-top shrink-0 grayscale"
                />
                <p className="text-white/80 leading-relaxed w-full">
                    Als ursprünglich gelernter Game Designer, 3D Artist und auch Grafikdesigner bringe ich sowohl Verständnis und Passion für die technische als auch die kreative Seite der Softwareentwicklung mit.
                    <br className="mb-4"></br>
                    Nichts ist für mich frustrierender als eine schlechte UI/UX, das gilt sowohl für Spiele, als auch für jegliche andere Software. Daher ist es mir besonders wichtig, bei meinen Projekten auf eine intuitive und ansprechende Gestaltung zu achten.
                    <br className="mb-4"></br>
                    Durch meine diverse Erfahrung kann ich mich in verschiedenen Bereichen der Softwareentwicklung einbringen, weshalb ich letztendlich auch das Ziel habe mich als Full-Stack Entwickler zu etablieren.
                </p>
            </div>

            <h2 className="text-2xl font-bold text-primary my-12">Techstack</h2>

            {/* Techstack */}
            <div className="flex items-stretch gap-4">
                <div className="relative overflow-hidden flex-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />

                    <div ref={trackRef} className="flex gap-12 w-max will-change-transform">
                        {[...techstack, ...techstack].map((logo, i) => (
                            <div key={logo.label + i} className="flex flex-col items-center gap-1 shrink-0 w-20">
                                <img src={logo.src} alt={`${logo.label} Logo`} className={`w-16 h-16 ${logo.objectFit}`} />
                                <span className="untertitel text-center">{logo.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onMouseDown={startFast}
                    onMouseUp={stopFast}
                    onMouseLeave={stopFast}
                    onTouchStart={startFast}
                    onTouchEnd={stopFast}
                    className="flex flex-col items-center gap-1 shrink-0 text-primary hover:opacity-60 transition-opacity select-none"
                    aria-label="Halten zum Beschleunigen"
                    title="Schneller scrollen"
                >
                    <span className="w-16 h-16 flex items-center justify-center text-3xl">»</span>
                </button>
            </div>
        </section>
    )
}