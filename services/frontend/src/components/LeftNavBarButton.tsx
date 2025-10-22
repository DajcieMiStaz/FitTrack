
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import type React from 'react';

export default function LeftNavBarButton( icon: React.ReactNode , label: string) {


  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={icon} color='primary' sx={{ width: "200px" , justifyContent: "flex-start" ,"&:hover": { bgcolor: '#3DDC97', color: 'black' }}}>
        {label}
      </Button>
    </Stack>
  );
}