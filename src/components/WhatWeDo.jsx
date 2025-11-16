// src/components/WhatWeDo.jsx
import React from 'react';
import { Container, Typography, Chip, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

// Icons
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import DescriptionIcon from '@mui/icons-material/Description';
import BiotechIcon from '@mui/icons-material/Biotech'; // For PET-CT
import ScienceIcon from '@mui/icons-material/Science'; // For Special Investigations
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const services = [
  {
    icon: <LocalHospitalIcon sx={{ fontSize: 40, color: '#fff' }} />,
    title: 'X-Ray Imaging',
    desc: 'Digital X-ray services for bone fractures, chest imaging, and general diagnostic purposes with minimal radiation exposure.',
    bgImage: 'https://images.unsplash.com/photo-1603398938378-e54eab446084?w=800&q=80&fit=crop&monochrome',
  },
  {
    icon: <BiotechIcon sx={{ fontSize: 40, color: '#fff' }} />,
    title: 'PET-CT',
    desc: 'Advanced hybrid imaging combining PET and CT to detect cancer, neurological disorders, and cardiac conditions with high precision.',
    bgImage: 'https://images.unsplash.com/photo-1581092580493-3d44d3d7d0f7?w=800&q=80&fit=crop&monochrome',
  },
  {
    icon: <VisibilityIcon sx={{ fontSize: 40, color: '#fff' }} />,
    title: 'CT Scan',
    desc: 'Advanced computed tomography scans providing detailed cross-sectional images of internal organs and structures.',
    bgImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&fit=crop&monochrome',
  },
  {
    icon: <ScienceIcon sx={{ fontSize: 40, color: '#fff' }} />,
    title: 'Special Radiological Investigation',
    desc: 'Advanced procedures including contrast studies, interventional radiology, and specialized imaging for complex diagnostic needs.',
    bgImage: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&q=80&fit=crop&monochrome',
  },
  {
    icon: <TrackChangesIcon sx={{ fontSize: 40, color: '#fff' }} />,
    title: 'MRI Scanning',
    desc: 'High-resolution magnetic resonance imaging for detailed visualization of soft tissues, brain, and spine.',
    bgImage: 'https://images.unsplash.com/photo-1576084708508-28c5b705c2c8?w=800&q=80&fit=crop&monochrome',
  },
  {
    icon: <DescriptionIcon sx={{ fontSize: 40, color: '#fff' }} />,
    title: 'Diagnostic Reporting',
    desc: 'Expert radiologist interpretation and detailed diagnostic reports delivered within 24 hours of examination.',
    bgImage: 'https://images.unsplash.com/photo-1582750430758-4a6e6c2d6f3e?w=800&q=80&fit=crop&monochrome',
  },
];

// Styled Button
const ViewMoreButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#fff',
  color: '#3f1b68',
  fontWeight: 600,
  fontFamily: 'Sora',
  textTransform: 'none',
  borderRadius: 50,
  padding: '8px 20px',
  opacity: 0,
  transform: 'translateY(10px)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#3f1b68',
    color: '#fff',
  },
}));

export default function WhatWeDo() {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box textAlign="center" mb={6}>
          <Chip
            icon={<MedicalServicesIcon sx={{ color: '#3f1b68' }} />}
            label="What We Do"
            sx={{
              backgroundColor: '#e6f0ff',
              color: '#3f1b68',
              fontWeight: 600,
              fontFamily: 'Sora',
              px: 3,
              py: 2,
            }}
          />
          <Typography variant="h4" mt={3} sx={{ color: '#3f1b68', fontFamily: 'Sora' }}>
            Comprehensive Radiology Services
          </Typography>
          <Typography variant="body1" mt={2} sx={{ color: '#666', maxWidth: 700, mx: 'auto' }}>
            We provide a complete range of diagnostic imaging and radiology services using the latest technology and equipment.
          </Typography>
        </Box>

        {/* GALLERY GRID WITH HOVER BUTTON */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
            '@media (min-width: 960px)': {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                height: 340,
                backgroundImage: `url(${service.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'all 0.3s ease',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)',
                  zIndex: 1,
                  transition: 'all 0.3s ease',
                },
                '&:hover::before': {
                  background: 'linear-gradient(135deg, rgba(63,27,104,0.9) 0%, rgba(63,27,104,0.6) 100%)',
                },
                '&:hover .viewMoreBtn': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              }}
            >
              {/* TEXT CONTENT */}
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  color: '#fff',
                }}
              >
                <Box sx={{ mb: 2 }}>
                  {service.icon}
                </Box>
                <Typography variant="h6" sx={{ fontFamily: 'Sora', fontWeight: 600, mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '0.875rem', lineHeight: 1.5, mb: 2 }}>
                  {service.desc}
                </Typography>

                {/* HOVER BUTTON → Routes to /services */}
                <ViewMoreButton
                  className="viewMoreBtn"
                  endIcon={<ArrowForwardIcon />}
                  component="a"
                  href="/services"
                  sx={{ alignSelf: 'flex-start' }}
                >
                  Further Details
                </ViewMoreButton>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}