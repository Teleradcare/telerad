// src/components/Footer.jsx
import React from 'react';
import { Container, Grid, Typography, Box, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1a1a2e',
  color: '#aaa',
  py: { xs: 8, md: 10 },
  fontFamily: 'Be Vietnam Pro',
}));

const FooterLink = styled(Link)({
  display: 'block',
  color: '#aaa',
  textDecoration: 'none',
  marginBottom: 8,
  fontSize: '0.95rem',
  '&:hover': {
    color: '#fff',
  },
});

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  marginBottom: 12,
  fontSize: '0.95rem',
  '& svg': {
    color: '#3f51b5',
    fontSize: '1.1rem',
  },
}));

const Copyright = styled(Box)(({ theme }) => ({
  borderTop: '1px solid #333',
  paddingTop: theme.spacing(3),
  marginTop: theme.spacing(4),
  textAlign: 'center',
  color: '#777',
  fontSize: '0.875rem',
}));

const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Pune', 'Jaipur', 'Lucknow',
  'Kanpur', 'Nagpur', 'Visakhapatnam', 'Indore', 'Thane', 'Bhopal', 'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad',
  'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivli', 'Vasai-Virar', 'Varanasi', 'Srinagar',
  'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai', 'Allahabad', 'Ranchi', 'Howrah', 'Coimbatore', 'Jabalpur', 'Gwalior',
  'Vijayawada', 'Jodhpur', 'Madurai', 'Raipur', 'Kota'
];

export default function Footer() {
  const currentYear = new Date().getFullYear(); // DYNAMIC YEAR

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={12} alignItems="flex-start">
          
          {/* COLUMN 1: LARGE LOGO + TEXT */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mt: 5 }}>
              {/* CUSTOM LARGE LOGO */}
              <Box
                onClick={() => window.location.href = '/'}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.8,
                  cursor: 'pointer',
                  mb: 2,
                  transition: 'transform 0.2s ease',
                  '&:hover': { transform: 'scale(1.03)' },
                }}
              >
                <img
                  src="/logo.png"
                  alt="Telerad Logo"
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 12,
                    objectFit: 'contain',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Sora',
                      fontWeight: 700,
                      color: '#fff',
                      lineHeight: 1.1,
                    }}
                  >
                    Telerad Radiologist
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#aaa',
                      fontSize: '0.7rem',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Private Limited
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6, pr: { md: 2 } }}>
                24×7 Teleradiology Reporting Across India |<br/>Expert MD Radiologists
              </Typography>

              {/* SOCIAL ICONS — ONLY FACEBOOK & X */}
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <IconButton component="a" href="https://www.facebook.com/profile.php?id=61583450396411" target="_blank" size="small"
                  sx={{ backgroundColor: '#333', color: '#aaa', '&:hover': { backgroundColor: '#3f51b5', color: '#fff' } }}>
                  <FacebookIcon fontSize="small" />
                </IconButton>
                <IconButton component="a" href="https://x.com/telerad_care?t=Z0aj8Rag8XBBpohDA8b7dA&s=09" target="_blank" size="small"
                  sx={{ backgroundColor: '#333', color: '#aaa', '&:hover': { backgroundColor: '#3f51b5', color: '#fff' } }}>
                  <XIcon fontSize="small" />
                </IconButton>
              </Box>

              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 50,
                  px: 2,
                  py: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  color: '#fff',
                  fontWeight: 900,
                  fontSize: '1rem',
                  fontFamily: 'Sora',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                JOIN US
                <TouchAppIcon sx={{ fontSize: '1.7rem' }} />
              </Box>
            </Box>
          </Grid>

          {/* COLUMN 2: QUICK LINKS */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mt: 5 }}>
              <Typography variant="h6" sx={{ color: '#fff', fontFamily: 'Sora', mb: 2 }}>
                QUICK LINKS
              </Typography>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/how-we-do">How We Do</FooterLink>
              <FooterLink href="/team">Our Team</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </Box>
          </Grid>

          {/* COLUMN 3: OUR SERVICES */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mt: 5 }}>
              <Typography variant="h6" sx={{ color: '#fff', fontFamily: 'Sora', mb: 2 }}>
                OUR SERVICES
              </Typography>
              <FooterLink>X-Ray Imaging</FooterLink>
              <FooterLink>PET-CT</FooterLink>
              <FooterLink>CT Scan</FooterLink>
              <FooterLink>Special Investigation</FooterLink>
              <FooterLink>MRI Scanning</FooterLink>
              <FooterLink>Diagnostic Reporting</FooterLink>
            </Box>
          </Grid>

          {/* COLUMN 4: CONTACT INFO + STICKERS */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mt: 5 }}>
              <Typography variant="h6" sx={{ color: '#fff', fontFamily: 'Sora', mb: 2 }}>
                CONTACT INFO
              </Typography>
              <ContactItem>
                <LocationOnIcon />
                <Typography variant="body2">
                  Laheriasarai, Darbhanga, India
                </Typography>
              </ContactItem>
              <ContactItem>
                <PhoneIcon />
                <Typography variant="body2">+91 88106 93630</Typography>
              </ContactItem>
              <ContactItem>
                <EmailIcon />
                <Typography variant="body2">care@telerad.co.in</Typography>
              </ContactItem>

              <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    color: '#fff',
                    borderRadius: 50,
                    px: 2.5,
                    py: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    fontFamily: 'Sora',
                    boxShadow: '0 4px 15px rgba(79, 172, 254, 0.4)',
                    width: 'fit-content',
                  }}
                >
                  Trusted
                  <VerifiedIcon/>
                </Box>

                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
                    color: '#d63031',
                    borderRadius: 50,
                    px: 2.5,
                    py: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    fontFamily: 'Sora',
                    boxShadow: '0 4px 15px rgba(255, 154, 158, 0.4)',
                    width: 'fit-content',
                  }}
                >
                  4.9
                  <StarIcon sx={{ fontSize: '1.1rem', color: '#e17055' }} />
                  <StarIcon sx={{ fontSize: '1.1rem', color: '#e17055' }} />
                  <StarIcon sx={{ fontSize: '1.1rem', color: '#e17055' }} />
                  <StarIcon sx={{ fontSize: '1.1rem', color: '#e17055' }} />
                  <StarIcon sx={{ fontSize: '1.1rem', color: '#e17055' }} />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Copyright>
          <Typography variant="body2" sx={{ mb: 1 }}>
            © {currentYear} Telerad Radiologist Private Limited. All rights reserved. |{' '}
            <Link href="/privacy-policy" color="inherit" underline="hover">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href="/terms-and-conditions" color="inherit" underline="hover">
              Terms of Service
            </Link>
          </Typography>

          <Typography variant="body2" sx={{ color: '#ff6b6b', fontWeight: 500, mb: 2 }}>
            Designed & Developed by <Link href="https://www.linkedin.com/in/anish-priye-january1994/" color="#ff6b6b">Anish Priye</Link>
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: '#555',
              fontSize: '0.75rem',
              lineHeight: 1.8,
            }}
          >
            {cities.join(' | ')}
          </Typography>
        </Copyright>
      </Container>
    </FooterContainer>
  );
}