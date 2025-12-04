"use client";
import HeroSection from "@/components/home/HeroSection";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import ProjetsSection from "@/components/home/ProjetsSection";
import ServicesPage from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";

const sectionData = [
  { id: "hero", label: "", bg: "#0D654E" },
  { id: "projects", label: "Nos projets", bg: "#E07A5F" },
  { id: "services", label: "Nos services", bg: "#F2CC8F" },
  { id: "about", label: "Le duo derrière l'Atelier voisi", bg: "#7FA3A1" },
  { id: "contact", label: "Discutons ensemble", bg: "#FBE8D8" },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Get all sections up to and including the active section
  const activeSectionIndex = sectionData.findIndex((s) => s.id === activeSection);
  const visibleSections = sectionData.slice(0, activeSectionIndex);

  return (
    <main className="relative h-screen">
      {/* Sticky banners */}
      <div className="fixed top-0 z-50 w-full">
        {visibleSections.map((section) => {
          const bannerHeight = section.id === "hero" ? "h-20" : "h-10";
          return (
            <div
              key={section.id}
              className={`${bannerHeight} flex items-center pl-10 justify-start transition-colors duration-500`}
              style={{ backgroundColor: section.bg }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0 }}
                className="text-xl font-bold text-white">{section.label}</motion.h1>
            </div>
          );
        })}
      </div>

      {/* Scroll container */}
      <div className="h-full overflow-y-scroll snap-y snap-mandatory">
        <section id="hero" className="snap-start min-h-screen bg-[#0D654E]">
          <HeroSection />
        </section>
        <section id="projects" className="snap-start min-h-screen bg-[#E07A5F]">
          <ProjetsSection />
        </section>
        <section id="services" className="snap-start min-h-screen bg-[#F2CC8F]">
          <ServicesPage />
        </section>
        <section id="about" className="snap-start min-h-screen bg-[#7FA3A1]">
          <AboutSection />
        </section>
        <section id="contact" className="snap-start min-h-screen bg-[#FBE8D8]">
          <ContactSection />
        </section>
      </div>
    </main>

  )
}