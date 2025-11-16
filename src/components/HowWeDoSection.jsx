// src/components/HowWeDoSection.jsx
import React from 'react';
import { Container, Typography, Chip, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StairsIcon from '@mui/icons-material/Stairs';

const steps = [
  {
    number: '01',
    icon: <CalendarTodayIcon sx={{ fontSize: 36 }} />,
    title: 'Book Appointment',
    desc: 'Schedule your scan online or call us. Walk-ins are also welcome for urgent cases.',
  },
  {
    number: '02',
    icon: <LocalHospitalIcon sx={{ fontSize: 36 }} />,
    title: 'Get Scanned',
    desc: 'Visit our facility where our trained technicians will perform your scan using state-of-the-art equipment.',
  },
  {
    number: '03',
    icon: <DescriptionIcon sx={{ fontSize: 36 }} />,
    title: 'Expert Analysis',
    desc: 'Our certified radiologists thoroughly analyze your scans and prepare detailed diagnostic reports.',
  },
  {
    number: '04',
    icon: <CheckCircleIcon sx={{ fontSize: 36 }} />,
    title: 'Receive Report',
    desc: 'Get your comprehensive report within 24 hours via email, WhatsApp, or collect from our center.',
  },
];

const StepCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: 16,
  padding: theme.spacing(5),
  textAlign: 'center',
  boxShadow: '0px 4px 12px rgba(0,0,0,0.05)',
  border: '1px solid #eee',
  position: 'relative',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  overflow: 'visible',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0px 16px 32px rgba(0,0,0,0.15)',
    borderColor: '#3f1b68',
    zIndex: 10,
  },
}));

const IconWrapper = styled(Box)({
  width: 80,
  height: 80,
  borderRadius: '50%',
  backgroundColor: '#e6f0ff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#3f1b68',
  marginBottom: 20,
  position: 'relative',
  zIndex: 1,
});

// Number overlaps from 12:00 to 3:00
const NumberCircle = styled(Box)({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: '#3f1b68',
  color: '#fff',
  fontWeight: 700,
  fontSize: '1.2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: -20, // Push up to overlap
  right: -10, // Move to right side (3:00 position)
  zIndex: 3,
  border: '4px solid #fff',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
});

// ">" half inside, half outside
const RightArrow = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  right: -20, // Half outside
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#3f1b68',
  fontSize: '3rem', // Larger
  fontWeight: 'bold',
  zIndex: 2,
  lineHeight: 1,
  [theme.breakpoints.down('md')]: { display: 'none' },
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: 16,
  padding: theme.spacing(5),
  boxShadow: '0px 6px 16px rgba(0,0,0,0.08)',
  textAlign: 'center',
}));

export default function HowWeDoSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Chip
          icon={<StairsIcon sx={{ color: '#3f1b68' }} />}
            label="How We Do"
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
            Our Simple 4-Step Process
          </Typography>
          <Typography variant="body1" mt={2} sx={{ color: '#666', maxWidth: 700, mx: 'auto' }}>
            We’ve streamlined our process to make diagnostic imaging quick, easy, and stress-free for our patients.
          </Typography>
        </Box>

        {/* 4 STEPS IN 1 ROW */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
            mb: 8,
            '@media (min-width: 900px)': {
              gridTemplateColumns: 'repeat(4, 1fr)',
            },
          }}
        >
          {steps.map((step, index) => (
            <Box key={index} sx={{ position: 'relative', overflow: 'visible' }}>
              <StepCard>
                <Box sx={{ position: 'relative', width: 80, height: 80, mx: 'auto' }}>
                  <IconWrapper>
                    {step.icon}
                  </IconWrapper>
                  <NumberCircle>{step.number}</NumberCircle>
                </Box>
                <Typography variant="h6" sx={{ fontFamily: 'Sora', fontWeight: 600, mb: 1, mt: 3 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6, flexGrow: 1 }}>
                  {step.desc}
                </Typography>
                {index < steps.length - 1 && <RightArrow>{'>'}</RightArrow>}
              </StepCard>
            </Box>
          ))}
        </Box>

        {/* Fast, Accurate, Affordable — ONE CARD */}
        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          <FeatureCard>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(3, 1fr)',
                },
                gap: 4,
                textAlign: 'center',
              }}
            >
              {[
                { title: 'Fast', desc: 'Quick scan procedures with minimal wait times' },
                { title: 'Accurate', desc: 'Latest equipment ensuring precise diagnostic results' },
                { title: 'Affordable', desc: 'Competitive pricing with no hidden charges' },
              ].map((item, i) => (
                <Box key={i}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#3f1b68',
                      fontFamily: 'Sora',
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    {item.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </FeatureCard>
        </Box>
      </Container>
    </Box>
  );
}