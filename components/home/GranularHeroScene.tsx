"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { heroSceneZoomDelay, heroSceneZoomDuration } from "./heroTiming";

export default function GranularHeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const introHouseFaceY = 0.66;
    const cameraTarget = new THREE.Vector3(0, introHouseFaceY, 0);
    const camera = new THREE.PerspectiveCamera(35, mount.clientWidth / mount.clientHeight, 0.02, 100);
    camera.position.set(0, introHouseFaceY, 0.76);
    camera.lookAt(cameraTarget);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.domElement.style.pointerEvents = "none";
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
      roughness: 0.85,
      metalness: 0,
      clearcoat: 0,
      clearcoatRoughness: 1,
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

    const introTween = gsap.timeline({ delay: heroSceneZoomDelay });
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

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);
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
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", resize);

      geometry.dispose();
      material.dispose();
      introTween.kill();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="pointer-events-none relative flex h-full w-full items-center justify-center">
      <div ref={mountRef} className="absolute inset-0 outline-none" />
    </div>
  );
}
