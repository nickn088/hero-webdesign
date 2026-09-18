import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { MagneticButton } from "./MagneticButton";
import { siteContent } from "../data/content";

const NAV_ITEMS = [
  { label: "START", num: "01", id: "hero-start" },
  { label: "WERKE", num: "02", id: "werke-track" },
  { label: "PREISE", num: "03", id: "angebot-stack" },
  { label: "ÜBER ROMAN", num: "04", id: "ueber-roman" },
  { label: "REFERENZEN", num: "05", id: "referenzen" },
];

const TRACKED_SECTIONS = [
  ...NAV_ITEMS,
  { label: "KONTAKT", num: "06", id: "kontakt-final" },
];

export const SovereignNavbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState("START");
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    let hasMounted = false;
    const mountTimer = setTimeout(() => {
      hasMounted = true;
    }, 200);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (let i = TRACKED_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(TRACKED_SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          if (NAV_ITEMS.some((n) => n.label === TRACKED_SECTIONS[i].label)) {
            setActiveTab(TRACKED_SECTIONS[i].label);
          }
          if (hasMounted) {
            try {
              sessionStorage.setItem("hero_webdesign_active_section", TRACKED_SECTIONS[i].id);
            } catch {
              // ignore
            }
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(mountTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const lenis = (window as any).lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(`#${id}`, { duration: 1.2 });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 pt-4 flex items-center justify-between">
          {/* Left: Souveränes Architektonisches Logo */}
          <div className="pointer-events-auto bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-[18px] border border-[#121212]/15 shadow-xs flex items-center transition-transform hover:scale-[1.02]">
            <button
              onClick={() => scrollTo("hero-start")}
              className="group flex items-center select-none cursor-pointer py-1"
              aria-label="Hero Webdesign Startseite"
            >
              <div className="flex items-baseline gap-[3px] leading-none select-none">
                <span className="font-display font-black text-[19px] tracking-tight text-[#121212]">
                  Hero
                </span>
                <span className="font-sans font-normal text-[17px] text-[#121212]/55 tracking-tight">
                  Webdesign
                </span>
              </div>
            </button>
          </div>

          {/* Center: Floating Pill Navigation */}
          <nav
            className="pointer-events-auto fixed left-1/2 -translate-x-1/2 top-4 hidden lg:flex items-center bg-white/95 backdrop-blur-md border border-[#121212] rounded-[40px] px-2 py-1.5 z-50 shadow-sm"
            aria-label="Hauptnavigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.label;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    setActiveTab(item.label);
                    scrollTo(item.id);
                  }}
                  className="relative text-[11.5px] font-mono font-medium px-4 py-1.5 rounded-[28px] transition-colors cursor-pointer text-[#121212]"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPillTab"
                      className="absolute inset-0 bg-[#f1f1f1] rounded-[28px] -z-10 border border-[#121212]/20"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 450, damping: 35 }
                      }
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Desktop CTA & Mobile Toggle */}
          <div className="pointer-events-auto flex items-center gap-3">
            <MagneticButton
              type="button"
              data-cursor="hover"
              onClick={() => scrollTo("kontakt-final")}
              className="group relative hidden sm:inline-flex items-center gap-2 bg-[#121212] text-white px-5 py-2.5 rounded-[14px] font-mono text-[11.5px] font-bold tracking-wider uppercase border border-[#121212] hover:bg-white hover:text-[#121212] transition-colors duration-200 shadow-sm cursor-pointer"
            >
              <span>PROJEKT ANFRAGEN</span>
              <span className="text-[13px] transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </MagneticButton>

            {/* Mobile Menu Toggle Button */}
            <motion.button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={reduce ? {} : { scale: 0.92 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="lg:hidden pointer-events-auto min-w-[44px] min-h-[44px] p-2.5 bg-white border border-[#121212] rounded-[14px] text-[#121212] cursor-pointer flex flex-col items-center justify-center relative z-[70] shadow-xs"
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            >
              <span
                className={`block w-5 h-0.5 bg-[#121212] transition-transform duration-300 ${
                  mobileOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#121212] my-1 transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#121212] transition-transform duration-300 ${
                  mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </motion.button>
          </div>
        </div>
      </header>

      {/* High-End Editorial Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
            className="fixed inset-0 bg-white/98 backdrop-blur-2xl z-[100] flex flex-col justify-between p-6 sm:p-10 pt-6 pb-8 overflow-y-auto pointer-events-auto"
          >
            {/* Top Bar inside Drawer with explicit [ ✕ SCHLIESSEN ] Button */}
            <div className="flex items-center justify-between pb-5 border-b border-[#121212]/15 mb-4">
              <div className="flex items-baseline gap-[3px] leading-none select-none">
                <span className="font-display font-black text-[20px] tracking-tight text-[#121212]">
                  Hero
                </span>
                <span className="font-sans font-normal text-[18px] text-[#121212]/55 tracking-tight">
                  Webdesign
                </span>
              </div>

              {/* Explicit, tactile Close Button */}
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] px-3.5 py-2 bg-[#121212] text-white rounded-[12px] font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-xs active:scale-95 transition-transform"
                aria-label="Menü schließen"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <span>SCHLIESSEN</span>
              </button>
            </div>

            {/* Navigation Link List */}
            <div className="flex flex-col gap-1.5 py-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#121212]/70 font-bold mb-2">
                NAVIGATION
              </span>
              {NAV_ITEMS.map((item, idx) => (
                <motion.button
                  key={item.label}
                  initial={reduce ? false : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + idx * 0.05, duration: 0.3 }}
                  onClick={() => scrollTo(item.id)}
                  className="text-left py-3 border-b border-[#121212]/10 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-[#121212]/40 font-bold">
                      {item.num}
                    </span>
                    <span className="font-display font-extrabold text-[26px] sm:text-[30px] text-[#121212] uppercase tracking-tight group-hover:translate-x-1.5 transition-transform duration-200">
                      {item.label}
                    </span>
                  </div>
                  <span className="font-mono text-sm text-[#121212]/40 group-hover:text-[#121212] group-hover:translate-x-1 transition-all duration-200">
                    →
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Bottom Panel: Direct Contact & Action */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.35 }}
              className="pt-6 border-t border-[#121212] space-y-3.5"
            >
              {/* Primary CTA */}
              <button
                onClick={() => scrollTo("kontakt-final")}
                className="w-full min-h-[52px] flex items-center justify-center gap-2 bg-[#121212] text-white rounded-[16px] font-mono text-[13px] font-bold uppercase tracking-wider shadow-md active:scale-[0.98] transition-transform cursor-pointer"
              >
                <span>PROJEKT STARTEN</span>
                <span>→</span>
              </button>

              {/* Direct WhatsApp & Phone Contact */}
              <div className="grid grid-cols-2 gap-3 font-mono text-[11px]">
                <a
                  href={siteContent.meta.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-[12px] bg-[#f5f5f5] text-[#121212] border border-[#121212]/15 font-bold hover:bg-[#e9e9e9] transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href={`tel:${siteContent.meta.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-[12px] bg-[#f5f5f5] text-[#121212] border border-[#121212]/15 font-bold hover:bg-[#e9e9e9] transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Anrufen</span>
                </a>
              </div>

              {/* Regional Footnote */}
              <div className="font-mono text-[10px] text-center text-[#121212]/70 tracking-wider font-medium">
                LEVERKUSEN · KÖLN · NRW · ANTWORT IN 24H
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
