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
    p: {
      fontSize: '16px',
      fontWeight: 400,
    },
  },
  text: {
    primary: '#6A3911',
    secondary: '#F3D3B7'
  }
});

export default theme;


/*  --earth: #6A3911;
    --sand: #F3D3B7;
    --fire: #DA7422; 
    --black: #000000;
    --white: #FFFFFF;
*/