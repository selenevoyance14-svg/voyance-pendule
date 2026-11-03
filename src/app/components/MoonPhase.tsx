"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const THOUGHTS = [
  "Quelle petite chose pourriez-vous faire aujourd’hui pour vous sentir plus en accord avec vous-même ?",
  "Avant de chercher une réponse, accordez-vous le temps de préciser votre question.",
  "Qu’est-ce qui mérite votre attention aujourd’hui, et qu’est-ce qui peut attendre ?",
  "Une pause peut vous aider à distinguer ce que vous souhaitez de ce que l’on attend de vous.",
  "Quel détail de votre journée aimeriez-vous regarder avec davantage de douceur ?",
  "Vous pouvez accueillir une idée sans être obligé de la suivre.",
  "Quel moment simple aimeriez-vous vous offrir cette semaine ?",
];
export function MoonPhasePill() {
  return <Link href="/#inspiration" className="sv-moon-pill"><span aria-hidden>☾</span> La pause du jour</Link>;
}
export function DailyEnergyCard() {
  const [day, setDay] = useState<{ label: string; index: number } | null>(null);
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const key = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
      const index = Array.from(key).reduce((sum, char) => sum + char.charCodeAt(0), 0) % THOUGHTS.length;
      setDay({ label: new Intl.DateTimeFormat("fr-FR", { timeZone: "Europe/Paris", weekday: "long", day: "numeric", month: "long" }).format(now), index });
    };
    update();
    const timer = window.setInterval(update, 60000);
    return () => window.clearInterval(timer);
  }, []);
  return <aside id="inspiration" className="sv-daily-energy sv-daily-thought" aria-label="La pensée du jour">
    <span className="sv-thought-symbol" aria-hidden>☾</span><div><div className="sv-label">Une pensée pour {day?.label ?? "votre journée"}</div><p className="sv-quote">{THOUGHTS[day?.index ?? 0]}</p></div><Link href="/message-ange" className="sv-thought-link">Un autre message ↗</Link>
  </aside>;
}
