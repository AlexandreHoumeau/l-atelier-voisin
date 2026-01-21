"use client";

import gsap from "gsap";
import { forwardRef, useEffect, useRef } from "react";
import Logo from "../home/Logo";

const Navbar = forwardRef<HTMLDivElement>((_, ref) => {
    const logoRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.set(ref, { y: -80, opacity: 0, pointerEvents: "none" });
        gsap.set(menuRef.current, { y: -20, opacity: 0 });
    }, [ref]);

    return (
        <div
            ref={ref}
            id="site-navbar"
            className="fixed top-0 opacity-0 left-0 w-full z-50 pointer-events-none  bg-opacity-10 backdrop-blur-sm"
        >
            <nav className="flex justify-around px-6 py-2 ">
                <div ref={logoRef} className="pointer-events-auto">
                    <Logo className="w-10 h-10 sm:w-18 sm:h-18" />
                </div>
            </nav>
        </div>
    );
});

Navbar.displayName = "Navbar";

export default Navbar;
