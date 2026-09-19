import React from 'react';
import { ShieldCheck, Award, Clock, Wrench, CheckCircle2, TrendingUp, Sparkles, Building } from 'lucide-react';
import { BUSINESS_INFO } from '../data/machineryData';

export default function WhyChooseUs({ onOpenCardPreview }) {
  const reasons = [
    {
      title: 'Authorized Printech Distributor',
      desc: 'Direct factory pricing with official manufacturer warranty. No third-party brokerage or inflated markups.',
      icon: Award,
      badge: 'Certified'
    },
    {
      title: '26+ Years of Proven Expertise',
      desc: 'Helped over 1,200 commercial, packaging, and digital printers establish profitable printing operations since 1998.',
      icon: Clock,
      badge: 'Legacy'
    },
    {
      title: 'Central Vijayawada Spares Hub',
      desc: 'Our Autonagar warehouse maintains ready stock of cutting knives, numbering units, creasing dies, and pneumatic seals.',
      icon: Building,
      badge: 'Immediate'
    },
    {
      title: 'All Types of Offset Machines',
      desc: 'Expertise across multi-color sheetfed units, single color mini offsets, Heidelberg, Komori, and Printech machineries.',
      icon: Wrench,
      badge: 'Universal'
    },
    {
      title: 'Rapid 24-Hour Regional Response',
      desc: 'Dedicated service engineers covering all 26 districts of Andhra Pradesh and 33 districts of Telangana.',
      icon: ShieldCheck,
      badge: 'Guaranteed'
    },
    {
      title: 'Direct Proprietor Accountability',
      desc: 'Speak directly with founder P. Jayakumar for honest advice, machine trade-in consultations, and fair negotiations.',
      icon: TrendingUp,
      badge: 'Direct'
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#090F1E] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/70 border border-amber-800/50 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Distributor Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Why Printers in AP & TS Trust <span className="text-red-gradient">SE Enterprises</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Purchasing a heavy industrial printing or cutting machine is an investment for decades. Here is why press owners consistently choose SE Enterprises.
          </p>
        </div>

        {/* 6 Core Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/10 group-hover:border-amber-500/40 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
                      {reason.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-amber-300 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-2.5 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>SE Enterprises Standard Assurance</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authentic Business Card Reference Highlight */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="h-16 px-3 py-1.5 rounded-2xl bg-white flex items-center justify-center shadow-md shrink-0">
              <img src="/logo.jpg" alt="SE Enterprises Logo" className="h-full w-auto object-contain" />
            </div>
            <div>
              <div className="text-xs text-amber-400 font-semibold tracking-wide uppercase">
                Authentic Dealer Provenance
              </div>
              <h4 className="text-lg sm:text-xl font-heading font-bold text-white">
                Official Visiting Card Reference & Contact Info
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                P. Jayakumar • Phone: 9246770309 • Autonagar, Vijayawada - 520 007
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCardPreview}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 text-xs sm:text-sm font-bold transition-all flex items-center gap-2"
            >
              <span>View Business Card Ref</span>
            </button>
            <a
              href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20P.%20Jayakumar%20sir,%20I%20saw%20your%20business%20card%20details%20and%20want%20to%20consult%20on%20machinery.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all"
            >
              Connect on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
