import React, { useEffect, Suspense, lazy } from "react";
import { ArchitecturalCursor }           from "./components/ArchitecturalCursor";
import { SovereignNavbar }               from "./components/SovereignNavbar";
import { SovereignHero }                 from "./components/SovereignHero";

const ProjectInspector  = lazy(() => import("./components/ProjectInspector").then((m) => ({ default: m.ProjectInspector })));
const BespokePricing    = lazy(() => import("./components/BespokePricing").then((m) => ({ default: m.BespokePricing })));
const AtelierAuthority  = lazy(() => import("./components/AtelierAuthority").then((m) => ({ default: m.AtelierAuthority })));
const Testimonials      = lazy(() => import("./components/Testimonials").then((m) => ({ default: m.Testimonials })));
const EditorialInquiry  = lazy(() => import("./components/EditorialInquiry").then((m) => ({ default: m.EditorialInquiry })));
const EditorialFooter   = lazy(() => import("./components/EditorialFooter").then((m) => ({ default: m.EditorialFooter })));
const NotFoundPage      = lazy(() => import("./components/NotFoundPage").then((m) => ({ default: m.NotFoundPage })));

const SCROLL_STORAGE_KEY = "hero_webdesign_scroll_pos";
const SECTION_STORAGE_KEY = "hero_webdesign_active_section";

export const App: React.FC = () => {
  const isNotFound =
    typeof window !== "undefined" &&
    window.location.pathname !== "/" &&
    window.location.pathname !== "" &&
    window.location.pathname !== "/index.html";

  useEffect(() => {
    if (isNotFound) return;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    let activeLenis: any = null;
    let activeGsap: any = null;
    let tickerCb: any = null;
    let restoreTimer: any = null;
    let chunkRefreshInterval: any = null;
    let clearRefresh: any = null;
    let isRestored = false;

    const handleScroll = () => {
      if (!isRestored) return;
      try {
        sessionStorage.setItem(SCROLL_STORAGE_KEY, String(window.scrollY));
      } catch {
        // ignore
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleBeforeUnload = () => {
      try {
        sessionStorage.setItem(SCROLL_STORAGE_KEY, String(window.scrollY));
      } catch {
        // ignore
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    Promise.all([
      import("lenis"),
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([{ default: Lenis }, { default: gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      activeGsap = gsap;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
      });

      activeLenis = lenis;
      (window as any).lenis = lenis;
      lenis.on("scroll", ScrollTrigger.update);

      tickerCb = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tickerCb);
      gsap.ticker.lagSmoothing(0);

      const initialSavedSection = sessionStorage.getItem(SECTION_STORAGE_KEY);
      const initialSavedY = sessionStorage.getItem(SCROLL_STORAGE_KEY);

      restoreTimer = setTimeout(() => {
        ScrollTrigger.refresh();
        const hash = window.location.hash;

        if (hash && document.querySelector(hash)) {
          lenis.scrollTo(hash, { immediate: true });
        } else if (initialSavedY) {
          const y = parseFloat(initialSavedY);
          if (!isNaN(y) && y > 10) {
            lenis.scrollTo(y, { immediate: true });
          } else if (initialSavedSection && document.getElementById(initialSavedSection)) {
            lenis.scrollTo(`#${initialSavedSection}`, { immediate: true });
          }
        } else if (initialSavedSection && document.getElementById(initialSavedSection)) {
          lenis.scrollTo(`#${initialSavedSection}`, { immediate: true });
        }

        setTimeout(() => {
          isRestored = true;
        }, 50);
      }, 120);

      chunkRefreshInterval = setInterval(() => {
        ScrollTrigger.refresh();
      }, 400);
      clearRefresh = setTimeout(() => clearInterval(chunkRefreshInterval), 2500);
    });

    return () => {
      clearTimeout(restoreTimer);
      clearTimeout(clearRefresh);
      clearInterval(chunkRefreshInterval);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (activeGsap && tickerCb) {
        activeGsap.ticker.remove(tickerCb);
      }
      if (activeLenis) {
        activeLenis.destroy();
      }
      delete (window as any).lenis;
    };
  }, [isNotFound]);

  if (isNotFound) {
    return (
      <Suspense fallback={null}>
        <NotFoundPage />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#121212] selection:bg-[#121212] selection:text-white relative">
      {/* WCAG 2.2 AA+ Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#121212] focus:text-white focus:rounded-[12px] focus:font-mono focus:text-xs focus:shadow-xl focus:border focus:border-white focus:outline-none"
      >
        Direkt zum Hauptinhalt springen
      </a>

      <ArchitecturalCursor />
      <SovereignNavbar />
      <main id="main-content" className="w-full">
        <SovereignHero />
        <Suspense fallback={null}>
          <ProjectInspector />
          <BespokePricing />
          <AtelierAuthority />
          <Testimonials />
          <EditorialInquiry />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <EditorialFooter />
      </Suspense>
    </div>
  );
};

export default App;
