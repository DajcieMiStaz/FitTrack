import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function SetRepsPanel() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" , marginRight:{xs:"30%", md:"25%"},paddingLeft:"5px"}}>
        <Typography color="tertiary.main" sx={{fontSize:{xs:"12px", md:"16px"}}}>
          Set
        </Typography>
        <Typography color="tertiary.main" sx={{fontSize:{xs:"12px", md:"16px"}}}>
          Reps
        </Typography>
        <Typography color="tertiary.main" sx={{fontSize:{xs:"12px", md:"16px"}}}>
          Weight
        </Typography>
      </Box>
    </Box>
  );
}
