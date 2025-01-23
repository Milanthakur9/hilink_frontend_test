import React from "react";
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

function GeneralSettings() {
  const theme = useTheme();
  const [phone, setNumberPhone] = React.useState<string>("");
  const handlePhoneNumberChange = (value: any, country: any) => {
    console.log(value, country);
    setNumberPhone(value);
  };
  return (
    <>
      {/* General Settings start  */}
      <Box>
        <Box>
          <Typography variant="h3">General Settings</Typography>
          <Divider
            sx={{
              background: `linear-gradient(to right ,${theme.palette.customColors.orange},${theme.palette.customColors.primaryDark1})`,
              margin: "1% 0",
              height: "1.5px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { md: "row", xs: "column" },
            alignItems: "center",
            marginTop: "3%",
          }}
        >
          <Box sx={{ width: { md: "32%", xs: "100%" } }}>
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  margin: "2% 0",
                }}
              >
                Email
              </Typography>
              <Box>
                <TextField
                  id="outlined-basic"
                  label=""
                  placeholder="gills1enterprises@gmail.com"
                  variant="outlined"
                  size="small"
                  sx={{
                    boxShadow: `0 8px 32px 0 ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.12
                    )}`,
                    backdropFilter: "blur( 4px )",
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      background: `${hexToRGBA(
                        theme.palette.customColors.orange,
                        0.1
                      )}`,
                      color: theme.palette.customColors.orange,
                      borderRadius: "30px",
                      fontFamily: "Arial",
                      fontWeight: "noraml",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.customColors.orange,
                        borderWidth: "1px",
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: theme.palette.customColors.orange,
                      fontWeight: "normal",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: { md: "32%", xs: "100%" } }}>
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  margin: "2% 0",
                }}
              >
                Organization Type
              </Typography>
              <Box>
                <TextField
                  id="outlined-basic"
                  label=""
                  placeholder="Organization Type"
                  variant="outlined"
                  size="small"
                  sx={{
                    boxShadow: `0 8px 32px 0 ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.12
                    )}`,
                    backdropFilter: "blur( 4px )",
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      background: `${hexToRGBA(
                        theme.palette.customColors.orange,
                        0.1
                      )}`,
                      color: theme.palette.customColors.orange,
                      borderRadius: "30px",
                      fontFamily: "Arial",
                      fontWeight: "noraml",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.customColors.orange,
                        borderWidth: "1px",
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: theme.palette.customColors.orange,
                      fontWeight: "normal",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: { md: "32%", xs: "100%" } }}>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "normal",
                  margin: "2% 0%",
                }}
                align="left"
              >
                Contact Phone
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <PhoneInputStyled
                sx={{ width: "100%" }}
                country={"us"}
                value={phone}
                // onChange={phone => setPhone(phone)}
                onChange={handlePhoneNumberChange}
                countryCodeEditable={false}
                disableCountryCode={false}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* General Settings end  */}
    </>
  );
}

export default GeneralSettings;
