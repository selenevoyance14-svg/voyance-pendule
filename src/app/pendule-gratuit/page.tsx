import type { Metadata } from "next";
import PenduleClient from "./PenduleClient";

export const metadata: Metadata = {
  title: "Pendule gratuit en ligne : réponse Oui ou Non | Sélène",
  description: "Posez une question au pendule Oui/Non gratuit et obtenez une réponse aléatoire. Sans inscription : aide à la formulation et fiche de réflexion à télécharger.",
  alternates: { canonical: "/pendule-gratuit" },
  openGraph: {
    title: "Pendule gratuit en ligne — Oui, Non ou Incertain",
    description: "Posez une question fermée et consultez gratuitement le pendule, sans compte ni inscription.",
    url: "/pendule-gratuit",
    type: "website",
  },
};

export default function PenduleGratuitPage() {
  const faq = [
    {
      question: "Le pendule en ligne est-il vraiment gratuit ?",
      answer: "Oui. Vous pouvez poser autant de questions que vous le souhaitez, sans compte, sans email et sans paiement.",
    },
    {
      question: "Comment poser une bonne question au pendule ?",
      answer: "Formulez une seule question précise et fermée, à laquelle il est possible de répondre par Oui ou Non. Évitez les questions doubles ou trop vagues.",
    },
    {
      question: "Ma question est-elle enregistrée ?",
      answer: "Non. La question reste dans votre navigateur pendant la consultation et n’est pas envoyée ni conservée par Sélène Voyance.",
    },
    {
      question: "Pourquoi le pendule peut-il répondre Incertain ?",
      answer: "Incertain est l’un des trois résultats possibles du tirage aléatoire. Ce résultat ne révèle pas une information cachée : prenez une pause ou reformulez votre question.",
    },
    {
      question: "Pourquoi la réponse peut-elle changer pour la même question ?",
      answer: "Chaque tirage est indépendant et aléatoire. Répéter une question ne rend pas la réponse plus fiable et ne permet pas de prédire un événement.",
    },
    {
      question: "Comment effacer mes derniers tirages ?",
      answer: "Utilisez le bouton Effacer l’historique, rechargez la page ou quittez-la. Les cinq derniers tirages ne sont pas sauvegardés dans un compte ni dans le stockage de votre navigateur.",
    },
    {
      question: "Comment télécharger ma fiche de réflexion ?",
      answer: "Après le tirage, complétez les trois champs facultatifs et utilisez Télécharger ma fiche (.txt). Le fichier est créé dans votre navigateur. Vos notes ne sont pas envoyées au site et disparaissent de la page au prochain tirage, à son rechargement ou à sa fermeture.",
    },
    {
      question: "L’aide à la formulation analyse-t-elle ma question ?",
      answer: "Non. Elle assemble une activité et une période que vous choisissez pour proposer une question personnelle. Vous pouvez la modifier avant de consulter le pendule. Aucun texte n’est envoyé à un service d’analyse.",
    },
    {
      question: "Peut-on se fier à la réponse pour une décision importante ?",
      answer: "Non. Le résultat est généré aléatoirement et sert uniquement de support de réflexion et de divertissement. Il ne remplace jamais un avis médical, juridique, financier ou psychologique.",
    },
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Pendule Oui/Non gratuit de Sélène",
        url: "https://voyance-pendule.fr/pendule-gratuit",
        applicationCategory: "EntertainmentApplication",
        operatingSystem: "Tous",
        isAccessibleForFree: true,
        inLanguage: "fr-FR",
        description: "Un pendule en ligne gratuit qui propose une réponse Oui, Non ou Incertain à une question fermée.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PenduleClient faq={faq} />
    </>
  );
}
