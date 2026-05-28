"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";

const introWords = ["fluide", "clair", "précis"];

export default function IntroReveal() {
  const [done, setDone] = useState(false);

  if (done) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden text-[#EBE9E4]"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.9, delay: 3.2, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setDone(true)}
    >
      <motion.div
        className="absolute inset-0 bg-[#7FA3A1]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.45, delay: 1.72, ease: "easeOut" }}
      />
      <div className="relative flex h-44 w-full items-center justify-center px-6">
        {introWords.map((word, index) => (
          <motion.p
            key={word}
            className="absolute font-momo text-[clamp(3.4rem,10vw,9rem)] leading-none"
            initial={{ opacity: 0, y: 60, rotate: -3 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [60, 0, 0, -54],
              rotate: [-3, 0, 0, 3],
            }}
            transition={{
              duration: 0.78,
              delay: index * 0.52,
              times: [0, 0.2, 0.72, 1],
              ease: "easeOut",
            }}
          >
            {word}
          </motion.p>
        ))}

        <motion.div
          className="absolute flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 50, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logo className="h-16 w-auto sm:h-20 [&_*]:fill-[#EBE9E4]" />
          <p className="font-momo text-[clamp(3rem,8vw,7rem)] leading-none text-[#EBE9E4]">
            atelier voisin
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
