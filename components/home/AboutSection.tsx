"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const aboutNotes = [
  {
    label: "Ecoute",
    className: "left-3 top-6 -rotate-6 sm:left-8 lg:-left-7 lg:top-10",
  },
  {
    label: "Design",
    className: "right-3 top-1/3 rotate-6 sm:right-8 lg:-right-8",
  },
  {
    label: "Code",
    className: "bottom-12 left-6 rotate-3 sm:left-12 lg:-left-5",
  },
  {
    label: "Suivi",
    className: "bottom-5 right-5 -rotate-4 sm:right-10 lg:right-6",
  },
];

export default function AboutSection() {
  return (
    <section className="about-stage relative overflow-hidden bg-[#7FA3A1] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="wall-marquee absolute top-8 flex whitespace-nowrap font-bold font-momo text-[13vw] leading-none text-white/10">
        <span>CLARA + ALEX - CLARA + ALEX - </span>
        <span>CLARA + ALEX - CLARA + ALEX - </span>
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="reveal relative"
          whileHover={{ rotate: -1.5, y: -8 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
        >
          <div className="float-item absolute -inset-4 rotate-3 rounded-md border border-white/24" />
          <div className="about-portrait relative aspect-[4/5] overflow-hidden rounded-md bg-[#EBE9E4] shadow-2xl shadow-[#333333]/18">
            <Image
              src="/images/team/about_us.png"
              alt="Clara et Alex, le duo Atelier Voisin"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <Image
            src="/images/team/alex_pixel-speech-bubble.png"
            alt=""
            width={118}
            height={118}
            className="about-pop about-drift pointer-events-none absolute left-[10%] top-[25%] z-20 w-20 sm:w-24 lg:w-28"
          />
          <Image
            src="/images/team/clara_pixel-speech-bubble.png"
            alt=""
            width={104}
            height={104}
            className="about-pop about-drift pointer-events-none absolute right-[8%] top-[38%] z-20 w-16 sm:w-20 lg:w-24"
          />
          {aboutNotes.map((note) => (
            <span
              key={note.label}
              className={`about-pop about-drift absolute z-20 rounded-full border border-white/24 bg-[#EBE9E4] px-4 py-2 text-sm font-semibold text-[#C87056] shadow-lg shadow-[#333333]/10 ${note.className}`}
            >
              {note.label}
            </span>
          ))}
        </motion.div>

        <div className="reveal relative z-10">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#F2CC8F]">
            Atelier
          </p>
          <h2 className="font-momo text-5xl leading-none sm:text-7xl">
            Deux profils, une même attention au détail.
          </h2>
          <div className="mt-10 space-y-6 text-white/82">
            <p className="text-lg leading-relaxed">
              Clara, designeuse UX/UI, et Alex, développeur full-stack, ont
              travaillé plusieurs années dans des environnements exigeants à
              Paris et Amsterdam avant de revenir à Bordeaux.
            </p>
            <p className="text-lg leading-relaxed">
              L&apos;Atelier Voisin est né de cette envie: faire du digital
              quelque chose de plus lisible, plus humain et plus facile à gérer
              pour les organisations, équipes et indépendants qui veulent des
              outils clairs, utiles et faciles à faire évoluer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
