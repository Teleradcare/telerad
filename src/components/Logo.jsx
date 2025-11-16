// src/components/Logo.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Logo({ size = 'medium', color = 'dark' }) {
  const navigate = useNavigate();

  const logoSizes = {
    small: { img: 32, text: 'subtitle1' },
    medium: { img: 40, text: 'h6' },
    large: { img: 48, text: 'h5' },
  };

  const { img, text } = logoSizes[size];

  const textColor = color === 'light' ? '#fff' : '#3f1b68';
  const subColor = color === 'light' ? '#aaa' : '#604083';

  return (
    <Box
      onClick={() => navigate('/')}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
        '&:hover': { transform: 'scale(1.03)' },
      }}
    >
      <img
        src="/logo.png"
        alt="Telerad Logo"
        style={{
          width: img,
          height: img,
          borderRadius: 8,
          objectFit: 'contain',
        }}
      />
      <Box>
        <Typography
          variant={text}
          sx={{
            fontFamily: 'Sora',
            fontWeight: 700,
            color: textColor,
            lineHeight: 1.1,
          }}
        >
          Telerad Radiologist
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: subColor,
            fontSize: '0.7rem',
            letterSpacing: '0.5px',
          }}
        >
          Private Limited
        </Typography>
      </Box>
    </Box>
  );
}