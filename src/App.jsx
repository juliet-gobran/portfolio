import * as React from 'react';
import { Container, Typography, Box } from '@mui/material/';
import Header from './Header';
import Copyright from './Header';

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box align='center' sx={{ my: 4 }}>
        <Header />
        <Typography variant='p' color='primary'>🚧 Work in progress... Check back soon! 🚧</Typography>
      </Box>
    </Container>
  );
}
