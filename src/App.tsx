import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StoresSection } from './components/StoresSection';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';
import { TermsModal } from './components/TermsModal';
import { ModalType } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleOpenPrivacy = () => setActiveModal('privacy');
  const handleOpenTerms = () => setActiveModal('terms');
  const handleCloseModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 selection:bg-red-100 selection:text-red-900">
      {/* Header */}
      <Header onOpenPrivacy={handleOpenPrivacy} />

      {/* Main Single Page Content */}
      <main className="flex-1">
        <Hero />
        <StoresSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={handleOpenPrivacy}
        onOpenTerms={handleOpenTerms}
      />

      {/* Accessible Modals */}
      <PrivacyModal
        isOpen={activeModal === 'privacy'}
        onClose={handleCloseModal}
      />
      <TermsModal
        isOpen={activeModal === 'terms'}
        onClose={handleCloseModal}
      />
    </div>
  );
}
