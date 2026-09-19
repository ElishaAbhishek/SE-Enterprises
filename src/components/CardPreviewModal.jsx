import React, { useEffect } from 'react';
import { X, CheckCircle, ExternalLink, Download } from 'lucide-react';
import { BUSINESS_INFO } from '../data/machineryData';

export default function CardPreviewModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cardMapping = [
    { source: 'SE ENTERPRISES', feature: 'Official Website Header, Logo & Legal Brand' },
    { source: 'Printech machineries', feature: 'Authorized Distributorship & Product Lines' },
    { source: 'AP, TELANGANA Distributor', feature: 'Twin-State Delivery, Commissioning & AMC Network' },
    { source: 'P. Jayakumar (9246770309)', feature: 'Direct Founder Hotlines, 1-Click Call & WhatsApp API' },
    { source: 'Arundel Pet (Now Autonagar)', feature: 'Updated Address: 74-15-8/10, Vinayaka Apts, JD Towers Rd, Autonagar, Vijayawada - 520007' },
    { source: 'pauljayakumar778@gmail.com', feature: 'Official RFQ & Tender Inquiries' },
    { source: 'All 7 Machineries & Servicing', feature: 'Interactive Catalog, Tech Specs, Quotation Calculator' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 text-left">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div>
            <h3 className="text-lg font-heading font-bold text-white">
              Original Visiting Card Reference
            </h3>
            <p className="text-xs text-slate-400">
              SE Enterprises • Printech Machineries • P. Jayakumar (Autonagar, Vijayawada)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Visiting Card Image Display */}
          <div className="rounded-xl overflow-hidden border border-slate-700 shadow-2xl bg-black">
            <img
              src="/reference-card.jpg"
              alt="SE Enterprises Visiting Card Reference"
              className="w-full h-auto object-contain max-h-[420px] mx-auto"
            />
          </div>

          {/* Reference elements breakdown */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider text-amber-400">
              Visiting Card Elements Incorporated into this Website:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {cardMapping.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2.5 text-xs">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">{item.source}</span>
                    <span className="text-slate-400">{item.feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-brand-red hover:bg-red-700 text-white text-xs font-bold transition-all shadow-glow-red"
          >
            Back to Website
          </button>
        </div>
      </div>
    </div>
  );
}
