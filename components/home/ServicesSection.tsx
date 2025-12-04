import { CircleCheck, CircleX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesPage() {
    const cardVariants: any = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const listContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12
            }
        }
    };

    const listItem = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
    };

    return (
        <div className="pt-36">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-10">
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-10 shadow-lg"
                    >
                        <h2 className="text-2xl font-semibold">Formule essentielle</h2>
                        <p className="text-md font-light text-gray-600 mb-8">Pour démarrer en ligne</p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Le minimum vital pour exister sur le web.
                            Un site simple, efficace et professionnel qui présente votre activité.
                        </p>

                        <h3 className="font-semibold mb-4">Ce qu’on propose :</h3>
                        <motion.ul
                            variants={listContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-gray-700"
                        >
                            {[
                                "Design sur mesure",
                                "3 à 5 pages (Accueil, Services, À propos, Contact)",
                                "Responsive (mobile, tablette, desktop)",
                                "Formulaire de contact",
                                "Optimisation SEO de base"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    variants={listItem}
                                    className="flex items-center gap-2"
                                >
                                    <span className="text-yellow-500"><CircleCheck size={16} /></span> {item}
                                </motion.li>
                            ))}

                            {[
                                "Base de donnée intégrée",
                                "Sécurisation des données",
                                "Analytics de votre site web",
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    variants={listItem}
                                    className="flex items-center gap-3 opacity-50 line-through"
                                >
                                    <span className="text-gray-400"><CircleX size={16} /></span> {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* PREMIUM CARD */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-10 shadow-lg"
                    >
                        <h2 className="text-2xl font-semibold">Formule premium</h2>
                        <p className="text-md font-light text-gray-600 mb-8">Pour démarrer en ligne</p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Un site sur-mesure et personnalisable une fois en ligne.
                            Idéal pour les entreprises qui veulent vraiment marquer leur présence en ligne.
                        </p>

                        <h3 className="font-semibold mb-4">Ce qu’on propose :</h3>

                        <motion.ul
                            variants={listContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-gray-700"
                        >
                            {[
                                "Design sur mesure",
                                "Nombre de page illimité",
                                "Responsive (mobile, tablette, desktop)",
                                "Formulaire de contact",
                                "SEO complet",
                                "Base de donnée intégrée",
                                "Sécurisation des données",
                                "Analytics de votre site web",
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    variants={listItem}
                                    className="flex items-center gap-3"
                                >
                                    <span className="text-yellow-500"><CircleCheck size={16} /></span> {item}
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.p
                            variants={listItem}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="font-semibold mt-4"
                        >
                            Le plus de cette formule : vous gardez la main !
                        </motion.p>

                        <motion.p
                            variants={listItem}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-gray-700 leading-relaxed"
                        >
                            Avec un accès personnalisé à votre espace d’administration,
                            vous pourrez modifier vos contenus quand vous le souhaitez
                            sans dépendre de nous pour chaque petite mise à jour.
                        </motion.p>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
