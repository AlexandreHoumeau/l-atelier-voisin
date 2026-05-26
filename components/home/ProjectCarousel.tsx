"use client";

import type { Project } from "@/types/project";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ProjectOverview from "./ProjectOverview";
import { getProjectImage } from "./projectImage";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const total = projects.length;

  useEffect(() => {
    if (!sectionRef.current || total === 0) return;

    const ctx = gsap.context(() => {
      const angle = 360 / total;
      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? window.innerWidth * 0.75 : 800;
      const extraSpace = isMobile ? 200 : 600;

      let radius = 1200;
      if (total > 2) {
        radius = (cardWidth + extraSpace) / (2 * Math.tan(Math.PI / total));
      }
      radius = Math.max(radius, isMobile ? 700 : 1400);

      const cards = gsap.utils.toArray<HTMLElement>('.project-card');
      cards.forEach((card, i) => {
        gsap.set(card, {
          transformOrigin: `50% 50% -${radius}px`,
          rotationY: i * angle,
        });
      });

      gsap.set('.carousel-rotation', {
        transformOrigin: `50% 50% -${radius}px`
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${total * 350}vh`,
          scrub: 0.5,
          pin: true,
        }
      });

      if (total > 1) {
        tl.to('.carousel-rotation', {
          rotationY: -((total - 1) * angle),
          ease: "none",
          duration: total - 1
        }, 0);

        const titles = gsap.utils.toArray<HTMLElement>('.project-title-wrapper');
        titles.forEach((title, i) => {
          gsap.set(title, { yPercent: i === 0 ? 0 : 100 });

          if (i < total - 1) {
            tl.to(title, { yPercent: -100, ease: "none", duration: 1 }, i);
          }
          if (i > 0) {
            tl.to(title, { yPercent: 0, ease: "none", duration: 1 }, i - 1);
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [total]);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  if (total === 0) return null;

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden bg-[#EAE3DB]"
      >
        <div className="absolute left-5 top-6 z-[100] sm:left-8 lg:left-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#C87056]">
            Projets
          </p>
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ perspective: "2200px" }}
        >
          <div
            className="carousel-rotation absolute inset-0 flex items-center justify-center w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {projects.map((project, index) => (
              <button
                type="button"
                key={`card-${project.slug || index}`}
                onClick={() => setSelectedProject(project)}
                aria-label={`Voir le détail du projet ${project.title}`}
                className="project-card absolute flex items-center justify-center w-[75vw] max-w-[800px] aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-lg drop-shadow-[0_25px_45px_rgba(0,0,0,0.2)] pointer-events-auto transition-transform hover:scale-[1.015] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C87056]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src={getProjectImage(project.photos?.[0])}
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 800px) 75vw, 800px"
                  priority={index < 2}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
          {projects.map((project, index) => (
            <div
              key={`title-${project.slug || index}`}
              className="project-title-wrapper absolute inset-0 flex flex-col items-center justify-center w-full h-full px-5"
            >
              <h2 className="font-momo text-[clamp(4.4rem,12vw,9rem)] leading-[0.8] text-white text-center uppercase drop-shadow-2xl">
                {project.title}
              </h2>

              <div className="mt-8 pointer-events-auto">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex rounded-full bg-[#f4a1c6] px-8 py-3.5 text-sm font-bold text-black shadow-lg transition-transform hover:scale-105 hover:bg-[#ffb6d5]"
                >
                  Voir en détail
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectOverview
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
