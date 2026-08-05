import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { QuoteSection } from './components/QuoteSection';
import { ServicesSection } from './components/ServicesSection';
import { ResultsSection } from './components/ResultsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { AppointmentSection } from './components/AppointmentSection';
import { OfficeInfoSection } from './components/OfficeInfoSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { Spotlight } from './components/ui/Spotlight';
import { ServiceItem } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('');

  const scrollToAppointment = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f0eeed] text-[#0d0d0d] font-sans antialiased selection:bg-[#002582] selection:text-white">
      {/* Mouse-following spotlight */}
      <Spotlight />

      {/* Navigation Header */}
      <Navbar onOpenConsultation={() => scrollToAppointment()} />

      {/* Main Page Sections */}
      <main>
        {/* Hero Section with Interactive Symmetrical 3D Deck */}
        <Hero
          onScrollToAbout={() => {
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenConsultation={(serviceName) => scrollToAppointment(serviceName)}
        />

        {/* About & Stats Section */}
        <AboutSection />

        {/* Scroll Interactive Quote Section */}
        <QuoteSection />

        {/* Services Section */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenConsultation={() => scrollToAppointment()}
        />

        {/* Before & After Patient Results Section */}
        <ResultsSection
          onOpenConsultation={(treatmentName) => scrollToAppointment(treatmentName)}
        />

        {/* Google Reviews Continuous Marquee Section */}
        <ReviewsSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Appointment Scheduling Form Section */}
        <AppointmentSection initialService={prefilledService} />

        {/* Office Information & Google Maps Section */}
        <OfficeInfoSection />

        {/* CTA Banner */}
        <CtaBanner onOpenConsultation={() => scrollToAppointment()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(name) => scrollToAppointment(name)}
      />
    </div>
  );
}
