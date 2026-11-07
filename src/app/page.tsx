import Link from "next/link";

// Liste de vos compétences (Stack technique)
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "C# (.NET)",
  "React Native",
];

// Vos applications (à afficher sur le Play Store)
const apps = [
  {
    title: "Nom de votre Application 1",
    description:
      "Une description claire et concise de ce que fait votre application. Expliquez le problème qu'elle résout pour l'utilisateur.",
    tech: ["React Native", "TypeScript", "Node.js"],
    playStoreUrl: "#", // Vous ajouterez le lien Google Play ici plus tard
    privacyUrl: "/privacy-my-app", // Lien requis par Google
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* 1. HERO SECTION (Présentation) */}
      <header className="max-w-5xl mx-auto px-6 py-20 md:py-32 flex flex-col justify-center">
        <p className="text-emerald-400 font-mono text-sm mb-3">
          Bonjour, je m&apos;appelle
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Développeur Fullstack & Mobile.
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8">
          Basé en Italie depuis 3 ans, je conçois et développe des applications
          web et mobiles performantes, robustes et centrées sur
          l&apos;utilisateur.
        </p>
        <div className="flex gap-4">
          <a
            href="#apps"
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded transition-colors text-center"
          >
            Voir mes applications
          </a>
          <Link
            href="/contact"
            className="px-6 py-3 border border-slate-700 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 rounded transition-colors text-center"
          >
            Me contacter
          </Link>
        </div>
      </header>

      {/* 2. COMPÉTENCES SECTION */}
      <section className="bg-slate-800/50 border-y border-slate-800 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-xl">01.</span>{" "}
            Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded text-slate-300 font-mono text-sm hover:border-emerald-500/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. APPLICATIONS SECTION (Pour le Play Store) */}
      <section id="apps" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-white mb-12 flex items-center gap-2">
          <span className="text-emerald-400 font-mono text-xl">02.</span> Mes
          Applications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {apps.map((app, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 p-6 rounded-lg flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {app.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {app.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {app.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-900 text-emerald-400 font-mono text-xs rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-700/50">
                <Link
                  href={app.privacyUrl}
                  className="text-xs text-slate-400 hover:text-emerald-400 underline transition-colors"
                >
                  Privacy Policy
                </Link>
                <a
                  href={app.playStoreUrl}
                  className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Google Play →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} - Portfolio Développeur. Tous droits
            réservés.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-slate-300 underline">
              Contact
            </Link>
            <Link
              href="/privacy-my-app"
              className="hover:text-slate-300 underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
