// src/pages/HomePage.jsx
import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import ImpactSection from '../components/ImpactSection';
import HowWeDoSection from '../components/HowWeDoSection';
import OurTeamSection from '../components/OurTeamSection';
import CallToActionSection from '../components/CallToActionSection';
import WhatsAppButton from '../components/WhatsAppButton'; 
import ScrollToTop from '../components/ScrollToTop';

export default function HomePage() {
  return (
    <Box>
      <ScrollToTop />
      <Hero />
      <WhatWeDo />
      <ImpactSection />
      <HowWeDoSection />
      <OurTeamSection />
      <CallToActionSection />
      <WhatsAppButton /> 
    </Box>
  );
}