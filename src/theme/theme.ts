import { Theme, createTheme } from '@mui/material';

export const AppLightTheme : Theme= createTheme({
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
      default: '#556cd6', 
      paper: '#5571d6', 
    },
    text: {
      primary: '#000000', 
      secondary: '#000000', 
    },
  
  },
  
});

export const AppDarkTheme = createTheme({
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
      default:  '#121212', 
      paper: '#121212', 
    },
    text: {
      primary: '#FFFFFF', 
      secondary: '#FFEEFF', 
    },
    mode: 'dark', 
  },
  
});
