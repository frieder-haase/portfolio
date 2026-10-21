import Image from "next/image";

interface Tool {
    label: string;
    icon?: string;
}

interface ToolCategory {
    title: string;
    tools: Tool[];
}

// Techstack: Einträge mit Icon werden als Logo gezeigt, ohne Icon als Tag
const techStack: ToolCategory[] = [
    {
        title: "Entwicklung",
        tools: [
            { label: "React", icon: "/assets/logos/react.svg" },
            { label: "Next.js", icon: "/assets/logos/nextjs.png" },
            { label: "Symfony", icon: "/assets/logos/symfony.svg" },
            { label: "PHP", icon: "/assets/logos/php.svg" },
            { label: "Tailwind CSS", icon: "/assets/logos/tailwind.svg" },
            { label: "MySQL", icon: "/assets/logos/mysql.svg" },
            { label: "TypeScript" },
            { label: "JavaScript" },
            { label: "HTML" },
            { label: "CSS" },
            { label: "Bootstrap" },
            { label: "Doctrine" },
            { label: "REST-API" },
            { label: "Docker" },
            { label: "Git" },
            { label: "WordPress" },
            { label: "Claude Code" },
        ],
    },
    {
        title: "Design & 3D",
        tools: [
            { label: "Photoshop", icon: "/assets/logos/photoshop.svg" },
            { label: "Illustrator", icon: "/assets/logos/illustrator.svg" },
            { label: "Blender", icon: "/assets/logos/blender.svg" },
            { label: "Unreal Engine", icon: "/assets/logos/unreal.svg" },
            { label: "ZBrush", },
            { label: "InDesign" },
            { label: "Substance Painter" },
            { label: "Marvelous Designer" },
        ],
    },
];

interface TimelineStep {
    period: string;
    types: string[];
    title: string;
    place: string;
    current?: boolean;
}

// Werdegang für die Zeitleiste
const timeline: TimelineStep[] = [
    {
        period: "2015 – 2021",
        types: ["Ausbildung"],
        title: "Game Art Animation (B.A.)",
        place: "SAE Institute Leipzig",
    },
    {
        period: "2021",
        types: ["Beruf"],
        title: "Junior IT Support",
        place: "HCL Technologies",
    },
    {
        period: "2022 – 2023",
        types: ["Ausbildung"],
        title: "Grafik-Designer",
        place: "Studiengemeinschaft Darmstadt",
    },
    {
        period: "2024 – 2026",
        types: ["Ausbildung", "Praktikum"],
        title: "Fachinformatiker Anwendungsentwicklung (IHK)",
        place: "WBS Training | Praktikum bei WebGalaxie",
        current: true,
    },
];

// Eine Kategorie des Techstacks: Logos, darunter Tags
function TechCategory({ category }: { category: ToolCategory }) {
    const withIcon = category.tools.filter((tool) => tool.icon);
    const asTag = category.tools.filter((tool) => !tool.icon);

    return (
        <div className="flex flex-col items-center">
            <h3 className="!text-xs !font-normal !text-white/60 uppercase tracking-[0.2em] mb-5 lg:[@media(max-height:800px)]:mb-3">{category.title}</h3>
            <ul className="flex flex-wrap justify-center gap-x-2 gap-y-4">
                {withIcon.map((tool) => (
                    <li key={tool.label} className="flex w-24 flex-col items-center gap-2">
                        <div className="relative h-12 w-12 lg:h-14 lg:w-14 lg:[@media(max-height:800px)]:h-10 lg:[@media(max-height:800px)]:w-10">
                            <Image src={tool.icon!} alt="" fill sizes="56px" className="object-contain" />
                        </div>
                        <span className="text-center text-sm text-white/90">{tool.label}</span>
                    </li>
                ))}
            </ul>
            {asTag.length > 0 && (
                <ul className="mt-5 flex max-w-xl flex-wrap justify-center gap-2 lg:[@media(max-height:800px)]:mt-3" aria-label={`Weitere Werkzeuge: ${category.title}`}>
                    {asTag.map((tool) => (
                        <li key={tool.label} className="border border-white/20 px-2 py-0.5 text-xs text-white/70">
                            {tool.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function AboutMe() {
    return (
        <section
            id="aboutme"
            aria-labelledby="aboutme-title"
            className="container min-h-[calc(100vh-4rem)] section-snap flex flex-col justify-center mx-auto px-6 lg:px-0 pt-24 pb-16 lg:py-8"
        >
            {/* Überschrift */}
            <h2 id="aboutme-title" className="!text-2xl lg:!text-3xl text-left font-bold leading-tight mb-8 lg:mb-16">
                Über mich
                <span aria-hidden="true" className="mt-3 block h-0.5 w-16 bg-primary" />
            </h2>

            {/* Zeitleiste */}
            <ol className="relative mb-10 grid gap-6 border-l border-primary/30 pl-6 lg:mb-12 lg:grid-cols-4 lg:gap-8 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-6 lg:[@media(max-height:800px)]:mb-6" aria-label="Werdegang">
                {timeline.map((step) => (
                    <li key={step.title} className="relative">
                        {/* Punkt auf der Linie */}
                        <span
                            aria-hidden="true"
                            className={`absolute -left-[1.85rem] top-1 h-3 w-3 rounded-full border-2 border-primary lg:-top-[1.85rem] lg:left-0 ${
                                step.current ? "bg-primary shadow-[0_0_12px_rgba(27,242,163,0.8)]" : "bg-black"
                            }`}
                        />
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs tracking-[0.15em] text-white/60">{step.period}</span>
                            {step.types.map((type) => (
                                <span key={type} className="border border-white/20 px-1.5 text-[0.65rem] uppercase tracking-wider text-white/60">
                                    {type}
                                </span>
                            ))}
                        </div>
                        <h3 className={`mt-2 !text-base font-bold leading-snug ${step.current ? "!text-primary" : "!text-white"}`}>{step.title}</h3>
                        <p className="text-xs text-white/60">{step.place}</p>
                    </li>
                ))}
            </ol>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
                {/* Linke Spalte: Terminal-Fenster mit Über-mich-Text */}
                <div className="overflow-hidden rounded-md border border-white/10 bg-black shadow-[0_0_60px_-15px_rgba(27,242,163,0.35)]">
                    {/* Titelleiste */}
                    <div className="flex h-8 items-center justify-between bg-[#202020] font-sans text-xs text-white/85" aria-hidden="true">
                        <div className="flex items-center gap-2 pl-3">
                            <span className="flex h-3.5 w-4 items-center justify-center rounded-[2px] border border-white/40 bg-[#0c0c0c] font-mono text-[0.45rem] font-bold leading-none text-white">C:\</span>
                            <span>Eingabeaufforderung</span>
                        </div>
                        {/* Minimieren, Maximieren, Schließen */}
                        <div className="flex h-full">
                            <span className="flex w-11 items-center justify-center transition-colors hover:bg-white/10">
                                <svg viewBox="0 0 10 10" className="h-2.5 w-2.5" fill="none" stroke="currentColor"><path d="M0 5.5h10" /></svg>
                            </span>
                            <span className="flex w-11 items-center justify-center transition-colors hover:bg-white/10">
                                <svg viewBox="0 0 10 10" className="h-2.5 w-2.5" fill="none" stroke="currentColor"><rect x="0.5" y="0.5" width="9" height="9" /></svg>
                            </span>
                            <span className="flex w-11 items-center justify-center transition-colors hover:bg-[#c42b1c] hover:text-white">
                                <svg viewBox="0 0 10 10" className="h-2.5 w-2.5" fill="none" stroke="currentColor"><path d="M0 0l10 10M10 0L0 10" /></svg>
                            </span>
                        </div>
                    </div>
                    {/* Fensterinhalt */}
                    <div className="p-5 text-sm leading-relaxed text-white/80 lg:p-6 lg:[@media(max-height:800px)]:p-4">
                        {/* Befehlszeile */}
                        <p className="mb-4 text-white/90" aria-hidden="true">
                            <span className="text-white/50">C:\Users\fred&gt;</span>{" "}
                            type aboutme.txt
                        </p>
                        {/* Foto */}
                        <div className="relative mb-4 h-24 w-24 sm:float-left sm:mb-2 sm:mr-5 overflow-hidden rounded border border-primary/40 lg:h-28 lg:w-28 lg:[@media(max-height:800px)]:h-20 lg:[@media(max-height:800px)]:w-20">
                            <Image
                                src="/assets/me.jpg"
                                alt="Portrait von Frieder Haase"
                                fill
                                sizes="112px"
                                className="scale-125 object-cover object-top grayscale"
                            />
                        </div>
                        {/* Über-mich-Text */}
                        <div className="space-y-4">
                    <p>
                        Als ursprünglich gelernter Game Designer, 3D Artist und auch Grafikdesigner bringe ich sowohl Verständnis und Passion für die technische als auch die kreative Seite der Softwareentwicklung mit.
                    </p>
                    <p>
                        Nichts ist für mich frustrierender als eine schlechte UI/UX, das gilt sowohl für Spiele, als auch für jegliche andere Software. Daher ist es mir besonders wichtig, bei meinen Projekten auf eine intuitive und ansprechende Gestaltung zu achten.
                    </p>
                    <p>
                        Durch meine diverse Erfahrung kann ich mich in verschiedenen Bereichen der Softwareentwicklung einbringen, weshalb ich letztendlich auch das Ziel habe mich als Full-Stack Entwickler zu etablieren.
                    </p>
                        </div>
                        {/* Prompt mit Cursor */}
                        <p className="clear-both mt-4 text-primary" aria-hidden="true">
                            <span className="text-white/50">C:\Users\fred&gt;</span>{" "}
                            <span className="terminal-cursor inline-block h-4 w-0.5 translate-y-0.5 bg-white/90" />
                        </p>
                    </div>
                </div>

                {/* Rechte Spalte: Techstack */}
                <div className="flex flex-col gap-8 lg:[@media(max-height:800px)]:gap-6">
                    {techStack.map((category) => (
                        <TechCategory key={category.title} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
}
