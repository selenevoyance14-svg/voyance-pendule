"use client";

import { useEffect, useState } from "react";

type Plan = "q1" | "q3" | "q5";

const PLANS: { id: Plan; label: string; price: string; questions: number; popular?: boolean; description: string }[] = [
  {
    id: "q1",
    label: "Question Unique",
    price: "5,90€",
    questions: 1,
    description: "Une réponse claire à la question qui vous tient à cœur.",
  },
  {
    id: "q3",
    label: "Tirage Approfondi",
    price: "11,90€",
    questions: 3,
    popular: true,
    description: "Trois questions explorées en profondeur — le format préféré.",
  },
  {
    id: "q5",
    label: "Tirage Complet",
    price: "19,90€",
    questions: 5,
    description: "Cinq questions + synthèse globale qui relie tous vos messages.",
  },
];

export default function VoyanceForm() {
  const [plan, setPlan] = useState<Plan>("q3");
  const [firstName, setFirstName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [questions, setQuestions] = useState<string[]>(["", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedPlan = PLANS.find((p) => p.id === plan)!;

  // Pré-sélection du plan via query param ?plan=q1|q3|q5
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryPlan = params.get("plan");
    if (queryPlan === "q1" || queryPlan === "q3" || queryPlan === "q5") {
      setPlan(queryPlan);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const filled = questions.slice(0, selectedPlan.questions).map((q) => q.trim()).filter((q) => q.length >= 3);
    if (filled.length !== selectedPlan.questions) {
      setError(`Merci de remplir vos ${selectedPlan.questions} question${selectedPlan.questions > 1 ? "s" : ""} (au moins 3 caractères chacune).`);
      return;
    }
    if (!firstName.trim() || firstName.trim().length < 2) {
      setError("Merci d'indiquer votre prénom.");
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Merci d'indiquer un email valide.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = (await res.json()) as { orderID?: string; approvalUrl?: string; error?: string };
      if (!res.ok || !data.orderID || !data.approvalUrl) {
        throw new Error(data.error || "Impossible de créer la commande PayPal.");
      }

      // Stocker les données du tirage pour la page /merci après retour PayPal
      const payload = {
        plan,
        firstName: firstName.trim(),
        birthDate: birthDate.trim(),
        email: email.trim(),
        questions: filled,
        savedAt: Date.now(),
      };
      try {
        localStorage.setItem(`pp_order_${data.orderID}`, JSON.stringify(payload));
      } catch {
        // localStorage indisponible (mode privé) — on continue, fallback géré côté /merci
      }

      window.location.href = data.approvalUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inattendue.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Choix du plan */}
      <div>
        <h3 className="font-heading text-xl font-bold text-gold-400 mb-4">Choisissez votre formule</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {PLANS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPlan(p.id)}
              className={`relative text-left p-5 rounded-xl border-2 transition ${
                plan === p.id
                  ? "border-gold-500 bg-gold-500/10"
                  : "border-mystic-700/40 bg-mystic-950/30 hover:border-mystic-500/60"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 right-4 bg-gold-500 text-mystic-950 text-xs font-bold px-2 py-1 rounded-full">
                  ★ Populaire
                </span>
              )}
              <div className="font-heading font-bold text-mystic-100">{p.label}</div>
              <div className="text-2xl font-bold text-gold-400 my-2">{p.price}</div>
              <div className="text-xs text-mystic-400 leading-relaxed">{p.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Vos infos */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-mystic-300 mb-2">Prénom *</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            maxLength={60}
            className="w-full px-4 py-3 bg-mystic-950/50 border border-mystic-700/40 rounded-lg text-mystic-100 focus:border-gold-500/60 focus:outline-none"
            placeholder="Marie"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-mystic-300 mb-2">Date de naissance</label>
          <input
            type="text"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            maxLength={20}
            className="w-full px-4 py-3 bg-mystic-950/50 border border-mystic-700/40 rounded-lg text-mystic-100 focus:border-gold-500/60 focus:outline-none"
            placeholder="14/06/1985"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-mystic-300 mb-2">Email — pour recevoir votre tirage *</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 bg-mystic-950/50 border border-mystic-700/40 rounded-lg text-mystic-100 focus:border-gold-500/60 focus:outline-none"
          placeholder="vous@email.fr"
        />
      </div>

      {/* Questions */}
      <div>
        <h3 className="font-heading text-xl font-bold text-gold-400 mb-4">
          Vos {selectedPlan.questions} question{selectedPlan.questions > 1 ? "s" : ""}
        </h3>
        <div className="space-y-3">
          {Array.from({ length: selectedPlan.questions }).map((_, i) => (
            <div key={i}>
              <label className="block text-xs text-mystic-400 mb-1">Question {i + 1}</label>
              <textarea
                value={questions[i]}
                onChange={(e) => {
                  const next = [...questions];
                  next[i] = e.target.value;
                  setQuestions(next);
                }}
                rows={2}
                maxLength={480}
                required
                className="w-full px-4 py-3 bg-mystic-950/50 border border-mystic-700/40 rounded-lg text-mystic-100 focus:border-gold-500/60 focus:outline-none resize-none"
                placeholder="Ex : Vais-je trouver l'amour cette année ?"
              />
            </div>
          ))}
        </div>
        <p className="text-xs text-mystic-500 mt-2">
          Posez des questions ouvertes ou fermées. Évitez les questions médicales, financières précises ou
          impliquant des tiers nommés.
        </p>
      </div>

      {/* Disclaimer + CTA */}
      <div className="bg-mystic-950/40 border border-mystic-700/30 rounded-lg p-4 text-xs text-mystic-400 leading-relaxed">
        🔒 Paiement sécurisé par <strong>PayPal</strong> (carte bancaire ou compte PayPal). Votre tirage est généré
        par notre <strong>oracle numérique Sélène</strong> (interprétation inspirée de la tradition divinatoire) et
        envoyé sous 30 minutes par email. À usage de divertissement et de réflexion personnelle.
      </div>

      {error && (
        <div className="bg-red-900/30 border border-red-500/40 rounded-lg p-4 text-red-300 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-gold w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Redirection vers PayPal…" : `🌙 Payer avec PayPal — ${selectedPlan.price}`}
      </button>
    </form>
  );
}
