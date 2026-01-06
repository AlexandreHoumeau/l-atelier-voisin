"use client";

import { CircleCheck, CircleX } from "lucide-react";
import { motion, Variants } from "framer-motion";

const card: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const list: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, x: 12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function ServicesPage() {
  return (
    <section className="min-h-screen flex items-center bg-[#F2CC8F] py-24 px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-momo text-white mb-4">
            Des formules claires, sans surprise
          </h2>
          <p className="text-white text-lg">
            Que vous ayez besoin d’un site simple ou d’un outil évolutif,
            nous concevons une solution adaptée — sans jargon, sans usine à gaz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* ESSENTIAL */}
          <motion.div
            custom={0}
            variants={card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white backdrop-blur rounded-3xl p-10 shadow-md"
          >
            <h3 className="text-sm uppercase tracking-wide text-[#C87056] mb-2">
              Formule essentielle
            </h3>
            <h4 className="text-2xl font-semibold mb-4">
              L’essentiel pour exister
            </h4>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Un site clair et professionnel pour présenter votre activité,
              inspirer confiance et être contacté facilement.
            </p>

            <motion.ul
              variants={list}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 text-gray-700"
            >
              {[
                "Design sur mesure",
                "3 à 5 pages",
                "Responsive",
                "Formulaire de contact",
                "SEO de base",
              ].map((t) => (
                <motion.li
                  key={t}
                  variants={item}
                  className="flex items-start gap-3"
                >
                  <CircleCheck size={16} className="mt-1 text-[#C87056]" />
                  <p>{t}</p>
                </motion.li>
              ))}

              {[
                "Base de données",
                "Analytics",
                "Sécurisation avancée",
              ].map((t) => (
                <motion.li
                  key={t}
                  variants={item}
                  className="flex items-start gap-3 opacity-40"
                >
                  <CircleX size={16} className="mt-1" />
                  <p>{t}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* PREMIUM */}
          <motion.div
            custom={1}
            variants={card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              relative bg-white rounded-3xl p-10 shadow-xl
              border-2 border-[#C87056]
              scale-[1.03]
            "
          >
            {/* Badge */}
            <p className="absolute -top-4 left-8 bg-[#C87056] text-white text-xs px-4 py-1 rounded-full">
              Personnalisée
            </p>

            <h3 className="text-sm uppercase tracking-wide text-[#C87056] mb-2">
              Formule premium
            </h3>
            <h4 className="text-2xl font-semibold mb-4">
              Un vrai outil de travail
            </h4>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Un site évolutif, performant et administrable,
              pensé pour accompagner la croissance de votre activité.
            </p>

            <motion.ul
              variants={list}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 text-gray-700 mb-8"
            >
              {[
                "Design sur mesure",
                "Pages illimitées",
                "Responsive",
                "SEO avancé",
                "Base de données",
                "Sécurisation des données",
                "Analytics",
                "Espace d’administration",
              ].map((t) => (
                <motion.li
                  key={t}
                  variants={item}
                  className="flex items-start gap-3"
                >
                  <CircleCheck size={16} className="mt-1 text-[#C87056]" />
                  <p>{t}</p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-semibold mb-2"
            >
              Vous êtes autonome
            </motion.p>
            <motion.p
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed"
            >
              Vous gérez vos contenus quand vous le souhaitez,
              sans dépendre d’un prestataire pour chaque modification.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
