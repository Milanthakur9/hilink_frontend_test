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

// import { Box, Button, Typography, useTheme } from '@mui/material';
// import Image from 'next/image';
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import shap from '../../assets/background_patterns/shap2.png';
// import Drop from '../../assets/background_patterns/drop3.png'

// gsap.registerPlugin(ScrollTrigger);

// function Kickback() {
//   const theme = useTheme();
//   const orange = theme.palette.customColors.orange;
//   const dark1 = theme.palette.customColors.primaryDark1;
//   const dark2 = theme.palette.customColors.primaryDark2;
//   const white = theme.palette.customColors.primaryWhite;

//   const imageBoxRef = useRef(null); // Ref for the image box
//   const imageBoxRef2 = useRef(null); // Ref for the image box

//   useEffect(() => {
//     const element = imageBoxRef.current;
//     const element2 = imageBoxRef.current;
    
//     gsap.fromTo(
//       element,
//       { rotation: 0 },
//       {
//         rotation: 360,
//         perspective:'600px',
//         scrollTrigger: {
//           trigger: element,
//           start: "top 80%", // When the image enters the viewport
//           end: "bottom 20%", // When the image leaves the viewport
//           scrub: true, // Smooth animation linked to scroll
//         },
//       }
//     );
//     gsap.fromTo(
//       element2,
//       { rotation: 0 },
//       {
//         rotation: 360,
//         perspective:'600px',
//         scrollTrigger: {
//           trigger: element2,
//           start: "top 80%", // When the image enters the viewport
//           end: "bottom 20%", // When the image leaves the viewport
//           scrub: true, // Smooth animation linked to scroll
//         },
//       }
//     );
//   }, []);

//   return (
//     <>
//       <Box
//         sx={{
//           display: 'flex',
//           margin:{md:'0',xs:'3% 0 0 0'},
//           flexDirection: { md: 'row-reverse', xs: 'column' },
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           transformStyle:'preserve-3d'
//         }}
//       >
//         <Box sx={{ width: { md: '48%', xs: '95%' } }}>
//           <Typography>KICKBACK</Typography>
//           <Typography
//             variant="h1"
//             sx={{
//               margin: '2% 0',
//               background: `linear-gradient(to bottom,${orange},${dark1})`,
//               backgroundClip: 'text',
//               color: 'transparent',
//             }}
//           >
//             Turn Attendees Into Paid Affiliates
//           </Typography>
//           <Typography>
//             Create paid rewards that attendees can redeem for bringing their
//             friends to your events. Events have generated up to $35,000 in
//             additional revenue from Kickback!
//           </Typography>
//           <Button
//             sx={{
//               margin: '3% 0 0 0',
//               color: white,
//               paddingInline: '20px',
//               background: `linear-gradient(to right,${orange},${dark2})`,
//             }}
//           >
//             Launch An Experience
//           </Button>
//         </Box>
//         <Box
//         //   ref={imageBoxRef} // Reference the image box
//           sx={{ width: { md: '48%', xs: '95%'},transformStyle:'preserve-3d',position:'relative' }}
//         >
//             <Box ref={imageBoxRef} sx={{position:'absolute',left:'-10%',top:'0',width:'80%',height:'80%',zIndex:-1}}><Image src={shap} style={{width:'100%',height:'inherit'}} alt='animate' height={100} width={100}/></Box>
//             <Box ref={imageBoxRef2} sx={{position:'absolute',right:'0%',bottom:'0%',width:'200px',height:'200px',zIndex:-1}}><Image src={Drop} style={{width:'100%',height:'inherit'}} alt='animate' height={100} width={100}/></Box>
//           <Image
//             src={shap}
//             style={{ width: '80%', height: 'inherit'}}
//             alt="kickback"
//             height={100}
//             width={100}
//           />
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default Kickback;

import { Box, Button, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import shap from '../../assets/background_patterns/shap2.png';
import Drop from '../../assets/background_patterns/drop3.png';
import Drop1 from '../../assets/background_patterns/ring.png';

gsap.registerPlugin(ScrollTrigger);

function Kickback() {
  const theme = useTheme();
  const orange = theme.palette.customColors.orange;
  const dark1 = theme.palette.customColors.primaryDark1;
  const dark2 = theme.palette.customColors.primaryDark2;
  const white = theme.palette.customColors.primaryWhite;

  const imageBoxRef = useRef<HTMLDivElement>(null); // Ref for the first image box
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
    <Box
      sx={{
        display: 'flex',
        margin: { md: '0', xs: '3% 0 0 0' },
        flexDirection: { md: 'row-reverse', xs: 'column' },
        justifyContent: 'space-between',
        alignItems: 'center',
        transformStyle: 'preserve-3d',
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
  );
}

export default Kickback;

