import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection"
import DetailsSection from "./components/DetailsSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <AboutSection />
      <DetailsSection />
      <ProjectsSection />
    </main>
  )
}
