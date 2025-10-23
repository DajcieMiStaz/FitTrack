import React, { useState } from "react";
import Box from "@mui/material/Box";
import Logo from "./Logocomponent";
import BottomNavBar from "./BottomNavBar";
import LeftNavBarButton from "./LeftNavBarButton";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";
import AccountButton from "./AccountButton";
import LightDarkModeButton from "./LightDarkModeButton";
import { useThemeMode } from "../theme/ThemeProviderWrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { mode, toggleTheme } = useThemeMode();
  const [activeButton, setActiveButton] = useState("Home");
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
        <Box
          sx={{
            alignItems: "center",
            marginLeft: {
              xs: "2vw",
              sm: "3vw",
              md: "4vw",
              lg: "40px",
            },
            marginTop: "35px",
          }}
        >
          <Logo />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "space-between",
            marginRight: "30px",
            gap: "10px",
          }}
        >
          <AccountButton name="User" />
          <LightDarkModeButton mode={mode} toggleMode={toggleTheme} />
        </Box>
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
            paddingTop: "20px",
            borderRight: 1,
            borderColor: "divider",
          }}
        >
          <LeftNavBarButton
            icon={<HomeIcon />}
            label="Home"
            isActive={activeButton === "Home"}
            onClick={() => setActiveButton("Home")}
          />
          <LeftNavBarButton
            icon={<RestaurantIcon />}
            label="Calories"
            isActive={activeButton === "Calories"}
            onClick={() => setActiveButton("Calories")}
          />
          <LeftNavBarButton
            icon={<FitnessCenterIcon />}
            label="Exercises"
            isActive={activeButton === "Exercises"}
            onClick={() => setActiveButton("Exercises")}
          />
          <LeftNavBarButton
            icon={<BarChartIcon />}
            label="Statistics"
            isActive={activeButton === "Statistics"}
            onClick={() => setActiveButton("Statistics")}
          />
          <LeftNavBarButton
            icon={<PersonIcon />}
            label="Account"
            isActive={activeButton === "Account"}
            onClick={() => setActiveButton("Account")}
          />
        </Box>
        <Box
          id="contentPanel"
          sx={{
            backgroundColor: "background.main",
            height: "100%",
            width: "100%",
          }}
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
