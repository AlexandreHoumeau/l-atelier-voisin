"use client";

import { Sparkles } from "lucide-react";
import Logo from "./Logo";
import GranularHeroScene from "./GranularHeroScene";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#EBE9E4] px-5 pb-16 pt-6 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_12%,rgba(255,155,84,0.22),transparent_28%),radial-gradient(circle_at_12%_82%,rgba(127,163,161,0.26),transparent_35%)]" />

      <header className="hero-ui pointer-events-none relative z-30 flex items-center justify-between opacity-0">
        <a href="#" className="pointer-events-auto relative z-30 flex items-center gap-3" aria-label="Atelier Voisin">
          <Logo className="h-10 w-auto sm:h-12" />
          <span className="hidden font-lexend text-sm font-semibold uppercase tracking-[0.18em] text-[#C87056] sm:inline">
            Atelier Voisin
          </span>
        </a>
        <nav className="pointer-events-auto relative z-30 hidden items-center gap-2 text-sm text-[#333333]/68 md:flex">
          <a
            href="#services"
            className="inline-flex rounded-full px-3 py-2 transition hover:bg-white/50 hover:text-[#C87056]"
          >
            Services
          </a>
          <a
            href="#projects"
            className="inline-flex rounded-full px-3 py-2 transition hover:bg-white/50 hover:text-[#C87056]"
          >
            Projets
          </a>
          <a
            href="#contact"
            className="inline-flex rounded-full px-3 py-2 transition hover:bg-white/50 hover:text-[#C87056]"
          >
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="pointer-events-auto relative z-30 rounded-full bg-[#C87056] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#FF9B54]"
        >
          Diagnostic gratuit
        </a>
      </header>

      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <GranularHeroScene />
      </div>

      <div className="hero-readability-overlay pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(235,233,228,0.96)_0%,rgba(235,233,228,0.86)_34%,rgba(235,233,228,0.34)_62%,rgba(235,233,228,0)_100%)] opacity-0" />

      <div className="hero-ui pointer-events-none relative z-10 flex min-h-[calc(100vh-5rem)] items-center pt-16 opacity-0">
        <div className="w-full max-w-5xl pb-12">
          <p className="pointer-events-auto float-item mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#C87056]/20 bg-white/78 px-4 py-2 text-sm text-[#C87056] shadow-sm">
            <Sparkles size={16} />
            Sites web, systèmes connectés et automatisations utiles
          </p>
          <h1 className="pointer-events-auto max-w-5xl font-momo text-[2.4rem] leading-[0.94] text-[#333333] sm:text-[clamp(2.75rem,6.6vw,7rem)] sm:leading-[0.9]">
            {["Sites web,", "automatisation", "et outils IA."].map((line) => (
              <span className="block overflow-hidden" key={line}>
                <span className="hero-word block origin-left">{line}</span>
              </span>
            ))}
          </h1>
          <p className="pointer-events-auto mt-7 max-w-xl text-lg leading-relaxed text-[#333333]/78 sm:text-xl">
            Atelier Voisin aide les organisations, équipes et indépendants à
            créer des sites efficaces, connecter leurs outils et automatiser les
            tâches répétitives.
          </p>
          <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="relative z-30 inline-flex rounded-full bg-[#C87056] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#FF9B54]"
            >
              Demander un diagnostic gratuit
            </a>
            <a
              href="#services"
              className="relative z-30 inline-flex rounded-full border border-[#C87056]/20 bg-white/68 px-6 py-3 text-sm font-semibold text-[#C87056] transition hover:-translate-y-1 hover:bg-white"
            >
              Voir les offres
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
