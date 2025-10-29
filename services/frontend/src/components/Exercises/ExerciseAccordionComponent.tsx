import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SetRepsPanel from "./SetRepsPanel";
import { useState } from "react";
import SetComponent from "./SetComponent";
import AddSetButton from "./AddSetButton";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

type ExerciseAccordionComponentProps = {
  label: string;
  sets: { id: number | string; reps: number; weight: number }[];
  HandleExerciseDelete: () => void;
};

export default function ExerciseAccordionComponent({
  label,
  sets,
  HandleExerciseDelete,
}: ExerciseAccordionComponentProps) {
  const [exerciseSets, setExerciseSets] = useState(sets);

  const HandleSetDelete = (id: number | string) => {
    const newSets = exerciseSets.filter((set) => set.id !== id);
    setExerciseSets(newSets);
  };

  const HandleAddSet = () => {
    const newSet = {
      id: uuidv4(),
      reps: 0,
      weight: 0,
    };
    setExerciseSets([...exerciseSets, newSet]);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column"}}>
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
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            
              <Typography component="span"> {label}</Typography>
              <Button
                sx={{
                  margin: 0,
                  padding: 0,
                    minWidth: "auto",
                }}
                onClick={(event) => {
                  event.stopPropagation();
                  HandleExerciseDelete();
                }}
              >
                <DeleteOutlineIcon />
              </Button>
            
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <SetRepsPanel />
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {exerciseSets.map((set, index) => (
              <SetComponent
                key={set.id}
                index={index + 1}
                reps={set.reps}
                weight={set.weight}
                onDelete={() => HandleSetDelete(set.id)}
              />
            ))}
          </Box>
          <Box>
            <AddSetButton onClick={HandleAddSet} />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
