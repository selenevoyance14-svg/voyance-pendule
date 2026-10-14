"use client";
import { useEffect, useRef, useState } from "react";

type FaqItem = { question: string; answer: string };
const QUESTION_EXAMPLES = [
  { label: "Relations", question: "Ai-je envie de proposer un moment à partager ?" },
  { label: "Projets", question: "Ce projet correspond-il à mes priorités actuelles ?" },
  { label: "Quotidien", question: "Ai-je besoin de réserver un moment pour moi aujourd’hui ?" },
  { label: "Créativité", question: "Ai-je envie d’essayer une nouvelle activité créative ?" },
];
type Result = { answer: string; message: string; question: string };

const RESPONSES_OUI = [
  "Le pendule oscille vers le OUI. Observez ce que cette réponse éveille en vous.",
  "OUI. Prenez un instant pour distinguer votre intuition de votre première impulsion.",
  "Le mouvement indique OUI. Considérez cette réponse comme une piste de réflexion.",
  "OUI. Le chemin semble ouvert ; vérifiez maintenant les faits qui comptent pour votre décision.",
  "Le pendule répond OUI. Accueillez ce résultat avec recul et libre arbitre.",
  "OUI. Si cette réponse vous soulage, demandez-vous ce qu’elle confirme déjà en vous.",
];

const RESPONSES_NON = [
  "Le pendule oscille vers le NON. Ce résultat vous invite peut-être à prendre du recul.",
  "NON. Ce n’est pas une certitude : examinez les éléments concrets avant de décider.",
  "Le pendule répond NON pour cette consultation. Observez simplement votre réaction.",
  "NON. Prenez le temps de reconsidérer la situation sans abandonner votre libre arbitre.",
  "Le mouvement indique NON. Votre propre jugement reste toujours prioritaire.",
  "NON. Vous pourrez reformuler la question plus tard si le contexte évolue.",
];

const RESPONSES_INCERTAIN = [
  "Le pendule hésite entre deux mouvements. Reformulez votre question de façon plus précise.",
  "La réponse reste incertaine. Accordez-vous un temps de réflexion avant de recommencer.",
  "Le mouvement ne donne pas de direction claire. Les informations vous manquent peut-être encore.",
];

export default function PenduleClient({ faq }: { faq: FaqItem[] }) {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState<Result | null>(null);
  const [isSwinging, setIsSwinging] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const questionRef = useRef<HTMLInputElement>(null);
  const [history, setHistory] = useState<Result[]>([]);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  function startAgain(keepQuestion = false) {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
    setIsSwinging(false);
    setResponse(null);
    if (!keepQuestion) setQuestion("");
    requestAnimationFrame(() => questionRef.current?.focus());
  }

  function consult() {
    const submittedQuestion = question.trim();
    if (!submittedQuestion || timerRef.current) return;
    setIsSwinging(true);
    setResponse(null);

    timerRef.current = setTimeout(() => {
      const rand = Math.random();
      let answer: string;
      let messages: string[];

      if (rand < 0.42) {
        answer = "OUI";
        messages = RESPONSES_OUI;
      } else if (rand < 0.84) {
        answer = "NON";
        messages = RESPONSES_NON;
      } else {
        answer = "INCERTAIN";
        messages = RESPONSES_INCERTAIN;
      }

      const message = messages[Math.floor(Math.random() * messages.length)];
      const result = { answer, message, question: submittedQuestion };
      setResponse(result);
      setHistory(previous => [result, ...previous].slice(0, 5));
      timerRef.current = null;
      setIsSwinging(false);
    }, 3000);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 pt-24 pb-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4 animate-float">🔮</div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
          Pendule gratuit en ligne : <span className="text-gold-400">Oui ou Non</span>
        </h1>
        <p className="text-mystic-300 max-w-lg mx-auto">
          Posez une question qui se répond par Oui ou Non. Concentrez-vous,
          puis utilisez le résultat comme un miroir de votre intuition.
        </p>
        <p className="text-gold-400 text-sm mt-4">Gratuit · Sans inscription · Question privée</p>
        <div className="mystic-divider max-w-xs mx-auto mt-6" />
      </div>

      {/* Question */}
      {!response && (
        <div className="glass-card p-8 mb-8">
          <label htmlFor="pendule-question" className="block text-mystic-200 font-heading font-semibold mb-3">
            Votre question au pendule :
          </label>
          <input
            id="pendule-question"
            ref={questionRef}
            type="text"
            maxLength={300}
            disabled={isSwinging}
            aria-describedby="pendule-privacy"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ex. : Ce projet correspond-il à mes priorités ?"
            className="w-full bg-mystic-950/50 border border-mystic-700/30 rounded-xl px-4 py-3 text-mystic-200 placeholder:text-mystic-600 focus:border-gold-500/50 focus:outline-none transition"
            onKeyDown={(e) => e.key === "Enter" && consult()}
          />
          <p id="pendule-privacy" className="text-mystic-400 text-xs mt-3">
            Votre question reste sur cet appareil : elle n’est ni envoyée ni enregistrée.
          </p>
          <p className="text-mystic-300 text-sm mt-5 mb-2">Besoin d’une idée ? Choisissez un exemple :</p>
          <div className="flex flex-wrap gap-2">
            {QUESTION_EXAMPLES.map(example => (
              <button key={example.label} type="button" disabled={isSwinging} onClick={() => { setQuestion(example.question); questionRef.current?.focus(); }} className="rounded-full border border-mystic-700 px-3 py-2 text-sm text-mystic-200 hover:border-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400 disabled:opacity-50">{example.label}</button>
            ))}
          </div>
          <p className="text-mystic-400 text-xs mt-4">Le résultat est choisi au hasard : utilisez-le comme support de réflexion.</p>
          <button
            type="button"
            onClick={consult}
            disabled={isSwinging || !question.trim()}
            className="btn-gold w-full mt-6 py-4 text-lg justify-center disabled:opacity-50"
          >
            {isSwinging ? "Le pendule oscille..." : "Consulter le pendule"}
          </button>
          {isSwinging && <button type="button" className="text-mystic-200 underline text-sm block mx-auto mt-4" onClick={() => startAgain(true)}>Annuler le tirage</button>}
        </div>
      )}

      <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {isSwinging ? "Tirage en cours." : response ? `Réponse : ${response.answer}. ${response.message}` : ""}
      </p>
      {/* Pendule animation */}
      {isSwinging && (
        <div className="flex justify-center my-12" aria-hidden="true">
          <div className="pendulum">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-24 bg-gradient-to-b from-gold-400/60 to-gold-500" />
              <div className="w-10 h-14 rounded-full bg-gradient-to-b from-mystic-400 to-mystic-700 shadow-lg shadow-mystic-500/30 border border-mystic-400/30 animate-swing" />
            </div>
          </div>
        </div>
      )}

      {/* Reponse */}
      {response && (
        <div className="animate-fadeIn">
          <div className={`gold-card p-8 text-center mb-8 ${response.answer === "OUI" ? "border-green-500/30" : response.answer === "NON" ? "border-red-500/30" : "border-mystic-500/30"}`}>
            <div className="text-5xl mb-4">
              {response.answer === "OUI" ? "✅" : response.answer === "NON" ? "❌" : "🌀"}
            </div>
            <div className={`font-heading text-4xl font-bold mb-4 ${response.answer === "OUI" ? "text-green-400" : response.answer === "NON" ? "text-red-400" : "text-mystic-400"}`}>
              {response.answer}
            </div>
            <p className="text-mystic-300 leading-relaxed italic">
              {response.message}
            </p>
            <p className="text-mystic-500 text-xs mt-4">
              Question : &ldquo;{response.question}&rdquo;
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={() => startAgain()}
              className="btn-mystic"
            >
              Poser une autre question
            </button>
            <button type="button" onClick={() => startAgain(true)} className="text-mystic-200 underline block mx-auto mt-4">Reformuler ma question</button>
          </div>
        </div>
      )}

      {history.length > 0 && (
        <section className="glass-card p-6 mt-10" aria-labelledby="pendule-history">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h2 id="pendule-history" className="font-heading text-xl text-white">Vos derniers tirages</h2>
            <button type="button" onClick={() => setHistory([])} className="text-mystic-200 underline text-sm">Effacer l’historique</button>
          </div>
          <p className="text-mystic-300 text-sm mb-4">Les 5 derniers tirages restent uniquement sur cette page. Ils disparaissent quand vous la rechargez ou la quittez.</p>
          <ol className="space-y-3">{history.map((item, index) => <li key={index} className="border-t border-mystic-700/40 pt-3 text-sm text-mystic-200 break-words"><span className="text-gold-400 font-semibold">{item.answer}</span> · {item.question}</li>)}</ol>
        </section>
      )}

      <section className="mt-16" aria-labelledby="mode-emploi-pendule">
        <p className="text-gold-400 text-sm uppercase tracking-widest mb-2">Mode d’emploi</p>
        <h2 id="mode-emploi-pendule" className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">
          Comment utiliser le pendule Oui/Non ?
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            ["1", "Isolez une question", "Choisissez un seul sujet et évitez de mélanger deux décisions."],
            ["2", "Formulez-la clairement", "Préférez une phrase courte qui appelle vraiment Oui ou Non."],
            ["3", "Observez votre ressenti", "La réponse est aléatoire : votre réaction peut nourrir votre réflexion."],
          ].map(([number, title, text]) => (
            <div key={number} className="glass-card p-5">
              <span className="text-gold-400 font-heading text-2xl">{number}</span>
              <h3 className="text-white font-semibold mt-2 mb-2">{title}</h3>
              <p className="text-mystic-300 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card p-6 sm:p-8 mt-12">
        <h2 className="font-heading text-2xl font-bold text-white mb-4">Comment poser une bonne question ?</h2>
        <p className="text-mystic-300 leading-relaxed mb-5">
          Une bonne question est personnelle, précise et fermée. Elle porte sur une seule situation
          et ne cherche pas à obtenir une date, un nom ou une prédiction détaillée.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="rounded-xl border border-green-500/20 bg-green-950/20 p-4">
            <h3 className="text-green-300 font-semibold mb-2">Questions adaptées</h3>
            <ul className="text-mystic-300 space-y-2">
              <li>« Est-ce le bon moment pour reprendre contact ? »</li>
              <li>« Cette proposition correspond-elle à mes priorités ? »</li>
            </ul>
          </div>
          <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-4">
            <h3 className="text-red-300 font-semibold mb-2">Questions à reformuler</h3>
            <ul className="text-mystic-300 space-y-2">
              <li>« Que va-t-il se passer dans ma vie ? »</li>
              <li>« Quand et avec qui vais-je trouver l’amour ? »</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-white mb-4">Comment fonctionne ce pendule virtuel ?</h2>
        <div className="text-mystic-300 leading-relaxed space-y-4">
          <p>
            Le pendule divinatoire traditionnel est un poids suspendu à une chaîne dont les mouvements
            sont interprétés comme Oui, Non ou une réponse indéterminée. Ici, l’expérience est numérique :
            après trois secondes d’animation, le résultat est choisi aléatoirement entre ces trois possibilités.
          </p>
          <p>
            Il ne s’agit donc ni d’une prédiction certaine ni d’une analyse de votre question. L’intérêt
            de l’exercice est introspectif : remarquez si la réponse vous rassure, vous déçoit ou vous surprend.
            Cette réaction révèle parfois la préférence que vous aviez déjà sans l’avoir formulée.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-white mb-5">Approfondir la pratique du pendule</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <a href="/blog/pendule-divinatoire-guide-complet-debutants" className="glass-card p-5 block">
            <h3 className="text-white font-semibold mb-2">Guide du pendule pour débuter</h3>
            <p className="text-mystic-300 text-sm">Comprendre les mouvements, préparer une séance et éviter les erreurs fréquentes.</p>
          </a>
          <a href="/blog/voyance-amour-questions-pendule" className="glass-card p-5 block">
            <h3 className="text-white font-semibold mb-2">Questions d’amour au pendule</h3>
            <p className="text-mystic-300 text-sm">Cinq exemples de questions et les formulations à privilégier.</p>
          </a>
          <a href="/blog/tarot-vs-pendule-methode-voyance" className="glass-card p-5 block">
            <h3 className="text-white font-semibold mb-2">Tarot ou pendule ?</h3>
            <p className="text-mystic-300 text-sm">Choisir l’outil adapté à la nature de votre question.</p>
          </a>
          <a href="/blog/pendule-en-ligne-reponse-incertaine" className="glass-card p-5 block">
            <h3 className="text-white font-semibold mb-2">Que faire d’une réponse incertaine ?</h3>
            <p className="text-mystic-300 text-sm">Reformuler sans multiplier les tirages pour obtenir une réponse souhaitée.</p>
          </a>
          <a href="/blog/pendule-oui-non-exemples-questions" className="glass-card p-5 block">
            <h3 className="text-white font-semibold mb-2">Exemples de questions Oui/Non</h3>
            <p className="text-mystic-300 text-sm">Des formulations simples pour explorer vos envies et vos priorités.</p>
          </a>
          <a href="/boutique" className="glass-card p-5 block">
            <h3 className="text-white font-semibold mb-2">Pendules et matériel de radiesthésie</h3>
            <p className="text-mystic-300 text-sm">Découvrir la sélection de pendules physiques et d’accessoires sur Amazon.</p>
          </a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-white mb-5">Questions fréquentes</h2>
        <div className="space-y-4">
          {faq.map((item) => (
            <details key={item.question} className="glass-card p-5">
              <summary className="text-white font-semibold cursor-pointer">{item.question}</summary>
              <p className="text-mystic-300 leading-relaxed mt-3">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Continuer avec les autres outils gratuits */}
      <div className="glass-card border border-gold-500/30 p-6 sm:p-8 mt-12 text-center">
        <div className="text-3xl mb-3">🌙</div>
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
          Continuez votre exploration gratuitement
        </h2>
        <p className="text-mystic-300 text-sm leading-relaxed max-w-md mx-auto mb-6">
          Complétez cette réponse avec un tirage de cartes, votre horoscope du jour
          ou un message angélique. Aucun paiement et aucune inscription.
        </p>
        <a href="/tirage" className="btn-gold">
          🃏 Faire un tirage gratuit
        </a>
      </div>

      {/* Disclaimer */}
      <p className="text-center text-mystic-600 text-xs mt-12">
        Ce pendule en ligne est un outil de divertissement et de réflexion personnelle.
        Il ne remplace pas un conseil professionnel.
      </p>
    </div>
  );
}
