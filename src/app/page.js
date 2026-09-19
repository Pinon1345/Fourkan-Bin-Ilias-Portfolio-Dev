import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSkills from "@/components/AboutSkills";
import TechStackGrid from "@/components/TechStackGrid";
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
      <AboutSkills />
      <TechStackGrid />
      <Services />
      <Experience />
      <Projects />
      <CreativeShowcase />
      <FAQ />
      <CTA />
      <Terminal />
      <Footer />
    </main>
  );
}
