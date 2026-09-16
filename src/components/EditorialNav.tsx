import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const EditorialNav: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 mix-blend-difference pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-white pointer-events-auto">
        {/* Brand */}
        <a href="#" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl md:text-3xl tracking-tight font-medium">Hero</span>
          <span className="text-[10px] tracking-[0.25em] uppercase font-sans text-zinc-400 font-light">Webdesign</span>
        </a>

        {/* Minimal Navigation Center */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.2em] uppercase font-sans text-zinc-300 font-medium">
          <a href="#ethos" className="hover:text-amber-200 transition-colors">Manifest</a>
          <a href="#werke" className="hover:text-amber-200 transition-colors">Meisterstücke</a>
          <a href="#ablauf" className="hover:text-amber-200 transition-colors">Ablauf</a>
          <a href="#atelier" className="hover:text-amber-200 transition-colors">Roman</a>
          <a href="#konditionen" className="hover:text-amber-200 transition-colors">Konditionen</a>
        </nav>

        {/* Right Details */}
        <div className="flex items-center gap-4 text-xs tracking-wider">
          <span className="hidden lg:inline text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-mono">
            LEV · CGN · NRW
          </span>

          <a
            href="#anfrage"
            className="px-4 py-2 rounded-full border border-white/30 hover:border-white text-white text-[11px] uppercase tracking-[0.18em] font-medium flex items-center gap-1.5 transition-all hover:bg-white hover:text-black"
          >
            <span>Analyse</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
