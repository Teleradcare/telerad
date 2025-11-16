// src/components/Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import {
  AppBar, Toolbar, Container, Stack, Button, IconButton, Box,
  useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText, Divider, Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HelpIcon from '@mui/icons-material/Help';
import GroupIcon from '@mui/icons-material/Group';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';

const TopBar = styled(Box)(({ theme }) => ({
  backgroundColor: '#3f1b68',
  color: '#fff',
  padding: theme.spacing(0.5, 0),
  fontSize: '0.875rem',
}));

const StickyAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#ffffff',
  boxShadow: '0px 2px 4px rgba(0,0,0,0.05)',
  position: 'sticky',
  top: 0,
  zIndex: 1200,
}));

const NavLink = styled('div')(({ theme }) => ({
  margin: theme.spacing(0, 2),
  cursor: 'pointer',
  fontWeight: 500,
  color: '#3f1b68',
  position: 'relative',
  transition: 'all 0.3s ease',
  fontSize: '1rem',
  '&:hover': {
    color: '#3f1b68',
    fontWeight: 700,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -4,
    left: 0,
    width: 0,
    height: 2,
    backgroundColor: '#604083',
    transition: 'width 0.3s ease',
  },
  '&:hover::after': {
    width: '100%',
  },
}));

const MobileMenuLink = styled(ListItem)(({ theme }) => ({
  cursor: 'pointer',
  padding: theme.spacing(1.8, 3),
  borderRadius: 12,
  margin: theme.spacing(0.5, 2),
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #e6f0ff 0%, #d4e6ff 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(63, 27, 104, 0.15)',
  },
  '& .MuiListItemIcon-root': {
    color: '#3f1b68',
    minWidth: 40,
  },
  '& .MuiListItemText-primary': {
    color: '#3f1b68',
    fontWeight: 600,
  },
}));

const DrawerHeader = styled(Box)(({ theme, scrolled }) => ({
  position: 'sticky',
  top: 0,
  backgroundColor: scrolled ? '#ffffff' : '#f8f9ff',
  borderBottom: scrolled ? '1px solid #eee' : 'none',
  zIndex: 10,
  transition: 'all 0.3s ease',
  padding: scrolled ? theme.spacing(1.5, 2) : theme.spacing(3, 2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
}));

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef(null);

  const navItems = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'About Us', path: '/about', icon: <InfoIcon /> },
    { text: 'Services', path: '/services', icon: <MedicalServicesIcon /> },
    { text: 'How We Do', path: '/how-we-do', icon: <HelpIcon /> },
    { text: 'Our Team', path: '/team', icon: <GroupIcon /> },
    { text: 'Contact', path: '/contact', icon: <ContactPhoneIcon /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(prev => !prev);
    setScrolled(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrolled(scrollRef.current.scrollTop > 80);
      }
    };

    const currentRef = scrollRef.current;
    if (mobileOpen && currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [mobileOpen]);

  // Prevent X-axis shift & body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflowY = 'scroll';
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflowY = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflowY = '';
      document.body.style.width = '';
    };
  }, [mobileOpen]);

  const drawer = (
    <Box
      sx={{
        width: 320,
        backgroundColor: '#fff',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <DrawerHeader scrolled={scrolled ? 1 : 0}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {!scrolled && (
            <img
              src="/logo-header.png"
              alt="Telerad Logo"
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                objectFit: 'contain',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            />
          )}
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: 'Sora',
              fontWeight: 700,
              color: '#3f1b68',
              fontSize: scrolled ? '1rem' : '1.1rem',
            }}
          >
            Telerad Radiologist Pvt Ltd
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle} size="small">
          <CloseIcon sx={{ color: '#3f1b68' }} />
        </IconButton>
      </DrawerHeader>

      <Box
        ref={scrollRef}
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          pt: 2,
          pb: 3,
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <List>
          {navItems.map((item) => (
            <MobileMenuLink
              key={item.text}
              onClick={() => {
                navigate(item.path);
                handleDrawerToggle();
              }}
            >
              {item.icon}
              <ListItemText primary={item.text} />
            </MobileMenuLink>
          ))}

          <Box sx={{ px: 3, mt: 1 }}>
            <Button
              component="a"
              href="https://wa.me/918810693630?text=Hi%20Telerad%20Team,%20I'd%20like%20to%20know%20more."
              target="_blank"
              fullWidth
              startIcon={<WhatsAppIcon />}
              sx={{
                background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                color: '#fff',
                borderRadius: 3,
                textTransform: 'none',
                fontWeight: 700,
                py: 1.8,
                fontSize: '1rem',
                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #128c7e 0%, #075e54 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(37, 211, 102, 0.35)',
                },
              }}
            >
              Let's Chat on WhatsApp
            </Button>
          </Box>

          <Box sx={{ px: 3, mt: 2 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                navigate('/contact');
                handleDrawerToggle();
              }}
              sx={{
                backgroundColor: '#3f1b68',
                '&:hover': { backgroundColor: '#604083' },
                borderRadius: 3,
                textTransform: 'none',
                fontWeight: 700,
                py: 1.8,
                fontSize: '1.1rem',
                boxShadow: '0 4px 12px rgba(63, 27, 104, 0.2)',
              }}
            >
              Partner with us
            </Button>
          </Box>
        </List>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ px: 3, pb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#3f1b68', mb: 1.5 }}>
            Contact Us
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <PhoneIcon fontSize="small" sx={{ color: '#3f1b68' }} />
            <Typography variant="body2" sx={{ color: '#555' }}>+91 88106 93630</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <EmailIcon fontSize="small" sx={{ color: '#3f1b68' }} />
            <Typography variant="body2" sx={{ color: '#555' }}>care@telerad.co.in</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <BrowseGalleryIcon fontSize="small" sx={{ color: '#3f1b68' }} />
            <Typography variant="caption" sx={{ color: '#3f1b68', fontWeight: 500 }}>
              Available 24/7
            </Typography>
          </Box>
        </Box>

        <Divider />

        <Box sx={{ p: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton component="a" href="https://www.facebook.com/profile.php?id=61583450396411" target="_blank"
            sx={{ color: '#3f1b68', bgcolor: '#f0f4ff', '&:hover': { bgcolor: '#e6f0ff' } }}>
            <FacebookIcon />
          </IconButton>
          <IconButton component="a" href="https://x.com/telerad_care?t=Z0aj8Rag8XBBpohDA8b7dA&s=09" target="_blank"
            sx={{ color: '#3f1b68', bgcolor: '#f0f4ff', '&:hover': { bgcolor: '#e6f0ff' } }}>
            <XIcon />
          </IconButton>
        </Box>

        <Box sx={{ px: 3, pb: 3, textAlign: 'center' }}>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              color: '#ff6b6b',
              fontWeight: 500,
              fontSize: '0.75rem',
              mb: 0.5,
            }}
          >
            Designed & Developed by{' '}
            <Box
              component="a"
              href="https://www.linkedin.com/in/anish-priye-january1994/"
              target="_blank"
              rel="noopener"
              sx={{
                color: '#ff6b6b',
                textDecoration: 'underline',
                fontWeight: 600,
                '&:hover': { textDecoration: 'none' },
              }}
            >
              Anish Priye
            </Box>
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: '#777',
              fontSize: '0.75rem',
              lineHeight: 1.6,
            }}
          >
          © {new Date().getFullYear()} Telerad Radiologist Pvt Ltd. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <TopBar>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent={{ xs: 'center', sm: 'space-between' }}
            alignItems="center"
            spacing={1}
            sx={{ py: 0.5 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PhoneIcon fontSize="small" />
              <span>+91 88106 93630</span>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon fontSize="small" />
              <span>care@telerad.co.in</span>
            </Box>
            {/* 24/7 with Icon — Desktop Only */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <BrowseGalleryIcon fontSize="small" />
                <span>Available 24/7</span>
              </Box>
            )}
            {/* Mobile: Show only text */}
            {isMobile && <span>Available 24/7</span>}
          </Stack>
        </Container>
      </TopBar>

      <StickyAppBar elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
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
                src="/logo-header.png"
                alt="Telerad Header Logo"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 8,
                  objectFit: 'contain',
                }}
              />
              <Box>
                <span
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 700,
                    color: '#3f1b68',
                    fontSize: '1.25rem',
                    lineHeight: 1.1,
                  }}
                >
                  Telerad Radiologist
                </span>
                <br />
                <span
                  style={{
                    color: '#604083',
                    fontSize: '0.65rem',
                    letterSpacing: '0.5px',
                  }}
                >
                  Private Limited
                </span>
              </Box>
            </Box>

            {!isMobile && (
              <Stack direction="row" alignItems="center">
                {navItems.map(item => (
                  <NavLink
                    key={item.text}
                    onClick={() => navigate(item.path)}
                  >
                    {item.text}
                  </NavLink>
                ))}
                <Button
                  variant="contained"
                  onClick={() => navigate('/contact')}
                  sx={{
                    ml: 3,
                    backgroundColor: '#3f1b68',
                    '&:hover': { backgroundColor: '#604083' },
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 600,
                  }}
                >
                  Partner with us
                </Button>
              </Stack>
            )}

            {isMobile && (
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon sx={{ color: '#3f1b68', fontSize: 32 }} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </StickyAppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
          disableScrollLock: true,
        }}
        PaperProps={{
          sx: { 
            width: 320,
            zIndex: (theme) => theme.zIndex.appBar + 100,
            overflow: 'hidden',
          },
        }}
      >
        {drawer}
      </Drawer>

      {!mobileOpen && <WhatsAppButton />}
    </>
  );
}