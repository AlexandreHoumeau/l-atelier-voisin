import Navbar from "@/components/ui/Navbar";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Footer from "@/components/ui/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
