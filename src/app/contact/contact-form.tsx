"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("loading");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!response.ok) {
        throw new Error("Formspree error");
      }

      form.reset();
      setEmail("");
      setMessage("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const isLoading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      className="md:col-span-2 space-y-4 bg-slate-800 border border-slate-700 p-6 rounded-lg"
    >
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input
        type="hidden"
        name="_subject"
        value="Nouveau message depuis le portfolio"
      />

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider"
        >
          Votre adresse e-mail
        </label>
        <input
          id="email"
          name="email"
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
          name="message"
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
        disabled={isLoading}
        className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-semibold rounded text-sm transition-colors"
      >
        {isLoading ? "Envoi en cours..." : "Envoyer le message"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="text-sm text-emerald-400 font-mono mt-2 bg-emerald-500/10 p-3 rounded border border-emerald-500/20">
            ✓ Message envoyé avec succès ! Merci de votre intérêt.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-rose-400 font-mono mt-2 bg-rose-500/10 p-3 rounded border border-rose-500/20">
            ⚠ L&apos;envoi a échoué. Réessayez ou écrivez-moi directement par
            e-mail.
          </p>
        )}
      </div>
    </form>
  );
}
