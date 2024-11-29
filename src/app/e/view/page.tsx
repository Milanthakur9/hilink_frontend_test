"use client";
import {
  Box,
  Typography,
  Divider,
  useTheme,
  FormControl,
  Input,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import Image from "next/image";
import PlaceIcon from "@mui/icons-material/Place";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import Logo from "./../../../assets/branding/HL_Clean_Transparent_white.svg";

function Page() {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          background:
            "url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://media.tenor.com/xXsD9Uhiq8QAAAAC/happy.gif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{ backdropFilter: "blur(45px)", width: "100%", padding: "5% 0%" }}
        >
          <Box
            sx={{
              width: { md: "80%", xs: "95%" },
              margin: "0 auto",
              display: "flex",
              flexDirection: { md: "row", xs: "column-reverse" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { md: "65%", xs: "100%" } }}>
              <Typography
                sx={{
                  fontSize: "20px",
                  "&:hover": {
                    cursor: "pointer",
                    textDecoration: `underline solid ${theme.palette.customColors.primaryWhite}`,
                  },
                }}
              >
                Events by test
              </Typography>
              <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
                tj
              </Typography>
              <Typography sx={{ fontSize: "20px", margin: "0 0 3% 0" }}>
                test <br></br>Thu, Nov 14 at 6:53 PM - 11:25 PM (CET)
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                {" "}
                <PlaceIcon
                  sx={{ color: theme.palette.customColors.primaryWhite }}
                />{" "}
                Monte Testaccio, 00153 Rome, Metropolitan City of Rome Capital,
                Italy
              </Typography>
            </Box>
            <Box sx={{ width: { md: "25%", xs: "230px", padding: "35px" } }}>
              <Image
                src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://media.tenor.com/xXsD9Uhiq8QAAAAC/happy.gif"
                style={{
                  width: "100%",
                  height: "inherit",
                  borderRadius: "20px",
                }}
                alt="dance-gif"
                height={100}
                width={100}
              ></Image>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: { md: "80%", xs: "95%" },
          margin: "0 auto",
          padding: "0% 0%",
        }}
      >
        <Box sx={{ padding: "3% 0%" }}>
          <Typography sx={{ fontSize: "18px" }}>test</Typography>
          <Divider
            sx={{
              background: ` ${hexToRGBA(
                theme.palette.customColors.orange,
                0.32
              )}`,
              height: "3px",
              marginTop: "12%",
            }}
          ></Divider>
          <Box>
            <Typography sx={{ fontSize: "4.5vh", marginTop: "10px" }}>
              ACTIVITY
            </Typography>
            <Box sx={{ width: { md: "50%", xs: "100%" }, marginTop: "15px" }}>
              <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
                {/* <InputLabel htmlFor="standard-adornment-password">Password</InputLabel> */}
                <Input
                  id="standard-adornment-password"
                  // type= 'password'
                  placeholder="Leave a Comment for your fellow attendees"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton>
                        <ModeCommentIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box sx={{ padding: "15% 0" }}></Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "20px",
              "&:hover": {
                cursor: "pointer",
                textDecoration: `underline solid ${theme.palette.customColors.primaryWhite}`,
              },
            }}
          >
            Events by test
          </Typography>
          <Button
            sx={{
              background: theme.palette.customColors.orange,
              margin: "1% 0%",
              fontWeight: "100",
              paddingInline: "20px",
              transition: "all .1s linear",
              "&:hover": { cursor: "pointer", transform: "scale(1.05)" },
              color: `${theme.palette.customColors.primaryWhite}`,
            }}
          >
            Contact Events by test
          </Button>
        </Box>
        <Divider
          sx={{
            background: ` ${hexToRGBA(
              theme.palette.customColors.orange,
              0.32
            )}`,
            height: "1px",
            margin: "3% 0",
          }}
        ></Divider>
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              alignItems: "center",
            }}
          >
            <Image src={Logo} alt="logo" width={100}></Image>
            <Typography
              sx={{
                textTransform: "uppercase",
                margin: { md: "0 0 0 15px", xs: "10px 0px" },
              }}
            >
              Terms Of Service
            </Typography>
            <Typography
              sx={{
                textTransform: "uppercase",
                margin: { md: "0 0 0 15px", xs: "10px 0px" },
              }}
            >
              Privacy Policy
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                background: theme.palette.customColors.orange,
                margin: "1% 0%",
                fontWeight: "100",
                paddingInline: "20px",
                transition: "all .1s linear",
                "&:hover": { cursor: "pointer", transform: "scale(1.05)" },
                color: `${theme.palette.customColors.primaryWhite}`,
              }}
            >
              Create Your Own Event
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Page;
