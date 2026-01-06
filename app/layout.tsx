import Navbar from "@/components/ui/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Atelier Voisin",
  description: "Agence de création de sites web pour architectes et designers. Nous concevons des expériences numériques élégantes et fonctionnelles qui mettent en valeur vos projets et votre vision.",
};

const momo = localFont({
  src: "../public/fonts/MomoTrustDisplay-Regular.ttf",
  variable: "--font-momo",
});

const lexend = localFont({
  src: "../public/fonts/Lexend-VariableFont_wght.ttf",
  variable: "--font-lexend",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="fr" className={`scroll-smooth ${momo.variable} ${lexend.variable}`}>
      <body
        className={`bg-[#0D654E] scroll-smooth`}
      >
        <Navbar />
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
