"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CARDS = [
  { name: "L’Étoile", meaning: "Espoir et confiance. Quel petit signe encourageant pouvez-vous reconnaître dans votre situation ?", symbol: "✦" },
  { name: "La Lune", meaning: "Imagination et incertitude. Distinguez ce que vous ressentez de ce que vous savez réellement.", symbol: "☾" },
  { name: "Le Soleil", meaning: "Clarté et partage. Qu’est-ce qui vous apporte de la joie et mérite plus de place ?", symbol: "☀" },
  { name: "La Force", meaning: "Courage et douceur. Comment agir avec fermeté sans vous imposer une pression inutile ?", symbol: "♌" },
  { name: "La Roue", meaning: "Cycles et changement. Qu’est-ce qui dépend de vous, et qu’est-ce qui échappe à votre contrôle ?", symbol: "◎" },
  { name: "Le Monde", meaning: "Accomplissement et ouverture. Prenez le temps de reconnaître ce que vous avez déjà construit.", symbol: "◉" },
  { name: "L’Amoureux", meaning: "Liens et choix. Quelles valeurs voulez-vous respecter dans cette situation ?", symbol: "♡" },
  { name: "La Justice", meaning: "Équilibre et responsabilité. Regardez les faits et les conséquences de chaque option.", symbol: "⚖" },
  { name: "L’Ermite", meaning: "Recul et réflexion. Un temps calme peut vous aider à écouter votre propre point de vue.", symbol: "✧" },
  { name: "La Tempérance", meaning: "Patience et mesure. Une étape intermédiaire serait-elle plus adaptée qu’un changement radical ?", symbol: "≈" },
  { name: "Le Magicien", meaning: "Initiative et ressources. De quels moyens disposez-vous déjà pour essayer quelque chose ?", symbol: "✶" },
  { name: "La Papesse", meaning: "Observation et intuition. Qu’aimeriez-vous mieux comprendre avant d’agir ?", symbol: "☽" },
  { name: "L’Impératrice", meaning: "Créativité et attention. Quelle idée aimeriez-vous nourrir sans exiger un résultat immédiat ?", symbol: "♕" },
  { name: "La Maison Dieu", meaning: "Remise en question. Une habitude ou une attente mérite-t-elle d’être repensée ?", symbol: "ϟ" },
  { name: "Le Jugement", meaning: "Prise de conscience. Quel regard neuf pouvez-vous poser sur une situation familière ?", symbol: "◇" },
  { name: "Le Chariot", meaning: "Direction et engagement. Quelle prochaine étape concrète correspond à vos priorités ?", symbol: "↗" },
];
const SPREADS: Record<number, { label: string; positions: string[] }> = {
  1: { label: "Une piste pour le moment présent", positions: ["Votre piste de réflexion"] },
  3: { label: "Situation, point d’attention, piste à explorer", positions: ["Votre situation", "Un point d’attention", "Une piste à explorer"] },
  5: { label: "Un regard plus détaillé sur votre situation", positions: ["Votre situation", "Un point d’appui", "Un point de vigilance", "Un autre regard", "Une petite action"] },
};
export default function TirageClient() {
  const [drawn, setDrawn] = useState<typeof CARDS>([]);
  const [flipped, setFlipped] = useState<boolean[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [nbCards, setNbCards] = useState(3);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  useEffect(() => { if (drawn.length) resultRef.current?.focus(); }, [drawn]);
  function draw() {
    if (timer.current) return;
    const count = nbCards;
    setIsDrawing(true);
    setDrawn([]);
    setFlipped([]);
    timer.current = setTimeout(() => {
      const shuffled = [...CARDS];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setDrawn(shuffled.slice(0, count));
      setFlipped(new Array(count).fill(false));
      setIsDrawing(false);
      timer.current = null;
    }, 1500);
  }
  function reset() {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
    setIsDrawing(false);
    setDrawn([]);
    setFlipped([]);
    requestAnimationFrame(() => buttonRef.current?.focus());
  }
  const revealed = flipped.filter(Boolean).length;
  return <div className="max-w-5xl mx-auto px-4 py-10 sv-reading-page">
    <div className="text-center mb-8"><span className="sv-eyebrow">Un temps pour regarder autrement</span><h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Votre tirage de <span className="text-gold-400">cartes</span></h1><p className="text-mystic-300 max-w-lg mx-auto">Pensez à une situation, choisissez votre format et retournez les cartes à votre rythme.</p><p className="sv-tool-note">Gratuit · Sans compte · Tirage aléatoire parmi 16 cartes symboliques</p></div>
    {!drawn.length ? <div className="glass-card p-6 sm:p-8 text-center mb-8">
      <h2 className="font-heading text-xl text-white mb-5">Quel tirage pour votre moment ?</h2>
      <div className="sv-spread-options" role="group" aria-label="Nombre de cartes">{[1,3,5].map((n) => <button type="button" key={n} disabled={isDrawing} aria-pressed={nbCards === n} onClick={() => setNbCards(n)}><strong>{n}</strong><span>{n === 1 ? "carte" : "cartes"}</span></button>)}</div>
      <p className="sv-spread-description">{SPREADS[nbCards].label}</p>
      <button type="button" ref={buttonRef} onClick={draw} disabled={isDrawing} className="btn-gold px-8 py-4 disabled:opacity-50">{isDrawing ? "Les cartes se mélangent…" : "Tirer mes cartes"}</button>
      {isDrawing ? <button type="button" onClick={reset} className="block mx-auto mt-4 text-sm text-mystic-200 underline">Annuler</button> : null}
    </div> : <>
      <div ref={resultRef} tabIndex={-1} className="sv-reading-status"><p>{revealed} / {drawn.length} cartes révélées</p>{revealed < drawn.length ? <button type="button" onClick={() => setFlipped(drawn.map(() => true))}>Tout révéler</button> : null}</div>
      <div className={`sv-reading-grid sv-reading-grid-${drawn.length}`}>
        {drawn.map((card, i) => <div key={i} className="sv-reading-slot"><p className="sv-position-label">{String(i + 1).padStart(2,"0")} · {SPREADS[nbCards].positions[i]}</p>{!flipped[i] ? <button type="button" onClick={() => setFlipped((current) => current.map((value,index) => index === i || value))} className="sv-card-back" aria-label={`Révéler la carte ${i + 1} : ${SPREADS[nbCards].positions[i]}`}><span aria-hidden>✦</span><strong>Retourner la carte</strong><small>Prenez votre temps</small></button> : <div className="sv-card-face"><span aria-hidden>{card.symbol}</span><h2>{card.name}</h2><p>{card.meaning}</p></div>}</div>)}
      </div>
      <div className="text-center mt-8"><button type="button" className="btn-mystic" onClick={reset}>Choisir un nouveau tirage</button></div>
    </>}
    <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">{isDrawing ? "Mélange en cours." : drawn.length ? `${drawn.length} cartes tirées. ${revealed} révélées. ${drawn.filter((_,i) => flipped[i]).map((c) => `${c.name}. ${c.meaning}`).join(" ")}` : "Choisissez un format de tirage."}</p>
    <p className="sv-tool-note text-center mt-8">Un support de réflexion et de divertissement, sans prédiction certaine. Votre jugement reste prioritaire.</p>
    <div className="sv-reading-next"><span>Vous préférez une question Oui / Non ?</span><Link href="/pendule-gratuit">Essayer le pendule gratuit ↗</Link></div>
  </div>;
}
