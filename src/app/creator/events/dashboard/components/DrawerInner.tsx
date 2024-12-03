// import React from 'react'
"use client";
import * as React from "react";
import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Svlogo from "../../../../../assets/branding/HL_Clean_Transparent.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
const options = ["Events By Test", "New Organization"];

const navihgation = [
  {
    name: "Organization Dashboard",
    link: "/owner/groups/overview",
  },
  {
    name: "My Orders",
    link: "/",
  },
  {
    name: "My Acoounts",
    link: "/profile",
  },
];

function DrawerInner() {
  const router = useRouter();
  const theme = useTheme();
  const orange = theme.palette.customColors.orange;
  const white = theme.palette.customColors.primaryWhite;
  const dark2 = theme.palette.customColors.primaryDark2;

  const [Split, setSplit] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setSplit(false);
  };

  const handleToggle = () => {
    setSplit((prevSplit) => !prevSplit);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setSplit(false);
  };
  // split btn
  return (
    <div>
      <Box
        sx={{
          paddingTop:'15%',
          display: "flex",
          height: "95vh",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {/* events by test  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <ButtonGroup
                variant="contained"
                ref={anchorRef}
                aria-label="Button group with a nested menu"
                sx={{ border: `1px solid ${orange}`, background: dark2 }}
              >
                <Button
                  sx={{ background: dark2, color: orange, borderRadius: "5px" }}
                  onClick={handleClick}
                >
                  {options[selectedIndex]}
                </Button>
                <Button
                  sx={{ background: dark2, border: "none" }}
                  size="small"
                  aria-controls={Split ? "split-button-menu" : undefined}
                  aria-expanded={Split ? "true" : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
                >
                  <ArrowDropDownIcon sx={{ color: orange }} />
                </Button>
              </ButtonGroup>
              <Popper
                sx={{ zIndex: 1 }}
                open={Split}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu" autoFocusItem>
                          {options.map((option, index) => (
                            <MenuItem
                              key={option}
                              disabled={index === 2}
                              selected={index === selectedIndex}
                              onClick={(event) =>
                                handleMenuItemClick(event, index)
                              }
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Box>
            <Box>
              <AccountCircleIcon
                sx={{ color: orange, fontSize: "30px", marginLeft: "20px" }}
              />
            </Box>
          </Box>
          {/* events by test  */}
          <Box sx={{ marginTop: "10%" }}>
            <Button
            onClick={()=>router.push(`/creator/events/new/`)}
              sx={{
                width: { md: "100%", xs: "100%" },
                background: orange,
                borderRadius: "5px",
                color: white,
                padding: "5px 20px",
                fontSize: "2.5vh",
                transition: "all .1s linear",
                "&:hover": { transform: "scale(1.051)" },
              }}
            >
              + Create New Events
            </Button>
          </Box>
        </Box>
        <Box>
          {navihgation.map((item) => {
            return (
              <Typography
                key={item.name}
                onClick={() => router.push(`${item.link}`)}
                className="animate"
                variant="h2"
                sx={{
                  cursor: "pointer",
                  transition: "all 1s linear",
                  fontSize: "18px",
                  marginTop: "6%",
                  position: "relative",
                  width: "fit-content",
                  overflow:'hidden',
                  "&:before": {
                    position: "absolute",
                    width: "100%",
                    height: "1px",
                    background: orange,
                    left: "-120%",
                    top: "0",
                    content: '""',
                    transition: "all .5s linear",
                  },
                  "&:hover": {
                    "&:before": {
                      left: "0%",
                    },
                  },
                }}
              >
                {item.name}
              </Typography>
            );
          })}

          <Typography
            sx={{ cursor: "pointer", fontSize: "20px", marginTop: "4%" }}
          >
            Logout
          </Typography>
        </Box>
        {/* svg logo */}
        <Box>
          <Image src={Svlogo} height="40" alt="hilink logo" />
        </Box>
        {/* svg logo */}
      </Box>
    </div>
  );
}

export default DrawerInner;
