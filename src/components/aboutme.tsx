"use client";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

interface TechLogo {
    src: string;
    label: string;
    objectFit: string;
}

const devTools: TechLogo[] = [
    { src: "/assets/logos/react.svg", label: "React", objectFit: "object-contain" },
    { src: "/assets/logos/symfony.svg", label: "Symfony", objectFit: "object-contain" },
    { src: "/assets/logos/nextjs.png", label: "Next.js", objectFit: "object-contain" },
    { src: "/assets/logos/php.svg", label: "PHP", objectFit: "object-contain" },
    { src: "/assets/logos/tailwind.svg", label: "Tailwind CSS", objectFit: "object-contain" },
    { src: "/assets/logos/bootstrap.svg", label: "Bootstrap", objectFit: "object-contain" },
    { src: "/assets/logos/mysql.svg", label: "MySQL", objectFit: "object-contain" },
    { src: "/assets/logos/claude-code.svg", label: "Claude Code", objectFit: "object-contain" },
    { src: "/assets/logos/html.svg", label: "HTML", objectFit: "object-contain" },
    { src: "/assets/logos/css.svg", label: "CSS", objectFit: "object-contain" },
    { src: "/assets/logos/javascript.svg", label: "JavaScript", objectFit: "object-contain" },
];

const designTools: TechLogo[] = [
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

function TechRow({ tools, categoryLabel }: { tools: TechLogo[]; categoryLabel: string }) {
    return (
        <div className="flex flex-col items-center gap-3">
            <span className="text-xs text-white/40 uppercase tracking-wide">{categoryLabel}</span>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
                {tools.map((logo) => (
                    <div key={logo.label} className="flex flex-col items-center gap-1 w-20 lg:w-24">
                        <img
                            src={logo.src}
                            alt={`${logo.label} Logo`}
                            className={`w-16 h-16 lg:w-20 lg:h-20 p-1 ${logo.objectFit} 
                            `}
                        />
                        <span className="untertitel text-center">{logo.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function AboutMe() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

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

    const navigateToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <section
            ref={sectionRef}
            id="aboutme"
            className={`container min-h-[calc(100vh-4rem)] section-snap flex flex-col justify-center mx-auto px-4 lg:px-0 transition-opacity duration-1000 ease-out ${
                visible ? "opacity-100" : "opacity-0"
            }`}
        >
            {/* Über Mich Sektion */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <p className="!text-2xl lg:!text-4xl font-bold text-primary whitespace-pre-line leading-normal h-28 text-left">
                    <TypeAnimation
                        sequence={[
                            "Hallo, ich bin Fred.",
                            300,
                            "Hallo, ich bin Fred. Anwendungs­entwickler aus Leipzig.",
                        ]}
                        speed={75}
                        cursor={false}
                        repeat={0}
                    />
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex flex-col items-center gap-3 shrink-0">
                    <img
                        src="/assets/me.jpg"
                        alt="Bild von Frieder Haase"
                        className="w-40 h-40 lg:w-56 lg:h-56 rounded-full object-cover object-top grayscale"
                    />
                </div>

                <p className="text-white/80 leading-relaxed w-full">
                    Als ursprünglich gelernter Game Designer, 3D Artist und auch Grafikdesigner bringe ich sowohl Verständnis und Passion für die technische als auch die kreative Seite der Softwareentwicklung mit.
                    <br className="mb-4"></br>
                    Nichts ist für mich frustrierender als eine schlechte UI/UX, das gilt sowohl für Spiele, als auch für jegliche andere Software. Daher ist es mir besonders wichtig, bei meinen Projekten auf eine intuitive und ansprechende Gestaltung zu achten.
                    <br className="mb-4"></br>
                    Durch meine diverse Erfahrung kann ich mich in verschiedenen Bereichen der Softwareentwicklung einbringen, weshalb ich letztendlich auch das Ziel habe mich als Full-Stack Entwickler zu etablieren.
                </p>
            </div>

            {/* Techstack nach Kategorie */}
            <div className="flex flex-col items-center gap-y-10 mt-12">
                <TechRow tools={devTools} categoryLabel="Entwicklung" />
                <TechRow tools={designTools} categoryLabel="Design & 3D" />
            </div>

            <div className="flex justify-center mt-14">
                <button type="button" onClick={() => navigateToSection("projekte")} className="inline-flex items-center gap-2 rounded border border-primary px-6 py-3 text-primary transition hover:bg-primary hover:text-black">
                    Meine Projekte ansehen ↓
                </button>
            </div>

        </section>
    )
}