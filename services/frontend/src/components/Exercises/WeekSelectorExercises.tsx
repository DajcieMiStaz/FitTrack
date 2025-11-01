import { Box, IconButton, Typography} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Dayjs } from "dayjs";

type Props = {
  activeDate: Dayjs;
  today: Dayjs;
  setActiveDate: (day: Dayjs) => void;
  currentWeekStart: Dayjs;
  setCurrentWeekStart: (day: Dayjs) => void;
};

export default function WeekSelectorExercises({
  currentWeekStart,
  setCurrentWeekStart,
}: Props) {

  const handlePrevWeek = () => {
    setCurrentWeekStart(currentWeekStart.subtract(1, "week"));
  };

  const handleNextWeek = () => {
    setCurrentWeekStart(currentWeekStart.add(1, "week"));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: { xs: "70px", md: "90px" },
        width: "100%",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingInline: "10px",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
        }}
      >
        <IconButton onClick={handlePrevWeek}>
          <ArrowBackIos />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            gap: 1,
            flexGrow: 1,
          }}
        >
          <Typography>{currentWeekStart.add(0, "day").format("MMM D")} - {currentWeekStart.add(6, "day").format("MMM D, YYYY")}</Typography>
        </Box>

        <IconButton onClick={handleNextWeek}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
}
