import Hero from "@/components/hero";
import Projekte from "@/components/projekte";
import AboutMe from "@/components/aboutme";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      {/* Abschnitte der Startseite von oben nach unten */}
      <Hero />
      <Projekte />
      <AboutMe />
      <Contact />
    </main>
  );
}
