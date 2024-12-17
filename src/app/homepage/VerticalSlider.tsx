// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Mousewheel } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/mousewheel';
// import { Box, Button, Typography,useTheme } from '@mui/material';
// import { hexToRGBA } from '@/@core/utils/hex-to-rgba';


// type MousewheelSliderProps = {
//   slides: { id: number; content: string; title: string; heading: string; btn: string }[]; // Define the type for the slides
// };

// const MousewheelSlider: React.FC<MousewheelSliderProps> = ({ slides }) => {
//   const theme = useTheme();
//   const orange = theme.palette.customColors.orange
//   const white = theme.palette.customColors.primaryWhite
//   const dark1 = theme.palette.customColors.primaryDark1
//   const dark2 = theme.palette.customColors.primaryDark2
//   return (
//     <Swiper
//       direction="vertical" // Enable vertical sliding
//       modules={[Mousewheel]} // Enable mousewheel functionality
//       mousewheel={true} // Activate mousewheel control
//       slidesPerView={1} // Show one slide at a time
//       speed={700} // Set the speed of the slide transition
//       className="my-swiper"
//       style={{
//         height: '70vh', // Full height for a vertical slider
//       }}
//     >
//       {slides.map((slide) => (
//         <SwiperSlide key={slide.id}>
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               height: '100%',
//               background: `${hexToRGBA(dark1,0.15)}`, // Semi-transparent background
//               backdropFilter: 'blur(30px)', // Blur effect
//               WebkitBackdropFilter: 'blur(30px)', // Safari support
//               border: `1px solid ${hexToRGBA(white,0.15)}`, // Optional border for glass effect
//               borderRadius: '20px', // Optional rounded corners
//               padding: '20px',
//               boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Optional subtle shadow
//             }}
//           >
//             <Box>
//               <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
//                 {slide.title}
//               </Typography>
//               <Typography variant="h1" sx={{ margin: '2% 0',  textAlign: 'left',background:`linear-gradient(to bottom,${orange},${dark1})`,backgroundClip:'text',color:'transparent' }}>
//                 {slide.heading}
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: '22px',
//                   lineHeight: '30px',
//                   textAlign: 'left',
//                   marginBottom: '20px',
//                 }}
//               >
//                 {slide.content}
//               </Typography>
//               <Button
//                 sx={{
//                   background: `linear-gradient(to right, ${orange},${dark2})`,
//                   color: white,
//                   padding: '10px 20px',
//                   borderRadius: '5px',
//                   textTransform: 'none',
//                 }}
//               >
//                 {slide.btn}
//               </Button>
//             </Box>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default MousewheelSlider;


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import bg from '../../assets/background_patterns/bg.png'

type MousewheelSliderProps = {
  slides: { id: number; content: string; title: string; heading: string; btn: string }[]; // Define the type for the slides
};

const MousewheelSlider: React.FC<MousewheelSliderProps> = ({ slides }) => {
  const theme = useTheme();
  const orange = theme.palette.customColors.orange;
  const white = theme.palette.customColors.primaryWhite;
  const dark1 = theme.palette.customColors.primaryDark1;
  const dark2 = theme.palette.customColors.primaryDark2;

  return (
    <Swiper
      direction="vertical" // Enable vertical sliding
      modules={[Mousewheel]} // Enable mousewheel functionality
      mousewheel={true} // Activate mousewheel control
      slidesPerView={1} // Show one slide at a time
      speed={700} // Set the speed of the slide transition
      className="my-swiper"
      style={{
        height: '100vh', // Full height for consistent spacing
        overflow: 'hidden',
        background:`url(${bg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box
            sx={{
              width: '90%',
              maxWidth: '1200px',
              height: '80%', // Set a fixed height for content
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: `${hexToRGBA(dark1, 0.15)}`, // Semi-transparent background
              backdropFilter: 'blur(30px)', // Blur effect
              WebkitBackdropFilter: 'blur(30px)', // Safari support
              border: `1px solid ${hexToRGBA(white, 0.15)}`, // Optional border for glass effect
              borderRadius: '20px', // Optional rounded corners
              padding: '20px',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Optional subtle shadow
            }}
          >
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'left', color: white }}>
                {slide.title}
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  margin: '2% 0',
                  textAlign: 'left',
                  background: `linear-gradient(to bottom, ${orange}, ${dark1})`,
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {slide.heading}
              </Typography>
              <Typography
                sx={{
                  fontSize: '22px',
                  lineHeight: '30px',
                  textAlign: 'left',
                  marginBottom: '20px',
                  color: white,
                }}
              >
                {slide.content}
              </Typography>
              <Button
                sx={{
                  background: `linear-gradient(to right, ${orange}, ${dark2})`,
                  color: white,
                  padding: '10px 20px',
                  borderRadius: '5px',
                  textTransform: 'none',
                }}
              >
                {slide.btn}
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MousewheelSlider;

