import type { Metadata } from "next";
import AffiliateConsultation from "@/app/components/AffiliateConsultation";

export const metadata: Metadata = {
  title: "Outils de guidance gratuits | Sélène Voyance",
  description: "Découvrez le pendule Oui/Non, le tirage de cartes, l'horoscope et les messages angéliques gratuitement et sans inscription.",
  alternates: { canonical: "/pendule-gratuit" },
  robots: { index: false, follow: true },
};

const TOOLS = [
  { href: "/pendule-gratuit", icon: "🔮", title: "Pendule Oui / Non", text: "Posez une question fermée et obtenez une réponse instantanée." },
  { href: "/tirage", icon: "🃏", title: "Tirage de cartes", text: "Tirez une, trois ou cinq cartes et découvrez leur message." },
  { href: "/horoscope", icon: "♈", title: "Horoscope du jour", text: "Consultez gratuitement les tendances de votre signe." },
  { href: "/message-ange", icon: "🪽", title: "Message angélique", text: "Recevez un message symbolique pour accompagner votre journée." },
];

export default function ConsultationPage() {
  return (
    <>
      <section className="sv-section sv-free-hub">
        <div className="sv-container">
          <div className="sv-section-head">
            <span className="sv-eyebrow">100 % gratuit · sans inscription</span>
            <h1>Toute la guidance de Sélène,<br /><em>librement accessible</em></h1>
            <p className="sv-lede">Choisissez simplement l’outil gratuit qui correspond à votre envie du moment.</p>
          </div>
          <div className="sv-tools-grid">
            {TOOLS.map((tool) => (
              <a key={tool.href} className="sv-tool-card" href={tool.href}>
                <span className="sv-free-icon">{tool.icon}</span>
                <h2>{tool.title}</h2>
                <p>{tool.text}</p>
                <span className="sv-badge">Gratuit</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <AffiliateConsultation />
    </>
  );
}
