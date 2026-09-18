import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Gauge } from 'lucide-react';

interface PlateData {
  id: string;
  title: string;
  category: string;
  image?: string;
  badge?: string;
  customContent?: React.ReactNode;
  initialX: number; // percentage offset from center (-50 to +50)
  initialY: number; // percentage offset from center (-50 to +50)
  rotation: number;
  width: string;
  height: string;
  speed: number;
}

export const VaporoHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Spring physics for buttery smooth plate motion
  const springX = useSpring(0, { stiffness: 45, damping: 25, mass: 1 });
  const springY = useSpring(0, { stiffness: 45, damping: 25, mass: 1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const normY = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
      springX.set(normX);
      springY.set(normY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [springX, springY]);

  // Scroll animations for dispersing the plates as user scrolls down
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scatterScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.35]);
  const scatterOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const headlineY = useTransform(scrollYProgress, [0, 0.8], [0, -120]);

  // The 8 floating photographic & artifact plates (matching Vaporo's scattered composition)
  const plates: PlateData[] = [
    {
      id: 'stobo-shop',
      title: 'STOBO GmbH',
      category: 'Online-Shop & B2B',
      image: '/assets/images/stobo-shop.webp',
      badge: '97/100 PageSpeed',
      initialX: -36,
      initialY: -26,
      rotation: -5,
      width: 'w-44 sm:w-56 md:w-64',
      height: 'aspect-[16/10]',
      speed: 28,
    },
    {
      id: 'heritage',
      title: 'Leverkusen · NRW',
      category: 'Verifizierter Handwerks-Fokus',
      initialX: -14,
      initialY: -36,
      rotation: 3,
      width: 'w-36 sm:w-48',
      height: 'aspect-[4/3]',
      speed: 18,
      customContent: (
        <div className="p-4 h-full flex flex-col justify-between bg-[#1f1a16] text-[#e8decb]">
          <span className="text-[10px] tracking-[0.25em] uppercase font-mono text-[#c6a27e]">Handwerk & Praxen</span>
          <p className="font-serif text-base sm:text-lg italic leading-tight">"Betriebe, die von echten Aufträgen leben."</p>
          <span className="text-[10px] uppercase tracking-wider text-zinc-400">Köln · Düsseldorf</span>
        </div>
      ),
    },
    {
      id: 'roman-portrait',
      title: 'Roman',
      category: 'Inhaber & Entwickler',
      image: '/assets/images/roman.webp',
      badge: '1 Ansprechpartner',
      initialX: 18,
      initialY: -35,
      rotation: -4,
      width: 'w-32 sm:w-44 md:w-52',
      height: 'aspect-[3/4]',
      speed: 22,
    },
    {
      id: 'prolife',
      title: 'ProLife Krankenfahrdienst',
      category: 'Business-Auftritt Köln',
      image: '/assets/images/prolife.webp',
      badge: '5-10 Anfragen/Mo',
      initialX: 38,
      initialY: -22,
      rotation: 6,
      width: 'w-44 sm:w-56 md:w-64',
      height: 'aspect-[16/10]',
      speed: 32,
    },
    {
      id: 'performance',
      title: 'Core Web Vitals',
      category: 'Garantierte Geschwindigkeit',
      initialX: -40,
      initialY: 18,
      rotation: 4,
      width: 'w-40 sm:w-52',
      height: 'aspect-[4/3]',
      speed: 25,
      customContent: (
        <div className="p-4 h-full flex flex-col justify-between bg-[#191512] text-[#e8decb]">
          <div className="flex items-center justify-between">
            <Gauge className="w-5 h-5 text-emerald-400" />
            <span className="text-xl font-bold font-serif text-emerald-400">100</span>
          </div>
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Ladezeit: 0,3s</div>
            <div className="text-[10px] text-zinc-400 mt-0.5">Keine verlorenen Kunden mehr</div>
          </div>
        </div>
      ),
    },
    {
      id: 'vanessa-bartsch',
      title: 'Vanessa Bartsch',
      category: 'Editorial Portfolio',
      image: '/assets/images/vanessa-bartsch.webp',
      badge: '99/100 Score',
      initialX: -18,
      initialY: 32,
      rotation: -6,
      width: 'w-44 sm:w-56 md:w-64',
      height: 'aspect-[16/10]',
      speed: 20,
    },
    {
      id: 'festpreis',
      title: 'Festpreis Garantie',
      category: 'Kein Stundenzettel',
      initialX: 12,
      initialY: 34,
      rotation: 2,
      width: 'w-40 sm:w-52',
      height: 'aspect-[4/3]',
      speed: 24,
      customContent: (
        <div className="p-4 h-full flex flex-col justify-between bg-[#1f1b16] text-[#e8decb]">
          <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#c6a27e]">Preissicherheit</span>
          <div className="font-serif text-2xl font-bold text-white">ab 800 €</div>
          <span className="text-[10px] uppercase tracking-wider text-zinc-400">Live in 2–3 Wochen</span>
        </div>
      ),
    },
    {
      id: 'stobo-de',
      title: 'STOBO Corporate',
      category: 'Unternehmens-Website',
      image: '/assets/images/stobo-de.webp',
      badge: '1.000+ Bauteile',
      initialX: 38,
      initialY: 22,
      rotation: -3,
      width: 'w-44 sm:w-56 md:w-64',
      height: 'aspect-[16/10]',
      speed: 30,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[105dvh] w-full flex flex-col justify-between items-center bg-[#14110f] text-[#f6f1e8] overflow-hidden pt-28 pb-8 select-none"
      style={{ perspective: '1200px' }}
    >
      {/* Cinematic Ambient Glow & Vignette */}
      <div className="absolute inset-0 bg-radial from-[#241e19]/40 via-transparent to-black/80 pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#c6a27e]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Top Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center z-20 space-y-2 mt-4"
      >
        <span className="text-[11px] sm:text-xs tracking-[0.35em] uppercase font-mono text-[#c6a27e] block">
          EST. 2026 — LEVERKUSEN · KÖLN · NRW
        </span>
      </motion.div>

      {/* Main Center Stage: Massive Editorial Typography */}
      <motion.div
        style={{ y: headlineY }}
        className="relative z-10 text-center max-w-5xl px-6 my-auto"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#f6f1e8] font-normal leading-[0.92]"
        >
          SCHÖN REICHT <br />
          <span className="italic font-light text-[#dfbe9b]">NICHT.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-sans text-zinc-400 mt-6"
        >
          BEWEGEN SIE DEN ZEIGER, UM DIE MEISTERSTÜCKE ZU BEWEGEN
        </motion.p>
      </motion.div>

      {/* The 8 Floating Orbital Plates (Vaporo Pattern) */}
      <motion.div
        style={{
          scale: scatterScale,
          opacity: scatterOpacity,
        }}
        className="absolute inset-0 pointer-events-none z-15 flex items-center justify-center"
      >
        {plates.map((plate) => {
          return (
            <motion.div
              key={plate.id}
              style={{
                x: useTransform(springX, (v) => `${plate.initialX + v * (plate.speed * 0.18)}vw`),
                y: useTransform(springY, (v) => `${plate.initialY + v * (plate.speed * 0.18)}vh`),
                rotate: plate.rotation,
                transformStyle: 'preserve-3d',
              }}
              className={`absolute pointer-events-auto group cursor-pointer ${plate.width} ${plate.height} rounded-xl overflow-hidden plate-shadow border border-white/15 bg-[#171310] transition-transform duration-500 hover:scale-105 hover:border-[#c6a27e]`}
            >
              {plate.customContent ? (
                plate.customContent
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={plate.image}
                    alt={plate.title}
                    className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 text-left">
                    <span className="text-[9px] uppercase tracking-widest text-[#dfbe9b] font-mono font-medium">
                      {plate.category}
                    </span>
                    <span className="text-xs font-serif font-bold text-white">
                      {plate.title}
                    </span>
                  </div>
                  {plate.badge && (
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-[9px] font-mono font-semibold text-emerald-400">
                      {plate.badge}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Editorial Ticker (like * CELLAR LINEAGE * in Vaporo) */}
      <div className="w-full relative z-20 border-t border-white/10 pt-4 bg-[#14110f]/90 backdrop-blur-sm overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-xs uppercase tracking-[0.3em] font-mono text-zinc-400">
          <span>* LEVERKUSEN</span>
          <span>* KÖLN</span>
          <span>* NRW</span>
          <span>* HANDWERK & PRAXEN</span>
          <span className="text-[#dfbe9b] font-bold">* FESTPREIS AB 800 €</span>
          <span>* 90+ LADEZEIT</span>
          <span className="text-emerald-400">* 100% INHABERGEFÜHRT</span>
          <span>* SCHLÜSSELFERTIG IN 2-3 WOCHEN</span>
          <span>* LEVERKUSEN</span>
          <span>* KÖLN</span>
          <span>* NRW</span>
          <span>* HANDWERK & PRAXEN</span>
          <span className="text-[#dfbe9b] font-bold">* FESTPREIS AB 800 €</span>
          <span>* 90+ LADEZEIT</span>
          <span className="text-emerald-400">* 100% INHABERGEFÜHRT</span>
          <span>* SCHLÜSSELFERTIG IN 2-3 WOCHEN</span>
        </div>
      </div>
    </section>
  );
};
