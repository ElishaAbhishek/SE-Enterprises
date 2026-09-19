import React from 'react';
import { Printer, Wrench, ShieldCheck, Cpu, PackageCheck, GraduationCap, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/machineryData';

const iconMap = {
  Printer: Printer,
  Wrench: Wrench,
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
  PackageCheck: PackageCheck,
  GraduationCap: GraduationCap
};

export default function ServicesSection({ onOpenQuoteModal }) {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#070B14] relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-blue-300 text-xs font-bold uppercase tracking-wider">
            Comprehensive After-Sales Support
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Sales, AMC & <span className="text-red-gradient">Machinery Servicing</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We don't just supply machineries — we provide complete engineering lifecycle support. From precision factory installation to emergency on-site troubleshooting across Andhra Pradesh & Telangana.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Wrench;
            return (
              <div
                key={index}
                className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-red-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-red-950/20 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-slate-800 border border-red-500/30 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:text-red-400 transition-all mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    AP & TS Coverage
                  </span>
                  <a
                    href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20P.%20Jayakumar%20sir,%20I%20am%20inquiring%20about%20your%20service:%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-bold transition-colors"
                  >
                    Inquire Service &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Service Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-red-950/70 via-slate-900 to-slate-950 border border-red-800/60 p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-600 text-white">
              24-Hour Emergency Breakdown Support
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Machine Breakdown in your Press? Call Jayakumar Sir Directly.
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Every hour your offset press or cutting line is idle means lost revenue. Our seasoned mechanical and electrical service technicians can be dispatched rapidly to your press anywhere in Andhra Pradesh or Telangana.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-red hover:bg-red-700 text-white font-bold text-sm shadow-glow-red transition-all"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Call Hotline: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm transition-all"
            >
              <span>Book AMC / Service Visit</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
