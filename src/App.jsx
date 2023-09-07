import * as React from 'react';
import { Container, Table, Box, Typography } from '@mui/material/';
import Header from './Header';
import Footer from './Footer';
import FolderButton from './Folder';

export default function App() {
  return (
    <div>
      <Box component="img" src="/Assets/MenuBar.svg" width="100%" position="fixed" top="0" />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Header />
          <FolderButton />
        </Box>
      </Container>
      <Footer />
    </div>
  );
}
