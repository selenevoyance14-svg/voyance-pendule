import type { Metadata } from "next";
import { DailyEnergyCard } from "./components/MoonPhase";
import AffiliateConsultation from "./components/AffiliateConsultation";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Pendule gratuit, tarot et horoscope en ligne | Sélène",
  description: "Explorez gratuitement le pendule Oui/Non, le tirage de cartes, l'horoscope, les anges et les pierres. Sans paiement ni inscription.",
  alternates: { canonical: "/" },
};

const tools = [
  {
    href: "/pendule-gratuit",
    icon: "🔮",
    title: "Pendule Oui / Non",
    text: "Posez votre question, respirez profondément et laissez le pendule choisir entre Oui, Non ou Incertain.",
  },
  {
    href: "/tirage",
    icon: "🃏",
    title: "Tirage de cartes",
    text: "Tirez une, trois ou cinq cartes pour éclairer une situation et nourrir votre réflexion.",
  },
  {
    href: "/horoscope",
    icon: "♈",
    title: "Horoscope du jour",
    text: "Découvrez les tendances symboliques du jour pour chacun des douze signes du zodiaque.",
  },
  {
    href: "/message-ange",
    icon: "🪽",
    title: "Message des anges",
    text: "Recevez une pensée inspirante et un message symbolique pour accompagner votre journée.",
  },
];

const explore = [
  { href: "/pierres", number: "01", title: "Pierres & cristaux", text: "Vertus, chakras et usages symboliques des pierres les plus connues." },
  { href: "/anges", number: "02", title: "Anges & heures miroirs", text: "Comprendre les heures doubles et les traditions qui les entourent." },
  { href: "/blog", number: "03", title: "Le journal spirituel", text: "Guides pratiques sur le pendule, le tarot, les rêves et l'intuition." },
  { href: "/boutique", number: "04", title: "Matériel de pratique", text: "Pendules, oracles et accessoires choisis sur Amazon pour débuter." },
];

export default function Home() {
  const latestGuides = blogPosts.slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pendule gratuit Sélène",
    url: "https://voyance-pendule.fr/pendule-gratuit",
    applicationCategory: "EntertainmentApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    description: "Outil gratuit de réponse symbolique Oui, Non ou Incertain par pendule en ligne.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="sv-hero sv-free-hero">
        <div className="sv-container">
          <div className="sv-hero-grid">
            <div>
              <span className="sv-eyebrow">Guidance libre · sans inscription</span>
              <h1>Écoutez votre<br /><span className="sv-accent">intuition.</span></h1>
              <p className="sv-lede">
                Pendule, cartes, horoscope et messages angéliques : un espace calme
                pour prendre du recul, explorer une question et revenir à ce que vous ressentez.
              </p>
              <div className="sv-hero-actions">
                <a className="sv-btn-primary" href="/pendule-gratuit">
                  Consulter le pendule gratuitement <span aria-hidden>→</span>
                </a>
                <a className="sv-btn-ghost" href="/tirage">Tirer les cartes</a>
              </div>
              <div className="sv-free-proof">
                <span>✓ 100 % gratuit</span>
                <span>✓ Sans compte</span>
                <span>✓ Réponse immédiate</span>
              </div>
            </div>
            <div className="sv-oracle-visual" aria-hidden="true">
              <div className="sv-orbit sv-orbit-one" />
              <div className="sv-orbit sv-orbit-two" />
              <div className="sv-moon-disc">☾</div>
              <div className="sv-visual-pendulum">
                <span />
                <b />
              </div>
              <small>Un instant pour soi</small>
            </div>
          </div>
          <DailyEnergyCard />
        </div>
      </section>

      <section className="sv-section">
        <div className="sv-container">
          <div className="sv-section-head">
            <span className="sv-eyebrow">Choisissez votre expérience</span>
            <h2>Quatre outils. <em>Aucun paiement.</em></h2>
            <p className="sv-lede">Utilisez-les librement, sans laisser votre adresse email et sans abonnement caché.</p>
          </div>
          <div className="sv-tools-grid">
            {tools.map((tool) => (
              <a key={tool.href} className="sv-tool-card sv-free-tool" href={tool.href}>
                <span className="sv-free-icon">{tool.icon}</span>
                <h3>{tool.title}</h3>
                <p>{tool.text}</p>
                <span className="sv-badge">Gratuit</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sv-free-manifesto">
        <div className="sv-container sv-manifesto-grid">
          <div>
            <span className="sv-eyebrow">La philosophie Sélène</span>
            <h2>La réponse ne remplace jamais votre libre arbitre.</h2>
          </div>
          <div>
            <p>
              Nos tirages sont des supports de réflexion et de divertissement. Ils ne
              prédisent pas l’avenir avec certitude et ne remplacent jamais un conseil
              médical, juridique, financier ou psychologique.
            </p>
            <p>
              Prenez ce qui vous aide, laissez le reste, et gardez toujours la décision finale.
            </p>
            <a href="/qui-suis-je" className="sv-btn-ghost">Découvrir notre démarche</a>
          </div>
        </div>
      </section>

      <AffiliateConsultation />

      <section className="sv-section sv-latest-guides">
        <div className="sv-container">
          <div className="sv-section-head sv-guides-heading">
            <div>
              <span className="sv-eyebrow">Le journal spirituel</span>
              <h2>À lire en ce <em>moment</em></h2>
            </div>
            <a href="/blog" className="sv-btn-ghost">Voir tous les guides</a>
          </div>
          <div className="sv-guides-grid">
            {latestGuides.map((guide) => (
              <a key={guide.slug} href={`/blog/${guide.slug}`} className="sv-guide-card">
                <img src={guide.image} alt="" loading="lazy" />
                <div>
                  <span>{guide.category} · {guide.date}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.excerpt}</p>
                  <b>Lire le guide →</b>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sv-section">
        <div className="sv-container">
          <div className="sv-section-head">
            <span className="sv-eyebrow">Approfondir</span>
            <h2>Comprendre les <em>symboles</em></h2>
          </div>
          <div className="sv-explore-grid">
            {explore.map((item) => (
              <a key={item.href} href={item.href}>
                <span>{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <b>↗</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sv-final-cta">
        <div className="sv-container">
          <span className="sv-eyebrow">Votre question est prête ?</span>
          <h2>Le pendule vous attend.</h2>
          <p>Formulez une question simple qui appelle une réponse par Oui ou Non.</p>
          <a className="sv-btn-primary" href="/pendule-gratuit">Commencer gratuitement →</a>
        </div>
      </section>
    </>
  );
}
