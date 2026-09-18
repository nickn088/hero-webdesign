import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Check, X } from 'lucide-react';

export const ManifestoScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Words for the scrubbed illumination effect
  const statement =
    "Die meisten Agenturen verkaufen hübsche Bilder. Wir bauen das wirtschaftliche Fundament Ihres Betriebs: Webseiten, die bei Google in Leverkusen und Köln gefunden werden, in 0,3 Sekunden laden und Besucher ohne Umwege in zahlende Kunden verwandeln.";

  const words = statement.split(' ');

  return (
    <section
      id="ethos"
      ref={containerRef}
      className="relative min-h-[140vh] py-32 px-6 md:px-12 bg-gradient-to-b from-[#14110f] via-[#1a2116] to-[#14110f] text-[#f6f1e8] transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto sticky top-28 space-y-16">
        {/* Eyebrow */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#dfbe9b]">
            01 / MANIFEST & POSITIONIERUNG
          </span>
          <span className="text-xs tracking-[0.2em] uppercase text-zinc-400 font-mono">
            LEVERKUSEN · KÖLN · NRW
          </span>
        </div>

        {/* Massive Illuminating Serif Statement */}
        <div className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12] tracking-tight text-zinc-600">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;

            return (
              <WordSpan
                key={i}
                word={word}
                range={[start * 0.7 + 0.1, end * 0.7 + 0.1]}
                progress={scrollYProgress}
              />
            );
          })}
        </div>

        {/* Editorial Sub-Columns: The Radical Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10"
        >
          {/* Legacy Agency Fluff */}
          <div className="p-8 rounded-2xl bg-black/40 border border-white/5 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-rose-400 flex items-center gap-2">
              <X className="w-3.5 h-3.5" />
              <span>Das typische Agentur-Muster</span>
            </span>
            <h3 className="font-serif text-2xl text-zinc-300">
              Monatelange Meetings & Elementor-Baukästen
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              3.500 € bezahlt, 8 Wochen gewartet, und am Ende stürzt das zusammengeklebte WordPress-Theme bei Google ab. Niemand ist erreichbar, wenn ein Fehler auftaucht.
            </p>
          </div>

          {/* The Hero Atelier Standard */}
          <div className="p-8 rounded-2xl bg-[#222a1b]/60 border border-[#dfbe9b]/30 space-y-4 shadow-xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#dfbe9b] flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Der Hero Webdesign Standard</span>
            </span>
            <h3 className="font-serif text-2xl text-white">
              Echter Code, Festpreis & direkter Inhaber-Kontakt
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              Reiner, sauberer Code ohne Plugin-Verschleiß. 90+ Ladezeiten, 1 Ansprechpartner vom ersten Gespräch bis zum Go-Live und schlüsselfertige Übergabe in 2–3 Wochen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface WordSpanProps {
  word: string;
  range: [number, number];
  progress: any;
}

const WordSpan: React.FC<WordSpanProps> = ({ word, range, progress }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const color = useTransform(progress, range, ['#57514a', '#f6f1e8']);

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.28em] transition-colors">
      {word}
    </motion.span>
  );
};
