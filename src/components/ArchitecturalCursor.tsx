import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

export const ArchitecturalCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "drag">("default");
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest("#werke-track")) {
        setCursorType("drag");
      } else if (target.closest('button, a, input, select, textarea, [data-cursor="hover"]')) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    const onMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [visible]);

  if (isTouch || !visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
    >
      {cursorType === "default" && (
        <div className="relative flex items-center justify-center">
          <div className="w-5 h-5 border border-[#121212]/40 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-[1px]">
            <div className="w-1.5 h-1.5 bg-[#121212] rounded-full" />
          </div>
        </div>
      )}

      {cursorType === "hover" && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-12 h-12 rounded-full border-2 border-[#121212] bg-[#121212]/10 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="w-2 h-2 bg-[#121212] rounded-full" />
        </motion.div>
      )}

      {cursorType === "drag" && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white text-[#121212] border border-[#121212] px-4 py-1.5 rounded-full font-mono text-[11px] font-bold tracking-widest shadow-xl flex items-center gap-2 select-none"
        >
          <span>←</span>
          <span>HORIZONTAL SCROLLEN</span>
          <span>→</span>
        </motion.div>
      )}
    </div>
  );
};
