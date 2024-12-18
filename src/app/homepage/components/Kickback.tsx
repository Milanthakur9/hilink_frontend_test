// import { Box,Button,Typography,useTheme } from '@mui/material'
// import Image from 'next/image';
// import React from 'react'
// import shap from '../../../assets/background_patterns/shap2.png'

// function Kickback() {
//     const theme = useTheme();
//     const orange = theme.palette.customColors.orange;
//     const dark1 = theme.palette.customColors.primaryDark1;
//     const dark2 = theme.palette.customColors.primaryDark2;
//     const white = theme.palette.customColors.primaryWhite;

//   return (
//     <>
//         <Box sx={{display:'flex',flexDirection:{md:'row-reverse',xs:'column'},justifyContent:'space-between',alignItems:'center'}}>
//             <Box sx={{width:{md:'48%',xs:'95%'}}}>
//                 <Typography>KICKBACK</Typography>
//                 <Typography variant='h1' sx={{margin:'2% 0',background:`linear-gradient(to bottom,${orange},${dark1})`,backgroundClip:'text',color:'transparent'}}>Turn Attendees Into Paid Affiliates</Typography>
//                 <Typography>Create paid rewards that attendees can redeem for bringing their friends to your events. Events have generated up to $35,000 in additional revenue from Kickback!</Typography>
//                 <Button sx={{margin:'3% 0 0 0',color:white,paddingInline:'20px',background:`linear-gradient(to right,${orange},${dark2})`}}>Launch An Experience</Button>
//             </Box>
//             <Box sx={{width:{md:'48%',xs:'95%'}}}>
//                 <Image src={shap} style={{width:'100%',height:'inherit',backgroundBlendMode:'hue'}} alt='kickback' height={100} width={100}/>
//             </Box>
//         </Box>    
//     </>
//   )
// }

// export default Kickback;

import { Box, Button, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import shap from '../../../assets/background_patterns/shap2.png';

gsap.registerPlugin(ScrollTrigger);

function Kickback() {
  const theme = useTheme();
  const orange = theme.palette.customColors.orange;
  const dark1 = theme.palette.customColors.primaryDark1;
  const dark2 = theme.palette.customColors.primaryDark2;
  const white = theme.palette.customColors.primaryWhite;

  const imageBoxRef = useRef(null); // Ref for the image box

  useEffect(() => {
    const element = imageBoxRef.current;
    
    gsap.fromTo(
      element,
      { rotation: 0 },
      {
        rotation: 360,
        perspective:'600px',
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // When the image enters the viewport
          end: "bottom 20%", // When the image leaves the viewport
          scrub: true, // Smooth animation linked to scroll
        },
      }
    );
  }, []);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          margin:{md:'0',xs:'3% 0 0 0'},
          flexDirection: { md: 'row-reverse', xs: 'column' },
          justifyContent: 'space-between',
          alignItems: 'center',
          transformStyle:'preserve-3d'
        }}
      >
        <Box sx={{ width: { md: '48%', xs: '95%' } }}>
          <Typography>KICKBACK</Typography>
          <Typography
            variant="h1"
            sx={{
              margin: '2% 0',
              background: `linear-gradient(to bottom,${orange},${dark1})`,
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Turn Attendees Into Paid Affiliates
          </Typography>
          <Typography>
            Create paid rewards that attendees can redeem for bringing their
            friends to your events. Events have generated up to $35,000 in
            additional revenue from Kickback!
          </Typography>
          <Button
            sx={{
              margin: '3% 0 0 0',
              color: white,
              paddingInline: '20px',
              background: `linear-gradient(to right,${orange},${dark2})`,
            }}
          >
            Launch An Experience
          </Button>
        </Box>
        <Box
          ref={imageBoxRef} // Reference the image box
          sx={{ width: { md: '48%', xs: '95%',transformStyle:'preserve-3d' } }}
        >
          <Image
            src={shap}
            style={{ width: '80%', height: 'inherit'}}
            alt="kickback"
            height={100}
            width={100}
          />
        </Box>
      </Box>
    </>
  );
}

export default Kickback;
