"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Plus tard, vous pourrez lier cela à un service comme Formspree, Resend ou une API Route Next.js
    if (email && message) {
      setStatus("success");
      setEmail("");
      setMessage("");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex flex-col justify-between">
      {/* BARRE DE NAVIGATION MINIMALE */}
      <nav className="max-w-5xl w-full mx-auto px-6 py-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-emerald-400 font-mono text-sm hover:underline"
        >
          ← Retour à l&apos;accueil
        </Link>
        <span className="text-xs font-mono text-slate-500">
          Support Développeur
        </span>
      </nav>

      {/* CONTENU PRINCIPAL */}
      <main className="max-w-3xl w-full mx-auto px-6 py-12 flex-grow flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Contact & Support
        </h1>
        <p className="text-slate-400 mb-8 leading-relaxed">
          Une question sur l&apos;une de mes applications ou besoin
          d&apos;assistance technique ? Utilisez le formulaire ci-dessous ou
          écrivez-moi directement par e-mail.
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* FORMULAIRE (2/3 de l'espace) */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-2 space-y-4 bg-slate-800 border border-slate-700 p-6 rounded-lg"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider"
              >
                Votre adresse e-mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemple@email.com"
                className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-2.5 text-slate-100 focus:outline-none focus:border-emerald-400 font-sans text-sm transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider"
              >
                Message / Description du problème
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Expliquez votre demande en détail..."
                className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-2.5 text-slate-100 focus:outline-none focus:border-emerald-400 font-sans text-sm transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded text-sm transition-colors"
            >
              Envoyer le message
            </button>

            {/* MESSAGES D'ÉTAT */}
            {status === "success" && (
              <p className="text-sm text-emerald-400 font-mono mt-2 bg-emerald-500/10 p-3 rounded border border-emerald-500/20">
                ✓ Message simulé avec succès ! Merci de votre intérêt.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-rose-400 font-mono mt-2 bg-rose-500/10 p-3 rounded border border-rose-500/20">
                ⚠ Veuillez remplir tous les champs obligatoires.
              </p>
            )}
          </form>

          {/* COORDONNÉES DIRECTES (1/3 de l'espace) */}
          <div className="space-y-4">
            <div className="bg-slate-800/40 border border-slate-800 p-5 rounded-lg">
              <h2 className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                Contact Direct
              </h2>
              {/* REMPLACEZ PAR VOTRE ADRESSE EMAIL PRO */}
              <p className="text-white font-medium text-sm break-all select-all">
                votre.email@example.com
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-800 p-5 rounded-lg">
              <h2 className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                Localisation
              </h2>
              <p className="text-slate-300 text-sm">Italie</p>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} - Support Développeur. Tous droits
          réservés.
        </p>
      </footer>
    </div>
  );
}
