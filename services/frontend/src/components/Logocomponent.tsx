import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, green } from "@mui/material/colors";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { colors, Typography } from "@mui/material";

export default function Logo() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        alignItems: "center",
        marginLeft: {
          xs: "2vw",
          sm: "3vw",
          md: "4vw",
          lg: "40px",
        },
      }}
    >
      <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
        <FitnessCenterIcon />
      </Avatar>
      <Typography sx={{ color: "black", fontSize: "h5.fontSize" }}>
        FitTrack
      </Typography>
    </Stack>
  );
}
