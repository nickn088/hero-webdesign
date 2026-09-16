import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const cursorX = useSpring(0, { stiffness: 450, damping: 35, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 450, damping: 35, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('[data-cursor]');
      if (interactive) {
        const text = interactive.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else if (target.closest('button, a, input, select, textarea')) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null; // Disable on touch devices
  }

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className={`fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center rounded-full transition-all duration-300 mix-blend-difference ${
        !isVisible ? 'opacity-0' : 'opacity-100'
      } ${
        cursorText
          ? 'w-24 h-24 bg-cyan-400 text-black shadow-2xl'
          : isHovered
          ? 'w-14 h-14 bg-white/90 scale-110'
          : 'w-3.5 h-3.5 bg-white'
      }`}
    >
      {cursorText && (
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-black select-none text-center px-2">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
};
