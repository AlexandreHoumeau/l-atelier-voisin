"use client";

import Image from "next/image";
import { useEffect, useRef, useState, forwardRef } from "react";
import gsap from "gsap";

const Navbar = forwardRef<HTMLDivElement>((_, ref) => {
    const logoRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const burgerRef = useRef<HTMLButtonElement>(null);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        gsap.set(ref as any, { y: -80, opacity: 0, pointerEvents: "none" });
        gsap.set(menuRef.current, { y: -20, opacity: 0 });
    }, []);

    useEffect(() => {
        if (!menuRef.current) return;

        gsap.to(menuRef.current, {
            y: open ? 0 : -20,
            opacity: open ? 1 : 0,
            duration: 0.4,
            ease: "power3.out",
            pointerEvents: open ? "auto" : "none",
        });

        gsap.to(burgerRef.current?.children!, {
            rotate: open ? 45 : 0,
            y: (i) => (open ? (i === 0 ? 6 : -6) : 0),
            opacity: (i) => (open && i === 1 ? 0 : 1),
            duration: 0.3,
            ease: "power2.out",
        });
    }, [open]);

    return (
        <div
            ref={ref}
            id="site-navbar"
            className="fixed top-0  opacity-0 left-0 w-full z-50 pointer-events-none bg-[#s] bg-opacity-90 backdrop-blur-md"
        >
            <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                {/* LEFT (empty for balance) */}
                <div className="w-10" />

                {/* LOGO */}
                <div ref={logoRef} className="pointer-events-auto">
                    <Image
                        src="/logo-mini.svg"
                        alt="Atelier Voisin"
                        width={70}
                        height={70}
                        priority
                    />
                </div>

                {/* BURGER */}
                <button
                    ref={burgerRef}
                    onClick={() => setOpen(!open)}
                    className="pointer-events-auto w-10 h-10 flex flex-col justify-center items-center gap-1"
                >
                    <span className="block w-6 h-[2px] bg-white" />
                    <span className="block w-6 h-[2px] bg-white" />
                    <span className="block w-6 h-[2px] bg-white" />
                </button>
            </nav>

            {/* DROPDOWN */}
            <div
                ref={menuRef}
                className="absolute top-full left-0 w-full bg-white shadow-lg"
            >
                <ul className="flex flex-col items-center gap-6 py-10 text-lg font-medium">
                    <li className="hover:opacity-60 transition">Services</li>
                    <li className="hover:opacity-60 transition">Projets</li>
                    <li className="hover:opacity-60 transition">À propos</li>
                    <li className="hover:opacity-60 transition">Contact</li>
                </ul>
            </div>
        </div>
    );
});

Navbar.displayName = "Navbar";

export default Navbar;
