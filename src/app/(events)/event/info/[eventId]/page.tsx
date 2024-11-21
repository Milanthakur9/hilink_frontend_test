// "use client";

import EventInfoPage, { EventInfoProps } from ".";

// import CreatorProfile from "@/components/profile/CreatorProfile";
// import { Box, Button, Container, Typography } from "@mui/material";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import Icon from "@/@core/components/icon";
// import { useRouter } from "next/navigation";

// type Props = {
//   params: { eventId: string };
// };

// const fakeEventInfo = {
//   id: 1,
//   title: "The Aura Launch Party",
//   startTime: "Nov 15 at 11:30 PM",
//   endTime: "4:00 AM (EST)",
//   location: "627 West 51st Street, New York, NY, US",
//   venue: "Club 51",
//   description:
//     "Launch of The Aura App: Entry only with download of Aura App First 400 RSVPs",
//   banner:
//     // "https://www.eventbookings.com/wp-content/uploads/2024/01/Different-Types-of-Events-in-2024-Which-is-Right-for-You.jpg",
//     "https://c8.alamy.com/comp/2D6MG47/the-vector-halloween-web-banner-vertical-wide-skyscraper-size-template-background-with-bats-pumpkin-and-castle-house-2D6MG47.jpg",
//   creator: "212Group",
//   creatorProfile:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgm0xw9RnQAGQxrwu2Oo8Ib2_Oxji3gGn9AQ&s",
//   music: "music.mp3",
//   textColor: "",
//   eventCustomColor: "orange",
//   song: "song.mp3",
// };

// const EventInfoPage = ({ params }: Props) => {
//   const eventId = Number(params.eventId);
//   console.log({ eventId });
//   const router = useRouter();
//   const [
//     eventInfo,
//     // setEventInfo
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   ] = useState<null | any>(fakeEventInfo);

//   useEffect(() => {
//     // fetch event info with id
//   }, []);

//   return (
//     <>
//       <Box
//         sx={{
//           // height: "100vh",
//           width: "100%",
//           position: "relative",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Button
//           variant="tonal"
//           sx={{
//             position: "absolute",
//             top: { sm: "1%", md: "3%" },
//             right: "3%",
//             zIndex: 4,
//             color: "customColors.primaryWhite",
//           }}
//           onClick={() => router.push("/login")}
//         >
//           Login
//         </Button>

//         {/** background image */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             width: "100%",
//             height: "100%",
//             backgroundImage: `url(${eventInfo.banner})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center center",
//             transform: "translate(-50%, -50%)",
//             filter: "blur(40px)",
//             WebkitFilter: "blur(40px)",
//             opacity: 0.4,
//             zIndex: 0,
//             backfaceVisibility: "hidden",
//             WebkitBackfaceVisibility: "hidden",
//             perspective: 1000,
//             WebkitPerspective: 1000,
//             transformStyle: "preserve-3d",
//             WebkitTransformStyle: "preserve-3d",
//           }}
//         />
//         <Container maxWidth="xl" sx={{ padding: { sm: 0 } }}>
//           {/* top section */}
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", md: "row-reverse" },
//               justifyContent: { xs: "center", md: "space-between" },
//               alignItems: { md: "center" },
//               gap: { xs: "2.8rem", md: "2.5rem" },
//               width: "100%",
//               maxWidth: "1000px",
//               margin: "auto",
//               padding: { xs: 0, md: "110px 20px" },
//               position: "relative",
//               zIndex: 2,
//             }}
//           >
//             {/** left side image banner */}
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexGrow: 1,
//                 maxWidth: { md: 450 },
//                 height: { sm: 600, md: 600 },
//                 "& > img": {
//                   borderRadius: { xs: 0, md: 8 },
//                   width: { xs: "100%", md: "350px" },
//                   height: "100%",
//                   objectFit: "cover",
//                 },
//               }}
//             >
//               <Image
//                 src={eventInfo.banner}
//                 width={200}
//                 height={200}
//                 alt={`${eventInfo.title}'s banner`}
//               />
//             </Box>
//             {/** right side info */}
//             <Box
//               sx={{
//                 flexGrow: 1,
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 2,
//                 }}
//               >
//                 <CreatorProfile
//                   alt="profile"
//                   src={eventInfo.creatorProfile}
//                   width={35}
//                   height={35}
//                 />
//                 <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
//                   {eventInfo.creator}
//                 </Typography>
//               </Box>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mt: 2.5,
//                   mb: 1,
//                   fontSize: "2.8rem",
//                 }}
//               >
//                 {eventInfo.title}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 sx={{ fontSize: "1.2rem" }}
//                 color={eventInfo.eventCustomColor}
//               >
//                 {eventInfo.venue}
//               </Typography>
//               <Typography
//                 variant="caption"
//                 sx={{ fontSize: "1.2rem" }}
//                 color={eventInfo.eventCustomColor}
//               >
//                 {eventInfo.startTime} -{" "}
//               </Typography>

//               <Typography
//                 variant="caption"
//                 sx={{ fontSize: "1.2rem" }}
//                 color={eventInfo.eventCustomColor}
//               >
//                 {eventInfo.endTime}
//               </Typography>
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 2,
//                   my: 5,
//                   color: eventInfo.eventCustomColor,
//                 }}
//               >
//                 <Icon icon="tabler:map-pin" />
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     color: eventInfo.eventCustomColor,
//                     fontSize: "0.9rem",
//                   }}
//                 >
//                   {eventInfo.location}
//                 </Typography>
//               </Box>
//               <Typography variant="caption" sx={{ fontSize: "1rem" }}>
//                 {eventInfo.description}
//               </Typography>
//             </Box>
//           </Box>
//         </Container>
//       </Box>
//     </>
//   );
// };

// export default EventInfoPage;

// export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return [{ eventId: "1" }, { eventId: "2" }];
}

const EventPage = async ({ params }: EventInfoProps) => {
  return <EventInfoPage params={{ eventId: params.eventId }} />;
  // return <>{params.eventId}</>;
};

export default EventPage;
