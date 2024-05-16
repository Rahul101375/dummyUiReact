import * as React from 'react';
import * as MaterialModule from '../../common/Material'
import * as StyleModule from '../../common/Styles'

const BorderLinearProgress = StyleModule.styled(MaterialModule.LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${MaterialModule.linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${MaterialModule.linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props) {
  return (
    <MaterialModule.Box sx={{ position: 'relative' }}>
      <MaterialModule.CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <MaterialModule.CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${MaterialModule.circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </MaterialModule.Box>
  );
}

// From https://github.com/mui/material-ui/issues/9496#issuecomment-959408221

function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <MaterialModule.CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
    </React.Fragment>
  );
}

export default function CustomizedProgressBars() {
  return (
    <MaterialModule.Stack spacing={2} sx={{ flexGrow: 1 }}>
      <FacebookCircularProgress />
      <GradientCircularProgress />
      <br />
      <BorderLinearProgress variant="determinate" value={50} />
    </MaterialModule.Stack>
  );
}