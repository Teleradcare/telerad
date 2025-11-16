import React from 'react';
import HeroSection from '../components/HeroSection';
import HowWeDoSection from '../components/HowWeDoSection';
import OurValuesSection from '../components/OurValuesSection';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

export default function HowWeDoPage() {
  return (
    <>
      <HeroSection
        breadcrumbs={['How We Do']}
        title="How We Do It"
        description={
          <>
            Precision, advanced technology, and patient-centered care
            <br />
            in every diagnostic procedure
          </>
        }
      />
       <ScrollToTop />
      <HowWeDoSection/>
      <OurValuesSection />
      <WhatsAppButton/>
    </>
  );
}