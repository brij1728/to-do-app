import { Container, Grid } from '@mui/material';

import { Home } from './pages';
import React from 'react';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';

const App: React.FC = () => {
  return (
    <>
      <Container>
        <Grid container justifyContent="flex-end" mt={2} mb={4}> 
          <Grid item>
            <ThemeSwitcher/>
          </Grid>
        </Grid>
      </Container>

      <Home />
    </>
  );
};

export default App;
