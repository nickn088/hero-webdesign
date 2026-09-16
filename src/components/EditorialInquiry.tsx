import React, { useState } from "react";
import { motion } from "motion/react";

type Status = "idle" | "sending" | "success" | "error";

interface Package {
  id: string;
  name: string;
  price: number;
  duration: string;
  desc: string;
}

const PACKAGES: Package[] = [
  {
    id: "landing",
    name: "Landingpage",
    price: 800,
    duration: "7 bis 10 Tage",
    desc: "1 verkaufsstarke Seite mit Fokus auf maximale Conversion und Anrufe.",
  },
  {
    id: "business",
    name: "Business-Website",
    price: 1500,
    duration: "2 bis 3 Wochen",
    desc: "Bis zu 5 Unterseiten inklusive lokaler Google-Auffindbarkeit und Team.",
  },
  {
    id: "shop",
    name: "Online-Shop",
    price: 3000,
    duration: "3 bis 4 Wochen",
    desc: "Vollständiger Produktkatalog, Warenkorb und 10 Zahlungsarten.",
  },
  {
    id: "seo-standalone",
    name: "Nur SEO & Google",
    price: 890,
    duration: "1 bis 2 Wochen",
    desc: "Google-Eintrag, Verzeichnisse und Suchbegriffe als Einzelleistung.",
  },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const EditorialInquiry: React.FC = () => {
  const [selectedPkg, setSelectedPkg] = useState<Package>(PACKAGES[1]);
  const [withSeoBoost, setWithSeoBoost] = useState(false);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<Status>("idle");

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
          <h2 className="font-display font-extrabold text-[clamp(34px,5vw,64px)] leading-[0.95] tracking-[-0.04em] uppercase text-[#121212] mb-4">
            Ihr Projekt anfragen.
          </h2>
          <p className="font-sans text-[17px] sm:text-[19px] text-[#121212]/75 leading-relaxed">
            Wählen Sie Ihr Paket. Innerhalb von 24 Stunden erhalten Sie ein schriftliches, verbindliches Festpreisangebot ohne versteckte Kosten.
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
                <span className="font-mono text-[11px] text-[#121212]/50">
                  Garantierte Fertigstellung
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {PACKAGES.map((pkg) => {
                  const isSelected = selectedPkg.id === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      data-cursor="hover"
                      onClick={() => setSelectedPkg(pkg)}
                      className={`p-6 rounded-[22px] border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "bg-[#121212] text-white border-[#121212] shadow-sm"
                          : "bg-[#f8f8f8] text-[#121212] border-[#121212]/20 hover:border-[#121212]"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-display font-bold text-[17px] tracking-tight">
                            {pkg.name}
                          </span>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                              isSelected
                                ? "border-white bg-white text-[#121212] font-bold"
                                : "border-[#121212]/30"
                            }`}
                          >
                            {isSelected && "✓"}
                          </span>
                        </div>
                        <p
                          className={`font-sans text-[13px] leading-snug mb-6 ${
                            isSelected ? "text-white/75" : "text-[#121212]/70"
                          }`}
                        >
                          {pkg.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-current/15 flex items-baseline justify-between font-mono">
                        <span className="text-[19px] font-bold">
                          {pkg.price.toLocaleString("de-DE")} €
                        </span>
                        <span className={`text-[10.5px] ${isSelected ? "text-white/60" : "text-[#121212]/50"}`}>
                          ca. {pkg.duration}
                        </span>
                      </div>
                    </button>
                  );
                })}
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
                    <span className="font-mono text-[11px] text-[#121212]/50">
                      690 € im Paket · 890 € einzeln
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      data-cursor="hover"
                      onClick={() => setWithSeoBoost(false)}
                      className={`p-5 rounded-[20px] border text-left transition-all cursor-pointer ${
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
                    </button>

                    <button
                      type="button"
                      data-cursor="hover"
                      onClick={() => setWithSeoBoost(true)}
                      className={`p-5 rounded-[20px] border text-left transition-all cursor-pointer ${
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
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* SCHRITT 3: FESTPREIS-ERGEBNIS & ANFRAGE */}
            <div className="border border-[#121212] rounded-[28px] p-8 sm:p-10 bg-[#f8f8f8]">
              <div className="flex flex-wrap items-end justify-between gap-6 pb-8 mb-8 border-b border-[#121212]/15">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#121212]/60 font-bold block mb-1">
                    GARANTIERTER FESTPREIS
                  </span>
                  <div className="font-display font-extrabold text-[44px] sm:text-[56px] leading-none text-[#121212] tracking-tight">
                    {totalPrice.toLocaleString("de-DE")} €
                  </div>
                  <span className="font-mono text-[11px] text-[#121212]/60 mt-1 block">
                    Netto zzgl. 19% MwSt. · Inkl. 100/100 Ladezeiten-Garantie
                  </span>
                </div>

                <div className="space-y-1.5 font-mono text-[11.5px] text-[#121212]/80">
                  <div>✓ Direkte persönliche Umsetzung durch mich</div>
                  <div>✓ Keine versteckten Stundensätze</div>
                  <div>✓ 100% Eigentum ohne monatliches Abo</div>
                </div>
              </div>

              {/* 2 Einfache Eingabefelder */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#121212]/70 font-bold block mb-2">
                    Ihr Name & Unternehmen *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="z.B. Markus Weber, Weber GmbH"
                    className="w-full bg-white border border-[#121212]/30 rounded-[14px] px-4 py-3 font-sans text-[15px] text-[#121212] placeholder:text-[#121212]/35 outline-none focus:border-[#121212]"
                  />
                </div>

                <div>
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#121212]/70 font-bold block mb-2">
                    Telefonnummer oder E-Mail *
                  </label>
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="+49 ... oder info@..."
                    className="w-full bg-white border border-[#121212]/30 rounded-[14px] px-4 py-3 font-sans text-[15px] text-[#121212] placeholder:text-[#121212]/35 outline-none focus:border-[#121212]"
                  />
                </div>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Optionale Notiz zum Vorhaben (z.B. Bestehende Website überarbeiten, Wunschtermin)"
                  className="w-full bg-white border border-[#121212]/30 rounded-[14px] px-4 py-3 font-sans text-[14px] text-[#121212] placeholder:text-[#121212]/35 outline-none focus:border-[#121212]"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                data-cursor="hover"
                className="w-full py-4 bg-[#121212] text-white hover:bg-black border border-[#121212] rounded-[16px] font-mono text-[13px] font-bold uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer active:scale-[0.99] flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  "WIRD GESENDET..."
                ) : (
                  <>
                    <span>FESTPREISANGEBOT FÜR {totalPrice.toLocaleString("de-DE")} € ANFORDERN</span>
                    <span>→</span>
                  </>
                )}
              </button>

              {/* Schnelle Direktkanäle */}
              <div className="pt-6 mt-6 border-t border-[#121212]/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11.5px] text-[#121212]/65">
                <span>Lieber direkt sprechen?</span>
                <div className="flex items-center gap-4">
                  <a href="tel:+4915224196590" className="hover:text-[#121212] underline">
                    +49 152 24196590 ↗
                  </a>
                  <a
                    href="https://wa.me/message/BJMHXSTMT7RBO1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#121212] underline"
                  >
                    WhatsApp Chat ↗
                  </a>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
