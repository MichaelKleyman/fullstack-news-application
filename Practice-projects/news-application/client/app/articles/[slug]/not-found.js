'use client';
import { forwardRef } from 'react';
import MuiAlert from '@mui/material/Alert';
import { useRouter } from 'next/navigation';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const NotFound = () => {
  const router = useRouter();

  return (
    <div className='m-6'>
      <Alert severity='error'>Article Not Found</Alert>
      <p
        type='button'
        onClick={() => router.push('/')}
        className='p-6 hover:font-bold duration-300 cursor-pointer'
      >
        Go back
      </p>
    </div>
  );
};

export default NotFound;
