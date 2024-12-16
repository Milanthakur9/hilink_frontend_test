"use client";
import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  TextField,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { useRouter } from "next/navigation";
import SettingHeader from "../SettingHeader";
import Switch, { SwitchProps } from "@mui/material/Switch";

// switch  start
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#ff914d",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.customColors.primaryDark1,
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: theme.palette.customColors.primaryDark2,
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.customColors.orange,
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.customColors.primaryDark2,
    }),
  },
}));
// switch  end

function Page() {
  const theme = useTheme();
  const router = useRouter();
  const orange = theme.palette.customColors.orange;
  const white = theme.palette?.customColors.primaryWhite;

  return (
    <div>
      <Box
        sx={{
          width: { md: "80%", xs: "95%" },
          margin: "0 auto",
          padding: "2% 0",
        }}
      >
        {/* setting header start  */}
        <SettingHeader />
        {/* setting header end  */}
        <Typography
          onClick={() => router.back()}
          sx={{
            textDecoration: `underline solid ${white}`,
            margin: "20px 0px",
            "&:hover": { cursor: "pointer" },
          }}
        >
          ← Back to Settings
        </Typography>
        {/* Confirmation Message start  */}
        <Box>
          <Typography>Confirmation Message</Typography>
          <Box sx={{ width: { md: "60%", xs: "100%" } }}>
            <TextField
              autoComplete="off"
              id="outlined-basic"
              // label="My Event"
              placeholder="Your Order Has Been Submitted"
              variant="outlined"
              size="small"
              sx={{
                // background: "rgba( 255, 145, 77, 0.25 )",
                // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                //   border:` 1px solid ${theme.palette.customColors.primaryWhite}`,
                backdropFilter: "blur( 4px )",
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  color: orange,
                  fontFamily: "Arial",
                  fontWeight: "noraml",
                  // Class for the border around the input field
                  "& .MuiOutlinedInput-notchedOutline": {
                    background: ` ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.2
                    )}`,
                    boxShadow: ` 0 8px 32px 0 ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.12
                    )}`,
                    borderColor: orange,
                    borderWidth: "1px",
                    borderRadius: "25px",
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
        {/* Confirmation Message end  */}
        <Box
          sx={{
            margin: "20px 0px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: { md: "60%", xs: "100%" },
          }}
        >
          <Typography>Include Fees in Event Page Pricing</Typography>
          <Box>
            <FormControlLabel
              label=""
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              // label="iOS style"
            />
          </Box>
        </Box>
        <Box
          sx={{
            margin: "20px 0px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: { md: "60%", xs: "100%" },
          }}
        >
          <Typography>Long Form Add To Cart Button</Typography>
          <Box>
            <FormControlLabel
              label=""
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              // label="iOS style"
            />
          </Box>
        </Box>
        {/* Checkout Submit Button start  */}
        <Box>
          <Typography>Checkout Submit Button</Typography>
          <Box sx={{ width: { md: "60%", xs: "100%" } }}>
            <TextField
              autoComplete="off"
              id="outlined-basic"
              // label="My Event"
              placeholder="Purchase & Signup"
              variant="outlined"
              size="small"
              sx={{
                // background: "rgba( 255, 145, 77, 0.25 )",
                // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                //   border:` 1px solid ${theme.palette.customColors.primaryWhite}`,
                backdropFilter: "blur( 4px )",
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  color: orange,
                  fontFamily: "Arial",
                  fontWeight: "noraml",
                  // Class for the border around the input field
                  "& .MuiOutlinedInput-notchedOutline": {
                    background: ` ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.2
                    )}`,
                    boxShadow: ` 0 8px 32px 0 ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.12
                    )}`,
                    borderColor: orange,
                    borderWidth: "1px",
                    borderRadius: "25px",
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
        {/* Checkout Submit Button end  */}
        <Box sx={{ margin: "20px 0px" }}>
          <Typography> Custom Fees </Typography>
          <Button
            sx={{
              background: orange,
              color:white,
              transition: "all .1s linear",
              width: { md: "60%", xs: "100%" },
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            Add Custom Fee
          </Button>
        </Box>
        <Box
          sx={{
            margin: "20px 0px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: { md: "60%", xs: "100%" },
          }}
        >
          <Typography>Legacy RSVP Flow</Typography>
          <Box>
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              label=""
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Page;
