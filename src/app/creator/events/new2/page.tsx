"use client";

import { CreateEventContextProvider } from "@/context/CreateEvent";
import EventHomePage from "./components/Index";

const CreateEventPage = () => {
  return (
    <CreateEventContextProvider>
      <EventHomePage />
      {/* <Box
        sx={{
          // height: '100vh',
          // backgroundImage: `repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,#f99d63 50%,rgba(0,0,0,0.6),#f99d63 70%),url(${HMBG.src}),repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,rgba(0,0,0,0.6) 70%),url(${HMBG.src}),url(${HMBG.src}),repeating-linear-gradient(80deg, rgba(0,0,0,0.3) 100%,rgba(0,0,0,0.3) 70%),url(${HMBG.src})`,
          backgroundImage: backgroundImage
            ? `repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,#f99d63 50%,rgba(0,0,0,0.6),#f99d63 70%),url(${backgroundImage}),repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,rgba(0,0,0,0.6) 70%),url(${backgroundImage}),url(${backgroundImage}),repeating-linear-gradient(80deg, rgba(0,0,0,0.3) 100%,rgba(0,0,0,0.3) 70%),url(${backgroundImage})`
            : `repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,#f99d63 50%,rgba(0,0,0,0.6),#f99d63 70%),url(${HMBG.src}),repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,rgba(0,0,0,0.6) 70%),url(${HMBG.src}),url(${HMBG.src}),repeating-linear-gradient(80deg, rgba(0,0,0,0.3) 100%,rgba(0,0,0,0.3) 70%),url(${HMBG.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          backgroundAttachment: "fixed",
          backdropFilter: "blur(500px)",
          // padding: { md: "2% 0%", xs: "2% 0 % 0%" },
        }}
      >
        <CreateEventHeader />
        <Box
          sx={{
            backdropFilter: "blur(5px)",
            padding: { md: "5% 0%", xs: "2% 0% 85% 0%" },
          }}
        >
          <Box sx={{ width: { md: "65%", xs: "90%" }, margin: "15px auto 0" }}>
            <EventInfo />
          </Box>
        </Box>
      </Box> */}
    </CreateEventContextProvider>
  );
};

export default CreateEventPage;
