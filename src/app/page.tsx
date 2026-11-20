import Link from "next/link";
import { getCurrentYear } from "../lib/current-year";
import PhotoProfil from "./photo-profil";

// Liste de vos compétences (Stack technique)
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "C# (.NET)",
  "React Native",
  "JavaScript",
  "HTML",
  "CSS",
];

type ProjectStatus = "live" | "in-progress" | "coming-soon";
type ProjectPlatform = "mobile" | "web";

type Project = {
  title: string;
  description: string;
  tech: string[];
  platform: ProjectPlatform;
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  privacyUrl?: string;
};

const statusStyles: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  live: {
    label: "En ligne",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  "in-progress": {
    label: "En cours",
    className: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  "coming-soon": {
    label: "Bientôt disponible",
    className: "bg-slate-700/40 text-slate-300 border-slate-600",
  },
};

// Applications mobiles
const mobileApps: Project[] = [
  {
    title: "TontineCommunity",
    description:
      "Application d'organisation de tontines : gérez vos groupes d'épargne collective et tenez les notes des cotisations et des tours, sans aucun transfert d'argent.",
    tech: [
      "Expo",
      "React Native",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Supabase",
      "Stripe",
      "Tesseract.js",
      "Resend",
      "EAS Build",
      "Jest",
    ],
    platform: "mobile",
    status: "in-progress",
    playStoreUrl: "",
    appStoreUrl: "",
    privacyUrl: "/privacy-my-app",
  },
];

// Projets web
const webProjects: Project[] = [
  {
    title: "Classifica Basket",
    description:
      "Application web en cours de développement pour l'ABC Castelfiorentino (Serie C masculine et féminine) : classements, calendrier, résultats, statistiques, fiches joueurs et équipes, actualités et notifications.",
    tech: [
      "React Native",
      "Expo",
      "React Native Web",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "JWT",
      "Docker",
    ],
    platform: "web",
    status: "coming-soon",
  },
];

// Projets à venir
const upcomingProjects: Project[] = [];

function ProjectCard({ project }: { project: Project }) {
  const status = statusStyles[project.status];

  return (
    <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg flex flex-col justify-between hover:-translate-y-1 transition-transform">
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span
            className={`text-xs font-mono px-2 py-1 rounded border whitespace-nowrap ${status.className}`}
          >
            {status.label}
          </span>
        </div>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-slate-900 text-emerald-400 font-mono text-xs rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-3 pt-4 border-t border-slate-700/50">
        <div className="flex flex-wrap items-center gap-3">
          {project.privacyUrl && (
            <Link
              href={project.privacyUrl}
              className="text-xs text-slate-400 hover:text-emerald-400 underline transition-colors"
            >
              Privacy Policy
            </Link>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-emerald-400 underline transition-colors"
            >
              Code source
            </a>
          )}
          {project.platform === "web" && !project.githubUrl && (
            <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-700 px-2 py-1 rounded">
              Code privé
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Voir le site →
            </a>
          )}
          {project.platform === "web" && !project.liveUrl && (
            <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-700 px-2 py-1 rounded">
              Pas encore disponible
            </span>
          )}
          {project.platform === "mobile" && (
            <>
              {project.playStoreUrl ? (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Google Play →
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-700 px-2 py-1 rounded">
                  Bientôt sur Google Play
                </span>
              )}
              {project.appStoreUrl ? (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  App Store →
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-700 px-2 py-1 rounded">
                  Bientôt sur l&apos;App Store
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default async function Home() {
  const currentYear = await getCurrentYear();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* 1. HERO SECTION (Présentation) */}
      <header className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-16">
          <div className="flex-1">
            <p className="text-emerald-400 font-mono text-sm mb-3">
              Bonjour, je m&apos;appelle
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 tracking-tight">
              PHELOUZAT
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-slate-200 mb-4">
              Je suis développeuse Fullstack &amp; Mobile.
            </p>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8">
              Basée en Italie depuis 3 ans, je conçois et développe des
              applications web et mobiles performantes, robustes et centrées sur
              l&apos;utilisateur.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded transition-colors text-center"
              >
                Voir mes projets
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 border border-slate-700 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 rounded transition-colors text-center"
              >
                Me contacter
              </Link>
              <a
                href="https://github.com/phelouzat3-glitch"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-700 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 rounded transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <PhotoProfil />
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

      {/* 3. APPLICATIONS MOBILES */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-white mb-12 flex items-center gap-2">
          <span className="text-emerald-400 font-mono text-xl">02.</span>{" "}
          Applications mobiles
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {mobileApps.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* 4. PROJETS WEB */}
      <section className="bg-slate-800/50 border-y border-slate-800 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-12 flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-xl">03.</span>{" "}
            Projets web
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {webProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROJETS À VENIR */}
      {upcomingProjects.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-white mb-12 flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-xl">04.</span>{" "}
            Projets à venir
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* 6. FOOTER */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            © {currentYear} - Portfolio Développeuse. Tous droits
            réservés.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-slate-300 underline">
              Contact
            </Link>
            <a
              href="https://github.com/phelouzat3-glitch"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 underline"
            >
              GitHub
            </a>
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
