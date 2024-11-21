"use client";

import { Box } from "@mui/material";
import { useContext } from "react";
import { CreateEventContext } from "@/context/CreateEvent";
import HMBG from "../../../../../../hmbg.png";
import CreateEventHeader from "./CreateEventHeader";
import EventInfo from "./EventInfo";
import EventTicket from "./Ticket";

const EventHomePage = () => {
  const { eventInfoData } = useContext(CreateEventContext);

  const backgroundImage = eventInfoData.poster;
  console.log(backgroundImage);

  return (
    <Box
      sx={{
        // height: "100vh",
        // backgroundImage: backgroundImage
        //   ? `repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,#f99d63 50%,rgba(0,0,0,0.6),#f99d63 70%),url(${backgroundImage}),repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,rgba(0,0,0,0.6) 70%),url(${backgroundImage}),url(${backgroundImage}),repeating-linear-gradient(80deg, rgba(0,0,0,0.3) 100%,rgba(0,0,0,0.3) 70%),url(${backgroundImage})`
        //   : `repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,#f99d63 50%,rgba(0,0,0,0.6),#f99d63 70%),url(${HMBG.src}),repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,rgba(0,0,0,0.6) 70%),url(${HMBG.src}),url(${HMBG.src}),repeating-linear-gradient(80deg, rgba(0,0,0,0.3) 100%,rgba(0,0,0,0.3) 70%),url(${HMBG.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundAttachment: "fixed",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${
            backgroundImage ? backgroundImage : HMBG.src
          })`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          transform: "translate(-50%, -50%)",
          filter: "blur(40px)",
          WebkitFilter: "blur(50px)",
          opacity: 0.4,
          zIndex: 0,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          perspective: 1000,
          WebkitPerspective: 1000,
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
        }}
      />
      <CreateEventHeader />
      <Box
        sx={{
          backdropFilter: "blur(5px)",
          padding: { md: "5% 0%", xs: "2% 0% 85% 0%" },
        }}
      >
        <Box sx={{ width: { md: "65%", xs: "90%" }, margin: "15px auto 0" }}>
          <EventInfo />
          <EventTicket />
        </Box>
      </Box>
    </Box>
  );
};

export default EventHomePage;
