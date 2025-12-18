"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function CurtainRevealFixed() {
  const wrappersRef = useRef([]);

  useEffect(() => {
    const wrappers = wrappersRef.current;

    const ctx = gsap.context(() => {
      // For each wrapper, animate the "next" panel sliding up over the current
      wrappers.forEach((wrap) => {
        const current = wrap.querySelector(".current");
        const next = wrap.querySelector(".next");
        if (!current || !next) return;

        // Ensure next starts off-screen below (absolute positioned)
        gsap.set(next, { yPercent: 100 });

        ScrollTrigger.create({
          trigger: wrap,
          start: "top top",
          end: "bottom top", // the scroll distance equals viewport height
          scrub: true,
          pin: true,          // pin the wrapper while animating
          pinSpacing: false,  // critical — prevents GSAP from adding extra space
          onToggle: self => {
            // debug helper (optional)
            // console.log("toggle", wrap, self.isActive);
          },
          animation: gsap.to(next, { yPercent: 0, ease: "none" }),
        });
      });
    });

    return () => ctx.revert();
  }, []);

  // Example content: 4 sections (we pair 1->2, 2->3, 3->4). Last section shown normally.
  const colors = ["#111", "#2b2b2b", "#444", "#666"];

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/** For n sections we create n-1 wrappers (pairs) */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          ref={(el) => (wrappersRef.current[i] = el)}
          style={{
            // wrapper must provide scroll space: 200vh gives one viewport for pin + one to animate
            height: "200vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/** CURRENT - sticky so it stays visible while the wrapper is pinned */}
          <div
            className="current"
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: colors[i],
              color: "white",
              fontSize: "3rem",
            }}
          >
            Section {i + 1}
          </div>

          {/** NEXT - absolute so it can slide over current */}
          <div
            className="next"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: colors[i + 1],
              color: "white",
              fontSize: "3rem",
              pointerEvents: "none", // avoid accidental interactions during animation
            }}
          >
            Section {i + 2}
          </div>
        </div>
      ))}

      {/** Final section after all wrappers (normal full-screen section) */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: colors[3],
          color: "white",
          fontSize: "3rem",
        }}
      >
        Final Section
      </section>

      {/** Extra bottom space so you can scroll past last section if needed */}
      <div style={{ height: "100vh" }} />
    </div>
  );
}
