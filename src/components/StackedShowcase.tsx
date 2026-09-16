import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Gauge, Check } from 'lucide-react';
import { siteContent, CaseStudy } from '../data/content';

export const StackedShowcase: React.FC = () => {
  return (
    <section id="werke" className="py-32 px-6 md:px-12 bg-[#14110f] relative text-[#f6f1e8]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#dfbe9b] block mb-2">
              02 / MEISTERSTÜCKE & PROJEKTE
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#f6f1e8] font-normal leading-tight">
              Vier Arbeiten.<br />Alle nachprüfbar live.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-sans leading-relaxed">
            Keine anonymen Entwürfe aus der Schublade. Reale Webseiten für reale Betriebe in Köln und Leverkusen, die täglich messbare Anfragen generieren.
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className="space-y-24">
          {siteContent.caseStudies.map((project: CaseStudy, index: number) => {
            return (
              <ProjectStackCard
                key={project.id}
                project={project}
                index={index}
                total={siteContent.caseStudies.length}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface ProjectStackCardProps {
  project: CaseStudy;
  index: number;
  total: number;
}

const ProjectStackCard: React.FC<ProjectStackCardProps> = ({ project, index, total }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.5, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        opacity,
        top: `calc(10vh + ${index * 24}px)`,
      }}
      className="sticky rounded-3xl bg-[#1a1613] border border-white/15 overflow-hidden shadow-2xl p-8 sm:p-12 transition-all duration-500 hover:border-[#dfbe9b]/40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Info Column (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#dfbe9b]">
              WERK 0{index + 1} / 0{total}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-[11px] font-mono font-bold text-emerald-400 flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5" />
              <span>{project.metrics.value}</span>
            </span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
            {project.title}
          </h3>

          <div className="text-xs tracking-wider uppercase font-mono text-zinc-400">
            {project.category} · {project.location}
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed font-sans">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#dfbe9b]">
              Ergebnis für den Betrieb:
            </div>
            <ul className="space-y-1.5 text-xs text-zinc-300 font-sans">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Live Action */}
          <div className="pt-2">
            <a
              href={`https://www.${project.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-white text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
            >
              <span>{project.domain} öffnen</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Preview Device (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-2xl relative group">
            <img
              src={project.screenshot}
              alt={`Startseite von ${project.title}`}
              loading="lazy"
              className="w-full aspect-[16/10] object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
