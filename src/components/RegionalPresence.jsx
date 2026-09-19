import React from 'react';
import { MapPin, Navigation, Clock, Truck, ShieldCheck, Check } from 'lucide-react';
import { REGIONS_SERVED, BUSINESS_INFO } from '../data/machineryData';

export default function RegionalPresence({ onOpenQuoteModal }) {
  return (
    <section id="network" className="py-20 md:py-28 bg-[#090F1E] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/70 border border-red-800/50 text-red-400 text-xs font-bold uppercase tracking-wider">
            Distributor Territory Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Serving Every District Across <br className="hidden sm:inline" />
            <span className="text-red-gradient">Andhra Pradesh & Telangana</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            From our strategic headquarters in <strong className="text-white">Autonagar, Vijayawada</strong>, we provide seamless transport, unloading, precision foundation, and rapid technician dispatch across South India.
          </p>
        </div>

        {/* Two States Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {REGIONS_SERVED.map((region, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-red-500/40 transition-all text-left shadow-card-dark"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-brand-red font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">
                      {region.state}
                    </h3>
                    <span className="text-xs text-amber-400 font-semibold">
                      Full Sales, Delivery & Service Territory
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold">
                  {region.cities.length} Key Hubs
                </span>
              </div>

              {/* Cities Badges */}
              <div className="flex flex-wrap gap-2">
                {region.cities.map((city, cityIdx) => (
                  <span
                    key={cityIdx}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      city.includes('(HQ)')
                        ? 'bg-red-600 text-white shadow-glow-red'
                        : 'bg-slate-950 text-slate-300 border border-slate-800/80 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${city.includes('(HQ)') ? 'bg-white' : 'bg-red-400'}`}></span>
                    {city}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-emerald-400" />
                  Direct Factory Crating & Transport
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  24-Hr Service Window
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Logistics Commitment Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-red-950/40 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1 max-w-xl">
            <h4 className="text-lg font-heading font-bold text-white flex items-center gap-2">
              <Navigation className="w-5 h-5 text-brand-red" />
              <span>Need Machinery Delivered or Serviced in Your District?</span>
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We handle end-to-end heavy crane unloading, leveling, foundation bolts, 3-phase wiring, and trial test prints in any town across AP and Telangana.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 rounded-xl bg-brand-red hover:bg-red-700 text-white font-bold text-sm shadow-glow-red shrink-0 transition-all"
          >
            Check Delivery to Your City
          </button>
        </div>

      </div>
    </section>
  );
}
