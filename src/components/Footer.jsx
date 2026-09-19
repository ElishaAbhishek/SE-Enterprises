import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Award, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, MACHINERY_CATALOG } from '../data/machineryData';

export default function Footer({ onOpenQuoteModal, onOpenCardPreview }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050810] border-t border-slate-800 text-slate-400 text-sm">
      {/* Top Banner */}
      <div className="border-b border-slate-800/80 py-10 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-white">
              Ready to Upgrade or Service Your Printing Machineries?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Direct consultations, factory-backed distributor pricing, and prompt technician dispatch in AP & Telangana.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 border border-slate-700"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 rounded-xl bg-brand-red hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-glow-red"
            >
              Get Machine Quote
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 px-2.5 py-1 rounded-xl bg-white flex items-center justify-center shadow-md shrink-0">
                <img src="/logo.jpg" alt="SE Enterprises Logo" className="h-full w-auto object-contain" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white block">
                  SE ENTERPRISES
                </span>
                <span className="text-xs font-semibold text-red-500">
                  Printech machineries
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Authorized Andhra Pradesh & Telangana Distributor for Printech Machineries. Supplying heavy-duty Multi-Colour Offset Presses, Digital Programme Paper Cutters, Baby Offset, Folding Machines, Sticker Creasing, and Auto Numbering equipment with comprehensive sales and 24/7 servicing.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/40 text-blue-300 text-xs font-bold">
                <Award className="w-3.5 h-3.5" />
                AP, TELANGANA Distributor
              </span>
            </div>
          </div>

          {/* Column 2: Machinery Lines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Machineries
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#catalog" className="hover:text-white transition-colors">Multi Colour Offset</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Programme Cutting Machine</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Baby Offset Machine</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Paper Folding Machine</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Sticker Creasing & Scoring</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Auto Numbering & Barcode</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Pre-Owned Certified Presses</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#catalog" className="hover:text-white transition-colors">Machine Catalog</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Sales & Servicing</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Proprietor Jayakumar Sir</a></li>
              <li><a href="#network" className="hover:text-white transition-colors">AP & Telangana Network</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Location Map</a></li>
              <li>
                <button
                  onClick={onOpenCardPreview}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Visiting Card Reference
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Headquarters
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>74-15-8/10, Vinayaka Apts, JD Towers Rd, Autonagar, Vijayawada - 520 007</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white font-bold font-mono">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} SE ENTERPRISES • Proprietor: P. Jayakumar. All rights reserved. Printech Machineries Authorized AP & Telangana Distributor.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5"
            title="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
