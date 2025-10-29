import {Box, Typography} from "@mui/material";
import TodaysNutrition from "../components/Home/TodaysNutrition";
import QuickActions from "../components/Home/QuickActionsPanel";
import ProgressPanel from "../components/Home/ProgressPanel";
import TodaysWorkoutPanel from "../components/Home/TodaysWorkoutPanel";

export default function Home() {
    return (
        <Box sx={{display: "flex", flexDirection: "column", gap: {xs: "10px", md: "25px"}}}>
            <Box id="header" sx={{height: {xs: "100px", md: "150px"}, width: "100%"}}>
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
                    <Typography sx={{color: "tertiary.main"}}>
                        Track your fitness journey
                    </Typography>
                </Box>
            </Box>
            <ProgressPanel/>
            <TodaysNutrition/>
            <QuickActions/>
            <TodaysWorkoutPanel/>
        </Box>
    );
}
