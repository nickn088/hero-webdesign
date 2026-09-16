import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/content';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#09090c]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold uppercase tracking-wider text-rose-400">
            Warum Anfragen ausbleiben
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Drei typische Fehler — und was wirksam dagegen hilft.
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl">
            90 % aller Betriebs-Websites in Leverkusen und Köln scheitern an denselben drei Engpässen. Hier ist die Gegenüberstellung.
          </p>
        </div>

        {/* 3 Row Cards */}
        <div className="space-y-6">
          {siteContent.problemsAndSolutions.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#121217] border border-white/10 overflow-hidden shadow-xl hover:border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Problem Side (Left - 5 Cols) */}
                <div className="lg:col-span-5 p-7 sm:p-9 bg-rose-950/10 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-rose-400/80 px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-500/20">
                        Engpass {item.number}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">Status Quo</span>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      <span>{item.problemTitle}</span>
                    </h3>

                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {item.problemDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-rose-500/15">
                    <span className="text-xs font-medium text-rose-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                      <span>Folge: {item.problemImpact}</span>
                    </span>
                  </div>
                </div>

                {/* Transition Arrow Indicator (Middle on Desktop) */}
                <div className="hidden lg:flex lg:col-span-1 items-center justify-center bg-[#0d0d12] border-r border-white/5">
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Solution Side (Right - 6 Cols) */}
                <div className="lg:col-span-6 p-7 sm:p-9 bg-emerald-950/10 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-emerald-400 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                        Hero-Lösung
                      </span>
                      <span className="text-xs text-emerald-400/80 font-mono font-semibold">100 % Gelöst</span>
                    </div>

                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>{item.solutionTitle}</span>
                    </h3>

                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {item.solutionDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-emerald-500/15">
                    <span className="text-xs font-semibold text-emerald-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>Mehr qualifizierte Anfragen bei gleicher Besucherzahl</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
