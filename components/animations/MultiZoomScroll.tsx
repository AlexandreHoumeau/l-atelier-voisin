"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MultiZoomScroll() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    const ctx = gsap.context(() => {
      sections.forEach((section) => {
        const box = section.querySelector(".zoom-box");

        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false,      // 👈 IMPORTANT FIX
          animation: gsap.to(box, {
            scale: 1.5,
            ease: "none",
          }),
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {[1, 2, 3].map((n, i) => (
        <section
          key={n}
          ref={(el) => (sectionsRef.current[i] = el)}
          style={{
            height: "100vh",     // 👈 FIX: pinSpacing = false requires 100vh
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="zoom-box"
              style={{
                width: "60vw",
                height: "60vw",
                background: "black",
              }}
            />
          </div>
        </section>
      ))}

      <div style={{ height: "150vh", padding: 80, fontSize: 40 }}>
        Final content after all zoom sections.
      </div>
    </>
  );
}
