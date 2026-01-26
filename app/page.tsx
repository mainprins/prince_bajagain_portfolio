import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection"
import DetailsSection from "./components/DetailsSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillSection from "./components/SkillSection";
import ScrollingBar from "./components/ScrollingBar";
import QuickGlance from "./components/QuickGlance";
import BottomSection from "./components/BottomSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <AboutSection />
      <DetailsSection />
      <ProjectsSection />
      <SkillSection />
      <ScrollingBar />
      <QuickGlance />
      <BottomSection />
      <Footer />
    </main>
  )
}
