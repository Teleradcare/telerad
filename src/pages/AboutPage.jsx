import React from 'react';
import { Container, Typography, Chip, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import HeroSection from '../components/HeroSection';
import OurTeamSection from '../components/OurTeamSection';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

// Reusable Pill from ContactPage
const Pill = styled(Chip)(({ theme }) => ({
  backgroundColor: '#dbeafe',
  color: '#1e40af',
  fontWeight: 600,
  fontFamily: 'Sora',
  borderRadius: 50,
  px: 3,
  py: 2,
}));

const AboutContent = styled(Box)(({ theme }) => ({
  py: { xs: 8, md: 12 },
  backgroundColor: '#f8f9ff',
}));

export default function AboutPage() {
  return (
    <>
      <ScrollToTop />
      <HeroSection
        breadcrumbs={['About Us']}
        title="About Us"
        description={
          <>
            Leading diagnostic imaging center in India.
            <br />
            world-class radiology services
          </>
        }
      />

      {/* ABOUT US SECTION */}
      <AboutContent>
        <Container maxWidth="xl">
          {/* Header */}
          <Box textAlign="center" mb={6}>
            <Pill label="About Us" />
            <Typography
              variant="h4"
              mt={3}
              sx={{ color: '#3f1b68', fontFamily: 'Sora', fontWeight: 700 }}
            >
              Who We Are
            </Typography>
            <Typography
              variant="body1"
              mt={2}
              sx={{ color: '#666', maxWidth: 900, mx: 'auto', fontSize: '1.1rem' }}
            >
              We are India’s premier teleradiology platform, delivering gold-standard CT, Ultrasound, and X-Ray reports with unmatched precision. Our handpicked team of senior radiologists—each with 10+ years of subspecialty expertise—ensures every scan is read fast, right, and online. No delays. No compromises. Just elite diagnostics, 24/7.
            </Typography>
          </Box>
        </Container>
      </AboutContent>

      {/* OUR TEAM SECTION — ADDED BELOW */}
      <OurTeamSection />

      <WhatsAppButton />
    </>
  );
}