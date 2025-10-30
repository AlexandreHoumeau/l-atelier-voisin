'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useRouter } from 'next/navigation';
import { usePageTransition } from '../animations/PageTransition';

type Projet = { title: string; description: string }

const projets: Projet[] = [
	{ title: "Projet A", description: "Description courte A" },
	{ title: "Projet B", description: "Description courte B" },
	{ title: "Projet C", description: "Description courte C" },
	{ title: "Projet D", description: "Description courte D" },
	{ title: "Projet E", description: "Description courte E" },
]

export default function ProjetsSection() {
	const wrapperRef = useRef<HTMLDivElement | null>(null)
	const scrollerRef = useRef<HTMLDivElement | null>(null)
	const router = useRouter()
	const controls = useAnimation()
	const [singleWidth, setSingleWidth] = useState(0)
	const [tooltip, setTooltip] = useState<{ x: number; y: number; title: string; desc: string } | null>(null)
	const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null)
	const { startTransition } = usePageTransition()

	const measure = useCallback(() => {
		const sc = scrollerRef.current
		if (!sc) return
		setSingleWidth(sc.scrollWidth / 2)
	}, [])

	useEffect(() => {
		measure()
		window.addEventListener('resize', measure)
		return () => window.removeEventListener('resize', measure)
	}, [measure])

	const startAutoScroll = useCallback(
		(from = 0) => {
			if (!singleWidth) return
			const speed = 60
			const duration = singleWidth / speed
			controls.start({
				x: [from, from - singleWidth],
				transition: { duration, ease: 'linear', repeat: Infinity },
			})
		},
		[controls, singleWidth]
	)

	useEffect(() => {
		if (singleWidth > 0) startAutoScroll(0)
	}, [singleWidth, startAutoScroll])

	// Cursor + Tooltip
	const handleMouseMove = (e: React.MouseEvent, p: Projet) => {
		setTooltip({ x: e.clientX + 14, y: e.clientY + 14, title: p.title, desc: p.description })
		setCursor({ x: e.clientX, y: e.clientY })
	}
	const handleMouseLeave = () => {
		setTooltip(null)
		setCursor(null)
	}

	const handleClick = (slug: string) => {
		startTransition(() => {
			router.push(`/projets/${slug}`)
		})
	}

	return (
		<section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
			<h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">Nos projets récents</h2>

			<div ref={wrapperRef} className="relative overflow-hidden">
				<motion.div
					ref={scrollerRef}
					className="flex gap-8"
					animate={controls}
					drag="x"
					dragConstraints={{ left: -999999, right: 999999 }}
					dragElastic={0.1}
				>
					{[...projets, ...projets].map((proj, i) => (
						<motion.div
							key={i}
							className="relative w-[40vw] md:w-[30vw] h-[66vh] bg-black rounded-2xl flex-shrink-0 cursor-none"
							onMouseMove={(e) => handleMouseMove(e, proj)}
							onClick={() => handleClick(proj.title.toLowerCase().replace(/\s+/g, '-'))}
							whileTap={{ scale: 0.97 }}
							onMouseLeave={handleMouseLeave}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: (i % projets.length) * 0.12 }}
						/>
					))}
				</motion.div>
			</div>

			{/* Tooltip */}
			{tooltip && (
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.95 }}
					style={{ position: 'fixed', left: tooltip.x, top: tooltip.y }}
					className="pointer-events-none bg-white shadow-lg rounded-md p-3 text-gray-900 w-60 z-40"
				>
					<h3 className="font-bold">{tooltip.title}</h3>
					<p className="text-sm mt-1">{tooltip.desc}</p>
				</motion.div>
			)}

			{/* Custom cursor */}
			{cursor && (
				<motion.div
					className="fixed z-50 pointer-events-none flex items-center justify-center rounded-full bg-white text-black border border-gray-300 shadow-sm"
					style={{
						left: cursor.x,
						top: cursor.y,
						width: 60,
						height: 60,
						translateX: '-50%',
						translateY: '-50%',
					}}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ type: 'spring', stiffness: 300, damping: 20 }}
				>
					<span className="text-3xl font-bold">+</span>
				</motion.div>
			)}
		</section>
	)
}
