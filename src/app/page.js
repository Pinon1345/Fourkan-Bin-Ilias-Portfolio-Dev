import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee"; // <-- Imported here
import AboutSkills from "@/components/AboutSkills";
import TechStackGrid from "@/components/TechStackGrid";
import Analytics from "@/components/Analytics";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CreativeShowcase from "@/components/CreativeShowcase";
import Terminal from "@/components/Terminal";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TechMarquee />
      <AboutSkills />
      <TechStackGrid />
      <Analytics />
      <Services />
      <Experience />
      <Projects />
      <CreativeShowcase />
      <Terminal />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
