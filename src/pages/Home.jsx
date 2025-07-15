import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-24"> {/* Disesuaikan dengan tinggi Navbar */}
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>

      {/* Footer (optional) */}
      <Footer />
    </div>
  );
};
