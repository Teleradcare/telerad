// src/components/OurTeamSection.jsx
import React from 'react';
import { Container, Typography, Chip, Box, Avatar, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import GroupsIcon from '@mui/icons-material/Groups';

// Fallback avatar if image fails to load
const fallbackImage = 'https://via.placeholder.com/120?text=Team';

const teamMembers = [
  {
    name: 'Dr. Nishant Raj',
    title: 'Director',
    degree: 'MBBS, MD (Radiology)',
    experience: '8 years experience',
    rating: 4.9,
    image: '/images/team/dr-nishant-raj.jpeg',
  },
  {
    name: 'Pranabh Chaudhary',
    title: 'Director',
    degree: 'LLB',
    experience: '9 years experience',
    image: '/images/team/pranabh-chaudhary.png',
    // No rating → will not show stars
  },
];

const TeamCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '0px 4px 12px rgba(0,0,0,0.05)',
  border: '1px solid #eee',
  textAlign: 'center',
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 320,
  mx: 'auto',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  marginBottom: 16,
  border: '4px solid #e6f0ff',
  '& img': {
    objectFit: 'cover',
  },
}));

export default function OurTeamSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Chip
            icon={<GroupsIcon sx={{ color: '#3f1b68' }} />}
            label="Our Team"
            sx={{
              backgroundColor: '#e6f0ff',
              color: '#3f1b68',
              fontWeight: 600,
              fontFamily: 'Sora',
              px: 3,
              py: 2,
              borderRadius: 50,
            }}
          />
          <Typography variant="h4" mt={3} sx={{ color: '#3f1b68', fontFamily: 'Sora', fontWeight: 600 }}>
            Expert Radiologists
          </Typography>
          <Typography variant="body1" mt={2} sx={{ color: '#666', maxWidth: 700, mx: 'auto', fontFamily: 'Be Vietnam Pro' }}>
            Our team of highly qualified and experienced radiologists ensure accurate diagnosis and detailed reporting for every scan.
          </Typography>
        </Box>

        {/* 2 Team Cards — Centered */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
            },
            gap: 4,
            justifyContent: 'center',
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          {teamMembers.map((member, index) => (
            <TeamCard key={index}>
              <StyledAvatar
                src={member.image}
                alt={member.name}
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
              />
              <Typography variant="h6" sx={{ fontFamily: 'Sora', fontWeight: 600, color: '#3f1b68' }}>
                {member.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#3f1b68', fontWeight: 500 }}>
                {member.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', fontSize: '0.875rem', mb: 1 }}>
                {member.degree}
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', fontSize: '0.875rem', mb: 2 }}>
                {member.experience}
              </Typography>

              {/* CONDITIONAL RATING — ONLY IF rating exists */}
              {member.rating && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Rating value={member.rating} precision={0.1} readOnly size="small" />
                  <Typography variant="body2" sx={{ color: '#3f1b68', fontWeight: 600 }}>
                    {member.rating}
                  </Typography>
                </Box>
              )}
            </TeamCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
}