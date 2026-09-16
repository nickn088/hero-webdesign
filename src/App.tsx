import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArchitecturalCursor }           from "./components/ArchitecturalCursor";
import { SovereignNavbar }               from "./components/SovereignNavbar";
import { SovereignHero }                 from "./components/SovereignHero";
import { ProjectInspector }              from "./components/ProjectInspector";
import { BespokePricing }                from "./components/BespokePricing";
import { AtelierAuthority }              from "./components/AtelierAuthority";
import { Testimonials }                  from "./components/Testimonials";
import { EditorialInquiry }              from "./components/EditorialInquiry";
import { EditorialFooter }               from "./components/EditorialFooter";

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    (window as any).lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    lenis.on("scroll", ({ velocity }: { velocity: number }) => {
      const cards = document.querySelectorAll<HTMLElement>(".velocity-skew-card");
      const clampedSkew = Math.max(-4, Math.min(4, velocity * 0.12));
      cards.forEach((card) => {
        gsap.to(card, { skewX: clampedSkew, duration: 0.35, ease: "power2.out", overwrite: "auto" });
      });
    });

    const tickerCb = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#121212] selection:bg-[#121212] selection:text-white relative">
      <ArchitecturalCursor />
      <SovereignNavbar />
      <main className="w-full">
        <SovereignHero />
        <ProjectInspector />
        <BespokePricing />
        <AtelierAuthority />
        <Testimonials />
        <EditorialInquiry />
      </main>
      <EditorialFooter />
    </div>
  );
};

export default App;
