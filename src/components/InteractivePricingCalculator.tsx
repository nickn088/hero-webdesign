import React, { useState } from "react";
import { motion } from "motion/react";

type Option = { id: string; label: string; price: number; desc: string };
type Step = { question: string; key: string; options: Option[] };

const STEPS: Step[] = [
  {
    question: "Was für eine Website?",
    key: "type",
    options: [
      { id: "landing", label: "Landingpage", price: 800, desc: "1 Seite · maximale Conversion · schnell live" },
      { id: "business", label: "Business-Website", price: 1500, desc: "Bis 5 Seiten · lokales SEO · vollständig" },
      { id: "shop", label: "Online-Shop", price: 3000, desc: "Katalog · Warenkorb · Zahlungsarten" },
    ],
  },
  {
    question: "Google-Sichtbarkeit?",
    key: "seo",
    options: [
      { id: "seo-no", label: "Basis reicht", price: 0, desc: "SEO-Grundlagen sind bereits enthalten" },
      { id: "seo-yes", label: "Lokale Dominanz", price: 690, desc: "Google Profil · Maps · Keywords für Ihre Region" },
    ],
  },
  {
    question: "Wann soll's losgehen?",
    key: "urgency",
    options: [
      { id: "soon", label: "Schnellstmöglich", price: 0, desc: "Nächster freier Slot" },
      { id: "planned", label: "In 4–8 Wochen", price: 0, desc: "Vorlauf für gemeinsame Vorbereitung" },
      { id: "just-info", label: "Erstmal nur schauen", price: 0, desc: "Keine Verbindlichkeit" },
    ],
  },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const InteractivePricingCalculator: React.FC = () => {
  const [selections, setSelections] = useState<Record<string, string>>({
    type: "business",
    seo: "seo-yes",
    urgency: "soon",
  });
  const [currentStep, setCurrentStep] = useState(0);

  const totalPrice = STEPS.slice(0, 2).reduce((acc, step) => {
    const opt = step.options.find((o) => o.id === selections[step.key]);
    return acc + (opt?.price ?? 0);
  }, 0);

  const step = STEPS[currentStep];

  const select = (key: string, id: string) => {
    setSelections((prev) => ({ ...prev, [key]: id }));
    if (currentStep < STEPS.length - 1) {
      setTimeout(() => setCurrentStep((s) => s + 1), 180);
    }
  };

  const scrollToContact = () => {
    const lenis = (window as any).lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo("#kontakt-final", { duration: 1.2 });
    } else {
      document.getElementById("kontakt-final")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="kalkulator"
      className="relative bg-[#121212] py-28 px-6 md:px-12 text-white border-t border-[#121212]"
    >
      <div className="max-w-[1360px] mx-auto">

        {/* Header — no slop label, just the headline */}
        <div className="mb-16 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease }}
            className="font-display font-extrabold text-[clamp(36px,5.5vw,80px)] leading-[0.93] tracking-[-0.04em] uppercase text-white mb-4"
          >
            Preis in 30 Sekunden.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            className="font-sans text-[17px] text-white/60 max-w-lg leading-relaxed"
          >
            Wählen Sie Ihre Parameter. Sie erhalten einen verbindlichen Richtwert — kein Verkaufsgespräch, kein Druck.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left: Step questions */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease }}
          >
            {/* Step progress dots */}
            <div className="flex items-center gap-3 mb-8">
              {STEPS.map((s, idx) => (
                <button
                  key={s.key}
                  type="button"
                  data-cursor="hover"
                  onClick={() => setCurrentStep(idx)}
                  className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${
                    idx === currentStep
                      ? "bg-white w-8"
                      : idx < currentStep
                      ? "bg-white/50 w-4"
                      : "bg-white/20 w-4"
                  }`}
                  aria-label={`Schritt ${idx + 1}`}
                />
              ))}
              <span className="font-mono text-[11px] text-white/40 ml-2 uppercase tracking-wider">
                {currentStep + 1} / {STEPS.length}
              </span>
            </div>

            {/* Question */}
            <h3 className="font-display font-bold text-[clamp(22px,3vw,34px)] text-white tracking-tight mb-8 leading-tight">
              {step.question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {step.options.map((opt) => {
                const isSelected = selections[step.key] === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    data-cursor="hover"
                    onClick={() => select(step.key, opt.id)}
                    className={`w-full text-left p-5 rounded-[20px] border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 active:scale-[0.99] ${
                      isSelected
                        ? "bg-white text-[#121212] border-white"
                        : "bg-white/5 text-white border-white/15 hover:border-white/40"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-display font-bold text-[17px]">{opt.label}</span>
                        {opt.price > 0 && (
                          <span
                            className={`font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                              isSelected
                                ? "bg-[#121212] text-white border-[#121212]"
                                : "bg-white/10 text-white/70 border-white/20"
                            }`}
                          >
                            +{opt.price.toLocaleString("de-DE")} €
                          </span>
                        )}
                      </div>
                      <p
                        className={`font-mono text-[12px] leading-snug ${
                          isSelected ? "text-[#121212]/70" : "text-white/50"
                        }`}
                      >
                        {opt.desc}
                      </p>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "border-[#121212] bg-[#121212] text-white"
                          : "border-white/30"
                      }`}
                    >
                      {isSelected && <span className="text-[10px] font-bold text-white">✓</span>}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-white/10 font-mono text-xs">
              <button
                type="button"
                disabled={currentStep === 0}
                onClick={() => setCurrentStep((s) => s - 1)}
                className="text-white/40 hover:text-white disabled:opacity-20 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                ← ZURÜCK
              </button>
              {currentStep < STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep((s) => s + 1)}
                  className="font-bold text-white hover:text-white/70 transition-colors cursor-pointer"
                >
                  WEITER →
                </button>
              ) : (
                <span className="font-bold text-white/60">FERTIG ✓</span>
              )}
            </div>
          </motion.div>

          {/* Right: Live price summary */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
          >
            <div className="border border-white/15 rounded-[32px] p-8 sm:p-10 bg-white/5">
              {/* Summary list */}
              <div className="space-y-3 mb-8 font-mono text-xs">
                {STEPS.map((s) => {
                  const opt = s.options.find((o) => o.id === selections[s.key]);
                  return (
                    <div
                      key={s.key}
                      className="flex items-center justify-between py-3 border-b border-white/10"
                    >
                      <span className="text-white/50 uppercase tracking-wider">
                        {s.key === "type" ? "Website" : s.key === "seo" ? "SEO" : "Zeitplan"}
                      </span>
                      <span className="font-bold text-white">{opt?.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Price display */}
              <div className="mb-8">
                <span className="font-mono text-[11px] text-white/50 uppercase tracking-wider block mb-2 font-bold">
                  RICHTWERT FESTPREIS
                </span>
                <div className="font-display font-extrabold leading-none text-white tracking-[-0.04em] mb-2" style={{ fontSize: "clamp(48px, 6vw, 72px)" }}>
                  {totalPrice > 0 ? (
                    <>{totalPrice.toLocaleString("de-DE")} €</>
                  ) : (
                    "Auf Anfrage"
                  )}
                </div>
                <div className="font-mono text-[11px] text-white/40">
                  Netto zzgl. 19% MwSt. · Inkl. Ladezeiten-Garantie
                </div>
              </div>

              <button
                type="button"
                data-cursor="hover"
                onClick={scrollToContact}
                className="w-full py-4 bg-white text-[#121212] hover:bg-white/80 rounded-[16px] font-mono text-[12px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                ANGEBOT ANFRAGEN →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
