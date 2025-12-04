'use client'

import projects from "@/types/project";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import { ExternalLink, MoveLeft, MoveRight } from 'lucide-react';

export default function ProjetsSection() {
	const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
	const [hovered, setHovered] = useState<string | null>(null);

	const imgs = projects[activeProjectIndex].photos;
	const fadeUp = {
		hidden: { opacity: 0, y: 40 },
		visible: { opacity: 1, y: 0 }
	};

	const transition: any = { duration: 0.5, type: "spring" };

	const getDimmedStyles = (id: string) => {
		if (!hovered) return {}; // normal state
		if (hovered === id) return {}; // hovered image stays bright
		return {
			opacity: 0.1,
			scale: 0.1,
			filter: "blur(1px)"
		};
	};

	const nextProject = () => {
		setActiveProjectIndex((prev) => (prev + 1) % projects.length);
		setHovered(null);
	};

	const prevProject = () => {
		setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
		setHovered(null);
	};


	return (
		<div id="projects" className="relative overflow-hidden pt-20 sm:px-6 lg:px-8 pt-24">
			{/* <h2 className="text-2xl sm:text-4xl font-light text-white">Nos projets</h2> */}

			<div className="flex flex-col items-center">
				<h2 className="text-2xl sm:text-3xl font-bold text-white text-center px-2">
					{projects[activeProjectIndex].title}
				</h2>
				<h2 className="text-lg sm:text-2xl font-light text-white text-center px-2">
					{projects[activeProjectIndex].subtitle}
				</h2>

				<div className="relative w-full max-w-5xl h-[260px] sm:h-[320px] md:h-[380px] flex items-center justify-center">
					<motion.div
						initial={{ x: 0, scale: 0.75, opacity: 0.4 }}
						whileInView={{ x: "-18vw", scale: 1, opacity: 1 }}
						animate={getDimmedStyles("left")}
						whileHover={{
							x: "-22vw",
							scale: 1.3,
							zIndex: 30,
							opacity: 1,
							filter: "blur(0px)"
						}}
						onHoverStart={() => setHovered("left")}
						onHoverEnd={() => setHovered(null)}
						transition={transition}
						className="absolute cursor-pointer hidden sm:block"
					>
						<Image width={350} height={250} src={imgs[1]} alt="left" className="rounded-lg shadow-lg" />
					</motion.div>

					{/* CENTER IMAGE */}
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						whileInView={{ scale: 1.1, opacity: 1 }}
						animate={getDimmedStyles("center")}
						whileHover={{
							scale: 1.3,
							zIndex: 40,
							opacity: 1,
							filter: "blur(0px)"
						}}
						onHoverStart={() => setHovered("center")}
						onHoverEnd={() => setHovered(null)}
						transition={transition}
						className="z-20 cursor-pointer"
					>
						<Image width={380} height={280} src={imgs[0]} alt="center" className="rounded-lg shadow-lg" />
					</motion.div>

					{/* RIGHT IMAGE */}
					<motion.div
						initial={{ x: 0, scale: 0.75, opacity: 0.4 }}
						whileInView={{ x: "18vw", scale: 1, opacity: 1 }}
						animate={getDimmedStyles("right")}
						whileHover={{
							x: "22vw",
							scale: 1.3,
							zIndex: 30,
							opacity: 1,
							filter: "blur(0px)"
						}}
						onHoverStart={() => setHovered("right")}
						onHoverEnd={() => setHovered(null)}
						transition={transition}
						className="absolute cursor-pointer hidden sm:block"
					>
						<Image width={350} height={250} src={imgs[2]} alt="right" className="rounded-lg shadow-lg" />
					</motion.div>

				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
					<div className="">
						<h1 className="text-white font-bold text-lg mb-2">LE PROJET</h1>
						<p className="text-white text-sm">{projects[activeProjectIndex].description}</p>
					</div>
					<div>
						<h1 className="text-white font-bold text-lg mb-2">L’AVIS DE NOS CLIENTS</h1>
						<p className="text-white text-sm">{projects[activeProjectIndex].review.quote}</p>
						<p className="text-white text-sm mt-2 italic">- {projects[activeProjectIndex].review.author}</p>
					</div>
					<div>
						<h1 className="text-white font-bold text-lg mb-2">LE SITE EN LIGNE</h1>
						<p className="text-white text-sm">Pour une meilleure expérience, vous pouvez accéder à l’entièreté du site en cliquant sur ce bouton.</p>
						<Button className="bg-white mt-4 text-[#E07A5F]" onClick={() => window.open(projects[activeProjectIndex].website, "_blank")} icon={() => <ExternalLink size={20} />}>
							<p className="ml-2 font-bold text-lg">VOIR LE SITE</p>
						</Button>
					</div>
				</div>

				<div className="flex gap-4">
					<motion.div
						className="flex gap-4"
						variants={fadeUp}
						transition={{ delay: 0.9 }}
					>
						<motion.button
							className="border-white border p-2 rounded-full shadow-lg"
							onClick={prevProject}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<MoveLeft size={24} className="text-white" />
						</motion.button>

						<motion.button
							className="border-white border p-2 rounded-full shadow-lg"
							onClick={nextProject}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<MoveRight size={24} className="text-white" />
						</motion.button>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
