import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type AddSetButtonProps = {
    onClick: () => void;
};
export default function AddSetButton({ onClick }: AddSetButtonProps) {
  return (
    <Button onClick={onClick} variant="outlined" sx={{width:"100%" , marginTop:"10px" , "&:hover": { backgroundColor: "workoutpanel.main" } }} startIcon={<AddIcon />}>
      Add Set
    </Button>
  );
}
