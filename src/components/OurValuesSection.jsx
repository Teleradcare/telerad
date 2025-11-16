// src/components/OurValuesSection.jsx
import React from 'react';
import { Container, Typography, Chip, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';

const values = [
 {
 icon: <HealthAndSafetyIcon sx={{ fontSize: 32 }} />,
 title: 'Safety First',
 desc: 'We prioritize patient safety with the latest equipment and strict safety protocols.',
 bgColor: '#dbeafe',
 borderColor: '#90caf9',
 },
 {
 icon: <VerifiedUserIcon sx={{ fontSize: 32 }} />,
 title: 'Quality Assurance',
 desc: 'Rigorous quality checks ensure accurate and reliable diagnostic results every time.',
 bgColor: '#d1fae5',
 borderColor: '#34d399',
 },
 {
 icon: <AccessTimeIcon sx={{ fontSize: 32 }} />,
 title: 'Timely Delivery',
 desc: 'We understand urgency. Get your reports within 24 hours without compromising quality.',
 bgColor: '#e0e7ff',
 borderColor: '#818cf8',
 },
 {
 icon: <FavoriteIcon sx={{ fontSize: 32 }} />,
 title: 'Patient Care',
 desc: 'Compassionate care and clear communication throughout your diagnostic journey.',
 bgColor: '#fef3c7',
 borderColor: '#fbbf24',
 },
];

const ValueCard = styled(Box)(({ theme, bgColor, borderColor }) => ({
 backgroundColor: bgColor || '#f8f9ff',
 borderRadius: 20,
 padding: theme.spacing(3.5),
 textAlign: 'center',
 height: '100%',
 display: 'flex',
 flexDirection: 'column',
 alignItems: 'center',
 justifyContent: 'flex-start',
 gap: theme.spacing(1.5),
 border: `2px solid ${borderColor || '#e0e0e0'}`,
 transition: 'all 0.3s ease',
 '&:hover': {
 transform: 'translateY(-6px)',
 boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
 },
 // Ensure tight fit on 13.5" laptop
 minWidth: 0,
}));

 const IconCircle = styled(Box)(({ bgColor }) => ({
 width: 68,
 height: 68,
 borderRadius: '50%',
 backgroundColor: bgColor,
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
 color: '#fff',
}));

const Pill = styled(Chip)(({ theme }) => ({
 backgroundColor: '#dbeafe',
 color: '#1e40af',
 fontWeight: 600,
 fontFamily: 'Sora',
 borderRadius: 50,
 px: 3,
 py: 2,
}));

export default function OurValuesSection() {
 return (
 <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#fff' }}>
 <Container maxWidth="xl"> {/* Wider container to fit 4 cards */}
 {/* Header */}
 <Box textAlign="center" mb={5}>
 <Pill label="Our Values" />
 <Typography
 variant="h4"
 mt={3}
 sx={{ color: '#3f1b68', fontFamily: 'Sora', fontWeight: 700 }}
 >
 What Drives Us
 </Typography>
 <Typography
 variant="body1"
 mt={2}
 sx={{ color: '#666', maxWidth: 800, mx: 'auto', fontSize: '1.1rem' }}
 >
 Our core values guide everything we do, from the technology we use to the care we provide.
 </Typography>
 </Box>

 {/* 4 Cards in One Row */}
 <Grid container spacing={2.5} justifyContent="center">
 {values.map((value, index) => (
 <Grid
 item
 xs={12}
 sm={6}
 md={4}
 lg={3}
 key={index}
 sx={{
 // Force 4 cards per row on all screens ≥ 900px
 flexBasis: { lg: 'calc(25% - 20px)' },
 maxWidth: { lg: 'calc(25% - 20px)' },
 }}
 >
 <ValueCard bgColor={value.bgColor} borderColor={value.borderColor}>
 <IconCircle bgColor={value.bgColor}>
 {value.icon}
 </IconCircle>
 <Typography
 variant="h6"
 sx={{ fontFamily: 'Sora', fontWeight: 600, color: '#3f1b68', mt: 1 }}
 >
 {value.title}
 </Typography>
 <Typography
 variant="body2"
 sx={{ color: '#555', fontSize: '0.93rem', lineHeight: 1.6 }}
 >
 {value.desc}
 </Typography>
 </ValueCard>
 </Grid>
 ))}
 </Grid>
 </Container>
 </Box>
 );
}