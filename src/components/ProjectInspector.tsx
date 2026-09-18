import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "motion/react";
import { siteContent } from "../data/content";
import { MagneticButton } from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export const ProjectInspector: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const bgTypoRef = useRef<HTMLDivElement>(null);
  const chapterIntroRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !wrapRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const getDistance = () => {
        if (!trackRef.current) return 0;
        const cards = trackRef.current.querySelectorAll(".project-card");
        const targetElement = cards[cards.length - 1] as HTMLElement;
        if (!targetElement) return trackRef.current.scrollWidth - window.innerWidth;

        const isMobile = window.innerWidth < 768;
        const targetLeft = isMobile
          ? Math.max(16, (window.innerWidth - targetElement.offsetWidth) / 2)
          : Math.max(48, window.innerWidth - targetElement.offsetWidth - 64);

        return Math.max(0, targetElement.offsetLeft - targetLeft);
      };

      // 1. Start-Reveal Animation: Chapter intro, cards & watermark glide smoothly in on approach
      if (chapterIntroRef.current) {
        gsap.from(chapterIntroRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      if (trackRef.current) {
        const cards = trackRef.current.querySelectorAll(".project-card");
        if (cards.length > 0) {
          gsap.from(cards, {
            y: 50,
            opacity: 0,
            stagger: 0.12,
            duration: 0.9,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: wrapRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        }
      }

      if (bgTypoRef.current) {
        gsap.from(bgTypoRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // 2. Horizontal scrub — smooth, no bounce
      gsap.to(trackRef.current, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: () => `+=${getDistance() + 400}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      // 3. Parallax Watermark Background glides at slower speed
      if (bgTypoRef.current) {
        gsap.to(bgTypoRef.current, {
          x: () => -(getDistance() * 0.35),
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top top",
            end: () => `+=${getDistance() + 400}`,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      }
    }, wrapRef.current);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id="werke-track" className="relative bg-[#121212] text-white overflow-hidden">
      {/* Giant Parallax Watermark Background */}
      <div
        ref={bgTypoRef}
        className="absolute inset-y-0 left-0 flex items-center whitespace-nowrap opacity-[0.04] pointer-events-none font-display font-extrabold text-[22vw] tracking-tighter select-none will-change-transform z-0"
      >
        HERO WEBDESIGN · REFERENZEN · STOBO · PROLIFE · VANESSA BARTSCH ·
      </div>

      {/* GSAP Pinned Horizontal Viewport */}
      <div ref={wrapRef} className="relative overflow-hidden z-10">
        <div
          ref={trackRef}
          className="flex h-[100dvh] items-center px-6 md:px-16 gap-8 md:gap-12 will-change-transform"
          style={{ width: "max-content" }}
        >
          {/* Slide 0: Chapter Introduction */}
          <div ref={chapterIntroRef} className="w-[320px] sm:w-[400px] shrink-0 pr-4 will-change-transform">
            <h2 className="font-display font-extrabold text-[38px] sm:text-[50px] uppercase tracking-tight leading-[1.02] text-white">
              Echte Kunden.<br />Reale Ergebnisse.
            </h2>
            <p className="font-sans text-[16px] text-white/70 mt-6 leading-relaxed">
              Jedes Projekt handgeschrieben für maximale Ladezeiten, organische Auffindbarkeit und messbare Anfragen.
            </p>
            <div className="mt-8 font-mono text-[11px] text-white/40 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/60 animate-ping" />
              <span>Seitwärts scrollen</span>
            </div>
          </div>

          {/* Project Cards */}
          {siteContent.caseStudies.map((project, i) => (
            <motion.div
              key={project.id}
              whileHover={reduce ? {} : { y: -5 }}
              transition={{ type: "spring", stiffness: 350, damping: 26 }}
              className="project-card group h-[80dvh] sm:h-[76vh] w-[min(84vw,620px)] shrink-0 bg-white text-[#121212] rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 md:p-10 border border-white flex flex-col justify-between shadow-2xl transition-shadow duration-300 hover:shadow-[0_24px_50px_rgba(0,0,0,0.25)] will-change-transform"
            >
              <div>
                <div className="flex justify-between items-center pb-3 sm:pb-4 border-b border-[#121212] mb-4 sm:mb-6 font-mono text-[11px] sm:text-[12px]">
                  <span className="font-bold">PROJEKT 0{i + 1}</span>
                  <span className="border border-[#121212] px-2.5 sm:px-3 py-0.5 rounded-full font-semibold uppercase text-[9px] sm:text-[10px] group-hover:bg-[#121212] group-hover:text-white transition-colors">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[19px] sm:text-[28px] md:text-[32px] font-bold uppercase tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <MagneticButton
                    href={`https://www.${project.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="shrink-0 font-mono text-[9px] sm:text-[11px] font-bold uppercase border border-[#121212] px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full hover:bg-[#121212] hover:text-white transition-colors shadow-xs cursor-pointer inline-block"
                  >
                    {project.domain} ↗
                  </MagneticButton>
                </div>

                <p className="text-[12px] sm:text-[15px] text-[#121212]/80 mt-2 sm:mt-3 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Project Image */}
              <div className="my-3 sm:my-4 relative flex-1 rounded-[14px] sm:rounded-[20px] overflow-hidden border border-[#121212]/15 bg-[#f5f5f5]">
                <img
                  src={project.screenshot}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-transform transition-[filter] duration-500 ease-out will-change-transform"
                />
              </div>

              {/* Bottom Blueprint Detail */}
              <div className="pt-3 sm:pt-4 border-t border-[#121212] flex justify-between items-center font-mono text-[10px] sm:text-[12px]">
                <span className="font-bold">{project.metrics.label} · {project.metrics.value}</span>
                <span className="text-[#121212]/60 uppercase">{project.location}</span>
              </div>
            </motion.div>
          ))}

          {/* End Spacer */}
          <div className="w-8 md:w-16 shrink-0" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
