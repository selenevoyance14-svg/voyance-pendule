"use client";

import { useState } from "react";

type Props = { question: string; answer: string };

export default function ReflectionNote({ question, answer }: Props) {
  const [feeling, setFeeling] = useState("");
  const [facts, setFacts] = useState("");
  const [action, setAction] = useState("");
  const [notice, setNotice] = useState("");

  function download() {
    const text = ["Ma fiche de réflexion — Sélène Voyance", "", `Question : ${question}`, `Résultat aléatoire : ${answer}`, "", `Mon ressenti : ${feeling || "À compléter"}`, "", `Les faits à vérifier : ${facts || "À compléter"}`, "", `Ma prochaine petite action : ${action || "À compléter"}`, "", "Ce résultat aléatoire est un support de réflexion, pas une prédiction."].join("\n");
    const url = URL.createObjectURL(new Blob(["\uFEFF", text], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "ma-reflexion-pendule.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice("Votre fiche a été préparée pour le téléchargement. Elle peut contenir vos informations personnelles : conservez-la à l’endroit de votre choix.");
  }

  return <section className="glass-card p-6 sm:p-8 mt-8 text-left" aria-labelledby="reflection-title">
    <h2 id="reflection-title" className="font-heading text-2xl text-white mb-3">Et vous, qu’en pensez-vous ?</h2>
    <p className="text-mystic-300 text-sm mb-5">Le résultat est aléatoire. Prenez surtout le temps de remarquer votre réaction et ce que vous souhaitez faire vous-même.</p>
    <div className="space-y-4">
      {[
        { id: "feeling", label: "Ce que je ressens", placeholder: "Cette réponse me surprend, me rassure…", value: feeling, update: setFeeling },
        { id: "facts", label: "Ce que je peux vérifier", placeholder: "Une information qui me manque, une question à poser…", value: facts, update: setFacts },
        { id: "action", label: "Une petite action à ma portée", placeholder: "Par exemple : réserver quinze minutes pour essayer.", value: action, update: setAction },
      ].map(field => <label key={field.id} htmlFor={`reflection-${field.id}`} className="block text-mystic-200 text-sm">
        {field.label}<textarea id={`reflection-${field.id}`} value={field.value} onChange={event => { field.update(event.target.value); setNotice(""); }} rows={2} maxLength={1000} placeholder={field.placeholder} className="block w-full mt-2 bg-mystic-950/50 border border-mystic-700 rounded-xl p-3 text-mystic-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400" />
      </label>)}
    </div>
    <div className="flex flex-wrap gap-4 items-center mt-5">
      <button type="button" onClick={download} className="btn-mystic">Télécharger ma fiche (.txt)</button>
      <button type="button" onClick={() => { setFeeling(""); setFacts(""); setAction(""); setNotice("Votre note a été effacée de cette page. Un fichier déjà téléchargé reste sur votre appareil."); }} className="text-mystic-200 underline text-sm">Effacer ma note</button>
    </div>
    <p className="text-mystic-300 text-sm mt-4">Facultatif. Vos notes ne sont pas envoyées au site. Elles disparaissent au prochain tirage ou quand vous quittez ou rechargez cette page. Seul un téléchargement demandé par vous crée un fichier.</p>
    <p role="status" aria-live="polite" className="text-gold-400 text-sm mt-3">{notice}</p>
  </section>;
}
