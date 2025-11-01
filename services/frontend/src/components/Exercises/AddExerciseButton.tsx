import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";

type Props = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleSave: (name: string) => void;
  exerciseName: string;
  setExerciseName: (s: string) => void;
  buttonContent?: React.ReactNode;  // nowy prop
  buttonProps?: any; // dodatkowe właściwości dla przycisku
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function AddExerciseButton({
  open,
  handleOpen,
  handleClose,
  handleSave,
  exerciseName,
  setExerciseName,
  buttonContent,
  buttonProps
}: Props) {
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
        <Button
          variant="contained"
          onClick={handleOpen}
          color="primary"
          startIcon={<AddIcon />}
          {...buttonProps}
          sx={{
            fontSize: { xs: "0.8rem", md: "1rem" },
            padding: { xs: "4px 8px", md: "8px 16px" },
            borderRadius: "10px",
          }}
        >
           {buttonContent || "Add Exercise"}
        </Button>
        <BootstrapDialog
          aria-labelledby="customized-dialog-title"
          open={open}
          onClose={(_, reason) => {
            if (reason === "backdropClick" || reason === "escapeKeyDown")
              return;
            handleClose();
          }}
          fullWidth={true}
        >
          <DialogTitle
            sx={{ m: 0, p: 2, fontWeight: "bold" }}
            id="customized-dialog-title"
          >
            Add Exercise
            <Typography sx={{ color: "quaternary.main" }}>
              Add a new exercise to today's workout
            </Typography>
          </DialogTitle>
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
              autoFocus
              onClick={() => handleSave(exerciseName)}
              variant="contained"
            >
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </Box>
    </Box>
  );
}
