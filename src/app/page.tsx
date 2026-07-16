import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects();

  return (
    <main>
      <Hero />
      <Projects projects={projects} />
      <Contact />
    </main>
  );
}
