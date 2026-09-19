import React, { useEffect } from 'react';
import { X, Check, ShieldCheck, Wrench, Phone, MessageSquare, Award, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/machineryData';

export default function MachineModal({ machine, onClose, onOpenQuoteModal }) {
  const [currentPhoto, setCurrentPhoto] = React.useState(machine?.image || '');

  useEffect(() => {
    if (machine?.image) {
      setCurrentPhoto(machine.image);
    }
  }, [machine]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!machine) return null;

  const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20P.%20Jayakumar%20sir,%20I%20am%20interested%20in%20the%20${encodeURIComponent(machine.name)}.%20Please%20send%20the%20complete%20pricing,%20brochure%20and%20commissioning%20details.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 text-left">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-brand-red text-white text-xs font-bold uppercase tracking-wider">
              {machine.badge}
            </span>
            <span className="text-xs sm:text-sm text-slate-400 font-medium">
              Printech Machineries • AP & Telangana Distributor
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6 space-y-8">
          {/* Top Section: Photo & Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 h-64 sm:h-72">
              <img
                src={machine.image}
                alt={machine.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-6 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white leading-snug">
                {machine.name}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {machine.tagline}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{machine.warranty}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-400 font-semibold">
                  <Wrench className="w-4 h-4 text-amber-400" />
                  <span>{machine.serviceCoverage}</span>
                </div>
              </div>

              {/* Instant Action CTA inside modal */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Jayakumar Sir</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Phone className="w-4 h-4 text-brand-red" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-3">
            <h4 className="text-lg font-heading font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-red-500" />
              <span>Technical Specifications</span>
            </h4>
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950/60">
              <table className="w-full text-left text-xs sm:text-sm">
                <tbody>
                  {Object.entries(machine.specs).map(([specKey, specVal], idx) => (
                    <tr
                      key={specKey}
                      className={idx % 2 === 0 ? 'bg-slate-900/40' : 'bg-slate-900/10'}
                    >
                      <td className="py-3 px-4 font-semibold text-slate-400 border-b border-slate-800/60 w-1/3">
                        {specKey}
                      </td>
                      <td className="py-3 px-4 font-bold text-slate-100 border-b border-slate-800/60">
                        {specVal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Advantages & Applications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h5 className="text-sm font-bold text-white uppercase tracking-wider text-red-400">
                Key Performance Advantages
              </h5>
              <ul className="space-y-2 text-xs text-slate-300">
                {machine.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h5 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400">
                Ideal Commercial Applications
              </h5>
              <ul className="space-y-2 text-xs text-slate-300">
                {machine.applications.map((app, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vijayawada Assurance Box */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-slate-950 to-red-950/20 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div>
              <div className="font-bold text-white">Need On-Site Inspection or Live Demonstration?</div>
              <div className="text-slate-400 mt-0.5">
                Visit our facility in Autonagar, Vijayawada or arrange an on-site visit to an existing press in AP or Telangana.
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal();
              }}
              className="px-4 py-2 rounded-lg bg-brand-red hover:bg-red-700 text-white font-bold shrink-0 shadow-sm"
            >
              Book Inspection
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
          >
            Close Specifications
          </button>
        </div>

      </div>
    </div>
  );
}
