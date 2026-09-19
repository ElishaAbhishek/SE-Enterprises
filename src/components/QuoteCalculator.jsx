import React, { useState } from 'react';
import { X, Send, MessageSquare, Phone, CheckCircle2, Calculator, Sparkles, Building2, User, MapPin } from 'lucide-react';
import { MACHINERY_CATALOG, REGIONS_SERVED, BUSINESS_INFO } from '../data/machineryData';

export default function QuoteCalculator({ isOpen, onClose, initialMachine }) {
  const [selectedMachineId, setSelectedMachineId] = useState(
    initialMachine ? initialMachine.id : MACHINERY_CATALOG[0].id
  );
  const [condition, setCondition] = useState('brand-new');
  const [powerPhase, setPowerPhase] = useState('3-phase');
  const [buyerName, setBuyerName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Vijayawada');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentMachine = MACHINERY_CATALOG.find((m) => m.id === selectedMachineId) || MACHINERY_CATALOG[0];

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    const message = `*NEW MACHINERY INQUIRY - SE ENTERPRISES*
---------------------------------------
*Machine:* ${currentMachine.name}
*Condition Preferred:* ${condition === 'brand-new' ? 'Brand New (Printech)' : 'Certified Reconditioned/Refurbished'}
*Power Supply:* ${powerPhase === '3-phase' ? '3-Phase 415V' : 'Single Phase 220V'}
---------------------------------------
*Client Name:* ${buyerName || 'Printing Press Owner'}
*Press / Business:* ${businessName || 'Commercial Press'}
*Location / City:* ${city}
*Phone / WhatsApp:* ${phone || 'Not provided'}
*Special Notes:* ${notes || 'Looking for best pricing, delivery time and commissioning details.'}
---------------------------------------
_Sent via SE Enterprises Official Dealer Portal_`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/91${BUSINESS_INFO.phone}?text=${encoded}`;
    
    setIsSubmitted(true);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 text-left">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-red-600/20 text-brand-red">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-lg sm:text-xl">
                Machinery Quotation & Cost Estimator
              </h3>
              <p className="text-xs text-slate-400">Direct response from P. Jayakumar within 30 minutes</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleWhatsAppSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Step 1: Select Machine */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              1. Select Machinery Model
            </label>
            <select
              value={selectedMachineId}
              onChange={(e) => setSelectedMachineId(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm font-semibold focus:outline-none focus:border-brand-red transition-all"
            >
              {MACHINERY_CATALOG.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name} ({m.badge})
                </option>
              ))}
            </select>
          </div>

          {/* Machine preview pill */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-400">Selected: </span>
              <span className="font-bold text-white">{currentMachine.name}</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-red-950 text-red-300 font-bold border border-red-800/50">
              {currentMachine.badge}
            </span>
          </div>

          {/* Step 2: Machine Condition & Phase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                2. Condition Preference
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCondition('brand-new')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                    condition === 'brand-new'
                      ? 'bg-brand-red text-white border-brand-red shadow-sm'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  Brand New (Printech)
                </button>
                <button
                  type="button"
                  onClick={() => setCondition('refurbished')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                    condition === 'refurbished'
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  Reconditioned
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                3. Electrical Supply
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPowerPhase('3-phase')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                    powerPhase === '3-phase'
                      ? 'bg-slate-800 text-white border-slate-600'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  3-Phase (415V)
                </button>
                <button
                  type="button"
                  onClick={() => setPowerPhase('1-phase')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                    powerPhase === '1-phase'
                      ? 'bg-slate-800 text-white border-slate-600'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  Single Phase (220V)
                </button>
              </div>
            </div>
          </div>

          {/* Step 3: Contact details */}
          <div className="space-y-4 pt-2 border-t border-slate-800">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              4. Your Press & Contact Information
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 mb-1 block">Your Name / Proprietor</label>
                <input
                  type="text"
                  required
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-red"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 mb-1 block">Press / Company Name</label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Sri Balaji Prints"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-red"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 mb-1 block">WhatsApp / Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-red"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 mb-1 block">City / Town in AP/Telangana</label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Vijayawada, Hyderabad, Guntur"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-red"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-400 mb-1 block">Additional Requirements / Questions (Optional)</label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention target paper size, monthly volume, or existing machinery exchange..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-red"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Send Quotation Request via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="py-3.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>Direct Call</span>
            </a>
          </div>

          {isSubmitted && (
            <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Your quotation request is opened in WhatsApp! P. Jayakumar will reply with technical catalog & price sheet promptly.</span>
            </div>
          )}

        </form>
      </div>
    </div>
  );
}
