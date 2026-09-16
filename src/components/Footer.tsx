import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { siteContent } from '../data/content';

export const Footer: React.FC = () => {
  const serviceAreas = [
    'Leverkusen',
    'Köln',
    'Düsseldorf',
    'Bergisch Gladbach',
    'Langenfeld',
    'Monheim am Rhein',
    'Solingen',
    'Nordrhein-Westfalen',
  ];

  return (
    <footer className="bg-[#070709] border-t border-white/10 text-zinc-400 text-xs pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand & Bio (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="font-display font-bold text-xl text-white">
              Hero<span className="text-zinc-400 font-normal italic"> Webdesign</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Websites, Online-Shops und Google-Sichtbarkeit zum garantierten Festpreis für Betriebe in Leverkusen, Köln und ganz NRW.
            </p>
            <div className="flex items-center gap-2 text-zinc-300 text-xs">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>51379 Leverkusen · NRW</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Leistungen
            </div>
            <ul className="space-y-2">
              <li><a href="#leistungen" className="hover:text-white transition-colors">Landingpages (800 €)</a></li>
              <li><a href="#leistungen" className="hover:text-white transition-colors">Business-Webseite (1.500 €)</a></li>
              <li><a href="#leistungen" className="hover:text-white transition-colors">Online-Shop (ab 3.000 €)</a></li>
              <li><a href="#leistungen" className="hover:text-white transition-colors">Google Sichtbarkeit (690 €)</a></li>
            </ul>
          </div>

          {/* Col 3: Referenzen & Über uns (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Navigation
            </div>
            <ul className="space-y-2">
              <li><a href="#referenzen" className="hover:text-white transition-colors">Echte Kunden-Referenzen</a></li>
              <li><a href="#ablauf" className="hover:text-white transition-colors">Ablauf in 4 Schritten</a></li>
              <li><a href="#ueber" className="hover:text-white transition-colors">Über Gründer Roman</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Häufige Fragen</a></li>
            </ul>
          </div>

          {/* Col 4: Direkter Kontakt & Notfall (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Direkter Kontakt
            </div>
            <p className="text-zinc-400 text-xs">
              Persönliche Beratung ohne Stille Post:
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${siteContent.meta.phone}`}
                className="flex items-center gap-2.5 text-zinc-200 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{siteContent.meta.phoneDisplay}</span>
              </a>
              <a
                href={siteContent.meta.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Direkt-Nachricht</span>
              </a>
              <a
                href={`mailto:${siteContent.meta.email}`}
                className="flex items-center gap-2.5 text-zinc-200 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>{siteContent.meta.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Regional Service Areas */}
        <div className="pt-8 border-t border-white/5">
          <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-3">
            Regionale Einzugsgebiete:
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-zinc-400">
            {serviceAreas.map((city, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Hero Webdesign · Inh. Roman</span>
            <a href="/impressum/" className="hover:text-zinc-300 transition-colors">Impressum</a>
            <a href="/datenschutz/" className="hover:text-zinc-300 transition-colors">Datenschutz</a>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100 % DSGVO-konform · Schriften & Assets lokal gehostet</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
