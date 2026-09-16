import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const NAV_ITEMS = [
  { label: "START", id: "hero-start" },
  { label: "WERKE", id: "werke-track" },
  { label: "PREISE", id: "angebot-stack" },
  { label: "ÜBER ROMAN", id: "ueber-roman" },
  { label: "REFERENZEN", id: "referenzen" },
];

export const SovereignNavbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState("START");
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(NAV_ITEMS[i].label);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 pt-4 flex items-center justify-between">
        {/* Left: Brand Monolith mit Original Hero Webdesign Logo */}
        <div className="pointer-events-auto bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-[16px] border border-[#121212]/15 shadow-xs flex items-center">
          <button
            onClick={() => scrollTo("hero-start")}
            className="group flex items-baseline gap-1 select-none cursor-pointer"
            aria-label="Hero Webdesign Startseite"
          >
            <span className="font-extrabold text-[19px] tracking-tight text-[#121212] font-sans">
              Hero
            </span>
            <span className="font-normal text-[19px] tracking-tight text-[#71717a] font-sans">
              Webdesign
            </span>
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

        {/* Right: CTA */}
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollTo("kontakt-final")}
            className="group relative hidden sm:inline-flex items-center gap-2 bg-[#121212] text-white px-5 py-2.5 rounded-[14px] font-mono text-[11.5px] font-bold tracking-wider uppercase border border-[#121212] hover:bg-white hover:text-[#121212] transition-all duration-200 shadow-sm cursor-pointer active:scale-95"
          >
            <span>PROJEKT ANFRAGEN</span>
            <span className="text-[13px] transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 bg-white border border-[#121212] rounded-[14px] text-[#121212] cursor-pointer"
            aria-label="Menü öffnen"
          >
            <span
              className={`block w-5 h-0.5 bg-[#121212] transition-transform ${
                mobileOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#121212] my-1 transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#121212] transition-transform ${
                mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden pointer-events-auto mx-4 mt-2 bg-white border border-[#121212] rounded-[24px] p-4 flex flex-col gap-1 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="text-left px-4 py-3 rounded-[12px] font-mono text-xs uppercase tracking-wider text-[#121212] hover:bg-[#f1f1f1] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("kontakt-final")}
            className="mt-2 text-center py-3 bg-[#121212] text-white rounded-[14px] font-mono text-xs uppercase tracking-wider font-bold"
          >
            PROJEKT ANFRAGEN →
          </button>
        </div>
      )}
    </header>
  );
};
