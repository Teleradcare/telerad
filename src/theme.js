// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#3f1b68' },
    secondary: { main: '#604083' },
    background: { paper: '#c8d3d5' },
  },
  typography: {
    fontFamily: '"Be Vietnam Pro", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"Sora", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Sora", sans-serif', fontWeight: 600 },
    h3: { fontFamily: '"Sora", sans-serif', fontWeight: 600 },
    h4: { fontFamily: '"Sora", sans-serif', fontWeight: 600 },
    h5: { fontFamily: '"Sora", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Sora", sans-serif', fontWeight: 600 },
    subtitle1: { fontFamily: '"Sora", sans-serif' },
    body1: { fontFamily: '"Be Vietnam Pro", sans-serif' },
    body2: { fontFamily: '"Be Vietnam Pro", sans-serif' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;