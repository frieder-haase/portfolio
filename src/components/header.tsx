"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [pendingSection, setPendingSection] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/" || !pendingSection) return;

    document.getElementById(pendingSection)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setPendingSection(null);
  }, [pathname, pendingSection]);

  const navigateToSection = (sectionId: string) => {
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
      <div className="container mx-auto flex fixed inset-x-0 top-0 min-h-36 items-center justify-between bg-black z-50">
        <h1>
          Frieder Haase
        </h1>
        <nav aria-label="Hauptnavigation" className="flex gap-6">
          <button type="button" onClick={() => navigateToSection("aboutme")} className="cursor-pointer text-white/80 transition-colors hover:text-primary">
            Home
          </button>
          <button type="button" onClick={() => navigateToSection("projekte")} className="cursor-pointer text-white/80 transition-colors hover:text-primary">
            Projekte
          </button>
        </nav>
      </div>
    </header>
  );
}