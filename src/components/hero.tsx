"use client";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

// Texte der Tipp-Animation
const GREETING = "Hey, ich bin Fred.";
const ROLES = ["Gamedesigner.", "3D Artist.", "Grafikdesigner.", "Anwendungsentwickler."];
const PAUSE_MS = 1200;

const LONGEST_ROLE = ROLES.reduce((a, b) => (b.length > a.length ? b : a));

// Zu einem Abschnitt scrollen, ohne die Adresse zu ändern
function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
    const [typingDone, setTypingDone] = useState(false);

    // Ablauf der Tipp-Animation
    const sequence = [
        GREETING,
        400,
        ...ROLES.flatMap((role, i) => [`${GREETING}\n${role}`, i < ROLES.length - 1 ? PAUSE_MS : 600]),
        () => setTypingDone(true),
    ];

    return (
        <section
            id="start"
            aria-labelledby="hero-title"
            className="container mx-auto flex min-h-screen flex-col justify-center px-6 pt-24 pb-16 lg:px-0 lg:pt-36 section-snap-start"
        >
            {/* Zeile über der Überschrift */}
            <p className="reveal mb-4 text-xs uppercase tracking-[0.12em] text-white/60 sm:text-sm sm:tracking-[0.2em]">
                Leipzig | Sofort verfügar
            </p>

            {/* Überschrift mit Tipp-Animation */}
            <h1 id="hero-title" className="reveal mb-6 !text-2xl sm:!text-3xl md:!text-5xl lg:!text-6xl font-bold leading-tight" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
                <span className="sr-only">{`${GREETING} Game Artist, Grafikdesigner und Anwendungsentwickler.`}</span>
                <span aria-hidden="true" className="grid whitespace-pre-line">
                    {/* Platzhalter für feste Höhe */}
                    <span className="invisible col-start-1 row-start-1">{`${GREETING}\n${LONGEST_ROLE}`}</span>
                    <span className="col-start-1 row-start-1">
                        <TypeAnimation
                            sequence={sequence}
                            speed={70}
                            deletionSpeed={80}
                            cursor={false}
                            repeat={0}
                        />
                        {/* Cursor */}
                        {!typingDone && (
                            <span className="terminal-cursor ml-1 -mr-[calc(0.25rem+0.08em)] inline-block h-[0.9em] w-[0.08em] translate-y-[0.1em] bg-primary" />
                        )}
                    </span>
                </span>
            </h1>

            {/* Unterzeile */}
            <p className="reveal mb-10 max-w-2xl text-white/80 leading-relaxed" style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
                Erst Design, dann Code. Irgendwie hat mich die Frage, wie es dahinter funktioniert, nicht losgelassen.
            </p>

            {/* Buttons */}
            <div className="reveal flex flex-wrap gap-4" style={{ "--reveal-delay": "300ms" } as React.CSSProperties}>
                <a
                    href="#projekte"
                    onClick={(e) => scrollToSection(e, "projekte")}
                    className="inline-flex items-center gap-2 rounded border border-primary bg-primary px-6 py-3 font-bold text-black transition hover:bg-transparent hover:text-primary"
                >
                    Projekte ansehen ↓
                </a>
                <a
                    href="#kontakt"
                    onClick={(e) => scrollToSection(e, "kontakt")}
                    className="inline-flex items-center gap-2 rounded border border-primary px-6 py-3 text-primary transition hover:bg-primary hover:text-black"
                >
                    Kontakt aufnehmen
                </a>
            </div>
        </section>
    );
}
