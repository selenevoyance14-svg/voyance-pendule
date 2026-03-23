"use client";
import { useState } from "react";

const RESPONSES_OUI = [
  "Le pendule oscille clairement vers le OUI. Les energies sont alignees en votre faveur.",
  "OUI, sans hesitation. Le pendule tourne avec une grande amplitude. Faites confiance a ce signe.",
  "Le pendule repond par un OUI lumineux. L'univers approuve cette direction.",
  "OUI. Le pendule vibre d'une energie positive. Le chemin est ouvert devant vous.",
  "Le mouvement du pendule est clair : OUI. Les astres sont de votre cote.",
  "OUI, le pendule tourne dans le sens de l'affirmation. Avancez avec confiance.",
];

const RESPONSES_NON = [
  "Le pendule reste immobile, puis oscille vers le NON. Ce n'est peut-etre pas le bon moment.",
  "NON, le pendule est clair. Mais ne perdez pas espoir — un autre chemin se dessine.",
  "Le pendule repond NON pour l'instant. Patience, les energies evoluent.",
  "NON. Le pendule suggere de prendre du recul et de reconsiderer la situation.",
  "Le mouvement du pendule indique NON. Ecoutez cette reponse avec sagesse.",
  "NON, mais ce n'est pas une fin. Le pendule vous invite a reformuler votre question ou a attendre.",
];

const RESPONSES_INCERTAIN = [
  "Le pendule hesite entre deux mouvements. La reponse n'est pas encore claire. Reposez votre question plus tard.",
  "Les energies sont melangees. Le pendule ne peut pas repondre clairement aujourd'hui. Meditez et revenez.",
  "Le pendule tourne lentement sans direction claire. Le moment n'est pas encore venu pour cette reponse.",
];

export default function PenduleClient() {
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
          Pendule <span className="text-gold-400">Gratuit</span>
        </h1>
        <p className="text-mystic-300 max-w-lg mx-auto">
          Posez une question qui se repond par Oui ou Non.
          Concentrez-vous, puis laissez le pendule vous guider.
        </p>
        <div className="mystic-divider max-w-xs mx-auto mt-6" />
      </div>

      {/* Question */}
      {!response && (
        <div className="glass-card p-8 mb-8">
          <label className="block text-mystic-200 font-heading font-semibold mb-3">
            Votre question :
          </label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ex: Est-ce que je vais trouver l'amour cette annee ?"
            className="w-full bg-mystic-950/50 border border-mystic-700/30 rounded-xl px-4 py-3 text-mystic-200 placeholder:text-mystic-600 focus:border-gold-500/50 focus:outline-none transition"
            onKeyDown={(e) => e.key === "Enter" && consult()}
          />
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

      {/* Disclaimer */}
      <p className="text-center text-mystic-600 text-xs mt-12">
        Ce pendule en ligne est un outil de divertissement et de reflexion personnelle.
        Il ne remplace pas un conseil professionnel.
      </p>
    </div>
  );
}
