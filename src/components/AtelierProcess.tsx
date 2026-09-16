import React from 'react';
import { siteContent } from '../data/content';

export const AtelierProcess: React.FC = () => {
  return (
    <section id="ablauf" className="py-32 px-6 md:px-12 bg-[#171411] text-[#f6f1e8] relative border-t border-white/10">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#dfbe9b] block mb-2">
              03 / VORGEHENSWEISE
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal leading-tight">
              Vier Schritte.<br />Von der Idee bis zum Go-Live.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-sans leading-relaxed">
            Kein Agentur-Pingpong. Direkter Kontakt, schriftliche Garantien und ein planbarer Festpreis ohne Überraschungen.
          </p>
        </div>

        {/* 4 Architectural Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteContent.process.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#1d1915] border border-white/10 flex flex-col justify-between space-y-8 hover:border-[#dfbe9b]/40 transition-colors group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-serif text-3xl font-light text-[#dfbe9b] group-hover:translate-x-1 transition-transform">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-white font-medium">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-[10px] uppercase tracking-widest font-mono text-zinc-500">
                Phase 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
