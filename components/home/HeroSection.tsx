"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const navbar = document.getElementById("site-navbar");
    if (!navbar || !sectionRef.current) return;

    gsap.set(navbar, {
      opacity: 0,
      y: -16,
      pointerEvents: "none",
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "bottom top+=200",
      onEnter: () => {
        setShowScrollHint(false);
        gsap.to(navbar, {
          opacity: 1,
          y: 0,
          duration: 0.25,
          ease: "power2.out",
          pointerEvents: "auto",
        });
      },
      onLeaveBack: () => {
        setShowScrollHint(true);
        gsap.to(navbar, {
          opacity: 0,
          y: -16,
          duration: 0.2,
          ease: "power2.in",
          pointerEvents: "none",
        });
      },
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex flex-col items-center justify-center
                 bg-hero bg-cover bg-center px-6"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src="/logo-mini.svg"
          width={160}
          height={100}
          alt="Atelier Voisin Logo"
          priority
        />
      </motion.div>

      {/* Scroll invite */}
      <AnimatePresence>
        {showScrollHint && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-8 flex flex-col items-center gap-3"
          >
            <span className="text-xs uppercase tracking-widest text-white/70">
              Scroll
            </span>

            {/* Mouse outline */}
            <div className="w-5 h-8 rounded-full border border-white/50 flex justify-center pt-1">
              <motion.div
                className="w-1 h-1.5 rounded-full bg-white"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
