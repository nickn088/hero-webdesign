import React, { useState } from "react";
import { LegalModal } from "./LegalModal";
import { MagneticButton } from "./MagneticButton";

const NAV_LINKS = [
  { label: "START", href: "#hero-start" },
  { label: "WERKE", href: "#werke-track" },
  { label: "PREISE", href: "#angebot-stack" },
  { label: "ÜBER ROMAN", href: "#ueber-roman" },
  { label: "REFERENZEN", href: "#referenzen" },
  { label: "PROJEKT ANFRAGEN", href: "#kontakt-final" },
];

export const EditorialFooter: React.FC = () => {
  const [legalType, setLegalType] = useState<"impressum" | "datenschutz" | null>(null);

  return (
    <footer className="relative bg-[#f5f5f3] text-[#121212] border-t border-[#121212]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#121212]">
          {/* Col 1 */}
          <div className="md:col-span-5">
            <div className="flex items-center mb-5 select-none">
              <div className="flex items-baseline gap-[3px] leading-none select-none">
                <span className="font-display font-black text-[20px] tracking-tight text-[#121212]">
                  Hero
                </span>
                <span className="font-sans font-normal text-[18px] text-[#121212]/55 tracking-tight">
                  Webdesign
                </span>
              </div>
            </div>
            <p className="font-sans text-sm text-[#121212]/75 max-w-sm leading-relaxed mb-6">
              Kompromisslos performante Websites, Online-Shops und messbare regionale Google-Sichtbarkeit für Handwerk und Mittelstand. Handgeschrieben ohne Theme-Baukasten.
            </p>
            <div className="font-mono text-xs text-[#121212]/60">
              STANDORT LEVERKUSEN · NRW · DEUTSCHLAND
            </div>
          </div>

          {/* Col 2: Nav */}
          <div className="md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#121212]/70 font-bold mb-4">
              NAVIGATION
            </div>
            <div className="flex flex-col gap-1.5 font-mono text-xs">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const lenis = (window as any).lenis;
                    if (lenis) {
                      lenis.scrollTo(link.href, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
                    } else {
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center py-1.5 text-[#121212]/80 hover:text-[#121212] hover:underline transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Line */}
          <div className="md:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#121212]/70 font-bold mb-4">
              DIREKTER KONTAKT
            </div>
            <div className="flex flex-col gap-1.5 font-mono text-xs">
              <a
                href="tel:+4915224196590"
                className="inline-flex items-center py-1.5 text-[#121212] hover:underline font-bold"
              >
                +49 152 24196590 ↗
              </a>
              <a
                href="mailto:info@hero-webdesign.de"
                className="inline-flex items-center py-1.5 text-[#121212] hover:underline font-bold"
              >
                info@hero-webdesign.de ↗
              </a>
              <a
                href="https://wa.me/message/BJMHXSTMT7RBO1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center py-1.5 text-[#121212] hover:underline font-bold"
              >
                WhatsApp
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
            <MagneticButton
              type="button"
              className="py-2 px-1 hover:text-[#121212] underline cursor-pointer"
              onClick={() => setLegalType("impressum")}
            >
              IMPRESSUM
            </MagneticButton>
            <MagneticButton
              type="button"
              className="py-2 px-1 hover:text-[#121212] underline cursor-pointer"
              onClick={() => setLegalType("datenschutz")}
            >
              DATENSCHUTZ
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Accessible Swiss Legal Dialog */}
      <LegalModal
        isOpen={legalType !== null}
        type={legalType}
        onClose={() => setLegalType(null)}
      />
    </footer>
  );
};
