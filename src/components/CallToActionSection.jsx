// src/components/CallToActionSection.jsx
import React from 'react';
import { Container, Typography, Chip, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CheckIcon from '@mui/icons-material/Check';
import PhoneIcon from '@mui/icons-material/Phone';

const features = [
  { text: 'Same Day Reports', icon: <CheckIcon /> },
  { text: 'Expert Radiologists', icon: <CheckIcon /> },
  { text: 'Affordable Pricing', icon: <CheckIcon /> },
];

const CTASection = styled(Box)({
  background: 'linear-gradient(135deg, #3f51b5 0%, #5c6bc0 100%)',
  color: '#fff',
  minHeight: '650px',
  py: { xs: 10, md: 14 },
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
});

const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  '& svg': {
    fontSize: '1.5rem',
    color: '#fff',
  },
}));

export default function CallToActionSection() {
  return (
    <CTASection>
      <Container maxWidth="lg">
        <Box textAlign="center" sx={{ maxWidth: 900, mx: 'auto' }}>
          {/* Chip */}
          <Chip
            icon={<HandshakeIcon sx={{ color: '#3f1b68' }} />}
            label="Partner with us"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: '#fff',
              fontWeight: 600,
              fontFamily: 'Sora',
              px: 3,
              py: 2,
              mb: 4,
              backdropFilter: 'blur(10px)',
            }}
          />

          {/* Heading */}
          <Typography variant="h4" sx={{ fontFamily: 'Sora', fontWeight: 600, mb: 2 }}>
            Interested in Partnering With Us?
          </Typography>

          {/* Description */}
          <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', mb: 6, opacity: 0.9, fontFamily: 'Be Vietnam Pro' }}>
            Join our growing network of healthcare providers and offer your patients the best diagnostic imaging services.
          </Typography>

          {/* CTA Buttons */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mb: 8 }}>
            {/* PARTNER BUTTON → LINKS TO /contact */}
            <Button
              variant="contained"
              size="large"
              component="a"
              href="/contact"
              startIcon={<HandshakeIcon />}
              endIcon={<span style={{ marginLeft: 8 }}>→</span>}
              sx={{
                backgroundColor: '#fff',
                color: '#3f1b68',
                fontWeight: 600,
                fontFamily: 'Sora',
                px: 4,
                py: 1.5,
                borderRadius: 50,
                textTransform: 'none',
                fontSize: '1.1rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                },
              }}
            >
              Become a Partner
            </Button>

            {/* CALL US STICKER */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                px: 3,
                py: 1.5,
                borderRadius: 50,
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <PhoneIcon sx={{ color: '#fff' }} />
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600, fontFamily: 'Sora' }}>
                  Call Us Now
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  +91 88106 93630
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Features with Checkmarks */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: 4,
              maxWidth: 800,
              mx: 'auto',
            }}
          >
            {features.map((feature, index) => (
              <FeatureItem key={index}>
                {feature.icon}
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {feature.text}
                </Typography>
              </FeatureItem>
            ))}
          </Box>
        </Box>
      </Container>
    </CTASection>
  );
}