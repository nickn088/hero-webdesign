import React from "react";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const SovereignHero: React.FC = () => {
  const reduce = useReducedMotion();

  const scrollTo = (id: string) => {
    const lenis = (window as any).lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(`#${id}`, { duration: 1.2 });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero-start"
      className="min-h-[100dvh] w-full relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden bg-white bg-blueprint-grid"
    >
      {/* Das Hero-Architektur-Dossier */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 32, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease }}
        className="max-w-[1280px] w-full rounded-[32px] md:rounded-[40px] border border-[#121212] bg-white p-6 sm:p-10 md:p-12 shadow-[0_16px_48px_rgba(18,18,18,0.06)] relative z-10"
      >


        {/* Hauptbereich: Grid 8 / 4 Spalten */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Linke Spalte (8 Cols): Headline, Subtext, technische Checkmarks */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <h1 className="font-extrabold text-[clamp(32px,5vw,64px)] uppercase tracking-[-0.035em] text-[#121212] leading-[1.0] mb-4">
                WEBSITES, DIE
                <br />
                <span className="text-[#121212]/35">AUFTRÄGE BRINGEN.</span>
              </h1>
              <p className="text-[16px] sm:text-[18px] text-[#121212]/80 leading-relaxed max-w-2xl mb-8 font-sans">
                Kein Baukasten. Kein Vertriebler dazwischen. Ich entwickle kompromisslos schnelle Websites für Betriebe, die online Kunden gewinnen wollen. Messbar, sauber und zum verbindlichen Festpreis.
              </p>
            </div>

            {/* Technische Garantien mit Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-[#121212]">
              <div className="flex items-start gap-2.5 font-mono text-[12px] sm:text-[13px] text-[#121212]/85">
                <span className="font-bold text-[#121212]">✓</span>
                <span>0.4s Ladezeit · 100/100 Core Web Vitals</span>
              </div>
              <div className="flex items-start gap-2.5 font-mono text-[12px] sm:text-[13px] text-[#121212]/85">
                <span className="font-bold text-[#121212]">✓</span>
                <span>Verkaufsstarke Struktur für mehr Anfragen</span>
              </div>
              <div className="flex items-start gap-2.5 font-mono text-[12px] sm:text-[13px] text-[#121212]/85">
                <span className="font-bold text-[#121212]">✓</span>
                <span>Festpreisgarantie ohne Nachforderungen</span>
              </div>
              <div className="flex items-start gap-2.5 font-mono text-[12px] sm:text-[13px] text-[#121212]/85">
                <span className="font-bold text-[#121212]">✓</span>
                <span>Live in 2 bis 3 Wochen · 1 Ansprechperson</span>
              </div>
            </div>
          </div>

          {/* Rechte Spalte (4 Cols): Eigene Inset-Box mit Kennzahl & CTAs */}
          <div className="lg:col-span-4 bg-[#fcfcfb] border border-[#121212] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <span className="block font-mono text-[11px] text-[#121212]/60 uppercase mb-2 font-bold tracking-wider">
                VERBINDLICHER EINSTIEG
              </span>
              <div className="font-display font-extrabold text-[42px] sm:text-[48px] leading-none text-[#121212] tracking-tight mb-2">
                AB 800 €
              </div>
              <span className="font-mono text-[11px] text-[#121212]/60 block mb-6 leading-relaxed">
                Festpreisangebot innerhalb 24h · Persönliche Umsetzung durch mich
              </span>
            </div>

            <div className="space-y-2.5 pt-4">
              <button
                type="button"
                data-cursor="hover"
                onClick={() => scrollTo("kontakt-final")}
                className="w-full py-3.5 bg-[#121212] text-white hover:bg-black border border-[#121212] rounded-[14px] font-mono text-[12px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer text-center active:scale-95 shadow-xs"
              >
                PROJEKT STARTEN →
              </button>

              <button
                type="button"
                data-cursor="hover"
                onClick={() => scrollTo("angebot-stack")}
                className="w-full py-3 bg-white text-[#121212] hover:bg-[#f5f5f3] border border-[#121212] rounded-[14px] font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer text-center active:scale-95"
              >
                FESTPREISE ANSEHEN ↓
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Dezentraler Scroll-Indikator unten */}
      <div
        onClick={() => scrollTo("werke-track")}
        className="mt-8 flex items-center justify-center gap-3 text-[#121212]/45 hover:text-[#121212] transition-colors cursor-pointer select-none group"
      >
        <div className="w-8 h-8 rounded-full border border-[#121212]/20 group-hover:border-[#121212] flex items-center justify-center transition-all">
          <svg
            width="12"
            height="12"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 2V12M7 12L3 8M7 12L11 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase font-semibold">
          WEITER ZU DEN WERKEN
        </span>
      </div>
    </section>
  );
};
