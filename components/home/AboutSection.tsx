"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const pinRef = useRef<HTMLDivElement>(null);

	const imageWrapperRef = useRef<HTMLDivElement>(null);
	const description1Ref = useRef<HTMLDivElement>(null);
	const description2Ref = useRef<HTMLDivElement>(null);
	const alexBubbleRef = useRef<HTMLImageElement>(null);
	const claraBubbleRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.set(imageWrapperRef.current, { scale: 1 });
			gsap.set(
				[
					description1Ref.current,
					description2Ref.current,
					alexBubbleRef.current,
					claraBubbleRef.current,
				],
				{ opacity: 0, y: 30 }
			);

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top top",
					end: "+=300%", // THIS is your scroll distance
					scrub: true,
					pin: true,
					anticipatePin: 1,
				},
			});

			tl
				// Image shrinks
				.to(imageWrapperRef.current, {
					scale: 0.55,
					ease: "none",
				})

				// First description
				.to(description1Ref.current, {
					opacity: 1,
					y: 0,
				})

				// Alex bubble
				.to(alexBubbleRef.current, {
					opacity: 1
				})

				// Second description
				.to(description2Ref.current, {
					opacity: 1,
					y: 0,
				})

				// Clara bubble
				.to(claraBubbleRef.current, {
					opacity: 1
				});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		// OUTER SCROLL CONTAINER (creates scroll distance)
		<section
			ref={sectionRef}
			className="relative h-screen w-full overflow-hidden bg-[#7FA3A1]"
		>
			{/* PINNED CONTENT */}
			<div ref={pinRef} className="sticky top-0 h-screen overflow-hidden">
				{/* IMAGE */}
				<div
					ref={imageWrapperRef}
					className="absolute inset-0 flex items-center justify-center"
				>
					<div className="w-[90vw] h-[90vh] max-w-6xl rounded-3xl overflow-hidden shadow-2xl">
						<Image
							src="/images/team/about_us.png"
							alt="Le duo derrière l’Atelier voisin"
							fill
							className="object-cover"
							priority
						/>
					</div>
				</div>

				{/* TITLE */}
				<h2 className="absolute top-20 md:top-8 md:top-20 z-10 max-w-xl
                       text-white text-2xl md:text-5xl font-momo">
					Le duo derrière l’Atelier voisin
				</h2>

				{/* DESCRIPTION 1 */}
				<div
					ref={description1Ref}
					className="absolute top-36 max-w-xs md:max-w-xl left-6 md:top-24 md:top-32 md:right-4 md:right-10
                     max-w-md bg-[#FBE8D8] text-[#C87056]
                     md:px-6 md:py-8 px-4 py-2 rounded-xl shadow-lg"
				>
					<h3 className="text-md md:text-2xl mb-2">
						Deux parcours complémentaires
					</h3>
					<p className="text-sm md:text-lg">
						Clara, designeuse UX/UI et Alex, développeur full-stack depuis 6 ans.
					</p>
				</div>

				{/* DESCRIPTION 2 */}
				<div
					ref={description2Ref}
					className="absolute bottom-24 left-4 md:left-10
                     max-w-md bg-[#FBE8D8] text-[#C87056]
                     px-6 py-8 rounded-xl shadow-lg"
				>
					<h3 className="text-xl md:text-2xl mb-2">
						L’Atelier voisin est né d’un retour à Bordeaux
					</h3>
					<p>
						Une agence pensée pour des sites clairs, humains et simples à gérer.
					</p>
				</div>

				{/* BUBBLES */}
				<Image
					ref={alexBubbleRef}
					src="/images/team/alex_pixel-speech-bubble.png"
					alt=""
					width={140}
					height={140}
					className="left-3/10 top-7/20 -translate-y-40 hidden md:abslute"
				/>

				<Image
					ref={claraBubbleRef}
					src="/images/team/clara_pixel-speech-bubble.png"
					alt=""
					width={110}
					height={110}
					className="md:absolute hidden right-5/14 top-8/18"
				/>
			</div>
		</section>
	);
}
