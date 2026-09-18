import React from "react";
import { motion } from "motion/react";
import { siteContent } from "../data/content";

export const NotFoundPage: React.FC = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-white text-[#121212] bg-blueprint-grid flex flex-col justify-between p-6 sm:p-12 relative selection:bg-[#121212] selection:text-white">
      {/* Top Bar */}
      <header className="flex items-center justify-between max-w-[1280px] w-full mx-auto pb-6 border-b border-[#121212]/15">
        <div className="flex items-baseline gap-[3px] leading-none select-none">
          <span className="font-display font-black text-[20px] tracking-tight text-[#121212]">
            Hero
          </span>
          <span className="font-sans font-normal text-[18px] text-[#121212]/55 tracking-tight">
            Webdesign
          </span>
        </div>

        <button
          onClick={handleGoHome}
          className="min-h-[44px] px-4 py-2 bg-white hover:bg-[#f8f8f8] border border-[#121212] rounded-[12px] font-mono text-[11.5px] font-bold uppercase tracking-wider text-[#121212] cursor-pointer shadow-xs transition-colors"
        >
          STARTSEITE →
        </button>
      </header>

      {/* Main 404 Dossier */}
      <main className="max-w-[840px] w-full mx-auto my-auto py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[36px] border border-[#121212] bg-white p-8 sm:p-16 shadow-[0_20px_60px_rgba(18,18,18,0.06)] relative overflow-hidden"
        >
          <span className="inline-block border border-[#121212] px-3.5 py-1 rounded-full uppercase bg-[#f8f8f8] font-mono font-bold text-[11px] tracking-wider text-[#121212] mb-6">
            STATUSCODE 404 · NICHT GEFUNDEN
          </span>

          <h1 className="font-display font-extrabold text-[clamp(64px,14vw,140px)] leading-[0.9] text-[#121212] tracking-tight mb-4">
            404
          </h1>

          <h2 className="font-display font-bold text-[24px] sm:text-[32px] uppercase tracking-tight text-[#121212] mb-4">
            Dieser Raum existiert nicht.
          </h2>

          <p className="font-sans text-[16px] sm:text-[18px] text-[#121212]/75 leading-relaxed max-w-lg mx-auto mb-10">
            Die von Ihnen aufgerufene Adresse konnte auf diesem Server nicht gefunden werden. Möglicherweise wurde die Seite verschoben oder die URL fehlerhaft eingegeben.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={handleGoHome}
              className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-[#121212] text-white hover:bg-black rounded-[14px] font-mono text-[12.5px] font-bold uppercase tracking-wider shadow-sm cursor-pointer transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <span>ZURÜCK ZUR STARTSEITE</span>
              <span>→</span>
            </button>

            <a
              href={`tel:${siteContent.meta.phone.replace(/\s+/g, "")}`}
              className="w-full sm:w-auto min-h-[52px] px-6 py-3.5 bg-[#f8f8f8] hover:bg-[#eaeaea] text-[#121212] border border-[#121212]/20 rounded-[14px] font-mono text-[12px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
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
              <span>{siteContent.meta.phone}</span>
            </a>
          </div>
        </motion.div>
      </main>

      {/* Footer Line */}
      <footer className="max-w-[1280px] w-full mx-auto pt-6 border-t border-[#121212]/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#121212]/70">
        <span>HERO WEBDESIGN · ATELIER ROMAN</span>
        <span>LEVERKUSEN · KÖLN · NRW</span>
      </footer>
    </div>
  );
};
