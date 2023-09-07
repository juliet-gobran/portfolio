import * as React from 'react';
import { Box } from '@mui/material/';

export default function Footer() {
  return (
    <Box component="footer"
      align="center"
      position="fixed"
      bottom="0"
      width="100%" >
      <Box component="img"
        src="/Assets/JulietsDock.svg"
        width="60%" />
    </Box>
  );
}