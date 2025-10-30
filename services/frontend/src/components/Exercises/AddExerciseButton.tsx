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

type Props = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};



export default function AddExerciseButton({ open, handleOpen, handleClose }: Props) {

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


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
        <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
          Active Workout
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="contained"
          onClick={handleOpen}
          color="primary"
          startIcon={<AddIcon />}
          sx={{
            fontSize: { xs: "0.8rem", md: "1rem" },
            padding: { xs: "4px 8px", md: "8px 16px" },
            borderRadius: "10px",
          }}
        >
          Add Exercise
        </Button>
        <BootstrapDialog
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Add Exercise
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
            
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} variant="outlined">
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </Box>
    </Box>
  );
}
