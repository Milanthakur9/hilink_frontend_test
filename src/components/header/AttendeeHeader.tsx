"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
import LogoWithLink from "../logo/LogoWithLink";
import { useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import FolderIcon from "@mui/icons-material/Folder";
// import ImageIcon from "@mui/icons-material/Image";
// import DescriptionIcon from "@mui/icons-material/Description";

// const pages = ["Products", "Pricing", "Blog"];
const attendeePages = [
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Page 3",
    link: "/3",
  },
  {
    name: "Last Page",
    link: "/lastPage",
  },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function AttendeeHeader() {
  const theme = useTheme();
  const router = useRouter();
  const [open, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setState(open);
  };

  return (
    <AppBar
      color="default"
      position="static"
      sx={{
        background: theme.palette.customColors.primaryDark1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <LogoWithLink logoColor="white" />
          </Box>
          {/* monitor screen */}
          {/* <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: 5,
            }}
          >
            {attendeePages.map((page) => (
              <Link
                key={page.name}
                href={page.link}
                style={{
                  color: theme.palette.primary.main,
                  fontSize: "14px",
                  display: "table",
                  textDecoration: "none",
                  font: theme.typography.fontFamily?.split(",")[1],
                  fontWeight: "900",
                }}
              >
                {page.name}
              </Link>
            ))}
          </Box> */}

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              display: {
                xs: "none",
                color: theme.palette.customColors.primaryWhite,
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* The outside of the drawer */}
          <Box
            sx={{
              // display: { md: "flex", alignItems: "center" },
              display: "flex",
              alignItems: "center",
              gap: 6,
              "& a": {
                display: "table",
                textDecoration: "none",
                fontSize: "1rem",
                color: theme.palette.customColors.primaryWhite,
              },
            }}
          >
            <Link href={"/login"}>Log In</Link>
            <Button
              variant="contained"
              sx={{ borderRadius: 10, py: 3 }}
              onClick={() => router.push("/creator/events/new/")}
            >
              Create An Event
            </Button>
          </Box>
          {/* after login */}
          {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu> */}
          {/* </Box> */}
        </Toolbar>
        <Drawer
          sx={{
            "& .MuiDrawer-paper": {
              width: { sm: "50%", xs: "100%" }, // Ensure the drawer paper width is also responsive
            },
          }}
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{
              p: 2,
              height: 1,
              background: theme.palette.customColors.primaryDark2,
              width: "100%",
            }}
          >
            <IconButton sx={{ mb: 2 }}>
              <CloseIcon
                onClick={toggleDrawer(false)}
                sx={{ color: theme.palette.customColors.primaryWhite }}
              />
            </IconButton>

            <Divider sx={{ mb: 2 }} />

            <Box sx={{ mb: 2 }}>
              {attendeePages.map((page) => {
                return (
                  <ListItemButton
                    key={page.name}
                    onClick={() => router.push(page.link)}
                  >
                    <ListItemText primary={page.name} />
                  </ListItemButton>
                );
              })}
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: { xs: "column", sm: "row" },
                gap: 1,
              }}
            >
              <Button
                variant="contained"
                sx={{ m: 1, width: 1, borderRadius: 30 }}
              >
                Register
              </Button>
              <Button
                variant="outlined"
                sx={{ m: 1, width: 1, borderRadius: 30 }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Drawer>
      </Container>
    </AppBar>
  );
}
export default AttendeeHeader;
