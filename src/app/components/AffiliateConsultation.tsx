"use client";

import { useEffect, useState } from "react";

type Voyant = {
  ID: string;
  VOYANT: string;
  PC: number;
  STAR: string;
  CHAT: string;
  T_CHAT: string;
  TEL: string;
  T_TEL: string;
  EVAL: string;
  ETAT: string;
};

const PARTNER_ID = "888";
const AFFILIATE_HOME = `https://www.monsitevoyance.com/?partner=${PARTNER_ID}`;

const PROMOS = [
  { eyebrow: "Offre découverte", title: "15 minutes de voyance offertes", text: "Découvrez de nouveaux consultants et vérifiez les conditions de l’offre sur le site partenaire.", cta: "Voir l’offre" },
  { eyebrow: "Consultation privée", title: "Voyance à partir de 16 €", text: "Choisissez librement votre consultant et le mode d’échange proposé par la plateforme.", cta: "Découvrir les consultations" },
  { eyebrow: "Avis vérifiés par le partenaire", title: "+63 000 avis clients annoncés", text: "Consultez les profils, disponibilités, tarifs et retours affichés par MonSiteVoyance.", cta: "Comparer les profils" },
];

export default function AffiliateConsultation() {
  const [voyants, setVoyants] = useState<Voyant[]>([]);

  useEffect(() => {
    fetch("/api/voyants")
      .then((response) => (response.ok ? response.json() : []))
      .then((data) => setVoyants(Array.isArray(data) ? data.slice(0, 4) : []))
      .catch(() => setVoyants([]));
  }, []);

  return (
    <section className="sv-affiliate-section" aria-labelledby="consultation-privee">
      <div className="sv-container">
        <div className="sv-affiliate-heading">
          <div>
            <span className="sv-eyebrow">Pour aller plus loin · partenaire</span>
            <h2 id="consultation-privee">Échanger avec un professionnel de la voyance</h2>
          </div>
          <p>
            Les outils Sélène restent gratuits. Si vous souhaitez une consultation
            humaine, notre partenaire propose des échanges payants par chat ou téléphone.
          </p>
        </div>

        {voyants.length > 0 ? (
          <div className="sv-voyants-grid">
            {voyants.map((voyant) => (
              <a
                key={voyant.ID}
                className="sv-voyant-card"
                href={`https://www.monsitevoyance.com/zoom_voyant.php?id=${voyant.ID}&partner=${PARTNER_ID}`}
                target="_blank"
                rel="sponsored noopener noreferrer"
              >
                <img src={`https://www.monsitevoyance.com/vignaff/${voyant.ID}.jpg`} alt={`Profil de ${voyant.VOYANT} sur MonSiteVoyance`} loading="lazy" />
                <div>
                  <span className="sv-online-dot">{voyant.ETAT === "1" ? "En ligne" : "Voir le profil"}</span>
                  <h3>{voyant.VOYANT}</h3>
                  <p>{voyant.PC}% de satisfaction · {voyant.EVAL} avis</p>
                  <small>{voyant.CHAT === "1" ? `Chat ${voyant.T_CHAT} €/min` : ""}{voyant.CHAT === "1" && voyant.TEL === "1" ? " · " : ""}{voyant.TEL === "1" ? `Tél. ${voyant.T_TEL} €/min` : ""}</small>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="sv-promo-grid">
            {PROMOS.map((promo) => (
              <a key={promo.title} href={AFFILIATE_HOME} target="_blank" rel="sponsored noopener noreferrer">
                <span>{promo.eyebrow}</span>
                <h3>{promo.title}</h3>
                <p>{promo.text}</p>
                <b>{promo.cta} →</b>
              </a>
            ))}
          </div>
        )}

        <p className="sv-affiliate-disclosure">
          Publicité · Lien affilié MonSiteVoyance. Une inscription ou une consultation
          réalisée après votre clic peut rémunérer Sélène, sans surcoût ajouté par notre site.
          Les prix, disponibilités et conditions sont ceux affichés par le partenaire.
        </p>
      </div>
    </section>
  );
}
