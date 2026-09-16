import React from 'react';
import { ExternalLink, Check, Gauge, MapPin } from 'lucide-react';
import { siteContent, CaseStudy } from '../data/content';

export const Portfolio: React.FC = () => {
  return (
    <section id="referenzen" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090c] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-amber-400">
            Ausgewählte Arbeiten
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Vier echte Projekte.<br />Alle nachprüfbar live im Netz.
          </h2>
          <p className="text-zinc-400 text-base">
            Keine fiktiven Demo-Templates. Jede dieser Seiten läuft im echten Alltagseinsatz für reale Betriebe im Großraum Köln / Leverkusen.
          </p>
        </div>

        {/* 2x2 Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteContent.caseStudies.map((project: CaseStudy) => {
            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#121217] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-xl group"
              >
                {/* Browser Device Header & Preview */}
                <div className="p-4 sm:p-6 pb-0">
                  <div className="rounded-xl bg-[#09090c] border border-white/10 overflow-hidden shadow-2xl">
                    {/* Browser Toolbar */}
                    <div className="px-4 py-2.5 bg-[#16161b] border-b border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                      </div>

                      <div className="px-3 py-0.5 rounded-md bg-white/5 text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                        <span>{project.domain}</span>
                      </div>

                      {/* Performance Score Badge */}
                      <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                        <Gauge className="w-3 h-3" />
                        <span>{project.metrics.value}</span>
                      </div>
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden group-hover:scale-[1.01] transition-transform duration-500">
                      <img
                        src={project.screenshot}
                        alt={`Startseite von ${project.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-xs text-zinc-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{project.location}</span>
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights Bullet Points */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                    <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      Was der Kunde jetzt kann:
                    </div>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-2 flex items-center justify-between border-t border-white/5">
                    <span className="text-xs font-mono text-zinc-400">
                      {project.metrics.subtext}
                    </span>

                    <a
                      href={`https://www.${project.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-amber-400 transition-colors py-1 px-3 rounded-lg bg-white/5 hover:bg-white/10"
                    >
                      <span>Website öffnen</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
