import type { Metadata } from "next";
import { momo, lexend } from "./fonts";
import "./globals.css";
import { PageTransitionProvider } from "@/components/animations/PageTransition";

export const metadata: Metadata = {
  title: "Atelier Voisin",
  description: "Agence de création de sites web pour architectes et designers. Nous concevons des expériences numériques élégantes et fonctionnelles qui mettent en valeur vos projets et votre vision.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="fr" className={`scroll-smooth`}>
      <body
        className={`${momo.variable} ${lexend.variable} font-lexend antialiased bg-[#0D654E] scroll-smooth`}
      >
        {/* <Header /> */}

        <main className="min-h-screen font-lexend snap-y snap-mandatory overflow-y-scroll h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
