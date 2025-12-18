"use client";

import { motion, Variants } from "framer-motion";
import { MessageCircle, MapPinned, Phone } from "lucide-react";

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function ContactSection() {
    return (
        <section className="min-h-screen bg-[#FBE8D8] flex items-center justify-center px-6 sm:px-10 lg:px-20 py-20">
            <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-start gap-12 lg:gap-24">

                {/* LEFT — CONTACT INFO */}
                <div className="w-full lg:max-w-lg">
                    <motion.h2
                        variants={item}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-xl sm:text-4xl lg:text-5xl font-semibold text-[#C87056] mb-10"
                    >
                        Contactez-nous
                    </motion.h2>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        {[
                            {
                                icon: MessageCircle,
                                title: "Par email",
                                text: "Vous pouvez nous contacter par email et nous nous ferons un plaisir de vous répondre.",
                                value: "contact@atelier-voisin.fr",
                            },
                            {
                                icon: MapPinned,
                                title: "Rendez-nous visite",
                                text: "Venez dire bonjour à l'atelier !",
                                value: "4 rue Rose, Bordeaux 33300",
                            },
                            {
                                icon: Phone,
                                title: "Appelez-nous",
                                text: "Du lundi au vendredi de 9h à 18h",
                                value: "+33 6 51 44 80 27",
                            },
                        ].map(({ icon: Icon, title, text, value }) => (
                            <motion.div
                                key={title}
                                variants={item}
                                className="flex items-start gap-4"
                            >
                                <div className="border-2 border-[#C87056] rounded p-2 shrink-0">
                                    <Icon className="w-5 h-5 text-[#C87056]" />
                                </div>
                                <div>
                                    <h3 className="text-xl text-[#C87056]">{title}</h3>
                                    <p className="font-light mb-2">{text}</p>
                                    <p className="underline break-words">{value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* RIGHT — FORM */}
                <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl w-full lg:max-w-2xl">
                    <motion.h2
                        variants={item}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-lg sm:text-3xl lg:text-4xl font-semibold text-[#C87056]"
                    >
                        Vous avez un projet en tête ?
                        Nous avons les compétences pour le réaliser.
                    </motion.h2>

                    <motion.p
                        variants={item}
                        className="text-[#C87056]s mt-4"
                    >
                        Dites-nous en plus sur vous et ce que vous avez en tête.
                    </motion.p>

                    <motion.form
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        onSubmit={(e) => e.preventDefault()}
                        className="mt-8 space-y-6"
                    >
                        {[
                            { label: "Votre nom", type: "text" },
                            { label: "Votre email", type: "email" },
                            { label: "Votre message", type: "textarea", rows: 4 },
                        ].map((field) => (
                            <motion.div
                                variants={item}
                                key={field.label}
                                className="space-y-2"
                            >
                                <label className="text-[#C87056] text-sm">
                                    {field.label}
                                </label>
                                {field.type === "textarea" ? (
                                    <textarea
                                        rows={field.rows}
                                        className="w-full border-b border-[#C87056] focus:outline-none py-1 resize-none"
                                    />
                                ) : (
                                    <input
                                        type={field.type}
                                        className="w-full border-b border-[#C87056] focus:outline-none py-1"
                                    />
                                )}
                            </motion.div>
                        ))}

                        <motion.p
                            variants={item}
                            className="text-[#C87056] text-center italic"
                        >
                            Nous vous répondrons dans les plus brefs délais.
                        </motion.p>

                        <motion.button
                            variants={item}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            className="w-full bg-black text-white font-semibold px-12 py-3 rounded-lg"
                        >
                            ENVOYER
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
