'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PenTool, Code, Heart, Dog, MapPin } from 'lucide-react'

export default function AboutTimeline() {
	const ref = useRef<HTMLDivElement | null>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	const items = [
		{
			icon: PenTool,
			title: 'Une designeuse hors pair',
			text: "Agathe imagine des identités et interfaces qui respirent la simplicité.",
		},
		{
			icon: Code,
			title: 'Un développeur curieux',
			text: "Moïse transforme les idées en expériences fluides et agréables.",
		},
		{
			icon: Heart,
			title: 'On aime les petits commerces',
			text: "On accompagne artisans, cafés et boutiques avec bienveillance.",
		},
		{
			icon: Dog,
			title: 'Et le lévrier italien',
			text: "Présent à l'atelier, souvent en train de dormir mais très impliqué.",
		},
		{
			icon: MapPin,
			title: 'Basés à Bordeaux',
			text: "Atelier lumineux entre Chartrons et centre — café assuré.",
		},
	]

	return (
		<section ref={ref} className="relative py-32 bg-white">
			<div className="max-w-5xl mx-auto px-6">
				<div className="text-center mb-24">
					<p className="text-sm text-gray-500 uppercase tracking-wider">À propos</p>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
						L’Atelier Voisin — notre route
					</h2>
					<p className="text-gray-600 mt-4 max-w-2xl mx-auto">
						Une route simple : créer, coder et partager avec passion (et un chien).
					</p>
				</div>

				<div className="relative">
					{/* Ligne verticale pointillée */}
					<motion.div
						className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-gray-300 to-transparent"
						style={{
							height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
						}}
					/>
					{/* Ligne grise de fond */}
					<div className="absolute left-1/2 top-0 w-[2px] h-full border-l-2 border-dashed border-gray-200" />

					{/* Cards */}
					<div className="space-y-32 relative">
						{items.map((it, i) => {
							const Icon = it.icon
							const yOffset = useTransform(
								scrollYProgress,
								[0, 0.2 * i, 0.2 * (i + 1)],
								[50, 20, 0]
							)
							const opacity = useTransform(
								scrollYProgress,
								[0.2 * i, 0.2 * (i + 1)],
								[0, 1]
							)

							const isLeft = i % 2 === 0

							return (
								<motion.div
									key={i}
									style={{ opacity, y: yOffset }}
									className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'
										}`}
								>
									<div
										className={`w-full md:w-1/2 bg-gray-50 border border-gray-200 rounded-3xl shadow-sm p-8 transition-all ${isLeft ? 'mr-auto' : 'ml-auto'
											}`}
									>
										<div className="flex items-start gap-4">
											<div className="p-3 bg-gray-100 rounded-full shrink-0">
												<Icon className="w-6 h-6 text-gray-800" />
											</div>
											<div>
												<h3 className="text-lg font-semibold text-gray-900">
													{it.title}
												</h3>
												<p className="mt-2 text-gray-600 text-sm leading-relaxed">
													{it.text}
												</p>
											</div>
										</div>
									</div>

									{/* Point central */}
									<div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center">
										<div className="w-2 h-2 bg-gray-800 rounded-full" />
									</div>
								</motion.div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
