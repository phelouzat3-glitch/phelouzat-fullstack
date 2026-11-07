import Link from "next/link";
import { getCurrentYear } from "../../lib/current-year";
import { ContactForm } from "./contact-form";

export default async function Contact() {
  const currentYear = await getCurrentYear();

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
          Support Développeuse
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
          <ContactForm />

          {/* COORDONNÉES DIRECTES (1/3 de l'espace) */}
          <div className="space-y-4">
            <div className="bg-slate-800/40 border border-slate-800 p-5 rounded-lg">
              <h2 className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                Contact Direct
              </h2>
              {/* REMPLACEZ PAR VOTRE ADRESSE EMAIL PRO */}
              <p className="text-white font-medium text-sm break-all select-all">
                messervices465@gmail.com
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
          © {currentYear} - Support Développeuse. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
