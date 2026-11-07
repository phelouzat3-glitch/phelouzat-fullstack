import Link from "next/link";

export default function PrivacyPolicy() {
  const appName = "Tontine Community";
  const developerEmail = "phelouzat3@gmail.com";
  const lastUpdated = "4 novembre 2026";

  const registrationData = [
    {
      label: "Identité",
      text: "nom, prénom, email, téléphone, nationalité, âge (vérifié ≥ 18 ans).",
    },
    {
      label: "Pièce d'identité",
      text: "numéro de CNI et photos recto/verso (relevées par reconnaissance optique pour accélérer l'inscription, jamais diffusées aux autres membres).",
    },
    {
      label: "Photo de profil",
      text: "photo de profil et photo de visage (facultatives).",
    },
  ];

  const usageData = [
    {
      label: "Activité tontine",
      text: "adhésions, cotisations, reçus de paiement, rôles (président, secrétaire, récepteur), bénéficiaires des séances, procès-verbaux.",
    },
    {
      label: "Messages du tchat",
      text: "textes, notes vocales, citations.",
    },
    {
      label: "Techniques",
      text: "jeton de notification push (Expo), données de connexion (horodatage, adresse IP) nécessaires à la sécurité.",
    },
  ];

  const purposes = [
    {
      goal: "Fournir le service Tontine (groupes, cotisations, tchat)",
      data: "Compte, activité tontine",
    },
    {
      goal: "Lutter contre la fraude financière (bannissements, blacklist)",
      data: "CNI, téléphone",
    },
    {
      goal: "Envoyer les notifications et emails transactionnels",
      data: "Push, email",
    },
    {
      goal: "Gérer les paiements d'abonnement",
      data: "Email + Stripe",
    },
    {
      goal: "Sécurité et conformité légale",
      data: "Données de connexion",
    },
  ];

  const processors = [
    {
      name: "Render",
      text: "hébergement du serveur (données chiffrées).",
    },
    {
      name: "Supabase",
      text: "base de données et stockage des photos (CNI, avatars, reçus).",
    },
    {
      name: "Stripe",
      text: "paiements de l'abonnement Premium (selon le canal).",
    },
    {
      name: "Google Play",
      text: "paiements de l'abonnement Premium sur Android.",
    },
    {
      name: "Resend",
      text: "envoi des emails transactionnels.",
    },
    {
      name: "Expo",
      text: "notifications push.",
    },
  ];

  const retention = [
    {
      label: "Compte actif",
      text: "vos données sont conservées tant que votre compte existe.",
    },
    {
      label: "Suppression du compte",
      text: "via le bouton « Supprimer mon compte » (onglet Profil), toutes vos données (adhésions, cotisations, messages, photos CNI, profil) sont définitivement effacées. Les séances déjà clôturées conservent des rapports anonymisés.",
    },
    {
      label: "Blacklist anti-fraude",
      text: "les numéros de CNI/téléphones bannis pour fraude sont conservés 10 ans pour protéger la communauté.",
    },
  ];

  const rights = [
    "du droit d'accès à vos données ;",
    "du droit de rectification ;",
    "du droit à l'effacement (ou via « Supprimer mon compte » directement) ;",
    "du droit d'opposition et à la limitation ;",
    "du droit à la portabilité ;",
    "du droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr) ou de l'autorité de contrôle de votre pays.",
  ];

  const security = [
    "Mots de passe hachés (bcrypt), jamais stockés en clair.",
    "Communications chiffrées en HTTPS.",
    "Contrôles d'accès stricts côté serveur ; les rôles (président, secrétaire, récepteur) sont vérifiés par le serveur, jamais par l'app.",
    "Sauvegardes et antivol d'accès chez les hébergeurs certifiés.",
  ];

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
          {/* INTRO */}
          <section className="space-y-3">
            <p>
              La présente politique de confidentialité décrit les données
              personnelles que l&apos;application mobile{" "}
              <strong>{appName}</strong> (« l&apos;Application ») collecte,
              l&apos;usage qui en est fait, les destinataires, la durée de
              conservation et les droits dont vous disposez, conformément à la
              loi Informatique et Libertés et au Règlement Général sur la
              Protection des Données (RGPD).
            </p>
            <p className="bg-slate-900/60 border border-slate-700 rounded p-4">
              <strong className="text-white">
                Éditeur de l&apos;application :
              </strong>{" "}
              Tcheudjeu Fernande Phelouzat
              <br />
              <strong className="text-white">
                Contact protection des données :
              </strong>{" "}
              <span className="text-emerald-400 font-mono">
                {developerEmail}
              </span>
            </p>
          </section>

          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              1. Données collectées
            </h2>
            <h3 className="font-semibold text-slate-200 mt-3 mb-1">
              1.1. Données fournies lors de l&apos;inscription
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {registrationData.map((item) => (
                <li key={item.label}>
                  <strong>{item.label} :</strong> {item.text}
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-slate-200 mt-3 mb-1">
              1.2. Données générées par l&apos;utilisation
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {usageData.map((item) => (
                <li key={item.label}>
                  <strong>{item.label} :</strong> {item.text}
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-slate-200 mt-3 mb-1">
              1.3. Données de paiement (abonnement Premium)
            </h3>
            <p>
              Sur Android, l&apos;abonnement Premium est traité par{" "}
              <strong>Google Play Billing</strong>. Selon le canal de paiement,{" "}
              <strong>Stripe</strong> peut également être utilisé.
              L&apos;application ne stocke <strong>jamais</strong> les numéros de
              carte bancaire : elle reçoit uniquement le statut de
              l&apos;abonnement et l&apos;identifiant de votre compte. Sur iOS,
              l&apos;abonnement n&apos;est pas disponible à l&apos;achat dans
              l&apos;application.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              2. Finalités (pourquoi ces données ?)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="py-2 pr-4 font-semibold text-white">
                      Finalité
                    </th>
                    <th className="py-2 font-semibold text-white">
                      Données concernées
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {purposes.map((row) => (
                    <tr
                      key={row.goal}
                      className="border-b border-slate-700/60 align-top"
                    >
                      <td className="py-2 pr-4">{row.goal}</td>
                      <td className="py-2">{row.data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              3. Destinataires des données
            </h2>
            <p className="mb-2">
              Vos données ne sont <strong>jamais vendues</strong>. Elles sont
              hébergées et traitées par des sous-traitants sélectionnés, tous
              soumis au RGPD / aux clauses contractuelles types :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              {processors.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong> – {item.text}
                </li>
              ))}
            </ul>
            <p className="mt-2">
              Les <strong>autres membres</strong> d&apos;une tontine voient
              uniquement les informations nécessaires au fonctionnement du
              groupe (nom, prénom, photo de profil, statut de cotisation). Vos
              photos de CNI ne sont <strong>jamais</strong> visibles par les
              autres membres.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              4. Durée de conservation
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              {retention.map((item) => (
                <li key={item.label}>
                  <strong>{item.label} :</strong> {item.text}
                </li>
              ))}
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              5. Vos droits (RGPD)
            </h2>
            <p className="mb-2">
              Vous disposez, sur simple demande à{" "}
              <span className="text-emerald-400 font-mono">
                {developerEmail}
              </span>{" "}
              :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              {rights.map((right) => (
                <li key={right}>{right}</li>
              ))}
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              6. Sécurité
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              {security.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              7. Mineurs
            </h2>
            <p>
              L&apos;Application est réservée aux personnes{" "}
              <strong>âgées de 18 ans ou plus</strong> (l&apos;inscription est
              bloquée en deçà). Si vous découvrez le compte d&apos;un mineur,
              contactez-nous pour son effacement immédiat.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              8. Cookies / traceurs
            </h2>
            <p>
              L&apos;Application mobile n&apos;utilise{" "}
              <strong>pas de cookies publicitaires</strong> ni de traçage à des
              fins marketing.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              9. Modifications
            </h2>
            <p>
              Toute évolution de cette politique sera publiée dans cette page et
              la date de mise à jour actualisée. En cas de changement majeur,
              vous en serez informé via l&apos;Application.
            </p>
          </section>

          <p className="pt-6 border-t border-slate-700 text-xs text-slate-500">
            © 2026 {appName}. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
