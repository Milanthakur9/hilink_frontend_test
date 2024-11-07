import React from "react";
import EventsSliderForAttendeeHomePage from "./components/EventsSlider";
import EventList from "./components/EventList";

const HomePage = () => {
  return (
    <>
      <EventsSliderForAttendeeHomePage />
      <EventList />
    </>
  );
};

export default HomePage;
