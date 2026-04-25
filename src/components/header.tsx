"use client";
import { useIntro } from "@/context/IntroContext";
import { usePathname } from "next/navigation";

export default function Header() {
  const { introDone } = useIntro();
  const pathname = usePathname();
  const isTicketsystem = pathname === "/projekte/ticketsystem";

  if (isTicketsystem) {
    return null; // Header nicht rendern auf Ticketsystem-Seite
  }

  return (
    <header className={`transition-opacity duration-1000 ${introDone ? "opacity-100" : "opacity-0"}`}>
      <div className="container mx-auto flex relativesticky top-0 min-h-24 items-center">
        <h1 className="text-center left-0">
          Frieder Haase
        </h1>
      </div>
    </header>
  );
}