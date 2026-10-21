"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// Navigationspunkte (Desktop und Mobile)
const NAV_ITEMS = [
    { id: "projekte", label: "Projekte" },
    { id: "aboutme", label: "Über mich" },
    { id: "kontakt", label: "Kontakt" },
];

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    // Mobile-Menü mit Escape schließen
    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    // Ziel-Abschnitt, wenn von einer Unterseite zur Startseite gewechselt wird
    const pendingSection = useRef<string | null>(null);

    // Nach dem Wechsel zur Startseite zum Ziel-Abschnitt scrollen
    useEffect(() => {
        if (pathname !== "/" || !pendingSection.current) return;
        const sectionId = pendingSection.current;
        pendingSection.current = null;
        requestAnimationFrame(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }, [pathname]);

    // Zu einem Abschnitt scrollen, ohne die Adresse zu ändern
    const navigateToSection = (sectionId: string) => {
        setMenuOpen(false);

        if (pathname !== "/") {
            pendingSection.current = sectionId;
            router.push("/", { scroll: false });
            return;
        }

        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <header>
            <div className="container mx-auto flex fixed inset-x-0 lg:left-0 top-0 min-h-16 md:h-24 lg:min-h-36 items-center justify-between bg-black px-4 lg:px-0 z-50">
                {/* Name, Link zur Startseite */}
                <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="font-bold text-primary text-3xl lg:text-5xl"
                >
                    Frieder Haase
                </Link>

                {/* Navigation Desktop */}
                <nav aria-label="Hauptnavigation" className="hidden lg:flex gap-6">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => navigateToSection(item.id)}
                            className="cursor-pointer text-white/80 transition-colors hover:text-primary"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Burger-Button Mobile */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
                    aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Navigation Mobile */}
            <nav
                id="mobile-navigation"
                aria-label="Mobile Navigation"
                inert={!menuOpen}
                className={`lg:hidden fixed inset-x-0 top-16 md:top-24 bg-black z-40 flex flex-col items-center gap-6 py-8 transition-transform duration-300 ease-out ${
                    menuOpen ? "translate-y-0" : "-translate-y-[150%]"
                }`}
            >
                {NAV_ITEMS.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => navigateToSection(item.id)}
                        className="cursor-pointer text-lg text-white/80 transition-colors hover:text-primary"
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
        </header>
    );
}
