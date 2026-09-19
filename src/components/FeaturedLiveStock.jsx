import React, { useState } from 'react';
import { Sparkles, Check, Phone, MessageSquare, ShieldCheck, ChevronLeft, ChevronRight, Eye, Calendar, Gauge, Cpu, Award } from 'lucide-react';
import { FEATURED_STOCK_MACHINE, BUSINESS_INFO } from '../data/machineryData';

export default function FeaturedLiveStock({ onSelectMachine }) {
  const machine = FEATURED_STOCK_MACHINE;
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const whatsappMessage = `*INQUIRY: FOR SALE - OLIVER SAKURAI 66EZ (YEAR 2012)*
---------------------------------------
Hello P. Jayakumar sir,
I am interested in the *Oliver Sakurai 66EZ* offset machine currently in ready stock in Vijayawada:
- Year: 2012
- Size: 19 x 26 inch
- Alcohol / Sakuraimatic Dampening
- All Chromed Cylinders
- Pneumatic Air System & Low Pile Delivery
- Powder Sprayer & All Standard Accessories

Please send me:
1. Selling Price / Quotation
2. Video of the machine running
3. Visiting / trial inspection schedule in Autonagar, Vijayawada.
---------------------------------------`;

  const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(whatsappMessage)}`;

  const nextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % machine.gallery.length);
  };

  const prevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + machine.gallery.length) % machine.gallery.length);
  };

  return (
    <section id="featured-stock" className="py-16 md:py-24 bg-gradient-to-b from-[#070B14] via-[#0B132B] to-[#090F1E] border-t border-b border-red-500/30 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Urgent Live Stock Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-black uppercase tracking-wider shadow-glow-red">
              FOR SALE • READY STOCK IN VIJAYAWADA
            </span>
            <span className="text-xs font-semibold text-amber-300 hidden sm:inline">
              ★ Direct Import from Japan
            </span>
          </div>

          <div className="text-xs text-slate-300 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Tested & Calibrated by P. Jayakumar</span>
          </div>
        </div>

        {/* 2-Column Machine Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive 5-Photo Gallery */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Main Active Photo Container */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-700 shadow-2xl h-80 sm:h-[420px] group">
              <img
                src={machine.gallery[activePhotoIndex]}
                alt={`Oliver Sakurai 66EZ - Photo ${activePhotoIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {/* Badges on image */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                  Year 2012
                </span>
                <span className="px-3 py-1 rounded-lg bg-amber-500/90 backdrop-blur-md text-slate-950 text-xs font-extrabold shadow-sm">
                  Size: 19 x 26 inch
                </span>
              </div>

              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-lg bg-red-600/90 backdrop-blur-md text-white text-xs font-bold shadow-md">
                  Photo {activePhotoIndex + 1} of {machine.gallery.length}
                </span>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md transition-all group-hover:scale-110"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md transition-all group-hover:scale-110"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute bottom-3 left-4 right-4 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] text-slate-300 font-medium">
                  Actual Machine Photos taken in Vijayawada Facility
                </span>
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="grid grid-cols-5 gap-2">
              {machine.gallery.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`relative rounded-xl overflow-hidden h-16 sm:h-20 border-2 transition-all ${
                    activePhotoIndex === idx
                      ? 'border-brand-red scale-105 shadow-glow-red'
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={photo}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Machine Description, Specs & Action CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/50 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Machine for Sale
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white leading-tight">
                Oliver Sakurai <span className="text-red-gradient">66EZ</span>
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Imported directly from Japan. High-demand 19x26 sheetfed offset press with authentic <strong className="text-white">Sakuraimatic alcohol dampening</strong>, all chromed cylinders in immaculate state, and complete standard accessories.
              </p>
            </div>

            {/* Core Specs Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-slate-400 block font-medium">Model & Year</span>
                <span className="font-bold text-white text-sm">Oliver Sakurai 66EZ (2012)</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-slate-400 block font-medium">Sheet Size</span>
                <span className="font-bold text-white text-sm">19 x 26 inch</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-slate-400 block font-medium">Dampening System</span>
                <span className="font-bold text-amber-300 text-sm">Sakuraimatic Alcohol Dampening</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-slate-400 block font-medium">Cylinders Condition</span>
                <span className="font-bold text-emerald-400 text-sm">All Chromed Cylinders (Mint)</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-slate-400 block font-medium">Air & Delivery</span>
                <span className="font-bold text-white text-sm">Pneumatic Air / Low Pile</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-slate-400 block font-medium">Gears & Mechanicals</span>
                <span className="font-bold text-emerald-400 text-sm">Zero Damage • 100% Tested</span>
              </div>
            </div>

            {/* Highlights List */}
            <div className="space-y-2 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Powder sprayer unit included for rapid ink set and prevent set-off</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>All standard factory accessories and toolkits complete</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Location: Autonagar, Vijayawada — Ready for immediate live print test</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Inquire Price & Video via WhatsApp</span>
              </a>

              <button
                onClick={() => onSelectMachine(machine)}
                className="py-3.5 px-5 rounded-xl bg-brand-red hover:bg-red-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-glow-red transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>Full Specs Sheet</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                title="Call P. Jayakumar"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
