"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function ContactSection() {
    return (
        <div className="px-10 pt-58 grid md:grid-cols-3 items-start">
            <div className="">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-semibold text-[#C87056] mb-8"
                >
                    Discutons ensemble
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="flex items-start space-x-4">
                        <Mail className="w-7 h-7 text-[#C87056]" />

                        <div>
                            <p className="font-semibold text-[#C87056]">Écrivez nous</p>
                            <p className="text-[#C87056]">atelier-voisin@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <MapPin className="w-7 h-7 text-[#C87056]" />

                        <div>
                            <p className="font-semibold text-[#C87056]">Trouvez nous</p>
                            <p className="text-[#C87056]">Rue Rose, Bordeaux</p>
                        </div>
                    </div>
                </motion.div>

            </div>

            <div className="col-span-2 max-w-2xl">
                <motion.form
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-white p-10 rounded-xl shadow-lg space-y-10"
                >
                    <div className="space-y-2">
                        <label className="text-[#C87056] text-sm">Votre nom</label>
                        <input
                            type="text"
                            className="w-full border-b border-[#C87056] focus:outline-none py-1"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[#C87056] text-sm">Votre email</label>
                        <input
                            type="email"
                            className="w-full border-b border-[#C87056] focus:outline-none py-1"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[#C87056] text-sm">Votre message</label>
                        <textarea
                            rows={4}
                            className="w-full border-b border-[#C87056] focus:outline-none py-1 resize-none"
                        ></textarea>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="mx-auto block bg-[#D07C60] text-white font-semibold px-12 py-3 rounded-full"
                    >
                        ENVOYER
                    </motion.button>
                </motion.form>
            </div>
        </div>
    );
}
