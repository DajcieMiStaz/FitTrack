import type {Theme} from '@mui/material/styles';
import {createTheme} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        tertiary?: Palette['primary'];
        quarternary?: Palette['primary'];
    }

    interface PaletteOptions {
        tertiary?: PaletteOptions['primary'];
        quarternary?: PaletteOptions['primary'];
    }
}

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
        error: {
            main: '#BA1A1A',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#F5FBF1',
            paper: '#F5FBF1',
        },
        text: {
            primary: '#1A1C1A',
            secondary: '#414942',
        },
        divider: '#C1C9C0',
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});

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