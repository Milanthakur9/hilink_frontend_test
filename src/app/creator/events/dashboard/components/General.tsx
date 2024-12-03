import { Box, styled, TextField, Typography,useTheme } from "@mui/material";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ExtensionIcon from "@mui/icons-material/Extension";
import SensorsIcon from "@mui/icons-material/Sensors";
import Integrations from "./Integration";
import Webhooks from "./Webhook";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// phone number field 
const PhoneInputStyled = styled(PhoneInput)(({ theme }) => ({
  '& .form-control': {
    width:'100%',
    background: `${hexToRGBA(theme.palette.customColors.primaryDark1,0.2)}`,
    boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
    color: theme.palette.customColors.orange,
    border:`1px solid ${theme.palette.customColors.orange}`,
  },
  '& .flag-dropdown': {
    // background: 'transparent',
    background: `${hexToRGBA(theme.palette.customColors.primaryDark1,0.2)}`,
    boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
    color: theme.palette.customColors.orange,
    border:`1px solid ${theme.palette.customColors.orange}`,
    '&:hover': {
      backgroundColor: 'transparent !important'
    }
  },
  '& .country-list': {
    background: 'black'
  },
  '& .country-list li:hover': {
    color: 'black'
  },
  '& .country-list li[aria-selected="true"]': {
    color: 'black'
  }
}))

// interface Country {
// code: string;
// name: string;
// }

// import { useRouter } from 'next/navigation';
function General() {
  const theme = useTheme()
  // const router = useRouter()
  const orange = theme.palette.customColors.orange;
  // const white = theme.palette.customColors.primaryWhite;
  // const dark1 = theme.palette.customColors.primaryDark1;
  // const dark2 = theme.palette.customColors.primaryDark2;

  const [phone, setNumberPhone] = React.useState<string>('')
  const handlePhoneNumberChange = (value: any, country: any) => {
    console.log(value, country)
    setNumberPhone(value)
  }

  const [selectedSettingOption, setSelectedSettingOption] = useState("General");

  return (
    <Box sx={{ background: "#151618" }}>
      <Box sx={{ width: "80%", margin: "0 auto" }}>
        <Box sx={{ padding: "3% 0%" }}>
          <Typography
            sx={{ color: "#fff", fontWeight: "Bold", fontSize: "9vh" }}
            variant="h1"
            align="left"
          >
            Settings
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          background: "#ff914d",
          height: "0.2vh",
          opacity: "0.4",
          margin: "0   20px",
        }}
      />
      <Box sx={{ width: { md: "80%", xs: "95%" }, margin: "0 auto" }}>
        <Box
          sx={{
            padding: "3% 0%",
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              width: { md: "26%", xs: "100%" },
              border: "1px solid #ff914d",
              padding: "20px",
              borderRadius: "20px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <Box>
              <Typography
                sx={{ color: "#fff", fontWeight: "Bold" }}
                variant="h6"
                align="left"
              >
                Organization
              </Typography>
              {/* icon with txt start  */}
              <Box
                onClick={() => setSelectedSettingOption("General")}
                sx={{
                  display: "flex",
                  marginTop: "10px",
                  alignItems: "center",
                  padding: "5px 0px",
                  transition: "all .4s linear",
                  "&:hover": {
                    cursor: "pointer",
                    background: "#202524",
                    border: "1px solid #ff914d",
                    borderRadius: "4px",
                    paddingLeft: "10px",
                  },
                }}
              >
                <Box>
                  <ApartmentIcon sx={{ color: "#ff914d" }} />
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff", marginLeft: "8px" }}>
                    General
                  </Typography>
                </Box>
              </Box>
              <Box
                onClick={() => setSelectedSettingOption("Integration")}
                sx={{
                  display: "flex",
                  marginTop: "10px",
                  alignItems: "center",
                  padding: "5px 0px",
                  transition: "all .4s linear",
                  "&:hover": {
                    cursor: "pointer",
                    background: "#202524",
                    border: "1px solid #ff914d",
                    borderRadius: "4px",
                    paddingLeft: "10px",
                  },
                }}
              >
                <Box>
                  <ExtensionIcon sx={{ color: "#ff914d" }} />
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff", marginLeft: "8px" }}>
                    Integrations
                  </Typography>
                </Box>
              </Box>
              {/* icon with txt end  */}
            </Box>
            <Box sx={{ marginTop: "20%" }}>
              <Typography
                sx={{ color: "#fff", fontWeight: "Bold" }}
                variant="h6"
                align="left"
              >
                API
              </Typography>
              <Box
                onClick={() => setSelectedSettingOption("Webhooks")}
                sx={{
                  display: "flex",
                  marginTop: "10px",
                  alignItems: "center",
                  padding: "5px 0px",
                  transition: "all .4s linear",
                  "&:hover": {
                    cursor: "pointer",
                    background: "#202524",
                    border: "1px solid #ff914d",
                    borderRadius: "4px",
                    paddingLeft: "10px",
                  },
                }}
              >
                <Box>
                  <SensorsIcon sx={{ color: "#ff914d" }} />
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff", marginLeft: "8px" }}>
                    Webhooks
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: { md: "70%", xs: "100%" },
              marginTop: { md: "0", xs: "5%" },
              border: "1px solid #ff914d",
              padding: "20px",
              borderRadius: "20px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            {selectedSettingOption === "General" ? (
              <Box>
                <Typography
                  sx={{ color: "#fff", fontWeight: "Bold" }}
                  variant="h6"
                  align="left"
                >
                  General
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontWeight: "normal", margin: "2% 0%" }}
                  align="left"
                >
                  Configure general settings for your organization.
                </Typography>
                <Box
                  sx={{
                    margin: "3% 0",
                    width: "70%",
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{ width: { md: "50%", xs: "100%" }, margin: "2% 0%" }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "normal",
                        margin: "2% 0%",
                      }}
                      align="left"
                    >
                      Organization Type
                    </Typography>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <TextField
                      autoComplete="off"
                      id="outlined-basic"
                      // label="venue Name"
                      placeholder="Personal"
                      size="small"
                      variant="outlined"
                      sx={{
                        
                        backdropFilter: "blur( 4px )",
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          background: `${hexToRGBA(theme.palette.customColors.primaryDark1,0.2)}`,
                          boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
                          border: `1px solid ${theme.palette.customColors.orange}`,
                          color: orange,
                          fontFamily: "Arial",
                          fontWeight: "noraml",
                          // Class for the border around the input field
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "",
                            borderWidth: "1px",
                          },
                        },
                        // Class for the label of the input field
                        "& .MuiInputLabel-outlined": {
                          color: "",
                          fontWeight: "normal",
                        },
                      }}
                    />
                  </Box>
                </Box>
                <Divider
                  sx={{
                    background: "#ff914d",
                    height: "0.2vh",
                    opacity: "0.3",
                  }}
                />
                <Typography
                  sx={{ color: "#fff", fontWeight: "normal", margin: "2% 0%" }}
                  align="left"
                >
                  Your contact information will be displayed to attendees.
                </Typography>
                <Box
                  sx={{
                    width: "70%",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: { md: "row", xs: "column" },
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{ width: { md: "50%", xs: "100%" }, margin: "2% 0%" }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "normal",
                        margin: "2% 0%",
                      }}
                      align="left"
                    >
                      Contact Email
                    </Typography>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <TextField
                      autoComplete="off"
                      id="outlined-basic"
                      // label="venue Name"
                      placeholder="Email"
                      size="small"
                      variant="outlined"
                      sx={{
                        backdropFilter: "blur( 4px )",
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          background: `${hexToRGBA(theme.palette.customColors.primaryDark1,0.2)}`,
                          boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
                          border: `1px solid ${theme.palette.customColors.orange}`,
                          color: orange,
                          fontFamily: "Arial",
                          fontWeight: "noraml",
                          // Class for the border around the input field
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "",
                            borderWidth: "1px",
                          },
                        },
                        // Class for the label of the input field
                        "& .MuiInputLabel-outlined": {
                          color: "",
                          fontWeight: "normal",
                        },
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "70%",
                    marginTop: "4%",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: { md: "row", xs: "column" },
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{ width: { md: "50%", xs: "100%" }, margin: "2% 0%" }}
                  >
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
                  <PhoneInputStyled sx={{width:'100%'}}
                      country={'us'}
                      value={phone}
                      // onChange={phone => setPhone(phone)}
                      onChange={handlePhoneNumberChange}
                      countryCodeEditable={false}
                      disableCountryCode={false}
                    />
                  </Box>
                </Box>
              </Box>
            ) : selectedSettingOption == "Integration" ? (
              <Integrations />
            ) : (
              <Webhooks />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default General;
