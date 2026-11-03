"use client";
import { useEffect, useRef, useState } from "react";

const MESSAGES = [
  { ange: "Vehuiah", message: "Une petite initiative suffit parfois à ouvrir un espace nouveau. Quelle idée aimeriez-vous essayer, simplement pour vous ?" },
  { ange: "Jeliel", message: "Accordez une attention aux liens qui vous font du bien. Un mot sincère peut être une belle manière de les nourrir." },
  { ange: "Sitael", message: "Revenez à ce qui compte pour vous. Vous pouvez être à l’écoute des autres tout en respectant vos limites." },
  { ange: "Elemiah", message: "Regarder une situation autrement ne demande pas toujours de tout changer. Quelle autre perspective pourriez-vous explorer ?" },
  { ange: "Mahasiah", message: "Offrez-vous quelques minutes sans exigence de résultat. Vous n’avez pas besoin d’avoir toutes les réponses maintenant." },
  { ange: "Lelahel", message: "Un talent se cultive par petites touches. Quelle activité vous donne envie de créer ou de partager ?" },
  { ange: "Achaiah", message: "La patience peut aussi être un choix actif. Repérez ce qui mérite un petit pas et ce qui a besoin de temps." },
  { ange: "Cahetel", message: "Un détail de la nature peut devenir un point d’ancrage : une couleur, une feuille, un peu de lumière. Prenez le temps de le remarquer." },
  { ange: "Haziel", message: "Vous pouvez chercher l’apaisement sans vous forcer à pardonner. Respectez votre rythme et vos limites." },
  { ange: "Aladiah", message: "Prendre soin de soi peut commencer par reconnaître un besoin. Quel geste de douceur serait bienvenu aujourd’hui ?" },
  { ange: "Lauviah", message: "Une image ou une idée vous accompagne au réveil ? Vous pouvez la noter, sans chercher à lui donner une vérité absolue." },
  { ange: "Hahaiah", message: "L’incertitude laisse aussi de la place à la curiosité. Quelle question pourriez-vous explorer sans exiger une réponse immédiate ?" },
  { ange: "Yezalel", message: "Un échange peut commencer par une écoute attentive. Demandez-vous si vous avez aujourd’hui l’envie et l’espace nécessaires." },
  { ange: "Mebahel", message: "Agir selon vos valeurs ne signifie pas tout porter seul. Sur quels faits et quels soutiens pouvez-vous vous appuyer ?" },
  { ange: "Hariel", message: "Une idée n’a pas besoin d’être parfaite pour être notée. Gardez une place pour ce qui vous inspire." },
  { ange: "Hekamiah", message: "Reconnaissez un effort déjà accompli, même discret. Votre journée ne se résume pas à ce qu’il reste à faire." },
  { ange: "Nith-Haiah", message: "Une lecture, un souvenir ou une conversation peut nourrir votre réflexion. Qu’aimeriez-vous approfondir avec curiosité ?" },
  { ange: "Haaiah", message: "Quand tout semble mêlé, commencez par une seule chose. Une priorité simple peut rendre la prochaine étape plus lisible." },
  { ange: "Caliel", message: "Avant de décider, distinguez ce que vous savez, ce que vous supposez et ce que vous souhaitez. Vous pouvez prendre le temps de vérifier." },
  { ange: "Leuviah", message: "Quel moment, quelle présence ou quelle petite attention aimeriez-vous reconnaître aujourd’hui ? La gratitude peut rester simple." },
];

export default function MessageAngeClient() {
  const [message, setMessage] = useState<typeof MESSAGES[0] | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  useEffect(() => { if (message) resultRef.current?.focus(); }, [message]);

  function reveal() {
    if (timer.current) return;
    setIsRevealing(true);
    setMessage(null);

    timer.current = setTimeout(() => {
      const random = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
      setMessage(random);
      setIsRevealing(false);
      timer.current = null;
    }, 2000);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">👼</div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
          Message de votre <span className="text-gold-400">Ange</span>
        </h1>
        <p className="text-mystic-300 max-w-lg mx-auto">
          Prenez une respiration et découvrez une pensée inspirée de la tradition des anges, comme point de départ pour votre réflexion.
        </p>
        <div className="mystic-divider max-w-xs mx-auto mt-6" />
      </div>

      {/* Bouton */}
      {!message && (
        <div className="text-center mb-12">
          <button
            onClick={reveal}
            disabled={isRevealing}
            className="btn-gold text-lg px-10 py-4 disabled:opacity-50"
          >
            {isRevealing ? "Votre message se dévoile…" : "Recevoir mon message"}
          </button>
        </div>
      )}

      <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">{isRevealing ? "Sélection du message en cours." : message ? `${message.ange}. ${message.message}` : ""}</p>
      {isRevealing ? <button type="button" className="block mx-auto text-mystic-200 underline" onClick={() => { if (timer.current) clearTimeout(timer.current); timer.current = null; setIsRevealing(false); }}>Annuler</button> : null}
      {/* Animation */}
      {isRevealing && (
        <div className="flex justify-center my-12">
          <div className="text-7xl animate-pulse">👼</div>
        </div>
      )}

      {/* Message */}
      {message && (
        <div ref={resultRef} tabIndex={-1} className="animate-fadeIn">
          <div className="gold-card p-8 text-center mb-8">
            <div className="text-5xl mb-4">👼</div>
            <div className="inline-block bg-gold-500/20 text-gold-400 text-sm font-bold px-4 py-1 rounded-full mb-4">
              Ange {message.ange}
            </div>
            <p className="text-mystic-200 text-lg leading-relaxed italic">
              &ldquo;{message.message}&rdquo;
            </p>
          </div>

          <div className="text-center">
            <button onClick={reveal} className="btn-mystic">
              Recevoir un autre message
            </button>
          </div>
        </div>
      )}

      {/* Info */}
      <div className="glass-card p-6 mt-12 text-center">
        <p className="text-mystic-400 text-sm">
          Le texte est tiré au hasard dans une sélection de pensées symboliques. Il ne constitue pas une prédiction ni un message personnalisé. Découvrez aussi <a href="/anges" className="text-gold-400 hover:underline">les 72 anges gardiens</a>.
        </p>
      </div>
    </div>
  );
}
