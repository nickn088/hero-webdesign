import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MagneticButton } from "./MagneticButton";
import { siteContent } from "../data/content";

interface LegalModalProps {
  isOpen: boolean;
  type: "impressum" | "datenschutz" | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && type && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-dialog-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
            className="relative w-full max-w-2xl bg-white border border-[#121212] rounded-[28px] p-6 sm:p-10 shadow-2xl z-10 my-8 text-[#121212] max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#121212] font-mono text-xs">
              <span className="font-bold uppercase tracking-wider text-[#121212]">
                RECHTLICHE INFORMATIONEN · HERO WEBDESIGN
              </span>
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-[#121212] flex items-center justify-center hover:bg-[#121212] hover:text-white transition-colors cursor-pointer text-sm font-bold"
                aria-label="Schließen"
              >
                ✕
              </button>
            </div>

            {type === "impressum" ? (
              <div className="space-y-4 text-sm text-[#121212]/85 leading-relaxed font-sans">
                <h3 id="legal-dialog-title" className="font-display font-bold text-2xl uppercase tracking-tight text-[#121212]">
                  {siteContent.legal.impressum.heading}
                </h3>
                <p className="font-mono text-xs text-[#121212]/80 bg-[#f6f6f4] p-4 rounded-xl border border-[#121212]/15">
                  {siteContent.legal.impressum.text}
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-sm text-[#121212]/85 leading-relaxed font-sans">
                <h3 id="legal-dialog-title" className="font-display font-bold text-2xl uppercase tracking-tight text-[#121212]">
                  {siteContent.legal.datenschutz.heading}
                </h3>
                <p className="font-mono text-xs text-[#121212]/80 bg-[#f6f6f4] p-4 rounded-xl border border-[#121212]/15">
                  {siteContent.legal.datenschutz.text}
                </p>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-[#121212]/15 flex justify-end">
              <MagneticButton
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-[#121212] text-white rounded-[12px] font-mono text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors cursor-pointer"
              >
                Schließen
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
