import { createTheme } from '@mui/material/styles';

// Define custom background and text colors
const lightBackground = '#556cd6';
const darkBackground = '#292B32';
const lightText = '#000000';
const darkText = '#FFFFFF';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#5571d6',
    },
    error: {
      main: '#FF1744',
    },
    background: {
      default: lightBackground, 
      paper: darkBackground, 
    },
    text: {
      primary: lightText, 
      secondary: darkText, 
    },
    mode: 'light', // Initial mode set to light
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: 8,
          },
          padding: 8,
        },
      },
    },
  },
});

export default theme;
