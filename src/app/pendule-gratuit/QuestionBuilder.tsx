"use client";

import { useState } from "react";

const ACTIONS = [
  "reprendre une activité créative",
  "proposer un moment à partager",
  "avancer sur un projet personnel",
  "réserver un moment pour moi",
  "essayer une nouvelle activité",
  "simplifier mon organisation",
];
const PERIODS = ["aujourd’hui", "cette semaine", "ce mois-ci"];

export default function QuestionBuilder({ onChoose, disabled }: { onChoose: (question: string) => void; disabled: boolean }) {
  const [action, setAction] = useState(ACTIONS[0]);
  const [period, setPeriod] = useState(PERIODS[1]);
  const preposition = /^[aeiouyhàâéèêîôûœ]/i.test(action) ? "d’" : "de ";
  const suggestion = `Ai-je envie ${preposition}${action} ${period} ?`;
  return <details className="mt-5 border border-mystic-700/50 rounded-xl p-4">
    <summary className="text-gold-400 font-semibold cursor-pointer">M’aider à formuler ma question</summary>
    <p className="text-mystic-300 text-sm mt-3">Partez d’une envie personnelle et d’un horizon proche. La proposition est construite sur cet appareil, sans analyse de votre question.</p>
    <div className="grid sm:grid-cols-2 gap-4 mt-4">
      <label htmlFor="question-action" className="text-mystic-200 text-sm">Ce que j’envisage
        <select id="question-action" disabled={disabled} value={action} onChange={event => setAction(event.target.value)} className="w-full mt-2 bg-mystic-950 border border-mystic-700 rounded-lg p-3 text-mystic-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400">
          {ACTIONS.map(value => <option key={value}>{value}</option>)}
        </select>
      </label>
      <label htmlFor="question-period" className="text-mystic-200 text-sm">Pour quel moment ?
        <select id="question-period" disabled={disabled} value={period} onChange={event => setPeriod(event.target.value)} className="w-full mt-2 bg-mystic-950 border border-mystic-700 rounded-lg p-3 text-mystic-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400">
          {PERIODS.map(value => <option key={value}>{value}</option>)}
        </select>
      </label>
    </div>
    <p className="text-white mt-4" role="status" aria-live="polite">{suggestion}</p>
    <button type="button" disabled={disabled} onClick={() => onChoose(suggestion)} className="btn-mystic mt-4 disabled:opacity-50">Utiliser cette question</button>
    <p className="text-mystic-300 text-sm mt-3">Vous pourrez modifier la formulation avant de lancer le tirage.</p>
  </details>;
}
