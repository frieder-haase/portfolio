"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const [pendingSection, setPendingSection] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (pathname !== "/" || !pendingSection) return;

        document.getElementById(pendingSection)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        setPendingSection(null);
    }, [pathname, pendingSection]);

    const navigateToSection = (sectionId: string) => {
        setMenuOpen(false);

        if (pathname !== "/") {
            setPendingSection(sectionId);
            router.push("/");
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
                <h1 className="!text-3xl md:!text-3xl lg:!text-5xl">
                    Frieder Haase
                </h1>

                {/* Desktop Nav */}
                <nav aria-label="Hauptnavigation" className="hidden lg:flex gap-6">
                    <button
                        type="button"
                        onClick={() => navigateToSection("projekte")}
                        className="cursor-pointer text-white/80 transition-colors hover:text-primary"
                    >
                        Projekte
                    </button>
                    <button
                        type="button"
                        onClick={() => navigateToSection("aboutme")}
                        className="cursor-pointer text-white/80 transition-colors hover:text-primary"
                    >
                        Über mich
                    </button>
                    <button
                        type="button"
                        onClick={() => navigateToSection("kontakt")}
                        className="cursor-pointer text-white/80 transition-colors hover:text-primary"
                    >
                        Kontakt
                    </button>
                </nav>

                {/* Burger Button, nur Mobile */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
                    aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
                    aria-expanded={menuOpen}
                >
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile Menü (Slide-in) */}
            <nav
                aria-label="Mobile Navigation"
                className={`lg:hidden fixed inset-x-0 top-16 bg-black z-40 flex flex-col items-center gap-6 py-8 transition-transform duration-300 ease-out ${
                    menuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <button
                    type="button"
                    onClick={() => navigateToSection("aboutme")}
                    className="cursor-pointer text-lg text-white/80 transition-colors hover:text-primary"
                >
                    Home
                </button>
                <button
                    type="button"
                    onClick={() => navigateToSection("projekte")}
                    className="cursor-pointer text-lg text-white/80 transition-colors hover:text-primary"
                >
                    Projekte
                </button>
                <button
                    type="button"
                    onClick={() => navigateToSection("kontakt")}
                    className="cursor-pointer text-lg text-white/80 transition-colors hover:text-primary"
                >
                    Kontakt
                </button>
            </nav>
        </header>
    );
}
