'use client';
import { forwardRef } from 'react';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const NotFound = () => {
  return (
    <div>
      <Alert severity='error'>Article Not Found</Alert>
    </div>
  );
};

export default NotFound;
