import Home from "@/components/home/Home";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atelier Voisin — Sites web, automatisation et outils IA",
  description:
    "Création de sites web, automatisation des demandes, relances, workflows, CRM simple et outils IA pour organisations, équipes, indépendants et entreprises.",
  keywords: [
    "agence web Bordeaux",
    "création site internet Bordeaux",
    "automatisation workflow",
    "outils IA utiles",
    "CRM simple",
    "développeur web Bordeaux",
    "UX UI Bordeaux",
  ],
  icons: {
    icon: "/icon.png",
  },
  authors: [{ name: "Atelier Voisin" }],
  metadataBase: new URL("https://atelier-voisin.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Atelier Voisin — Sites web, automatisation et outils IA",
    description:
      "Sites web, systèmes connectés et automatisations utiles pour mieux gérer vos demandes, outils et workflows.",
    url: "https://atelier-voisin.fr",
    siteName: "Atelier Voisin",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atelier Voisin",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};
const projectsQuery = `
  *[_type == "project"] | order(_createdAt desc) {
    title,
    subtitle,
    "slug": slug.current,
    description,
    photos,
    website,
    review
  }
`;

export default async function HomePage() {
  const projects = await client.fetch(projectsQuery);

  return <Home projects={projects} />;
}
