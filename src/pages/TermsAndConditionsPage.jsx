// src/pages/TermsAndConditionsPage.jsx
import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import HeroSection from '../components/HeroSection';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const Content = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(6),
  borderRadius: 16,
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(8),
  lineHeight: 1.8,
  fontSize: '1rem',
  color: '#444',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Sora',
  fontWeight: 600,
  color: '#3f1b68',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2),
}));

const LastUpdated = styled(Typography)(({ theme }) => ({
  color: '#666',
  fontStyle: 'italic',
  marginBottom: theme.spacing(3),
  fontSize: '0.95rem',
}));

export default function TermsAndConditionsPage() {
  return (
    <>
       <ScrollToTop />
      <HeroSection
        breadcrumbs={['Terms & Conditions']}
        title="Terms & Conditions"
        description="Please read these terms carefully before using our services."
      />

      <Container maxWidth="lg">
        <Content>
          <Typography variant="h4" sx={{ fontFamily: 'Sora', fontWeight: 700, color: '#3f1b68', mb: 2 }}>
            Terms & Conditions
          </Typography>

          <LastUpdated>
            <strong>Last Updated:</strong> 31-10-2025
          </LastUpdated>

          <Typography paragraph>
            Welcome to <strong>Telerad Radiologist Pvt. Ltd.</strong> These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
          </Typography>

          <SectionTitle variant="h6">1. Company Information</SectionTitle>
          <Typography paragraph>
            <strong>Telerad Radiologist Pvt. Ltd.</strong><br />
            Registered & Operational Office:<br />
            Laheriasarai, Darbhanga<br />
            Bihar - 846004, India<br />
            Email: care@telerad.co.in<br />
            Phone: +91 88106 93630
          </Typography>

          <SectionTitle variant="h6">2. Use of Services</SectionTitle>
          <Typography paragraph>
            Our diagnostic imaging and reporting services are provided for lawful purposes only. You agree not to use our services for any illegal or unauthorized purpose.
          </Typography>

          <SectionTitle variant="h6">3. Appointments & Bookings</SectionTitle>
          <Typography paragraph>
            - Appointments can be booked online or via phone.<br />
            - Walk-ins are accepted for emergency cases.<br />
            - Cancellation must be made at least 2 hours prior to the scheduled time.
          </Typography>

          <SectionTitle variant="h6">4. Diagnostic Reports</SectionTitle>
          <Typography paragraph>
            - Reports are delivered within 24 hours of examination.<br />
            - Digital reports are sent via email and WhatsApp.<br />
            - Second opinions are available upon request.
          </Typography>

          <SectionTitle variant="h6">5. Payment Terms</SectionTitle>
          <Typography paragraph>
            - All fees are payable at the time of service.<br />
            - We accept cash, UPI, cards, and online payments.<br />
            - No refunds for completed scans.
          </Typography>

          <SectionTitle variant="h6">6. Privacy & Data</SectionTitle>
          <Typography paragraph>
            Your medical data is confidential and protected under applicable laws. We do not share your information without consent except as required by law.
          </Typography>

          <SectionTitle variant="h6">7. Limitation of Liability</SectionTitle>
          <Typography paragraph>
            Telerad Radiologist Pvt. Ltd. is not liable for any indirect, incidental, or consequential damages arising from the use of our services.
          </Typography>

          <SectionTitle variant="h6">8. Changes to Terms</SectionTitle>
          <Typography paragraph>
            We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the updated terms.
          </Typography>

          <SectionTitle variant="h6">9. Governing Law</SectionTitle>
          <Typography paragraph>
            These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Darbhanga, Bihar.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography paragraph>
            <strong>Contact Us:</strong><br />
            If you have any questions about these Terms, please contact us at:<br />
            <strong>Email:</strong> care@telerad.co.in<br />
            <strong>Address:</strong> Laheriasarai, Darbhanga, Bihar - 846004, India
          </Typography>
        </Content>
      </Container>
      <WhatsAppButton/>
    </>
  );
}