import React from "react";
import { motion } from "motion/react";
import { siteContent } from "../data/content";
import { MagneticButton } from "./MagneticButton";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const STACK_CONFIG = [
  { top: "100px", zIndex: 10, rot: "-rotate-1", bg: "bg-white" },
  { top: "135px", zIndex: 20, rot: "rotate-[0.6deg]", bg: "bg-[#f6f6f4]" },
  { top: "170px", zIndex: 30, rot: "-rotate-[0.5deg]", bg: "bg-white" },
  { top: "205px", zIndex: 40, rot: "rotate-[0.7deg]", bg: "bg-[#f8f8f8]" },
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
        <div className="relative pb-32">
          {siteContent.packages.map((pkg, i) => {
            const config = STACK_CONFIG[i] || { top: "100px", zIndex: 10, rot: "", bg: "bg-white" };

            return (
              <div
                key={pkg.id}
                style={{
                  position: "sticky",
                  top: config.top,
                  zIndex: config.zIndex,
                }}
                className={`w-full rounded-[32px] border border-[#121212] p-8 md:p-14 mb-24 md:mb-32 shadow-[0_-8px_32px_rgba(0,0,0,0.08)] transition-transform duration-300 ${config.rot} ${config.bg}`}
              >
                {/* Header Bar */}
                <div className="flex justify-end items-center pb-4 border-b border-[#121212] mb-8 font-mono text-[13px] sm:text-[14px]">
                  <span className="border border-[#121212] px-3.5 py-1 rounded-full uppercase bg-white font-semibold text-[11px] sm:text-[12px]">
                    {pkg.subtitle}
                  </span>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-8">
                    <h3 className="text-[28px] sm:text-[38px] md:text-[44px] font-extrabold uppercase tracking-tight mb-4 leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-[16px] sm:text-[18px] text-[#121212]/80 leading-relaxed max-w-2xl mb-8 font-sans">
                      {pkg.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-[#121212]">
                      {pkg.features.map((feature, fi) => (
                        <div key={fi} className="flex items-start gap-2.5 font-mono text-[12px] sm:text-[13px] text-[#121212]/80 group">
                          <motion.span
                            whileHover={{ scale: 1.3, rotate: 12 }}
                            transition={{ type: "spring", stiffness: 450, damping: 22 }}
                            className="font-bold text-[#121212] select-none inline-block cursor-default"
                          >
                            ✓
                          </motion.span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA Box */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    className="lg:col-span-4 bg-white border border-[#121212] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-shadow duration-300 hover:shadow-lg"
                  >
                    <div>
                      <span className="block font-mono text-[11px] text-[#121212]/60 uppercase mb-2 font-bold">
                        VERBINDLICHER FESTPREIS
                      </span>
                      <div className="font-display font-extrabold text-[42px] sm:text-[48px] leading-none text-[#121212] tracking-tight mb-2">
                        {pkg.price}
                      </div>
                      <span className="font-mono text-[11px] text-[#121212]/60 block mb-6">
                        {pkg.deliveryTime}
                      </span>
                    </div>

                    <MagneticButton
                      type="button"
                      data-cursor="hover"
                      onClick={() => scrollToContact(pkg.id)}
                      className="w-full min-h-[48px] py-3.5 bg-[#121212] text-white hover:bg-white hover:text-[#121212] border border-[#121212] rounded-[14px] font-mono text-[12px] font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer text-center flex items-center justify-center gap-2 group"
                    >
                      <span>DIESES PAKET ANFRAGEN</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </MagneticButton>
                  </motion.div>
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
          className="mt-12 rounded-[28px] bg-[#121212] text-white p-7 sm:p-10 md:p-12 shadow-xl border border-[#121212]"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-2.5 max-w-2xl">
              <h3 className="font-display font-extrabold text-[26px] sm:text-[34px] tracking-tight text-white leading-tight">
                {siteContent.ctaBanner.headline}
              </h3>
              <p className="font-sans text-[15px] sm:text-[16px] text-white/75 leading-relaxed">
                {siteContent.ctaBanner.text}
              </p>
            </div>

            <div className="shrink-0 flex items-center">
              <MagneticButton
                type="button"
                data-cursor="hover"
                onClick={() => scrollToContact()}
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-white text-[#121212] hover:bg-[#f5f5f3] rounded-full font-mono text-[13px] sm:text-[14px] font-bold tracking-tight flex items-center justify-center gap-2 shadow-md cursor-pointer transition-transform active:scale-95"
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
