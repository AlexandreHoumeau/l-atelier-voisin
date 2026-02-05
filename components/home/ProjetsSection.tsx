"use client";

import { AnimatePresence, motion, Transition } from "framer-motion";
import { ExternalLink, MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import type { Project } from "@/types/project";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: Props) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  if (!projects || projects.length === 0) return null;

  const project = projects[activeProjectIndex];
  const imgs = project.photos;

  const transition: Transition = {
    duration: 0.25,
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  const nextProject = () =>
    setActiveProjectIndex((prev) => (prev + 1) % projects.length);

  const prevProject = () =>
    setActiveProjectIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );

  return (
    <div
      id="projects"
      className="px-4 flex h-full justify-center sm:px-8 lg:px-16 xl:px-24 py-16"
    >
      <div className="flex flex-col items-center w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProjectIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={transition}
            className="flex flex-col items-center w-full"
          >
            {/* Titles */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center">
              NOS PROJETS
            </h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white text-center md:mt-2">
              {project.title} – {project.subtitle}
            </h3>

            {/* Images */}
            <div className="w-full my-10 xl:max-w-[1600px] mx-auto lg:mt-16">
              {/* Desktop */}
              <div className="hidden md:flex relative items-center justify-center xl:h-96">
                <motion.div
                  className="flex justify-center items-center gap-6 w-full overflow-hidden"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {[1, 0, 2].map((index, i) => (
                    <motion.div
                      key={index}
                      variants={{
                        rest: {
                          scale: index === 0 ? 1 : 0.85,
                          x: index === 1 ? 120 : index === 2 ? -120 : 0,
                          opacity: index === 0 ? 1 : 0.75,
                        },
                        hover: {
                          scale: 1,
                          x: 0,
                          opacity: 1,
                        },
                      }}
                      transition={transition}
                    >
                      <Image
                        src={urlFor(imgs[index]).width(800).url()}
                        alt="project image"
                        width={800}
                        height={600}
                        className={`rounded-xl w-[26vw] max-w-[420px] relative h-auto ${index === 0 ? "z-50" : "z-0"}`}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Mobile */}
              <div
                className="flex flex-col md:hidden items-center w-full max-w-sm mx-auto">
                <div className="w-full">
                  {imgs.map((img, i) => {
                    const collapsedOffset = i === 0 ? 0 : -260;
                    const expandedOffset = 10;
                    const isTop = i === 0;

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: i === 0 ? 1 : 0.6, marginTop: expanded ? expandedOffset : collapsedOffset, }}
                        layout={expanded}
                        animate={{
                          scale: expanded ? 1 : 1 - i * 0.1, // top: 1, 2nd: 0.9, 3rd: 0.8
                          marginTop: expanded ? expandedOffset : collapsedOffset,
                          opacity: expanded || i === 0 ? 1 : 0.8,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="cursor-pointer rounded-xl shadow-lg overflow-hidden"
                        onClick={() => {
                          if (i === 0) setExpanded((prev) => !prev);
                        }}
                      >
                        <div className="relative">
                          <Image
                            src={urlFor(img).width(800).url()}
                            alt={`project image ${i + 1}`}
                            width={800}
                            height={600}
                            className={`w-full h-auto rounded-xl relative ${i === 0 ? 'z-50' : 'z-0'}`}
                          />
                          {/* Overlay for non-top images when collapsed */}
                          {!isTop && !expanded && (
                            <div className="absolute inset-0 bg-white/60 rounded-xl pointer-events-none" />
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex mb-8 justify-center gap-6">
          <NavButton onClick={prevProject}>
            <MoveLeft size={20} />
          </NavButton>
          <NavButton onClick={nextProject}>
            <MoveRight size={20} />
          </NavButton>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <Section title="LE PROJET">{project.description}</Section>

          <Section title="L’AVIS DE NOS CLIENTS">
            <>
              <p>{project.review.quote}</p>
              <p className="italic mt-3">– {project.review.author}</p>
            </>
          </Section>

          <Section title="LE SITE EN LIGNE">
            <>
              <p>
                Pour une meilleure expérience, vous pouvez accéder à l’entièreté
                du site en cliquant sur ce bouton.
              </p>
              <Button
                className="bg-white mt-6 p-10 text-[#E07A5F]"
                onClick={() => window.open(project.website, "_blank")}
                icon={() => <ExternalLink size={22} />}
              >
                <span className="ml-2 font-bold text-xl">VOIR LE SITE</span>
              </Button>
            </>
          </Section>
        </div>
      </div>
    </div>
  );
}


/* ---------- Helpers ---------- */

function NavButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="border-white border-2 p-3 rounded-full shadow-lg text-white"
    >
      {children}
    </motion.button>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <h4 className="text-white font-bold text-2xl mb-3">{title}</h4>
      <div className="text-white text-lg leading-relaxed">{children}</div>
    </motion.div>
  );
}
