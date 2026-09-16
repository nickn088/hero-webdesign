import React from 'react';
import { Phone, FileText, Code2, Rocket } from 'lucide-react';
import { siteContent, ProcessStep } from '../data/content';

export const Process: React.FC = () => {
  const stepIcons = [Phone, FileText, Code2, Rocket];

  return (
    <section id="ablauf" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-amber-400">
            So läuft es ab
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Vier Schritte.<br />Sie wissen immer genau, was kommt.
          </h2>
          <p className="text-zinc-400 text-base">
            Keine monatelangen Hängepartien. Ein transparenter, verlässlicher Ablauf ohne unkalkulierbare Überraschungen.
          </p>
        </div>

        {/* 4-Step Stepper Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.process.map((step: ProcessStep, index) => {
            const IconComponent = stepIcons[index] || FileText;

            return (
              <div
                key={index}
                className="relative rounded-2xl bg-[#121217] border border-white/10 p-7 flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 shadow-xl group"
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-zinc-950 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-zinc-700 group-hover:text-zinc-500 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Timeline Pill */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-mono font-medium text-amber-400">{step.duration}</span>
                  <span className="text-zinc-500">Schritt {index + 1} von 4</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
