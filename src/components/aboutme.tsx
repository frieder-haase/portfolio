"use client";
import { useEffect, useRef, useState } from "react";
import { useIntro } from "@/context/IntroContext";

const logoGroups = [
    [
        { src: "/assets/logos/html.svg", label: "HTML", objectFit: "object-contain" },
        { src: "/assets/logos/css.svg", label: "CSS", objectFit: "object-contain" },
        { src: "/assets/logos/javascript.svg", label: "JavaScript", objectFit: "object-contain" },
        { src: "/assets/logos/react.svg", label: "React", objectFit: "object-fit" },
        { src: "/assets/logos/symfony.svg", label: "Symfony", objectFit: "object-contain" },
        { src: "/assets/logos/nextjs.png", label: "Next.js", objectFit: "object-contain" },
    ],
    [
        { src: "/assets/logos/php.svg", label: "PHP", objectFit: "object-contain" },
        { src: "/assets/logos/tailwind.svg", label: "Tailwind CSS", objectFit: "object-contain" },
        { src: "/assets/logos/bootstrap.svg", label: "Bootstrap", objectFit: "object-contain" },
        { src: "/assets/logos/photoshop.svg", label: "Photoshop", objectFit: "object-contain" },
        { src: "/assets/logos/illustrator.svg", label: "Illustrator", objectFit: "object-contain" },
        { src: "/assets/logos/indesign.svg", label: "InDesign", objectFit: "object-contain" },
    ],
    [
        { src: "/assets/logos/blender.svg", label: "Blender", objectFit: "object-contain" },
        { src: "/assets/logos/zbrush.svg", label: "ZBrush", objectFit: "object-contain" },
        { src: "/assets/logos/maya.svg", label: "Autodesk Maya", objectFit: "object-contain" },
        { src: "/assets/logos/marvelousdesigner.png", label: "Marvelous Designer", objectFit: "object-contain" },
        { src: "/assets/logos/substance.svg", label: "Substance Painter", objectFit: "object-contain" },
        { src: "/assets/logos/unreal.svg", label: "Unreal Engine", objectFit: "object-contain" },
    ],
];

export default function AboutMe() {
    const { introDone } = useIntro();
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);
    const [activeGroup, setActiveGroup] = useState(0);
    const [fading, setFading] = useState(false);

    const switchTo = (index: number) => {
        setFading(true);
        setTimeout(() => {
            setActiveGroup(index);
            setFading(false);
        }, 300);
    };

    useEffect(() => {
        if (!introDone) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [introDone]);

    return (
        <section
            ref={ref}
            className={`container mx-auto my-8 lg:my-16 px-4 lg:px-0 transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
        >
            <h2 className="text-2xl font-bold text-primary mb-6 px-4 lg:px-0">Über mich</h2>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 px-4 lg:px-0">
                <div className="w-full lg:w-1/2">
                    <p className="text-white/80 max-w-2xl leading-relaxed">
                        Als ursprünglich gelernter Game Designer, 3D Artist und u.a. Grafikdesigner bringe ich sowohl Verständnis und Passion für die technische als auch die kreative Seite der Softwareentwicklung mit. 
                        <br className="mb-4"></br>
                        Nichts ist für mich frustrierender als eine schlechte UX, das gilt sowohl für Spiele, als auch für jegliche andere Software. Daher ist es mir besonders wichtig, bei meinen Projekten auf eine intuitive und ansprechende Gestaltung zu achten. 
                        <br className="mb-4"></br>
                        Durch meine diverse Erfahrung kann ich mich in verschiedenen Bereichen der Softwareentwicklung einbringen, weshalb ich letztendlich auch das Ziel habe mich als Full-Stack Entwickler zu etablieren. 
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <div className={`grid grid-cols-3 gap-4 transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}>
                        {logoGroups[activeGroup].map((logo) => (
                            <div key={logo.label} className="flex flex-col items-center gap-1">
                                <img src={logo.src} alt={`${logo.label} Logo`} className={`w-28 h-28 ${logo.objectFit}`} />
                                <span className="untertitel">{logo.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center gap-6">
                        <button
                            onClick={() => switchTo((activeGroup - 1 + logoGroups.length) % logoGroups.length)}
                            className="text-primary text-2xl hover:opacity-60 transition-opacity disabled:opacity-20"
                            disabled={activeGroup === 0}
                        >←</button>
                        <span className="text-white/40 text-sm">{activeGroup + 1} / {logoGroups.length}</span>
                        <button
                            onClick={() => switchTo((activeGroup + 1) % logoGroups.length)}
                            className="text-primary text-2xl hover:opacity-60 transition-opacity disabled:opacity-20"
                            disabled={activeGroup === logoGroups.length - 1}
                        >→</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
