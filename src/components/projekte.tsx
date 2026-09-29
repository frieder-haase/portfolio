"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ImageSlideshow from "./ImageSlideshow"; 

interface Project {
    title: string;
    image?: string;
    images?: string[];
    description: string;
    tags: string[];
    href: string;
    internal: boolean;
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: "Ticketsystem für maßnahme-direkt.de",
        images: ["/assets/projekte/Ticketsystem.png", "/assets/ticketsystem/admin_dashboard.png", "/assets/ticketsystem/admin_ticketform.png", "/assets/ticketsystem/admin_tracking.png"],
        description: "Full-Stack Ticketsystem für den EMAW-Provider maßnahme-direkt.de. Mit getrennten React- und Symfony-Frontends, automatisiertem Status-Workflow (inkl. 48h-Auto-Close) und KPI-Dashboard für das Support-Team. Derzeit im Live-Betrieb und wird aktiv von Bildungsträgern genutzt.",
        tags: ["Full-Stack", "React", "TypeScript", "Symfony", "REST-API", "Doctrine"],
        href: "/projekte/ticketsystem",
        internal: true,
        featured: true,
    },
    {
        title: "tankschutz-halle.de",
        image: "/assets/projekte/TankschutzHalle.png",
        description: "Umsetzung einer Webseite nach vorgegebenem Design für einen Dienstleister im Bereich Tankreinigung.",
        tags: ["WordPress", "Bootstrap", "PHP"],
        href: "https://tankschutz-halle.de",
        internal: false,
    },
    {
        title: "jens-iwan.de",
        image: "/assets/projekte/JensIwan.png",
        description: "Umsetzung einer Webseite nach vorgegebenem Design für einen Baugutachter.",
        tags: ["WordPress", "Bootstrap", "PHP"],
        href: "https://jens-iwan.de",
        internal: false,
    },
    {
        title: "AfricanExplorer.de",
        image: "/assets/projekte/AfricanExplorer.png",
        description: "Umsetzung einer Suchfunktion für die bestehende Webseite eines Reiseveranstalters, welche die WordPress Unterseiten nach den angegebenen Suchkriterien filtert.",
        tags: ["WordPress", "Bootstrap", "PHP"],
        href: "https://africanexplorer.de",
        internal: false,
    },
];

export default function Projekte() {
    const featured = projects.find((p) => p.featured);
    const rest = projects.filter((p) => !p.featured);
    const [visible, setVisible] = useState(true);
    const sectionRef = useRef<HTMLElement>(null);

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

    return (
        <section
            ref={sectionRef}
            id="projekte"
            className={`container min-h-screen scroll-mt-36 snap-start flex flex-col justify-start mx-auto px-4 lg:px-0 transition-opacity duration-1000 ease-out ${
                visible ? "opacity-100" : "opacity-0"
            }`}
        >
            <h2 className="text-2xl font-bold my-6">IHK-Abschlussprojekt</h2>
            {featured && (
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10"
                >
                    <div className="overflow-hidden rounded">
                        <ImageSlideshow images={featured.images ?? []} alt={featured.title} />
                    </div>
                    <div className="bg-black/80 p-6 flex flex-col justify-center">
                        <h3 className="!text-xxl font-bold text-primary mb-3">{featured.title}</h3>

                        <p className="text-sm text-white/80 mb-4">{featured.description}</p>
                        <a
                            href="https://www.arbeitsagentur.de/institutionen/bildungstraeger/elektronische-massnahmeabwicklung"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary/70 underline underline-offset-2 hover:opacity-70 w-fit mb-3"
                        >
                            Was ist EMAW?
                        </a>
                        <ul className="text-sm text-white/80 mb-4 space-y-2">
                            <li>→ Getrennte Frontends: React (Admin-Frontend) & Symfony (Nutzerfrontend/Backend)</li>
                            <li>→ Datenaustausch zwischen React-Frontend und Symfony-Backend über REST-API</li>
                            <li>→ Automatisierter Status-Workflow inkl. 48h-Auto-Close mit Reopen-Option</li>
                            <li>→ Automatische E-Mail-Benachrichtigungen bei Ticket-Erstellung & Antworten</li>
                            <li>→ Umfangreiche Filter- & Suchfunktionen, KPI-Cards und Utilities für das Support-Team</li>
                            <li>→ Automatisch generierte Systemkommentare für die Nachvollziehbarkeit der Anliegen</li>
                        </ul>

                        <div className="flex gap-2 flex-wrap mb-4">
                            {featured.tags.map((tag) => (
                                <span key={tag} className="text-xs border border-primary text-primary px-2 py-0.5">{tag}</span>
                            ))}
                        </div>

                        <Link href={featured.href} className="text-base text-primary underline underline-offset-2 hover:opacity-70 w-fit">
                            Mehr erfahren →
                        </Link>
                    </div>
                </div>
            )}
            <h2 className="text-2xl font-bold my-6">Andere Projekte</h2>
            {/* Andere Portfolio-Projekte */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {rest.map((project, index) => (
                    <div
                        key={project.title + index}
                        className="flex flex-col gap-3 transition-opacity duration-3000"
                    >
                        <div className="relative overflow-hidden group rounded">
                            <img src={project.image} alt={project.title} className="bild w-full" />
                            {/* Hover Card für xl Bildschirme */}
                            <div className="hidden xl:block absolute inset-x-0 bottom-0 bg-black/80 p-4 transition-transform duration-300 translate-y-[calc(100%-4.5rem)] group-hover:translate-y-0">
                                <h3 className="!text-xxl font-bold text-primary mb-3">{project.title}</h3>
                                <p className="text-sm text-white/80 mb-3">{project.description}</p>
                                <div className="flex gap-2 flex-wrap mb-3">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs border border-primary text-primary px-2 py-0.5">{tag}</span>
                                    ))}
                                </div>
                                <div>
                                    {project.internal ? (
                                        <Link href={project.href} className="text-base text-primary underline underline-offset-2 hover:opacity-70">Mehr erfahren →</Link>
                                    ) : (
                                        <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-base text-primary underline underline-offset-2 hover:opacity-70">Website öffnen →</a>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Text für mobile/tablet */}
                        <div className="xl:hidden bg-black/80 p-4">
                            <h3 className="!text-xxl font-bold text-primary mb-3">{project.title}</h3>
                            <p className="text-sm text-white/80 mb-3">{project.description}</p>
                            <div className="flex gap-2 flex-wrap mb-3">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs border border-primary text-primary px-2 py-0.5">{tag}</span>
                                ))}
                            </div>
                            <div>
                                {project.internal ? (
                                    <Link href={project.href} className="text-base text-primary underline underline-offset-2 hover:opacity-70">Mehr erfahren →</Link>
                                ) : (
                                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-base text-primary underline underline-offset-2 hover:opacity-70">Website öffnen →</a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}