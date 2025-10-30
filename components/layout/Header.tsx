'use client'

import { JSX } from "react"
import { motion } from "framer-motion"

const NAV_LINKS = [
    { href: "#projets", label: "Projets" },
    { href: "#a-propos", label: "À propos" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
]

export default function Header(): JSX.Element {
    return (
        <header className="bg-white/60 backdrop-blur sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <input id="nav-toggle" type="checkbox" className="peer hidden" aria-hidden />
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <motion.a href="/"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl relative font-bold text-gray-900">
                            Atelier Voisin
                        </motion.a>
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map(({ href, label }, i) => (
                            <motion.a
                                key={href}
                                href={href}
                                className="relative text-gray-700 hover:text-gray-900 px-1 py-2 text-base font-medium
                 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px]
                 after:w-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (i + 0.3) * 0.1 }}
                            >
                                {label}
                            </motion.a>
                        ))}
                    </nav>

                    {/* Mobile toggle */}
                    <label
                        htmlFor="nav-toggle"
                        className="md:hidden p-2 rounded-md inline-flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        aria-label="Toggle navigation"
                    >
                        {/* hamburger */}
                        <svg className="w-6 h-6 text-gray-800 peer-checked:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        {/* close */}
                        <svg className="w-6 h-6 text-gray-800 hidden peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </label>
                </div>
            </div>
        </header>
    )
}
