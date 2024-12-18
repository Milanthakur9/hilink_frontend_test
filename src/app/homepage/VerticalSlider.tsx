import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import Image, { StaticImageData } from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type MousewheelSliderProps = {
  slides: { 
    id: number; 
    content: string; 
    title: string; 
    heading: string; 
    btn: string; 
    imgsoruce: StaticImageData 
  }[];
};

const MousewheelSlider: React.FC<MousewheelSliderProps> = ({ slides }) => {
  const theme = useTheme();
  const orange = theme.palette.customColors.orange;
  const white = theme.palette.customColors.primaryWhite;
  const dark1 = theme.palette.customColors.primaryDark1;
  const dark2 = theme.palette.customColors.primaryDark2;

  // Refs for slide elements
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Ensure we have slide refs and more than one slide
    if (slideRefs.current.length <= 1) return;

    // Create GSAP animations for stacking effect
    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;

      // Skip the first slide
      if (index === 0) return;

      gsap.set(slide, { 
        transformOrigin: 'center center',
        scale: 0.9,
        y: 100,
        opacity: 0.7
      });

      ScrollTrigger.create({
        trigger: slide,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        onUpdate: (self) => {
          // Animate slide based on scroll progress
          gsap.to(slide, {
            scale: 1 - (0.1 * self.progress),
            y: 100 - (100 * self.progress),
            opacity: 1 - (0.3 * self.progress),
            ease: 'power1.out'
          });

          // Slightly move previous slides up
          if (index > 0 && slideRefs.current[index - 1]) {
            gsap.to(slideRefs.current[index - 1]!, {
              y: -50 * self.progress,
              scale: 0.95 + (0.05 * self.progress),
              ease: 'power1.out'
            });
          }
        }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [slides]);

  return (
    <Swiper
      direction="vertical"
      modules={[Mousewheel]}
      mousewheel={true}
      slidesPerView={1}
      speed={700}
      className="my-swiper"
      style={{
        height: '100vh',
        overflow: 'hidden',
        // background: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide 
          key={slide.id} 
          // ref={el => slideRefs.current[index] = el}
          // ref={(el: HTMLDivElement | null) => slideRefs.current[index] = el} 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}
        >
          <Box
            sx={{
              width: '90%',
              maxWidth: '1200px',
              height: {md:'80%',xs:'100vh'},
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: `${hexToRGBA(dark1, 0.15)}`,
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              border: `1px solid ${hexToRGBA(white, 0.15)}`,
              borderRadius: '20px',
              padding: '20px',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Box sx={{display:'flex',flexDirection:{md:'row',xs:'column-reverse'},justifyContent:'space-between',alignItems:'center'}}>
              <Box sx={{width:{md:'48%',xs:'100%'}}}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'left', color: white }}>
                  {slide.title}
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize:{md:'5vh',xs:'3vh'},
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
                    fontSize: {md:'22px',xs:'16px'},
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
              <Box sx={{width:{md:'48%',xs:'70%'},height:{md:'450px',xs:'200px'},margin:{md:'0',xs:'15px 0 0 0'}}}>
                  <Image 
                    src={slide.imgsoruce} 
                    style={{width:'100%',height:'inherit',borderRadius:'25px'}} 
                    height={100} 
                    width={100} 
                    alt='slider-image'
                  />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MousewheelSlider;