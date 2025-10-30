import {Box, Typography} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ExerciseComponent from "./ExerciseComponent";

export default function TodaysWorkoutPanel() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                border: "1px solid black",
                borderColor: "divider",
                borderRadius: "8px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
            }}
        >
            <Box
                id="header"
                sx={{
                    display: "flex",
                    height: {
                        xs: "40px",
                        md: "60px",
                    },
                    alignItems: "flex-start",
                    gap: "5px",
                }}
            >
                <FitnessCenterIcon
                    sx={{color: "primary.main", fontSize: {xs: 20, md: 30}}}
                />
                <Typography sx={{fontWeight: "bold"}}>
                    Today's Workout Plan
                </Typography>
            </Box>
            <ExerciseComponent label="Push Ups" setsvalue={3} repsvalue={12}/>
            <ExerciseComponent label="Push Ups" setsvalue={3} repsvalue={12}/>
        </Box>
    );
}
