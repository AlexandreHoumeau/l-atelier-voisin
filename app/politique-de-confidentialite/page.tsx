import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — L’Atelier voisin",
  description:
    "Politique de confidentialité et protection des données personnelles de L’Atelier voisin.",
};

export default function PolitiqueDeConfidentialitePage() {
  return (
    <main className="bg-[#FBE8D8] min-h-screen px-6 sm:px-10 lg:px-20 py-16 pt-20">
      <div className="max-w-4xl mx-auto text-[#C87056]">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-10">
          Politique de confidentialité
        </h1>

        <p className="mb-8 text-sm italic">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>

        <section className="space-y-10 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              1. Responsable du traitement
            </h2>
            <p>
              Les données personnelles collectées sur ce site sont traitées par
              <strong> L’Atelier voisin</strong>, basé à Bordeaux (France).
            </p>
            <p>
              Pour toute question relative à la protection des données, vous
              pouvez nous contacter à l’adresse suivante :{" "}
              <a
                href="mailto:contact@atelier-voisin.fr"
                className="underline"
              >
                contact@atelier-voisin.fr
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Données collectées
            </h2>
            <p>
              Nous collectons uniquement les données nécessaires lorsque vous
              utilisez notre formulaire de contact :
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Nom</li>
              <li>Adresse email</li>
              <li>Contenu du message</li>
            </ul>
            <p className="mt-2">
              Aucune donnée sensible n’est demandée ou collectée.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. Finalité du traitement
            </h2>
            <p>
              Les données collectées ont pour seule finalité :
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Répondre à vos demandes de contact</li>
              <li>Échanger dans le cadre d’un projet ou d’une collaboration</li>
            </ul>
            <p className="mt-2">
              Vos données ne sont jamais vendues, louées ou transmises à des
              tiers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. Durée de conservation
            </h2>
            <p>
              Les données issues du formulaire de contact sont conservées pour
              une durée maximale de <strong>12 mois</strong>, sauf demande de
              suppression anticipée de votre part.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Destinataires des données
            </h2>
            <p>
              Les données collectées sont accessibles uniquement par les membres
              de L’Atelier voisin et ne sont partagées avec aucun tiers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              6. Sécurité
            </h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées afin de garantir la sécurité de vos données
              personnelles et de prévenir tout accès non autorisé, perte ou
              divulgation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              7. Vos droits
            </h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Droit d’accès</li>
              <li>Droit de rectification</li>
              <li>Droit à la suppression</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d’opposition</li>
            </ul>
            <p className="mt-2">
              Pour exercer ces droits, il vous suffit de nous contacter à
              l’adresse suivante :{" "}
              <a
                href="mailto:contact@atelier-voisin.fr"
                className="underline"
              >
                contact@atelier-voisin.fr
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              8. Cookies
            </h2>
            <p>
              Ce site n’utilise pas de cookies à des fins publicitaires ou de
              suivi marketing.  
              Des outils de mesure d’audience anonymes peuvent être utilisés,
              dans le respect de la réglementation en vigueur.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              9. Modification de la politique
            </h2>
            <p>
              Cette politique de confidentialité peut être modifiée à tout
              moment afin de rester conforme aux évolutions légales ou
              techniques. La date de mise à jour est indiquée en haut de cette
              page.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
