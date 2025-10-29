import { createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

// --- Extend MUI palette to support `tertiary`
declare module '@mui/material/styles' {
  interface Palette {
    tertiary?: Palette['primary'];
    quarternary?: Palette['primary'];
    workoutpanel?: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    quarternary?: PaletteOptions['primary'];
    workoutpanel?: PaletteOptions['primary'];
  }
}

// 🎨 Light theme
export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#006B30',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#659e7f',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#6c6f6a',
      contrastText: '#FFFFFF',
    },
    quarternary: {
      main: '#dff9e4',
      contrastText: '#FFFFFF',
    },
    workoutpanel: {
      main: '#d9f1e1',
      contrastText: '#1A1C1A',
    },
    error: {
      main: '#BA1A1A',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5FBF1', // from "background"
      paper: '#F5FBF1', // from "surface"
    },
    text: {
      primary: '#1A1C1A', // onSurface
      secondary: '#414942', // onSurfaceVariant
    },
    divider: '#C1C9C0', // outlineVariant
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

// 🌙 Dark theme
export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#006B30',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#659e7f',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#FFFFFF',
      contrastText: '#FFFFFF',
    },
    quarternary: {
      main: '#C1C9C0',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#FFB4AB',
      contrastText: '#690005',
    },
    background: {
      default: '#0c0c0cff',
      paper: '#0c0c0cff',
    },
    text: {
      primary: '#E3E3DF',
      secondary: '#C1C9C0',
    },
    divider: '#414942',
  },
  
});