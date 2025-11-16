// src/pages/ServicesPage.jsx
import React from 'react';
import {
  Box, Container, Typography, Chip, Grid, List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';
import HeroSection from '../components/HeroSection';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import ScannerIcon from '@mui/icons-material/Scanner';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BoltIcon from '@mui/icons-material/Bolt';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BiotechIcon from '@mui/icons-material/Biotech';
import ScienceIcon from '@mui/icons-material/Science';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const Pill = styled(Chip)(({ theme }) => ({
  backgroundColor: '#e6f0ff',
  color: '#3f1b68',
  fontWeight: 600,
  fontFamily: 'Sora',
  borderRadius: 50,
  px: 3,
  py: 2,
}));

const IconBadge = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  backgroundColor: '#e6f0ff',
  borderRadius: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#3f1b68',
}));

const ServiceImage = styled('img')({
  width: '100%',
  maxWidth: 480,
  height: 'auto',
  borderRadius: 16,
  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
  display: 'block',
  mx: 'auto',
});

const WhyCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#f8faff',
  borderRadius: 16,
  padding: theme.spacing(4),
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(2),
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
  },
}));

const IconCircle = styled(Box)(({ theme }) => ({
  width: 72,
  height: 72,
  backgroundColor: '#e6f0ff',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#3f1b68',
}));

export default function ServicesPage() {
  return (
    <>
      <ScrollToTop />
      {/* HERO SECTION */}
      <HeroSection
        breadcrumbs={['Services']}
        title="Our Services"
        description={
          <>
            Comprehensive diagnostic imaging and radiology services with
            <br />
            state-of-the-art technology
          </>
        }
      />

      {/* WHAT WE DO SECTION */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Pill label="What We Do" />
            <Typography variant="h4" mt={3} sx={{ color: '#3f1b68', fontFamily: 'Sora', fontWeight: 600 }}>
              Complete Range of Diagnostic Services
            </Typography>
            <Typography variant="body1" mt={2} sx={{ color: '#666', maxWidth: 700, mx: 'auto', fontSize: '1.1rem' }}>
              From basic X-rays to advanced PET-CT, we provide all diagnostic imaging services under one roof.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* X-RAY SECTION */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#f9f9f9' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Box sx={{ py: { xs: 2, md: 4 } }}>
                <ServiceImage
                  src="/services/xray.jpg"
                  alt="X-Ray Imaging"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box sx={{ py: { xs: 4, md: 6 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <IconBadge>
                    <CloseIcon sx={{ fontSize: '1.8rem' }} />
                  </IconBadge>
                </Box>
                <Typography variant="h4" sx={{ fontFamily: 'Sora', fontWeight: 600, color: '#3f1b68', mb: 2 }}>
                  X-Ray Imaging
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, mb: 3, fontSize: '1.1rem' }}>
                  Digital X-ray services for bone fractures, chest imaging, <br/>and general diagnostic
                  purposes with minimal radiation exposure.
                </Typography>
                <List>
                  {['Digital X-Ray Technology', 'Chest X-Ray', 'Bone & Joint Imaging', 'Dental X-Ray', 'Immediate Results'].map((item, i) => (
                    <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon sx={{ color: '#2e7d32', fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ fontSize: '1rem', color: '#2e7d32', fontWeight: 500 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* PET-CT SECTION */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ py: { xs: 4, md: 6 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <IconBadge>
                    <BiotechIcon sx={{ fontSize: '1.8rem' }} />
                  </IconBadge>
                </Box>
                <Typography variant="h4" sx={{ fontFamily: 'Sora', fontWeight: 600, color: '#3f1b68', mb: 2 }}>
                  PET-CT
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, mb: 3, fontSize: '1.1rem' }}>
                  Advanced hybrid imaging combining PET and CT to detect cancer,<br/> neurological disorders,
                  and cardiac conditions with high precision.
                </Typography>
                <List>
                  {[
                    'Whole Body PET-CT',
                    'Oncology Staging',
                    'Neurological Imaging',
                    'Cardiac Viability',
                    'FDG & Specialized Tracers',
                  ].map((item, i) => (
                    <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon sx={{ color: '#2e7d32', fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ fontSize: '1rem', color: '#2e7d32', fontWeight: 500 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ py: { xs: 2, md: 4 } }}>
                <ServiceImage
                  src="/services/pet-ct.webp"
                  alt="PET-CT Scanner"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CT SCAN SECTION */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#f9f9f9' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Box sx={{ py: { xs: 2, md: 4 } }}>
                <ServiceImage
                  src="/services/ct-scan.jpg"
                  alt="CT Scanner"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box sx={{ py: { xs: 4, md: 6 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <IconBadge>
                    <ScannerIcon sx={{ fontSize: '1.8rem' }} />
                  </IconBadge>
                </Box>
                <Typography variant="h4" sx={{ fontFamily: 'Sora', fontWeight: 600, color: '#3f1b68', mb: 2 }}>
                  CT Scan
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, mb: 3, fontSize: '1.1rem' }}>
                  Advanced computed tomography scans providing detailed <br/>cross-sectional images
                  of internal organs and structures.
                </Typography>
                <List>
                  {[
                    'Multi-Slice CT Scanner',
                    '3D Reconstruction',
                    'Contrast & Non-Contrast Studies',
                    'Whole Body CT',
                    'Emergency CT Services',
                  ].map((item, i) => (
                    <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon sx={{ color: '#2e7d32', fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ fontSize: '1rem', color: '#2e7d32', fontWeight: 500 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SPECIAL RADIOLOGICAL INVESTIGATION */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ py: { xs: 4, md: 6 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <IconBadge>
                    <ScienceIcon sx={{ fontSize: '1.8rem' }} />
                  </IconBadge>
                </Box>
                <Typography variant="h4" sx={{ fontFamily: 'Sora', fontWeight: 600, color: '#3f1b68', mb: 2 }}>
                  Special Radiological <br/>Investigation
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, mb: 3, fontSize: '1.1rem' }}>
                  Advanced procedures including contrast studies,<br/> interventional radiology, and specialized
                  imaging for complex<br/> diagnostic needs.
                </Typography>
                <List>
                  {[
                    'Barium Studies',
                    'IVP & HSG',
                    'Interventional Procedures',
                    'Fluoroscopy',
                    'Specialized Contrast Imaging',
                  ].map((item, i) => (
                    <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon sx={{ color: '#2e7d32', fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ fontSize: '1rem', color: '#2e7d32', fontWeight: 500 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ py: { xs: 2, md: 4 } }}>
                <ServiceImage
                  src="/services/special-investigation.jpg"
                  alt="Special Radiology Procedure"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* MRI SCANNING SECTION */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#f9f9f9' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Box sx={{ py: { xs: 2, md: 4 } }}>
                <ServiceImage
                  src="/services/mri.jpg"
                  alt="MRI Scanner"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box sx={{ py: { xs: 4, md: 6 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <IconBadge>
                    <ScannerIcon sx={{ fontSize: '1.8rem' }} />
                  </IconBadge>
                </Box>
                <Typography variant="h4" sx={{ fontFamily: 'Sora', fontWeight: 600, color: '#3f1b68', mb: 2 }}>
                  MRI Scanning
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, mb: 3, fontSize: '1.1rem' }}>
                  High-resolution magnetic resonance imaging for detailed<br/> visualization of soft tissues, brain, and spine.
                </Typography>
                <List>
                  {[
                    '1.5T MRI Scanner',
                    'Brain & Spine MRI',
                    'Joint Imaging',
                    'Cardiac MRI',
                    'Non-Invasive Procedure',
                  ].map((item, i) => (
                    <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon sx={{ color: '#2e7d32', fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ fontSize: '1rem', color: '#2e7d32', fontWeight: 500 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* DIAGNOSTIC REPORTING SECTION */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ py: { xs: 4, md: 6 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <IconBadge>
                    <AssessmentIcon sx={{ fontSize: '1.8rem' }} />
                  </IconBadge>
                </Box>
                <Typography variant="h4" sx={{ fontFamily: 'Sora', fontWeight: 600, color: '#3f1b68', mb: 2 }}>
                  Diagnostic Reporting
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, mb: 3, fontSize: '1.1rem' }}>
                  Expert radiologist interpretation and detailed diagnostic <br/>reports delivered within 24 hours of examination.
                </Typography>
                <List>
                  {[
                    'Expert Analysis',
                    'Detailed Reports',
                    'Digital Report Delivery',
                    'Second Opinion Available',
                    '24-Hour Turnaround',
                  ].map((item, i) => (
                    <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon sx={{ color: '#2e7d32', fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ fontSize: '1rem', color: '#2e7d32', fontWeight: 500 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ py: { xs: 2, md: 4 } }}>
                <ServiceImage
                  src="/services/reporting.jpg"
                  alt="Radiologists analyzing scans"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* WHY CHOOSE OUR SERVICES */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#f8f9ff' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Sora',
              fontWeight: 700,
              color: '#3f1b68',
              textAlign: 'center',
              mb: { xs: 6, md: 8 },
            }}
          >
            Why Choose Our Services
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                icon: <BoltIcon sx={{ fontSize: 32 }} />,
                title: 'Fast Service',
                desc: 'Quick scans with minimal waiting time',
              },
              {
                icon: <TrackChangesIcon sx={{ fontSize: 32 }} />,
                title: 'Accurate Results',
                desc: 'Latest technology for precision',
              },
              {
                icon: <MedicalServicesIcon sx={{ fontSize: 32 }} />,
                title: 'Expert Team',
                desc: 'Experienced radiologists',
              },
              {
                icon: <MonetizationOnIcon sx={{ fontSize: 32 }} />,
                title: 'Affordable',
                desc: 'Competitive pricing, no hidden fees',
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <WhyCard>
                  <IconCircle>{item.icon}</IconCircle>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: 'Sora', fontWeight: 600, color: '#3f1b68' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.6 }}
                  >
                    {item.desc}
                  </Typography>
                </WhyCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <WhatsAppButton/>
    </>
  );
}