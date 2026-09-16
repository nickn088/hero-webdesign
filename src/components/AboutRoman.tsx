import React from 'react';
import { UserCheck } from 'lucide-react';
import { siteContent } from '../data/content';

export const AboutRoman: React.FC = () => {
  const { aboutRoman } = siteContent;

  return (
    <section id="ueber" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0b0f] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Founder Badge (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Back Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-zinc-700/20 to-transparent rounded-3xl blur-xl opacity-60" />

              <div className="relative rounded-2xl bg-[#141419] border border-white/10 overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/roman.webp"
                  alt="Roman, Gründer von Hero Webdesign Leverkusen"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover object-center"
                />

                {/* Floating Founder Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0e0e12]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-base">Roman</div>
                    <div className="text-xs text-amber-400 font-medium">Inhaber & Entwickler · Leverkusen</div>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <UserCheck className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-amber-400">
              {aboutRoman.badge}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              {aboutRoman.headline}
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>{aboutRoman.bio1}</p>
              <p>{aboutRoman.bio2}</p>
              <p className="font-medium text-white/90">{aboutRoman.bio3}</p>
            </div>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {aboutRoman.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1 hover:border-white/10 transition-colors"
                >
                  <div className="text-2xl font-extrabold text-white font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-zinc-300">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-zinc-400">
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
