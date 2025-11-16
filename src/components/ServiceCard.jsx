// src/components/ServiceCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  padding: theme.spacing(3),
  textAlign: 'center',
  transition: 'all 0.3s ease',
  border: '1px solid #e0e0e0',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0px 12px 24px rgba(0,0,0,0.12)',
    borderColor: '#3f1b68',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: 12,
  backgroundColor: '#e6f0ff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 16px',
  color: '#3f1b68',
}));

export default function ServiceCard({ icon, title, description }) {
  return (
    <StyledCard elevation={0}>
      <CardContent>
        <IconWrapper>{icon}</IconWrapper>
        <Typography variant="h6" gutterBottom sx={{ color: '#3f1b68', fontFamily: 'Sora' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6, flexGrow: 1 }}>
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}