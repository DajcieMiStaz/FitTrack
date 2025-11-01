import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonContent?: React.ReactNode;
  buttonProps?: any;
};

export default function AddExerciseButton({
  onClick,
  buttonContent,
  buttonProps,
}: Props) {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      onClick={onClick}
      {...buttonProps}
      sx={{
        fontSize: { xs: "0.8rem", md: "1rem" },
        padding: { xs: "4px 8px", md: "8px 16px" },
        borderRadius: "10px",
      }}
    >
      {buttonContent || "Add Exercise"}
    </Button>
  );
}
