import * as React from 'react';
import { Container, Box } from '@mui/material/';
import Header from './Header';
import Footer from './Footer';
import FolderButton from './Components/Folder';
import WestpacContent from './ContentPages/Westpac';
import menubarASS from '/assets//MenuBar.svg';

export default function App() {
  return (
    <div>
      <Box
        component="img"
        src={menubarASS}
        width="100%"
        position="fixed"
        top="0" />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Header />
          <FolderButton
            name="Westpac"
            Contents={<WestpacContent />}
          />
        </Box>
      </Container>
      <Footer />
    </div>
  );
}
