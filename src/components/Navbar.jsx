import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ShieldCheck, MapPin, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/machineryData';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Machinery Catalog', href: '#catalog' },
    { name: 'Sales & Services', href: '#services' },
    { name: 'Why SE Enterprises', href: '#why-us' },
    { name: 'About Jayakumar Sir', href: '#about' },
    { name: 'AP & Telangana Network', href: '#network' },
    { name: 'Contact & Address', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#070B14]/95 backdrop-blur-md border-b border-slate-800 shadow-2xl py-2.5' 
        : 'bg-gradient-to-b from-[#070B14] via-[#070B14]/80 to-transparent py-4'
    }`}>
      {/* Top micro bar for quick reference */}
      <div className="hidden lg:block border-b border-slate-800/60 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-slate-400">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2"></span>
              Official AP & Telangana Distributor - Printech Machineries
            </span>
            <span className="flex items-center text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-brand-red mr-1" />
              Autonagar, Vijayawada - 520 007
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-300 font-medium">
              Proprietor: <span className="text-amber-400 font-semibold">{BUSINESS_INFO.proprietor}</span>
            </span>
            <span className="text-slate-500">|</span>
            <a 
              href={`mailto:${BUSINESS_INFO.email}`} 
              className="hover:text-amber-300 transition-colors"
            >
              {BUSINESS_INFO.email}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="h-11 sm:h-12 px-2 py-1 rounded-xl bg-white flex items-center justify-center shadow-md border border-white/20 group-hover:scale-105 transition-transform overflow-hidden shrink-0">
              <img src="/logo.jpg" alt="SE Enterprises Logo" className="h-full w-auto object-contain" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-red-400 transition-colors">
                  SE ENTERPRISES
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-red-500">
                  Printech machineries
                </span>
                <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-950/80 text-blue-300 border border-blue-600/40 rounded-full">
                  AP & TS Distributor
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:text-brand-red transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-200 text-sm font-semibold hover:border-red-500 hover:text-white transition-all shadow-sm"
              title="Call P. Jayakumar"
            >
              <Phone className="w-4 h-4 text-brand-red animate-pulse" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20P.%20Jayakumar%20sir,%20I%20am%20interested%20in%20machinery%20from%20SE%20Enterprises.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow-lg shadow-emerald-950/50 hover:shadow-emerald-700/40 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-brand-red to-red-700 hover:from-red-500 hover:to-brand-red text-white text-sm font-bold shadow-glow-red transition-all transform hover:-translate-y-0.5"
            >
              <span>Get Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="p-2 rounded-lg bg-slate-800 text-brand-red border border-slate-700"
              aria-label="Call"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs space-y-1 mb-2">
            <div className="text-amber-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Authorized AP & Telangana Distributor
            </div>
            <div className="text-slate-300">Proprietor: P. Jayakumar ({BUSINESS_INFO.phone})</div>
            <div className="text-slate-400">74-15-8/10, Vinayaka Apts, Autonagar, Vijayawada - 520 007</div>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800/80 hover:text-brand-red transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-800 border border-slate-700 text-white font-medium text-sm text-center"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              Call Dealer
            </a>
            <a
              href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20P.%20Jayakumar%20sir,%20I%20am%20interested%20in%20machinery.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 text-white font-semibold text-sm text-center"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuoteModal();
            }}
            className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-brand-red to-red-700 text-white font-bold text-sm text-center shadow-glow-red mt-2"
          >
            Instant Machinery Quote
          </button>
        </div>
      )}
    </header>
  );
}
