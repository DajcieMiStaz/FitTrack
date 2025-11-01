import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExerciseAccordionComponent from "./ExerciseAccordionComponent";

type Props = {
  label: string;
  exercise: Exercise[];
  HandleExerciseDelete: (id: string | number) => void;
  addExerciseButton: React.ReactNode;
};

type Exercise = {
  id: string;
  name: string;
  sets: { id: string; reps: number; weight: number }[];
};

export default function DayOfWeekAccordionComponent({
  label,
  exercise,
  HandleExerciseDelete,
  addExerciseButton,
}: Props) {
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Box
              sx={{
                paddingRight: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography fontWeight="bold">{label}</Typography>
            </Box>
            <Box sx={{display:"flex", flexDirection:"row"}}>
              <Typography
                sx={{ fontSize: "14px", display: "flex", alignItems: "center" }}
              >
                {exercise.length} exercises
              </Typography>
              <Box>
                {addExerciseButton}
              </Box>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {exercise.map((ex) => (
            <ExerciseAccordionComponent
              key={ex.id}
              label={ex.name}
              sets={ex.sets}
              HandleExerciseDelete={() => HandleExerciseDelete(ex.id)}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
