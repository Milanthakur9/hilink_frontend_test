"use client";
// import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Card, CardContent, Container } from "@mui/material";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import SearchIcon from "@mui/icons-material/Search";
import CustomTextField from "@/@core/components/mui/text-field";
import LinkWithUnderline from "@/@core/components/links/LinkWithUnderline";
import Grid from "@mui/material/Grid2";

const drawerWidth = 240;

const fakeEvents = [
  {
    id: 1,
    time: "7:00PM",
    day: "Fri",
    image: "https://example.com/image1.jpg",
  },
  {
    id: 2,
    time: "11:00PM",
    day: "Sat",
    image: "https://example.com/image2.jpg",
  },
  {
    id: 3,
    time: "10:00PM",
    day: "Sun",
    image: "https://example.com/image3.jpg",
  },
  {
    id: 4,
    time: "9:00PM",
    day: "Mon",
    image: "https://example.com/image4.jpg",
  },
];

interface EventsListType {
  id: number;
  date: Date;
  image: string;
}

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: `${drawerWidth}px`,
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const EventList = () => {
  const [eventList, setEventList] = useState(fakeEvents);
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* search and filter section */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <AppBar
          position="static"
          open={open}
          sx={{
            background: "transparent",
            display: "flex",
            gap: { xs: 2, md: 4 },
            justifyContent: "center",
            alignItems: "center",
            pt: { xs: 2, md: 2 },
            pb: { xs: 8, md: 8 },
            px: { xs: 2, md: 4 },
          }}
        >
          <Toolbar
            sx={{
              width: "100%",
              maxWidth: "650px",
              display: "flex",
              gap: { xs: 2, md: 4 },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="filter"
              onClick={() => setOpen((prev) => !prev)}
              edge="start"
              sx={[
                {
                  backgroundColor: "primary.main",
                  color: theme.palette.customColors.primaryWhite,
                  flexGrow: 0,

                  "&:hover": {
                    backgroundColor: hexToRGBA(
                      theme.palette.customColors.primaryMain || "primary.main",
                      0.8
                    ),
                  },
                  "& svg": {
                    transform: { xs: "scale(1)", md: "scale(1.4)" },
                  },
                },
              ]}
            >
              <FilterAltIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, position: "relative" }}>
              <CustomTextField
                fullWidth
                placeholder="Events near you"
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: theme.palette.customColors.primaryDark2,
                    p: { xs: 1, md: 1.2 },
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-30px",
                  px: 3,
                  zIndex: "20",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  flexWrap: "wrap",
                  gap: { xs: 2, md: 4 },
                  "&>a": {
                    fontSize: "12px",
                  },
                }}
              >
                <LinkWithUnderline linkTitle="Trending Events" link="/" />
                <LinkWithUnderline linkTitle="Concerts" link="/" />
                <LinkWithUnderline linkTitle="Pop-Ups" link="/" />
              </Box>
            </Box>
            <IconButton
              color="inherit"
              aria-label="filter"
              edge="end"
              sx={[
                {
                  backgroundColor: "transparent",
                  color: theme.palette.customColors.primaryWhite,
                  flexGrow: 0,

                  "& svg": {
                    transform: { xs: "scale(1)", md: "scale(1.3)" },
                  },
                },
              ]}
            >
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* drawer  */}

        {/* <Drawer
          sx={{
            width: drawerWidth,
            height: "30px",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer> */}

        <Main open={open} sx={{ mt: { xs: 3, md: 5 } }}>
          {/* // make a new component for this */}
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 6, md: 10 }}>
              {eventList.map((event) => {
                return (
                  <Grid
                    key={event.id}
                    size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                    sx={{ position: "relative" }}
                  >
                    <Card
                      sx={{
                        backgroundColor: "primary.main",
                        borderRadius: "40px",
                        minHeight: "280px",
                      }}
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
                              background:
                                theme.palette.customColors.primaryWhite,
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
                        {/* <Box sx={{ height: '100px', width: '100%', background: 'url(https://example.com/background.jpg) no-repeat center center' }} /> */}
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Main>
      </Box>
    </>
  );
};

export default EventList;
