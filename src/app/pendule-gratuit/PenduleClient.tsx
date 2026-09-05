"use client";
import { useState } from "react";

type FaqItem = { question: string; answer: string };

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
  const [response, setResponse] = useState<{ answer: string; message: string } | null>(null);
  const [isSwinging, setIsSwinging] = useState(false);

  function consult() {
    if (!question.trim()) return;
    setIsSwinging(true);
    setResponse(null);

    setTimeout(() => {
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
      setResponse({ answer, message });
      setIsSwinging(false);
    }, 3000);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
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
        <div className="mystic-divider max-w-xs mx-auto mt-6" />
      </div>

      {/* Question */}
      {!response && (
        <div className="glass-card p-8 mb-8">
          <label className="block text-mystic-200 font-heading font-semibold mb-3">
            Votre question au pendule :
          </label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ex. : Devrais-je accepter cette proposition ?"
            className="w-full bg-mystic-950/50 border border-mystic-700/30 rounded-xl px-4 py-3 text-mystic-200 placeholder:text-mystic-600 focus:border-gold-500/50 focus:outline-none transition"
            onKeyDown={(e) => e.key === "Enter" && consult()}
          />
          <p className="text-mystic-500 text-xs mt-3">
            Votre question reste sur cet appareil : elle n’est ni envoyée ni enregistrée.
          </p>
          <button
            onClick={consult}
            disabled={isSwinging || !question.trim()}
            className="btn-gold w-full mt-6 py-4 text-lg justify-center disabled:opacity-50"
          >
            {isSwinging ? "Le pendule oscille..." : "Consulter le pendule"}
          </button>
        </div>
      )}

      {/* Pendule animation */}
      {isSwinging && (
        <div className="flex justify-center my-12">
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
          <div aria-live="polite" className={`gold-card p-8 text-center mb-8 ${response.answer === "OUI" ? "border-green-500/30" : response.answer === "NON" ? "border-red-500/30" : "border-mystic-500/30"}`}>
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
              Question : &ldquo;{question}&rdquo;
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={() => { setResponse(null); setQuestion(""); }}
              className="btn-mystic"
            >
              Poser une autre question
            </button>
          </div>
        </div>
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
