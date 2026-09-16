import React, { useState } from 'react';
import { Gauge, Zap, PhoneCall, Terminal } from 'lucide-react';

export const PerformanceEngine: React.FC = () => {
  const [level, setLevel] = useState<number>(100);

  // Dynamic values based on slider level
  const speed = (4.8 - (level / 100) * 4.5).toFixed(1); // 4.8s down to 0.3s
  const score = Math.round(28 + (level / 100) * 72); // 28 up to 100
  const bounceRate = Math.round(76 - (level / 100) * 58); // 76% down to 18%

  return (
    <section className="py-32 px-6 md:px-12 bg-[#050508] text-white border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-400">
            <span>// 04 SYSTEM-BENCHMARK</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white leading-tight uppercase">
            ECHTZEIT-SIMULATION: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
              CODE VS. BAUKASTEN.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Bewegen Sie den Schieberegler, um live zu erleben, wie sich Ladezeit, Google-Ranking und die Geduld Ihrer Kunden dramatisch verändern.
          </p>
        </div>

        {/* Interactive Benchmark Terminal Console */}
        <div className="rounded-3xl bg-[#080b13] border border-white/15 p-8 sm:p-12 shadow-2xl space-y-10">
          {/* Interactive Dial Slider */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-400">
              <span className="text-rose-400 font-semibold">01 // Veralteter Baukasten</span>
              <span className="text-cyan-400 font-bold hidden sm:inline">INTERAKTIVER KONTRAST-REGLER</span>
              <span className="text-emerald-400 font-bold">100 // Hero Code-Standard</span>
            </div>

            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={level}
                onChange={(e) => setLevel(Number(e.target.value))}
                className="w-full h-3 bg-black/80 rounded-full appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 h-1 bg-cyan-400 rounded-full pointer-events-none"
                style={{ width: `${level}%` }}
              />
            </div>
          </div>

          {/* Real-time Dynamic Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Metric 1: PageSpeed */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Google PageSpeed
                </span>
                <Gauge
                  className={`w-5 h-5 ${
                    score >= 90 ? 'text-emerald-400' : score >= 50 ? 'text-amber-400' : 'text-rose-500'
                  }`}
                />
              </div>
              <div
                className={`font-display text-5xl sm:text-6xl font-extrabold transition-colors duration-200 ${
                  score >= 90 ? 'text-emerald-400' : score >= 50 ? 'text-amber-400' : 'text-rose-500'
                }`}
              >
                {score} <span className="text-xl font-mono text-zinc-500 font-normal">/ 100</span>
              </div>
              <div className="text-[11px] text-zinc-400 font-mono">
                {score >= 90 ? '✓ Maximale Google-Autorität' : '✕ Google straft die Seite ab'}
              </div>
            </div>

            {/* Metric 2: Load Time */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Reale Ladezeit (FCP)
                </span>
                <Zap
                  className={`w-5 h-5 ${
                    Number(speed) <= 1 ? 'text-emerald-400' : Number(speed) <= 2.5 ? 'text-amber-400' : 'text-rose-500'
                  }`}
                />
              </div>
              <div
                className={`font-display text-5xl sm:text-6xl font-extrabold transition-colors duration-200 ${
                  Number(speed) <= 1 ? 'text-emerald-400' : Number(speed) <= 2.5 ? 'text-amber-400' : 'text-rose-500'
                }`}
              >
                {speed}s
              </div>
              <div className="text-[11px] text-zinc-400 font-mono">
                {Number(speed) <= 1 ? '✓ Wimpernschlag (Sofort da)' : '✕ Besucher springen genervt ab'}
              </div>
            </div>

            {/* Metric 3: Bounce Rate */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Verlustquote
                </span>
                <PhoneCall
                  className={`w-5 h-5 ${
                    bounceRate <= 25 ? 'text-emerald-400' : 'text-zinc-500'
                  }`}
                />
              </div>
              <div
                className={`font-display text-5xl sm:text-6xl font-extrabold transition-colors duration-200 ${
                  bounceRate <= 25 ? 'text-emerald-400' : bounceRate <= 50 ? 'text-amber-400' : 'text-rose-500'
                }`}
              >
                {bounceRate}%
              </div>
              <div className="text-[11px] text-zinc-400 font-mono">
                {bounceRate <= 25 ? '✓ Hohe Telefonkontakt-Rate' : '✕ Verlust an den Wettbewerber'}
              </div>
            </div>
          </div>

          {/* Terminal Diagnostics Preview */}
          <div className="p-6 rounded-2xl bg-black/80 border border-white/10 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>DIAGNOSE: {level >= 80 ? 'HERO CODE ARCHITEKTUR' : level >= 40 ? 'DURCHSCHNITT' : 'KRITISCHER PERFORMANCE-VERLUST'}</span>
              </div>
              <span className={`font-bold ${level >= 80 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {level >= 80 ? '✓ 100 % ZERO-BLOAT' : '⚠️ UNNÖTIGE PLUGINS'}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
              {level >= 80
                ? 'Schlanker, maßgeschneiderter React-Code ohne Ballast. Schriften lokal geladen, kein US-CDN-Leck, 1-Daumen-Bedienung auf dem Smartphone und blitzschnelle Verbindung zu Ihrem Telefon.'
                : 'Schwere CSS-Bibliotheken, veraltete WordPress-Themes und 14 ungenutzte Plugins blockieren den Haupt-Thread. Der Kunde bricht nach 3 Sekunden Wartezeit ab.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
