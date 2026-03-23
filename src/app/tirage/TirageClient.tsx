"use client";
import { useState } from "react";

const CARDS = [
  { name: "L'Etoile", meaning: "Espoir et renouveau. Une periode de serenite s'ouvre a vous. Faites confiance a votre intuition, les astres veillent sur votre chemin.", symbol: "⭐" },
  { name: "La Lune", meaning: "Ecoutez vos reves et votre inconscient. Des verites cachees cherchent a se reveler. Patience, la clarte viendra.", symbol: "🌙" },
  { name: "Le Soleil", meaning: "Joie et succes ! Une energie positive vous entoure. C'est le moment d'agir avec confiance et optimisme.", symbol: "☀️" },
  { name: "La Force", meaning: "Vous possedez une force interieure remarquable. Faites confiance a votre courage, vous surmonterez les obstacles.", symbol: "🦁" },
  { name: "La Roue", meaning: "Un tournant important se profile. Les cycles de la vie vous sont favorables, acceptez le changement avec grace.", symbol: "🎡" },
  { name: "Le Monde", meaning: "Accomplissement et plenitude. Un cycle s'acheve avec succes. De nouvelles portes s'ouvrent devant vous.", symbol: "🌍" },
  { name: "L'Amoureux", meaning: "Une decision importante en amour ou dans vos relations. Suivez votre coeur, il connait le chemin.", symbol: "💜" },
  { name: "La Justice", meaning: "L'equilibre sera retabli. Vos efforts seront recompenses. Restez juste et honnete dans vos choix.", symbol: "⚖️" },
  { name: "L'Ermite", meaning: "Prenez du recul et meditez. La sagesse vient du silence. Une reponse importante se trouve en vous.", symbol: "🏔️" },
  { name: "La Temperance", meaning: "Harmonie et patience. Trouvez l'equilibre entre vos desirs et la realite. La moderation est votre alliee.", symbol: "🕊️" },
  { name: "Le Magicien", meaning: "Vous avez tous les outils en main. C'est le moment de creer et de manifester vos reves. L'univers vous soutient.", symbol: "✨" },
  { name: "La Papesse", meaning: "Sagesse feminine et intuition profonde. Les reponses que vous cherchez sont deja en vous. Meditez et ecoutez.", symbol: "📿" },
  { name: "L'Imperatrice", meaning: "Abondance et creativite. Un projet porte ses fruits. Nourrissez ce qui est beau et fertile dans votre vie.", symbol: "👑" },
  { name: "La Maison Dieu", meaning: "Un bouleversement liberateur. Ce qui s'ecroule devait partir. Place a la reconstruction sur des bases plus solides.", symbol: "⚡" },
  { name: "Le Jugement", meaning: "Renaissance et revelation. Un appel interieur vous guide vers votre veritable mission. Ecoutez-le.", symbol: "🔔" },
  { name: "Le Chariot", meaning: "Victoire et determination. Avancez avec confiance, rien ne peut vous arreter quand vous etes aligne avec votre but.", symbol: "🏆" },
];

export default function TirageClient() {
  const [drawn, setDrawn] = useState<typeof CARDS>([]);
  const [flipped, setFlipped] = useState<boolean[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [nbCards, setNbCards] = useState(3);

  function draw() {
    setIsDrawing(true);
    setDrawn([]);
    setFlipped([]);

    setTimeout(() => {
      const shuffled = [...CARDS].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, nbCards);
      setDrawn(selected);
      setFlipped(new Array(nbCards).fill(false));
      setIsDrawing(false);
    }, 1500);
  }

  function flipCard(index: number) {
    setFlipped((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🃏</div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
          Tirage de <span className="text-mystic-400">Cartes</span>
        </h1>
        <p className="text-mystic-300 max-w-lg mx-auto">
          Concentrez-vous sur votre question, puis tirez vos cartes.
          Chaque carte porte un message pour vous.
        </p>
        <div className="mystic-divider max-w-xs mx-auto mt-6" />
      </div>

      {/* Nombre de cartes */}
      {drawn.length === 0 && (
        <div className="text-center mb-8">
          <p className="text-mystic-400 text-sm mb-4">Combien de cartes souhaitez-vous tirer ?</p>
          <div className="flex justify-center gap-4">
            {[1, 3, 5].map((n) => (
              <button
                key={n}
                onClick={() => setNbCards(n)}
                className={`px-6 py-3 rounded-xl font-heading font-bold transition-all ${
                  nbCards === n
                    ? "bg-mystic-600 text-white shadow-lg shadow-mystic-600/30"
                    : "glass-card text-mystic-300 hover:text-white"
                }`}
              >
                {n} carte{n > 1 ? "s" : ""}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bouton tirer */}
      {drawn.length === 0 && (
        <div className="text-center mb-12">
          <button
            onClick={draw}
            disabled={isDrawing}
            className="btn-gold text-lg px-10 py-4 disabled:opacity-50"
          >
            {isDrawing ? "Les cartes se melangent..." : "Tirer mes cartes"}
          </button>
        </div>
      )}

      {/* Cartes */}
      {drawn.length > 0 && (
        <div className={`grid gap-6 mb-12 ${drawn.length === 1 ? "max-w-xs mx-auto" : drawn.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"}`}>
          {drawn.map((card, i) => (
            <div key={i} className="perspective-1000">
              {!flipped[i] ? (
                <button
                  onClick={() => flipCard(i)}
                  className="w-full aspect-[2/3] glass-card flex flex-col items-center justify-center cursor-pointer hover:border-gold-500/50 group"
                >
                  <div className="text-5xl mb-3 group-hover:animate-float">🃏</div>
                  <span className="text-mystic-400 text-sm">Cliquez pour reveler</span>
                  <span className="text-mystic-500 text-xs mt-1">Carte {i + 1}</span>
                </button>
              ) : (
                <div className="w-full aspect-[2/3] gold-card p-4 sm:p-6 flex flex-col items-center justify-center text-center animate-fadeIn">
                  <div className="text-4xl mb-3">{card.symbol}</div>
                  <h3 className="font-heading text-lg font-bold text-gold-400 mb-3">{card.name}</h3>
                  <p className="text-mystic-300 text-xs sm:text-sm leading-relaxed">{card.meaning}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Nouveau tirage */}
      {drawn.length > 0 && flipped.every(Boolean) && (
        <div className="text-center">
          <p className="text-mystic-400 text-sm mb-4 italic">
            Les cartes ont parle. Meditez sur leurs messages.
          </p>
          <button
            onClick={() => { setDrawn([]); setFlipped([]); }}
            className="btn-mystic"
          >
            Nouveau tirage
          </button>
        </div>
      )}
    </div>
  );
}
