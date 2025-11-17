'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '@/types/service'
import { BadgeCheck } from 'lucide-react'

export default function ServicesCompare() {
	const [expanded, setExpanded] = useState(false)

	const allLabels = Array.from(
		new Set(services.flatMap(s => s.allFeatures.map(f => f.label)))
	)
	const orderedLabels = allLabels.sort((a, b) => {
		const countA = services.filter(s =>
			s.allFeatures.find(f => f.label === a && f.included)
		).length
		const countB = services.filter(s =>
			s.allFeatures.find(f => f.label === b && f.included)
		).length
		return countB - countA
	})

	return (
		<section className="relative transition-all py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
			<div className="max-w-7xl mx-auto relative z-10">
				{/* Header */}
				<motion.div
					className="mb-20 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
						Nos Formules
					</p>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
						Comparez nos services
					</h2>
				</motion.div>

				{/* Cards */}
				<div
					className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${expanded ? 'items-start' : ''
						}`}
				>
					{services.map((service, i) => (
						<motion.div
							layout
							key={service.id}
							onClick={() => setExpanded(!expanded)}
							className={`border border-gray-200 rounded-3xl p-8 flex flex-col justify-between bg-white cursor-pointer transition-all duration-500 ${expanded
								? 'hover:shadow-2xl hover:-translate-y-2'
								: 'hover:shadow-lg hover:-translate-y-1'
								} `}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							whileHover={{
								background:
									'linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(245,245,245,1) 100%)',
							}}
						>
							{/* Header */}
							<div>
								<span className="text-sm uppercase tracking-wider text-gray-400">
									{service.number}
								</span>
								<h3 className="text-2xl font-bold text-gray-900 mt-1">
									{service.title}
								</h3>
								<p className="text-gray-600 mt-1">{service.tagline}</p>
							</div>

							{/* Description */}
							<motion.div
								transition={{ duration: 0.3, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
								className="overflow-hidden mb-6"
							>
								<p className="text-gray-700 leading-relaxed">
									{service.description}
								</p>
							</motion.div>

							{/* Features */}
							<AnimatePresence>
								{expanded && (
									<motion.ul
										key="features"
										className="space-y-3 mb-8"
										initial="hidden"
										animate="visible"
										exit="hidden"
										variants={{
											hidden: { opacity: 0 },
											visible: {
												opacity: 1,
												transition: { staggerChildren: 0.05 },
											},
										}}
									>
										{orderedLabels.map((label, idx) => {
											const feature = service.allFeatures.find(
												f => f.label === label
											)
											const included = feature?.included
											return (
												<motion.li
													key={idx}
													variants={{
														hidden: { opacity: 0, y: 10 },
														visible: { opacity: 1, y: 0 },
													}}
													className={`flex items-center gap-2 text-sm md:text-base transition-all ${included
														? 'text-gray-900'
														: 'text-gray-300 line-through'
														}`}
												>
													<BadgeCheck
														size={18}
														className={`${included ? "text-green-500" : "text-gray-300"} flex-shrink-0`}
													/>

													{label}
												</motion.li>
											)
										})}
									</motion.ul>
								)}
							</AnimatePresence>

							{/* Footer */}
							<div className="text-gray-700 text-sm flex items-center gap-2 mt-auto">
								<span>⏱️</span>
								<span>
									Durée estimée : <strong>{service.duration}</strong>
								</span>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
