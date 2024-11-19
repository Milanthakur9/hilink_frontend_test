"use client";

import React, { useEffect, useRef, useState } from "react";
import EventsSliderForAttendeeHomePage from "./components/EventsSlider";
import EventList from "./components/EventList";
import { Box } from "@mui/material";

const HomePage = () => {
  const [isSticky, setIsSticky] = useState(false);
  const appBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-1px 0px 0px 0px" }
    );

    if (appBarRef.current) {
      observer.observe(appBarRef.current);
    }

    return () => {
      if (appBarRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(appBarRef.current);
      }
    };
  }, []);

  return (
    <>
      <Box ref={appBarRef} sx={{ border: "1px solid gree " }}>
        <EventsSliderForAttendeeHomePage />
      </Box>
      <EventList isSticky={isSticky} />
    </>
  );
};

export default HomePage;
