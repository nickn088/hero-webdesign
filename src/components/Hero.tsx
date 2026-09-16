import React, { useState } from 'react';
import { ArrowRight, Star, Zap, CheckCircle2, ShieldCheck, PhoneCall, Gauge } from 'lucide-react';
import { siteContent } from '../data/content';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');

  return (
    <section className="relative min-h-[92dvh] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-subtle-dots">
      {/* Ambient glowing radial blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-10 w-[400px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Value Proposition & Copy */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-zinc-200 font-semibold">{siteContent.hero.badgeRegion}</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400">{siteContent.hero.badgeSLA}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
            {siteContent.hero.headlineLine1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              {siteContent.hero.headlineLine2}
            </span>
            <br />
            <span className="italic font-display font-medium text-amber-400 drop-shadow-sm">
              {siteContent.hero.headlineHighlight}
            </span>
          </h1>

          {/* Lead Text */}
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal">
            {siteContent.hero.leadText}
          </p>

          {/* Primary Action Buttons */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a
              href="#anfrage"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-xl shadow-amber-500/15 hover:shadow-amber-500/25 active:scale-[0.98]"
            >
              <span>{siteContent.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#leistungen"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all active:scale-[0.98]"
            >
              <span>{siteContent.hero.ctaSecondary}</span>
            </a>
          </div>

          {/* Trust Signals */}
          <div className="pt-4 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-zinc-200">{siteContent.hero.trustStars}</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100 % DSGVO-konform (Schriften lokal)</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-End Proof Device Mockup (Contrast Comparison) */}
        <div className="lg:col-span-5 w-full">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-amber-500/20 via-zinc-800/40 to-transparent blur-xl opacity-70" />

            <div className="relative rounded-2xl bg-[#121216] border border-white/10 shadow-2xl overflow-hidden">
              {/* Mockup Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d10] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                </div>

                <div className="px-3 py-1 rounded-md bg-white/5 text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                  <span>hero-webdesign.de</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>

                {/* Tab Switcher: Before vs After */}
                <div className="flex items-center p-0.5 rounded-lg bg-white/5 text-[11px] font-medium text-zinc-400">
                  <button
                    onClick={() => setActiveTab('after')}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeTab === 'after'
                        ? 'bg-amber-400 text-zinc-950 font-bold shadow'
                        : 'hover:text-white'
                    }`}
                  >
                    Hero-Standard
                  </button>
                  <button
                    onClick={() => setActiveTab('before')}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeTab === 'before'
                        ? 'bg-rose-500 text-white font-bold shadow'
                        : 'hover:text-white'
                    }`}
                  >
                    Klassischer Fehler
                  </button>
                </div>
              </div>

              {/* Mockup Display Content */}
              {activeTab === 'after' ? (
                <div className="p-6 space-y-5 bg-gradient-to-b from-[#141419] to-[#0f0f13]">
                  {/* Live Metrics Row */}
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-lg font-display">
                        <Gauge className="w-4 h-4" />
                        <span>100</span>
                      </div>
                      <div className="text-[10px] text-zinc-400 mt-0.5">PageSpeed Score</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="flex items-center justify-center gap-1 text-amber-400 font-bold text-lg font-display">
                        <Zap className="w-4 h-4" />
                        <span>0,3s</span>
                      </div>
                      <div className="text-[10px] text-zinc-400 mt-0.5">Reale Ladezeit</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-lg font-display">
                        <PhoneCall className="w-4 h-4" />
                        <span>1 Klick</span>
                      </div>
                      <div className="text-[10px] text-zinc-400 mt-0.5">Direktanruf</div>
                    </div>
                  </div>

                  {/* Visual Interface Preview */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                      <div className="text-xs font-semibold text-zinc-200">Meisterbetrieb Handwerk Leverkusen</div>
                      <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-bold">Top 3 Google</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-4 w-3/4 bg-white/10 rounded"></div>
                      <div className="h-3 w-full bg-white/5 rounded"></div>
                      <div className="h-3 w-5/6 bg-white/5 rounded"></div>
                    </div>
                    <div className="pt-2 flex items-center gap-2">
                      <div className="flex-1 py-2 px-3 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-bold text-center border border-emerald-500/30">
                        📞 Jetzt Notdienst anrufen
                      </div>
                      <div className="flex-1 py-2 px-3 rounded-lg bg-white/10 text-white text-xs font-medium text-center">
                        Angebot anfordern
                      </div>
                    </div>
                  </div>

                  {/* Benefit Pill */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Jeder Besucher landet direkt bei Ihrer Telefonnummer statt im Daten-Nirwana.</span>
                  </div>
                </div>
              ) : (
                <div className="p-6 space-y-5 bg-[#141012]">
                  {/* Warning Metrics Row */}
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/20 text-center">
                      <div className="text-rose-400 font-bold text-lg font-display">38 / 100</div>
                      <div className="text-[10px] text-zinc-400 mt-0.5">Langsames Theme</div>
                    </div>
                    <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/20 text-center">
                      <div className="text-rose-400 font-bold text-lg font-display">4,2s</div>
                      <div className="text-[10px] text-zinc-400 mt-0.5">Absprungrate 68%</div>
                    </div>
                    <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/20 text-center">
                      <div className="text-rose-400 font-bold text-lg font-display">12 Felder</div>
                      <div className="text-[10px] text-zinc-400 mt-0.5">Formular-Frust</div>
                    </div>
                  </div>

                  {/* Broken Legacy Simulation */}
                  <div className="p-4 rounded-xl bg-black/60 border border-rose-500/20 space-y-3 opacity-75">
                    <div className="text-xs text-rose-300">⚠️ Veraltetes WordPress / Elementor Plugin-Monster</div>
                    <div className="h-3 w-full bg-rose-500/20 rounded animate-pulse"></div>
                    <div className="h-3 w-4/5 bg-rose-500/20 rounded animate-pulse"></div>
                    <p className="text-[11px] text-zinc-400">
                      Cookies-Banner blockiert die halbe Anzeige, Schriften verschoben auf dem iPhone, Telefonnummer als unklickbares Bild eingebunden.
                    </p>
                  </div>

                  {/* Friction Warning */}
                  <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-500/30 text-xs text-rose-300">
                    ❌ Interessenten schließen die Seite nach 3 Sekunden und rufen beim nächsten Betrieb an.
                  </div>
                </div>
              )}

              {/* Bottom Proof Note */}
              <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 text-[11px] text-zinc-400 flex items-center justify-between">
                <span>Festpreis ab 800 € • Kein Kleingedrucktes</span>
                <span className="text-amber-400 font-medium">100% Inhabergeführt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
