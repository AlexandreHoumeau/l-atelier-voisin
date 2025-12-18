"use client";

import ProjetsSection from "@/components/home/ProjetsSection";
import ServicesPage from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useEffect(() => {
    // HERO
    ScrollTrigger.create({
      trigger: ".section.hero",
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: false,
    });

    // SERVICES → PROJECTS
    ScrollTrigger.create({
      trigger: ".section.services-projects",
      start: "top top",
      end: "+=200%",
      pin: true,
      pinSpacing: false,
    });
  }, []);

  return (
    <main>
      {/* HERO */}
      <div className="section hero z-0">
        <HeroSection />
      </div>

      {/* SERVICES → PROJECTS */}
        <div className="min-h-screen relative bg-[#E07A5F]">
          <ProjetsSection />
        </div>
      <div className="md:section md:services-projects">
        <div className="min-h-screen bg-[#F2CC8F]">
          <ServicesPage />
        </div>
      </div>

      {/* ABOUT */}
      <div className="bg-[#7FA3A1]">
        <AboutSection />
      </div>

      {/* CONTACT */}
      <div className="bg-white">
        <ContactSection />
      </div>
    </main>
  );
}
