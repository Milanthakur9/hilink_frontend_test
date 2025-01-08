import { Box, Button, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import shap from "../../../assets/background_patterns/eventbg1.png";
import Drop from "../../../assets/background_patterns/drop3.png";
import Drop1 from "../../../assets/background_patterns/ring.png";

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
          perspective: "600px",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
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
          perspective: "600px",
          scrollTrigger: {
            trigger: element2,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        // gap: { md: 0, xs: 5 },
        margin: { md: "0", xs: "3% 0 0 0" },
        flexDirection: { md: "row-reverse", xs: "column-reverse" },
        justifyContent: "space-between",
        alignItems: "center",
        transformStyle: "preserve-3d",
      }}
    >
      <Box sx={{ width: { md: "48%", xs: "95%" } }}>
        {/* <Typography>About Us</Typography> */}
        <Typography
          variant="h2"
          sx={{
            margin: "2% 0",
            background: `linear-gradient(to bottom,${orange},${dark1})`,
            backgroundClip: "text",
            color: "transparent",
            fontSize: "2.8rem",
            textTransform: "capitalize",
          }}
        >
          {/* Turn Attendees Into Paid Affiliates */}
          About Us
        </Typography>
        <Typography variant="subtitle1">
          At HiLink VIP, we’re revolutionizing the way events are experienced.
          Our platform is designed to empower creators, organizers, and
          event-goers by providing a seamless and stylish ticketing solution for
          unforgettable moments. Whether you’re hosting an exclusive gathering,
          a nightlife extravaganza, or a live entertainment event, HiLink VIP
          connects you to your audience with ease and sophistication.
        </Typography>
        <Typography variant="subtitle1" sx={{ margin: "2% 0" }}>
          We prioritize simplicity, innovation, and community, ensuring that
          every aspect of your event journey—from ticketing to attendance—is
          effortless and elevated. With tools built for success and a sleek user
          experience, HiLink VIP turns every event into a VIP experience.
        </Typography>
        <Button
          sx={{
            margin: "3% 0 0 0",
            color: white,
            paddingInline: "20px",
            background: `linear-gradient(to right,${orange},${dark2})`,
          }}
        >
          Launch An Experience
        </Button>
      </Box>

      <Box
        sx={{
          width: { md: "48%", xs: "95%" },
          marginTop: { md: "0", xs: "10%" },
          transformStyle: "preserve-3d",
          position: "relative",
          textAlign: "center",
        }}
      >
        <Box
          ref={imageBoxRef}
          sx={{
            position: "absolute",
            left: "-10%",
            top: "-10%",
            width: "80%",
            height: "80%",
            zIndex: -2,
            display: { md: "inline", xs: "none" },
          }}
        >
          <Image
            src={Drop1}
            style={{ width: "200px", height: "200px" }}
            alt="animate"
            height={100}
            width={100}
          />
        </Box>

        <Box
          ref={imageBoxRef2}
          sx={{
            position: "absolute",
            right: "0%",
            bottom: "-10%",
            width: { md: "230px", xs: "150px" },
            height: { md: "230px", xs: "150px" },
            zIndex: -1,
          }}
        >
          <Image
            src={Drop}
            style={{ width: "100%", height: "inherit" }}
            alt="animate"
            height={100}
            width={100}
          />
        </Box>

        <Image
          src={shap}
          style={{
            width: "60%",
            height: "inherit",
            margin: "0 auto",
            borderRadius: "20px",
          }}
          alt="kickback"
          height={100}
          width={100}
        />
      </Box>
    </Box>
  );
}

export default Kickback;
