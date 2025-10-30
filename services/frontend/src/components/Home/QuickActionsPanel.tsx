import {Box, Typography} from "@mui/material";
import QuickActionButton from "./QuickActionButton";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

export default function QuickActionsPanel() {
    return (
        <Box sx={{height: "auto", width: "100%", paddingTop: "5px"}}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                }}
            >
                <Typography sx={{fontWeight: "bold"}}>Quick Actions</Typography>
            </Box>
            <Box
                id="quick-actionsdiv"
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}
            >
                <QuickActionButton
                    label="Add Meal"
                    description="Track your nutrition"
                    icon={<RestaurantIcon/>}
                />
                <QuickActionButton
                    label="Add Exercise"
                    description="Log your workout"
                    icon={<FitnessCenterIcon/>}
                />
            </Box>
        </Box>
    );
}
