// src/pages/ContactPage.jsx
import React from 'react';
import {
  Container, Typography, Chip, Box, Grid, IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import HeroSection from '../components/HeroSection';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ScrollToTop from '../components/ScrollToTop';

const Pill = styled(Chip)(({ theme }) => ({
  backgroundColor: '#dbeafe',
  color: '#1e40af',
  fontWeight: 600,
  fontFamily: 'Sora',
  borderRadius: 50,
  px: 3,
  py: 2,
}));

const ContactCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: 20,
  padding: theme.spacing(4),
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(2),
  border: '1px solid #e0e7ff',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: '#3f1b68',
    boxShadow: '0 8px 20px rgba(63, 27, 104, 0.1)',
    transform: 'translateY(-4px)',
  },
}));

const IconCircle = styled(Box)(({ theme }) => ({
  width: 72,
  height: 72,
  borderRadius: '50%',
  backgroundColor: '#e0efff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#1e40af',
}));

// WhatsApp Link
const WHATSAPP_LINK = 'https://wa.me/918810693630?text=Hello! I need help with diagnostic services.';

const contacts = [
  {
    icon: <LocationOnIcon sx={{ fontSize: 32 }} />,
    title: 'Address',
    lines: [
      'Telerad Radiologist Pvt. Ltd.',
      'Laheriasarai, Darbhanga',
      'Bihar - 846004, India',
    ],
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 32 }} />,
    title: 'Phone',
    lines: ['+91 88106 93630'],
    whatsapp: true,
  },
  {
    icon: <EmailIcon sx={{ fontSize: 32 }} />,
    title: 'Email',
    lines: ['care@telerad.co.in'],
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 32 }} />,
    title: 'Working Hours',
    lines: [
      'Mon - Sun: 24/7 Available',
      'Emergency Services Always Open',
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <ScrollToTop />
      {/* HERO SECTION */}
      <HeroSection
        breadcrumbs={['Contact']}
        title="Contact Us"
        description={
          <>
            Get in touch for appointments, inquiries, or partnerships
            <br />
            Available 24/7 for emergency services
          </>
        }
      />

      {/* GET IN TOUCH SECTION */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f8f9ff' }}>
        <Container maxWidth="xl">
          {/* Header */}
          <Box textAlign="center" mb={6}>
            <Pill label="Contact Us" />
            <Typography
              variant="h4"
              mt={3}
              sx={{ color: '#3f1b68', fontFamily: 'Sora', fontWeight: 700 }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="body1"
              mt={2}
              sx={{ color: '#666', maxWidth: 800, mx: 'auto', fontSize: '1.1rem' }}
            >
              Have questions? We're here to help. Reach out to us through any of the following channels.
            </Typography>
          </Box>

          {/* 4 Contact Cards in One Row */}
          <Grid container spacing={2.5} justifyContent="center">
            {contacts.map((contact, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
                sx={{
                  flexBasis: { lg: 'calc(25% - 20px)' },
                  maxWidth: { lg: 'calc(25% - 20px)' },
                }}
              >
                <ContactCard>
                  <IconCircle>
                    {contact.icon}
                  </IconCircle>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: 'Sora', fontWeight: 600, color: '#3f1b68' }}
                  >
                    {contact.title}
                  </Typography>

                  {/* Render Lines */}
                  {contact.lines.map((line, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{
                        color: '#555',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        textAlign: 'center',
                      }}
                    >
                      {line}
                    </Typography>
                  ))}

                  {/* WhatsApp Line — Only for Phone Card */}
                  {contact.whatsapp && (
                    <Box
                      component="a"
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        mt: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        cursor: 'pointer',
                        textDecoration: 'none',
                      }}
                    >
                      <IconButton
                        size="small"
                        sx={{
                          backgroundColor: '#25D366',
                          color: '#fff',
                          width: 36,
                          height: 36,
                          '&:hover': {
                            backgroundColor: '#1DA851',
                            transform: 'scale(1.1)',
                          },
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <WhatsAppIcon sx={{ fontSize: 20 }} />
                      </IconButton>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#25D366',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          '&:hover': { textDecoration: 'underline' },
                        }}
                      >
                        +91 88106 93630
                      </Typography>
                    </Box>
                  )}
                </ContactCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}