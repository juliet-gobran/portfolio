import * as React from 'react';
import { Typography, Grid } from '@mui/material/';

export default function Header() {
  return (
    <div align='center'>
      <Grid container spacing={2} alignItems={'center'} justifyContent={'center'}>
        <Grid item>
          <Typography variant="h1" color="primary">
                Juliet Gobran
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" color="primary">
                Engineer<br/>Designer
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" color="info.main">
                +
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
