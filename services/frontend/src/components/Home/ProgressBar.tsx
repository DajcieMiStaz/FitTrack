import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';



const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "secondary.main",
    ...theme.applyStyles('dark', {
      backgroundColor: "secondary.main",
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: 'primary.main',
    ...theme.applyStyles('dark', {
      backgroundColor: 'primary.main',
    }),
  },
}));

type Props = {
    currentValue?: number;
    goalValue?: number;
};

export default function ProgressBar({currentValue, goalValue}: Props) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (currentValue !== undefined && goalValue !== undefined) {
      setProgress((currentValue / goalValue) * 100);
    }
  }, [currentValue, goalValue]);

  return (
    <Box sx={{ width: '100%' }}>
      <StyledLinearProgress variant="determinate" value={progress} />
    </Box>
  );
}