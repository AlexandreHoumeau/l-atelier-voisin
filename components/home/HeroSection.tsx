"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
        gsap.to(navbar, {
          opacity: 1,
          y: 0,
          duration: 0.25,
          ease: "power2.out",
          pointerEvents: "auto",
        });
      },
      onLeaveBack: () => {
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
      className="h-screen flex flex-col items-center justify-center
                 bg-hero bg-cover bg-center px-6"
    >
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
    </section>
  );
}
