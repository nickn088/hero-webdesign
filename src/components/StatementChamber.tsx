import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const STATEMENTS = [
  "Die meisten Websites sind teure digitale Visitenkarten, die niemand findet.",
  "Ihre Kunden suchen auf dem Smartphone nach einer sofortigen, vertrauenswürdigen Lösung.",
  "Handgeschriebener Code. 100/100 Ladezeit. Websites, die vom ersten Tag an Aufträge bringen.",
];

export const StatementChamber: React.FC = () => {
  const chamberRef = useRef<HTMLElement>(null);
  const refs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !chamberRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(refs.map((r) => r.current), { opacity: 0.12, scale: 0.95 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: chamberRef.current,
          start: "top top",
          end: "+=220%",
          pin: true,
          scrub: 0.6,
        },
      });

      tl.to(refs[0].current, { opacity: 1, scale: 1.02, duration: 1 });
      tl.to(refs[0].current, { opacity: 0.12, scale: 0.95, duration: 0.6 }, "+=0.3");
      tl.to(refs[1].current, { opacity: 1, scale: 1.02, duration: 1 });
      tl.to(refs[1].current, { opacity: 0.12, scale: 0.95, duration: 0.6 }, "+=0.3");
      tl.to(refs[2].current, { opacity: 1, scale: 1.02, duration: 1 });
    }, chamberRef.current);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      ref={chamberRef}
      id="vision-chamber"
      className="h-[100dvh] w-full bg-[#f8f8f8] bg-blueprint-grid border-t border-b border-[#121212] flex flex-col items-center justify-center px-6 md:px-12 relative overflow-hidden select-none"
    >
      <div className="max-w-5xl mx-auto text-center w-full z-10 flex flex-col gap-10 md:gap-14">
        {STATEMENTS.map((text, i) => (
          <div
            key={i}
            ref={refs[i]}
            className="font-display font-extrabold text-[clamp(24px,4.5vw,60px)] leading-[1.06] tracking-tight uppercase text-[#121212]"
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};
