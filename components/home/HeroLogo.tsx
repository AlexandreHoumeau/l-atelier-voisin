"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroLogo({ className }: { className?: string }) {
    const partsRef = useRef<{
        a1: SVGSVGElement | null;
        a: SVGSVGElement | null;
        v1: SVGSVGElement | null;
        v: SVGSVGElement | null;
    }>({ a1: null, a: null, v1: null, v: null });

    useEffect(() => {
        const { a1, a, v1, v } = partsRef.current;

        // Initial positions: bottom for first parts, top for second parts
        gsap.set([a1, v1], { y: 200, opacity: 0 });
        gsap.set([a, v], { y: -200, opacity: 0 });

        // Animate all parts into center
        const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
        tl.to(a1, { y: 0, opacity: 1 })
            .to(v1, { y: 0, opacity: 1 }, "<0.1")
            .to(a, { y: 0, opacity: 1 }, "<0.1")
            .to(v, { y: 0, opacity: 1 }, "<0.1");
    }, []);

    return (
        <div className={`flex justify-center items-center gap-3 ${className}`}
        >
            {/* First A part */}
            <svg ref={el => { partsRef.current.a1 = el }}
                width="51" height="90" viewBox="0 0 51 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 45.8789C0 39.4336 0.849609 33.457 2.54883 27.9492C4.24805 22.3828 6.88477 17.5195 10.459 13.3594C18.1934 4.45312 29.2676 0 43.6816 0H50.4492V89.6484H45.8789C31.1133 89.6484 19.6875 85.6055 11.6016 77.5195C3.86719 69.7852 0 59.2383 0 45.8789Z" fill="#FF9B54" />
            </svg>

            {/* Second A part */}
            <svg ref={el => { partsRef.current.a = el }} width="49" height="90" viewBox="0 0 49 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H48.5156V89.6484H42.9785C27.7441 89.6484 16.7871 86.9824 10.1074 81.6504C3.36914 76.2598 0 67.3535 0 54.9316V0Z" fill="#FF9B54" />
            </svg>


            {/* First V part */}
            <svg ref={el => { partsRef.current.v1 = el }} width="49" height="90" viewBox="0 0 49 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.8906 89.6484C28.1836 89.6484 17.2266 84.5215 10.0195 74.2676C3.33984 64.7754 0 51.0938 0 33.2227V0H5.36133C20.4785 0 31.4648 2.92969 38.3203 8.78906C45 14.6484 48.3398 24.1406 48.3398 37.2656V89.6484H42.8906Z" fill="#FF9B54" />
            </svg>


            {/* Second V part */}
            <svg ref={el => { partsRef.current.v = el }} width="49" height="90" viewBox="0 0 49 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 37.2656C0 24.1406 3.33984 14.6484 10.0195 8.78906C16.875 2.92969 27.8613 0 42.9785 0H48.3398V33.2227C48.3398 60.4688 40.5469 77.9297 24.9609 85.6055C19.5117 88.3008 12.9785 89.6484 5.36133 89.6484H0V37.2656Z" fill="#FF9B54" />
            </svg>

        </div>
    );
}
