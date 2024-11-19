"use client";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
// import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import eventSliderCover from "@/assets/background_patterns/halftone-texture-background-4-reverse.png";
import Grid from "@mui/material/Grid2";

interface EventListType {
  title: string;
  subtitle?: string;
  mark?: string;
  location: string;
  event: string;
  name: string;
  address: string;
  rsvpLink?: string;
  ticketLink?: string;
}

const EventsSliderForAttendeeHomePage = () => {
  const theme = useTheme();

  const eventListDemo: EventListType[] = [
    {
      title: "Title of your event goes here 1",
      subtitle: "Hosted By",
      mark: "HiLink",
      location: "Location of Event",
      event: "Date of Event at 6:00PM",
      name: "Random Name #1",
      address: "1234 event location,address,and state,0000",
      rsvpLink: "RSVP",
      ticketLink: "Get Tickets",
    },
    {
      title: "Title of your event goes here 2",
      subtitle: "Hosted By",
      mark: "HiLink",
      location: "Location of Event",
      event: "Date of Event at 6:00PM",
      name: "Random Name #1",
      address: "1234 event location,address,and state,0000",
      rsvpLink: "RSVP",
      ticketLink: "Get Tickets",
    },
    {
      title: "Title of your event goes here 3",
      subtitle: "Hosted By",
      mark: "HiLink",
      location: "Location of Event",
      event: "Date of Event at 6:00PM",
      name: "Random Name #1",
      address: "1234 event location,address,and state,0000",
      rsvpLink: "RSVP",
      ticketLink: "Get Tickets",
    },
    {
      title: "Title of your event goes here 4",
      subtitle: "Hosted By",
      mark: "HiLink",
      location: "Location of Event",
      event: "Date of Event at 6:00PM",
      name: "Random Name #1",
      address: "1234 event location,address,and state,0000",
      rsvpLink: "RSVP",
      ticketLink: "Get Tickets",
    },
    {
      title: "Title of your event goes here 5",
      subtitle: "Hosted By",
      mark: "HiLink",
      location: "Location of Event",
      event: "Date of Event at 6:00PM",
      name: "Random Name #1",
      address: "1234 event location,address,and state,0000",
      rsvpLink: "RSVP",
      ticketLink: "Get Tickets",
    },
  ];

  const [
    index,
    // setIndex
  ] = useState<number>(0);
  const [
    eventList,
    // setEventList
  ] = useState<EventListType[] | null>(eventListDemo);

  return (
    eventList && (
      <Carousel
        index={index}
        interval={4500}
        animation="slide"
        indicators={true}
        indicatorIconButtonProps={{
          style: {
            height: "13px",
            width: "13px",
            padding: "0px",
            color: theme.palette.customColors.primaryDark1,
            border: "1px solid",
            borderColor: theme.palette.primary.main,
            //   gap: "10px",
            marginLeft: "15px",
            zIndex: "5",
            marginTop: "15px",
            // display: eventList.length > 4 ? "none" : "",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
          },
        }}
        // stopAutoPlayOnHover
        swipe
        sx={{
          background: `url(${eventSliderCover.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top 100%",
          minHeight: "350px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          color: "customColors.primaryWhite",
          backgroundColor: theme.palette.customColors.primaryDark1,
          p: 2,
        }}
      >
        {eventList?.map((event) => {
          return (
            <Container
              key={event.name}
              maxWidth="md"
              sx={{
                padding: { xs: 2, md: 4 },
              }}
            >
              <Grid container spacing={{ xs: 1, md: 4 }}>
                {/* left side */}
                <Grid
                  size={{ xs: 12, md: 5 }}
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "right" },
                    textAlign: { xs: "center", md: "right" },
                    "& > img": {
                      height: { xs: "170px", md: "240px" },
                      width: { xs: "170px", md: "240px" },
                      borderRadius: 6,
                      overflow: "hidden",
                    },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "primary.main",
                      height: { xs: "170px", md: "240px" },
                      width: { xs: "170px", md: "240px" },
                      borderRadius: 4,
                    }}
                  ></Box>
                  {/* <Image
                    alt="event image"
                    src={eventSliderCover}
                    width={100}
                    height={100}
                  /> */}
                </Grid>
                {/* right side */}
                <Grid
                  size={{ sm: 12, md: 7 }}
                  sx={{
                    width: "100%",
                    textAlign: { xs: "center", md: "left" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", md: "left" },
                  }}
                >
                  <Box>
                    <Typography
                      variant="h2"
                      sx={{
                        fontFamily: theme.typography.fontFamily?.split(",")[1],
                        fontSize: "1.6rem",
                      }}
                    >
                      {event.title}
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: "16px",
                        display: "inline-block",
                      }}
                    >
                      Hosted By
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: "16px",
                        ml: 1,
                        color: "primary.main",
                        display: "inline-block",
                      }}
                    >
                      HiLink
                    </Typography>

                    <Typography variant="h2" sx={{ fontSize: "19px", mt: 4 }}>
                      {event.location}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontSize: "13px", lineHeight: 0.8 }}
                    >
                      {event.event}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontSize: "13px", mt: 3 }}
                    >
                      {event.address}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 3,
                        justifyContent: { xs: "center", md: "left" },
                        mt: 2,
                      }}
                    >
                      <Button
                        variant="outlined"
                        color="primary"
                        sx={{
                          borderRadius: 20,
                          width: 1,
                          color: "white",
                          borderColor: "primary.main",
                        }}
                      >
                        RSVP
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        sx={{
                          borderRadius: 20,
                          width: 1,
                          color: "white",
                          borderColor: "primary.main",
                        }}
                      >
                        Get Tickets
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          );
        })}
      </Carousel>
    )
  );
};

export default EventsSliderForAttendeeHomePage;
