"use client";

import type { Project } from "@/types/project";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import IntroReveal from "./IntroReveal";
import ProjectCarousel from "./ProjectCarousel";
import ServicesSection from "./ServicesSection";
import { heroSceneZoomDelay, heroSceneZoomDuration } from "./heroTiming";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  projects: Project[];
};

export default function Home({ projects }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const safeProjects = projects ?? [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-word",
        { yPercent: 115, rotate: -4, opacity: 0 },
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.08,
          ease: "power3.out",
          delay: 3.3,
        }
      );

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 84%" },
          }
        );
      });

      gsap.to(".wall-marquee", {
        xPercent: -50,
        duration: 26,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".float-item", {
        y: -18,
        rotate: 3,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.18,
        ease: "sine.inOut",
      });

      gsap.to(".hero-ui", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: heroSceneZoomDelay + heroSceneZoomDuration - 0.55,
      });

      gsap.to(".hero-readability-overlay", {
        opacity: 1,
        duration: 1.1,
        ease: "power2.out",
        delay: heroSceneZoomDelay + heroSceneZoomDuration - 0.55,
      });

      gsap.to(".grain-overlay", {
        opacity: 0.045,
        duration: 0.45,
        ease: "power2.out",
        delay: heroSceneZoomDelay + heroSceneZoomDuration + 0.5,
      });

      gsap.fromTo(
        ".about-portrait",
        {
          clipPath: "inset(8% 8% 8% 8%)",
          rotate: -2,
          scale: 1.08,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          rotate: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-stage", start: "top 72%" },
        }
      );

      gsap.fromTo(
        ".about-pop",
        { autoAlpha: 0, scale: 0.2, y: 28, rotate: -8 },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          rotate: 0,
          duration: 0.72,
          stagger: 0.1,
          ease: "back.out(1.8)",
          scrollTrigger: { trigger: ".about-stage", start: "top 60%" },
        }
      );

      gsap.to(".about-drift", {
        y: -12,
        rotate: 2,
        duration: 3.1,
        repeat: -1,
        yoyo: true,
        stagger: 0.24,
        ease: "sine.inOut",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="bg-[#EBE9E4] text-[#333333]">
      <IntroReveal />
      <HeroSection />
      <ProjectCarousel projects={safeProjects} />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
