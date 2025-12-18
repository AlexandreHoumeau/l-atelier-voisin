"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ZoomScroll() {
  const containerRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(boxRef.current, {
        scale: 200,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} style={{ height: "200vh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "200vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          ref={boxRef}
          style={{
            width: "1vw",
            height: "1vw",
            background: "black",
          }}
        />
      </div>
    </section>
  );
}
