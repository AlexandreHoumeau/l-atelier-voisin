'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPinned(!entry.isIntersecting)
      },
      { threshold: 0.5 }
    )

    const section = document.getElementById('hero')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center gap-8 h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
    >
      <motion.div
        layout
        className={`transition-all duration-300 ${
          pinned
            ? 'fixed -top-3 z-50 transform scale-50'
            : 'static'
        }`}
      >
        <Image
          src="/logo-mini.svg"
          width={160}
          height={100}
          alt="Atelier Voisin Logo"
        />
      </motion.div>

      {!pinned && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-2xl font-lexend text-white max-w-xl">
            Votre agence web de quartier à Bordeaux.
          </p>
        </motion.div>
      )}
    </section>
  )
}
