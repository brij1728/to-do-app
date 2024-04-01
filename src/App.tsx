import { Container, Grid } from '@mui/material';
import { ThemePicker, theme } from './theme';

import { Home } from './pages';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container justifyContent="flex-end" mt={2} mb={4}> 
          <Grid item>
            <ThemePicker />
          </Grid>
        </Grid>
      </Container>

      <Home />
    </ThemeProvider>
  );
};

export default App;
