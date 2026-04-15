"use client";
import { useIntro } from "@/context/IntroContext";

export default function Header() {
  const { introDone } = useIntro();
  return (
    <header className={`transition-opacity duration-1000 ${introDone ? "opacity-100" : "opacity-0"}`}>
      <div className="container mx-auto flex relativesticky top-0 min-h-24 items-center">
        <h1 className="text-center left-0">
          Frieder Haase
        </h1>

        <nav className="flex gap-8 ml-auto">
          <a href="/">Portfolio</a>
          <a href="/ueber-mich">Über mich</a>
        </nav>
      </div>
    </header>
  );
}