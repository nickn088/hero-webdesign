import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Gauge, Check } from 'lucide-react';
import { siteContent, CaseStudy } from '../data/content';

export const HorizontalShowcase: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Transform vertical scroll progress (0 -> 1) into horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <section id="werke" ref={targetRef} className="relative h-[380vh] bg-[#050508] text-white">
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-screen flex flex-col justify-between py-12 px-6 md:px-12 overflow-hidden blueprint-grid">
        {/* Top Section Header */}
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-b border-white/10 pb-4 z-20">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-cyan-400 font-bold">
              // 03 ARCHIV DER WERKE
            </span>
            <span className="text-zinc-600">•</span>
            <span className="font-display font-bold text-sm sm:text-base text-white">
              Vier produktive Referenzen in Vollendung
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span>HORIZONTALER RUNDGANG</span>
            <span className="text-cyan-400">→</span>
          </div>
        </div>

        {/* Horizontal Sliding Track */}
        <div className="relative w-full my-auto overflow-visible">
          <motion.div style={{ x }} className="flex gap-10 w-max items-center pr-24">
            {siteContent.caseStudies.map((project: CaseStudy, idx: number) => {
              return (
                <div
                  key={project.id}
                  data-cursor="WERK"
                  className="w-[85vw] sm:w-[75vw] lg:w-[68vw] max-w-5xl rounded-3xl bg-[#090b12] border border-white/15 p-8 sm:p-12 shadow-2xl flex flex-col justify-between group transition-all duration-500 hover:border-cyan-400/50 shrink-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Info (5 Cols) */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono tracking-[0.25em] uppercase text-cyan-400 font-bold">
                          WERK 0{idx + 1}
                        </span>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-400">
                          <Gauge className="w-3.5 h-3.5" />
                          <span>{project.metrics.value}</span>
                        </div>
                      </div>

                      <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        {project.title}
                      </h3>

                      <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                        {project.category} · {project.location}
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                        {project.description}
                      </p>

                      <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-2">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 block font-semibold">
                          Messbares Ergebnis:
                        </span>
                        <ul className="space-y-1 text-xs text-zinc-300 font-sans">
                          {project.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <a
                          href={`https://www.${project.domain}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-cyan-400 text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
                        >
                          <span>{project.domain} live öffnen</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Right Screenshot Showcase (7 Cols) */}
                    <div className="lg:col-span-7">
                      <div className="rounded-2xl overflow-hidden bg-black/80 border border-white/10 shadow-2xl relative aspect-[16/10] group-hover:border-cyan-500/30 transition-colors">
                        <img
                          src={project.screenshot}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Horizontal Progress Line */}
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-t border-white/10 pt-4 z-20 text-[11px] font-mono text-zinc-500">
          <span>01 // STOBO SHOP</span>
          <div className="w-48 sm:w-80 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
              className="h-full bg-cyan-400"
            />
          </div>
          <span>04 // STOBO CORPORATE</span>
        </div>
      </div>
    </section>
  );
};
