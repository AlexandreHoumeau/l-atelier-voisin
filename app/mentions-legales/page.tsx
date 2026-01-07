import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions légales — L’Atelier voisin",
    description:
        "Mentions légales du site L’Atelier voisin.",
};

export default function MentionsLegalesPage() {
    return (
        <main className="bg-[#FBE8D8] min-h-screen pt-20 px-6 sm:px-10 lg:px-20 py-16">
            <div className="max-w-4xl mx-auto text-[#C87056]">
                <h1 className="text-2xl sm:text-4xl font-semibold mb-10">
                    Mentions légales
                </h1>

                <section className="space-y-10 leading-relaxed">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">
                            1. Éditeur du site
                        </h2>
                        <p>
                            Le présent site est édité par :
                        </p>
                        <p className="mt-2">
                            <strong>L’Atelier voisin</strong><br />
                            Bordeaux, France
                        </p>
                        <p className="mt-2">
                            Email :{" "}
                            <a
                                href="mailto:contact@atelier-voisin.fr"
                                className="underline"
                            >
                                contact@atelier-voisin.fr
                            </a>
                        </p>
                        <p className="mt-2 italic text-sm">
                            Le numéro SIREN sera communiqué ultérieurement.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">
                            2. Directeur de la publication
                        </h2>
                        <p>
                            Le directeur de la publication est <strong>L’Atelier voisin</strong>.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">
                            3. Hébergement
                        </h2>
                        <p>
                            Le site est hébergé par :
                        </p>
                        <p className="mt-2">
                            <strong>Vercel Inc.</strong><br />
                            340 S Lemon Ave #4133<br />
                            Walnut, CA 91789<br />
                            États-Unis
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">
                            4. Propriété intellectuelle
                        </h2>
                        <p>
                            L’ensemble du contenu du site (textes, images, graphismes, logo,
                            icônes, structure, code) est la propriété exclusive de
                            L’Atelier voisin, sauf mentions contraires.
                        </p>
                        <p className="mt-2">
                            Toute reproduction, représentation, modification ou adaptation,
                            totale ou partielle, est interdite sans autorisation préalable
                            écrite.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">
                            5. Responsabilité
                        </h2>
                        <p>
                            L’Atelier voisin s’efforce de fournir des informations exactes et
                            mises à jour. Toutefois, aucune garantie n’est donnée quant à
                            l’exactitude, la complétude ou l’actualité des informations
                            publiées.
                        </p>
                        <p className="mt-2">
                            L’éditeur ne pourra être tenu responsable des dommages directs ou
                            indirects liés à l’utilisation du site.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">
                            6. Données personnelles
                        </h2>
                        <p>
                            Les données personnelles collectées via le site sont traitées
                            conformément à notre{" "}
                            <a href="/politique-de-confidentialite" className="underline">
                                politique de confidentialité
                            </a>
                            .
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">
                            7. Droit applicable
                        </h2>
                        <p>
                            Le présent site est régi par le droit français. En cas de litige,
                            et à défaut de résolution amiable, les tribunaux français seront
                            compétents.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
