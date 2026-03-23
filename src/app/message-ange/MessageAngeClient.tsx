"use client";
import { useState } from "react";

const MESSAGES = [
  { ange: "Vehuiah", message: "Aujourd'hui, une energie nouvelle vous porte. Osez sortir de votre zone de confort. Votre ange vous donne le courage d'entreprendre ce que vous repoussez depuis longtemps." },
  { ange: "Jeliel", message: "L'amour est tout autour de vous. Ouvrez votre coeur aux personnes qui vous entourent. Votre ange vous envoie une vague de tendresse et d'harmonie." },
  { ange: "Sitael", message: "La fidelite et la sincerite sont vos forces aujourd'hui. Restez authentique dans vos relations. Votre ange vous protege des energies negatives." },
  { ange: "Elemiah", message: "Un voyage interieur ou exterieur se prepare. Soyez ouvert aux decouvertes. Votre ange vous guide vers de nouvelles perspectives." },
  { ange: "Mahasiah", message: "La paix interieure est a votre portee. Prenez un moment pour mediter et vous recentrer. Votre ange vous enveloppe de serenite." },
  { ange: "Lelahel", message: "La lumiere brille en vous. C'est le moment de partager vos talents et votre creativite avec le monde. Votre ange illumine votre chemin." },
  { ange: "Achaiah", message: "La patience est votre meilleure alliee en ce moment. Les choses se mettent en place doucement. Votre ange vous demande de faire confiance au timing divin." },
  { ange: "Cahetel", message: "La nature et la terre vous appellent. Reconnectez-vous a l'essentiel. Votre ange vous rappelle la beaute simple de la vie.", },
  { ange: "Haziel", message: "Le pardon est la cle qui ouvrira une porte fermee depuis longtemps. Votre ange vous aide a liberer votre coeur de toute rancune." },
  { ange: "Aladiah", message: "Une guerison est en cours, qu'elle soit physique, emotionnelle ou spirituelle. Votre ange veille sur votre retablissement." },
  { ange: "Lauviah", message: "Vos reves portent des messages importants. Notez-les au reveil. Votre ange communique avec vous a travers votre sommeil." },
  { ange: "Hahaiah", message: "Un mystere va bientot se devoiler. Gardez les yeux et le coeur ouverts. Votre ange vous prepare a une revelation." },
  { ange: "Yezalel", message: "L'union et la reconciliation sont favorisees. Si un conflit pese sur votre coeur, c'est le moment de tendre la main. Votre ange favorise la paix." },
  { ange: "Mebahel", message: "La justice est de votre cote. Continuez a agir avec integrite. Votre ange vous assure que la verite triomphera." },
  { ange: "Hariel", message: "L'inspiration vous visite aujourd'hui. Accueillez les idees qui surgissent, elles viennent de plus haut. Votre ange nourrit votre esprit." },
  { ange: "Hekamiah", message: "Vous etes plus fort que vous ne le pensez. Les defis actuels sont a la mesure de votre grandeur. Votre ange croit en vous." },
  { ange: "Nith-Haiah", message: "La sagesse ancestrale vous accompagne. Les reponses que vous cherchez sont dans les traditions et les enseignements anciens. Votre ange vous connecte a cette sagesse." },
  { ange: "Haaiah", message: "L'ordre revient dans votre vie. Ce qui etait confus s'eclaircit. Votre ange organise les evenements en votre faveur." },
  { ange: "Caliel", message: "La clarte mentale est votre cadeau du jour. Profitez-en pour prendre les decisions que vous repoussez. Votre ange eclaire votre jugement." },
  { ange: "Leuviah", message: "La gratitude multiplie les benedictions. Remerciez pour ce que vous avez deja. Votre ange vous montre l'abondance qui vous entoure." },
];

export default function MessageAngeClient() {
  const [message, setMessage] = useState<typeof MESSAGES[0] | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);

  function reveal() {
    setIsRevealing(true);
    setMessage(null);

    setTimeout(() => {
      const random = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
      setMessage(random);
      setIsRevealing(false);
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
          Fermez les yeux, respirez profondement, puis cliquez pour recevoir
          le message que votre ange gardien souhaite vous transmettre.
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
            {isRevealing ? "Votre ange vous repond..." : "Recevoir mon message"}
          </button>
        </div>
      )}

      {/* Animation */}
      {isRevealing && (
        <div className="flex justify-center my-12">
          <div className="text-7xl animate-pulse">👼</div>
        </div>
      )}

      {/* Message */}
      {message && (
        <div className="animate-fadeIn">
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
          Chaque message est choisi specialement pour vous a cet instant precis.
          Votre ange gardien communique a travers les signes et les synchronicites.
          Decouvrez aussi <a href="/anges" className="text-gold-400 hover:underline">les 72 anges gardiens</a>.
        </p>
      </div>
    </div>
  );
}
