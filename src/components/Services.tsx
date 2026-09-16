import React from 'react';
import { Check, ArrowRight, Sparkles, Clock, Shield } from 'lucide-react';
import { siteContent, ServicePackage } from '../data/content';

export const Services: React.FC = () => {
  return (
    <section id="leistungen" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0e0e13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-amber-400">
              Leistungen · Feste Preise
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Vier klare Wege.<br />Ein fester Ansprechpartner.
            </h2>
            <p className="text-zinc-400 text-base">
              Verbindliche Festpreise ohne nachträgliche Stundenzettel. Jeder Auftrag ist schlüsselfertig kalkuliert.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>2 Korrekturrunden & 30 Tage Support inklusive</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {siteContent.packages.map((pkg: ServicePackage) => {
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-7 ${
                  pkg.highlight
                    ? 'bg-gradient-to-b from-[#1c1c24] to-[#121217] border-2 border-amber-400/80 shadow-2xl shadow-amber-500/10 scale-100 lg:-translate-y-2'
                    : 'bg-[#121216] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Highlight Badge */}
                {pkg.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-amber-400 text-zinc-950 font-bold text-[11px] tracking-wide uppercase flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Meistgewählt für Betriebe</span>
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-zinc-500">
                      {pkg.number}
                    </span>
                    <span className="text-[11px] font-semibold text-zinc-400">
                      {pkg.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 min-h-[3rem]">
                    {pkg.description}
                  </p>

                  {/* Price Block */}
                  <div className="pb-6 mb-6 border-b border-white/10">
                    <div className="text-3xl font-extrabold text-white font-display">
                      {pkg.price}
                    </div>
                    <div className="text-xs text-zinc-400 flex items-center gap-1.5 mt-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{pkg.deliveryTime}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8 text-xs text-zinc-300">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <a
                  href="#anfrage"
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                    pkg.highlight
                      ? 'bg-amber-400 hover:bg-amber-300 text-zinc-950 shadow-lg shadow-amber-400/20'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <span>Dieses Paket wählen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-white/5 to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              Unsicher, welches Paket das Richtige für Ihren Betrieb ist?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Sagen Sie mir im kurzen 20-Minuten-Gespräch, was Sie vorhaben — ich sage Ihnen ehrlich, was reicht. Auch wenn es die kleinere Variante ist.
            </p>
          </div>

          <a
            href="#anfrage"
            className="shrink-0 px-5 py-3 rounded-xl text-xs font-bold text-zinc-950 bg-white hover:bg-amber-400 transition-colors flex items-center gap-2 shadow-md"
          >
            <span>20 Minuten unverbindlich reden</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
