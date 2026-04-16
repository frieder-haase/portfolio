"use client";
import Link from "next/link";
import { useIntro } from "@/context/IntroContext";

const projects = [
    {
        title: "Ticketsystem für maßnahme-direkt.de",
        image: "./assets/projekte/Ticketsystem.png",
        description: "Full-Stack Umsetzung eines internen Ticketsystems zur Verwaltung von Support-Anfragen im Rahmen meiner IHK Abschlussarbeit.",
        tags: ["React", "Symfony", "Rest-API", "Doctrine", "TypeScript", "PHP"],
        href: "/projekte/ticketsystem",
        internal: true,
    },
    {
        title: "Website für tankschutz-halle.de",
        image: "./assets/projekte/TankschutzHalle.png",
        description: "Umsetzung einer Webseite nach vorgegebenem Design für einen Dienstleister im Bereich Tankreinigung.",
        tags: ["WordPress", "Bootstrap", "PHP"],
        href: "https://tankschutz-halle.de",
        internal: false,
    },
    {
        title: "Website für jens-iwan.de",
        image: "./assets/projekte/JensIwan.png",
        description: "Umsetzung einer Webseite nach vorgegebenem Design für einen Baugutachter.",
        tags: ["WordPress", "Bootstrap", "PHP"],
        href: "https://jens-iwan.de",
        internal: false,
    },
    {
        title: "Suche für AfricanExplorer.de",
        image: "./assets/projekte/AfricanExplorer.png",
        description: "Umsetzung einer Suchfunktion für die bestehende Webseite eines Reiseveranstalters, welche die WordPress Unterseiten nach den angegebenen Suchkriterien filtert.",
        tags: ["WordPress", "Bootstrap", "PHP"],
        href: "https://africanexplorer.de",
        internal: false,
    },
];

export default function Projekte() {
    const { introDone } = useIntro();

    return (
        <section className="container mx-auto my-16">
            <div className="grid grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={project.title + index}
                        className="flex flex-col gap-3 transition-opacity duration-3000"
                        style={{
                            opacity: introDone ? 1 : 0,
                            transitionDelay: introDone ? `${Math.floor(index / 2) * 400}ms` : "0ms",
                        }}
                    >
                        <div className="relative overflow-hidden group rounded">
                            <img src={project.image} alt={project.title} className="bild w-full" />
                            <div className="absolute inset-x-0 bottom-0 bg-black/80 p-4 transition-transform duration-300 translate-y-[calc(100%-4.5rem)] group-hover:translate-y-0">
                                <h3 className="!text-xxl font-bold text-primary mb-3">{project.title}</h3>
                                <p className="text-sm text-white/80 mb-3">{project.description}</p>
                                <div className="flex items-center justify-between gap-2 flex-wrap">
                                    <div className="flex gap-2 flex-wrap">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs border border-primary text-primary px-2 py-0.5">{tag}</span>
                                        ))}
                                    </div>
                                    {project.internal ? (
                                        <Link href={project.href} className="text-base text-primary underline underline-offset-2 hover:opacity-70">Mehr erfahren →</Link>
                                    ) : (
                                        <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-base text-primary underline underline-offset-2 hover:opacity-70">Website öffnen →</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}