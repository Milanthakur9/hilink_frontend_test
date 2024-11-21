"use client";

import React from "react";
import Image from "next/image";
// material ui
import { Box, Avatar, Button, Divider, Typography } from "@mui/material";
// icon
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
// Timeline
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { useRouter } from "next/navigation";
import CreatorHeader from "../components/CreatorHeader";
import CreatorFooter from "../components/CreatorFooter";

// const StyledTimelineItem = styled((props) => <TimelineItem {...props} />)(
//   ({ theme }) => ({
//     padding: "0 10px",
//     "& .MuiTimelineItem-content": {
//       padding: 0,
//       "&:before": {
//         display: "none",
//       },
//     },
//   })
// );

const btn = [
  {
    name: "Resend Receipt",
  },
  {
    name: "Cancel",
  },
  {
    name: "Cancel & Relist",
  },
];
function AttendeePage() {
  const router = useRouter();

  return (
    <>
      <CreatorHeader />
      <div style={{ width: "90%", margin: "0 auto", padding: "5% 0%" }}>
        <Box
          sx={{
            width: "fit-content",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            transition: "all .2s linear",
            margin: "0% 0%",
            "&:hover": { transform: "translateX(-20px)", cursor: "pointer" },
          }}
        >
          <Box>
            <Image
              src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://media.tenor.com/xXsD9Uhiq8QAAAAC/happy.gif"
              alt="gif"
              width={10}
              height={10}
              style={{ width: "30px", height: "inherit", borderRadius: "5px" }}
            />
          </Box>
          <Box sx={{ paddingLeft: "10px" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "18px",
                "&:hover": {
                  cursor: "pointer",
                  textDecoration: "underline 1px solid",
                },
              }}
            >
              Test
            </Typography>
          </Box>
        </Box>
        {/* resend Recipt  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-between",
            alignItems: "center",
            margin: "2% 0%",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
              <Box onClick={() => router.back()}>
                <ArrowCircleLeftIcon
                  sx={{
                    color: "#ff914d",
                    fontSize: "45px",
                    marginRight: "20px",
                    "&:hover": { cursor: "pointer" },
                  }}
                />
              </Box>
              <Typography
                variant="h2"
                sx={{ color: "#fff", fontSize: "35px", fontWeight: "bold" }}
              >
                Order #7314206
              </Typography>
            </Box>
          </Box>
          <Box>
            {btn.map((button) => {
              return (
                <Button
                  key={button.name}
                  sx={{
                    background: "#ff914d",
                    color: "#fff",
                    marginInline: "5px",
                    paddingInline: "10px",
                    textTransform: "capitalize",
                  }}
                >
                  {button.name}
                </Button>
              );
            })}
          </Box>
        </Box>
        {/* resend Recipt  */}

        {/* Attendee start  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ width: { md: "60%", xs: "100%" } }}>
            {/* Tickets */}
            <Box
              sx={{
                background: "#202524",
                padding: "20px",
                borderRadius: "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontSize: "22px", fontWeight: "bold" }}
              >
                Tickets
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  margin: "3% 0%",
                }}
              >
                <Box sx={{ width: "60%", display: "flex" }}>
                  <ConfirmationNumberIcon
                    sx={{
                      color: "#fff",
                      fontSize: "35px",
                      marginRight: "10px",
                    }}
                  />
                  <Box>
                    <Typography sx={{ color: "#fff" }}>RSVP</Typography>
                    <Typography sx={{ color: "#fff" }}>$0.00</Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff" }}>x1</Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff" }}>$0.00</Typography>
                </Box>
              </Box>
              <Divider
                sx={{ background: "#ff914d", opacity: 0.4, margin: "3% 0%" }}
              />
            </Box>
            {/* Tickets */}

            {/* Payments */}
            <Box
              sx={{
                background: "#202524",
                padding: "20px",
                borderRadius: "20px",
                margin: "2% 0%",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontSize: "22px", fontWeight: "bold" }}
              >
                Payments
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  margin: "3% 0%",
                  background: "#151618",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "60%",
                    display: "flex",
                    justifySelf: "flex-start",
                  }}
                >
                  <Typography sx={{ color: "#fff" }}>Subtotal</Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff", marginRight: "10px" }}>
                    $0.00
                  </Typography>
                </Box>
                <Box>
                  <Button
                    sx={{
                      color: "#fff",
                      background: "#ff914d",
                      paddingInline: "20px",
                      borderRadius: "20px",
                    }}
                  >
                    PAID
                  </Button>
                </Box>
              </Box>
            </Box>
            {/* Payments */}

            {/* Timeline */}
            <Box
              sx={{
                background: "#202524",
                padding: "20px",
                borderRadius: "20px",
                margin: "2% 0%",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontSize: "22px", fontWeight: "bold" }}
              >
                Timeline
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ width: "65%" }}>
                  <Timeline
                    sx={{
                      [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                      },
                    }}
                  >
                    {/* <TimelineItem sx={{margin:'0'}}>
                                <TimelineContent>November 13th</TimelineContent>
                            </TimelineItem> */}
                    <Typography sx={{ marginLeft: { md: "25px", xs: "0" } }}>
                      November 13th
                    </Typography>
                    <TimelineItem sx={{ margin: "0" }}>
                      <TimelineSeparator>
                        <TimelineDot sx={{ color: "#ff914d" }} />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        The tickets were purchased for $0.00.
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem sx={{ margin: "0" }}>
                      <TimelineSeparator>
                        <TimelineDot />
                      </TimelineSeparator>
                      <TimelineContent>
                        The receipt for the order was sent.
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </Box>
                <Box
                  sx={{
                    width: "30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Typography sx={{ color: "#fff" }}>11:18 AM</Typography>
                  <Typography sx={{ color: "#fff" }}>11:18 AM</Typography>
                </Box>
              </Box>
            </Box>
            {/* Timeline */}
          </Box>

          <Box
            sx={{
              width: { md: "35%", xs: "100%" },
              background: "#202524",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontSize: "18px", fontWeight: "bold" }}
              >
                Attendee
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Avatar
                sx={{
                  bgcolor: "#202524",
                  margin: "3% auto",
                  width: 120,
                  height: 120,
                  boxShadow:
                    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                  transition: "all .3s linear",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <PersonIcon sx={{ color: "#ff914d", fontSize: "80px" }} />
              </Avatar>
              <Typography
                sx={{ color: "#fff" }}
                variant="h6"
                align="center"
                mt={2}
              >
                Sartaj Gill
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  textAlign: "center",
                  margin: "2% 0%",
                  fontSize: "18px",
                }}
                variant="body2"
              >
                Joined Posh in November 2024
              </Typography>
            </Box>
            <Divider
              sx={{ background: "#ff914d", opacity: 0.4, margin: "3% 0%" }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "normal",
                  paddingInline: "10px",
                }}
              >
                Group Statistics
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                background: "#151618",
                padding: "5px 10px",
                borderRadius: "10px",
                margin: "2% 0%",
              }}
            >
              <Box>
                <Typography sx={{ color: "#fff" }}>
                  {" "}
                  Events Attended{" "}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "#fff" }}> 1 </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "5px 10px",
                borderRadius: "10px",
                margin: "2% 0%",
              }}
            >
              <Box>
                <Typography sx={{ color: "#fff" }}> Lifetime Spend </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "#fff" }}> $0.00 </Typography>
              </Box>
            </Box>
            <Divider
              sx={{ background: "#ff914d", opacity: 0.4, margin: "3% 0%" }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "normal",
                  paddingInline: "10px",
                }}
              >
                Contact Info
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                background: "#151618",
                padding: "5px 10px",
                borderRadius: "10px",
                margin: "2% 0%",
              }}
            >
              <Box>
                <EmailIcon sx={{ color: "#fff", marginRight: "20px" }} />
              </Box>
              <Box>
                <Typography sx={{ color: "#fff" }}>
                  {" "}
                  gills1enterprises@gmail.com{" "}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "5px 10px",
                borderRadius: "10px",
                margin: "2% 0%",
              }}
            >
              <Box>
                <PhoneIcon sx={{ color: "#fff", marginRight: "20px" }} />
              </Box>
              <Box>
                <Typography sx={{ color: "#fff" }}> +15862653825 </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Attendee end  */}
      </div>
      <CreatorFooter />
    </>
  );
}

export default AttendeePage;
