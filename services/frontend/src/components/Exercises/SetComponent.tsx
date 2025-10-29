import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

type Props = {
  index: number;
  reps: number;
  weight: number;
  onDelete: () => void;
};

export default function SetComponent({ index , reps, weight, onDelete }: Props) {
  const [weightValue, setWeight] = useState(weight);
  const [repsValue, setReps] = useState(reps);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundColor: "workoutpanel.main",
        borderRadius: "8px",
        padding: "10px",
        alignItems: "center",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "82%", gap:2 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: { xs: "25%", md: "18%" },
          }}
        >
          <Typography>{index}</Typography>
        </Box>
        <Box sx={{ backgroundColor: "background.paper" , borderRadius:"8px" , paddingInline:{md:"60px", xs:"20px"}}}>
          <TextField
            variant="standard"
            value={repsValue}
          type="number"
          onChange={(e) =>
            setReps((e.target as HTMLInputElement).valueAsNumber || 0)
          }
          slotProps={{
            input: {
              inputProps: { min: 0, max: 100, step: 1 },
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
              disableUnderline: true,
              sx: { width: { xs: "50px", md: "60px" }, fontSize: "16px" },
            },
          }}
        />
        </Box>
        <Box sx={{ backgroundColor: "background.paper", borderRadius:"8px" , paddingInline:{md:"60px", xs:"10px"} }}>
        <TextField
          variant="standard"
          value={weightValue}
          onChange={(e) =>
            setWeight((e.target as HTMLInputElement).valueAsNumber || 0)
          }
          type="number"
          slotProps={{
            input: {
              inputProps: { min: 0, max: 100, step: 1 },
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
              disableUnderline: true,
              sx: { width: { xs: "50px", md: "60px" }, fontSize: "16px" },
            },
          }}
        />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width:{xs:"25%", md:"18%"},
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Button onClick={onDelete} sx={{ color: "text.primary" }}>
          <DeleteOutlineIcon />
        </Button>
      </Box>
    </Box>
  );
}
