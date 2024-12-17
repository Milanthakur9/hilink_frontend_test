// import { Box,Button,Typography,useTheme } from '@mui/material'
// import Image from 'next/image';
// import React from 'react'
// import shap from '../../../assets/background_patterns/shap2.png';



// function Expericence() {

//     const theme = useTheme();
//     const white = theme.palette.customColors.primaryWhite;
//     const orange = theme.palette.customColors.orange;
    
//   return (
//     <div>
//         <Box sx={{display:'flex',flexDirection:{md:'row',xs:'column'},justifyContent:'space-between',alignItems:'center'}}>
//             <Box sx={{width:{md:'48%',xs:'95%'}}}>
//                 <Typography variant='subtitle2' sx={{color:orange}}>Limitless Use Cases</Typography>
//                 <Typography variant='h3' sx={{margin:'3% 0'}}>Built for every kind of IRL experience there is</Typography>
//                 <Typography>We've been building organizer tools for 4 years, crafting powerful features for countless use cases. From personal parties, to club shows, to networking mixers, to music festivals, thousands of organizers have utilized our robust toolset to rapidly scale their communities.</Typography>
//                 <Button sx={{background:orange,color:white,paddingInline:'20px',marginTop:'20px'}}>Launch An Experience</Button>
//             </Box>
//             <Box
//             // ref={imageBoxRef} // Reference the image box
//             sx={{ width: { md: '48%', xs: '95%',transformStyle:'preserve-3d' } }}
//             >
//             <Image
//                 src={shap}
//                 style={{ width: '80%', height: 'inherit'}}
//                 alt="kickback"
//                 height={100}
//                 width={100}
//             />
//             </Box>
//         </Box>
//     </div>
//   )
// }

// export default Expericence

import { Box, Button, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import shap from '../../../assets/background_patterns/shap2.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const theme = useTheme();
  const white = theme.palette.customColors.primaryWhite;
  const orange = theme.palette.customColors.orange;

  // Reference for the image container
  const imageBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageBoxRef.current) {
      gsap.to(imageBoxRef.current, {
        rotation: 360, // Rotate the image
        ease: "none",
        scrollTrigger: {
          trigger: imageBoxRef.current,
          start: "top center", // Start the animation when the element is in the center of the viewport
          end: "bottom top", // End the animation when the element scrolls out of the viewport
          scrub: true, // Smooth scrubbing
        },
      });
    }
  }, []);

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: { md: '48%', xs: '95%' } }}>
          <Typography variant="subtitle2" sx={{ color: orange }}>
            Limitless Use Cases
          </Typography>
          <Typography variant="h3" sx={{ margin: '3% 0' }}>
            Built for every kind of IRL experience there is
          </Typography>
          <Typography>
            We've been building organizer tools for 4 years, crafting powerful
            features for countless use cases. From personal parties, to club
            shows, to networking mixers, to music festivals, thousands of
            organizers have utilized our robust toolset to rapidly scale their
            communities.
          </Typography>
          <Button
            sx={{
              background: orange,
              color: white,
              paddingInline: '20px',
              marginTop: '20px',
            }}
          >
            Launch An Experience
          </Button>
        </Box>
        <Box
          ref={imageBoxRef} // Reference the image box
          sx={{
            width: { md: '48%', xs: '95%' },
            transformStyle: 'preserve-3d',
          }}
        >
          <Image
            src={shap}
            style={{ width: '80%', height: 'inherit' }}
            alt="kickback"
            height={100}
            width={100}
          />
        </Box>
      </Box>
    </div>
  );
}

export default Experience;
