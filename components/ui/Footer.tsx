import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#7FA3A1] text-[#FBE8D8] px-6 sm:px-10 lg:px-20 pt-16 pb-8">
            <div className="max-w-7xl mx-auto">

                {/* TOP */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* BRAND */}
                    <div>
                        <h3 className="font-momo text-2xl mb-4">
                            L’Atelier voisin
                        </h3>
                        <p className="text-sm leading-relaxed text-[#FBE8D8]/90">
                            Agence web basée à Bordeaux.
                            Nous concevons des sites clairs, performants et humains,
                            pensés pour durer.
                        </p>
                    </div>

                    {/* NAV */}
                    {/* <nav>
                        <h4 className="uppercase text-xs tracking-wider mb-4 text-[#FBE8D8]/70">
                            Navigation
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/" className="hover:underline">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:underline">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/projets" className="hover:underline">
                                    Projets
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav> */}

                    {/* CONTACT */}
                    <div>
                        <h4 className="uppercase text-xs tracking-wider mb-4 text-[#FBE8D8]/70">
                            Contact
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="mailto:contact@atelier-voisin.fr"
                                    className="hover:underline"
                                >
                                    contact@atelier-voisin.fr
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+33651448027"
                                    className="hover:underline"
                                >
                                    +33 6 51 44 80 27
                                </a>
                            </li>
                            <li className="text-[#FBE8D8]/90">
                                Bordeaux, France
                            </li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="border-t border-[#FBE8D8]/20 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-[#FBE8D8]/70">
                    <p>
                        © {new Date().getFullYear()} L’Atelier voisin — Tous droits réservés
                    </p>
                    <div className="flex gap-6">
                        <Link href="/mentions-legales" className="hover:underline">
                            Mentions légales
                        </Link>
                        <Link href="/politique-de-confidentialite" className="hover:underline">
                            Confidentialité
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
