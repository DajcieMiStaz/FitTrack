import React from "react";
import Box from "@mui/material/Box";
import Logo from "./Logocomponent";
import BottomNavBar from "./BottomNavBar";

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
        id="mainpanel"
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "300px",
            display: {
              xs: "none",
              md: "block",
              backgroundColor: "black",
              height: "100%",
            },
          }}
        ></Box>
        <Box sx={{ height: "100%", width: "100%" }}>
          <Box sx={{ backgroundColor: "green", height: "100%", width: "100%" }}>
            {children}
          </Box>
        </Box>
      </Box>
      <Box
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
