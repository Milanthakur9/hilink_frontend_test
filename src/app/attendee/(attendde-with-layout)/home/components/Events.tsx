import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Main } from "next/document";
import { useRouter } from "next/navigation";

const EventList = ({ open }: { open: boolean }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const lastEventRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  // Create an Axios instance
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3333/v1",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Fetch data function
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(
        `/event/list?sort=Newest&when=this week&location=&chosenPriceValue=["0","infinity"]&limit=10&currentPageNo=1`
      );
      setData(response.data.events || []); // Update according to your API response structure
    } catch (error) {
      console.error("Error fetching event data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        mt: { xs: 3, md: 5 },
        display: open ? "block" : "none", // Use this to toggle visibility based on `open`
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6 }}>
          {data?.map((event, index) => {
            return (
              <Grid
                ref={index === data.length - 1 ? lastEventRef : null}
                key={index}
                // size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                sx={{ position: "relative" }}
              >
                <Card
                  sx={{
                    backgroundColor: "primary.main",
                    borderRadius: "40px",
                    minHeight: "280px",
                    cursor: "pointer",
                    transition: "transform 300ms ease-in-out",
                    "&:hover": {
                      transform: "scale(1.04)",
                    },
                  }}
                  onClick={() => router.push(`/e/${event.id}`)} // Assuming `event.id` exists
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        sx={{
                          color: theme.palette.customColors.primaryWhite,
                          fontFamily:
                            theme.typography.fontFamily?.split(",")[1],
                          fontWeight: "bold",
                          fontSize: "16px",
                          textTransform: "uppercase",
                        }}
                      >
                        {event.time}
                      </Typography>
                      <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                          color: theme.palette.customColors.primaryDark1,
                          height: "42px",
                          width: "42px",
                          borderRadius: "50%",
                          background: theme.palette.customColors.primaryWhite,
                          fontSize: "14px",
                          fontWeight: "bold",
                          textAlign: "center",
                          lineHeight: "42px",
                          textTransform: "uppercase",
                          letterSpacing: "-1px",
                        }}
                      >
                        {event.day}
                      </Typography>
                    </Box>

                    <Box sx={{ height: "100px", width: "100%" }} />
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
          {loading && <>{/* Add skeleton loading components here */}</>}
        </Grid>
      </Container>
    </Box>
  );
};

export default EventList;
