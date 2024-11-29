// "use client";

// import React from "react";
// import { Box, Typography } from "@mui/material";
// import CreateIcon from "@mui/icons-material/Create";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
// import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
// import DeleteIcon from "@mui/icons-material/Delete";
// import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import CreatorHeader from "../components/CreatorHeader";
// import CreatorFooter from "../components/CreatorFooter";
// function ViewPastEvent() {
//   const router = useRouter();

//   return (
//     <>
//       <CreatorHeader />
//       <div style={{ background: "#151618" }}>
//         {/* <Head/> */}
//         <Box sx={{ width: "80%", margin: "0 auto", padding: "3% 0%" }}>
//           <Box sx={{ display: "flex", alignItems: "center", padding: "4% 0%" }}>
//             <Box onClick={() => router.back()}>
//               <ArrowCircleLeftIcon
//                 sx={{
//                   color: "#ff914d",
//                   fontSize: "45px",
//                   marginRight: "20px",
//                   "&:hover": { cursor: "pointer" },
//                 }}
//               />
//             </Box>
//             <Typography
//               variant="h2"
//               sx={{ color: "#fff", fontSize: "35px", fontWeight: "bold" }}
//             >
//               All Events
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               width: "100%",
//               margin: "0% auto",
//               display: "flex",
//               flexDirection: { md: "row", xs: "column" },
//               justifyContent: "space-between",
//               alignItems: "center",
//               background:
//                 "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://media.tenor.com/xXsD9Uhiq8QAAAAC/happy.gif)",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               padding: "20px",
//               borderRadius: "20px",
//             }}
//           >
//             <Box
//               sx={{
//                 width: { md: "40%", xs: "100%" },
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <Box sx={{ width: "30%" }}>
//                 <Image
//                   src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://media.tenor.com/xXsD9Uhiq8QAAAAC/happy.gif"
//                   alt="gif"
//                   width={100}
//                   height={100}
//                   style={{
//                     width: "100%",
//                     height: "inherit",
//                     borderRadius: "10px",
//                   }}
//                 />
//               </Box>
//               <Box sx={{ width: "70%", paddingLeft: "10px" }}>
//                 <Typography sx={{ color: "#fff", fontSize: "18px" }}>
//                   tj
//                 </Typography>
//                 <Typography sx={{ color: "#fff" }}>
//                   November 14th 2024, 6:53 pm
//                 </Typography>
//               </Box>
//             </Box>
//             <Box sx={{ margin: { md: "0", xs: "3% 0 0 0" } }}>
//               <RocketLaunchIcon sx={{ color: "#ff914d" }} />
//               <CreateIcon sx={{ color: "#fff", marginLeft: "20px" }} />
//               <VisibilityIcon sx={{ color: "#fff", marginLeft: "20px" }} />
//               <LibraryAddIcon sx={{ color: "#fff", marginLeft: "20px" }} />
//               <DeleteIcon sx={{ color: "#fff", marginLeft: "20px" }} />
//             </Box>
//           </Box>
//           <Box
//             sx={{
//               width: "100%",
//               margin: "2% auto",
//               display: "flex",
//               justifyContent: "space-between",
//               flexDirection: { md: "row", xs: "column" },
//               alignItems: "center",
//               background:
//                 "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://media.tenor.com/3KwgP0nO93sAAAAC/bar-is-open-dwight-the-general-manfredi.gif)",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               padding: "20px",
//               borderRadius: "20px",
//             }}
//           >
//             <Box
//               sx={{
//                 width: { md: "40%", xs: "100%" },
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <Box sx={{ width: "30%" }}>
//                 <Image
//                   src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://media.tenor.com/3KwgP0nO93sAAAAC/bar-is-open-dwight-the-general-manfredi.gif"
//                   alt="gif"
//                   width={100}
//                   height={100}
//                   style={{
//                     width: "100%",
//                     height: "inherit",
//                     borderRadius: "10px",
//                   }}
//                 />
//               </Box>
//               <Box sx={{ width: "70%", paddingLeft: "10px" }}>
//                 <Typography sx={{ color: "#fff", fontSize: "18px" }}>
//                   test
//                 </Typography>
//                 <Typography sx={{ color: "#fff" }}>
//                   November 13th 2024, 6:55 pm
//                 </Typography>
//               </Box>
//             </Box>
//             <Box sx={{ margin: { md: "0", xs: "3% 0 0 0" } }}>
//               <CreateIcon sx={{ color: "#fff" }} />
//               <VisibilityIcon sx={{ color: "#fff", marginLeft: "20px" }} />
//               <LibraryAddIcon sx={{ color: "#fff", marginLeft: "20px" }} />
//             </Box>
//           </Box>
//         </Box>
//         {/* <Footer/> */}
//       </div>
//       <CreatorFooter />
//     </>
//   );
// }

// export default ViewPastEvent;

"use client";

import React from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CreatorHeader from "../components/CreatorHeader";
import CreatorFooter from "../components/CreatorFooter";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
// datePicker
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "60%", xs: "100%" },
  bgcolor: "#151618",
  border: "none",
  outline: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

function ViewPastEvent() {
  const theme = useTheme();
  const orange = theme.palette.customColors.orange;
  const white = theme.palette.customColors.primaryWhite;
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CreatorHeader />
      <div style={{ background: "#151618" }}>
        {/* <Head/> */}
        <Box sx={{ width: "80%", margin: "0 auto", padding: "3% 0%" }}>
          <Box sx={{ display: "flex", alignItems: "center", padding: "4% 0%" }}>
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
              All Events
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              margin: "0% auto",
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
              background:
                "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://media.tenor.com/xXsD9Uhiq8QAAAAC/happy.gif)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <Box
              sx={{
                width: { md: "40%", xs: "100%" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "30%" }}>
                <Image
                  src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://media.tenor.com/xXsD9Uhiq8QAAAAC/happy.gif"
                  alt="gif"
                  width={100}
                  height={100}
                  style={{
                    width: "100%",
                    height: "inherit",
                    borderRadius: "10px",
                  }}
                />
              </Box>
              <Box sx={{ width: "70%", paddingLeft: "10px" }}>
                <Typography sx={{ color: "#fff", fontSize: "18px" }}>
                  tj
                </Typography>
                <Typography sx={{ color: "#fff" }}>
                  November 14th 2024, 6:53 pm
                </Typography>
              </Box>
            </Box>
            <Box sx={{ margin: { md: "0", xs: "3% 0 0 0" } }}>
              <RocketLaunchIcon sx={{ cursor: "pointer", color: "#ff914d" }} />
              <CreateIcon
                onClick={() => router.push("/owner/groups/overview/")}
                sx={{ cursor: "pointer", color: "#fff", marginLeft: "20px" }}
              />
              <VisibilityIcon
                onClick={() => router.push("/e/view")}
                sx={{ cursor: "pointer", color: "#fff", marginLeft: "20px" }}
              />
              <LibraryAddIcon
                onClick={handleOpen}
                sx={{ cursor: "pointer", color: "#fff", marginLeft: "20px" }}
              />
              <DeleteIcon sx={{ color: "#fff", marginLeft: "20px" }} />

              {/* modal  */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "40px",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      Duplicate Event
                    </Typography>
                    <Typography
                      sx={{ textAlign: "center", margin: "10px 0px" }}
                    >
                      {`Duplicating an event copies over all it's settings,
                      tickets, and other attributes. You can changes them later
                      in the event settings.`}
                    </Typography>
                  </Box>

                  <Box>
                    <TextField
                      autoComplete="off"
                      placeholder="Events Name"
                      id="outlined-basic"
                      // label="My Event"
                      variant="outlined"
                      size="small"
                      sx={{
                        background: `${hexToRGBA(
                          theme.palette.customColors.primaryDark1,
                          0.2
                        )}`,
                        boxShadow: ` 0 8px 32px 0 ${hexToRGBA(
                          theme.palette.customColors.orange,
                          0.12
                        )}`,
                        // border: ,
                        backdropFilter: "blur( 4px )",
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          color: "#ff914d",
                          fontFamily: "Arial",
                          fontWeight: "noraml",
                          borderRadius: "30px",
                          // Class for the border around the input field
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: `${theme.palette.customColors.primaryWhite}`,
                            borderWidth: "1px",
                          },
                        },
                        // Class for the label of the input field
                        "& .MuiInputLabel-outlined": {
                          color: "#ff914d",
                          fontWeight: "normal",
                        },
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      overflowY: "scroll",
                      height: "250px",
                      margin: "5% 0",
                      "&::-webkit-scrollbar": {
                        width: "5px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: theme.palette.customColors.orange, // Customize scrollbar thumb color
                      },
                      "&::-webkit-scrollbar-track": {
                        backgroundColor:
                          theme.palette.customColors.primaryDark2, // Customize scrollbar track color
                      },
                    }}
                  >
                    <Box
                      sx={{
                        margin: "20px",
                        display: "flex",
                        flexDirection: { md: "row", xs: "column" },
                        justifyContent: "space-between",
                      }}
                    >
                      <Box sx={{ width: { md: "48%", xs: "100%" } }}>
                        <Box>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoItem label="Event Start">
                              <MobileDateTimePicker
                                defaultValue={dayjs("2022-04-17T15:30")}
                              />
                            </DemoItem>

                            {/* </DemoContainer> */}
                          </LocalizationProvider>
                        </Box>
                        <Box>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoItem label="Event end">
                              <MobileDateTimePicker
                                defaultValue={dayjs("2022-04-17T15:30")}
                              />
                            </DemoItem>

                            {/* </DemoContainer> */}
                          </LocalizationProvider>
                        </Box>
                        <Box sx={{ margin: "15px 0px" }}>
                          <Typography>Venue Name:</Typography>
                          <TextField
                            autoComplete="off"
                            placeholder="Events Name"
                            id="outlined-basic"
                            // label="My Event"
                            variant="outlined"
                            size="small"
                            sx={{
                              background: `${hexToRGBA(
                                theme.palette.customColors.primaryDark1,
                                0.2
                              )}`,
                              boxShadow: ` 0 8px 32px 0 ${hexToRGBA(
                                theme.palette.customColors.orange,
                                0.12
                              )}`,
                              // border: ,
                              backdropFilter: "blur( 4px )",
                              width: "100%",
                              "& .MuiOutlinedInput-root": {
                                color: "#ff914d",
                                fontFamily: "Arial",
                                fontWeight: "noraml",
                                borderRadius: "30px",
                                // Class for the border around the input field
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderColor: `${theme.palette.customColors.primaryWhite}`,
                                  borderWidth: "1px",
                                },
                              },
                              // Class for the label of the input field
                              "& .MuiInputLabel-outlined": {
                                color: "#ff914d",
                                fontWeight: "normal",
                              },
                            }}
                          />
                        </Box>
                        <Box sx={{ margin: "15px 0px" }}>
                          <Typography>Event Location:</Typography>
                          <TextField
                            autoComplete="off"
                            placeholder="Events Name"
                            id="outlined-basic"
                            // label="My Event"
                            variant="outlined"
                            size="small"
                            sx={{
                              background: `${hexToRGBA(
                                theme.palette.customColors.primaryDark1,
                                0.2
                              )}`,
                              boxShadow: ` 0 8px 32px 0 ${hexToRGBA(
                                theme.palette.customColors.orange,
                                0.12
                              )}`,
                              // border: ,
                              backdropFilter: "blur( 4px )",
                              width: "100%",
                              "& .MuiOutlinedInput-root": {
                                color: "#ff914d",
                                fontFamily: "Arial",
                                fontWeight: "noraml",
                                borderRadius: "30px",
                                // Class for the border around the input field
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderColor: `${theme.palette.customColors.primaryWhite}`,
                                  borderWidth: "1px",
                                },
                              },
                              // Class for the label of the input field
                              "& .MuiInputLabel-outlined": {
                                color: "#ff914d",
                                fontWeight: "normal",
                              },
                            }}
                          />
                        </Box>
                      </Box>
                      <Box sx={{ width: { md: "48%", xs: "100%" } }}>
                        {/* profile image start  */}
                        <Box
                          sx={{
                            width: { md: "100%", xs: "250px" },
                            minHeight: "310px",
                            // margin: { md: "0%", xs: "0% auto 6%" },
                            backgroundImage: `url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/create-event-flyer-placeholders/Default_Flyer_Placeholder_2.webp)`,
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            objectFit: "cover",
                            border: `1px solid ${theme.palette?.customColors.primaryWhite}`,
                            // backgroundBlendMode: "overlay",
                            borderRadius: "20px",
                            transition: "all 0.1s linear",
                            position: "relative",
                            "&:hover": {
                              cursor: "pointer",
                              // transform:'scale(1.1)'
                              boxShadow:
                                "0px 0px 19px 20px rgba(255,145,77,0.12)",
                              border: "1px solid #ff914d",
                              // backgroundColor:'#1f1f1f',
                              // backgroundBlendMode:'overlay'
                            },
                          }}
                        ></Box>
                        {/* profile image end  */}
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ textAlign: "center" }}>
                    <Button
                      sx={{
                        background: theme.palette.customColors.orange,
                        transition: "all .1s linear",
                        "&:hover": {
                          cursor: "pointer",
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      Duplicate Event
                    </Button>
                  </Box>

                  <CloseIcon
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      right: "5%",
                      top: "5%",
                      color: white,
                      "&:hover": { cursor: "pointer", color: orange },
                    }}
                  />
                </Box>
              </Modal>
              {/* modal  */}
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              margin: "2% auto",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { md: "row", xs: "column" },
              alignItems: "center",
              background:
                "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://media.tenor.com/3KwgP0nO93sAAAAC/bar-is-open-dwight-the-general-manfredi.gif)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <Box
              sx={{
                width: { md: "40%", xs: "100%" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "30%" }}>
                <Image
                  src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://media.tenor.com/3KwgP0nO93sAAAAC/bar-is-open-dwight-the-general-manfredi.gif"
                  alt="gif"
                  width={100}
                  height={100}
                  style={{
                    width: "100%",
                    height: "inherit",
                    borderRadius: "10px",
                  }}
                />
              </Box>
              <Box sx={{ width: "70%", paddingLeft: "10px" }}>
                <Typography sx={{ color: "#fff", fontSize: "18px" }}>
                  test
                </Typography>
                <Typography sx={{ color: "#fff" }}>
                  November 13th 2024, 6:55 pm
                </Typography>
              </Box>
            </Box>
            <Box sx={{ margin: { md: "0", xs: "3% 0 0 0" } }}>
              <CreateIcon sx={{ color: "#fff" }} />
              <VisibilityIcon sx={{ color: "#fff", marginLeft: "20px" }} />
              <LibraryAddIcon
                onClick={handleOpen}
                sx={{ color: "#fff", marginLeft: "20px" }}
              />
            </Box>
          </Box>
        </Box>
        {/* <Footer/> */}
      </div>
      <CreatorFooter />
    </>
  );
}

export default ViewPastEvent;
