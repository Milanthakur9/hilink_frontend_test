import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ExtensionIcon from "@mui/icons-material/Extension";
import SensorsIcon from "@mui/icons-material/Sensors";

function General() {
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
      <Box sx={{ width: "80%", margin: "0 auto" }}>
        <Box
          sx={{
            padding: "3% 0%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "26%",
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
                sx={{
                  display: "flex",
                  marginTop: "10px",
                  alignItems: "center",
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
                sx={{
                  display: "flex",
                  marginTop: "10px",
                  alignItems: "center",
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
                sx={{
                  display: "flex",
                  marginTop: "10px",
                  alignItems: "center",
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
              width: "70%",
              border: "1px solid #ff914d",
              padding: "20px",
              borderRadius: "20px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
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
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{ color: "#fff", fontWeight: "normal", margin: "2% 0%" }}
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
                    background: "rgba( 32, 37, 36, 0.25 )",
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 4px )",
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      color: "#ff914d",
                      fontFamily: "Arial",
                      fontWeight: "noraml",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ff914d",
                        borderWidth: "1px",
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
            <Divider
              sx={{ background: "#ff914d", height: "0.2vh", opacity: "0.3" }}
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
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{ color: "#fff", fontWeight: "normal", margin: "2% 0%" }}
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
                    background: "rgba( 32, 37, 36, 0.25 )",
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 4px )",
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      color: "#ff914d",
                      fontFamily: "Arial",
                      fontWeight: "noraml",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ff914d",
                        borderWidth: "1px",
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
            <Box
              sx={{
                width: "70%",
                marginTop: "4%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{ color: "#fff", fontWeight: "normal", margin: "2% 0%" }}
                  align="left"
                >
                  Contact Phone
                </Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  // label="venue Name"
                  placeholder="Phone"
                  size="small"
                  variant="outlined"
                  sx={{
                    background: "rgba( 32, 37, 36, 0.25 )",
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 4px )",
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      color: "#ff914d",
                      fontFamily: "Arial",
                      fontWeight: "noraml",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ff914d",
                        borderWidth: "1px",
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default General;
