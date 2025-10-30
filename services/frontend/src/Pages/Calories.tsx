import {Box} from "@mui/material";
import CaloriesPanel from "../components/Calories/CaloriesPanel.tsx";
import WeekSelector from "../components/Calories/WeekSelector.tsx";
import React, {useState} from "react";
import dayjs from "dayjs";
import MealComponent from "../components/Calories/MealComponent.tsx";

export default function Calories() {
    const today = dayjs();
    const [activeDate, setActiveDate] = useState(today);
    return (
        <Box sx={{display: "flex", flexDirection: "column", gap: {xs: "10px", md: "15px"}, marginTop: "30px"}}>
            <CaloriesPanel/>
            <WeekSelector activeDate={activeDate} today={today} setActiveDate={setActiveDate}/>
            <MealComponent activeDate={activeDate}/>
        </Box>
    );
}
