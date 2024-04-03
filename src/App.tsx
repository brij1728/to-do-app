import { Container, Grid } from '@mui/material';

import { Home } from './pages';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Container>
        <Grid container justifyContent="flex-end" mt={2} mb={4}> 
          <Grid item>
          
          </Grid>
        </Grid>
      </Container>

      <Home />
    </>
  );
};

export default App;
