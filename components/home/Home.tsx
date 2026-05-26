"use client";

import { sendContactEmail } from "@/app/actions/contact";
import { urlFor } from "@/sanity/lib/image";
import type { Project } from "@/types/project";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Check,
  MapPinned,
  MessageCircle,
  MessageSquare,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import * as THREE from "three";
import Logo from "./Logo";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  projects: Project[];
};

const introWords = ["fluide", "clair", "précis"];
const heroSceneZoomDuration = 3.25;

const formulas = [
  {
    name: "Formule essentielle",
    title: "L'essentiel pour exister",
    text: "Un site clair et professionnel pour présenter votre activité, inspirer confiance et être contacté facilement.",
    included: [
      "Design sur mesure",
      "3 à 5 pages",
      "Responsive",
      "Formulaire de contact",
      "SEO de base",
    ],
    excluded: ["Base de données", "Analytics", "Sécurisation avancée"],
  },
  {
    name: "Formule premium",
    title: "Un vrai outil de travail",
    text: "Un site évolutif, performant et administrable, pensé pour accompagner la croissance de votre activité.",
    included: [
      "Design sur mesure",
      "Pages illimitées",
      "Responsive",
      "SEO avancé",
      "Base de données",
      "Sécurisation des données",
      "Analytics",
      "Espace d'administration",
    ],
    excluded: [],
  },
];

const contactItems = [
  {
    icon: MessageCircle,
    title: "Par email",
    text: "Vous pouvez nous contacter par email et nous nous ferons un plaisir de vous répondre.",
    value: "contact@atelier-voisin.fr",
  },
  {
    icon: MapPinned,
    title: "Rendez-nous visite",
    text: "Venez dire bonjour à l'atelier.",
    value: "4 rue Rose, Bordeaux 33300",
  },
  {
    icon: Phone,
    title: "Appelez-nous",
    text: "Du lundi au vendredi de 9h à 18h.",
    value: "+33 6 51 44 80 27",
  },
];

const capabilities = [
  "UX/UI",
  "Next.js",
  "Sanity CMS",
  "SEO",
  "Responsive",
  "Formulaire",
  "Analytics",
  "Maintenance",
  "Formation",
  "Performance",
];

const aboutNotes = [
  {
    label: "Ecoute",
    className: "left-3 top-6 -rotate-6 sm:left-8 lg:-left-7 lg:top-10",
  },
  {
    label: "Design",
    className: "right-3 top-1/3 rotate-6 sm:right-8 lg:-right-8",
  },
  {
    label: "Code",
    className: "bottom-12 left-6 rotate-3 sm:left-12 lg:-left-5",
  },
  {
    label: "Suivi",
    className: "bottom-5 right-5 -rotate-4 sm:right-10 lg:right-6",
  },
];

export default function Home({ projects }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const safeProjects = projects ?? [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-word",
        { yPercent: 115, rotate: -4, opacity: 0 },
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.08,
          ease: "power3.out",
          delay: 3.3,
        }
      );

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 84%" },
          }
        );
      });

      gsap.to(".wall-marquee", {
        xPercent: -50,
        duration: 26,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".float-item", {
        y: -18,
        rotate: 3,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.18,
        ease: "sine.inOut",
      });

      gsap.to(".hero-ui", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: heroSceneZoomDuration - 0.55,
      });

      gsap.to(".grain-overlay", {
        opacity: 0.045,
        duration: 0.45,
        ease: "power2.out",
        delay: heroSceneZoomDuration + 0.5,
      });

      gsap.fromTo(
        ".about-portrait",
        {
          clipPath: "inset(8% 8% 8% 8%)",
          rotate: -2,
          scale: 1.08,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          rotate: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-stage", start: "top 72%" },
        }
      );

      gsap.fromTo(
        ".about-pop",
        { autoAlpha: 0, scale: 0.2, y: 28, rotate: -8 },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          rotate: 0,
          duration: 0.72,
          stagger: 0.1,
          ease: "back.out(1.8)",
          scrollTrigger: { trigger: ".about-stage", start: "top 60%" },
        }
      );

      gsap.to(".about-drift", {
        y: -12,
        rotate: 2,
        duration: 3.1,
        repeat: -1,
        yoyo: true,
        stagger: 0.24,
        ease: "sine.inOut",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="bg-[#EBE9E4] text-[#333333]">
      <IntroReveal />
      <Hero />
      <ProjectCarousel projects={safeProjects} />
      <Services />
      <About />
      <Contact />
    </main>
  );
}

function IntroReveal() {
  const [done, setDone] = useState(false);

  if (done) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden text-[#EBE9E4]"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.9, delay: 3.2, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setDone(true)}
    >
      <motion.div
        className="absolute inset-0 bg-[#7FA3A1]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.45, delay: 2.75, ease: "easeOut" }}
      />
      <div className="relative flex h-44 w-full items-center justify-center px-6">
        {introWords.map((word, index) => (
          <motion.p
            key={word}
            className="absolute font-momo text-[clamp(3.4rem,10vw,9rem)] leading-none"
            initial={{ opacity: 0, y: 60, rotate: -3 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [60, 0, 0, -54],
              rotate: [-3, 0, 0, 3],
            }}
            transition={{
              duration: 0.78,
              delay: index * 0.52,
              times: [0, 0.2, 0.72, 1],
              ease: "easeOut",
            }}
          >
            {word}
          </motion.p>
        ))}

        <motion.div
          className="absolute flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 50, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logo className="h-16 w-auto sm:h-20 [&_*]:fill-[#EBE9E4]" />
          <p className="font-momo text-[clamp(3rem,8vw,7rem)] leading-none text-[#EBE9E4]">
            Atelier Voisin
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#EBE9E4] px-5 pb-16 pt-6 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_12%,rgba(255,155,84,0.22),transparent_28%),radial-gradient(circle_at_12%_82%,rgba(127,163,161,0.26),transparent_35%)]" />

      <header className="hero-ui relative z-20 flex items-center justify-between opacity-0">
        <a href="#" className="flex items-center gap-3" aria-label="Atelier Voisin">
          <Logo className="h-10 w-auto sm:h-12" />
          <span className="hidden font-lexend text-sm font-semibold uppercase tracking-[0.18em] text-[#C87056] sm:inline">
            Atelier Voisin
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-[#333333]/68 md:flex">
          <a href="#services" className="hover:text-[#C87056]">
            Services
          </a>
          <a href="#projects" className="hover:text-[#C87056]">
            Projets
          </a>
          <a href="#contact" className="hover:text-[#C87056]">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-[#C87056] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#FF9B54]"
        >
          Écrire
        </a>
      </header>

      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <GranularHeroScene />
      </div>

      <div className="hero-ui pointer-events-none relative z-10 flex min-h-[calc(100vh-5rem)] items-center pt-16 opacity-0">
        <div className="w-full pb-12 lg:max-w-4xl">
          <p className="pointer-events-auto float-item mb-8 inline-flex items-center gap-2 rounded-full border border-[#C87056]/20 bg-white/70 px-4 py-2 text-sm text-[#C87056] shadow-sm">
            <Sparkles size={16} />
            Studio web indépendant à Bordeaux
          </p>
          <h1 className="pointer-events-auto font-momo text-[clamp(3.6rem,10vw,11rem)] leading-[0.86] text-[#333333]">
            {["Des sites", "faits avec", "du soin."].map((line) => (
              <span className="block overflow-hidden" key={line}>
                <span className="hero-word block origin-left">{line}</span>
              </span>
            ))}
          </h1>
          <p className="pointer-events-auto mt-8 max-w-xl text-xl leading-relaxed text-[#333333]/72">
            Nous créons des sites sur mesure, chaleureux et fiables pour les
            indépendants, lieux et entreprises qui veulent être compris dès la
            première visite.
          </p>
        </div>
      </div>
    </section>
  );
}

function GranularHeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    // The central house is scaled by 1.65. Its flat face sits exactly around Y=0.66 and Z=0.726.
    const cameraTarget = new THREE.Vector3(0, 2, 0);
    const camera = new THREE.PerspectiveCamera(35, mount.clientWidth / mount.clientHeight, 0.02, 100);
    // Placed at Z=0.76, the camera sits just 0.034 units away from the flat wall, creating a solid green screen.
    camera.position.set(0, 0.66, 0.76);
    camera.lookAt(cameraTarget);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // 1. Création de la géométrie d'une maison minimaliste
    const shape = new THREE.Shape();
    shape.moveTo(-0.4, 0);
    shape.lineTo(0.4, 0);
    shape.lineTo(0.4, 0.8);
    shape.lineTo(0, 1.3); // Pointe du toit
    shape.lineTo(-0.4, 0.8);
    shape.lineTo(-0.4, 0);

    const extrudeSettings = {
      depth: 0.8,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.04,
      bevelThickness: 0.04,
    };
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.translate(0, 0, -0.4); // Centrer sur l'axe Z

    // Matériau doux et mat
    const material = new THREE.MeshPhysicalMaterial({
      roughness: 0.3,
      metalness: 0.1,
      clearcoat: 0.5,
      clearcoatRoughness: 0.2,
    });

    // 2. Génération du quartier (disposition circulaire)
    const numGrid = 18;
    const spacing = 1.3;
    const housesData: {
      basePos: THREE.Vector3;
      currentY: number;
      targetY: number;
      baseRotY: number;
      scaleMultiplier: number;
      color: THREE.Color;
      targetColor: THREE.Color;
      paletteColor: string;
    }[] = [];

    const palette = ["#C87056", "#FF9B54", "#F2CC8F"];

    for (let x = -numGrid / 2; x < numGrid / 2; x++) {
      for (let z = -numGrid / 2; z < numGrid / 2; z++) {
        // Placement avec un léger décalage organique
        const px = x * spacing + (Math.random() - 0.5) * 0.4;
        const pz = z * spacing + (Math.random() - 0.5) * 0.4;

        // Découpe en forme de cercle pour créer une "île"
        if (px * px + pz * pz > Math.pow((numGrid * spacing) / 2.2, 2)) continue;

        housesData.push({
          basePos: new THREE.Vector3(px, 0, pz),
          currentY: 0,
          targetY: 0,
          baseRotY: Math.floor(Math.random() * 4) * (Math.PI / 2), // Rotation à 90°
          scaleMultiplier: 0.4 + Math.random() * 0.6, // Maisons de tailles différentes
          color: new THREE.Color("#ffffff"),
          targetColor: new THREE.Color("#ffffff"),
          paletteColor: palette[Math.floor(Math.random() * palette.length)],
        });
      }
    }

    let atelierHouseIndex = 0;
    let shortestCenterDistance = Infinity;
    housesData.forEach((house, index) => {
      const distance = house.basePos.length();
      if (distance < shortestCenterDistance) {
        shortestCenterDistance = distance;
        atelierHouseIndex = index;
      }
    });
    housesData[atelierHouseIndex].basePos.set(0, 0, 0);
    housesData[atelierHouseIndex].baseRotY = 0;
    housesData[atelierHouseIndex].scaleMultiplier = 1.65;

    const introTween = gsap.timeline();
    introTween
      .to(camera.position, {
        x: 0,
        y: 14,
        z: 22,
        duration: heroSceneZoomDuration,
        ease: "power3.inOut",
      })
      .to(
        cameraTarget,
        {
          y: 0,
          duration: heroSceneZoomDuration,
          ease: "power2.inOut",
        },
        0
      );

    const numInstances = housesData.length;
    const instancedMesh = new THREE.InstancedMesh(geometry, material, numInstances);
    instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    group.add(instancedMesh);

    // Initialisation des couleurs
    for (let i = 0; i < numInstances; i++) {
      if (i === atelierHouseIndex) {
        housesData[i].color.set("#7FA3A1");
        housesData[i].targetColor.set("#7FA3A1");
      }
      instancedMesh.setColorAt(i, housesData[i].color);
    }
    if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true;

    // 3. Éclairage
    scene.add(new THREE.AmbientLight("#EBE9E4", 1.8));

    const dirLight = new THREE.DirectionalLight("#ffffff", 2.5);
    dirLight.position.set(10, 15, 10);
    scene.add(dirLight);

    // Une lumière douce qui suivra la souris
    const pointLight = new THREE.PointLight("#FF9B54", 8, 12);
    scene.add(pointLight);

    // 4. Interactions (Raycasting)
    const pointer = new THREE.Vector2(-999, -999);
    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // Plan horizontal
    const mouse3D = new THREE.Vector3(-999, -999, -999);
    let isHovered = false;

    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      isHovered = true;
    };

    const onPointerLeave = () => {
      isHovered = false;
      pointer.set(-999, -999);
      mouse3D.set(-999, -999, -999);
    };

    const resize = () => {
      const rect = mount.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
    };

    mount.addEventListener("pointermove", onPointerMove);
    mount.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", resize);
    resize();

    // 5. Boucle d'animation
    const clock = new THREE.Clock();
    let raf = 0;
    const dummy = new THREE.Object3D();
    let introComplete = false;
    let previousTime = 0;

    introTween.eventCallback("onComplete", () => {
      introComplete = true;
      previousTime = clock.getElapsedTime();
    });

    const animate = () => {
      const time = clock.getElapsedTime();
      const delta = previousTime === 0 ? 0 : time - previousTime;
      previousTime = time;

      // Only process interactions once the reveal zoom is fully completed
      if (isHovered && introComplete) {
        raycaster.setFromCamera(pointer, camera);
        raycaster.ray.intersectPlane(plane, mouse3D);
        pointLight.position.lerp(new THREE.Vector3(mouse3D.x, 3, mouse3D.z), 0.1);
      } else {
        pointLight.position.lerp(new THREE.Vector3(0, 0, 0), 0.02);
      }

      for (let i = 0; i < numInstances; i++) {
        const house = housesData[i];
        let hoverFactor = 0;

        // Si survolé, calculer la proximité de la maison avec la souris
        if (isHovered && introComplete) {
          const worldPos = house.basePos.clone().applyMatrix4(group.matrixWorld);
          const dist = worldPos.distanceTo(mouse3D);
          const effectRadius = 3.5; // Rayon d'action de la souris

          if (dist < effectRadius) {
            hoverFactor = 1.0 - dist / effectRadius;
          }
        }

        // Définir la hauteur et la couleur cibles en fonction du survol
        house.targetY = hoverFactor * 1.2;
        if (i === atelierHouseIndex && hoverFactor <= 0.05) {
          house.targetColor.set("#7FA3A1");
        } else if (hoverFactor > 0.05) {
          house.targetColor.set(house.paletteColor);
        } else {
          house.targetColor.set("#ffffff"); // Reviens au blanc/gris par défaut
        }

        // Interpolation douce (Spring effect)
        house.currentY += (house.targetY - house.currentY) * 0.15;
        house.color.lerp(house.targetColor, 0.1);

        // Application des transformations
        dummy.position.copy(house.basePos);
        dummy.position.y = house.currentY;

        // Étirement léger quand la maison "saute"
        const stretch = 1 + house.currentY * 0.15;
        dummy.scale.set(
          house.scaleMultiplier,
          house.scaleMultiplier * stretch,
          house.scaleMultiplier
        );

        dummy.rotation.set(0, house.baseRotY, 0);
        dummy.updateMatrix();

        instancedMesh.setMatrixAt(i, dummy.matrix);
        instancedMesh.setColorAt(i, house.color);
      }

      instancedMesh.instanceMatrix.needsUpdate = true;
      if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true;

      // Le quartier tourne et réagit à la souris uniquement après la révélation complète
      if (introComplete) {
        group.rotation.y += delta * 0.05;

        // Léger effet de parallaxe avec la souris
        if (isHovered) {
          group.rotation.x += (-pointer.y * 0.1 - group.rotation.x) * 0.05;
          group.rotation.z += (pointer.x * 0.1 - group.rotation.z) * 0.05;
        } else {
          group.rotation.x += (0 - group.rotation.x) * 0.05;
          group.rotation.z += (0 - group.rotation.z) * 0.05;
        }
      }

      camera.lookAt(cameraTarget);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      mount.removeEventListener("pointermove", onPointerMove);
      mount.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", resize);

      geometry.dispose();
      material.dispose();
      introTween.kill();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="pointer-events-auto relative flex h-full w-full cursor-crosshair items-center justify-center">
      <div ref={mountRef} className="absolute inset-0 outline-none" />
    </div>
  );
}
function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F2CC8F] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="wall-marquee mb-10 flex whitespace-nowrap font-momo font-bold text-[13vw] leading-none text-[#C87056]/16">
        <span>SERVICES - DESIGN - CODE - CONTENU - </span>
        <span>SERVICES - DESIGN - CODE - CONTENU - </span>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#C87056]">
              Services
            </p>
            <h2 className="font-momo text-5xl leading-none sm:text-7xl">
              Des formules claires, sans surprise.
            </h2>
          </div>
          <p className="reveal max-w-2xl self-end text-xl leading-relaxed text-[#333333]/72">
            Que vous ayez besoin d&apos;un site simple ou d&apos;un outil
            évolutif, nous concevons une solution adaptée, sans jargon, sans
            usine à gaz.
          </p>
        </div>

        <div className="reveal mt-12 flex flex-wrap gap-3">
          {capabilities.map((item, index) => (
            <motion.span
              key={item}
              className="rounded-full border border-[#C87056]/18 bg-white/46 px-5 py-3 text-sm text-[#C87056] shadow-sm"
              whileHover={{
                y: -8,
                rotate: index % 2 === 0 ? -3 : 3,
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
            >
              {item}
            </motion.span>
          ))}
        </div>

        <div className="mt-16 grid gap-7 lg:grid-cols-2">
          {formulas.map((formula, index) => (
            <motion.article
              key={formula.name}
              className="reveal relative min-h-[620px] overflow-hidden rounded-md border border-[#C87056]/14 bg-white p-8 shadow-2xl shadow-[#C87056]/10 md:p-12"
              whileHover={{ y: -14, rotateY: index === 0 ? -5 : 5, rotateX: 4 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              {index === 1 && (
                <span className="absolute right-6 top-6 rounded-full bg-[#C87056] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  Personnalisée
                </span>
              )}
              <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[#C87056]">
                {formula.name}
              </p>
              <h3 className="font-momo text-4xl leading-none">{formula.title}</h3>
              <p className="mt-6 max-w-xl leading-relaxed text-[#333333]/70">
                {formula.text}
              </p>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <ServiceList title="Inclus" items={formula.included} active />
                <ServiceList
                  title={formula.excluded.length > 0 ? "Non inclus" : "En plus"}
                  items={
                    formula.excluded.length > 0
                      ? formula.excluded
                      : ["Formation à la prise en main", "Accompagnement après lancement"]
                  }
                  active={formula.excluded.length === 0}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceList({
  title,
  items,
  active,
}: {
  title: string;
  items: string[];
  active: boolean;
}) {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-[#C87056]">{title}</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 ${active ? "text-[#333333]/74" : "text-[#333333]/38"
              }`}
          >
            {active ? (
              <Check className="mt-1 text-[#C87056]" size={16} />
            ) : (
              <X className="mt-1" size={16} />
            )}
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCarousel({ projects }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const total = projects.length;

  useEffect(() => {
    if (!sectionRef.current || total === 0) return;

    const ctx = gsap.context(() => {
      const angle = 360 / total;
      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? window.innerWidth * 0.75 : 800;
      const extraSpace = isMobile ? 200 : 600;

      let radius = 1200;
      if (total > 2) {
        radius = (cardWidth + extraSpace) / (2 * Math.tan(Math.PI / total));
      }
      radius = Math.max(radius, isMobile ? 700 : 1400);

      const cards = gsap.utils.toArray<HTMLElement>('.project-card');
      cards.forEach((card, i) => {
        gsap.set(card, {
          transformOrigin: `50% 50% -${radius}px`,
          rotationY: i * angle,
        });
      });

      gsap.set('.carousel-rotation', {
        transformOrigin: `50% 50% -${radius}px`
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${total * 350}vh`,
          scrub: 0.5,
          pin: true,
        }
      });

      if (total > 1) {
        tl.to('.carousel-rotation', {
          rotationY: -((total - 1) * angle),
          ease: "none",
          duration: total - 1
        }, 0);

        const titles = gsap.utils.toArray<HTMLElement>('.project-title-wrapper');
        titles.forEach((title, i) => {
          gsap.set(title, { yPercent: i === 0 ? 0 : 100 });

          if (i < total - 1) {
            tl.to(title, { yPercent: -100, ease: "none", duration: 1 }, i);
          }
          if (i > 0) {
            tl.to(title, { yPercent: 0, ease: "none", duration: 1 }, i - 1);
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [total]);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  if (total === 0) return null;

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden bg-[#EAE3DB]"
      >
        <div className="absolute left-5 top-6 z-[100] sm:left-8 lg:left-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#C87056]">
            Projets
          </p>
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ perspective: "2200px" }}
        >
          <div
            className="carousel-rotation absolute inset-0 flex items-center justify-center w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {projects.map((project, index) => (
              <button
                type="button"
                key={`card-${project.slug || index}`}
                onClick={() => setSelectedProject(project)}
                aria-label={`Voir le détail du projet ${project.title}`}
                className="project-card absolute flex items-center justify-center w-[75vw] max-w-[800px] aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-lg drop-shadow-[0_25px_45px_rgba(0,0,0,0.2)] pointer-events-auto transition-transform hover:scale-[1.015] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C87056]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src={getProjectImage(project.photos?.[0])}
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 800px) 75vw, 800px"
                  priority={index < 2}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
          {projects.map((project, index) => (
            <div
              key={`title-${project.slug || index}`}
              className="project-title-wrapper absolute inset-0 flex flex-col items-center justify-center w-full h-full px-5"
            >
              <h2 className="font-momo text-[clamp(4.4rem,12vw,9rem)] leading-[0.8] text-white text-center uppercase drop-shadow-2xl">
                {project.title}
              </h2>

              <div className="mt-8 pointer-events-auto">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex rounded-full bg-[#f4a1c6] px-8 py-3.5 text-sm font-bold text-black shadow-lg transition-transform hover:scale-105 hover:bg-[#ffb6d5]"
                >
                  Voir en détail
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectOverview
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

function ProjectOverview({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const photos = project.photos ?? [];

  return (
    <motion.div
      className="fixed inset-0 z-[120] overflow-y-auto bg-[#EAE3DB] text-[#333333]"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-overview-title"
    >
      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#C87056]/12 bg-[#EAE3DB]/90 px-5 py-4 backdrop-blur sm:px-8 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C87056]">
          Projet
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer le projet"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C87056]/18 bg-white/68 text-[#C87056] transition hover:bg-white"
        >
          <X size={20} />
        </button>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-14">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.28em] text-[#C87056]">
            {project.subtitle || "Site web sur mesure"}
          </p>
          <h2
            id="project-overview-title"
            className="font-momo text-[clamp(4rem,10vw,8rem)] leading-[0.82] text-[#333333]"
          >
            {project.title}
          </h2>
        </div>

        <div className="self-end">
          {project.description && (
            <p className="text-lg leading-relaxed text-[#333333]/74">
              {project.description}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#C87056] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#FF9B54]"
              >
                Visiter le site
                <ArrowUpRight size={16} />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="inline-flex rounded-full border border-[#C87056]/20 bg-white/58 px-5 py-3 text-sm font-semibold text-[#C87056] transition hover:-translate-y-1 hover:bg-white"
            >
              Retour aux projets
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-5 px-5 pb-12 sm:px-8 lg:grid-cols-3 lg:px-12">
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <motion.figure
              key={`${project.slug || project.title}-photo-${index}`}
              className={`relative overflow-hidden rounded-lg shadow-2xl shadow-[#333333]/10 ${index === 0 ? "aspect-[16/10] lg:col-span-2 lg:row-span-2" : "aspect-[4/3]"
                }`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index, duration: 0.6 }}
            >
              <Image
                src={getProjectImage(photo)}
                alt={`${project.title} - aperçu ${index + 1}`}
                fill
                className="object-contain"
                sizes={index === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
              />
            </motion.figure>
          ))
        ) : (
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg lg:col-span-3">
            <Image
              src="/og-image.png"
              alt={project.title}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        )}
      </div>

      <div className="mx-auto grid max-w-7xl gap-5 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:px-12">
        <section className="rounded-md border border-[#C87056]/14 bg-white/62 p-6 md:p-8">
          <h3 className="font-momo text-3xl text-[#C87056]">Données projet</h3>
          <dl className="mt-6 grid gap-4 text-sm">
            <div className="flex justify-between gap-6 border-b border-[#C87056]/12 pb-3">
              <dt className="text-[#333333]/52">Nom</dt>
              <dd className="text-right font-medium">{project.title}</dd>
            </div>
            {project.subtitle && (
              <div className="flex justify-between gap-6 border-b border-[#C87056]/12 pb-3">
                <dt className="text-[#333333]/52">Catégorie</dt>
                <dd className="text-right font-medium">{project.subtitle}</dd>
              </div>
            )}
            {project.slug && (
              <div className="flex justify-between gap-6 border-b border-[#C87056]/12 pb-3">
                <dt className="text-[#333333]/52">Slug</dt>
                <dd className="text-right font-medium">{project.slug}</dd>
              </div>
            )}
            <div className="flex justify-between gap-6">
              <dt className="text-[#333333]/52">Images</dt>
              <dd className="text-right font-medium">{photos.length}</dd>
            </div>
          </dl>
        </section>

        {project.review?.quote && (
          <section className="rounded-md border border-[#C87056]/14 bg-[#FBE8D8] p-6 md:p-8">
            <h3 className="font-momo text-3xl text-[#C87056]">Retour client</h3>
            <blockquote className="mt-6 text-xl leading-relaxed text-[#333333]/74">
              “{project.review.quote}”
            </blockquote>
            {project.review.author && (
              <p className="mt-5 text-sm font-semibold text-[#C87056]">
                {project.review.author}
              </p>
            )}
          </section>
        )}
      </div>
    </motion.div>
  );
}

function getProjectImage(photo: Project["photos"][number] | string | undefined) {
  if (!photo) return "/og-image.png";
  return typeof photo === "string"
    ? photo
    : urlFor(photo).width(1800).height(1200).url();
}

function About() {
  return (
    <section className="about-stage relative overflow-hidden bg-[#7FA3A1] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="wall-marquee absolute top-8 flex whitespace-nowrap font-bold font-momo text-[13vw] leading-none text-white/10">
        <span>CLARA + ALEX - CLARA + ALEX - </span>
        <span>CLARA + ALEX - CLARA + ALEX - </span>
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="reveal relative"
          whileHover={{ rotate: -1.5, y: -8 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
        >
          <div className="float-item absolute -inset-4 rotate-3 rounded-md border border-white/24" />
          <div className="about-portrait relative aspect-[4/5] overflow-hidden rounded-md bg-[#EBE9E4] shadow-2xl shadow-[#333333]/18">
            <Image
              src="/images/team/about_us.png"
              alt="Clara et Alex, le duo Atelier Voisin"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <Image
            src="/images/team/alex_pixel-speech-bubble.png"
            alt=""
            width={118}
            height={118}
            className="about-pop about-drift pointer-events-none absolute left-[10%] top-[25%] z-20 w-20 sm:w-24 lg:w-28"
          />
          <Image
            src="/images/team/clara_pixel-speech-bubble.png"
            alt=""
            width={104}
            height={104}
            className="about-pop about-drift pointer-events-none absolute right-[8%] top-[38%] z-20 w-16 sm:w-20 lg:w-24"
          />
          {aboutNotes.map((note) => (
            <span
              key={note.label}
              className={`about-pop about-drift absolute z-20 rounded-full border border-white/24 bg-[#EBE9E4] px-4 py-2 text-sm font-semibold text-[#C87056] shadow-lg shadow-[#333333]/10 ${note.className}`}
            >
              {note.label}
            </span>
          ))}
        </motion.div>

        <div className="reveal relative z-10">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#F2CC8F]">
            Atelier
          </p>
          <h2 className="font-momo text-5xl leading-none sm:text-7xl">
            Deux profils, une même attention au détail.
          </h2>
          <div className="mt-10 space-y-6 text-white/82">
            <p className="text-lg leading-relaxed">
              Clara, designeuse UX/UI, et Alex, développeur full-stack, ont
              travaillé plusieurs années dans des environnements exigeants à
              Paris et Amsterdam avant de revenir à Bordeaux.
            </p>
            <p className="text-lg leading-relaxed">
              L&apos;Atelier Voisin est né de cette envie: faire du digital
              quelque chose de plus lisible, plus humain et plus facile à gérer
              pour les entreprises locales, créateurs, lieux et indépendants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData, formEl: HTMLFormElement) => {
    if (loading) return;

    try {
      setLoading(true);
      await sendContactEmail(formData);
      toast.success("Merci ! Votre message a été envoyé.");
      formEl.reset();
    } catch {
      toast.error("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#FBE8D8] px-5 py-24 text-[#333333] sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#C87056]">
            Contact
          </p>
          <h2 className="font-momo text-5xl leading-none sm:text-7xl">
            Vous avez un projet en tête ?
          </h2>
          <p className="mt-7 max-w-xl text-xl leading-relaxed text-[#333333]/70">
            Nous avons les compétences pour le réaliser. Dites-nous en plus sur
            vous, votre activité et ce que vous voulez faire évoluer.
          </p>

          <div className="mt-12 space-y-8">
            {contactItems.map(({ icon: Icon, title, text, value }) => (
              <motion.div
                key={title}
                className="flex items-start gap-4"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-[#C87056]/18 bg-white/56 text-[#C87056]">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-momo text-2xl text-[#C87056]">{title}</h3>
                  <p className="mt-1 text-[#333333]/64">{text}</p>
                  <p className="mt-2 underline decoration-[#C87056]/35 underline-offset-4">
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            await handleSubmit(formData, event.currentTarget);
          }}
          className="reveal rounded-md border border-[#C87056]/14 bg-white/78 p-8 shadow-2xl shadow-[#C87056]/10 backdrop-blur md:p-12"
        >
          <div className="mb-8 flex items-start justify-between gap-6">
            <div>
              <h3 className="font-momo text-4xl">
                Nous vous répondrons dans les plus brefs délais.
              </h3>
              <p className="mt-4 text-[#333333]/62">
                Quelques lignes suffisent pour ouvrir la conversation.
              </p>
            </div>
            <MessageSquare className="shrink-0 text-[#C87056]" />
          </div>

          <div className="grid gap-5">
            <Field label="Votre nom" name="name" disabled={loading} />
            <Field label="Votre email" name="email" type="email" disabled={loading} />
            <label className="block">
              <span className="mb-2 block text-sm text-[#333333]/64">
                Votre message
              </span>
              <textarea
                name="message"
                required
                disabled={loading}
                rows={7}
                className="w-full resize-none rounded-md border border-[#C87056]/18 bg-[#FBE8D8]/45 px-4 py-3 text-[#333333] outline-none transition focus:border-[#C87056] disabled:opacity-50"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#C87056] px-5 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#FF9B54] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
            <ArrowUpRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  disabled,
}: {
  label: string;
  name: string;
  type?: string;
  disabled: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-[#333333]/64">{label}</span>
      <input
        name={name}
        type={type}
        required
        disabled={disabled}
        className="w-full rounded-md border border-[#C87056]/18 bg-[#FBE8D8]/45 px-4 py-3 text-[#333333] outline-none transition focus:border-[#C87056] disabled:opacity-50"
      />
    </label>
  );
}
