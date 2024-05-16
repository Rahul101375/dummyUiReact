import * as React from 'react';
import * as MaterialModule from '../../common/Material'
export default function CustomizedSnackbar() {
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    return (
      <div>
        <MaterialModule.Button onClick={handleClick}>Open Snackbar</MaterialModule.Button>
        <MaterialModule.Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <MaterialModule.Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            This is a success Alert inside a Snackbar!
          </MaterialModule.Alert>
        </MaterialModule.Snackbar>
      </div>
    );
  }