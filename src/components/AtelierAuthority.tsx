import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const SPECIFICATIONS = [
  {
    num: "01",
    tag: "ARCHITEKTUR",
    title: "Handgeschriebener Code",
    desc: "Kein WordPress-Baukasten mit 30 langsamen Plugins. Jede Zeile Code entsteht sauber in React und TypeScript für 90+ PageSpeed und Ladezeiten unter 0,4 Sekunden.",
  },
  {
    num: "02",
    tag: "KOMMUNIKATION",
    title: "Direkter Entwickler-Draht",
    desc: "Keine Vertriebler, keine Account-Manager. Sie sprechen vom ersten Gespräch bis zum Go-Live direkt mit mir via Telefon oder WhatsApp.",
  },
  {
    num: "03",
    tag: "SICHERHEIT",
    title: "Verbindliche Festpreise",
    desc: "Schwarz auf weiß vereinbart. Keine offenen Stundensätze, keine nachträglichen Überraschungen. Nach dem Launch gehört Ihnen der gesamte Quellcode zu 100 Prozent.",
  },
];

const MILESTONES = [
  {
    step: "01",
    phase: "Tag 1 bis 2",
    title: "Analyse und Festpreis",
    desc: "20 Minuten Erstgespräch via Telefon oder WhatsApp. Wir klären Ihre Ziele und Sie erhalten innerhalb von 24 Stunden ein schriftliches Festpreisangebot.",
    highlight: "Angebot in unter 24h",
  },
  {
    step: "02",
    phase: "Woche 1 bis 2",
    title: "Entwicklung & Texte",
    desc: "Schlüsselfertige Umsetzung: Wir schreiben die Texte, optimieren Bilder und bauen Ihre Seite in React. Erster klickbarer Entwurf in 48h. Zwei Korrekturschleifen inklusive.",
    highlight: "90+ PageSpeed Garantie",
  },
  {
    step: "03",
    phase: "Go-Live",
    title: "Launch & Google-Setup",
    desc: "Domain-Aufschaltung ohne Ausfallzeit, SSL und Google Unternehmensprofil. 100% Quellcode-Eigentum ohne monatliches Abo.",
    highlight: "100% Quellcode-Eigentum",
  },
];

export const AtelierAuthority: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const processWrapRef = useRef<HTMLDivElement>(null);
  const processHeaderRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const activeStepRef = useRef(0);
  const reduce = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (reduce || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Staggered reveal for specification dossier cards
      const specCards = sectionRef.current?.querySelectorAll<HTMLElement>(".spec-pillar-card");
      if (specCards && specCards.length > 0) {
        gsap.from(specCards, {
          y: 28,
          opacity: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: specCards[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // 2. Start-Reveal Animation for Prozess & Ablauf when scrolling into view
      if (processHeaderRef.current) {
        gsap.from(processHeaderRef.current, {
          y: 35,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: processWrapRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // 3. Smooth Continuous Scrubbed Spotlight Timeline on Desktop
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (!processWrapRef.current) return;

        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
        if (cards.length < 3) return;

        // Initial resting / active states — 100% solid opacity, no washed-out bleaching
        gsap.set(cards[0], {
          y: -14,
          scale: 1.02,
          opacity: 1,
          boxShadow: "0 20px 45px -10px rgba(18,18,18,0.14)",
          borderColor: "#121212",
          backgroundColor: "#ffffff",
        });

        gsap.set([cards[1], cards[2]], {
          y: 0,
          scale: 1.0,
          opacity: 1,
          boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
          borderColor: "rgba(18,18,18,0.14)",
          backgroundColor: "#ffffff",
        });

        // Scrubbed timeline: smooth continuous interpolation without CSS interference
        const tl = gsap.timeline({
          scrollTrigger: {
            id: "process-pin",
            trigger: processWrapRef.current,
            start: "top 14%",
            end: "+=1600",
            pin: true,
            scrub: 0.5,
            onUpdate: (self) => {
              const p = self.progress;
              const step = p < 0.333 ? 0 : p < 0.667 ? 1 : 2;

              if (activeStepRef.current !== step) {
                activeStepRef.current = step;
                setActiveStep(step);
              }
            },
          },
        });

        // Exact symmetrical normalized keyframe timeline (total duration = 3.0s)
        // Card 0 active: 0.0 to 0.7
        // Crossfade Card 0 -> Card 1: 0.7 to 1.3 (midpoint 1.0 = 33.3% progress)
        tl.to(
          cards[0],
          {
            y: 0,
            scale: 1.0,
            opacity: 1,
            boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
            borderColor: "rgba(18,18,18,0.14)",
            backgroundColor: "#ffffff",
            duration: 0.6,
            ease: "power2.inOut",
          },
          0.7
        ).to(
          cards[1],
          {
            y: -14,
            scale: 1.02,
            opacity: 1,
            boxShadow: "0 20px 45px -10px rgba(18,18,18,0.14)",
            borderColor: "#121212",
            backgroundColor: "#ffffff",
            duration: 0.6,
            ease: "power2.inOut",
          },
          0.7
        );

        // Card 1 active: 1.3 to 1.7
        // Crossfade Card 1 -> Card 2: 1.7 to 2.3 (midpoint 2.0 = 66.7% progress)
        tl.to(
          cards[1],
          {
            y: 0,
            scale: 1.0,
            opacity: 1,
            boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
            borderColor: "rgba(18,18,18,0.14)",
            backgroundColor: "#ffffff",
            duration: 0.6,
            ease: "power2.inOut",
          },
          1.7
        ).to(
          cards[2],
          {
            y: -14,
            scale: 1.02,
            opacity: 1,
            boxShadow: "0 20px 45px -10px rgba(18,18,18,0.14)",
            borderColor: "#121212",
            backgroundColor: "#ffffff",
            duration: 0.6,
            ease: "power2.inOut",
          },
          1.7
        );

        // Hold Card 2 active at the end before unpinning (2.3 to 3.0)
        tl.to({}, { duration: 0.7 });
      });

      // Staggered entrance for cards when approaching the Process section
      const validCards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (validCards.length > 0 && processWrapRef.current) {
        gsap.from(validCards, {
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          immediateRender: false,
          overwrite: "auto",
          scrollTrigger: {
            trigger: processWrapRef.current,
            start: "top 88%",
            once: true,
          },
        });
      }

      // On Mobile / Tablet: spotlight cards individually as they pass through viewport center
      mm.add("(max-width: 1023px)", () => {
        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
        cards.forEach((card, idx) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 65%",
            end: "bottom 35%",
            onEnter: () => {
              setActiveStep(idx);
              gsap.to(card, {
                y: -8,
                scale: 1.02,
                opacity: 1,
                borderColor: "#121212",
                boxShadow: "0 16px 36px -8px rgba(0,0,0,0.12)",
                backgroundColor: "#ffffff",
                duration: 0.35,
              });
            },
            onLeave: () => {
              gsap.to(card, {
                y: 0,
                scale: 1.0,
                opacity: 1,
                borderColor: "rgba(18,18,18,0.14)",
                boxShadow: "none",
                backgroundColor: "#ffffff",
                duration: 0.35,
              });
            },
            onEnterBack: () => {
              setActiveStep(idx);
              gsap.to(card, {
                y: -8,
                scale: 1.02,
                opacity: 1,
                borderColor: "#121212",
                boxShadow: "0 16px 36px -8px rgba(0,0,0,0.12)",
                backgroundColor: "#ffffff",
                duration: 0.35,
              });
            },
            onLeaveBack: () => {
              gsap.to(card, {
                y: 0,
                scale: 1.0,
                opacity: 1,
                borderColor: "rgba(18,18,18,0.14)",
                boxShadow: "none",
                backgroundColor: "#ffffff",
                duration: 0.35,
              });
            },
          });
        });
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, [reduce]);

  const goToStep = (stepIdx: number) => {
    const st = ScrollTrigger.getById("process-pin");
    if (st) {
      const targetProgress = stepIdx === 0 ? 0.08 : stepIdx === 1 ? 0.50 : 0.92;
      const targetScroll = st.start + (st.end - st.start) * targetProgress;
      const lenis = (window as any).lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(targetScroll, { duration: 0.9 });
      } else {
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      }
    } else {
      const card = cardsRef.current[stepIdx];
      card?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="ueber-roman"
      className="relative bg-white pt-32 pb-32 px-6 md:px-12 text-[#121212] border-t border-[#121212]"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* ======================================================== */}
        {/* PART 1: EDITORIAL AUTHORITY DOSSIER                      */}
        {/* ======================================================== */}
        <div className="pb-8 mb-20 border-b border-[#121212]">
          <h2 className="font-display font-extrabold text-[clamp(36px,5.5vw,78px)] leading-[0.94] tracking-[-0.04em] uppercase text-[#121212] mb-4">
            Echte Handarbeit.<br />Kein Agentur-Overhead.
          </h2>
          <p className="font-sans text-[18px] md:text-[20px] text-[#121212]/75 max-w-2xl leading-relaxed">
            Sie verhandeln nicht mit Vertrieblern und Ihre Wünsche landen nicht bei Praktikanten. Jede Zeile Code entsteht direkt in Leverkusen.
          </p>
        </div>

        {/* Dossier Grid: Portrait Left, 3 Architecture Pillars Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch mb-32 pb-24 border-b border-[#121212]">
          {/* Left: Roman's Portrait Frame */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-[32px] overflow-hidden border border-[#121212] bg-[#f5f5f5] shadow-sm h-full min-h-[420px]">
              <img
                src="/assets/images/roman.webp"
                alt="Roman Hero · Gründer Hero Webdesign"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top grayscale"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-[22px] bg-white border border-[#121212] shadow-sm">
                <span className="font-mono text-[10.5px] uppercase tracking-widest text-[#121212]/60 font-bold block mb-1">
                  GRÜNDER & ENTWICKLER
                </span>
                <div className="font-display font-bold text-[22px] text-[#121212] tracking-tight">
                  Roman · Gründer
                </div>
                <div className="font-mono text-[11px] text-[#121212]/65 mt-1">
                  Leverkusen · Direkter Draht via WhatsApp und Telefon
                </div>
              </div>
            </div>
          </div>

          {/* Right: 3 Sovereign Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            {SPECIFICATIONS.map((spec) => (
              <motion.div
                key={spec.num}
                whileHover={reduce ? {} : { y: -4, scale: 1.01 }}
                whileTap={reduce ? {} : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 420, damping: 26 }}
                className="spec-pillar-card bg-[#f8f8f8] border border-[#121212] rounded-[24px] p-7 md:p-8 flex flex-col justify-between hover:bg-white transition-colors duration-300 shadow-xs cursor-default"
              >
                <div className="flex items-center justify-end pb-3 border-b border-[#121212]/15 mb-4 font-mono text-xs">
                  <span className="text-[#121212]/75 uppercase tracking-wider font-semibold">{spec.tag}</span>
                </div>
                <h3 className="font-display font-bold text-[22px] md:text-[24px] text-[#121212] uppercase tracking-tight mb-2">
                  {spec.title}
                </h3>
                <p className="font-sans text-[15px] text-[#121212]/85 leading-relaxed">
                  {spec.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* PART 2: 3-STEP SPOTLIGHT SCROLL EXPERIENCE               */}
        {/* ======================================================== */}
        <div ref={processWrapRef} className="relative pt-4">
          {/* Section Heading & Step Indicator */}
          <div
            ref={processHeaderRef}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 will-change-transform"
          >
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#121212]/60 block mb-2">
                PROZESS & ABLAUF
              </span>
              <h3 className="font-display font-extrabold text-[32px] sm:text-[48px] text-[#121212] uppercase tracking-tight leading-tight">
                In 3 Schritten zum fertigen Webauftritt.
              </h3>
              <p className="font-sans text-[17px] text-[#121212]/70 max-w-xl leading-relaxed mt-2">
                Kompakte Milestones, transparente Termine, keine zeitraubenden Feedback-Schleifen.
              </p>
            </div>

            {/* Visual Step Progress Pills */}
            <div className="flex items-center gap-2 font-mono text-xs flex-wrap sm:flex-nowrap">
              {MILESTONES.map((m, i) => (
                <button
                  type="button"
                  key={m.step}
                  onClick={() => goToStep(i)}
                  className={`whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border cursor-pointer transition-all duration-300 ${
                    activeStep === i
                      ? "bg-[#121212] text-white border-[#121212] shadow-xs scale-105 font-bold"
                      : "bg-[#f5f5f5] text-[#121212]/60 border-[#121212]/15 hover:border-[#121212]/40"
                  }`}
                  aria-label={`Zu Schritt ${m.step} (${m.phase}) springen`}
                >
                  <span className="font-bold text-[12px]">0{i + 1}</span>
                  <span className="text-[11px] font-semibold">{m.phase}</span>
                </button>
              ))}
            </div>
          </div>

          {/* The 3 Milestone Cards Grid (Spotlighted sequentially on scroll and on click) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {MILESTONES.map((m, i) => {
              return (
                <div
                  key={m.step}
                  ref={(el) => {
                    cardsRef.current[i] = el;
                  }}
                  onClick={() => goToStep(i)}
                  className="process-milestone-card border rounded-[28px] p-8 flex flex-col justify-between cursor-pointer will-change-transform relative overflow-hidden bg-white"
                >
                  <div>
                    {/* Header bar */}
                    <div className="flex justify-between items-center pb-4 border-b border-[#121212] mb-6 font-mono text-xs">
                      <span className="font-bold text-[12px] text-[#121212]">
                        SCHRITT {m.step}
                      </span>
                      <span className="border border-[#121212]/20 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#f4f4f2] text-[#121212]">
                        {m.phase}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-[22px] md:text-[23px] text-[#121212] uppercase tracking-tight mb-3">
                      {m.title}
                    </h4>

                    <p className="font-sans text-[14.5px] text-[#121212]/80 leading-relaxed mb-8">
                      {m.desc}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-[#121212]/15 font-mono text-[12px] font-semibold flex items-center gap-2 text-[#121212]">
                    <span className="text-[14px] font-bold text-[#121212]">
                      ✓
                    </span>
                    <span className="text-[#121212]">{m.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
