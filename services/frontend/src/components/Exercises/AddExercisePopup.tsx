import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

type Props = {
  open: boolean;
  handleClose: () => void;
  handleSave: (name: string) => void;
  exerciseName: string;
  setExerciseName: (s: string) => void;
};

export default function AddExercisePopup({
  open,
  handleClose,
  handleSave,
  exerciseName,
  setExerciseName,
}: Props) {
  return (
    <BootstrapDialog
      aria-labelledby="add-exercise-dialog"
      open={open}
      onClose={(_, reason) => {
        if (reason === "backdropClick" || reason === "escapeKeyDown") return;
        handleClose();
      }}
      fullWidth
    >
      <DialogTitle sx={{ fontWeight: "bold" }}>
        Add Exercise
        <Typography sx={{ color: "text.secondary" }}>
          Add a new exercise to your workout
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <TextField
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
          label="Exercise Name"
          fullWidth
        />
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          onClick={() => handleSave(exerciseName)}
          autoFocus
        >
          Save
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
