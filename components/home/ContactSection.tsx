"use client";

import { sendContactEmail } from "@/app/actions/contact";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPinned, MessageCircle, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

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

export default function ContactSection() {
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
