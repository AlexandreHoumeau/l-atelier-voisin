"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, MoveRight, MoveUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/types/project";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: Props) {
  // 1. Changed to null so everything is closed at first
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  if (!projects || projects.length === 0) return null;

  const toggleProject = (index: number) => {
    setActiveProjectIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      id="projects"
      className="min-h-screen bg-[#EBE9E4] px-4 sm:px-8 lg:px-16 xl:px-32 py-20 text-[#333333]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-12">
          Nos projets
        </h2>

        <div className="border-t border-gray-400">
          {projects.map((project, index) => {
            const isActive = activeProjectIndex === index;

            return (
              <div key={index} className="border-b border-gray-400">
                {/* --- Accordion Header --- */}
                <motion.div
                  onClick={() => toggleProject(index)}
                  className="py-8 flex justify-between items-center cursor-pointer group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex flex-col">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase text-[#3A3A3A] group-hover:text-black transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-lg md:text-xl font-light text-gray-600 mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  {/* Animated Arrow */}
                  <motion.div
                    initial={false}
                    animate={{ rotate: isActive ? 0 : 0 }}
                    className="text-gray-600 group-hover:text-black transition-colors"
                  >
                    {isActive ? (
                      <MoveUp strokeWidth={1.5} size={32} />
                    ) : (
                      <MoveRight strokeWidth={1.5} size={32} />
                    )}
                  </motion.div>
                </motion.div>

                {/* --- Accordion Expanded Content --- */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 pt-4 flex flex-col lg:flex-row gap-12 lg:gap-24">
                        
                        {/* Left Side: Auto-rotating Gallery */}
                        <div className="w-full lg:w-3/5 flex flex-col gap-6">
                          <ProjectGallery photos={project.photos} />
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 w-fit font-bold text-gray-700 hover:text-black transition-colors group"
                          >
                            <ExternalLink size={20} className="group-hover:scale-110 transition-transform" /> 
                            voir le site
                          </a>
                        </div>

                        {/* Right Side: Text Information */}
                        <div className="w-full lg:w-2/5 flex flex-col justify-center gap-12">
                          <motion.div 
                            initial={{ y: 20, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ delay: 0.2, duration: 0.5 }}
                          >
                            <h4 className="font-bold text-lg mb-2 text-[#4A4A4A]">le projet</h4>
                            <p className="text-[#5A5A5A] leading-relaxed text-sm md:text-base whitespace-pre-line">
                              {project.description}
                            </p>
                          </motion.div>

                          <motion.div
                            initial={{ y: 20, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ delay: 0.3, duration: 0.5 }}
                          >
                            <h4 className="font-bold text-lg mb-2 text-[#4A4A4A]">l'avis de nos clients</h4>
                            <p className="text-[#5A5A5A] leading-relaxed text-sm md:text-base">
                              {project.review.quote}
                            </p>
                            <p className="text-[#5A5A5A] mt-2 text-sm md:text-base">
                              – {project.review.author}
                            </p>
                          </motion.div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------- Gallery Sub-Component ---------- */

function ProjectGallery({ photos }: { photos: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    
    // The timer now resets every time currentIndex changes
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 3500);
    
    return () => clearInterval(timer);
  }, [photos.length, currentIndex]); // <-- Added currentIndex here!

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  if (!photos || photos.length === 0) return null;

  // Custom cursor SVG
  const customCursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='11' fill='black' opacity='0.6' stroke='none'/%3E%3Cpath d='M9 12h6m-3-3 3 3-3 3'/%3E%3C/svg%3E") 20 20, pointer`;

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
      onClick={handleNext}
      style={{ cursor: customCursor }}
    >
      {photos.map((photo, idx) => (
        <motion.div
          key={idx}
          initial={false}
          animate={{ opacity: idx === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={urlFor(photo).width(1200).url()}
            alt={`Project photo ${idx + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority={idx === 0}
          />
        </motion.div>
      ))}

      {/* Dots indicator at the bottom */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10 pointer-events-none">
        {photos.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-6 bg-white shadow-md" : "w-2 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}