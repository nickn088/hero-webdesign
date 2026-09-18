import React from "react";
import { motion } from "motion/react";
import { siteContent } from "../data/content";
import { MagneticButton } from "./MagneticButton";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const STACK_CONFIG = [
  { topClass: "top-[72px] md:top-[100px]", zIndex: 10, rot: "-rotate-1", bg: "bg-white" },
  { topClass: "top-[94px] md:top-[135px]", zIndex: 20, rot: "rotate-[0.6deg]", bg: "bg-[#f6f6f4]" },
  { topClass: "top-[116px] md:top-[170px]", zIndex: 30, rot: "-rotate-[0.5deg]", bg: "bg-white" },
  { topClass: "top-[138px] md:top-[205px]", zIndex: 40, rot: "rotate-[0.7deg]", bg: "bg-[#f8f8f8]" },
];

export const BespokePricing: React.FC = () => {
  const scrollToContact = (pkgId?: string) => {
    if (pkgId && typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-package", { detail: { id: pkgId } })
      );
    }
    const lenis = (window as any).lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo("#kontakt-final", { duration: 1.2 });
    } else {
      document.getElementById("kontakt-final")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="angebot-stack" className="relative py-32 px-6 md:px-12 bg-white text-[#121212] border-t border-[#121212]">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header — clip-path reveal */}
        <div className="text-center mb-24 overflow-hidden">
          <motion.h2
            initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease }}
            className="font-display font-extrabold text-[clamp(36px,5.5vw,72px)] uppercase tracking-tight text-[#121212] leading-[1.0] mb-4"
          >
            Festpreise ohne Kleingedrucktes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="text-[17px] md:text-[19px] text-[#121212]/70 max-w-xl mx-auto font-sans leading-relaxed"
          >
            Was im Angebot steht, das zahlen Sie. Kein Stundenzettel. Keine Nachforderungen. Die Leistungen legen sich beim Scrollen übereinander.
          </motion.p>
        </div>

        {/* Stacking Cards */}
        <div className="relative pb-16 md:pb-32">
          {siteContent.packages.map((pkg, i) => {
            const config = STACK_CONFIG[i] || { topClass: "top-[72px] md:top-[100px]", zIndex: 10, rot: "", bg: "bg-white" };

            return (
              <div
                key={pkg.id}
                style={{
                  zIndex: config.zIndex,
                }}
                className={`w-full rounded-[22px] sm:rounded-[32px] border border-[#121212] p-4 sm:p-7 md:p-12 mb-8 sm:mb-12 md:mb-32 shadow-[0_-8px_32px_rgba(0,0,0,0.08)] transition-transform duration-300 sticky ${config.topClass} ${config.rot} ${config.bg}`}
              >
                {/* Header Bar */}
                <div className="flex justify-between items-center pb-2.5 sm:pb-3 border-b border-[#121212] mb-4 sm:mb-6 font-mono text-[11px] sm:text-[13px]">
                  <span className="font-bold text-[#121212]/60">PAKET {pkg.number}</span>
                  <span className="border border-[#121212] px-2 sm:px-3 py-0.5 rounded-full uppercase bg-white font-semibold text-[9.5px] sm:text-[11px]">
                    {pkg.subtitle}
                  </span>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-12 items-start">
                  <div className="lg:col-span-8">
                    <h3 className="text-[20px] sm:text-[28px] md:text-[40px] font-extrabold uppercase tracking-tight mb-1.5 sm:mb-3 leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-[13.5px] sm:text-[15px] md:text-[17px] text-[#121212]/80 leading-relaxed max-w-2xl mb-3 sm:mb-6 font-sans">
                      {pkg.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2.5 pt-3 sm:pt-5 border-t border-[#121212]/20">
                      {pkg.features.map((feature, fi) => (
                        <div key={fi} className="flex items-start gap-1.5 font-mono text-[10.5px] sm:text-[12px] text-[#121212]/80">
                          <span className="font-bold text-[#121212] select-none shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span className="leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA Box */}
                  <div className="lg:col-span-4 bg-white border border-[#121212] rounded-[16px] sm:rounded-[22px] p-3.5 sm:p-5 md:p-7 flex flex-row lg:flex-col justify-between items-center lg:items-stretch gap-3 shadow-xs">
                    <div>
                      <span className="block font-mono text-[9px] sm:text-[10px] text-[#121212]/60 uppercase mb-0.5 font-bold">
                        VERBINDLICHER FESTPREIS
                      </span>
                      <div className="font-display font-extrabold text-[24px] sm:text-[34px] md:text-[44px] leading-none text-[#121212] tracking-tight">
                        {pkg.price}
                      </div>
                      <span className="font-mono text-[9.5px] sm:text-[11px] text-[#121212]/60 block mt-0.5">
                        {pkg.deliveryTime}
                      </span>
                    </div>

                    <MagneticButton
                      type="button"
                      data-cursor="hover"
                      onClick={() => scrollToContact(pkg.id)}
                      className="shrink-0 sm:w-auto lg:w-full min-h-[40px] sm:min-h-[46px] px-3.5 sm:px-5 py-2 sm:py-3 bg-[#121212] text-white hover:bg-white hover:text-[#121212] border border-[#121212] rounded-[10px] sm:rounded-[14px] font-mono text-[10.5px] sm:text-[12px] font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer text-center flex items-center justify-center gap-1.5 group"
                    >
                      <span>PAKET WÄHLEN</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Roman's Authentischer Original-CTA Banner (Photo 2 Asset) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="mt-6 sm:mt-12 rounded-[22px] sm:rounded-[28px] bg-[#121212] text-white p-5 sm:p-8 md:p-12 shadow-xl border border-[#121212]"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-8">
            <div className="space-y-2 max-w-2xl">
              <h3 className="font-display font-extrabold text-[22px] sm:text-[30px] md:text-[34px] tracking-tight text-white leading-tight">
                {siteContent.ctaBanner.headline}
              </h3>
              <p className="font-sans text-[14px] sm:text-[16px] text-white/75 leading-relaxed">
                {siteContent.ctaBanner.text}
              </p>
            </div>

            <div className="shrink-0 flex items-center">
              <MagneticButton
                type="button"
                data-cursor="hover"
                onClick={() => scrollToContact("analyse")}
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-4 bg-white text-[#121212] hover:bg-[#f5f5f3] rounded-full font-mono text-[12px] sm:text-[14px] font-bold tracking-tight flex items-center justify-center gap-2 shadow-md cursor-pointer transition-transform active:scale-95"
              >
                <span>{siteContent.ctaBanner.buttonText}</span>
                <span className="font-bold">→</span>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
