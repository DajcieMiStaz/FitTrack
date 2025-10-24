import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import type React from 'react';

type Props = {
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick?: () => void;
};

export default function LeftNavBarButton({ icon, label, isActive, onClick }: Props) {

  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={onClick} startIcon={icon} sx={{ textTransform: "none", fontSize: "15px", color: isActive? "background.default" : "text.primary" , backgroundColor: isActive? "primary.main": "background.main", width: "200px", justifyContent: "flex-start", "&:hover": { bgcolor: isActive? 'primary.main' : 'secondary.main' } ,"&:active": { bgcolor: 'primary.main' },}}>
        {label}
      </Button>
    </Stack>
  );
}