// src/pages/PrivacyPolicyPage.jsx
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

export default function PrivacyPolicyPage() {
  return (
    <>
       <ScrollToTop />
      <HeroSection
        breadcrumbs={['Privacy Policy']}
        title="Privacy Policy"
        description="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
      />

      <Container maxWidth="lg">
        <Content>
          <Typography variant="h4" sx={{ fontFamily: 'Sora', fontWeight: 700, color: '#3f1b68', mb: 2 }}>
            Privacy Policy
          </Typography>

          <LastUpdated>
            <strong>Last Updated:</strong> 31-10-2025
          </LastUpdated>

          <Typography paragraph>
            At <strong>Telerad Radiologist Pvt. Ltd.</strong>, we are committed to protecting your privacy and ensuring the confidentiality of your personal and medical information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our services.
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

          <SectionTitle variant="h6">2. Information We Collect</SectionTitle>
          <Typography paragraph>
            We collect the following types of information:
            <ul>
              <li><strong>Personal Information:</strong> Name, contact details, date of birth, gender, and insurance information.</li>
              <li><strong>Medical Information:</strong> Health history, diagnostic reports, and imaging data.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on our website.</li>
            </ul>
          </Typography>

          <SectionTitle variant="h6">3. How We Use Your Information</SectionTitle>
          <Typography paragraph>
            We use your information to:
            <ul>
              <li>Schedule and confirm appointments</li>
              <li>Provide diagnostic imaging and reporting services</li>
              <li>Send reports via email or WhatsApp</li>
              <li>Improve our services and website</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </Typography>

          <SectionTitle variant="h6">4. Data Security</SectionTitle>
          <Typography paragraph>
            We implement industry-standard security measures to protect your data, including encryption, secure servers, and restricted access. However, no method of transmission over the internet is 100% secure.
          </Typography>

          <SectionTitle variant="h6">5. Sharing Your Information</SectionTitle>
          <Typography paragraph>
            We do not sell or rent your personal information. We may share your data with:
            <ul>
              <li>Authorized healthcare providers for treatment purposes</li>
              <li>Third-party service providers (e.g., cloud storage, IT support) under strict confidentiality agreements</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </Typography>

          <SectionTitle variant="h6">6. Your Rights</SectionTitle>
          <Typography paragraph>
            You have the right to:
            <ul>
              <li>Access, correct, or delete your personal information</li>
              <li>Request a copy of your diagnostic reports</li>
              <li>Withdraw consent for data processing (where applicable)</li>
              <li>File a complaint with the relevant data protection authority</li>
            </ul>
          </Typography>

          <SectionTitle variant="h6">7. Cookies & Tracking</SectionTitle>
          <Typography paragraph>
            Our website uses cookies to enhance user experience. You can disable cookies in your browser settings, but this may limit functionality.
          </Typography>

          <SectionTitle variant="h6">8. Children’s Privacy</SectionTitle>
          <Typography paragraph>
            Our services are not intended for individuals under 18 years of age. We do not knowingly collect data from children.
          </Typography>

          <SectionTitle variant="h6">9. Changes to This Policy</SectionTitle>
          <Typography paragraph>
            We may update this Privacy Policy from time to time. The latest version will be posted on our website with the updated date.
          </Typography>

          <SectionTitle variant="h6">10. Contact Us</SectionTitle>
          <Typography paragraph>
            If you have questions about this Privacy Policy, please contact us at:<br />
            <strong>Email:</strong> care@telerad.co.in<br />
            <strong>Address:</strong> Laheriasarai, Darbhanga, Bihar - 846004, India
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography paragraph>
            By using our services, you acknowledge that you have read and understood this Privacy Policy.
          </Typography>
        </Content>
      </Container>
      <WhatsAppButton/>
    </>
  );
}