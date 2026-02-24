"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function HoroscopePage() {
    const [dateStr, setDateStr] = useState("");

    useEffect(() => {
        const today = new Date();
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        setDateStr(today.toLocaleDateString('fr-FR', options));
    }, []);

    return (
        <>
            {/* Custom styles for MonSiteVoyance widget — adapted to mystical theme */}
            <style jsx global>{`
                /* Sign title */
                .titremsvsign {
                    font-family: 'Cinzel', serif !important;
                    font-size: 22px !important;
                    color: #c9a84c !important;
                    font-weight: 700 !important;
                    padding: 20px 24px 8px !important;
                    border-bottom: 1px solid rgba(139, 92, 246, 0.15);
                    margin-bottom: 8px !important;
                }
                /* Date display */
                .titremsvdate {
                    display: block !important;
                    margin-top: 4px !important;
                    padding: 0 24px 16px !important;
                    font-size: 14px !important;
                    color: #a78bfa !important;
                    font-weight: 400 !important;
                    font-family: 'Raleway', sans-serif !important;
                }
                /* Category title (Amour, Travail, etc.) */
                .titremsvcate {
                    font-weight: 700 !important;
                    color: #c9a84c !important;
                    font-family: 'Cinzel', serif !important;
                    font-size: 13px !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.05em !important;
                    padding: 0 24px !important;
                    margin-top: 12px !important;
                }
                /* Category text */
                .textemsvcate {
                    font-style: italic !important;
                    color: #c4b5fd !important;
                    font-family: 'Raleway', sans-serif !important;
                    font-size: 14px !important;
                    line-height: 1.7 !important;
                    padding: 4px 24px 12px !important;
                }
                /* Container styling */
                #MSVhoros13 {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }
                #MSVhoros13 > div,
                #MSVhoros13 > span,
                #MSVhoros13 > section {
                    background: rgba(139, 92, 246, 0.05) !important;
                    border: 1px solid rgba(139, 92, 246, 0.15) !important;
                    border-radius: 16px !important;
                    backdrop-filter: blur(12px) !important;
                    overflow: hidden;
                    padding-bottom: 16px !important;
                }
                /* Links inside widget */
                #MSVhoros13 a {
                    color: #c9a84c !important;
                    text-decoration: none !important;
                }
                #MSVhoros13 a:hover {
                    color: #e2c76a !important;
                }
                /* Hide any ugly default styles */
                #MSVhoros13 hr {
                    border-color: rgba(139, 92, 246, 0.15) !important;
                    margin: 8px 24px !important;
                }
                #MSVhoros13 img {
                    border-radius: 8px !important;
                }
            `}</style>

            {/* HEADER */}
            <section className="py-16 sm:py-24 text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-mystic-600/10 blur-[100px]" />
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <div className="text-5xl mb-6">♈</div>
                    <h1 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
                        Horoscope <span className="text-mystic-400">Gratuit</span> du Jour
                    </h1>
                    <p className="text-mystic-300 text-lg capitalize">{dateStr}</p>
                    <div className="mystic-divider max-w-xs mx-auto mt-6" />
                </div>
            </section>

            {/* HOROSCOPES via MonSiteVoyance widget */}
            <section className="pb-20 sm:pb-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div id="MSVhoros13"></div>
                </div>
            </section>

            {/* External script - MonSiteVoyance */}
            <Script
                src="https://www.monsitevoyance.com/ws_horoscope.php?h=13&cle=Sk44QVBqTVZDUFN6RFRrSzJXVFNNckFXSjQ5VFE0YXBFWEJUWkFiTUFxYkNUK3YzVG5IZTBXa21kZDlVbHVjQQ=="
                strategy="afterInteractive"
                onLoad={() => {
                    // Replace h2 with h3 for proper SEO hierarchy
                    setTimeout(() => {
                        const signes = document.querySelectorAll('#MSVhoros13 h2.titremsvsign');
                        signes.forEach((h2) => {
                            const h3 = document.createElement('h3');
                            h3.className = h2.className;
                            h3.innerHTML = h2.innerHTML;
                            h2.replaceWith(h3);
                        });
                    }, 1000);
                }}
            />

            {/* CTA vers voyance */}
            <section className="py-16 text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                        Besoin d&apos;une réponse plus précise ?
                    </h2>
                    <p className="text-mystic-400 mb-8">
                        Posez votre question au pendule et recevez une réponse personnalisée par Oui ou Non.
                    </p>
                    <a href="/voyance" className="btn-gold text-lg">
                        🔮 Consulter le Pendule — dès 5€
                    </a>
                </div>
            </section>
        </>
    );
}
