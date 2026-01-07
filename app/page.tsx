import Home from "@/components/home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atelier Voisin",
  description:
    "Atelier Voisin est une agence web à Bordeaux spécialisée en sites performants, design UX/UI et développement sur mesure.",
  keywords: [
    "agence web Bordeaux",
    "création site internet Bordeaux",
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
    title: "Atelier Voisin — Agence web à Bordeaux",
    description:
      "Sites web fiables, design humain et développement sur mesure à Bordeaux.",
    url: "https://atelier-voisin.fr",
    siteName: "Atelier Voisin",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Atelier Voisin",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};


export default function HomePage() {
  return <Home />;
}


