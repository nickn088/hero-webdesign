import React from 'react';
import { Zap, Search, ShieldCheck, Check, X, ArrowUpRight } from 'lucide-react';

interface AuthorityCardProps {
  number: string;
  category: string;
  headline: string;
  description: string;
  accentColor: string;
  borderColor: string;
  tagColor: string;
  icon: React.ReactNode;
  comparisonTitle: string;
  pros: string[];
  cons: string[];
  stickyTop: string;
}

const cardsData: AuthorityCardProps[] = [
  {
    number: '01',
    category: 'CODE STATT BAUKASTEN',
    headline: '0,3 Sekunden Ladezeit. Null Plugin-Ballast.',
    description:
      'Die meisten Agenturen kleben ein 80-Dollar-WordPress-Theme mit 20 Plugins zusammen. Bei Google fällt das durch jeden Geschwindigkeitstest. Wir programmieren reinen, handgeschriebenen React-Code. Blitzschnell, sicher und unzerstörbar.',
    accentColor: 'from-cyan-500/10 to-transparent',
    borderColor: 'border-cyan-500/30',
    tagColor: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30',
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    comparisonTitle: 'Der technische Unterschied',
    pros: [
      '90+ Google PageSpeed Score',
      '0,3s reale Ladezeit auf dem Smartphone',
      'DSGVO-konform ohne US-Cloudflare-Leck',
      'Keine monatlichen Plugin-Lizenzkosten',
    ],
    cons: [
      'Veraltetes WordPress / Elementor',
      '4–6 Sekunden Ladefrust für Kunden',
      'Sicherheitslücken durch Drittanbieter',
      'Laufende Abstürze nach Plugin-Updates',
    ],
    stickyTop: 'top-24',
  },
  {
    number: '02',
    category: 'GOOGLE-DOMINANZ NRW',
    headline: 'Regionale Sichtbarkeit in Leverkusen & Köln.',
    description:
      'Eine Website, die niemand findet, ist nutzlos. Wir optimieren die Struktur Ihres Betriebs gezielt für Suchbegriffe in Leverkusen, Köln und NRW. Saubere semantische HTML5-Architektur, damit Google Ihren Betrieb als Marktführer einstuft.',
    accentColor: 'from-emerald-500/10 to-transparent',
    borderColor: 'border-emerald-500/30',
    tagColor: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30',
    icon: <Search className="w-6 h-6 text-emerald-400" />,
    comparisonTitle: 'Der Sichtbarkeits-Faktor',
    pros: [
      'Top-3-Platzierungen bei Google & Google Maps',
      'Strukturierte Schema-Daten für Handwerk & Praxen',
      'Sofortige Anruf-Knöpfe für Mobilnutzer',
      'Echte zahlende Kunden statt Streuverlust',
    ],
    cons: [
      'Unsichtbar auf Seite 3 bei Google',
      'Keine mobile Suchmaschinen-Optimierung',
      'Fehlende lokale Standort-Architektur',
      'Wettbewerber holen alle Aufträge ab',
    ],
    stickyTop: 'top-28',
  },
  {
    number: '03',
    category: 'FESTPREIS & INHABER-BETREUUNG',
    headline: 'Verbindliche Festpreise. Schlüsselfertig in 2–3 Wochen.',
    description:
      'Große Agenturen verrechnen jede Minute und lassen Junioren an Ihrem Projekt üben. Bei Hero Webdesign sprechen Sie direkt mit Inhaber Roman. Ein verbindlicher Festpreis, kein Kleingedrucktes, garantierte Fertigstellung.',
    accentColor: 'from-white/10 to-transparent',
    borderColor: 'border-white/20',
    tagColor: 'text-white bg-white/10 border-white/20',
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    comparisonTitle: 'Zusammenarbeit auf Augenhöhe',
    pros: [
      'Festpreis ab 800 € ohne Überraschungen',
      '1 direkter Ansprechpartner (Roman)',
      'Live-Launch in 2–3 Wochen garantiert',
      '100% Inhabergeführt & greifbar in NRW',
    ],
    cons: [
      '3.500 €+ Agenturaufschlag für Overhead',
      'Wochenlanges Warten auf Rückmeldungen',
      'Wechselnde Praktikanten als Betreuer',
      'Monatelange Verzögerungen beim Go-Live',
    ],
    stickyTop: 'top-32',
  },
];

export const StackingAuthority: React.FC = () => {
  return (
    <section id="vision" className="py-32 px-6 md:px-12 bg-[#050508] text-white relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-400">
            <span>// 01 ARCHITEKTUR & STANDARDS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase">
            WARUM BETRIEBE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
              UNS WÄHLEN.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Drei fundamentale Säulen, die Hero Webdesign vom typischen Agentur-Dschungel unterscheiden.
          </p>
        </div>

        {/* The Stacking Cards Deck (Apple / Linear style) */}
        <div className="relative space-y-12 pb-16">
          {cardsData.map((card) => {
            return (
              <div
                key={card.number}
                className={`sticky ${card.stickyTop} rounded-3xl bg-[#090b12] border ${card.borderColor} p-8 sm:p-12 shadow-2xl transition-all duration-300 backdrop-blur-2xl bg-gradient-to-br ${card.accentColor}`}
                style={{
                  boxShadow: `0 30px 60px -15px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255,255,255,0.06)`,
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column (7 Cols): The Thesis */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className={`px-3 py-1 rounded-full border text-[10px] font-mono font-bold tracking-wider ${card.tagColor}`}>
                        {card.number} // {card.category}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        {card.icon}
                      </div>
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                      {card.headline}
                    </h3>

                    <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                      {card.description}
                    </p>

                    <div className="pt-2">
                      <a
                        href="#anfrage"
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 hover:text-white transition-colors"
                      >
                        <span>Projekt besprechen</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column (5 Cols): The Hard Reality Contrast */}
                  <div className="lg:col-span-5 rounded-2xl bg-black/60 border border-white/10 p-6 space-y-5">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block border-b border-white/10 pb-3">
                      {card.comparisonTitle}
                    </span>

                    {/* Pro points */}
                    <div className="space-y-2.5">
                      {card.pros.map((pro, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs text-zinc-200">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </div>
                      ))}
                    </div>

                    {/* Con points */}
                    <div className="space-y-2.5 pt-3 border-t border-white/10">
                      {card.cons.map((con, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-xs text-zinc-500">
                          <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                          <span className="line-through">{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
