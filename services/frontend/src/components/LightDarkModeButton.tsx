import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

type Props = {
    mode: 'light' | 'dark';
    toggleMode: () => void;
};


export default function LightDarkModeButton({ mode, toggleMode }: Props) {
    return (
    <Box sx={{display: "flex", alignItems:"center"}}>
      <IconButton aria-label= "toggle theme" onClick={toggleMode} sx={{height: "50px" , width: "50px"}}>
        {mode === 'light' ? <LightModeIcon sx={{fontSize:"20px"}} /> : <DarkModeIcon sx={{fontSize:"20px"}} />}
      </IconButton>
    </Box>
    )
}



