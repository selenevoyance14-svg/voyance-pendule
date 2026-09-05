import type { Metadata } from "next";
import PenduleClient from "./PenduleClient";

export const metadata: Metadata = {
  title: "Pendule gratuit en ligne : réponse Oui ou Non | Sélène",
  description: "Posez une question au pendule Oui/Non gratuit et obtenez une réponse immédiate. Sans inscription : mode d’emploi, exemples et conseils pour bien formuler.",
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
