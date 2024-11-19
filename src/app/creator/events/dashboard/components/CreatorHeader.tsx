"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import Avatar from '@mui/material/Avatar';
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Svlogo from "../../../../../assets/branding/HL_Clean_Transparent.svg";
import Image from "next/image";

export default function CreatorHeader() {
  return (
    // <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1, background: "#202524" }}>
      <AppBar sx={{ background: "#151618" }} position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Image src={Svlogo} height="30" alt="hilink logo" />
          </Box>
          <Box>
            <IconButton
              size="small"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <PersonIcon
                sx={{
                  color: "#fff",
                  background: "#151618",
                  "&:hover": {
                    cursor: "pointer",
                    background: "#151618",
                    color: "#ff914d",
                    border: "1px solid #ff914d",
                    borderRadius: "50%",
                  },
                }}
              />
            </IconButton>
            <IconButton
              sx={{
                transition: "all .2s linear",
                "&:hover": {
                  cursor: "pointer",
                  transform: "rotate(20deg)",
                  color: "#ff914d",
                },
              }}
              size="small"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <NotificationsIcon
                sx={{
                  color: "#fff",
                  background: "#151618",
                  "&:hover": { cursor: "pointer", color: "#ff914d" },
                }}
              />
            </IconButton>
            <IconButton
              sx={{
                transition: "all .2s linear",
                "&:hover": {
                  cursor: "pointer",
                  transform: "rotate(- 90deg)",
                  color: "#ff914d",
                },
              }}
              size="small"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    // </ThemeProvider>
  );
}
