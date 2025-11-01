import { Box, Typography } from "@mui/material";
import TodayWeekHistorySwitch from "../components/Exercises/TodayWeekHistorySwitch";
import { useState, useMemo } from "react";
import AddExerciseButton from "../components/Exercises/AddExerciseButton";
import AddExercisePopup from "../components/Exercises/AddExercisePopup";
import ExerciseAccordionComponent from "../components/Exercises/ExerciseAccordionComponent";
import { v4 as uuid4 } from "uuid";
import WeekSelectorExercises from "../components/Exercises/WeekSelectorExercises";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isoWeek from "dayjs/plugin/isoWeek";
import "dayjs/locale/en";
import AddIcon from "@mui/icons-material/Add";
import DayOfWeekAccordionComponent from "../components/Exercises/DayOfWeekAccordionComponent";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isoWeek);
dayjs.locale("en");

type Exercise = {
  id: string;
  name: string;
  sets: { id: string; reps: number; weight: number }[];
  date: Date;
};

export default function Exercises() {
  const today = dayjs();
  const [selectedTab, setSelectedTab] = useState("today");
  const [exercises, setExercises] = useState<Exercise[]>([
    {
      id: "1",
      name: "Bench Press",
      sets: [
        { id: "1", reps: 8, weight: 60 },
        { id: "2", reps: 8, weight: 65 },
        { id: "3", reps: 6, weight: 70 },
      ],
      date: new Date("2025-10-20"),
    },
    {
      id: "2",
      name: "Squats",
      sets: [
        { id: "4", reps: 10, weight: 80 },
        { id: "5", reps: 10, weight: 85 },
        { id: "6", reps: 8, weight: 90 },
      ],
      date: new Date("2025-11-01"),
    },
  ]);

  const [open, setOpen] = useState(false);
  const [exerciseName, setExerciseName] = useState("");
  const [activeDate, setActiveDate] = useState(today);
  const [currentWeekStart, setCurrentWeekStart] = useState(today.startOf("isoWeek"));
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);

  // -------------------- Handlery --------------------

  const handleOpen = (day?: Date) => {
    setSelectedDay(day || new Date());
    setOpen(true);
  };

  const handleClose = () => {
    setExerciseName("");
    setOpen(false);
  };

  const handleSave = (name: string) => {
    if (!selectedDay) return;
    const newExercise: Exercise = {
      id: uuid4(),
      name,
      sets: [{ id: uuid4(), reps: 0, weight: 0 }],
      date: selectedDay,
    };
    setExercises((prev) => [...prev, newExercise]);
    handleClose();
  };

  const HandleExerciseDelete = (id: string | number) => {
    setExercises((prev) => prev.filter((exercise) => exercise.id !== id));
  };

  // -------------------- Tydzień --------------------
  const daysOfWeek = Array.from({ length: 7 }, (_, i) => currentWeekStart.add(i, "day"));

  const exercisesByDay = useMemo(() => {
    const start = currentWeekStart;
    const end = start.add(6, "day");

    const weekExercises = exercises.filter(
      (ex) =>
        dayjs(ex.date).isSameOrAfter(start, "day") &&
        dayjs(ex.date).isSameOrBefore(end, "day")
    );

    return weekExercises.reduce((acc, ex) => {
      const key = dayjs(ex.date).format("YYYY-MM-DD");
      if (!acc[key]) acc[key] = [];
      acc[key].push(ex);
      return acc;
    }, {} as Record<string, Exercise[]>);
  }, [exercises, currentWeekStart]);

  // -------------------- JSX --------------------
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Header */}
      <Box
        id="header"
        sx={{
          height: { xs: "100px", md: "125px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: { xs: "18px", md: "20px" }, fontWeight: "bold" }}>Workout Tracker</Typography>
        <Typography color="tertiary.main" sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          Track your sets, reps, and weight
        </Typography>
      </Box>

      <TodayWeekHistorySwitch selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {/* --- Today Tab --- */}
      {selectedTab === "today" && (
        <>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography sx={{ fontSize: { xs: "16px", md: "20px" } , fontWeight: "bold"}}>Active Workout</Typography>
            <AddExerciseButton onClick={() => handleOpen()} />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {exercises
              .filter((ex) => dayjs(ex.date).isSame(today, "day"))
              .map((exercise) => (
                <ExerciseAccordionComponent
                  key={exercise.id}
                  label={exercise.name}
                  sets={exercise.sets}
                  HandleExerciseDelete={() => HandleExerciseDelete(exercise.id)}
                />
              ))}
          </Box>
        </>
      )}

      {/* --- Weekly Tab --- */}
      {selectedTab === "weekly" && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <WeekSelectorExercises
            activeDate={activeDate}
            today={today}
            setActiveDate={setActiveDate}
            currentWeekStart={currentWeekStart}
            setCurrentWeekStart={setCurrentWeekStart}
          />

          {daysOfWeek.map((day) => (
            <DayOfWeekAccordionComponent
              key={day.format("YYYY-MM-DD")}
              label={day.format("dddd")}
              exercise={exercisesByDay[day.format("YYYY-MM-DD")] || []}
              HandleExerciseDelete={(id) => HandleExerciseDelete(id)}
              addExerciseButton={
                <AddExerciseButton
                  onClick={(event) => {
                    event.stopPropagation();
                    handleOpen(day.toDate());
                  }}
                  buttonContent={<AddIcon />}
                  buttonProps={{
                    variant: "outlined",
                    color: "primary",
                    startIcon: "",
                  }}
                />
              }
            />
          ))}
        </Box>
      )} 
      {/* --- History Tab --- */}
      {selectedTab === "history" && (
        <WeekSelectorExercises
          activeDate={activeDate}
          today={today}
          setActiveDate={setActiveDate}
          currentWeekStart={currentWeekStart}
          setCurrentWeekStart={setCurrentWeekStart}
        />
      )}

      {/* --- Shared Dialog --- */}
      <AddExercisePopup
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
        exerciseName={exerciseName}
        setExerciseName={setExerciseName}
      /> 
    </Box>
  );
}
