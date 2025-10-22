import React from "react";
import Box from "@mui/material/Box";
import Logo from "./Logocomponent";
import BottomNavBar from "./BottomNavBar";
import LeftNavBarButton from "./LeftNavBarButton";
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        id="toppanel"
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "100%",
          height: "10%",
        }}
      >
        <Logo />
      </Box>
      <Box
        id="mainPanel"
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          id="leftNavBar"
          sx={{
            width: "300px",
            display: {
              xs: "none",
              md: "flex",
            },
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "20px",
            marginTop: "20px",         
          }}
        >
          {LeftNavBarButton(<HomeIcon />, "Home")}
          {LeftNavBarButton(<RestaurantIcon />, "Calories")}
          {LeftNavBarButton(<FitnessCenterIcon />, "Exercises")}
          {LeftNavBarButton(<BarChartIcon />, "Statistics")}
          {LeftNavBarButton(<PersonIcon />, "Account")}
        </Box>
        <Box
          id="contentPanel"
          sx={{ backgroundColor: "green", height: "100%", width: "100%" }}
        >
          {children}
        </Box>
      </Box>
      <Box
        id="bottomNavBar"
        sx={{
          backgroundColor: "blue",
          height: "10%",
          width: "100%",
          display: { xs: "block", md: "none" },
        }}
      >
        <BottomNavBar />
      </Box>
    </Box>
  );
}
