"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CurtainSectionProps = {
    children: React.ReactNode;
    overlay: React.ReactNode;
    markers?: boolean;
};

export default function CurtainSection({
    children,
    overlay,
    markers = false,
}: CurtainSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "+=100%",
                pin: true,
                pinSpacing: true,
                markers,
            });

            gsap.to(overlayRef.current, {
                yPercent: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [markers]);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full overflow-hidden"
        >
            <div className="relative z-10 h-full">{children}</div>

            <div
                ref={overlayRef}
                className="absolute inset-0 z-20 will-change-transform"
            >
                {overlay}
            </div>
        </section>
    );
}
