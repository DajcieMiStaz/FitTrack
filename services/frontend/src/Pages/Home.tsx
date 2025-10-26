import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import TodaysNutrition from "../components/Home/TodaysNutrition";
import QuickActions from "../components/Home/QuickActionsPanel";
import ProgressPanel from "../components/Home/ProgressPanel";

export default function Home() {
  return (
    <>
      <Box id="header" sx={{ height: "150px", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "text-primary",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Welcome User!
          </Typography>
          <Typography sx={{ color: "tertiary.main" }}>
            Track your fitness journey
          </Typography>
        </Box>
      </Box>
      <ProgressPanel />
      <TodaysNutrition 
      currentCalories={500} goalCalories={1000} 
      currentProtein={50} goalProtein={100} 
      currentFat={30} goalFat={70} 
      currentCarbs={100} goalCarbs={200} 
      />
      <QuickActions /> 
    </>
  );
}
