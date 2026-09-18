import React, { useState } from 'react';
import { Send, Phone, MessageSquare, Mail, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { siteContent } from '../data/content';

export const InteractiveFunnel: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string>('business-website');
  const [selectedGoal, setSelectedGoal] = useState<string>('anfragen');
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const projectOptions = [
    { id: 'landingpage', label: 'Landingpage', price: 'ab 800 €' },
    { id: 'business-website', label: 'Business-Webseite', price: 'ab 1.500 €' },
    { id: 'online-shop', label: 'Online-Shop', price: 'ab 3.000 €' },
    { id: 'seo', label: 'Google Sichtbarkeit', price: 'ab 690 €' },
    { id: 'rework', label: 'Website-Modernisierung', price: 'nach Analyse' },
  ];

  const goalOptions = [
    { id: 'anfragen', label: 'Mehr lukrative Kundenanfragen & Anrufe' },
    { id: 'recruiting', label: 'Mitarbeiter & Fachkräfte anziehen' },
    { id: 'marke', label: 'Souveräner, moderner Firmenauftritt' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'd947ecaf-36b7-4d55-b94c-34aedbae5ffd',
          subject: `Neue Projektanfrage von ${name} (Hero Webdesign Relaunch)`,
          from_name: 'hero-webdesign.de Relaunch',
          Projekt: selectedProject,
          Ziel: selectedGoal,
          Name: name,
          Kontakt: contact,
          Bestehende_Website: currentUrl || 'Keine angegeben',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Vielen Dank für Ihre Anfrage! Wir melden uns innerhalb eines Werktages.');
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="anfrage" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0b0f] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Context & Direct Contact Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold uppercase tracking-wider text-amber-400">
                Erster Schritt · 100 % unverbindlich
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Bereit für messbar mehr Anfragen?
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Ich analysiere Ihre jetzige Webpräsenz und Ihren Google-Eintrag und sage Ihnen am Telefon genau, was ich ändern würde — kostenlos und unverbindlich.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-zinc-300 space-y-1">
                <div className="font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Kein Verkaufsdruck, kein Stundenzettel</span>
                </div>
                <p className="text-zinc-400">
                  Sie bekommen nach dem Gespräch ein verbindliches Festpreis-Angebot. Ob Sie beauftragen, entscheiden Sie in Ruhe.
                </p>
              </div>
            </div>

            {/* Direct Quick Channels */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Oder direkt kontaktieren:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={`tel:${siteContent.meta.phone}`}
                  className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex flex-col items-center justify-center text-center transition-all group"
                >
                  <Phone className="w-5 h-5 text-amber-400 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-white">Anrufen</span>
                  <span className="text-[10px] text-zinc-400">Mo–Fr 9–18</span>
                </a>

                <a
                  href={siteContent.meta.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-500/20 flex flex-col items-center justify-center text-center transition-all group"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-emerald-300">WhatsApp</span>
                  <span className="text-[10px] text-emerald-400/80">Sofort-Chat</span>
                </a>

                <a
                  href={`mailto:${siteContent.meta.email}`}
                  className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex flex-col items-center justify-center text-center transition-all group"
                >
                  <Mail className="w-5 h-5 text-zinc-300 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-white">E-Mail</span>
                  <span className="text-[10px] text-zinc-400">Antwort in 24h</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Guided Multi-Step Interactive Funnel (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#141419] border border-white/10 p-6 sm:p-9 shadow-2xl relative">
              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Anfrage erfolgreich angekommen!</h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto">
                    Vielen Dank, {name}! Ich sehe mir Ihre Angaben an und melde mich in der Regel innerhalb eines Werktages persönlich bei Ihnen.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white bg-white/5 border border-white/10"
                  >
                    Weitere Anfrage stellen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Step 1: Project Type */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                      1. Was planen Sie für Ihren Betrieb?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {projectOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt.id}
                          onClick={() => setSelectedProject(opt.id)}
                          className={`p-3 rounded-xl text-left border transition-all flex items-center justify-between ${
                            selectedProject === opt.id
                              ? 'bg-amber-400/10 border-amber-400 text-white shadow-sm'
                              : 'bg-white/5 border-white/5 text-zinc-300 hover:bg-white/10'
                          }`}
                        >
                          <span className="text-xs font-semibold">{opt.label}</span>
                          <span className="text-[11px] font-mono text-zinc-400">{opt.price}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Main Goal */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                      2. Was ist das wichtigste Ziel?
                    </label>
                    <div className="space-y-2">
                      {goalOptions.map((g) => (
                        <button
                          type="button"
                          key={g.id}
                          onClick={() => setSelectedGoal(g.id)}
                          className={`w-full p-3 rounded-xl text-left border transition-all text-xs font-medium ${
                            selectedGoal === g.id
                              ? 'bg-white/15 border-white/30 text-white font-bold'
                              : 'bg-white/5 border-white/5 text-zinc-400 hover:text-zinc-200'
                          }`}
                        >
                          {g.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Contact Details */}
                  <div className="space-y-4 pt-2 border-t border-white/10">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                      3. Ihre Kontaktdaten für den Rückruf:
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-zinc-400 block mb-1.5">Ihr Name / Betrieb *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="z. B. Markus Schmidt, Schmidt Sanitär"
                          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-zinc-400 block mb-1.5">Telefonnummer oder E-Mail *</label>
                        <input
                          type="text"
                          required
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          placeholder="z. B. 0171 1234567 oder info@betrieb.de"
                          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-zinc-400 block mb-1.5">Bestehende Website-Adresse (optional)</label>
                      <input
                        type="text"
                        value={currentUrl}
                        onChange={(e) => setCurrentUrl(e.target.value)}
                        placeholder="z. B. www.mein-betrieb.de"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Privacy & Submit */}
                  <div className="pt-2 space-y-4">
                    <label className="flex items-start gap-2.5 text-xs text-zinc-400 cursor-pointer">
                      <input type="checkbox" required defaultChecked className="mt-1 rounded accent-amber-400" />
                      <span>
                        Ich stimme zu, dass meine Angaben zur Beantwortung meiner Anfrage gespeichert werden.
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl font-bold text-sm text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-xl shadow-amber-400/20 flex items-center justify-center gap-2 active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <span>Wird gesendet...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Kostenlose Potenzial-Analyse anfordern</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="text-center text-[11px] text-zinc-500">
                      Roman antwortet persönlich innerhalb eines Werktages · Keine Werbeanrufe
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
