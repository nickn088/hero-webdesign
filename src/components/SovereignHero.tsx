import React, { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motionTokens } from "../lib/motionTokens";
import { MagneticButton } from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export const SovereignHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const dossierCardRef = useRef<HTMLDivElement>(null);
  const headlineAccentRef = useRef<HTMLSpanElement>(null);
  const headlineUnderlineRef = useRef<HTMLDivElement>(null);
  const ctaCardRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const scrollTo = (id: string) => {
    const lenis = (window as any).lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(`#${id}`, { duration: 1.2 });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (reduce || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Initial Entrance Choreography:
      // "ein Schlag übergeht und einmal die Überschrift deutlich hervorhebt und danach einmal die CTAs"
      const tl = gsap.timeline({ delay: 0.25 });

      // Step A: Punch on "AUFTRÄGE BRINGEN."
      tl.fromTo(
        headlineAccentRef.current,
        { scale: 0.96, y: 4 },
        {
          scale: 1.05,
          y: -2,
          duration: 0.45,
          ease: "back.out(2.2)",
        }
      ).to(headlineAccentRef.current, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      if (headlineUnderlineRef.current) {
        tl.fromTo(
          headlineUnderlineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.5, ease: "power3.out" },
          "-=0.4"
        );
      }

      // Step B: Energy "geht wie ein Schlag über" smoothly to the CTA Box
      if (ctaCardRef.current) {
        tl.fromTo(
          ctaCardRef.current,
          { y: 15, scale: 0.95, borderColor: "rgba(18,18,18,0.2)" },
          {
            y: -10,
            scale: 1.05,
            borderColor: "rgba(18,18,18,1)",
            boxShadow: "0 28px 60px -10px rgba(18,18,18,0.24)",
            duration: 0.45,
            ease: "back.out(2.0)",
          },
          "+=0.06"
        ).to(ctaCardRef.current, {
          y: 0,
          scale: 1,
          boxShadow: "0 10px 30px -5px rgba(0,0,0,0.06)",
          borderColor: "rgba(18,18,18,0.25)",
          duration: 0.4,
          ease: "power2.out",
        });
      }

      // 2. Scroll-Linked Focus Beat:
      // As the user scrolls through the hero, the headline first commands the stage,
      // then focus sweeps dynamically across to the CTA card!
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=340",
        scrub: 0.4,
        onUpdate: (self) => {
          const p = self.progress; // 0 to 1

          // First half (0 to 0.45): Headline is elevated with high emphasis
          if (headlineAccentRef.current) {
            const headlineScale = 1 + Math.sin(Math.min(p / 0.45, 1) * Math.PI) * 0.05;
            const headlineY = -6 * Math.sin(Math.min(p / 0.45, 1) * Math.PI);
            gsap.to(headlineAccentRef.current, {
              scale: headlineScale,
              y: headlineY,
              duration: 0.1,
              overwrite: "auto",
            });
          }

          // Second half (0.3 to 1.0): Focus sweeps over to the CTA card
          if (ctaCardRef.current) {
            if (p > 0.3) {
              const ctaProgress = (p - 0.3) / 0.7;
              const sinVal = Math.sin(ctaProgress * Math.PI);
              const ctaY = -12 * sinVal;
              const ctaScale = 1 + 0.04 * sinVal;
              const shadowAlpha = 0.06 + 0.18 * sinVal;

              gsap.to(ctaCardRef.current, {
                y: ctaY,
                scale: ctaScale,
                borderColor: `rgba(18,18,18,${0.3 + 0.7 * sinVal})`,
                boxShadow: `0 28px 60px -10px rgba(0,0,0,${shadowAlpha})`,
                duration: 0.1,
                overwrite: "auto",
              });
            }
          }
        },
      });

      // 3. Cinematic Receding Depth Exit:
      // As the hero card scrolls away into the dark #werke-track, it recedes gracefully in 3D perspective
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
        onUpdate: (self) => {
          const p = self.progress;
          if (dossierCardRef.current && p > 0.12) {
            const exitP = (p - 0.12) / 0.88;
            const exitScale = 1 - exitP * 0.06; // 1 -> 0.94
            const exitY = exitP * -40;
            const exitOpacity = 1 - exitP * 0.22;
            gsap.set(dossierCardRef.current, {
              scale: exitScale,
              y: exitY,
              opacity: exitOpacity,
              transformOrigin: "center 20%",
            });
          }
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id="hero-start"
      className="min-h-[100dvh] w-full relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden bg-white bg-blueprint-grid"
    >
      {/* Das Hero-Architektur-Dossier */}
      <motion.div
        ref={dossierCardRef}
        initial={false}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={reduce ? { duration: 0.2 } : motionTokens.springHaptic}
        className="max-w-[1280px] w-full rounded-[32px] md:rounded-[40px] border border-[#121212] bg-white p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(18,18,18,0.06)] relative z-10 will-change-transform"
      >
        {/* Hauptbereich: Grid 8 / 4 Spalten */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Linke Spalte (8 Cols): Headline, Subtext, technische Checkmarks */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              {/* Masked Editorial Text Reveal */}
              <h1 className="font-extrabold text-[clamp(40px,8.5vw,76px)] uppercase tracking-[-0.035em] text-[#121212] leading-[1.02] mb-6">
                <div className="overflow-hidden pt-1 pb-1">
                  <motion.span
                    className="block"
                    initial={false}
                    animate={{ y: 0 }}
                  >
                    WEBSITES, DIE
                  </motion.span>
                </div>
                {/* Breathing room container so the dots of Ä are never clipped */}
                <div className="overflow-visible pt-3 pb-1.5 -mt-2 relative inline-block">
                  <span
                    ref={headlineAccentRef}
                    className="inline-block text-[#121212] origin-left will-change-transform relative z-10"
                  >
                    AUFTRÄGE BRINGEN.
                  </span>
                  {/* Architectural Accent Highlighter Underline */}
                  <div
                    ref={headlineUnderlineRef}
                    className="h-1.5 sm:h-2 bg-[#121212] w-full mt-1 rounded-full origin-left will-change-transform"
                  />
                </div>
              </h1>

              <motion.p
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                className="text-[16px] sm:text-[18px] text-[#121212]/80 leading-relaxed max-w-2xl mb-8 font-sans"
              >
                Kein Baukasten. Kein Technik-Frust. Ich baue kompromisslos schnelle Websites, die Besucher in zahlende Kunden verwandeln. Struktur, verkaufsstarke Texte & Domain-Umzug komplett inklusive — 0 Stunden Mehraufwand für Sie.
              </motion.p>
            </div>

            {/* Technische Garantien mit gestaffelten Checkmarks */}
            <motion.div
              initial={reduce ? false : "hidden"}
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.4 },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-[#121212]"
            >
              {[
                "0.4s Ladezeit · 90+ Google PageSpeed Garantie",
                "Schlüsselfertig: Verkaufsstarke Texte inklusive",
                "100% Festpreis · Keine Nachforderungen, kein Abo",
                "Erster Entwurf in 48h · Live in 14 Tagen",
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={motionTokens.springSnappy}
                  className="flex items-start gap-2.5 font-mono text-[12px] sm:text-[13px] text-[#121212]/85 group"
                >
                  <motion.span
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={motionTokens.springHaptic}
                    className="font-bold text-[#121212] select-none inline-block cursor-default"
                  >
                    ✓
                  </motion.span>
                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Rechte Spalte (4 Cols): Eigene Inset-Box mit Kennzahl & Magnetic CTAs */}
          <div
            ref={ctaCardRef}
            className="lg:col-span-4 bg-[#fcfcfb] border border-[#121212] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-[box-shadow,border-color] duration-300 will-change-transform"
          >
            <div>
              <span className="block font-mono text-[11px] text-[#121212]/60 uppercase mb-2 font-bold tracking-wider">
                VERBINDLICHER EINSTIEG
              </span>
              <div className="font-display font-extrabold text-[42px] sm:text-[48px] leading-none text-[#121212] tracking-tight mb-2">
                AB 800 €
              </div>
              <span className="font-mono text-[11px] text-[#121212]/60 block mb-6 leading-relaxed">
                Festpreisangebot in 24h · 100% Zufriedenheit vor Freigabe
              </span>
            </div>

            <div className="space-y-2.5 pt-4">
              <MagneticButton
                data-cursor="hover"
                onClick={() => scrollTo("kontakt-final")}
                className="w-full min-h-[48px] py-3.5 bg-[#121212] text-white hover:bg-black border border-[#121212] rounded-[14px] font-mono text-[12px] font-bold uppercase tracking-wider cursor-pointer text-center shadow-xs flex items-center justify-center gap-2 group transition-colors duration-200"
              >
                <span>PROJEKT STARTEN</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </MagneticButton>

              <MagneticButton
                data-cursor="hover"
                onClick={() => scrollTo("angebot-stack")}
                className="w-full min-h-[44px] py-3 bg-white text-[#121212] hover:bg-[#f5f5f3] border border-[#121212] rounded-[14px] font-mono text-[11px] font-bold uppercase tracking-wider cursor-pointer text-center flex items-center justify-center gap-1.5 group transition-colors duration-200"
              >
                <span>FESTPREISE ANSEHEN</span>
                <span className="transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Dezentraler Scroll-Indikator unten */}
      <MagneticButton
        type="button"
        onClick={() => scrollTo("werke-track")}
        data-cursor="hover"
        className="mt-8 flex items-center justify-center gap-3 text-[#121212]/45 hover:text-[#121212] transition-colors cursor-pointer select-none group min-h-[44px] px-4"
        aria-label="Weiter zu den Werken scrollen"
      >
        <div className="w-8 h-8 rounded-full border border-[#121212]/20 group-hover:border-[#121212] flex items-center justify-center transition-all group-hover:scale-105">
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
      </MagneticButton>
    </section>
  );
};
