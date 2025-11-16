// src/components/WhatsAppButton.jsx
import React from 'react';
import { Box, Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  const phoneNumber = "918810693630";
  const message = "Hello! I need help with diagnostic services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 16, md: 24 },
        right: { xs: 16, md: 24 },
        zIndex: 1300,
        animation: 'float 3s ease-in-out infinite',
        '@keyframes float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      }}
    >
      <Fab
        component="a"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          width: 170,
          height: 56,
          background: 'linear-gradient(135deg, #3f1b68 0%, #604083 100%)',
          color: '#fff',
          borderRadius: 50,
          boxShadow: '0 10px 25px rgba(63, 27, 104, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1.8,
          textDecoration: 'none',
          fontWeight: 700,
          fontFamily: 'Sora',
          fontSize: '1.05rem',
          textTransform: 'none',
          letterSpacing: '0.5px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            background: 'linear-gradient(135deg, #4a2480 0%, #6d4a9a 100%)',
            transform: 'translateY(-2px) scale(1.05)',
            boxShadow: '0 15px 30px rgba(63, 27, 104, 0.4)',
          },
          '&:active': {
            transform: 'translateY(0) scale(1.02)',
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: '#25D366',
            width: 44,
            height: 44,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 26 }} />
        </Box>
        <span>Let's Chat</span>
      </Fab>
    </Box>
  );
};

export default WhatsAppButton;