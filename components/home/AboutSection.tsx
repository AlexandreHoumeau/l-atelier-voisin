"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <div className="pt-48 px-10">
            <div>
                {/* Title Reveal */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-semibold text-white pb-10"
                >
                    Le duo derrière l’Atelier voisin
                </motion.h2>

                <div className="grid md:grid-cols-2 items-start max-w-7xl gap-10 mx-auto">
                    {/* IMAGE WITH COOL ANIMATIONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        whileHover={{
                            scale: 1.03,
                            rotate: -1,
                            transition: { type: "spring", stiffness: 150 },
                        }}
                        viewport={{ once: true }}
                        className=""
                    >
                        <motion.div
                            animate={{
                                y: [0, -6, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 6,
                                ease: "easeInOut",
                            }}
                            className="overflow-hidden rounded-3xl shadow-xl"
                        >
                            <motion.div
                                initial={{ clipPath: "inset(0 0 100% 0)" }}
                                whileInView={{
                                    clipPath: "inset(0 0 0% 0)",
                                }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src="/images/team/about_us.png"
                                    alt="Le duo derrière l’Atelier voisin"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* TEXT BLOCK WITH STAGGERED REVEAL */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.25,
                                },
                            },
                        }}
                        className="text-white leading-relaxed space-y-10"
                    >
                        {/* BLOCK 1 */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: 40 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <h3 className="font-semibold text-xl mb-2">
                                Deux parcours complémentaires
                            </h3>
                            <p>
                                Clara, designeuse UX/UI et Alex, développeur full-stack depuis 6 ans.
                                Nous avons tous les deux acquis notre expérience au sein de grandes
                                entreprises à Paris et Amsterdam. Pendant plusieurs années, nous avons
                                travaillé sur des projets d’envergure, collaborant avec des équipes
                                internationales et développant une expertise solide dans nos domaines
                                respectifs.
                            </p>
                        </motion.div>

                        {/* BLOCK 2 */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: 40 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <h3 className="font-semibold text-xl mb-2">
                                L’Atelier voisin est né d’un retour à Bordeaux
                            </h3>
                            <p>
                                En rentrant vivre dans notre ville d’origine, nous nous sommes réunis
                                autour d’une envie simple : faire du digital quelque chose de plus humain
                                et accessible. Nous avons créé une agence web, pensée pour les entreprises
                                et particuliers qui veulent un site fiable, clair et facile à gérer, sans
                                jargon, sans complications inutiles.
                            </p>
                        </motion.div>

                        {/* FINAL SENTENCE */}
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, x: 40 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="font-semibold text-xl"
                        >
                            On vous écoute, on vous accompagne, on vous explique chaque étape !
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
