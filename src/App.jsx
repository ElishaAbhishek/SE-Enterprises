import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MachineCatalog from './components/MachineCatalog';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import AboutFounder from './components/AboutFounder';
import RegionalPresence from './components/RegionalPresence';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import MachineModal from './components/MachineModal';
import QuoteCalculator from './components/QuoteCalculator';
import CardPreviewModal from './components/CardPreviewModal';

export default function App() {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const handleOpenQuoteModal = (machine = null) => {
    if (machine) {
      setSelectedMachine(machine);
    }
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 flex flex-col font-sans selection:bg-brand-red selection:text-white">
      {/* Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onOpenCardPreview={() => setIsCardModalOpen(true)}
        />

        <MachineCatalog
          onSelectMachine={(machine) => setSelectedMachine(machine)}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        <ServicesSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        <WhyChooseUs
          onOpenCardPreview={() => setIsCardModalOpen(true)}
        />

        <AboutFounder
          onOpenCardPreview={() => setIsCardModalOpen(true)}
        />

        <RegionalPresence
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        <ContactSection
          onOpenCardPreview={() => setIsCardModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenCardPreview={() => setIsCardModalOpen(true)}
      />

      {/* Sticky Quick-Action Floating CTAs (WhatsApp & Dialers) */}
      <FloatingCTA
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Machine Details Specification Modal */}
      {selectedMachine && (
        <MachineModal
          machine={selectedMachine}
          onClose={() => setSelectedMachine(null)}
          onOpenQuoteModal={() => {
            const m = selectedMachine;
            setSelectedMachine(null);
            handleOpenQuoteModal(m);
          }}
        />
      )}

      {/* Instant Machinery Quote Estimator Modal */}
      <QuoteCalculator
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialMachine={selectedMachine}
      />

      {/* Original Visiting Card Reference Modal */}
      <CardPreviewModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
      />
    </div>
  );
}
