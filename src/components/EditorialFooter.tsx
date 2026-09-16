import React from "react";

const NAV_LINKS = [
  { label: "START", href: "#hero-start" },
  { label: "WERKE", href: "#werke-track" },
  { label: "PREISE", href: "#angebot-stack" },
  { label: "ÜBER ROMAN", href: "#ueber-roman" },
  { label: "REFERENZEN", href: "#referenzen" },
  { label: "PROJEKT ANFRAGEN", href: "#kontakt-final" },
];

export const EditorialFooter: React.FC = () => {
  return (
    <footer className="relative bg-[#f5f5f3] text-[#121212] border-t border-[#121212]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#121212]">
          {/* Col 1 */}
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-1.5 mb-4 select-none">
              <span className="font-extrabold text-[24px] tracking-tight text-[#121212] font-sans">
                Hero
              </span>
              <span className="font-normal text-[24px] tracking-tight text-[#71717a] font-sans">
                Webdesign
              </span>
            </div>
            <p className="font-sans text-[15px] text-[#121212]/70 max-w-sm leading-relaxed mb-6">
              Spezialist für handgeschriebenen High-Speed-Code, 100/100 PageSpeed und
              konversionsstarke Websites für Handwerk, Industrie und Mittelstand.
            </p>
            <div className="font-mono text-xs text-[#121212]/60">
              STANDORT LEVERKUSEN · NRW · DEUTSCHLAND
            </div>
          </div>

          {/* Col 2: Nav */}
          <div className="md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#121212]/50 font-bold mb-4">
              NAVIGATION
            </div>
            <div className="flex flex-col gap-2.5 font-mono text-xs">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#121212]/80 hover:text-[#121212] hover:underline transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Line */}
          <div className="md:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#121212]/50 font-bold mb-4">
              DIREKTER KONTAKT
            </div>
            <div className="flex flex-col gap-3 font-mono text-xs">
              <a
                href="tel:+4915224196590"
                className="text-[#121212] hover:underline font-bold"
              >
                +49 152 24196590 ↗
              </a>
              <a
                href="mailto:info@hero-webdesign.de"
                className="text-[#121212] hover:underline font-bold"
              >
                info@hero-webdesign.de ↗
              </a>
              <a
                href="https://wa.me/message/BJMHXSTMT7RBO1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#121212] hover:underline font-bold"
              >
                WhatsApp Kanal ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#121212]/60">
          <div>
            © {new Date().getFullYear()} ROMAN HERO · HERO WEBDESIGN · ALLE RECHTE VORBEHALTEN
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="hover:text-[#121212] underline cursor-default"
              onClick={(e) => e.preventDefault()}
            >
              IMPRESSUM
            </button>
            <button
              type="button"
              className="hover:text-[#121212] underline cursor-default"
              onClick={(e) => e.preventDefault()}
            >
              DATENSCHUTZ
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
