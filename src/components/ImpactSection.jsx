// src/components/ImpactSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Icons
import ScannerIcon from '@mui/icons-material/Scanner';
import MoodIcon from '@mui/icons-material/Mood';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BusinessIcon from '@mui/icons-material/Business';

const stats = [
  {
    icon: <ScannerIcon sx={{ fontSize: 40 }} />,
    value: 10000,
    suffix: '+',
    label: 'Scans Completed',
    bg: '#e3f2fd',
  },
  {
    icon: <MoodIcon sx={{ fontSize: 40 }} />,
    value: 8000,
    suffix: '+',
    label: 'Happy Patients',
    bg: '#e8f5e9',
  },
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
    value: 99.5,
    suffix: '%',
    label: 'Accuracy Rate',
    bg: '#f3e5f5',
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 40 }} />,
    value: 15,
    suffix: '+',
    label: 'Partner Hospitals',
    bg: '#fff3e0',
  },
];

const Circle = styled(Box)({
  width: 100,
  height: 100,
  borderRadius: '50%',
  backgroundColor: (props) => props.bgcolor || '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 20px',
  color: '#3f1b68',
});

// Animated Counter with its own observer
const AnimatedCounter = React.forwardRef(({ end, suffix, duration = 2 }, ref) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
});

export default function ImpactSection() {
  const counterRefs = useRef(stats.map(() => React.createRef()));

  return (
    <Box
      sx={{
        backgroundColor: '#3f51b5',
        color: '#fff',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Sora',
              fontWeight: 600,
              mb: 2,
            }}
          >
            Our Impact in Numbers
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Be Vietnam Pro',
              maxWidth: 700,
              mx: 'auto',
              opacity: 0.9,
            }}
          >
            Committed to excellence in diagnostic imaging and patient care across India and beyond.
          </Typography>
        </Box>

        <Grid container spacing={20} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid xs={12} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
              <Box sx={{ textAlign: 'center', flex: 1 }}>
                <Circle bgcolor={stat.bg}>
                  {stat.icon}
                </Circle>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    fontFamily: 'Sora',
                    mb: 1,
                    color: '#fff',
                  }}
                >
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={1}
                    ref={counterRefs.current[index]}
                  />
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'Be Vietnam Pro',
                    opacity: 0.9,
                    color: '#fff',
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}