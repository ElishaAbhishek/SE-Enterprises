import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/machineryData';

export default function ContactSection({ onOpenCardPreview }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pressName: '',
    city: '',
    machineNeeded: 'Multi Colour Offset',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedMessage = `*DIRECT CONTACT INQUIRY - SE ENTERPRISES*
Name: ${formData.name}
Press Name: ${formData.pressName || 'N/A'}
Phone: ${formData.phone}
City: ${formData.city}
Machine Interested: ${formData.machineNeeded}
Message: ${formData.message || 'Please provide quotation and catalog.'}
---------------------------------------
Proprietor: P. Jayakumar (9246770309)
Address: 74-15-8/10, Plot No. 10, Vinayaka Apartments, JD Towers Road, Autonagar, Vijayawada Pin code: 520007`;

    const url = `https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(formattedMessage)}`;
    setSubmitted(true);
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#070B14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/70 border border-red-800/50 text-red-400 text-xs font-bold uppercase tracking-wider">
            Direct Dealer Connect
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Contact <span className="text-red-gradient">SE Enterprises</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Have a question about machinery prices, technical specifications, or immediate servicing? Reach out directly to P. Jayakumar.
          </p>
        </div>

        {/* 2-Column Contact Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Contact Cards */}
          <div className="lg:col-span-5 space-y-5 text-left">
            
            {/* Direct Phone Card */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-red-500/50 transition-all flex items-start gap-4 group shadow-card-dark block"
            >
              <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-brand-red shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 animate-pulse" />
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Direct Call / Helpline</div>
                <div className="text-xl font-heading font-bold text-white group-hover:text-red-400 transition-colors">
                  {BUSINESS_INFO.phoneDisplay}
                </div>
                <div className="text-xs text-slate-400">
                  Proprietor: <strong className="text-amber-400">{BUSINESS_INFO.proprietor}</strong>
                </div>
              </div>
            </a>

            {/* Direct WhatsApp Card */}
            <a
              href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20P.%20Jayakumar%20sir,%20I%20am%20contacting%20you%20from%20SE%20Enterprises%20website.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all flex items-start gap-4 group shadow-card-dark block"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">WhatsApp Instant Inquiry</div>
                <div className="text-xl font-heading font-bold text-white group-hover:text-emerald-400 transition-colors">
                  +91 {BUSINESS_INFO.phone}
                </div>
                <div className="text-xs text-emerald-400 font-medium">
                  Instant price quotes, machine videos & PDF spec sheets
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition-all flex items-start gap-4 group shadow-card-dark block"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Official Email Address</div>
                <div className="text-base sm:text-lg font-heading font-bold text-white break-all group-hover:text-blue-300 transition-colors">
                  {BUSINESS_INFO.email}
                </div>
                <div className="text-xs text-slate-400">
                  For corporate bids, institutional tenders & formal quotation letters
                </div>
              </div>
            </a>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4 shadow-card-dark">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-left">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Vijayawada Headquarters</div>
                <div className="text-base font-heading font-bold text-white">
                  74-15-8/10, Plot No 10, Vinayaka Apartments
                </div>
                <div className="text-xs text-slate-300">
                  JD Towers Road, Autonagar, Vijayawada — Pin: 520007
                </div>
                <div className="text-xs text-slate-500">
                  Andhra Pradesh, India • Central Spares & Machinery Hub
                </div>
                <div className="pt-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=74-15-8%2F10+Vinayaka+Apartments+Jd+towers+road+Autonagar+Vijayawada+520007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-bold"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Reference Visiting Card Quick View Button */}
            <button
              onClick={onOpenCardPreview}
              className="w-full py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition-all"
            >
              <span>View Original Reference Card (Image)</span>
            </button>

          </div>

          {/* Right Column: Direct Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-left">
            <div className="space-y-2 mb-6 border-b border-slate-800 pb-4">
              <h3 className="text-2xl font-heading font-bold text-white">
                Send Direct Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Fill out this quick form to send your machine requirements directly to P. Jayakumar.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-red"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9848012345"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-red"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">
                    Printing Press / Business Name
                  </label>
                  <input
                    type="text"
                    value={formData.pressName}
                    onChange={(e) => setFormData({ ...formData, pressName: e.target.value })}
                    placeholder="e.g. Royal Offset Printers"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-red"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Vijayawada, Hyderabad"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-red"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">
                  Machine You Are Interested In
                </label>
                <select
                  value={formData.machineNeeded}
                  onChange={(e) => setFormData({ ...formData, machineNeeded: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-red"
                >
                  <option value="Multi Colour Offset">Multi Colour Offset Printing Machine</option>
                  <option value="Programme Cutting Machine">Digital Programme Hydraulic Cutting Machine</option>
                  <option value="Baby Offset">Baby Offset Single / Two-Colour Machine</option>
                  <option value="Paper Folding Machine">High-Speed Paper Folding Machine</option>
                  <option value="Sticker Creasing & Scoring">Sticker Creasing, Micro Perforation & Scoring</option>
                  <option value="Auto Numbering & Barcode">Auto Numbering & Barcode Machine</option>
                  <option value="Offset Servicing / AMC">Offset Machine Servicing / AMC Contract</option>
                  <option value="Certified Refurbished Machine">Pre-Owned / Reconditioned Machine</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">
                  Specific Requirements or Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention desired paper size, budget range, delivery location, or existing machine to exchange..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-red"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-brand-red hover:bg-red-700 text-white font-bold text-base shadow-glow-red flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Inquiry via WhatsApp to Jayakumar Sir</span>
                </button>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Inquiry sent to WhatsApp! P. Jayakumar will contact you shortly with full machinery details.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
