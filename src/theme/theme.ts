import { Theme, createTheme } from '@mui/material';

export const AppLightTheme: Theme = createTheme({
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
      default: '#FFFFFF', // Set background color to white
      paper: '#F5F5F5', // Set paper color to a light gray
    },
    text: {
      primary: '#000000', // Set primary text color to black
      secondary: '#333333', // Set secondary text color to a darker gray
    },
  },
});

export const AppDarkTheme: Theme = createTheme({
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
      default: '#121212', // Set background color to dark
      paper: '#1E1E1E', // Set paper color to a darker gray
    },
    text: {
      primary: '#FFFFFF', // Set primary text color to white
      secondary: '#CCCCCC', // Set secondary text color to a lighter gray
    },
  },
});
