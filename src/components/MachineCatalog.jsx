import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, MessageSquare, Phone, ExternalLink, Check, Info, Sparkles, ArrowRight } from 'lucide-react';
import { MACHINERY_CATALOG, MACHINERY_CATEGORIES, BUSINESS_INFO } from '../data/machineryData';

export default function MachineCatalog({ onSelectMachine, onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMachines = useMemo(() => {
    return MACHINERY_CATALOG.filter((machine) => {
      const matchesCategory = activeCategory === 'all' || machine.category === activeCategory;
      const matchesSearch = 
        machine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        machine.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        machine.applications.some(app => app.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="catalog" className="py-20 md:py-28 bg-[#090F1E] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/50 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Complete Industrial Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Printech Machinery <span className="text-red-gradient">Catalog</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Explore our comprehensive range of multi-colour offset presses, digital programme cutters, auto numbering, and packaging finishing equipment distributed across AP & Telangana.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-6 mb-12">
          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by machine name, function (e.g. cutting, folding, numbering)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-red-500/20 text-sm shadow-inner transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {MACHINERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-brand-red text-white shadow-glow-red scale-105'
                    : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Machinery Grid */}
        {filteredMachines.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMachines.map((machine) => {
              const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20P.%20Jayakumar%20sir,%20I%20am%20interested%20in%20the%20${encodeURIComponent(machine.name)}%20from%20SE%20Enterprises.%20Please%20provide%20pricing%20and%20technical%20details.`;

              return (
                <div
                  key={machine.id}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-red-500/40 transition-all duration-300 flex flex-col overflow-hidden group shadow-card-dark hover:shadow-2xl hover:-translate-y-1.5"
                >
                  {/* Image Container with Badge */}
                  <div className="relative h-56 overflow-hidden bg-slate-950">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-600/90 text-white backdrop-blur-md shadow-md">
                        {machine.badge}
                      </span>
                    </div>

                    {/* Quick Specs Overlay Trigger */}
                    <button
                      onClick={() => onSelectMachine(machine)}
                      className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md transition-colors"
                    >
                      <Info className="w-3.5 h-3.5 text-amber-400" />
                      <span>Full Specs</span>
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                        {machine.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {machine.tagline}
                      </p>

                      {/* Highlights */}
                      <div className="mt-4 space-y-2">
                        {machine.highlights.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Key Specs Pills */}
                      <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[11px]">
                        <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                          <span className="text-slate-500 block">Speed</span>
                          <span className="font-semibold text-slate-200 truncate block">
                            {machine.specs['Printing Speed'] || machine.specs['Cutting Speed'] || machine.specs['Folding Speed'] || machine.specs['Speed'] || machine.specs['Feeding Speed'] || 'High Performance'}
                          </span>
                        </div>
                        <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                          <span className="text-slate-500 block">Support</span>
                          <span className="font-semibold text-emerald-400 truncate block">AP & TS On-Site</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-2 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectMachine(machine)}
                        className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
                      >
                        <span>Specifications</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Price Quote</span>
                      </a>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-lg">No machines found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-brand-red text-white text-sm font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Custom inquiry strip */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-red-950/40 via-slate-900 to-amber-950/30 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-heading font-bold text-white">
              Looking for a Specific Model, Size, or Custom Machine Configuration?
            </h4>
            <p className="text-slate-400 text-sm mt-1">
              P. Jayakumar provides direct sourcing, machinery import, and custom factory inspection across Vijayawada, Hyderabad & South India.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold border border-slate-700 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>Call Dealer</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-3 rounded-xl bg-brand-red hover:bg-red-700 text-white text-sm font-bold shadow-glow-red"
            >
              Request Custom Quote
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
