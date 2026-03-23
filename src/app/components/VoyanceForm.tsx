'use client';

const FORMULAS = [
  { id: '1', label: '1 Question', price: '5€', questions: 1 },
  { id: '3', label: '3 Questions', price: '10€', questions: 3, popular: true },
  { id: '5', label: '5 Questions', price: '15€', questions: 5 },
];

export default function VoyanceForm() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="glass-card p-8 text-center space-y-6">
        <div className="text-4xl">🔮</div>
        <h3 className="text-xl font-bold text-gold-400">
          Service temporairement en pause
        </h3>
        <p className="text-mystic-300 leading-relaxed">
          Notre service de consultation par pendule est en cours de mise a jour pour vous offrir une experience encore meilleure.
          Nous serons de retour tres prochainement.
        </p>

        {/* Affichage des formules pour info */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {FORMULAS.map(f => (
            <div
              key={f.id}
              className={`glass-card p-4 text-center border-2 ${
                f.popular ? 'border-gold-400/30 bg-gold-400/5' : 'border-transparent'
              }`}
            >
              {f.popular && (
                <div className="text-gold-400 text-xs font-bold mb-1">Populaire</div>
              )}
              <div className="font-bold text-sm mb-1 text-mystic-200">{f.label}</div>
              <div className="text-xl font-bold text-white">{f.price}</div>
            </div>
          ))}
        </div>

        <p className="text-mystic-500 text-sm">
          En attendant, decouvrez votre horoscope gratuit et les messages de votre ange gardien.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/horoscope" className="btn-gold px-6 py-3">
            Horoscope gratuit
          </a>
          <a href="/anges" className="px-6 py-3 rounded-full border border-mystic-600 text-mystic-200 hover:border-gold-400 transition">
            Anges gardiens
          </a>
        </div>
      </div>
    </div>
  );
}
