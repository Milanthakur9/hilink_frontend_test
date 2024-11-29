"use client";
import React from "react";
import { Box, Typography, Button, useTheme, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import UncontrolledRte from "@/components/richTextEditor/UncontrolledRte";

function Page() {
  const theme = useTheme();
  const router = useRouter();
  const orange = theme.palette.customColors.orange;
  return (
    <div>
      <Box
        sx={{
          width: { md: "80%", xs: "95%" },
          margin: "0 auto",
          padding: "3% 0",
        }}
      >
        <Typography sx={{ fontSize: "30px" }}>tj — Tickets</Typography>
        <ArrowCircleLeftIcon
          onClick={() => router.back()}
          sx={{
            color: orange,
            fontSize: "55px",
            margin: "2% 0",
            "&:hover": { cursor: "pointer" },
          }}
        />
        <Box sx={{ width: { md: "60%", xs: "100%" } }}>
          {/* Ticket name  */}
          <Box>
            <Typography sx={{ fontSize: "18px" }}>
              Ticket name <sup>*</sup>
            </Typography>
            <TextField
              autoComplete="off"
              id="outlined-basic"
              // label="My Event"
              placeholder=""
              variant="outlined"
              size="small"
              sx={{
                // background: "rgba( 255, 145, 77, 0.25 )",
                // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                //   border:` 1px solid ${theme.palette.customColors.primaryWhite}`,
                backdropFilter: "blur( 4px )",
                marginTop: "15px",
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
          {/* Ticket name end */}

          {/* Price  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <Typography sx={{ fontSize: "18px" }}>Price</Typography>
            </Box>
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <TextField
                autoComplete="off"
                id="outlined-basic"
                // label="My Event"
                placeholder="$ Free"
                variant="outlined"
                size="small"
                sx={{
                  // background: "rgba( 255, 145, 77, 0.25 )",
                  // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  //   border:` 1px solid ${theme.palette.customColors.primaryWhite}`,
                  backdropFilter: "blur( 4px )",
                  // marginTop:'15px',
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
          {/* Price end*/}

          {/* Quantity Available  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <Typography sx={{ fontSize: "18px" }}>
                Quantity Available
              </Typography>
            </Box>
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <TextField
                autoComplete="off"
                id="outlined-basic"
                // label="My Event"
                placeholder="Unlimited"
                variant="outlined"
                size="small"
                sx={{
                  // background: "rgba( 255, 145, 77, 0.25 )",
                  // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  //   border:` 1px solid ${theme.palette.customColors.primaryWhite}`,
                  backdropFilter: "blur( 4px )",
                  // marginTop:'15px',
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
          {/* Quantity Available end*/}

          {/* Start sale   */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <Typography sx={{ fontSize: "18px" }}>Start sale</Typography>
            </Box>
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem label="">
                  <MobileDateTimePicker
                    sx={{
                      // Custom styling for the TextField
                      "& .MuiInputBase-root": {
                        width: "100%",
                        color: orange, // Change input text color
                        background: ` ${hexToRGBA(
                          theme.palette.customColors.orange,
                          0.2
                        )}`,
                        boxShadow: ` 0 8px 32px 0 ${hexToRGBA(
                          theme.palette.customColors.orange,
                          0.12
                        )}`,
                        borderRadius: "35px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: orange, // Change border color
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: orange, // Hover effect
                      },
                    }}
                    defaultValue={dayjs("2022-04-17T15:30")}
                  />
                </DemoItem>
              </LocalizationProvider>
            </Box>
          </Box>
          {/* Start sale end*/}

          {/* end sale   */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <Typography sx={{ fontSize: "18px" }}>End sale</Typography>
            </Box>
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem label="">
                  <MobileDateTimePicker
                    sx={{
                      // Custom styling for the TextField
                      "& .MuiInputBase-root": {
                        width: "100%",
                        color: orange, // Change input text color
                        background: ` ${hexToRGBA(
                          theme.palette.customColors.orange,
                          0.2
                        )}`,
                        boxShadow: ` 0 8px 32px 0 ${hexToRGBA(
                          theme.palette.customColors.orange,
                          0.12
                        )}`,
                        borderRadius: "35px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: orange, // Change border color
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: orange, // Hover effect
                      },
                    }}
                    defaultValue={dayjs("2024-11-27T15:30")}
                  />
                </DemoItem>
              </LocalizationProvider>
            </Box>
          </Box>
          {/* end sale end*/}

          {/* Min. Purchase Quantity  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <Typography sx={{ fontSize: "18px" }}>
                Min. Purchase Quantity
              </Typography>
            </Box>
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <TextField
                autoComplete="off"
                id="outlined-basic"
                // label="My Event"
                placeholder="1"
                variant="outlined"
                size="small"
                sx={{
                  // background: "rgba( 255, 145, 77, 0.25 )",
                  // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  //   border:` 1px solid ${theme.palette.customColors.primaryWhite}`,
                  backdropFilter: "blur( 4px )",
                  // marginTop:'15px',
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
          {/* Min. Purchase Quantity end*/}

          {/* Max. Purchase Quantity  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <Typography sx={{ fontSize: "18px" }}>
                Max. Purchase Quantity
              </Typography>
            </Box>
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <TextField
                type="tel"
                autoComplete="off"
                id="outlined-basic"
                // label="My Event"
                placeholder="Unlimited"
                variant="outlined"
                size="small"
                sx={{
                  // background: "rgba( 255, 145, 77, 0.25 )",
                  // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  //   border:` 1px solid ${theme.palette.customColors.primaryWhite}`,
                  backdropFilter: "blur( 4px )",
                  // marginTop:'15px',
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
          {/* Max. Purchase Quantity end*/}

          {/* Valid From   */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <Typography sx={{ fontSize: "18px" }}>Valid From</Typography>
            </Box>
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem label="">
                  <MobileDateTimePicker
                    sx={{
                      // Custom styling for the TextField
                      "& .MuiInputBase-root": {
                        width: "100%",
                        color: orange, // Change input text color
                        background: ` ${hexToRGBA(
                          theme.palette.customColors.orange,
                          0.2
                        )}`,
                        boxShadow: ` 0 8px 32px 0 ${hexToRGBA(
                          theme.palette.customColors.orange,
                          0.12
                        )}`,
                        borderRadius: "35px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: orange, // Change border color
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: orange, // Hover effect
                      },
                    }}
                    defaultValue={dayjs("2024-11-27T15:30")}
                  />
                </DemoItem>
              </LocalizationProvider>
            </Box>
          </Box>
          {/* Valid From end*/}

          {/* Valid To   */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <Typography sx={{ fontSize: "18px" }}>Valid To</Typography>
            </Box>
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem label="">
                  <MobileDateTimePicker
                    sx={{
                      // Custom styling for the TextField
                      "& .MuiInputBase-root": {
                        width: "100%",
                        color: orange, // Change input text color
                        background: ` ${hexToRGBA(
                          theme.palette.customColors.orange,
                          0.2
                        )}`,
                        boxShadow: ` 0 8px 32px 0 ${hexToRGBA(
                          theme.palette.customColors.orange,
                          0.12
                        )}`,
                        borderRadius: "35px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: orange, // Change border color
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: orange, // Hover effect
                      },
                    }}
                    defaultValue={dayjs("2024-11-27T15:30")}
                  />
                </DemoItem>
              </LocalizationProvider>
            </Box>
          </Box>
          {/* Valid To end*/}
          <Box sx={{ marginTop: "2%" }}>
            <UncontrolledRte />
          </Box>
          <Button
            sx={{
              width: "100%",
              background: orange,
              transition: "all .1s linear",
              fontFamily: "arial",
              fontSize: "20px",
              marginTop: "2%",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            Create Ticket Type
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Page;
