import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/content';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-[#0e0e12]/90 backdrop-blur-md border border-white/10 shadow-2xl py-3 px-5 sm:px-6'
            : 'bg-transparent py-4 px-4 sm:px-6 border border-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Live Status */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-white">
                Hero<span className="text-zinc-400 font-normal italic group-hover:text-amber-400 transition-colors"> Webdesign</span>
              </span>
            </a>
            
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>1 Slot frei</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
            <a href="#leistungen" className="hover:text-white transition-colors">Leistungen</a>
            <a href="#referenzen" className="hover:text-white transition-colors">Referenzen</a>
            <a href="#ablauf" className="hover:text-white transition-colors">Ablauf</a>
            <a href="#ueber" className="hover:text-white transition-colors">Über Roman</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          {/* Direct CTA Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${siteContent.meta.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              aria-label="Direkt anrufen"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{siteContent.meta.phoneDisplay}</span>
            </a>

            <a
              href="#anfrage"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-950 bg-white hover:bg-amber-400 transition-all shadow-md hover:shadow-amber-400/20 active:scale-[0.98]"
            >
              <span>Kostenlose Analyse</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Menü umschalten"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-6 rounded-2xl bg-[#0e0e12] border border-white/10 shadow-2xl space-y-5 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-zinc-200">
            <a
              href="#leistungen"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors py-1"
            >
              Leistungen & Festpreise
            </a>
            <a
              href="#referenzen"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors py-1"
            >
              Kunden-Referenzen
            </a>
            <a
              href="#ablauf"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors py-1"
            >
              Ablauf (4 Schritte)
            </a>
            <a
              href="#ueber"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors py-1"
            >
              Über Roman
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors py-1"
            >
              Häufige Fragen
            </a>
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#anfrage"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg"
            >
              <span>Kostenlose Potenzial-Analyse</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={`tel:${siteContent.meta.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium text-zinc-300 bg-white/5 border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Anrufen</span>
              </a>
              <a
                href={siteContent.meta.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/20"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
