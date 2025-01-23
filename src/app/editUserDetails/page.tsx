"use client";
import React from "react";
import CreatorHeader from "../creator/events/dashboard/components/CreatorHeader";
import CreatorFooter from "../creator/events/dashboard/components/CreatorFooter";
import {
  Box,
  Divider,
  styled,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import GeneralSettings from "./components/GeneralSettings";
import FinanceSettings from "./components/FinanceSettings";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useRouter } from "next/navigation";
import TeamRole from "./components/TeamRole";

// phone number field
const PhoneInputStyled = styled(PhoneInput)(({ theme }) => ({
  "& .form-control": {
    width: "100%",
    background: `${hexToRGBA(theme.palette.customColors.primaryDark1, 0.2)}`,
    boxShadow: `0 8px 32px 0 ${hexToRGBA(
      theme.palette.customColors.orange,
      0.12
    )}`,
    color: theme.palette.customColors.orange,
    border: `1px solid ${theme.palette.customColors.orange}`,
  },
  "& .flag-dropdown": {
    // background: 'transparent',
    background: `${hexToRGBA(theme.palette.customColors.primaryDark1, 0.2)}`,
    boxShadow: `0 8px 32px 0 ${hexToRGBA(
      theme.palette.customColors.orange,
      0.12
    )}`,
    color: theme.palette.customColors.orange,
    border: `1px solid ${theme.palette.customColors.orange}`,
    "&:hover": {
      backgroundColor: "transparent !important",
    },
  },
  "& .country-list": {
    background: "black",
  },
  "& .country-list li:hover": {
    color: "black",
  },
  '& .country-list li[aria-selected="true"]': {
    color: "black",
  },
}));

// interface Country {
//   code: string;
//   name: string;
// }

function EditUserDetails() {
  const theme = useTheme();
  var router = useRouter();
  const [phone, setNumberPhone] = React.useState<string>("");
  const handlePhoneNumberChange = (value: any, country: any) => {
    console.log(value, country);
    setNumberPhone(value);
  };
  return (
    <>
      <Box sx={{ width: { md: "85%", xs: "95%" }, margin: "0 auto" }}>
        {/* <CreatorHeader /> */}

        <Box
          sx={{ margin: "2% 0", display: "flex", alignItems: "center", gap: 2 }}
        >
          <ArrowCircleLeftIcon
            onClick={() => router.back()}
            sx={{
              cursor: "pointer",
              fontSize: "55px",
              color: theme.palette.customColors.orange,
            }}
          />
          {/* <Typography variant="h3">Total Sale Events</Typography> */}
        </Box>

        {/* General Settings start  */}

        <Box sx={{ margin: "2% 0 4% 0" }}>
          <GeneralSettings />
        </Box>
        {/* General Settings end  */}

        {/* Finance Settings start  */}
        <Box sx={{ marginBottom: "5%" }}>
          <FinanceSettings />
        </Box>

        {/* Finance Settings end  */}

        <Box sx={{ margin: "2% 0" }}>
          <TeamRole />
        </Box>

        {/* <CreatorFooter /> */}
      </Box>
    </>
  );
}

export default EditUserDetails;
