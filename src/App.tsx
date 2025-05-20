import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CatalogSection from './components/CatalogSection';
import FooterSection from './components/FooterSection';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CatalogSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
}

export default App;