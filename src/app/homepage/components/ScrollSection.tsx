// components/ScrollSections.tsx
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box } from '@mui/material';
import Expericence from './Expericence'

gsap.registerPlugin(ScrollTrigger);

const ScrollSections = () => {
  useEffect(() => {
    // Scroll-triggered animations for each section
    gsap.fromTo(
      '.section', // Target all sections with class 'section'
      { opacity: 0, x: '100%' }, // Start from invisible and shifted to the right
      {
        opacity: 1, // Fade in
        x: '0%', // Move to its original position (center)
        duration: 1, // Animation duration
        ease: 'power4.out', // Smooth easing function
        scrollTrigger: {
          trigger: '.section', // Trigger animation on each section
          start: 'top 80%', // Trigger when top of the section reaches 80% of the viewport
          end: 'bottom top', // End when the bottom of the section reaches the top of the viewport
          scrub: true, // Scrubs the animation with scroll
        },
      }
    );
  }, []);

  return (
    <>
      <Box className="section" sx={sectionStyle}>
        <Expericence/>
      </Box>
      
    </>
  );
};

// Basic styling for sections
const sectionStyle = {
width:'90%',
  minHeight: '100vh',
//   padding: '20px',
  marginBottom: '20px',
//   backgroundColor: '#3498db',
  color: 'white',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
//   flexDirection: 'column',
  opacity: 0, // Initially hidden
  x: '100%', // Initially shift sections to the right (off-screen)
};

export default ScrollSections;
