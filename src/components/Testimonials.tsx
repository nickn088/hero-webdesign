import React from "react";
import { motion } from "motion/react";

const REVIEWS = [
  {
    num: "01",
    tag: "PROJEKT ONLINE-SHOP & WEBSITE",
    quote:
      "Wir sind sehr zufrieden mit der Umsetzung unseres Onlineshops und unserer neuen Website. Die Resultate alleine durch die Implementierung des Shops sind deutlich. Von der Planung bis zur finalen Umsetzung lief alles professionell ab und die Ergebnisse sprechen für sich.",
    author: "STOBO GmbH (Köln)",
    service: "Online-Shop & Corporate Webauftritt",
  },
  {
    num: "02",
    tag: "INDIVIDUELLE ANFORDERUNGEN",
    quote:
      "Die Zusammenarbeit war super! Ich hatte viele spezielle Wünsche und alle wurden perfekt umgesetzt. Die Gespräche waren alle sehr freundlich und ich habe mich von Anfang bis Ende sehr wohl gefühlt. Kleine Anpassungen wurden ohne Probleme umgesetzt. Werde ich auf jeden Fall weiterempfehlen!",
    author: "ProLife Fahrdienst (Köln)",
    service: "Business-Webseite & Buchungsanfrage",
  },
  {
    num: "03",
    tag: "EHRLICHE BERATUNG",
    quote:
      "Super Beratungsgespräch! Endlich jemand, der einem nichts andrehen will, sondern wirklich auf die eigenen Bedürfnisse eingeht.",
    author: "Lokaler Meisterbetrieb (Leverkusen)",
    service: "Erstberatung & Konzeption",
  },
  {
    num: "04",
    tag: "ZUVERLÄSSIGER SERVICE",
    quote:
      "Professionell, kreativ und zuverlässig. Tolle Ideen und super Service. Klare Empfehlung!",
    author: "Mittelständisches Unternehmen (NRW)",
    service: "Web-Relaunch & Performance",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section
      id="referenzen"
      className="relative w-full py-28 md:py-36 px-4 sm:px-8 border-t border-[#121212] bg-[#fcfcfb] text-[#121212] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-[#121212]">
          <div>
            <div className="inline-flex items-center gap-2.5 border border-[#121212] px-3.5 py-1 rounded-full uppercase bg-white font-mono font-semibold text-[11px] sm:text-[12px] tracking-wider text-[#121212] mb-6 shadow-xs">
              <span className="font-bold">5,0 / 5</span>
              <span className="text-amber-500">★★★★★</span>
              <span>Google</span>
            </div>
            <h2 className="font-display font-extrabold text-[clamp(36px,5.5vw,72px)] uppercase tracking-[-0.035em] text-[#121212] leading-[0.98]">
              Was Betriebe sagen,
              <br />
              <span className="text-[#121212]/65">die von Anfragen leben.</span>
            </h2>
          </div>

          <p className="font-sans text-[16px] sm:text-[18px] text-[#121212]/75 max-w-md leading-relaxed font-normal">
            Echtes Feedback von Inhabern aus Leverkusen und NRW, die direkt mit mir gearbeitet haben. Ohne Agentur-Umwege, ohne leere Versprechen.
          </p>
        </div>

        {/* Master Feature Review 01 */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          whileHover={{ y: -4 }}
          className="bg-white border border-[#121212] rounded-[32px] p-8 sm:p-12 md:p-14 mb-8 shadow-xs hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#121212]/15 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="font-extrabold text-[16px] sm:text-[18px] text-[#121212]">
                01
              </span>
              <span className="border border-[#121212]/25 px-3 py-0.5 rounded-full uppercase bg-[#f8f8f8] text-[10.5px] font-semibold tracking-wider text-[#121212]/70">
                {REVIEWS[0].tag}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-500 text-[14px] tracking-widest">
                ★★★★★
              </span>
              <span className="border border-[#121212] px-3 py-0.5 rounded-full uppercase bg-[#121212] text-white text-[10.5px] font-bold tracking-wider">
                Google Bewertung
              </span>
            </div>
          </div>

          <p className="font-sans text-[20px] sm:text-[24px] md:text-[28px] text-[#121212] font-medium leading-[1.38] tracking-tight mb-10 max-w-4xl">
            „{REVIEWS[0].quote}“
          </p>

          <div className="pt-6 border-t border-[#121212]/15 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div>
              <span className="font-bold text-[#121212] text-[14px]">
                {REVIEWS[0].author}
              </span>
              <span className="text-[#121212]/70 text-[12px] ml-2">
                · {REVIEWS[0].service}
              </span>
            </div>
            <span className="text-[#121212]/70 text-[11px] uppercase tracking-wider font-semibold">
              ✓ Verifizierte Kundenrezension
            </span>
          </div>
        </motion.div>

        {/* Triptych Grid: Reviews 02, 03, 04 with Staggered Spring Physics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.slice(1).map((review, i) => (
            <motion.div
              key={review.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 420, damping: 26, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border border-[#121212] rounded-[28px] p-7 sm:p-8 flex flex-col justify-between hover:bg-[#fafaf8] transition-colors duration-300 shadow-xs hover:shadow-md cursor-default"
            >
              <div>
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-[#121212]/15 mb-6 font-mono text-xs">
                  <span className="font-extrabold text-[15px] text-[#121212]">
                    {review.num}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-500 text-[12px] tracking-wider">
                      ★★★★★
                    </span>
                    <span className="border border-[#121212]/30 px-2 py-0.5 rounded-full uppercase bg-[#f8f8f8] text-[9.5px] font-bold text-[#121212]/70 tracking-wider">
                      Google
                    </span>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="font-sans text-[15px] sm:text-[16px] text-[#121212]/85 leading-relaxed mb-6 font-normal">
                  „{review.quote}“
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-[#121212]/15 font-mono text-xs">
                <div className="font-bold text-[#121212] text-[13px]">
                  {review.author}
                </div>
                <div className="text-[#121212]/70 text-[11px] mt-0.5">
                  {review.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
