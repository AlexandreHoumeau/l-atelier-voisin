"use client";

import { motion } from "framer-motion";
import ServiceList from "./ServiceList";
import { automationProblems, automationSolutions, capabilities, formulas, pillars } from "./servicesData";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F2CC8F] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="wall-marquee mb-10 flex whitespace-nowrap font-momo font-bold text-[13vw] leading-none text-[#C87056]/16">
        <span>SERVICES - SITES - OUTILS - WORKFLOWS - </span>
        <span>SERVICES - SITES - OUTILS - WORKFLOWS - </span>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="">
          <div className="reveal">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#C87056]">
            Services
            </p>
            <h2 className="font-momo text-5xl leading-none sm:text-7xl">
              Créer, connecter, automatiser.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <motion.article
              key={pillar.title}
              className="reveal rounded-md border border-[#C87056]/14 bg-white p-6 shadow-sm"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <h3 className="font-momo text-4xl text-[#C87056]">
                {pillar.title}
              </h3>
              <p className="mt-4 leading-relaxed text-[#333333]/70">
                {pillar.text}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="reveal mt-12 flex flex-wrap gap-3">
          {capabilities.map((item, index) => (
            <motion.span
              key={item}
              className="rounded-full border border-[#C87056]/18 bg-white/46 px-5 py-3 text-sm text-[#C87056] shadow-sm"
              whileHover={{
                y: -8,
                rotate: index % 2 === 0 ? -3 : 3,
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
            >
              {item}
            </motion.span>
          ))}
        </div>

        <div className="mt-16 grid gap-7 lg:grid-cols-2">
          {formulas.map((formula, index) => (
            <motion.article
              key={formula.name}
              className="reveal relative min-h-[620px] overflow-hidden rounded-md border border-[#C87056]/14 bg-white p-8 shadow-2xl shadow-[#C87056]/10 md:p-12"
              whileHover={{ y: -14, rotateY: index === 0 ? -5 : 5, rotateX: 4 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <div className="mb-3 flex flex-col items-start gap-3 sm:flex-row sm:justify-between">
                <p className="text-sm uppercase tracking-[0.22em] text-[#C87056]">
                  {formula.name}
                </p>
                {index === 1 && (
                  <span className="shrink-0 rounded-full bg-[#C87056] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                    Personnalisée
                  </span>
                )}
              </div>
              <h3 className="font-momo text-4xl leading-none">{formula.title}</h3>
              <p className="mt-6 max-w-xl leading-relaxed text-[#333333]/70">
                {formula.text}
              </p>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <ServiceList title="Inclus" items={formula.included} active />
                <ServiceList
                  title={formula.excluded.length > 0 ? "Non inclus" : "En plus"}
                  items={
                    formula.excluded.length > 0
                      ? formula.excluded
                      : ["Formation à la prise en main", "Accompagnement après lancement"]
                  }
                  active={formula.excluded.length === 0}
                />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#C87056]">
              Automatisation
            </p>
            <h2 className="font-momo mb-10 text-5xl leading-none sm:text-7xl">
              Automatisez vos demandes, relances et workflows.
            </h2>
          </div>
          <div className="reveal self-end">
            <p className="max-w-2xl text-xl leading-relaxed text-[#333333]/72">
              Des systèmes simples pour centraliser vos informations, gagner du
              temps et ne plus laisser passer d&apos;opportunités.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-[#333333]/62">
              Pour les indépendants, associations, PME, équipes internes,
              agences, organismes de formation, prestataires de services et
              organisations qui veulent structurer leurs outils.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          <section className="reveal rounded-md border border-[#C87056]/14 bg-white/58 p-8 md:p-10">
            <h3 className="font-momo text-4xl text-[#C87056]">
              Ce qui ralentit
            </h3>
            <ServiceList title="Problèmes fréquents" items={automationProblems} active />
          </section>
          <section className="reveal rounded-md border border-[#C87056]/14 bg-white p-8 md:p-10">
            <h3 className="font-momo text-4xl text-[#C87056]">
              Ce qu&apos;on met en place
            </h3>
            <ServiceList title="Solutions possibles" items={automationSolutions} active />
          </section>
        </div>

        {/* <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {automationOffers.map((offer) => (
            <motion.article
              key={offer.name}
              className="reveal rounded-md border border-[#C87056]/14 bg-white p-8 shadow-2xl shadow-[#C87056]/10"
              whileHover={{ y: -12, rotateX: 3 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[#C87056]">
                {offer.name}
              </p>
              <h3 className="font-momo text-4xl leading-none">{offer.title}</h3>
              <p className="mt-6 leading-relaxed text-[#333333]/70">
                {offer.text}
              </p>
              <div className="mt-8">
                <ServiceList title="Inclus" items={offer.included} active />
              </div>
            </motion.article>
          ))}
        </div> */}
      </div>
    </section>
  );
}
