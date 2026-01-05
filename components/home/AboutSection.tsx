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
	const bannerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.to(bannerRef.current, {
			xPercent: -50,
			repeat: -1,
			duration: 30,
			ease: "linear",
		});

		const ctx = gsap.context(() => {
			gsap.set(imageWrapperRef.current, { scale: 1 });
			gsap.set(
				[
					description1Ref.current,
					description2Ref.current,
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
				.to([alexBubbleRef.current, claraBubbleRef.current], {
					zIndex: 50
				})

				// Second description
				.to(description2Ref.current, {
					opacity: 1,
					y: 0,
				})
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		// OUTER SCROLL CONTAINER (creates scroll distance)
		<section
			ref={sectionRef}
			className="relative px-16 h-screen w-full overflow-hidden bg-[#7FA3A1]"
		>
			{/* PINNED CONTENT */}
			<div ref={pinRef} className="sticky top-0 h-screen overflow-hidden">
				{/* IMAGE */}
				<div
					ref={imageWrapperRef}
					className="absolute inset-0 flex items-center justify-center"
				>
					<div className="w-[90vw] h-[90vh] max-w-6xl overflow-hidden shadow-2xl">
						<Image
							src="/images/team/about_us.png"
							alt="Le duo derrière l’Atelier voisin"
							fill
							className="object-cover rounded-xl"
							priority
						/>
					</div>
				</div>

				{/* TITLE */}
				<h2 className="absolute top-20 md:top-8 md:top-20 z-10 max-w-xl text-white text-2xl md:text-5xl font-momo">
					Le duo derrière l’Atelier voisin
				</h2>

				{/* DESCRIPTION 1 */}
				<div
					ref={description1Ref}
					className="absolute max-w-xs md:max-w-sm max-w-md bg-[#FBE8D8] text-[#C87056] md:px-6 md:py-8 px-4 py-2 rounded-xl shadow-lg top-1/3 left-4 md:left-10">
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
					className="absolute max-w-md bg-[#FBE8D8] text-[#C87056] px-6 py-8 rounded-xl shadow-lg top-2/3 right-4 md:right-10"
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
					className="left-9/28 top-7/20 -z-10 md:absolute"
				/>

				<Image
					ref={claraBubbleRef}
					src="/images/team/clara_pixel-speech-bubble.png"
					alt=""
					width={110}
					height={110}
					className="md:absolute -z-10 right-7/18 top-9/20"
				/>
			</div>
			{/* BACKGROUND MARQUEE */}
			<div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
				<div
					ref={bannerRef}
					className="absolute top-1/2 -translate-y-1/2 flex whitespace-nowrap text-[18vw] font-momo text-white/100"
				>
					<h1 className="">CLARA&ALEX&BEAN&</h1>
					<h1 className="">CLARA&ALEX&BEAN&</h1>
					<h1 className="">CLARA&ALEX&BEAN&</h1>
				</div>
			</div>

		</section>
	);
}
