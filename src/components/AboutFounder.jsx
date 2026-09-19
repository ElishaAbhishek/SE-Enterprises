import React from 'react';
import { Star, Quote, Award, ShieldCheck, MapPin, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, TESTIMONIALS } from '../data/machineryData';

export default function AboutFounder({ onOpenCardPreview }) {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#070B14] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Founder Spotlight Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-700/80 p-8 sm:p-12 shadow-2xl overflow-hidden mb-20">
          
          {/* Background decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Founder Signature & Identity */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/50 text-amber-300 text-xs font-bold uppercase tracking-wider">
                Founder & Proprietor
              </div>

              {/* Gold script name matching the card */}
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-script text-gold-gradient tracking-wide py-1">
                  P. Jayakumar
                </div>
                <div className="text-sm font-semibold text-slate-400">
                  Dealer & Technical Consultant • SE ENTERPRISES
                </div>
              </div>

              {/* Direct phone badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white font-mono font-bold text-lg text-amber-400">
                <Phone className="w-5 h-5 text-brand-red animate-pulse" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </div>

              <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-400">
                <span className="flex items-center justify-center lg:justify-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-red" />
                  74-15-8/10, Vinayaka Apts, JD Towers Rd, Autonagar, Vijayawada - 520 007
                </span>
                <span className="flex items-center justify-center lg:justify-start gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  Authorized Printech Machineries Distributor (AP & TS)
                </span>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenCardPreview}
                  className="px-4 py-2 rounded-lg bg-amber-950/40 hover:bg-amber-900/40 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                >
                  View Original Reference Card
                </button>
              </div>
            </div>

            {/* Right: Message & Commitment */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="relative">
                <Quote className="w-12 h-12 text-slate-800 absolute -top-5 -left-4 -z-10 opacity-50" />
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-relaxed">
                  "In the printing machinery business, trust is built through prompt on-site service, accurate engineering advice, and genuine spares."
                </h3>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                For more than two and a half decades, SE Enterprises has been rooted in <strong className="text-white">Autonagar, Vijayawada</strong> — the hub connecting printers from Visakhapatnam to Hyderabad, Tirupati, and Warangal. 
              </p>

              <p className="text-slate-300 text-base leading-relaxed">
                Whether you need an automated <strong className="text-white">Multi-Colour Offset press</strong>, a microprocessor <strong className="text-white">Programme Cutting Machine</strong> with German hydraulics, or dedicated <strong className="text-white">Auto Numbering and Sticker Creasing units</strong>, my personal pledge is straightforward: we deliver machinery that maximizes your daily output, backed by reliable 24/7 technical assistance.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20P.%20Jayakumar%20sir,%20I%20would%20like%20to%20discuss%20machinery%20options%20for%20my%20press.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp with Jayakumar Sir</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-red" />
                  <span>Call 9246770309</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Customer Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider">
            Verified Press Owner Reviews
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white">
            What Commercial Printers Say Across AP & Telangana
          </h3>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between text-left space-y-4 shadow-card-dark"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="font-bold text-white text-sm">{t.name}</div>
                <div className="text-xs text-red-400 font-semibold">{t.company}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{t.city} • Machine: {t.machine}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
