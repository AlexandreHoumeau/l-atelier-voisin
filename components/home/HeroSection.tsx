'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const yMotion = useTransform(scrollY, [0, 300], [0, -20]) // effet parallax léger

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <motion.div
        className="flex-shrink-0 w-40 h-40 md:w-96 md:h-96 bg-black rounded-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
      >
        <motion.div
          style={{ y: yMotion }}
          className="flex-shrink-0 w-40 h-40 md:w-96 md:h-96 bg-black rounded-3xl"
          initial={{ y: 0 }}
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Texte à droite avec reveal */}
      <div className="flex flex-col gap-3 md:gap-4 max-w-xl text-center md:text-left">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Le digital, sans le jargon.
        </motion.h1>
        <motion.p
          className="text-md md:text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Votre agence web de quartier à Bordeaux.
        </motion.p>
      </div>

    </section>
  )
}
