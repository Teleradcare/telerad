// src/components/Hero.jsx
import React from 'react';
import {
  Container, Button, Chip, Typography, Stack, Box, CardMedia
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

const HeroImageWrapper = styled(Box)({
  position: 'relative',
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '0px 4px 20px rgba(0,0,0,0.08)',
  width: '100%',
  height: '100%',
  minHeight: { xs: 300, md: 520 },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
});

export default function Hero() {
  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 3 } }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          minHeight: { md: 520 },
          alignItems: 'stretch',
        }}
      >
        {/* LEFT: TEXT BLOCK */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            order: { xs: 2, md: 1 },
            pr: { md: 2 },
          }}
        >
          <Chip
            icon={<MonitorHeartIcon sx={{ color: '#3f1b68' }} />}
            label="Advanced Radiology & Diagnostic Services"
            sx={{
              backgroundColor: '#e6f0ff',
              color: '#3f1b68',
              fontWeight: 600,
              mb: 2,
              borderRadius: 50,
              px: 2,
              py: 1,
            }}
          />
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              color: '#3f1b68',
              fontFamily: 'Sora',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
              lineHeight: 1.2,
            }}
          >
            Precision Imaging <br />for Better Diagnosis
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: '#555',
              lineHeight: 1.7,
              mb: 3,
              fontSize: '1.1rem',
            }}
          >
            Telerad Radiologist Private Limited brings state-of-the-art<br/> diagnostic imaging services. Our expert radiologists and <br/>advanced equipment ensure accurate results for your healthcare needs.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={2}>
            <Button
              variant="contained"
              size="large"
              component="a"
              href="/contact"
              sx={{
                backgroundColor: '#3f1b68',
                '&:hover': { backgroundColor: '#604083' },
                px: 4,
                py: 1.5,
                borderRadius: 50,
                textTransform: 'none',
                fontWeight: 600,
                fontFamily: 'Sora',
                fontSize: '1.1rem',
              }}
            >
              Partner with us
            </Button>
            <Button
              variant="outlined"
              size="large"
              component="a"
              href="/services"
              sx={{
                borderColor: '#3f1b68',
                color: '#3f1b68',
                px: 4,
                py: 1.5,
                borderRadius: 50,
                textTransform: 'none',
                fontWeight: 600,
                fontFamily: 'Sora',
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: '#e6f0ff',
                  borderColor: '#3f1b68',
                },
              }}
            >
              Our Services
            </Button>
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={4}
            mt={5}
            justifyContent="center"
            sx={{ pt: 2 }}
          >
            <Box textAlign="center">
              <CalendarTodayIcon sx={{ fontSize: 40, color: '#3f1b68' }} />
              <Typography variant="subtitle2" mt={1} sx={{ fontWeight: 500 }}>
                Same Day Reports
              </Typography>
            </Box>
            <Box textAlign="center">
              <AccessTimeIcon sx={{ fontSize: 40, color: '#3f1b68' }} />
              <Typography variant="subtitle2" mt={1} sx={{ fontWeight: 500 }}>
                24/7 Available
              </Typography>
            </Box>
            <Box textAlign="center">
              <VerifiedUserIcon sx={{ fontSize: 40, color: '#3f1b68' }} />
              <Typography variant="subtitle2" mt={1} sx={{ fontWeight: 500 }}>
                Certified Experts
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* RIGHT: IMAGE BLOCK */}
        <Box
          sx={{
            flex: 1,
            order: { xs: 1, md: 2 },
            minHeight: { xs: 300, md: 520 },
            height: '100%',
            position: 'relative',
          }}
        >
          <HeroImageWrapper>
            <CardMedia
              component="img"
              image="/hero-image.jpg"
              alt="Radiologist working"
            />
          </HeroImageWrapper>

          {/* 24/7 Badge — 50% OUTSIDE TOP-RIGHT */}
          <Box
            sx={{
              position: 'absolute',
              top: '-20px',  // Half outside
              right: '-15px', // Half outside
              width: 80,
              height: 80,
              backgroundColor: '#fff',
              borderRadius: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 3,
              zIndex: 10,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#3f1b68' }}>
              24/7
            </Typography>
            <Typography variant="caption" sx={{ color: '#604083' }}>
              Available
            </Typography>
          </Box>

          {/* 10,000+ Badge — 10% OUTSIDE BOTTOM-LEFT */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 'px',  // 10% outside
              left: '-22px',    // 10% outside
              backgroundColor: 'rgba(255,255,255,0.95)',
              borderRadius: 4,
              px: 3,
              py: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              boxShadow: 3,
              zIndex: 10,
            }}
          >
            <CheckCircleIcon sx={{ color: '#4caf50' }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#3f1b68' }}>
              10,000+
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              Scans Completed
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}