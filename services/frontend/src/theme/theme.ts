import { createTheme } from '@mui/material/styles';
import themeJson from './material-theme.json';

// Tworzymy motyw MUI na podstawie JSON
const theme = createTheme(themeJson);

export default theme;