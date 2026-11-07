import Link from "next/link";

export default function PrivacyPolicy() {
  // CONFIGURATION DES PARAMÈTRES (À modifier)
  const appName = "profilio-fullstack"; // Nom de votre application
  const developerEmail = "messervices465@gmail.com";
  const lastUpdated = "7 novembre 2026";

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans py-12 px-6">
      <div className="max-w-3xl mx-auto bg-slate-800 border border-slate-700 p-8 rounded-lg shadow-xl">
        {/* BOUTON RETOUR */}
        <Link
          href="/"
          className="text-emerald-400 font-mono text-sm hover:underline mb-6 inline-block"
        >
          ← Retour à l&apos;accueil
        </Link>

        {/* TITRE PRINCIPAL */}
        <h1 className="text-3xl font-bold text-white mb-2">
          Politique de Confidentialité
        </h1>
        <p className="text-xs font-mono text-slate-500 mb-8">
          Dernière mise à jour : {lastUpdated}
        </p>

        <div className="space-y-6 text-sm leading-relaxed">
          {/* SECTION 1 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              1. Introduction
            </h2>
            <p>
              Cette politique de confidentialité régit l&apos;utilisation de
              l&apos;application mobile <strong>{appName}</strong> créée par la
              développeuse indépendante basée en Italie. Nous accordons une grande
              importance à la vie privée de nos utilisateurs et nous nous
              engageons à protéger leurs données personnelles conformément aux
              règles du Google Play Store et du RGPD.
            </p>
          </section>

          {/* SECTION 2 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              2. Collecte et Utilisation des Données
            </h2>
            <p className="mb-2">
              <strong>Données collectées par l&apos;utilisateur :</strong>{" "}
              L&apos;application ne nécessite aucune inscription obligatoire et
              ne collecte pas activement de données personnelles identifiables
              (comme votre nom ou votre adresse) à moins que vous ne les
              partagiez volontairement (par exemple, en contactant le support).
            </p>
            <p>
              <strong>Données collectées automatiquement :</strong> Pour
              améliorer les performances, l&apos;application peut utiliser des
              services tiers (comme Google Analytics for Firebase ou AdMob) qui
              peuvent collecter des informations techniques anonymes
              (identifiant unique de l&apos;appareil, version du système
              d&apos;exploitation, données de crash).
            </p>
          </section>

          {/* SECTION 3 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              3. Autorisations de l&apos;appareil
            </h2>
            <p>
              L&apos;application peut demander certaines autorisations système
              (comme l&apos;accès au réseau Internet ou au stockage local)
              uniquement pour assurer son bon fonctionnement technique. Vous
              pouvez révoquer ces autorisations à tout moment dans les
              paramètres de votre smartphone.
            </p>
          </section>

          {/* SECTION 4 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              4. Partage des données avec des tiers
            </h2>
            <p>
              Nous ne vendons, n&apos;échangeons ni ne transférons vos
              informations personnelles à des tiers. Les seules données
              transmises le sont de manière anonyme à des outils d&apos;analyse
              technique approuvés par Google pour corriger les bugs de
              l&apos;application.
            </p>
          </section>

          {/* SECTION 5 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              5. Sécurité des données
            </h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité standard pour
              protéger l&apos;intégrité des informations collectées et empêcher
              tout accès non autorisé.
            </p>
          </section>

          {/* SECTION 6 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              6. Modifications de cette politique
            </h2>
            <p>
              Nous nous réservons le droit de mettre à jour cette politique de
              confidentialité à tout moment. Nous vous invitons à consulter
              régulièrement cette page pour prendre connaissance des éventuelles
              modifications.
            </p>
          </section>

          {/* SECTION 7 */}
          <section className="pt-6 border-t border-slate-700">
            <h2 className="text-lg font-semibold text-white mb-2">
              7. Contact
            </h2>
            <p>
              Pour toute question ou demande concernant la gestion de vos
              données personnelles, vous pouvez me contacter directement à
              l&apos;adresse e-mail suivante :{" "}
              <span className="text-emerald-400 font-mono">
                {developerEmail}
              </span>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
