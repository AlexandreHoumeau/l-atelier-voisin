'use client'

import projects from "@/types/project";
import { motion, Transition } from "framer-motion";
import { ExternalLink, MoveLeft, MoveRight } from 'lucide-react';
import Image from "next/image";
import { useState } from "react";
import Button from "../ui/Button";

export default function ProjectsSections() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const imgs = projects[activeProjectIndex].photos;

  const transition: Transition = { duration: 0.8, type: "spring" };

  const nextProject = () => {
    setActiveProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div
      id="projects"
      className="px-4 flex h-full justify-center sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-24"
    >
      <div className="flex flex-col items-center">

        {/* Titles */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center">
          {projects[activeProjectIndex].title}
        </h2>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white text-center md:mt-2">
          {projects[activeProjectIndex].subtitle}
        </h3>

        {/* Images stage */}
        <div className="relative w-full max-w-3xs lg:max-w-6xl xl:max-w-7xl flex items-center justify-center lg:mt-12">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ x: 0, scale: 0.9, opacity: 0.6 }}
            whileInView={{ x: "-60%", scale: 1, opacity: 1 }}
            transition={transition}
            className="absolute cursor-pointer hidden md:block"
          >
            <Image
              src={imgs[1]}
              alt="center project"
              width={400}
              height={400}
              className="rounded-xl shadow-2xl w-auto h-auto"
            />

          </motion.div>

          {/* CENTER IMAGE */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1.15, opacity: 1 }}
            transition={transition}
            className="cursor-pointer z-20"
          >
            <Image
              src={imgs[0]}
              alt="center project"
              width={400}
              height={400}
              className="rounded-xl shadow-2xl w-auto h-auto"
            />

          </motion.div>
          <motion.div
            initial={{ x: 0, scale: 0.9, opacity: 0.6 }}
            whileInView={{ x: "60%", scale: 1, opacity: 1 }}
            transition={transition}
            className="absolute cursor-pointer hidden md:block"
          >
            <Image
              src={imgs[2]}
              alt="center project"
              width={400}
              height={400}
              className="rounded-xl shadow-2xl w-auto h-auto"
            />

          </motion.div>

        </div>
        {/* Navigation for mobile */}
        <div className="flex mb-8 justify-center gap-2 md:hidden">
          <motion.button
            className="border-white border-2 p-2 rounded-full shadow-lg"
            onClick={prevProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MoveLeft size={18} className="text-white" />
          </motion.button>

          <motion.button
            className="border-white border-2 p-2 rounded-full shadow-lg"
            onClick={nextProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MoveRight size={18} className="text-white" />
          </motion.button>
        </div>
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto md:mt-24">
          <div>
            <h4 className="text-white font-bold text-2xl mb-3">LE PROJET</h4>
            <p className="text-white text-lg leading-relaxed">
              {projects[activeProjectIndex].description}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-2xl mb-3">
              L’AVIS DE NOS CLIENTS
            </h4>
            <p className="text-white text-lg leading-relaxed">
              {projects[activeProjectIndex].review.quote}
            </p>
            <p className="text-white text-lg mt-3 italic">
              – {projects[activeProjectIndex].review.author}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-2xl mb-3">
              LE SITE EN LIGNE
            </h4>
            <p className="text-white text-lg leading-relaxed">
              Pour une meilleure expérience, vous pouvez accéder à l’entièreté
              du site en cliquant sur ce bouton.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button
                className="bg-white flex mt-6 p-10 text-[#E07A5F]"
                onClick={() =>
                  window.open(
                    projects[activeProjectIndex].website,
                    "_blank"
                  )
                }
                icon={() => <ExternalLink size={22} />}
              >
                <span className="ml-2 font-bold text-xl">
                  VOIR LE SITE
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="gap-6 mt-4 hidden md:flex md:mt-16">
          <motion.button
            className="border-white border-2 p-4 rounded-full shadow-lg"
            onClick={prevProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MoveLeft size={28} className="text-white" />
          </motion.button>

          <motion.button
            className="border-white border-2 p-4 rounded-full shadow-lg"
            onClick={nextProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MoveRight size={28} className="text-white" />
          </motion.button>
        </div>

      </div>
    </div>
  );
}
