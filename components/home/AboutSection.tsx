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
	const titleRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		const mm = gsap.matchMedia();

		// Banner continuous scroll
		gsap.to(bannerRef.current, {
			xPercent: -50,
			repeat: -1,
			duration: 30,
			ease: "linear",
		});

		const ctx = gsap.context(() => {
			gsap.set(imageWrapperRef.current, { scale: 1 });
			gsap.set(
				[description1Ref.current, description2Ref.current],
				{ opacity: 0, y: 50 }
			);

			mm.add("(min-width: 768px)", () => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top top",
						end: "+=0%",
						pin: true,
						anticipatePin: 1,
						scrub: false,  // animation plays automatically
						once: true,    // optional: only play once
					},
				});

				tl
					.to(imageWrapperRef.current, {
						scale: 0.55,
						duration: 1,
						ease: "power2.out",
					})
					.to([alexBubbleRef.current, claraBubbleRef.current], {
						zIndex: 50,
						duration: 0,
					})
					.to(
						[
							imageWrapperRef.current,
							alexBubbleRef.current,
							claraBubbleRef.current,
						],
						{ y: -200, duration: 1, ease: "power2.out" }
					)
					.to(titleRef.current, { opacity: 0, y: -50, duration: 0.4 }, "<0.2")
					.to(
						[description1Ref.current, description2Ref.current],
						{ opacity: 1, y: 0, duration: 0.6, stagger: 0.2 }
					);
			});
		}, sectionRef);

		return () => {
			mm.revert();
			ctx.revert();
		};
	}, []);

	return (
		<>
			<section
				ref={sectionRef}
				className="relative hidden md:block px-16 h-screen w-full overflow-hidden bg-[#7FA3A1]"
			>
				<div ref={pinRef} className="sticky top-0 h-screen overflow-hidden">
					{/* IMAGE */}
					<div
						ref={imageWrapperRef}
						className="absolute inset-0 flex items-center justify-center px-4 md:px-0"
					>
						{/* <div className="w-full max-w-6xl h-[65vh] md:h-[90vh] rounded-xl overflow-hidden shadow-2xl"> */}
						<Image
							src="/images/team/about_us.png"
							alt="Le duo derrière l’Atelier voisin"
							// fill
							width={1200}
							height={800}
							className="object-cover"
							priority
						/>
						{/* </div> */}
					</div>

					{/* TITLE */}
					<h2
						ref={titleRef}
						className="absolute top-20 md:top-8 md:top-20 z-10 max-w-xl text-white text-2xl md:text-5xl font-momo"
					>
						Le duo derrière l’Atelier voisin
					</h2>

					<div className="absolute bottom-14 flex w-full">
						<div className="w-full">
							<div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
								<div ref={description1Ref} className="text-white">
									<h3 className="text-lg lg:text-lg mb-3">
										Deux parcours complémentaires
									</h3>
									<p className="text-md xl:text-lg leading-relaxed">
										Clara, designeuse UX/UI et Alex, développeur full-stack depuis 6 ans.
										Nous avons tous les deux acquis notre expérience au sein de grandes
										entreprises à Paris et Amsterdam. Pendant plusieurs années, nous avons
										travaillé sur des projets d&apos;envergure, collaborant avec des équipes
										internationales et développant une expertise solide dans nos domaines
										respectifs.
									</p>
								</div>

								<div ref={description2Ref} className="text-white">
									<h3 className="text-lg lg:text-lg mb-3">
										L’Atelier voisin est né d’un retour à Bordeaux
									</h3>
									<p className="text-md xl:text-lg leading-relaxed">
										En rentrant vivre dans notre ville d’origine, nous nous sommes réunis
										autour d’une envie simple : faire du digital quelque chose de plus humain
										et accessible. Nous avons crée une agence web, pensée pour les entreprises
										et particuliers qui veulent un site fiable, clair et facile à gérer, sans
										jargon, sans complications inutiles.
									</p>
								</div>
							</div>
						</div>
					</div>

					<Image
						ref={alexBubbleRef}
						src="/images/team/alex_pixel-speech-bubble.png"
						alt=""
						width={140}
						height={140}
						className="left-7/28 top-7/20 lg:left-9/28 lg:top-7/20 -z-10 hidden lg:absolute"
					/>

					<Image
						ref={claraBubbleRef}
						src="/images/team/clara_pixel-speech-bubble.png"
						alt=""
						width={110}
						height={110}
						className="hidden lg:absolute -z-10 right-6/18 lg:right-7/18 top-9/20"
					/>
				</div>

				<div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
					<div
						ref={bannerRef}
						className="absolute top-[50%] -translate-y-1/2 flex whitespace-nowrap text-[10vw] font-momo text-white/100"
					>
						<h1>L'ATELIER VOISIN-</h1>
						<h1>L'ATELIER VOISIN-</h1>
						<h1>L'ATELIER VOISIN-</h1>
					</div>
				</div>
			</section>

			{/* MOBILE FALLBACK */}
			<section className="md:hidden bg-[#7FA3A1] px-6 py-10">
				{/* <div className="w-[100vw] h-[60vh] w-full rounded-xl  shadow-2xl mb-8"> */}
				<Image
					src="/images/team/about_us.png"
					alt="Le duo derrière l’Atelier voisin"
					width={1200}
					height={800}
					priority
					className="z-10 object-cover w-full rounded-xl shadow-2xl mb-8"
				/>
				{/* </div> */}

				<h2 className="text-white text-2xl font-momo mb-6">
					Le duo derrière l’Atelier voisin
				</h2>

				<div className="space-y-2 text-white">
					<div>
						<h3 className="text-lg mb-3">Deux parcours complémentaires</h3>
						<p className="leading-relaxed">
							Clara, designeuse UX/UI et Alex, développeur full-stack depuis 6 ans.
							Nous avons tous les deux acquis notre expérience au sein de grandes
							entreprises à Paris et Amsterdam.
						</p>
					</div>

					<div>
						<h3 className="text-lg mb-3">
							L’Atelier voisin est né d’un retour à Bordeaux
						</h3>
						<p className="leading-relaxed">
							En rentrant vivre dans notre ville d’origine, nous nous sommes réunis
							autour d’une envie simple : faire du digital quelque chose de plus humain
							et accessible.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
