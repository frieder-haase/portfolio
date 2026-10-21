import Link from "next/link";
import Image from "next/image";
import ImageSlideshow from "./ImageSlideshow";

interface Project {
    title: string;
    image?: string;
    images?: string[];
    description: string;
    highlights?: string[];
    tags: string[];
    href: string;
    internal: boolean;
    featured?: boolean;
}

// Projektdaten
const projects: Project[] = [
    {
        title: "Ticketsystem für maßnahme-direkt.de",
        images: ["/assets/projekte/Ticketsystem.png", "/assets/ticketsystem/admin_dashboard.png", "/assets/ticketsystem/admin_ticketform.png", "/assets/ticketsystem/admin_tracking.png"],
        description: "Full-Stack Ticketsystem für den EMAW-Provider maßnahme-direkt.de. Mit getrennten React- und Symfony-Frontends, automatisiertem Status-Workflow (inkl. 48h-Auto-Close) und KPI-Dashboard für das Support-Team. Derzeit im Live-Betrieb und wird aktiv von Bildungsträgern genutzt.",
        highlights: [
            "Getrennte Frontends: React (Admin-Frontend) & Symfony (Nutzerfrontend/Backend)",
            "Datenaustausch zwischen React-Frontend und Symfony-Backend über REST-API",
            "Automatisierter Status-Workflow inkl. 48h-Auto-Close mit Reopen-Option",
            "Automatische E-Mail-Benachrichtigungen bei Ticket-Erstellung & Antworten",
            "Umfangreiche Filter- & Suchfunktionen, KPI-Cards und Utilities für das Support-Team",
            "Automatisch generierte Systemkommentare für die Nachvollziehbarkeit der Anliegen",
        ],
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

// Technologie-Tags eines Projekts
function Tags({ tags }: { tags: string[] }) {
    return (
        <ul className="flex gap-2 flex-wrap mb-3" aria-label="Technologien">
            {tags.map((tag) => (
                <li key={tag} className="text-xs border border-primary text-primary px-2 py-0.5">{tag}</li>
            ))}
        </ul>
    );
}

// Link zur Projektseite oder zur externen Website
function ProjectLink({ project }: { project: Project }) {
    const className = "text-base text-primary underline underline-offset-2 hover:opacity-70";
    return project.internal ? (
        <Link href={project.href} className={className}>Mehr erfahren →</Link>
    ) : (
        <a href={project.href} target="_blank" rel="noopener noreferrer" className={className}>
            Website öffnen ↗<span className="sr-only"> (öffnet in neuem Tab)</span>
        </a>
    );
}

export default function Projekte() {
    const featured = projects.find((p) => p.featured);
    const rest = projects.filter((p) => !p.featured);

    return (
        <section
            id="projekte"
            aria-labelledby="projekte-title"
            className="container min-h-screen section-snap-start flex flex-col justify-start mx-auto px-6 lg:px-0 pb-16 lg:pb-0 lg:pt-32"
        >
            {/* Überschrift */}
            <h2 id="projekte-title" className="!text-2xl lg:!text-3xl text-left font-bold leading-tight mb-6 pt-20 md:pt-28 lg:pt-12">
                Projekte
                <span aria-hidden="true" className="mt-3 block h-0.5 w-16 bg-primary" />
            </h2>

            {/* Hauptprojekt (Ticketsystem) */}
            {featured && (
                <article className="relative grid grid-cols-1 items-center gap-6 overflow-hidden rounded-lg border border-primary/25 bg-gradient-to-br from-primary/[0.07] via-white/[0.02] to-transparent p-4 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:p-8">
                    {/* Slideshow */}
                    <div className="overflow-hidden rounded-md border border-white/10 bg-black shadow-[0_0_60px_-15px_rgba(27,242,163,0.35)]">
                        <ImageSlideshow images={featured.images ?? []} alt={`Screenshot: ${featured.title}`} />
                    </div>

                    {/* Projekttext */}
                    <div className="flex flex-col">
                        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
                            <span className="uppercase tracking-[0.2em] text-white/60">IHK-Abschlussprojekt</span>
                        </div>

                        <h3 className="!text-xl lg:!text-2xl font-bold text-primary mb-3">{featured.title}</h3>

                        <p className="text-sm text-white/80 mb-2">{featured.description}</p>
                        <a
                            href="https://www.arbeitsagentur.de/institutionen/bildungstraeger/elektronische-massnahmeabwicklung"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary/80 underline underline-offset-2 hover:opacity-70 w-fit mb-4"
                        >
                            Was ist EMAW?
                        </a>

                        {/* Highlights */}
                        {featured.highlights && (
                            <ul className="mb-5 grid gap-x-6 gap-y-2 text-xs text-white/75 sm:grid-cols-2">
                                {featured.highlights.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="text-primary" aria-hidden="true">▹</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <Tags tags={featured.tags} />

                        <Link
                            href={featured.href}
                            className="mt-2 inline-flex w-fit items-center gap-2 rounded border border-primary bg-primary px-6 py-3 font-bold text-black transition hover:bg-transparent hover:text-primary"
                        >
                            Projekt im Detail →
                        </Link>
                    </div>
                </article>
            )}

            <hr className="my-6 w-full border-transparent lg:border-primary/40" />

            {/* Weitere Projekte */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {rest.map((project) => (
                    <article key={project.title} className="group relative flex flex-col gap-3 xl:overflow-hidden xl:rounded">
                        <div className="overflow-hidden rounded">
                            <Image
                                src={project.image ?? ""}
                                alt={`Screenshot von ${project.title}`}
                                width={3840}
                                height={1918}
                                sizes="(min-width: 1024px) 33vw, 100vw"
                                className="bild w-full h-auto"
                            />
                        </div>
                        {/* Projekttext, auf xl als Hover-Overlay */}
                        <div className="xl:absolute xl:inset-x-0 xl:bottom-0 xl:bg-black/85 xl:p-4 xl:transition-transform xl:duration-300 xl:translate-y-[calc(100%-3.5rem)] xl:group-hover:translate-y-0 xl:group-focus-within:translate-y-0">
                            <h3 className="!text-xl font-bold text-primary mb-3">{project.title}</h3>
                            <p className="text-sm text-white/80 mb-3">{project.description}</p>
                            <Tags tags={project.tags} />
                            <ProjectLink project={project} />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
