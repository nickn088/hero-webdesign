import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { siteContent } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export const ProjectInspector: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const bgTypoRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !wrapRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const distance = trackRef.current!.scrollWidth - window.innerWidth;

      // Horizontal track movement
      gsap.to(trackRef.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: () => `+=${distance + 400}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Parallax Watermark Background glides at slower speed
      if (bgTypoRef.current) {
        gsap.to(bgTypoRef.current, {
          x: -(distance * 0.35),
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top top",
            end: () => `+=${distance + 400}`,
            scrub: 1,
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
          <div className="w-[320px] sm:w-[400px] shrink-0 pr-4">
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

          {/* Project Cards with Velocity Skew */}
          {siteContent.caseStudies.map((project, i) => (
            <div
              key={project.id}
              className="velocity-skew-card h-[76vh] w-[min(88vw,660px)] shrink-0 bg-white text-[#121212] rounded-[32px] p-6 sm:p-8 md:p-10 border border-white flex flex-col justify-between shadow-2xl transition-shadow duration-300"
            >
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-[#121212] mb-6 font-mono text-[12px]">
                  <span className="font-bold">PROJEKT 0{i + 1}</span>
                  <span className="border border-[#121212] px-3 py-0.5 rounded-full font-semibold uppercase text-[10px]">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[26px] sm:text-[32px] font-bold uppercase tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <a
                    href={`https://www.${project.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="shrink-0 font-mono text-[11px] font-bold uppercase border border-[#121212] px-3.5 py-1.5 rounded-full hover:bg-[#121212] hover:text-white transition-colors"
                  >
                    {project.domain} ↗
                  </a>
                </div>

                <p className="text-[14px] sm:text-[15px] text-[#121212]/80 mt-3 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Real Project Image Frame */}
              <div className="my-4 relative flex-1 rounded-[20px] overflow-hidden border border-[#121212]/15 bg-[#f5f5f5]">
                <img
                  src={project.screenshot}
                  alt={project.title}
                  className="w-full h-full object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Bottom Blueprint Detail */}
              <div className="pt-4 border-t border-[#121212] flex justify-between items-center font-mono text-[11px] sm:text-[12px]">
                <span className="font-bold">{project.metrics.label} · {project.metrics.value}</span>
                <span className="text-[#121212]/60 uppercase">{project.location}</span>
              </div>
            </div>
          ))}

          {/* End Spacer */}
          <div className="w-10 shrink-0" />
        </div>
      </div>
    </section>
  );
};
