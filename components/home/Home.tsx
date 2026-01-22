"use client";

import ProjetsSection from "@/components/home/ProjetsSection";
import ServicesPage from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
    projects: any[]; // replace with Project[] later
};

export default function Home({ projects }: Props) {
    useEffect(() => {
        ScrollTrigger.create({
            trigger: ".section.hero",
            start: "top top",
            end: "+=100%",
            pin: true,
            pinSpacing: false,
        });

        ScrollTrigger.create({
            trigger: ".section.services-projects",
            start: "top top",
            end: "+=200%",
            pin: true,
            pinSpacing: false,
        });
    }, []);

    return (
        <main>
            <div className="section hero z-0">
                <HeroSection />
            </div>

            <div className="min-h-screen relative bg-[#E07A5F]">
                <ProjetsSection projects={projects} />
            </div>

            <div className="md:section md:services-projects">
                <div className="min-h-screen bg-[#F2CC8F]">
                    <ServicesPage />
                </div>
            </div>

            <div className="bg-[#7FA3A1]">
                <AboutSection />
            </div>

            <div className="bg-white">
                <ContactSection />
            </div>
        </main>
    );
}


<script type="application/ld+json">
    {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebDesignCompany",
        "name": "Atelier Voisin",
        "url": "https://atelier-voisin.fr",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "4 rue Rose",
            "addressLocality": "Bordeaux",
            "postalCode": "33300",
            "addressCountry": "FR"
        },
        "email": "contact@atelier-voisin.fr",
        "telephone": "+33651448027",
    })}
</script>
