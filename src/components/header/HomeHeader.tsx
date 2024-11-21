"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import LogoWithLink from "../logo/LogoWithLink";
import { useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";

const homePages = [
  {
    name: "Explore Events",
    link: "/attendee/home",
  },
  {
    name: "Login",
    link: "/login",
  },
  {
    name: "Admin Dashboard",
    link: "/creator/events/dashboard/",
  },
];

function HomeHeader() {
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
        borderBottom: `1px solid ${hexToRGBA(
          theme.palette.customColors.primaryWhite,
          0.3
        )}`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: {
                flexGrow: 1,
              },
            }}
          >
            <LogoWithLink logoColor="white" />
          </Box>
          {/* monitor screen */}
          <Box
            sx={{
              display: { xs: "none", md: "flex", alignItems: "center" },
              gap: 5,
            }}
          >
            {homePages.map((page) => (
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
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Button
                variant="outlined"
                sx={{ borderRadius: 10, py: 1.5 }}
                onClick={() => router.push("/eventType")}
                endIcon={<ArrowRightAltIcon />}
              >
                Launch an event
              </Button>
            </Box>
          </Box>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              display: {
                sm: "flex",
                md: "none",
                color: theme.palette.customColors.primaryWhite,
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* The outside of the drawer */}
        </Toolbar>
        <Drawer
          sx={{
            "& .MuiDrawer-paper": {
              width: { sm: "100%" }, // Ensure the drawer paper width is also responsive
            },
          }}
          anchor="top"
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
              {homePages.map((page) => {
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
                variant="outlined"
                sx={{ m: 1, width: 1, borderRadius: 30 }}
                onClick={() => router.push("/eventType")}
                endIcon={<ArrowRightAltIcon />}
              >
                Launch an event
              </Button>
            </Box>
          </Box>
        </Drawer>
      </Container>
    </AppBar>
  );
}
export default HomeHeader;
