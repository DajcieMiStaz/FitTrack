import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Typography } from "@mui/material";

export default function LogoComponent() {
  return (
    <Stack
      direction="row"
      spacing={2}
    >
      <Avatar sx={{ bgcolor: "primary.main" , borderRadius: "10px" }} variant="rounded">
        <FitnessCenterIcon sx={{ fontSize: "30px" }} />
      </Avatar>
      <Typography sx={{  fontSize: "h5.fontSize" , color: "text.primary", fontWeight: "bold" }}>
        FitTrack
      </Typography>
    </Stack>
  );
}
