import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { Skills } from "../components/Skills";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {

    return <div className="min-h-screen bg-background text-foreground overflow-hidden ">

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background effects */}
        <StarBackground/>

        {/* Navbar */}
        <Navbar />

         {/* Main Content */}
         <main>
            <HeroSection />
            <AboutSection />
            <Skills />
            <ProjectsSection />
            <ContactSection />
         </main>

          {/* Footer */}
          <Footer />
    </div>
};