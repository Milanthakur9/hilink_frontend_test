"use client";
import React from "react";
import { Box, Typography, useTheme, FormControlLabel } from "@mui/material";
import SettingHeader from "../SettingHeader";
import { useRouter } from "next/navigation";
import { styled } from "@mui/material/styles";
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

const vaccination = [
  {
    name: "Vaccination Required",
  },
  {
    name: "Mask Required For Entry",
  },
  {
    name: "Negative COVID-19 Test Required",
  },
  {
    name: "Temperature Checked On Arrival",
  },
];

function Page() {
  const theme = useTheme();
  const router = useRouter();
  const white = theme.palette?.customColors.primaryWhite;

  return (
    <div>
      <Box sx={{ width: { md: "80%", xs: "95%" }, margin: "0 auto" }}>
        <SettingHeader />
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
        {vaccination.map((item) => {
          return (
            <Box
              key={item.name}
              sx={{
                margin: "20px 0px",
                display: "flex",
                alignItems: "center",
                width: { md: "60%", xs: "100%" },
              }}
            >
              <Typography sx={{ marginRight: "3%" }}>{item.name}</Typography>
              <Box>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label=""
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </div>
  );
}

export default Page;
