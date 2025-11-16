import React from 'react';
import HeroSection from '../components/HeroSection';
import OurTeamSection from '../components/OurTeamSection';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

export default function OurTeamPage() {
  return (
    <>
      <HeroSection
        breadcrumbs={['Our Team']}
        title="Meet Our Team"
        description={
          <>
            Expert radiologists, technicians, and staff dedicated
            <br />
            to delivering accurate and timely results
          </>
        }
      />
       <ScrollToTop />
      <OurTeamSection/>
      <WhatsAppButton/>
    </>
  );
}