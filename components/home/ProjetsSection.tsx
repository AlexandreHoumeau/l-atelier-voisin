'use client';

import projects from "@/types/project";
import { motion, AnimatePresence, Transition } from "framer-motion";
import { ExternalLink, MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Button from "../ui/Button";
import { client } from "@/sanity/lib/client";

const projectsQuery = `
  *[_type == "project"] | order(title asc) {
    title,
    subtitle,
    "slug": slug.current,
    description,
    photos,
    website,
    review
  }
`

export default async function ProjectsSections() {

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const project = projects[activeProjectIndex];
  const imgs = project.photos;

  const sanity_projects = await client.fetch(projectsQuery)
  console.log(sanity_projects)
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
      className="px-4 flex h-full justify-center sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-16"
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
              {project.title} - {project.subtitle}
            </h3>

            {/* Images */}
            <div className="w-full my-10 max-w-none xl:max-w-[1600px] mx-auto lg:mt-16">

              {/* Desktop */}
              <div className="hidden md:flex relative items-center justify-center sm:h-24 md:h-48 xl:h-96">
                <motion.div
                  className="hidden md:flex justify-center items-center gap-6 w-full overflow-hidden"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {/* LEFT */}
                  <motion.div
                    variants={{
                      rest: {
                        scale: 0.85,
                        x: 120,
                        zIndex: 1,
                        opacity: 0.75,
                      },
                      hover: {
                        scale: 1,
                        x: 0,
                        zIndex: 1,
                        opacity: 1,
                      },
                    }}
                    transition={transition}
                  >
                    <Image
                      src={imgs[1]}
                      alt="project image"
                      width={600}
                      height={600}
                      className="rounded-xl  w-[26vw] max-w-[420px] h-auto"
                    />
                  </motion.div>

                  {/* CENTER */}
                  <motion.div
                    variants={{
                      rest: {
                        scale: 1,
                        x: 0,
                        zIndex: 3,
                        opacity: 1,
                      },
                      hover: {
                        scale: 1,
                        x: 0,
                        zIndex: 3,
                        opacity: 1,
                      },
                    }}
                    transition={transition}
                  >
                    <Image
                      src={imgs[0]}
                      alt="project image"
                      width={600}
                      height={600}
                      className="rounded-xl  w-[26vw] max-w-[420px] h-auto"
                    />
                  </motion.div>

                  {/* RIGHT */}
                  <motion.div
                    variants={{
                      rest: {
                        scale: 0.85,
                        x: -120,
                        zIndex: 1,
                        opacity: 0.75,
                      },
                      hover: {
                        scale: 1,
                        x: 0,
                        zIndex: 1,
                        opacity: 1,
                      },
                    }}
                    transition={transition}
                  >
                    <Image
                      src={imgs[2]}
                      alt="project image"
                      width={600}
                      height={600}
                      className="rounded-xl  w-[26vw] max-w-[420px] h-auto"
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* Mobile */}
              <div className="flex flex-col gap-4 md:hidden items-center">
                {imgs.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ...transition, delay: i * 0.04 }}
                    className="w-full flex justify-center"
                  >
                    <Image
                      src={img}
                      alt={`project image ${i + 1}`}
                      width={800}
                      height={600}
                      className="rounded-xl  w-full max-w-sm h-auto"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile navigation */}
        <div className="flex mb-8 justify-center gap-6 ">
          <NavButton onClick={prevProject}>
            <MoveLeft size={20} />
          </NavButton>
          <NavButton onClick={nextProject}>
            <MoveRight size={20} />
          </NavButton>
        </div>

        {/* Desktop navigation */}
        {/* <div className="hidden md:flex gap-6">
          <NavButton onClick={prevProject}>
            <MoveLeft size={28} />
          </NavButton>
          <NavButton onClick={nextProject}>
            <MoveRight size={28} />
          </NavButton>
        </div> */}

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
          <Section title="LE PROJET">
            {project.description}
          </Section>

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
