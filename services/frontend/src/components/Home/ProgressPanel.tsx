import { Box, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ScaleIcon from "@mui/icons-material/Scale";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ProgressBar from "./ProgressBar";

export default function ProgressPanel() {
  return (
    <Box
      sx={{
        height: { xs: "125px", md: "150px" },
        width: "100%",
        border: "1px solid black",
        borderColor: "divider",
        borderRadius: "8px",
        display: "flex",
      }}
    >
      <Box
        id="workoutBox"
        sx={{
          width: "33.33%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingInline: "10px",
        }}
      >
        <Box
          sx={{
            height: "33.33%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FitnessCenterIcon
            sx={{ color: "primary.main", fontSize: { xs: 20, md: 30 } }}
          />
        </Box>
        <Box
          sx={{
            height: "33.33%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography color="primary.main" fontSize={{ xs: 20, md: 25 }}>
            3/5
          </Typography>
          <Typography color="tertiary.main" fontSize={{ xs: 12, md: 13 }}>
            Workouts
          </Typography>
        </Box>
        <Box
          sx={{
            height: "33.33%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProgressBar currentValue={3} goalValue={5} />
        </Box>
      </Box>
      <Box
        id="targetBox"
        sx={{
          width: "33.33%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingInline: "10px",
          order: 2,
        }}
      >
        <Box
          sx={{
            height: "33.33%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ScaleIcon
            sx={{ color: "primary.main", fontSize: { xs: 20, md: 30 } }}
          />
        </Box>
        <Box
          sx={{
            height: "33.33%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography color="primary.main" fontSize={{ xs: 20, md: 25 }}>
            {70}kg
          </Typography>
          <Typography color="tertiary.main" fontSize={{ xs: 12, md: 13 }}>
            Target: {75}kg
          </Typography>
        </Box>
        <Box
          sx={{
            height: "33.33%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProgressBar currentValue={3} goalValue={5} />
        </Box>
      </Box>
      <Box
        id="ActiveDaysBox"
        sx={{
          width: "33.33%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingInline: "10px",
        }}
      >
        <Box
          sx={{
            height: "30%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <ShowChartIcon
            sx={{ color: "primary.main", fontSize: { xs: 30, md: 40 } }}
          />
        </Box>
        <Box
          sx={{
            height: "70%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography
            color="primary.main"
            fontSize={{ xs: 30, md: 35 }}
            fontWeight="bold"
          >
            {18}
          </Typography>
          <Typography color="tertiary.main" fontSize={{ xs: 17, md: 19 }}>
            Active Days
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
