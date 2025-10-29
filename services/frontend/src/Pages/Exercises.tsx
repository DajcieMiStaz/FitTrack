import { Box, Typography } from "@mui/material";
import TodayWeekHistorySwitch from "../components/Exercises/TodayWeekHistorySwitch";
import { useState } from "react";
import AddExerciseButton from "../components/Exercises/AddExerciseButton";
import ExerciseAccordionComponent from "../components/Exercises/ExerciseAccordionComponent";

export default function Exercises() {
  const mockExercises = [
    {
      id: 1,
      name: "Bench Press",
      sets: [
        { id: 1, reps: 8, weight: 60 },
        { id: 2, reps: 8, weight: 65 },
        { id: 3, reps: 6, weight: 70 },
      ],
    },
    {
      id: 2,
      name: "Squats",
      sets: [
        { id: 4, reps: 10, weight: 80 },
        { id: 5, reps: 10, weight: 85 },
        { id: 6, reps: 8, weight: 90 },
      ],
    },
  ];

  const [selectedTab, setSelectedTab] = useState("today");
  const [exercises, setExercises] = useState(mockExercises);

  const HandleExerciseDelete = (id: number | string) => {
    const newExercises = exercises.filter((exercise) => exercise.id !== id);
    setExercises(newExercises);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        id="header"
        sx={{
          height: { xs: "100px", md: "125px" },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: { xs: "18px", md: "20px" } }}>
          Workout Tracker
        </Typography>
        <Typography
          color="tertiary.main"
          sx={{ fontSize: { xs: "14px", md: "16px" } }}
        >
          Track your sets, reps, and weight
        </Typography>
      </Box>
      <TodayWeekHistorySwitch
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === "today" ? (
        <>
          <AddExerciseButton />
          <Box sx={{display:"flex", flexDirection:"column", gap:"10px"}}>
          {exercises.map((exercise) => (
            <ExerciseAccordionComponent
              key={exercise.id}
              label={exercise.name}
              sets={exercise.sets}
              HandleExerciseDelete={() => HandleExerciseDelete(exercise.id)}
            />
          ))}
          </Box>
        </>
      ) : null}
      {selectedTab === "weekly" ? <></> : null}
      {selectedTab === "history" ? <></> : null}
    </Box>
  );
}
