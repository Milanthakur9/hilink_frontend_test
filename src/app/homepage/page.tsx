"use client";
import React from 'react';
import {
  Box,
  Button,
  Typography,
  useTheme,
} from "@mui/material";
import FluidCursor from './FluidCursor';
import EventSection from './eventSection';
import ImgSlider from './imgSlider';
import RotatingImage from './rotateImage';

function Page() {
  const theme = useTheme();
  const orange = theme.palette.customColors.orange;
  const white = theme.palette.customColors.primaryWhite;
  const dark1 = theme.palette.customColors.primaryDark1;

  return (
    <>
    <Box sx={{background:`linear-gradient(#ffafbc8a,#ff914d66)`,height:'200px',width:'200px',position:'fixed',left:'-10%',top:'0%',zIndex:-1}}></Box>
    <Box sx={{background:`linear-gradient(#614385,#516395)`,height:'200px',width:'200px',position:'fixed',right:'0%',bottom:'0%',zIndex:-1}}></Box>
      <FluidCursor />
      <Box
        sx={{
          position: 'relative',
          width: '100vw',
          overflow: 'hidden',
          // background: theme.palette.customColors.primaryDark1,
          backdropFilter: 'blur(205px)',  // Adding the backdrop blur effect here
          backgroundBlendMode: 'darken',  // Blend the background with the backdrop filter
        }}
      >
        <Box sx={{ margin: '4% 0' }}>
          <Box>
            <Box
              sx={{
                width: '90%',
                padding: '5% 0',
                margin: '0 auto',
                display: 'flex',
                flexDirection: { md: 'row', xs: 'column-reverse' },
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box sx={{ width: { md: '48%', xs: '100%' } }}>
                <Typography>Lorem, ipsum dolor.</Typography>
                <Typography variant="h1">
                  lorem{' '}
                  <span
                    style={{
                      background: `linear-gradient(${orange}, ${dark1})`,
                      backgroundClip: 'text',
                      color: 'transparent',
                      fontWeight: 'bold',
                    }}
                  >
                    Lorem, ipsum.
                  </span>{' '}
                  Lorem ipsum dolor sit amet.
                </Typography>
                <Typography sx={{ margin: '2% 0' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  debitis temporibus rem et dolores nemo ipsum?
                </Typography>
                <Button
                  sx={{
                    marginTop: '3%',
                    background: orange,
                    color: white,
                    paddingInline: '20px',
                    borderRadius: '5px',
                    boxShadow: `0 0 16px 1px ${orange}`,
                  }}
                >
                  Sign Up Now
                </Button>
              </Box>
              <Box sx={{ width: { md: '48%', xs: '100%',cursor:'grabbing',marginTop:'-7%' } }}>
                <RotatingImage />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ margin: '2% 0', padding: '5%'}}>
          <EventSection />
          <ImgSlider />
        </Box>
      </Box>
    </>
  );
}

export default Page;
