import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const SPECIFICATIONS = [
  {
    num: "01",
    tag: "ARCHITEKTUR",
    title: "Handgeschriebener Code",
    desc: "Kein WordPress-Baukasten mit 30 langsamen Plugins. Jede Zeile Code entsteht sauber in React und TypeScript für 100/100 PageSpeed und Ladezeiten unter 0,4 Sekunden.",
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
    desc: "20 Minuten unverbindliches Erstgespräch. Wir klären Ihre Ziele und Sie erhalten innerhalb von 24 Stunden ein verbindliches Festpreisangebot.",
    highlight: "Verbindlicher Festpreis",
  },
  {
    step: "02",
    phase: "Woche 1 bis 2",
    title: "Entwicklung und Speed",
    desc: "Handgefertigter Code mit privatem Live-Vorschaulink. Sie verfolgen den Entstehungsprozess in Echtzeit. Zwei Korrekturschleifen inklusive.",
    highlight: "100/100 PageSpeed Garantie",
  },
  {
    step: "03",
    phase: "Go-Live",
    title: "Launch und Google-Setup",
    desc: "Domain-Aufschaltung, SSL und Google Unternehmensprofil. Sie erhalten alle Zugänge und sind vollkommen unabhängig.",
    highlight: "100% Quellcode-Eigentum",
  },
];

export const AtelierAuthority: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const processTimelineRef = useRef<HTMLDivElement>(null);
  const processLineRef = useRef<SVGPathElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Animated Blueprint Conduit Line across the 3 Process Steps
      if (processTimelineRef.current && processLineRef.current) {
        gsap.fromTo(
          processLineRef.current,
          { strokeDashoffset: 1200 },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: processTimelineRef.current,
              start: "top 80%",
              end: "bottom 55%",
              scrub: 1,
            },
          }
        );
      }

      // 2. Process Cards Scrubbing staggered into view
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".process-milestone-card");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            {
              y: 50,
              opacity: 0.25,
              scale: 0.95,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                end: "top 60%",
                scrub: 0.6,
              },
            }
          );
        });
      }

      // 3. Staggered reveal for the 3 Specification Dossier Cards
      const specCards = sectionRef.current?.querySelectorAll(".spec-pillar-card");
      if (specCards && specCards.length > 0) {
        gsap.fromTo(
          specCards,
          { y: 35, opacity: 0.2 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: specCards[0],
              start: "top 85%",
              end: "top 55%",
              scrub: 0.5,
            },
          }
        );
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id="ueber-roman"
      className="relative bg-white pt-32 pb-32 px-6 md:px-12 text-[#121212] border-t border-[#121212] overflow-hidden"
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

          {/* Right: 3 Sovereign Pillars (Replaces cheesy SaaS table) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            {SPECIFICATIONS.map((spec) => (
              <div
                key={spec.num}
                className="spec-pillar-card bg-[#f8f8f8] border border-[#121212] rounded-[24px] p-7 md:p-8 flex flex-col justify-between hover:bg-white transition-all duration-300 shadow-xs"
              >
                <div className="flex items-center justify-end pb-3 border-b border-[#121212]/15 mb-4 font-mono text-xs">
                  <span className="text-[#121212]/60 uppercase tracking-wider">{spec.tag}</span>
                </div>
                <h3 className="font-display font-bold text-[22px] md:text-[24px] text-[#121212] uppercase tracking-tight mb-2">
                  {spec.title}
                </h3>
                <p className="font-sans text-[15px] text-[#121212]/80 leading-relaxed">
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* PART 2: THE 3-STEP ARCHITECTURAL BLUEPRINT FLOW          */}
        {/* ======================================================== */}
        <div ref={processTimelineRef} className="relative">
          <div className="mb-16">
            <h3 className="font-display font-extrabold text-[32px] sm:text-[48px] text-[#121212] uppercase tracking-tight mb-3 leading-tight">
              In 3 Schritten zum fertigen Webauftritt.
            </h3>
            <p className="font-sans text-[17px] text-[#121212]/70 max-w-xl leading-relaxed">
              Kompakte Milestones, transparente Termine, keine zeitraubenden Feedback-Schleifen.
            </p>
          </div>

          {/* Animated Conduit Line (Desktop SVG Path Scrubbed by ScrollTrigger) */}
          <div className="relative">
            <svg
              className="hidden lg:block absolute -top-8 left-0 right-0 w-full h-12 pointer-events-none z-0"
              viewBox="0 0 1200 40"
              fill="none"
            >
              <path
                ref={processLineRef}
                d="M 50,20 L 380,20 L 430,20 L 780,20 L 830,20 L 1150,20"
                stroke="#121212"
                strokeWidth="2.5"
                strokeDasharray="12 8"
                strokeDashoffset="1200"
              />
            </svg>

            {/* The 3 Animated Milestone Cards */}
            <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {MILESTONES.map((m) => (
                <div
                  key={m.step}
                  className="process-milestone-card bg-[#f8f8f8] border border-[#121212] rounded-[28px] p-8 flex flex-col justify-between hover:-translate-y-2 hover:bg-white transition-all duration-300 shadow-sm"
                >
                  <div>
                    {/* Header bar */}
                    <div className="flex justify-end items-center pb-4 border-b border-[#121212] mb-6 font-mono text-xs">
                      <span className="bg-white border border-[#121212] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                        {m.phase}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-[22px] text-[#121212] uppercase tracking-tight mb-3">
                      {m.title}
                    </h4>

                    <p className="font-sans text-[14.5px] text-[#121212]/80 leading-relaxed mb-8">
                      {m.desc}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-[#121212]/20 font-mono text-[12px] text-[#121212] font-semibold flex items-center gap-2">
                    <span className="text-[14px]">✓</span>
                    <span>{m.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
