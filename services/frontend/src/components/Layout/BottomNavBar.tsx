import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PersonIcon from '@mui/icons-material/Person';
import ScaleIcon from '@mui/icons-material/Scale';

export default function BottomNavBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%" , height: "100%"}}>
      <BottomNavigation sx={{height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around" }}
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Calories" icon={<RestaurantIcon />} />
        <BottomNavigationAction label="Exercises" icon={<FitnessCenterIcon />} />
        <BottomNavigationAction label="Measurements" icon={<ScaleIcon />} />
        <BottomNavigationAction label="Account" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
}