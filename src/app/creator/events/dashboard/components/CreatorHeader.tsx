"use client";
import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Divider,
  Drawer,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import Avatar from '@mui/material/Avatar';
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Svlogo from "../../../../../assets/branding/HL_Clean_Transparent.svg";
import Image from "next/image";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { useRouter } from "next/navigation";

import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import DrawerInner from "./DrawerInner";

// html tooltip
const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    background: `${hexToRGBA(theme.palette.customColors.primaryDark1, 0.2)}`,
    boxShadow: `0 8px 32px 0 ${hexToRGBA(
      theme.palette.customColors.orange,
      0.22
    )}`,
    color: theme.palette.customColors.primaryWhite,
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

export default function CreatorHeader() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  // drawer start
  // DrawerList start
  const DrawerList = (
    <Box
      sx={{
        "& .MuiDrawer-paper": {
          width: { sm: "60%", xs: "100%" }, // Ensure the drawer paper width is also responsive
        },
        background: "rgba( 32, 37, 36, 0.95 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 8.5px )",
        padding: "10px",
        height: "100vh",
      }}
      role="presentation"
    >
      <DrawerInner />

      <CloseIcon
        onClick={() => setOpen(false)}
        sx={{
          position: "absolute",
          color: "#fff",
          right: "2%",
          top: "2%",
          transition: "all .2s linear",
          "&:hover": {
            cursor: "pointer",
            color: "#ff914d",
            transform: "scale(1.5) rotate(90deg) ",
          },
        }}
      />
    </Box>
  );
  // DrawerList end
  // drawer end

  const router = useRouter();
  const theme = useTheme();
  const orange = theme.palette.customColors.orange;
  const white = theme.palette.customColors.primaryWhite;
  const dark1 = theme.palette.customColors.primaryDark1;
  const dark2 = theme.palette.customColors.primaryDark2;
  return (
    // <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1, background: dark2 }}>
      <AppBar sx={{ background: dark1 }} position="static">
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
                onClick={() => router.push(`/profile`)}
                sx={{
                  color: white,
                  background: dark1,
                  "&:hover": {
                    cursor: "pointer",
                    background: dark1,
                    color: orange,
                    border: `1px solid ${orange}`,
                    borderRadius: "50%",
                  },
                }}
              />
            </IconButton>

            <HtmlTooltip
              title={
                <React.Fragment>
                  <Box>
                    <Typography>Notifications</Typography>
                    <Divider sx={{ background: orange, opacity: 0.4 }} />
                    <Typography>You have no notifications.</Typography>
                  </Box>
                </React.Fragment>
              }
            >
              <IconButton
                sx={{
                  transition: "all .2s linear",
                  "&:hover": {
                    cursor: "pointer",
                    transform: "rotate(20deg)",
                    color: orange,
                  },
                }}
                size="small"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <NotificationsIcon
                  sx={{
                    color: white,
                    background: "none",
                    "&:hover": { cursor: "pointer", color: orange },
                  }}
                />
              </IconButton>
            </HtmlTooltip>

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
              <MenuIcon onClick={toggleDrawer(true)} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
    // </ThemeProvider>
  );
}
