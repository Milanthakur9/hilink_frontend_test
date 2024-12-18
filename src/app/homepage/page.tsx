"use client";
import React from 'react';
import ReactLenis from 'lenis/react'
import {
  Box,
  Button,
  Typography,
  useTheme,
} from "@mui/material";
import FluidCursor from './components/FluidCursor';
import EventSection from './components/eventSection';
import ImgSlider from './components/imgSlider';
import RotatingImage from './components/rotateImage';
// import ScrollSection from './components/ScrollSection';
import HomeFooter from './components/HomeFooter';
import Kickback from './components/Kickback';
// import VerticalSlider from './VerticalSlider'
import Expericence from './components/Expericence'
import Torus from './components/Torus'
import MousewheelSlider from './VerticalSlider';
// import FAQ from './FAQ';
import image2 from "../../assets/background_patterns/event2.webp"
import event1 from '../../assets/background_patterns/event1.webp'
import event3 from '../../assets/background_patterns/event4.webp'
// import StackingCards from './components/StackingCard';

const slides = [
  { id: 1, btn:'Get Started' ,heading:'Create Timeless Events In Under A Minute',title:'customizable Event  pages',content: 'Encapsulate your vision with images, music, performer/speaker lineups, and more for both paid and RSVP events.',imgsoruce:image2 },
  { id: 2, btn:'Get Started' ,heading:'Grow your community like clockwork',title:'embedded marketing tools',content: ' HILINK Organizers have sold up to 53% of their inventory through our free SMS CRM + Affiliate Marketing tools.',imgsoruce:event1 },
  { id: 3, btn:'Get Started' ,heading:'Get Instant Access to Capital',title:'financiaL Flexibility',content: 'Receive daily payouts as tickets sell and manage upfront expenses more easily than ever before.',imgsoruce:event3 },
];

// const cards = [
//   { id: 1, title: "Card 1", content: "This is the first card", buttonLabel: "Learn More" },
//   { id: 2, title: "Card 2", content: "This is the second card", buttonLabel: "Learn More" },
//   { id: 3, title: "Card 3", content: "This is the third card", buttonLabel: "Learn More" },
// ];

function Page() {
  const theme = useTheme();
  const orange = theme.palette.customColors.orange;
  const white = theme.palette.customColors.primaryWhite;
  const dark1 = theme.palette.customColors.primaryDark1;
  const cards = Array.from({ length: 10 });

  return (
    <>
    <ReactLenis root>

    <Box sx={{overflow:'hidden !important'}}>
    {/* <Box sx={{background:'url(https://cdn.prod.website-files.com/65ef8a3bdecf96836a4ffd5e/65ef8a3bdecf96836a4ffe09_blob-img%2520(1)-p-800.png)',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'500px',width:'300px',position:'fixed',right:'-2%',top:'50%',zIndex:-1}}></Box> */}
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
        {/* <ScrollSection/> */}
        <Box  sx={{width:'90%',margin:'0 auto',overflow:'hiddden',position:'relative',zIndex:2}}>
            {/* <div style={{ overflow: 'hidden' }}> */}
              <MousewheelSlider slides={slides} />
              
               {/* <StackingCards/> */}
               
            {/* </div> */}
             <Box sx={{zIndex:-2,position:'absolute',left:'90%',top:'30%',transform:'translate(-50%,-50%)'}}>
            <Torus/>
          </Box>
        </Box>
        <Box sx={{width:'90%',margin:'0 auto',padding:'2% 0'}}>
          <Kickback/>
        </Box>

        <Box sx={{width:'90%',margin:'0 auto',padding:'1% 0',position:'relative',zIndex:2}}>
            <Expericence/>
            {/* <Box sx={{zIndex:-2,position:'absolute',left:'5%',top:'50%',transform:'translate(-50%,-50%)'}}>
            <Torus/>
          </Box> */}
        </Box>

         <Box sx={{margin:'4% 0'}}>
          <HomeFooter/>
          </Box> 


        {/* <Box sx={{width:'60%',margin:'0 auto',padding:'3% 0'}}>
          
          <FAQ/>
        </Box> */}
      </Box>
    </Box>

    </ReactLenis>

    </>
  );
}

export default Page;
