import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MagneticButton } from "./MagneticButton";

type Status = "idle" | "sending" | "success" | "error";

interface Package {
  id: string;
  name: string;
  price: number;
  duration: string;
  desc: string;
  isPopular?: boolean;
  highlight?: string;
}

const WEBSITE_PACKAGES: Package[] = [
  {
    id: "landing",
    name: "Landingpage",
    price: 800,
    duration: "7 bis 10 Tage",
    desc: "1 verkaufsstarke Zielseite für maximale Anrufe. Verkaufs-Copy & 100% Smartphone-Optimierung schlüsselfertig inklusive.",
    highlight: "Kompakter Einstieg",
  },
  {
    id: "business",
    name: "Business-Website",
    price: 1500,
    duration: "2 bis 3 Wochen",
    desc: "Bis zu 5 Unterseiten inklusive lokaler Google Maps Dominanz. Texte, Struktur & Domain-Umzug komplett inklusive.",
    isPopular: true,
    highlight: "Empfehlung für Betriebe",
  },
  {
    id: "shop",
    name: "Online-Shop",
    price: 3000,
    duration: "3 bis 4 Wochen",
    desc: "Vollständiger Produktkatalog, Warenkorb, Stripe & PayPal Checkout mit Bestandsverwaltung und persönlicher Schulung.",
    highlight: "Für E-Commerce & Scale",
  },
];

const SEO_PACKAGE: Package = {
  id: "seo-standalone",
  name: "Nur SEO & Google-Dominanz",
  price: 890,
  duration: "1 bis 2 Wochen",
  desc: "Google Unternehmensprofil, Branchenverzeichnisse und lokale Suchbegriffe ohne neue Website.",
  highlight: "Einzelleistung",
};

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const EditorialInquiry: React.FC = () => {
  const [selectedPkg, setSelectedPkg] = useState<Package>(WEBSITE_PACKAGES[1]);
  const [withSeoBoost, setWithSeoBoost] = useState(false);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const handleSelectPackage = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string }>;
      const id = customEvent.detail?.id;
      if (!id) return;

      if (id === "landingpage" || id === "landing") {
        setSelectedPkg(WEBSITE_PACKAGES[0]);
      } else if (id === "business-website" || id === "business") {
        setSelectedPkg(WEBSITE_PACKAGES[1]);
      } else if (id === "online-shop" || id === "shop") {
        setSelectedPkg(WEBSITE_PACKAGES[2]);
      } else if (id === "seo-standalone" || id === "seo" || id === "seo-sichtbarkeit") {
        setSelectedPkg(SEO_PACKAGE);
      }
    };

    window.addEventListener("select-package", handleSelectPackage);
    return () => window.removeEventListener("select-package", handleSelectPackage);
  }, []);

  const seoPrice = selectedPkg.id === "seo-standalone" ? 0 : withSeoBoost ? 690 : 0;
  const totalPrice = selectedPkg.price + seoPrice;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d947ecaf-36b7-4d55-b94c-34aedbae5ffd",
          name,
          contact,
          message: `Kalkulation:
- Paket: ${selectedPkg.name} (${selectedPkg.price} €)
- SEO-Boost: ${withSeoBoost ? "Ja (+690 €)" : "Nein (Basis inklusive)"}
- Festpreis: ${totalPrice} €
- Dauer: ca. ${selectedPkg.duration}

Hinweis des Kunden:
${note || "Keine zusätzliche Notiz angegeben."}`,
          subject: `Neue Projekt-Kalkulation: ${name} (${totalPrice} €)`,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="kontakt-final"
      className="relative bg-white py-28 px-6 md:px-12 text-[#121212] border-t border-[#121212]"
    >
      <div className="max-w-[1080px] mx-auto">
        {/* Kristallklarer Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#121212]/50 font-bold block mb-4">
            KOSTENLOSE WEBSITE-ANALYSE
          </span>
          <h2 className="font-display font-extrabold text-[clamp(34px,5vw,64px)] leading-[0.95] tracking-[-0.04em] uppercase text-[#121212] mb-4">
            Zwanzig Minuten.<br />Klartext.
          </h2>
          <p className="font-sans text-[17px] sm:text-[19px] text-[#121212]/75 leading-relaxed">
            Wählen Sie Ihr Paket. Innerhalb von 24 Stunden erhalten Sie ein schriftliches, verbindliches Festpreisangebot — ohne Agentur-Sprech und ohne versteckte Kosten.
          </p>
        </div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease }}
            className="border border-[#121212] rounded-[32px] p-12 text-center bg-[#f8f8f8]"
          >
            <span className="font-mono text-[12px] uppercase tracking-widest text-[#121212]/60 font-bold mb-3 block">
              ANFRAGE ERFOLGREICH ÜBERMITTELT ✓
            </span>
            <h3 className="font-display font-bold text-[32px] text-[#121212] mb-3">
              Vielen Dank, {name}!
            </h3>
            <p className="font-sans text-[16px] text-[#121212]/75 max-w-md mx-auto mb-8 leading-relaxed">
              Ihre Kalkulation für die <strong>{selectedPkg.name}</strong> ({totalPrice.toLocaleString("de-DE")} € Festpreis) ist eingegangen. Ich melde mich innerhalb von 24 Stunden persönlich bei Ihnen.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#121212] bg-white font-mono text-xs">
              <span>Bei Fragen direkt anrufen</span>
              <a href="tel:+4915224196590" className="font-bold underline">
                +49 152 24196590
              </a>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* SCHRITT 1: PAKET WAHL */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[12px] uppercase tracking-wider font-bold text-[#121212]">
                  1. WELCHES PAKET BENÖTIGEN SIE?
                </span>
                <span className="font-mono text-[11px] text-[#121212]/70">
                  Garantierte Fertigstellung
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {WEBSITE_PACKAGES.map((pkg) => {
                  const isSelected = selectedPkg.id === pkg.id;
                  return (
                    <motion.button
                      key={pkg.id}
                      type="button"
                      data-cursor="hover"
                      onClick={() => setSelectedPkg(pkg)}
                      whileHover={{ y: -4, scale: 1.01 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 450, damping: 28 }}
                      className={`relative p-6 sm:p-7 rounded-[24px] border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "bg-[#121212] text-white border-[#121212] shadow-lg ring-2 ring-[#121212]/20"
                          : pkg.isPopular
                          ? "bg-[#fcfcfb] text-[#121212] border-[#121212] shadow-sm hover:shadow-md"
                          : "bg-[#f8f8f8] text-[#121212] border-[#121212]/20 hover:border-[#121212]"
                      }`}
                    >
                      <div>
                        {pkg.isPopular && (
                          <div className="mb-3">
                            <span
                              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[10px] font-extrabold uppercase tracking-wider ${
                                isSelected ? "bg-white text-[#121212]" : "bg-[#121212] text-white"
                              }`}
                            >
                              ★ MEISTGEWÄHLT (80% DER BETRIEBE)
                            </span>
                          </div>
                        )}

                        <div className="flex items-center justify-between mb-2">
                          <span className="font-display font-bold text-[18px] sm:text-[20px] tracking-tight">
                            {pkg.name}
                          </span>
                          <span
                            className={`w-5 h-5 rounded-full border flex items-center justify-center text-[11px] ${
                              isSelected
                                ? "border-white bg-white text-[#121212] font-bold"
                                : "border-[#121212]/30"
                            }`}
                          >
                            {isSelected && "✓"}
                          </span>
                        </div>

                        <span className={`block font-mono text-[10.5px] uppercase tracking-wider mb-3 ${
                          isSelected ? "text-white/60" : "text-[#121212]/60"
                        }`}>
                          {pkg.highlight}
                        </span>

                        <p
                          className={`font-sans text-[13.5px] leading-relaxed mb-6 ${
                            isSelected ? "text-white/75" : "text-[#121212]/70"
                          }`}
                        >
                          {pkg.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-current/15 flex items-baseline justify-between font-mono">
                        <span className="text-[22px] font-bold">
                          {pkg.price.toLocaleString("de-DE")} €
                        </span>
                        <span className={`text-[11px] ${isSelected ? "text-white/70" : "text-[#121212]/70"}`}>
                          ca. {pkg.duration}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Standalone SEO Option */}
              <div className="mt-5 p-4 sm:p-5 rounded-[22px] border border-[#121212]/15 bg-[#fcfcfb] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#121212] block">
                    Keine neue Website nötig?
                  </span>
                  <span className="font-sans text-[13.5px] text-[#121212]/70">
                    Google-Unternehmensprofil, Google Maps & lokale Suchbegriffe als eigenständige Leistung.
                  </span>
                </div>
                <button
                  type="button"
                  data-cursor="hover"
                  onClick={() => setSelectedPkg(SEO_PACKAGE)}
                  className={`shrink-0 px-5 py-2.5 rounded-full font-mono text-[11.5px] font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                    selectedPkg.id === "seo-standalone"
                      ? "bg-[#121212] text-white border-[#121212]"
                      : "bg-white text-[#121212] border-[#121212] hover:bg-[#121212] hover:text-white"
                  }`}
                >
                  {selectedPkg.id === "seo-standalone" ? "✓ " : ""} NUR SEO WÄHLEN (890 € FESTPREIS)
                </button>
              </div>
            </div>

            {/* SCHRITT 2: OPTIONALER SEO-BOOST */}
            <div>
              {selectedPkg.id === "seo-standalone" ? (
                <div className="p-6 rounded-[22px] border border-[#121212] bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#121212]">
                      2. GEWÄHLTE EINZELLEISTUNG
                    </span>
                    <span className="font-mono text-xs font-bold text-[#121212]">
                      890 € EINZELPREIS
                    </span>
                  </div>
                  <p className="font-sans text-[14px] text-[#121212]/75 leading-relaxed">
                    Google-Unternehmensprofil, Google Maps und lokale Suchbegriffsanalyse als unabhängige Einzelleistung gewählt. (Im Paket mit einer Website kostet diese Einrichtung 690 €).
                  </p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[12px] uppercase tracking-wider font-bold text-[#121212]">
                      2. GOOGLE-SICHTBARKEIT & MAPS
                    </span>
                    <span className="font-mono text-[11px] text-[#121212]/70">
                      690 € im Paket · 890 € einzeln
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.button
                      type="button"
                      data-cursor="hover"
                      onClick={() => setWithSeoBoost(false)}
                      whileHover={{ y: -3, scale: 1.01 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 450, damping: 28 }}
                      className={`p-5 rounded-[20px] border text-left transition-colors cursor-pointer ${
                        !withSeoBoost
                          ? "bg-[#121212] text-white border-[#121212]"
                          : "bg-[#f8f8f8] text-[#121212] border-[#121212]/20 hover:border-[#121212]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display font-bold text-[16px]">Basis-SEO</span>
                        <span className="font-mono text-xs font-semibold">Inklusive (0 €)</span>
                      </div>
                      <p className={`font-sans text-[13px] ${!withSeoBoost ? "text-white/70" : "text-[#121212]/60"}`}>
                        Saubere Meta-Tags, Sitemap und technische Indexierung bereits im Paket enthalten.
                      </p>
                    </motion.button>

                    <motion.button
                      type="button"
                      data-cursor="hover"
                      onClick={() => setWithSeoBoost(true)}
                      whileHover={{ y: -3, scale: 1.01 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 450, damping: 28 }}
                      className={`p-5 rounded-[20px] border text-left transition-colors cursor-pointer ${
                        withSeoBoost
                          ? "bg-[#121212] text-white border-[#121212]"
                          : "bg-[#f8f8f8] text-[#121212] border-[#121212]/20 hover:border-[#121212]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display font-bold text-[16px]">Lokale Google-Dominanz</span>
                        <span className="font-mono text-xs font-semibold">+690 € im Paket</span>
                      </div>
                      <p className={`font-sans text-[13px] ${withSeoBoost ? "text-white/70" : "text-[#121212]/60"}`}>
                        Google Unternehmensprofil, Google Maps und Suchbegriffe (200 € Sparvorteil gegenüber Einzelbuchung).
                      </p>
                    </motion.button>
                  </div>
                </div>
              )}
            </div>

            {/* SCHRITT 3: FESTPREIS-ERGEBNIS & ANFRAGE */}
            <div className="border border-[#121212] rounded-[28px] p-7 sm:p-10 bg-[#fbfbf9]">
              {/* Ruhiger, klarer Festpreis-Kopf */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-[#121212]/15 gap-2">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#121212]/60 font-bold block mb-1">
                    VERBINDLICHER FESTPREIS
                  </span>
                  <div className="font-display font-extrabold text-[44px] sm:text-[54px] leading-none text-[#121212] tracking-tight">
                    {totalPrice.toLocaleString("de-DE")} €
                  </div>
                </div>
                <div className="font-mono text-[11.5px] text-[#121212]/65">
                  Netto zzgl. 19% MwSt. · Inkl. 90+ Ladezeiten-Garantie
                </div>
              </div>

              {/* 2 Ergonomische Eingabefelder mit Autocomplete & Inline Feedback */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="inquiry-name" className="font-mono text-[11px] uppercase tracking-wider text-[#121212]/70 font-bold block">
                      Ihr Name & Unternehmen *
                    </label>
                    {name.trim().length >= 2 && (
                      <span className="font-mono text-[11px] text-emerald-600 font-bold">✓</span>
                    )}
                  </div>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="z.B. Markus Weber, Weber GmbH"
                    className="w-full min-h-[50px] bg-white border border-[#121212]/25 rounded-[12px] px-4 py-3 font-sans text-[15px] text-[#121212] placeholder:text-[#121212]/35 outline-none transition-all duration-200 focus:border-[#121212] focus:ring-2 focus:ring-[#121212]/10"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="inquiry-contact" className="font-mono text-[11px] uppercase tracking-wider text-[#121212]/70 font-bold block">
                      Telefonnummer oder E-Mail *
                    </label>
                    {contact.trim().length >= 5 && (
                      <span className="font-mono text-[11px] text-emerald-600 font-bold">✓</span>
                    )}
                  </div>
                  <input
                    id="inquiry-contact"
                    type="text"
                    required
                    name="contact"
                    autoComplete="email"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="+49 ... oder info@..."
                    className="w-full min-h-[50px] bg-white border border-[#121212]/25 rounded-[12px] px-4 py-3 font-sans text-[15px] text-[#121212] placeholder:text-[#121212]/60 outline-none transition-all duration-200 focus:border-[#121212] focus:ring-2 focus:ring-[#121212]/10"
                  />
                </div>
              </div>

              <div className="mb-6">
                <input
                  id="inquiry-note"
                  type="text"
                  name="note"
                  aria-label="Optionale Notiz zum Vorhaben"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Optionale Notiz zum Vorhaben (z.B. Bestehende Website überarbeiten, Wunschtermin)"
                  className="w-full min-h-[50px] bg-white border border-[#121212]/25 rounded-[12px] px-4 py-3 font-sans text-[15px] text-[#121212] placeholder:text-[#121212]/60 outline-none transition-all duration-200 focus:border-[#121212] focus:ring-2 focus:ring-[#121212]/10"
                />
              </div>

              {/* Klarer, unmissverständlicher CTA-Button */}
              <MagneticButton
                type="submit"
                disabled={status === "sending"}
                data-cursor="hover"
                className="w-full min-h-[56px] py-4 px-6 bg-[#121212] text-white hover:bg-black border border-[#121212] rounded-[16px] font-mono text-[13px] font-bold uppercase tracking-wider shadow-sm cursor-pointer flex items-center justify-center gap-2 group transition-colors duration-200"
              >
                {status === "sending" ? (
                  <span>ANGEBOT WIRD ERSTELLT...</span>
                ) : (
                  <>
                    <span>FESTPREISANGEBOT ANFORDERN</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </>
                )}
              </MagneticButton>

              {/* Reassurance */}
              <div className="pt-3 text-center">
                <span className="font-mono text-[11px] text-[#121212]/60">
                  100% kostenlos & unverbindlich · Schriftliche Rückmeldung innerhalb von 24h
                </span>
              </div>
            </div>

            {/* Dezenter Fallback für Schnell-Anrufer außerhalb der Formular-Box */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 font-mono text-xs text-[#121212]/65 text-center">
              <span>Keine Zeit für Formulare?</span>
              <div className="flex items-center gap-4">
                <a
                  href="tel:+4915224196590"
                  className="text-[#121212] font-bold hover:underline flex items-center gap-1.5"
                >
                  <span>+49 152 24196590</span>
                </a>
                <span>·</span>
                <a
                  href="https://wa.me/message/BJMHXSTMT7RBO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#075e54] font-bold hover:underline flex items-center gap-1"
                >
                  <span>WhatsApp Express ↗</span>
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
