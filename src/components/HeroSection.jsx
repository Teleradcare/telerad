// src/components/HeroSection.jsx
import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const CurvedBottom = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '100px',
  background: 'white',
  borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
  transform: 'scaleX(1.8)',
  transformOrigin: 'bottom',
  zIndex: 3,
});

const HeroWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '75vh',
  minHeight: 120,
  backgroundImage: `url('https://images.unsplash.com/photo-1581093458791-9d6c0f2a3b7a?w=1600&q=80&fit=crop&monochrome')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'linear-gradient(135deg, rgba(63,27,104,0.92) 0%, rgba(96,64,131,0.78) 100%)',
    zIndex: 1,
  },
}));

const Content = styled(Box)({
  position: 'relative',
  zIndex: 2,
  color: '#fff',
});

export default function HeroSection({ breadcrumbs, title, description }) {
  return (
    <HeroWrapper>
      <Container maxWidth="lg">
        <Content>
          {/* Breadcrumbs */}
          <Breadcrumbs sx={{ mb: 2, color: '#e0e0ff' }}>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              i === breadcrumbs.length - 1 ? (
                <Typography key={i} color="#fff" sx={{ fontWeight: 500 }}>
                  {crumb}
                </Typography>
              ) : (
                <Link key={i} underline="hover" color="inherit" href="#">
                  {crumb}
                </Link>
              )
            ))}
          </Breadcrumbs>

          {/* Title */}
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Sora',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>

          {/* Description */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              maxWidth: 720,
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.35rem' },
            }}
          >
            {description}
          </Typography>
        </Content>
      </Container>

      {/* Curved Bottom */}
      <CurvedBottom />
    </HeroWrapper>
  );
}