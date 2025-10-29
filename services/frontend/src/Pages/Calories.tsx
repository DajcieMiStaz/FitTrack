import {Box, Typography} from "@mui/material";
import CaloriesPanel from "../components/Calories/CaloriesPanel.tsx";
import WeekSelector from "../components/Calories/WeekSelector.tsx";
import {useState} from "react";
import dayjs from "dayjs";

export default function Calories() {
    const today = dayjs();
    const [activeDate, setActiveDate] = useState(today);
    const date = activeDate.toDate().toDateString()
    return (
        <Box sx={{display: "flex", flexDirection: "column", gap: {xs: "10px", md: "15px"}, marginTop: "30px"}}>
            <CaloriesPanel/>
            <WeekSelector activeDate={activeDate} today={today} setActiveDate={setActiveDate}/>
            <Typography>{date}</Typography>
        </Box>
    );
}
