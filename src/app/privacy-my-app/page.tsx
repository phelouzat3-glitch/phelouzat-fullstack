import Link from "next/link";

export default function PrivacyPolicy() {
  // CONFIGURATION DES PARAMÈTRES (À modifier)
  const appName = "TontineCommunity"; // Nom de votre application
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
              Cette politique de confidentialité décrit comment{" "}
              <strong>{appName}</strong>, application mobile éditée par une
              développeuse indépendante basée en Italie, collecte et utilise vos
              données. Elle s&apos;applique à l&apos;application et respecte le
              RGPD ainsi que les règles de l&apos;App Store et du Google Play
              Store.
            </p>
          </section>

          {/* SECTION 2 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              2. Nature de l&apos;application
            </h2>
            <p>
              {appName} est un outil d&apos;organisation et de tenue de notes
              pour vos groupes de tontine. L&apos;application n&apos;effectue
              aucun transfert d&apos;argent et ne détient aucun fonds. Les
              paiements liés à l&apos;abonnement Premium sont traités par notre
              prestataire de paiement (Stripe) ; {appName} ne stocke jamais
              votre numéro de carte bancaire.
            </p>
          </section>

          {/* SECTION 3 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              3. Données collectées
            </h2>
            <p className="mb-2">
              Nous collectons les catégories suivantes, toutes liées à votre
              identité (compte) et utilisées pour la fonctionnalité de
              l&apos;application :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Coordonnées :</strong> nom, adresse e-mail, numéro de
                téléphone.
              </li>
              <li>
                <strong>Informations financières :</strong> montants des
                cotisations, statut de paiement, reçus et historique de
                l&apos;abonnement Premium (aucune donnée de carte bancaire
                n&apos;est stockée).
              </li>
              <li>
                <strong>Information sensible :</strong> numéro de pièce
                d&apos;identité (CNI), utilisé pour la vérification et la
                prévention de la fraude.
              </li>
              <li>
                <strong>Contenu utilisateur :</strong> photos et vidéos (CNI
                recto/verso, reçus, avatar, photo de profil), messages vocaux,
                messages du tchat, citations, procès-verbaux et notes.
              </li>
              <li>
                <strong>Identifiants :</strong> identifiant utilisateur et jeton
                de notification push.
              </li>
              <li>
                <strong>Achats :</strong> historique d&apos;achats lié à
                l&apos;abonnement Premium.
              </li>
              <li>
                <strong>Données d&apos;utilisation :</strong> horodatage de
                connexion et adresse IP, pour la sécurité du compte.
              </li>
              <li>
                <strong>Autres données :</strong> âge, nationalité et rôle dans
                la tontine.
              </li>
            </ul>
          </section>

          {/* SECTION 4 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              4. Finalités du traitement
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Fournir et faire fonctionner les fonctionnalités de
                l&apos;application (gestion des groupes, notes, tchat,
                cotisations, abonnement Premium).
              </li>
              <li>
                Assurer la sécurité des comptes et prévenir la fraude,
                notamment à partir de la CNI, du numéro de téléphone et des
                journaux de connexion.
              </li>
              <li>
                Répondre à vos demandes d&apos;assistance et respecter nos
                obligations légales.
              </li>
            </ul>
          </section>

          {/* SECTION 5 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              5. Suivi et publicité
            </h2>
            <p>
              {appName} ne vous suit pas à des fins publicitaires.
              L&apos;application n&apos;intègre aucun SDK publicitaire, aucun
              outil d&apos;analyse tiers et n&apos;utilise aucun identifiant
              publicitaire. Vos données ne sont pas utilisées pour le suivi
              (« Data Not Used to Track You »).
            </p>
          </section>

          {/* SECTION 6 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              6. Données non collectées
            </h2>
            <p>
              Nous ne collectons pas : données de santé et forme physique,
              localisation, contacts, historique de navigation, historique de
              recherche, diagnostics (aucun SDK de crash tiers), données
              publicitaires, ni contenu du navigateur web.
            </p>
          </section>

          {/* SECTION 7 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              7. Partage des données
            </h2>
            <p>
              Nous ne vendons ni n&apos;échangeons vos données personnelles.
              Elles peuvent être traitées par des prestataires techniques
              agissant pour notre compte (hébergement, notifications push,
              paiement via Stripe) et uniquement dans le cadre des finalités
              décrites ci-dessus. Nous pouvons également divulguer des données
              si la loi l&apos;exige.
            </p>
          </section>

          {/* SECTION 8 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              8. Conservation et suppression
            </h2>
            <p>
              Vos données sont conservées pendant la durée de votre compte et
              selon les obligations légales applicables. Vous pouvez demander la
              suppression de votre compte et de vos données à tout moment en
              écrivant à l&apos;adresse indiquée ci-dessous.
            </p>
          </section>

          {/* SECTION 9 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              9. Sécurité des données
            </h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité standard (chiffrement
              des échanges, contrôle des accès) pour protéger vos données et
              empêcher tout accès non autorisé.
            </p>
          </section>

          {/* SECTION 10 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              10. Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès,
              de rectification, d&apos;effacement, de limitation, de portabilité
              et d&apos;opposition sur vos données. Pour exercer ces droits,
              contactez-nous à l&apos;adresse e-mail ci-dessous.
            </p>
          </section>

          {/* SECTION 11 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              11. Modifications de cette politique
            </h2>
            <p>
              Nous pouvons mettre à jour cette politique à tout moment. La date
              de dernière mise à jour est indiquée en haut de cette page.
            </p>
          </section>

          {/* SECTION 12 */}
          <section className="pt-6 border-t border-slate-700">
            <h2 className="text-lg font-semibold text-white mb-2">
              12. Contact
            </h2>
            <p>
              Pour toute question concernant cette politique ou la gestion de
              vos données personnelles, vous pouvez me contacter à
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
