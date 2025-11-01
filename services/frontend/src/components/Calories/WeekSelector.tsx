import {useMemo, useState} from "react";
import {Box, IconButton, Typography} from "@mui/material";
import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";
import {Dayjs} from "dayjs";
import Button from "@mui/material/Button";

type Props = {
    activeDate: Dayjs;
    today: Dayjs;
    setActiveDate: (day: Dayjs) => void;
}

export default function WeekSelector({activeDate, today, setActiveDate}: Props) {

    const [currentWeekStart, setCurrentWeekStart] = useState(
        today.startOf("week").add(1, "day")
    );

    const daysOfWeek = useMemo(() => {
        return Array.from({length: 7}, (_, i) => currentWeekStart.add(i, "day"));
    }, [currentWeekStart]);

    const handlePrevWeek = () => {
        setCurrentWeekStart(currentWeekStart.subtract(1, "week"));
    };

    const handleNextWeek = () => {
        setCurrentWeekStart(currentWeekStart.add(1, "week"));
    };

    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: {xs: "100px", md: "120px"},
                width: "100%",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: "8px",
            }}>
                <Typography sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    paddingTop: "5px"
                }}>{daysOfWeek.at(0)?.format("MMMM")}</Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        paddingInline: "10px",
                        justifyContent: "space-between",
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <IconButton onClick={handlePrevWeek}
                                sx={{height: {xs: "6dvw", md: "50px"}, width: {xs: "6dvw", md: "50px"}}}>
                        <ArrowBackIos sx={{fontSize: {xs: "6dvw", md: "50px"}}}/>
                    </IconButton>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: {xs: "space-around", md: "center"},
                            gap: 1,
                            flexGrow: 1,
                        }}
                    >
                        {daysOfWeek.map((day) => {
                            const isToday = day.isSame(today, "day");
                            const isActive = day.isSame(activeDate, "day");
                            return (
                                <Button
                                    key={day.format("YYYY-MM-DD")}
                                    onClick={() => setActiveDate(day)}
                                    sx={{
                                        minWidth: "auto",
                                        width: {xs: "8dvw", md: "50px"},
                                        p: {xs: 0.5, md: 1},
                                        backgroundColor: isActive ? "primary.main" : isToday ? "divider" : "transparent",
                                        color: isActive ? "background.default" : "text.primary",
                                        borderRadius: "10%",
                                        display: "flex",
                                        flexDirection: "column",
                                        transition: "all 0.2s ease",
                                    }}>
                                    <Typography sx={{fontWeight: isActive ? "bold" : "normal"}}>
                                        {day.format("dd")}
                                    </Typography>
                                    <Typography sx={{fontWeight: isActive ? "bold" : "normal"}}>
                                        {day.format("D")}
                                    </Typography>
                                </Button>
                            );
                        })}
                    </Box>

                    <IconButton onClick={handleNextWeek}
                                sx={{height: {xs: "6dvw", md: "50px"}, width: {xs: "6dvw", md: "50px"}}}>
                        <ArrowForwardIos sx={{fontSize: {xs: "6dvw", md: "50px"}}}/>
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};
