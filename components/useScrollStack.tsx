"use client"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useScrollStack() {
  useEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".panel")
    gsap.set(panels, { zIndex: (i) => panels.length - i })

    gsap.to(".panel:not(:last-child)", {
      yPercent: -100,
      ease: "none",
      stagger: 1,
      scrollTrigger: {
        trigger: "#stack-container",
        start: "top top",
        end: () => `+=${(panels.length - 1) * 100}%`,
        scrub: true,
        pin: true,
      },
    })
  }, [])
}
