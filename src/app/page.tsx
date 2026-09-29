import Projekte from "@/components/projekte";
import AboutMe from "@/components/aboutme";
import Contact from "@/components/contact";


export default function Home() {
  return (
      <main>
        <AboutMe />
        <Projekte />
        <Contact />
      </main>
  );
}
