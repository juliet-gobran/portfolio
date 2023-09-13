import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#6A3911',
    },
    background: {
      default: '#F3D3B7',
    },
    info: {
      main: '#DA7422',
    },
  },
  typography: {
    fontFamily: [
      'Inter', 'sans-serif'
    ].join(','),
    h1: {
      fontSize: '64px',
      fontWeight: 900,
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '24px',
      fontWeight: 900,
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '42px',
      fontWeight: 400,
    },
    h4: {
      fontSize: '16px',
      fontWeight: 400,
      textTransform: 'uppercase',
    },
    h5: {
      fontSize: '16px',
      fontWeight: 500,
    },
    p: {
      fontSize: '14px',
      fontWeight: 400,
    },
  },
});

export default theme;

