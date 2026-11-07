"use client";

import { useState } from "react";

export function ContactForm() {
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
  );
}
