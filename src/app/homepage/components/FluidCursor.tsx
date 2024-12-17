'use client';
import useFluidCursor from '@/lib/hooks/useFluidCursor';
import { Box } from '@mui/material';
import { useEffect } from 'react';

// import fluidCursor from '@/hooks/use-FluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    useFluidCursor();
  }, []);

  return (
    <Box sx={{position:'fixed',top:'0',left:'0',zIndex:2,overflow:'hidden',pointerEvents:'none'}}>
      <canvas id='fluid' style={{width:'100vw',height:'100vh'}} />
    </Box>
  );
};
export default FluidCursor;
