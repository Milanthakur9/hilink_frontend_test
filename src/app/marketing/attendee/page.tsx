"use client";

import React from "react";
// import Image from "next/image";
// material ui
import { Box, Avatar, Divider, Typography } from "@mui/material";
// icon
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
// import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocalMallIcon from '@mui/icons-material/LocalMall';
// Timeline
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { useRouter } from "next/navigation";
import CreatorHeader from "../../creator/events/dashboard/components/CreatorHeader";
import CreatorFooter from "../../creator/events/dashboard/components/CreatorFooter";

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

// const btn = [
//   {
//     name: "Resend Receipt",
//   },
//   {
//     name: "Cancel",
//   },
//   {
//     name: "Cancel & Relist",
//   },
// ];

const orderData = [
    {
        icon:<LocalMallIcon/>,
        linkTitle:'Order #7679425',
        price:'$0.00',
        message:'Weekend Unwind',
        dateTime:'December 1st, 2024 12:18 PM',
        link:'/'
    },
    {
        icon:<LocalMallIcon/>,
        linkTitle:'Order #7314206',
        price:'$0.00',
        message:'test',
        dateTime:'November 13th, 2024 11:18 AM',
        link:'/'
    },
]
function AttendeePage() {
  const router = useRouter();

  return (
    <>
      <CreatorHeader />
      <div style={{ width: "90%", margin: "0 auto", padding: "5% 0%" }}>
       
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
                Sartaj Gill
              </Typography>
            </Box>
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
                Joined HILINK in November 2024
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

          <Box sx={{ width: { md: "60%", xs: "100%" },margin:{md:'0',xs:'5% 0'} }}>
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
                sx={{ textTransform:'uppercase',  fontWeight: "bold" }}
              >
                Orders
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  margin: "3% 0%",
                }}
              >
                {/* orderData */}
                <Box sx={{ display: "flex",flexDirection:'column',width:'100%' }}>
                    {
                        orderData.map((item)=>{
                            return(
                                <>
                                <Box sx={{display:'flex',width:'100%',justifyContent:'space-between',margin:'2% 0'}}  key={item.linkTitle}>
                                    <Typography>{item.icon}</Typography>
                                    <Box>
                                        <Typography>{item.linkTitle}</Typography>
                                        <Typography>{item.price}</Typography>
                                    </Box>
                                    <Typography>{item.message}</Typography>
                                    <Typography>{item.dateTime}</Typography>
                                </Box>
                                <Divider
                                sx={{ background: "#ff914d", opacity: 0.4, margin: "3% 0%" }}
                              />
                              </>
                            )
                        })
                    }

                </Box>


              </Box>
              
            </Box>
            {/* Tickets */}

           

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
                      Sartaj made Order #7314206 for $0.00.
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem sx={{ margin: "0" }}>
                      <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                      Sartaj made Order #7679425 for $0.00.
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem sx={{ margin: "0" }}>
                      <TimelineSeparator>
                        <TimelineDot />
                      </TimelineSeparator>
                      <TimelineContent>
                      Sartaj made Order #7679425 for $0.00.
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
                  <Typography sx={{ color: "#fff" }}> 12:18 PM </Typography>
                  <Typography sx={{ color: "#fff" }}>2024</Typography>
                </Box>
              </Box>
            </Box>
            {/* Timeline */}

             {/* Payments */}
             <Box
              sx={{
                background: "#202524",
                padding: "20px",
                minHeight:'100px',
                borderRadius: "20px",
                margin: "2% 0%",
              }}
            >
              <Typography
                variant="h6"
                sx={{  fontWeight: "bold" }}
              >
                Checkout Field Responses
              </Typography>
            </Box>
            {/* Payments */}
          </Box>

          
        </Box>
        {/* Attendee end  */}
      </div>
      <CreatorFooter />
    </>
  );
}

export default AttendeePage;
