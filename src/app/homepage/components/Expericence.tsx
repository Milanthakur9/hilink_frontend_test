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
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import shap from '../../../assets/background_patterns/shap2.png';
import Drop from '../../../assets/background_patterns/drop3.png';
import Drop1 from '../../../assets/background_patterns/ring.png';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const theme = useTheme();
  const white = theme.palette.customColors.primaryWhite;
  const orange = theme.palette.customColors.orange;
  const dark1 = theme.palette.customColors.primaryDark1;
  const dark2 = theme.palette.customColors.primaryDark2;
  

  // Reference for the image container
  const imageBoxRef = useRef<HTMLDivElement>(null);
  const imageBoxRef2 = useRef<HTMLDivElement>(null); // Ref for the second image box


  useEffect(() => {
    const element = imageBoxRef.current;
        const element2 = imageBoxRef2.current;
    
        if (element) {
          gsap.fromTo(
            element,
            { rotation: 0 },
            {
              rotation: 360,
              perspective: '600px',
              scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true,
              },
            }
          );
        }
    
        if (element2) {
          gsap.fromTo(
            element2,
            { rotation: 0 },
            {
              rotation: 360,
              perspective: '600px',
              scrollTrigger: {
                trigger: element2,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true,
              },
            }
          );
        }
  }, []);

  return (
    <div>
      <Box
      sx={{
        display: 'flex',
        margin: { md: '0', xs: '3% 0 0 0' },
        flexDirection: { md: 'row', xs: 'column' },
        justifyContent: 'space-between',
        alignItems: 'center',
        transformStyle: 'preserve-3d',
      }}
    >
      <Box sx={{ width: { md: '48%', xs: '95%' } }}>
        <Typography>Limitless Use Cases</Typography>
        <Typography
          variant="h1"
          sx={{
            margin: '2% 0',
            background: `linear-gradient(to bottom,${orange},${hexToRGBA(dark1,0.8)})`,
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Built for every kind of  IRL experience there is
        </Typography>
        <Typography>
        We've been building organizer tools for 4 years, crafting powerful features for countless use cases. From personal parties, to club shows, to networking mixers, to music festivals, thousands of organizers have utilized our robust toolset to rapidly scale their communities.
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
        sx={{
          width: { md: '48%', xs: '95%' },
          transformStyle: 'preserve-3d',
          position: 'relative',
        }}
      >
        <Box
          ref={imageBoxRef}
          sx={{
            position: 'absolute',
            left: '4%',
            top: '0',
            width: '80%',
            height: '80%',
            zIndex: -2,
          }}
        >
          <Image
            src={Drop1}
            style={{ width: '200px', height: '200px' }}
            alt="animate"
            height={100}
            width={100}
          />
        </Box>

        <Box
          ref={imageBoxRef2}
          sx={{
            position: 'absolute',
            right: '0%',
            bottom: '0%',
            width: '230px',
            height: '230px',
            zIndex: -1,
          }}
        >
          <Image
            src={Drop}
            style={{ width: '100%', height: 'inherit' }}
            alt="animate"
            height={100}
            width={100}
          />
        </Box>

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
