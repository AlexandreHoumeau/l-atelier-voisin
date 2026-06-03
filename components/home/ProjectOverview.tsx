"use client";

import type { Project } from "@/types/project";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { getProjectImage } from "./projectImage";

export default function ProjectOverview({
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
              className={`relative overflow-hidden rounded-lg ${index === 0 ? "aspect-[16/10] lg:col-span-2 lg:row-span-2" : "aspect-[4/3]"
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
            {/* <div className="flex justify-between gap-6">
              <dt className="text-[#333333]/52">Images</dt>
              <dd className="text-right font-medium">{photos.length}</dd>
            </div> */}
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
