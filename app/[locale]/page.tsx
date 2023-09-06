import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <SectionDivider />
      <AboutMe />
      <Projects />
      <Skills />

    </main>
  );
}
