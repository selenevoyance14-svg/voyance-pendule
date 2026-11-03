"use client";
import { useState } from "react";
import Link from "next/link";
const EXPERIENCES = [
  { label: "Une question", icon: "◇", title: "Le pendule Oui / Non", text: "Une question précise, quelques secondes de pause, puis une réponse symbolique à accueillir avec recul.", href: "/pendule-gratuit", cta: "Poser ma question", detail: "Oui, Non ou Incertain · résultat aléatoire" },
  { label: "Du recul", icon: "✦", title: "Un tirage de cartes", text: "Une, trois ou cinq cartes pour regarder une situation sous plusieurs angles. Découvrez chaque carte à votre rythme.", href: "/tirage", cta: "Choisir mon tirage", detail: "Cartes symboliques · sans inscription" },
  { label: "Mon signe", icon: "☼", title: "L’horoscope du jour", text: "Retrouvez votre signe et explorez les tendances symboliques proposées pour la journée.", href: "/horoscope", cta: "Voir mon horoscope", detail: "Les 12 signes · accès gratuit" },
  { label: "De l’inspiration", icon: "☾", title: "Un message des anges", text: "Une pensée inspirée de la tradition des anges pour faire une pause et nourrir votre réflexion.", href: "/message-ange", cta: "Découvrir mon message", detail: "Un texte tiré au hasard · lecture libre" },
];
export default function ExperiencePicker() {
  const [selected, setSelected] = useState(0);
  const experience = EXPERIENCES[selected];
  return <div className="sv-experience-picker">
    <p className="sv-picker-eyebrow">De quoi avez-vous envie ?</p>
    <div className="sv-intent-options" role="group" aria-label="Choisir une expérience">
      {EXPERIENCES.map((item, index) => <button key={item.href} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>{item.label}</button>)}
    </div>
    <div className="sv-picker-result" aria-live="polite" aria-atomic="true">
      <span className="sv-picker-symbol" aria-hidden>{experience.icon}</span>
      <h2>{experience.title}</h2><p>{experience.text}</p>
      <Link href={experience.href} className="sv-btn-primary">{experience.cta} <span aria-hidden>↗</span></Link>
      <small>{experience.detail}</small>
    </div>
  </div>;
}
