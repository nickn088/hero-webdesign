import React from 'react';
import { Code2, Target, PhoneCall, CheckCircle } from 'lucide-react';
import { siteContent } from '../data/content';

export const Klartext: React.FC = () => {
  const icons = [Code2, Target, PhoneCall];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0b0e] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-amber-400">
            Klartext ohne Agentur-Geschwurbel
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Drei klare Antworten. Bevor wir telefonieren.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Keine Buzzwords, kein Sales-Pitch. Nur die nackten Tatsachen für Ihren Betrieb.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteContent.klartext.map((item, index) => {
            const IconComponent = icons[index] || CheckCircle;

            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-[#121216] border border-white/10 p-8 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-amber-500/5"
              >
                {/* Header with Icon and Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-zinc-950 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-2xl font-bold text-zinc-700 group-hover:text-zinc-500 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Subtitle / Question */}
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  {item.title}
                </span>

                {/* Main Heading */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {item.subtitle}
                </h3>

                {/* Paragraph */}
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  {item.text}
                </p>

                {/* Bottom subtle accent line */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Garantierter Festpreis ohne Risiko</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
