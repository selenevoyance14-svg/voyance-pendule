"use client";

import { useEffect, useState } from "react";

type Status = "loading" | "success" | "missing" | "error";

interface SavedPayload {
  plan: string;
  firstName: string;
  birthDate: string;
  email: string;
  questions: string[];
  savedAt: number;
}

export default function MerciClient() {
  const [status, setStatus] = useState<Status>("loading");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const orderID = params.get("token");

    if (!orderID) {
      setStatus("missing");
      return;
    }

    let payload: SavedPayload | null = null;
    try {
      const raw = localStorage.getItem(`pp_order_${orderID}`);
      if (raw) payload = JSON.parse(raw) as SavedPayload;
    } catch {
      // localStorage indisponible
    }

    if (!payload) {
      setStatus("missing");
      return;
    }

    setEmail(payload.email);

    fetch("/api/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderID, ...payload }),
    })
      .then(async (res) => {
        const data = (await res.json()) as { success?: boolean; error?: string };
        if (res.ok && data.success) {
          setStatus("success");
          try {
            localStorage.removeItem(`pp_order_${orderID}`);
          } catch {
            // ignore
          }
        } else {
          setErrorMsg(data.error || "Erreur lors de la finalisation.");
          setStatus("error");
        }
      })
      .catch((err) => {
        setErrorMsg(err instanceof Error ? err.message : "Erreur réseau");
        setStatus("error");
      });
  }, []);

  if (status === "loading") {
    return (
      <>
        <div className="text-7xl mb-6 animate-pulse">🌙</div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-mystic-100">
          Finalisation de votre tirage…
        </h1>
        <p className="text-mystic-300 leading-relaxed">
          Sélène consulte le pendule. Merci de ne pas fermer cette page quelques secondes.
        </p>
      </>
    );
  }

  if (status === "success") {
    return (
      <>
        <div className="text-7xl mb-6 animate-float">🌙</div>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-mystic-300 via-mystic-400 to-gold-400 bg-clip-text text-transparent">
            Merci infiniment
          </span>
        </h1>
        <p className="text-xl text-mystic-200 mb-8 leading-relaxed">
          Votre paiement est confirmé. Le pendule a parlé.
        </p>
        <div className="bg-gradient-to-br from-mystic-950/60 to-[#0a0518]/80 border border-gold-500/30 rounded-2xl p-8 mb-8 text-left">
          <h2 className="font-heading text-xl text-gold-400 mb-4">📧 Votre tirage arrive</h2>
          <p className="text-mystic-300 leading-relaxed mb-4">
            Votre tirage personnalisé vient d'être envoyé à <strong className="text-gold-300">{email || "votre email"}</strong>.
            Vous devriez le recevoir dans les <strong>2 minutes</strong>.
          </p>
          <p className="text-mystic-400 text-sm leading-relaxed">
            ✨ Pensez à vérifier votre dossier <strong>Spam / Promotions</strong> si rien n'arrive.
            Pour toute question, écrivez à{" "}
            <a href="mailto:contact@voyance-pendule.fr" className="text-gold-400 underline">
              contact@voyance-pendule.fr
            </a>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/" className="btn-mystic">← Retour à l'accueil</a>
          <a href="/blog" className="btn-gold">📝 Lire le blog en attendant</a>
        </div>
        <p className="mt-12 text-xs text-mystic-600 leading-relaxed">
          Tirage généré par notre oracle numérique Sélène, à usage de divertissement et de réflexion personnelle.
        </p>
      </>
    );
  }

  if (status === "missing") {
    return (
      <>
        <div className="text-7xl mb-6">🌙</div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-mystic-100">
          Paiement reçu
        </h1>
        <p className="text-mystic-300 leading-relaxed mb-6">
          Votre paiement PayPal a bien été confirmé, mais nous n'avons pas pu retrouver les détails de votre
          demande sur ce navigateur (probablement un changement d'appareil).
        </p>
        <div className="bg-mystic-950/40 border border-mystic-700/30 rounded-lg p-5 text-left text-sm text-mystic-300 mb-8">
          Écrivez à <a href="mailto:contact@voyance-pendule.fr" className="text-gold-400 underline">contact@voyance-pendule.fr</a> en
          mentionnant votre adresse email PayPal. Nous renverrons votre tirage manuellement dans la journée
          ou vous rembourserons.
        </div>
        <a href="/" className="btn-mystic">← Retour à l'accueil</a>
      </>
    );
  }

  return (
    <>
      <div className="text-7xl mb-6">⚠️</div>
      <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-mystic-100">
        Erreur lors de la finalisation
      </h1>
      <p className="text-mystic-300 leading-relaxed mb-4">
        Votre paiement a peut-être été pris en compte, mais nous avons rencontré une erreur :
      </p>
      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 text-red-300 text-sm mb-6">
        {errorMsg}
      </div>
      <p className="text-mystic-400 text-sm leading-relaxed mb-6">
        Écrivez-nous à{" "}
        <a href="mailto:contact@voyance-pendule.fr" className="text-gold-400 underline">
          contact@voyance-pendule.fr
        </a>{" "}
        — nous résolvons ça immédiatement.
      </p>
      <a href="/" className="btn-mystic">← Retour à l'accueil</a>
    </>
  );
}
