'use client'

import { JSX } from "react"
import { motion } from "framer-motion"

export default function Header(): JSX.Element {
	const LEFT_LINKS = [
		{ href: "#projets", label: "Projets" },
		{ href: "#services", label: "Services" },
	]

	const RIGHT_LINKS = [
		{ href: "#a-propos", label: "À propos" },
		{ href: "#contact", label: "Contact" },
	]

	return (
		<header className="bg-white/60 backdrop-blur sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">

					{/* Left nav */}
					<nav className="hidden md:flex items-center gap-8">
						{LEFT_LINKS.map(({ href, label }, i) => (
							<motion.a
								key={href}
								href={href}
								className="relative text-gray-700 hover:text-gray-900 px-1 py-2 text-base font-medium
								after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px]
								after:w-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
							>
								{label}
							</motion.a>
						))}
					</nav>

					{/* Logo center */}
					<motion.a
						href="/"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-2xl font-bold text-gray-900"
					>
						Atelier Voisin
					</motion.a>

					{/* Right nav */}
					<nav className="hidden md:flex items-center gap-8">
						{RIGHT_LINKS.map(({ href, label }, i) => (
							<motion.a
								key={href}
								href={href}
								className="relative text-gray-700 hover:text-gray-900 px-1 py-2 text-base font-medium
								after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px]
								after:w-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: (i + 2) * 0.1 }}
							>
								{label}
							</motion.a>
						))}
					</nav>
				</div>
			</div>
		</header>
	)
}
