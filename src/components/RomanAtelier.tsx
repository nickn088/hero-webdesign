import React from 'react';
import { siteContent } from '../data/content';

export const RomanAtelier: React.FC = () => {
  const { aboutRoman } = siteContent;

  return (
    <section id="atelier" className="py-32 px-6 md:px-12 bg-[#120f0d] text-[#f6f1e8] relative border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Image Column (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/40 shadow-2xl max-w-sm mx-auto lg:max-w-none">
              <img
                src="/assets/images/roman.webp"
                alt="Roman, Inhaber von Hero Webdesign"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#dfbe9b]">
                  Inhaber & Entwickler
                </span>
                <span className="font-serif text-2xl text-white">Roman · Leverkusen</span>
              </div>
            </div>
          </div>

          {/* Narrative Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#dfbe9b] block mb-2">
                05 / PERSÖNLICHE VERANTWORTUNG
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
                {aboutRoman.headline}
              </h2>
            </div>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base font-sans leading-relaxed">
              <p>{aboutRoman.bio1}</p>
              <p>{aboutRoman.bio2}</p>
              <p className="font-medium text-[#dfbe9b]">{aboutRoman.bio3}</p>
            </div>

            {/* 3 Metric Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {aboutRoman.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-serif text-3xl sm:text-4xl text-white font-normal">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
