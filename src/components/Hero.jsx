import React from 'react';
import { ShieldCheck, Phone, MessageSquare, ChevronRight, Award, CheckCircle2, Cog, Wrench, Sparkles, Eye } from 'lucide-react';
import { BUSINESS_INFO } from '../data/machineryData';

export default function Hero({ onOpenQuoteModal, onOpenCardPreview }) {
  const trustPoints = [
    'Official Printech Machineries Distributor',
    'Full Sales & On-Site Servicing in AP & Telangana',
    'Immediate Spares & Blade Replacements in Vijayawada',
    'Tested & Certified Machinery with Commissioning Support'
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 -left-20 w-[450px] h-[350px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Distributor Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-red-500/40 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                Authorized Distributor
              </span>
              <span className="text-slate-500 text-xs">•</span>
              <span className="text-xs font-semibold text-amber-300">
                Andhra Pradesh & Telangana
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white leading-[1.15]">
              Heavy-Duty <br className="hidden sm:inline" />
              <span className="text-red-gradient">Offset Printing</span> & <br />
              <span className="text-metallic">Post-Press Machineries</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              Official sales, turnkey commissioning, and certified servicing for <strong className="text-white font-semibold">Printech Machineries</strong>. 
              Supplying high-speed Multi-Colour Offset presses, Digital Programme Paper Cutters, Auto Numbering, Folding, and Creasing systems across South India.
            </p>

            {/* Bullet Trust Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href="#catalog"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-red to-red-700 hover:from-red-500 hover:to-brand-red text-white font-bold text-base shadow-glow-red transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Machineries</span>
                <ChevronRight className="w-5 h-5" />
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/60 text-white font-semibold text-base transition-all"
              >
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Instant Cost Estimate</span>
              </button>

              <a
                href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20P.%20Jayakumar%20sir,%20I%20am%20looking%20for%20a%20printing%20machine%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 hover:text-emerald-300 font-semibold text-base transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

            {/* Proprietor Quick Contact Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-slate-800/80 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-bold">
                  PJ
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Direct Dealer Contact</div>
                  <div className="font-heading font-bold text-white text-base">
                    {BUSINESS_INFO.proprietor} <span className="text-amber-400 font-normal">({BUSINESS_INFO.phoneDisplay})</span>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-slate-800"></div>
              <div className="text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Hub:</span> Autonagar, Vijayawada - 520 007
              </div>
            </div>

          </div>

          {/* Right Column: Visual Machinery Display & Reference Badge */}
          <div className="lg:col-span-5 relative">
            {/* Card Preview Container */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-2xl p-4 sm:p-6 backdrop-blur-xl group">
              
              {/* Card Header Badge */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 px-2 py-0.5 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <img src="/logo.jpg" alt="SE Enterprises Logo" className="h-full w-auto object-contain" />
                  </div>
                  <span className="text-xs text-slate-300 font-semibold">Machinery Portfolio</span>
                </div>
                <button
                  onClick={onOpenCardPreview}
                  className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold transition-colors bg-amber-950/40 px-2.5 py-1 rounded border border-amber-500/30"
                  title="View original visiting card reference"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Visiting Card Ref</span>
                </button>
              </div>

              {/* Machinery Collage / Highlights Preview */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {/* Machine 1: Multi-colour offset */}
                <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group/item hover:border-red-500/50 transition-all p-2 text-left">
                  <div className="h-28 overflow-hidden rounded-lg mb-2">
                    <img
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
                      alt="Multi Colour Offset"
                      className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-xs font-bold text-white truncate">Multi Colour Offset</div>
                  <div className="text-[10px] text-red-400">High-Speed Commercial</div>
                </div>

                {/* Machine 2: Programme Cutting */}
                <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group/item hover:border-red-500/50 transition-all p-2 text-left">
                  <div className="h-28 overflow-hidden rounded-lg mb-2">
                    <img
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
                      alt="Programme Cutting Machine"
                      className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-xs font-bold text-white truncate">Programme Cutting</div>
                  <div className="text-[10px] text-emerald-400">Digital Touchscreen</div>
                </div>

                {/* Machine 3: Sticker Creasing */}
                <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group/item hover:border-red-500/50 transition-all p-2 text-left">
                  <div className="h-28 overflow-hidden rounded-lg mb-2">
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                      alt="Sticker Creasing & Scoring"
                      className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-xs font-bold text-white truncate">Sticker Creasing</div>
                  <div className="text-[10px] text-amber-400">Perforation & Scoring</div>
                </div>

                {/* Machine 4: Auto Numbering & Barcode */}
                <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group/item hover:border-red-500/50 transition-all p-2 text-left">
                  <div className="h-28 overflow-hidden rounded-lg mb-2">
                    <img
                      src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80"
                      alt="Auto Numbering & Barcode Machine"
                      className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-xs font-bold text-white truncate">Auto Numbering</div>
                  <div className="text-[10px] text-blue-400">Barcode & Security</div>
                </div>
              </div>

              {/* Service guarantee highlight */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-red-950/40 via-slate-900 to-amber-950/30 border border-red-900/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-600/20 text-brand-red">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white">Full Servicing & Genuine Spares</div>
                    <div className="text-[11px] text-slate-400">Vijayawada central hub + rapid regional engineers</div>
                  </div>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-3 py-1.5 rounded-lg bg-brand-red hover:bg-red-700 text-white font-bold text-xs shadow-sm transition-colors"
                >
                  Call Now
                </a>
              </div>

              {/* Floating verified badge */}
              <div className="absolute -bottom-4 -right-4 bg-slate-950 border border-amber-500/60 shadow-xl rounded-xl p-3 flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Printech Authorized</div>
                  <div className="text-[10px] text-amber-300">AP & Telangana Sales Partner</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Trust Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
            <div className="text-3xl sm:text-4xl font-black font-heading text-red-500">{BUSINESS_INFO.experienceYears}</div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Years in Printing Trade</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Trusted since 1998</div>
          </div>
          
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
            <div className="text-3xl sm:text-4xl font-black font-heading text-amber-400">{BUSINESS_INFO.installationsCount}</div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Machines Installed</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Across AP & Telangana</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
            <div className="text-3xl sm:text-4xl font-black font-heading text-emerald-400">100%</div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Genuine Printech Spares</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Ready stock in Vijayawada</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
            <div className="text-3xl sm:text-4xl font-black font-heading text-blue-400">24/7</div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Technical Support</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Rapid breakdown assistance</div>
          </div>
        </div>

      </div>
    </section>
  );
}
