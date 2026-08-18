import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MainPillars } from './components/MainPillars';
import { InheritanceSection } from './components/InheritanceSection';
import { ImpactBanner } from './components/ImpactBanner';
import { InvestigationProcess } from './components/InvestigationProcess';
import { ReivindicatorioSection } from './components/ReivindicatorioSection';
import { RecoveryWorkflow } from './components/RecoveryWorkflow';
import { ProblemGrid } from './components/ProblemGrid';
import { ComplementaryServices } from './components/ComplementaryServices';
import { TeamSection } from './components/TeamSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { FAQSection } from './components/FAQSection';
import { LocationAndCoverage } from './components/LocationAndCoverage';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { InteractiveAssessmentModal } from './components/InteractiveAssessmentModal';

export default function App() {
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const [prefillMessage, setPrefillMessage] = useState('');
  const [prefillSituation, setPrefillSituation] = useState('');

  const handleOpenConsultation = (prefill?: string) => {
    if (prefill) {
      setPrefillMessage(prefill);
    }
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAssessmentComplete = (summary: string, situation: string) => {
    setPrefillMessage(summary);
    setPrefillSituation(situation);
    setAssessmentOpen(false);
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] font-sans antialiased selection:bg-[#A38A5E] selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Hero */}
      <Hero
        onOpenConsultation={handleOpenConsultation}
        onOpenAssessment={() => setAssessmentOpen(true)}
      />

      {/* Main Pillars: Compra de Derechos Hereditarios & Juicios Reivindicatorios */}
      <MainPillars onOpenConsultation={handleOpenConsultation} />

      {/* Central Highlight: Derechos Hereditarios */}
      <InheritanceSection onOpenConsultation={handleOpenConsultation} />

      {/* Impact Statement */}
      <ImpactBanner onOpenConsultation={handleOpenConsultation} />

      {/* 6 Step Investigation Process */}
      <InvestigationProcess onOpenConsultation={handleOpenConsultation} />

      {/* Juicio Reivindicatorio & Posesión */}
      <ReivindicatorioSection onOpenConsultation={handleOpenConsultation} />

      {/* Recovery Flowchart */}
      <RecoveryWorkflow onOpenConsultation={handleOpenConsultation} />

      {/* Common Problems Resolved */}
      <ProblemGrid onOpenConsultation={handleOpenConsultation} />

      {/* Complementary Services */}
      <ComplementaryServices onOpenConsultation={handleOpenConsultation} />

      {/* Our Team */}
      <TeamSection onOpenConsultation={handleOpenConsultation} />

      {/* Key Differentials */}
      <DifferentialsSection />

      {/* Dual FAQ */}
      <FAQSection onOpenConsultation={handleOpenConsultation} />

      {/* Location & National Coverage */}
      <LocationAndCoverage onOpenConsultation={handleOpenConsultation} />

      {/* Contact Section & Form */}
      <ContactSection
        initialPrefill={prefillMessage}
        initialSituation={prefillSituation}
      />

      {/* Footer */}
      <FooterSection onOpenConsultation={handleOpenConsultation} />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Interactive Case Assessment Modal */}
      <InteractiveAssessmentModal
        isOpen={assessmentOpen}
        onClose={() => setAssessmentOpen(false)}
        onComplete={handleAssessmentComplete}
      />
    </div>
  );
}
