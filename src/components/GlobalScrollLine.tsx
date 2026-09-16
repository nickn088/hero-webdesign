import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

export const GlobalScrollLine: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Smooth spring physics for scroll indicator
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 20,
    mass: 1.2,
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 hidden lg:block overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Subtle background guide dash line */}
        <path
          d="M 100 0 Q 180 450 100 900"
          stroke="#00f0ff"
          strokeWidth="1"
          strokeOpacity="0.08"
          strokeDasharray="4 8"
        />

        {/* Dynamic laser line */}
        <motion.path
          d="M 100 0 Q 180 450 100 900"
          stroke="#00f0ff"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
};
