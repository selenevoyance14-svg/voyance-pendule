'use client';

import { useState } from 'react';

const FORMULAS = [
  { id: '1', label: '1 Question', price: '5€', questions: 1 },
  { id: '3', label: '3 Questions', price: '10€', questions: 3, popular: true },
  { id: '5', label: '5 Questions', price: '15€', questions: 5 },
];

export default function VoyanceForm() {
  const [formula, setFormula] = useState('3');
  const [email, setEmail] = useState('');
  const [questions, setQuestions] = useState(['', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const selectedFormula = FORMULAS.find(f => f.id === formula)!;

  function handleFormulaChange(id: string) {
    setFormula(id);
    const count = FORMULAS.find(f => f.id === id)!.questions;
    setQuestions(Array(count).fill(''));
  }

  function handleQuestionChange(i: number, value: string) {
    const updated = [...questions];
    updated[i] = value;
    setQuestions(updated);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    const filled = questions.filter(q => q.trim());
    if (filled.length < selectedFormula.questions) {
      setError(`Veuillez remplir ${selectedFormula.questions === 1 ? 'votre question' : `vos ${selectedFormula.questions} questions`}.`);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, questions: filled, formula }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Choix formule */}
        <div>
          <p className="text-mystic-300 text-sm font-semibold mb-4 text-center">Choisissez votre formule</p>
          <div className="grid grid-cols-3 gap-3">
            {FORMULAS.map(f => (
              <button
                key={f.id}
                type="button"
                onClick={() => handleFormulaChange(f.id)}
                className={`glass-card p-4 text-center transition cursor-pointer border-2 ${
                  formula === f.id
                    ? 'border-gold-400 bg-gold-400/10'
                    : 'border-transparent hover:border-mystic-500'
                }`}
              >
                {f.popular && (
                  <div className="text-gold-400 text-xs font-bold mb-1">⭐ Populaire</div>
                )}
                <div className={`font-bold text-sm mb-1 ${formula === f.id ? 'text-gold-400' : 'text-mystic-200'}`}>
                  {f.label}
                </div>
                <div className={`text-xl font-bold ${formula === f.id ? 'text-gold-400' : 'text-white'}`}>
                  {f.price}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-mystic-300 text-sm font-semibold mb-2">
            Votre email <span className="text-gold-400">*</span>
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="votre@email.fr"
            className="w-full bg-white/5 border border-mystic-700 rounded-xl px-4 py-3 text-white placeholder-mystic-600 focus:outline-none focus:border-gold-400 transition"
          />
          <p className="text-mystic-600 text-xs mt-1">Votre réponse sera envoyée à cet email sous 24h</p>
        </div>

        {/* Questions */}
        <div>
          <label className="block text-mystic-300 text-sm font-semibold mb-3">
            {selectedFormula.questions === 1 ? 'Votre question' : 'Vos questions'} <span className="text-gold-400">*</span>
          </label>
          <p className="text-mystic-500 text-xs mb-4">Formulez des questions avec une réponse Oui / Non. Ex : <em>"Est-ce que mon projet va aboutir ?"</em></p>
          <div className="space-y-3">
            {Array.from({ length: selectedFormula.questions }).map((_, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-gold-400 font-bold text-sm mt-3 w-4 shrink-0">{i + 1}.</span>
                <input
                  type="text"
                  value={questions[i] || ''}
                  onChange={e => handleQuestionChange(i, e.target.value)}
                  placeholder={`Question ${i + 1}...`}
                  className="flex-1 bg-white/5 border border-mystic-700 rounded-xl px-4 py-3 text-white placeholder-mystic-600 focus:outline-none focus:border-gold-400 transition"
                />
              </div>
            ))}
          </div>
        </div>

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="btn-gold w-full justify-center text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? '⏳ Redirection...' : `🔒 Payer ${selectedFormula.price} et recevoir ma réponse`}
        </button>

        <p className="text-mystic-600 text-xs text-center">
          🔒 Paiement sécurisé par Stripe · Réponse sous 24h · Garantie remboursement 7 jours
        </p>
      </form>
    </div>
  );
}
