import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import { useThemeMode } from "../../theme/ThemeProviderWrapper";
import { grey } from "@mui/material/colors";

type Props = {
  label: string;
  setsvalue: number;
  repsvalue: number;
};

export default function ExerciseComponent({
  label,
  setsvalue,
  repsvalue,
}: Props) {
  const [completed, setCompleted] = useState(false);
  const theme = useThemeMode();
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        border: "1px solid black",
        borderColor: "divider",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor:
          theme.mode === "light"
            ? completed
              ? "divider"
              : "quarternary.main"
            : completed
            ? "divider"
            : "background.paper",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box sx={{ width: "5%", height: "100%", display: "flex" }}>
        <Typography color="primary.main">1</Typography>
      </Box>
      <Box
        sx={{
          width: "85%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography
            id="exercise-label"
            sx={{
              textDecoration: completed ? "line-through" : "none",
              textDecorationColor: grey[800],
              textDecorationThickness: "2px",
              textDecorationStyle: "solid",
            }}
          >
            {label}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Typography color="tertiary.main">{setsvalue} sets</Typography>
          <Typography color="tertiary.main">{repsvalue} reps</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "10%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Checkbox
          checked={completed}
          onChange={() => setCompleted(!completed)}
          color="primary"
          sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
        />
      </Box>
    </Box>
  );
}
