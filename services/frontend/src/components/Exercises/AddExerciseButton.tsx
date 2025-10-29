import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";

export default function AddExerciseButton() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
        marginBottom: "16px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
          Active Workout
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          sx={{
            fontSize: { xs: "0.8rem", md: "1rem" },
            padding: { xs: "4px 8px", md: "8px 16px" },
            borderRadius: "10px",
          }}
        >
          Add Exercise
        </Button>
      </Box>
    </Box>
  );
}
