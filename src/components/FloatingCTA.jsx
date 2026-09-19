import React from 'react';
import { Phone, MessageSquare, Calculator } from 'lucide-react';
import { BUSINESS_INFO } from '../data/machineryData';

export default function FloatingCTA({ onOpenQuoteModal }) {
  return (
    <>
      {/* Desktop Floating WhatsApp Bubble */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        <a
          href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20P.%20Jayakumar%20sir,%20I%20am%20interested%20in%20machineries%20from%20SE%20Enterprises.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/70 border border-emerald-400/30 transition-all transform hover:scale-105"
        >
          <div className="flex flex-col text-right">
            <span className="text-[10px] uppercase font-bold text-emerald-200">Chat with Jayakumar Sir</span>
            <span className="text-xs font-extrabold">WhatsApp Online</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white relative">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 absolute top-0 right-0 animate-ping"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 absolute top-0 right-0"></span>
            <MessageSquare className="w-5 h-5" />
          </div>
        </a>
      </div>

      {/* Mobile Bottom Fixed Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0f1d]/95 backdrop-blur-md border-t border-slate-800 p-2 shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 py-3 px-2 rounded-xl bg-slate-800 border border-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-brand-red" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20P.%20Jayakumar%20sir,%20I%20want%20to%20inquire%20about%20machinery.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-2 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-md shadow-emerald-950/60"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenQuoteModal}
          className="flex-1 py-3 px-2 rounded-xl bg-brand-red text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-glow-red"
        >
          <Calculator className="w-4 h-4" />
          <span>Get Quote</span>
        </button>
      </div>
    </>
  );
}
