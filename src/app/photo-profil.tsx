"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Portrait du hero : cliquable, il ouvre la photo en grand.
 * Fermeture par clic sur le fond, bouton, ou touche Échap.
 */
export default function PhotoProfil() {
  const [ouvert, setOuvert] = useState(false);

  useEffect(() => {
    if (!ouvert) return;

    const surTouche = (evenement: KeyboardEvent) => {
      if (evenement.key === "Escape") setOuvert(false);
    };

    const ancienDebordement = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", surTouche);

    return () => {
      document.body.style.overflow = ancienDebordement;
      window.removeEventListener("keydown", surTouche);
    };
  }, [ouvert]);

  return (
    <>
      <div className="relative w-44 h-44 md:w-72 md:h-72 shrink-0 self-start md:self-center">
        <button
          type="button"
          onClick={() => setOuvert(true)}
          aria-label="Agrandir la photo de profil"
          className="group relative block h-full w-full cursor-zoom-in rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/60"
        >
          <Image
            src="/photo-profil.jpg"
            alt="Portrait de Fernande Phelouzat Tcheudjeu, développeuse fullstack et mobile"
            fill
            preload
            sizes="(min-width: 768px) 288px, 176px"
            className="rounded-full object-cover ring-4 ring-emerald-500/40 shadow-2xl shadow-emerald-500/10 transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <span className="pointer-events-none absolute inset-0 rounded-full bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/20" />
        </button>
      </div>

      {ouvert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo de profil en grand"
          onClick={() => setOuvert(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-sm p-6"
        >
          <div
            className="relative"
            onClick={(evenement) => evenement.stopPropagation()}
          >
            <Image
              src="/photo-profil.jpg"
              alt="Portrait de Fernande Phelouzat Tcheudjeu, développeuse fullstack et mobile"
              width={900}
              height={823}
              sizes="(min-width: 1024px) 640px, 90vw"
              className="max-h-[85vh] w-auto rounded-2xl border border-slate-700 object-contain shadow-2xl"
            />
            <button
              type="button"
              onClick={() => setOuvert(false)}
              aria-label="Fermer la photo"
              autoFocus
              className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 bg-slate-900 text-xl text-slate-300 hover:border-emerald-400 hover:text-emerald-400 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
