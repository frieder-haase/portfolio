import Projekte from "@/components/projekte";
import Intro from "@/components/introcard";
import AboutMe from "@/components/aboutme";


export default function Home() {
  return (
      <main>
        <Intro />
        <AboutMe />
        <Projekte />
      </main>
  );
}
