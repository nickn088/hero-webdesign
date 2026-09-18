import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

export const ArchitecturalCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "drag">("default");
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('button, a, input, select, textarea, [data-cursor="hover"]')) {
        setCursorType((prev) => (prev !== "hover" ? "hover" : prev));
      } else if (target.closest("#werke-track")) {
        setCursorType((prev) => (prev !== "drag" ? "drag" : prev));
      } else {
        setCursorType((prev) => (prev !== "default" ? "default" : prev));
      }
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [visible]);

  if (isTouch || !visible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[999] will-change-transform"
      style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
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
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="w-12 h-12 rounded-full border-2 border-[#121212] bg-[#121212]/10 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="w-2 h-2 bg-[#121212] rounded-full" />
        </motion.div>
      )}

      {cursorType === "drag" && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
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
