'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '@/types/service'

export default function ServicesSection() {
    const [expandedId, setExpandedId] = useState<string | null>(null)

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id)
    }

    return (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="mb-20 max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
                        Nos Services
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Ce qu'on fait pour vous
                    </h2>
                </motion.div>

                {/* Services List */}
                <div className="space-y-4">
                    {services.map((service, index) => {
                        const isExpanded = expandedId === service.id

                        return (
                            <motion.div
                                key={service.id}
                                className="relative"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Collapsed Box */}
                                <motion.div
                                    className="relative border border-gray-200 rounded-2xl overflow-hidden cursor-pointer"
                                    onClick={() => toggleExpand(service.id)}
                                    whileHover={{
                                        borderColor: '#000',
                                        transition: { duration: 0.2 }
                                    }}
                                    animate={{
                                        backgroundColor: isExpanded ? '#000' : '#fff'
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Main Info (always visible) */}
                                    <div className="p-8 flex items-center justify-between">
                                        <div className="flex items-center gap-8">
                                            {/* Number */}
                                            <motion.span
                                                className="text-2xl font-bold"
                                                animate={{
                                                    color: isExpanded ? '#fff' : '#d1d5db'
                                                }}
                                            >
                                                {service.number}
                                            </motion.span>

                                            {/* Title & Tagline */}
                                            <div>
                                                <motion.h3
                                                    className="text-2xl md:text-3xl font-bold mb-1"
                                                    animate={{
                                                        color: isExpanded ? '#fff' : '#000'
                                                    }}
                                                >
                                                    {service.title}
                                                </motion.h3>
                                                <motion.p
                                                    className="text-sm"
                                                    animate={{
                                                        color: isExpanded ? '#d1d5db' : '#6b7280'
                                                    }}
                                                >
                                                    {service.tagline}
                                                </motion.p>
                                            </div>
                                        </div>

                                        {/* Price & Toggle */}
                                        <div className="flex items-center gap-6">
                                            <motion.span
                                                className="text-xl font-bold whitespace-nowrap"
                                                animate={{
                                                    color: isExpanded ? '#fff' : '#000'
                                                }}
                                            >
                                                {service.price}
                                            </motion.span>

                                            {/* Toggle Icon */}
                                            <motion.div
                                                className="w-10 h-10 rounded-full border flex items-center justify-center"
                                                animate={{
                                                    borderColor: isExpanded ? '#fff' : '#000',
                                                    rotate: isExpanded ? 45 : 0
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.span
                                                    className="text-2xl font-light"
                                                    animate={{
                                                        color: isExpanded ? '#fff' : '#000'
                                                    }}
                                                >
                                                    +
                                                </motion.span>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Expanded Panel */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-8 pb-8 pt-4 border-t border-gray-800">
                                                    <div className="grid md:grid-cols-2 gap-12">
                                                        {/* Left Column */}
                                                        <div className="space-y-8">
                                                            {/* Description */}
                                                            <div>
                                                                <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">
                                                                    En détail
                                                                </h4>
                                                                <p className="text-gray-300 leading-relaxed">
                                                                    {service.description}
                                                                </p>
                                                            </div>

                                                            {/* Features */}
                                                            <div>
                                                                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                                                                    Ce qui est inclus
                                                                </h4>
                                                                <ul className="space-y-3">
                                                                    {service.features.map((feature, i) => (
                                                                        <motion.li
                                                                            key={i}
                                                                            className="flex items-center gap-3 text-gray-300"
                                                                            initial={{ opacity: 0, x: -10 }}
                                                                            animate={{ opacity: 1, x: 0 }}
                                                                            transition={{ delay: 0.1 * i }}
                                                                        >
                                                                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                                                            <span>{feature}</span>
                                                                        </motion.li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        {/* Right Column */}
                                                        <div className="space-y-8">
                                                            {/* Deliverables */}
                                                            <div>
                                                                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                                                                    Livrables
                                                                </h4>
                                                                <ul className="space-y-3">
                                                                    {service.deliverables.map((item, i) => (
                                                                        <motion.li
                                                                            key={i}
                                                                            className="flex items-center gap-3 text-gray-300"
                                                                            initial={{ opacity: 0, x: -10 }}
                                                                            animate={{ opacity: 1, x: 0 }}
                                                                            transition={{ delay: 0.1 * i + 0.2 }}
                                                                        >
                                                                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                                                            <span>{item}</span>
                                                                        </motion.li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            {/* Duration & CTA */}
                                                            <div className="space-y-4">
                                                                <div className="flex items-center gap-3 text-gray-300">
                                                                    <span className="text-sm">⏱️ Durée :</span>
                                                                    <span className="font-medium">{service.duration}</span>
                                                                </div>

                                                                <motion.button
                                                                    className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-colors"
                                                                    whileHover={{ scale: 1.02 }}
                                                                    whileTap={{ scale: 0.98 }}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation()
                                                                        // Action: ouvrir formulaire de contact ou modal
                                                                    }}
                                                                >
                                                                    Discutons de ce projet →
                                                                </motion.button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-gray-600 mb-6">
                        Pas sûr de ce dont vous avez besoin ?
                    </p>
                    <motion.button
                        className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Prenons un café pour en discuter
                        <span>☕</span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}