import { Box, TextField, useTheme } from "@mui/material";
import React from "react";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";

interface FormData {
  eventName: string;
  startTime: string;
  endTime: string;
  venueName: string;
  eventAddress: string;
  email: string;
  phone: string;
}

interface EventFormProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (name: string, value: any) => void;
  errors: { [key: string]: string };
}

const EventForm = ({
  formData,
  handleChange,
  handleDateChange,
  errors,
}: EventFormProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: { md: "100%", xs: "100%" } }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          autoComplete="off"
          id="outlined-basic"
          name="eventName"
          label="Event Name"
          value={formData.eventName}
          onChange={handleChange}
          variant="outlined"
          placeholder="My Event"
          size="small"
          sx={{
            background: `${hexToRGBA(
              theme.palette.customColors.primaryDark1,
              0.2
            )}`,
            boxShadow: `0 8px 32px 0 ${hexToRGBA(
              theme.palette.customColors.orange,
              0.12
            )}`,
            backdropFilter: "blur( 4px )",
            width: "100%",
            "& .MuiOutlinedInput-root": {
              color: theme.palette.customColors.primaryWhite,
              fontFamily: "Arial",
              fontWeight: "noraml",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.customColors.primaryWhite,
                borderWidth: "1px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: theme.palette.customColors.primaryWhite,
              fontWeight: "normal",
            },
          }}
        />
        {errors.eventName && <p style={{ color: "red" }}>{errors.eventName}</p>}

        {/* Date/Time pickers */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            padding: "15px 0px",
          }}
        >
          {/* Start Time */}
          <Box sx={{ width: "49%" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem label="Start Time">
                <MobileDateTimePicker
                  sx={{
                    "& .MuiInputBase-root": {
                      width: "100%",
                      color: theme.palette.customColors.primaryWhite,
                      background: `${hexToRGBA(
                        theme.palette.customColors.primaryDark1,
                        0.2
                      )}`,
                      boxShadow: `0 8px 32px 0 ${hexToRGBA(
                        theme.palette.customColors.orange,
                        0.22
                      )}`,
                      borderRadius: "5px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.customColors.primaryWhite,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.customColors.primaryWhite,
                    },
                  }}
                  name="startTime"
                  value={dayjs(formData.startTime)}
                  onChange={(newValue) =>
                    handleDateChange("startTime", newValue)
                  }
                />
              </DemoItem>
            </LocalizationProvider>
            {errors.startTime && (
              <p style={{ color: "red" }}>{errors.startTime}</p>
            )}
          </Box>

          {/* End Time */}
          <Box sx={{ width: "49%" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem label="End Time">
                <MobileDateTimePicker
                  sx={{
                    "& .MuiInputBase-root": {
                      width: "100%",
                      color: theme.palette.customColors.primaryWhite,
                      background: `${hexToRGBA(
                        theme.palette.customColors.primaryDark1,
                        0.2
                      )}`,
                      boxShadow: `0 8px 32px 0 ${hexToRGBA(
                        theme.palette.customColors.orange,
                        0.22
                      )}`,
                      borderRadius: "5px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.customColors.primaryWhite,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.customColors.primaryWhite,
                    },
                  }}
                  value={dayjs(formData.endTime)}
                  name="endTime"
                  onChange={(newValue) => handleDateChange("endTime", newValue)}
                />
              </DemoItem>
            </LocalizationProvider>
            {errors.endTime && <p style={{ color: "red" }}>{errors.endTime}</p>}
          </Box>
        </Box>

        <TextField
          autoComplete="off"
          id="outlined-basic"
          name="venueName"
          label="Venue Name"
          value={formData.venueName}
          onChange={handleChange}
          variant="outlined"
          placeholder="Venue Name"
          size="small"
          sx={{
            background: `${hexToRGBA(
              theme.palette.customColors.primaryDark1,
              0.2
            )}`,
            boxShadow: `0 8px 32px 0 ${hexToRGBA(
              theme.palette.customColors.orange,
              0.12
            )}`,
            backdropFilter: "blur( 4px )",
            width: "100%",
            "& .MuiOutlinedInput-root": {
              color: theme.palette.customColors.primaryWhite,
              fontFamily: "Arial",
              fontWeight: "noraml",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.customColors.primaryWhite,
                borderWidth: "1px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: theme.palette.customColors.primaryWhite,
              fontWeight: "normal",
            },
          }}
        />
        {errors.venueName && <p style={{ color: "red" }}>{errors.venueName}</p>}

        <TextField
          autoComplete="off"
          id="outlined-basic"
          name="eventAddress"
          label="Event Address"
          value={formData.eventAddress}
          onChange={handleChange}
          variant="outlined"
          placeholder="Event Address"
          size="small"
          sx={{
            background: `${hexToRGBA(
              theme.palette.customColors.primaryDark1,
              0.2
            )}`,
            boxShadow: `0 8px 32px 0 ${hexToRGBA(
              theme.palette.customColors.orange,
              0.12
            )}`,
            backdropFilter: "blur( 4px )",
            width: "100%",
            "& .MuiOutlinedInput-root": {
              color: theme.palette.customColors.primaryWhite,
              fontFamily: "Arial",
              fontWeight: "noraml",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.customColors.primaryWhite,
                borderWidth: "1px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: theme.palette.customColors.primaryWhite,
              fontWeight: "normal",
            },
          }}
        />
        {errors.eventAddress && (
          <p style={{ color: "red" }}>{errors.eventAddress}</p>
        )}

        <TextField
          autoComplete="off"
          id="outlined-basic"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          placeholder="Email"
          size="small"
          sx={{
            background: `${hexToRGBA(
              theme.palette.customColors.primaryDark1,
              0.2
            )}`,
            boxShadow: `0 8px 32px 0 ${hexToRGBA(
              theme.palette.customColors.orange,
              0.12
            )}`,
            backdropFilter: "blur( 4px )",
            width: "100%",
            "& .MuiOutlinedInput-root": {
              color: theme.palette.customColors.primaryWhite,
              fontFamily: "Arial",
              fontWeight: "noraml",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.customColors.primaryWhite,
                borderWidth: "1px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: theme.palette.customColors.primaryWhite,
              fontWeight: "normal",
            },
          }}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </Box>
    </Box>
  );
};

export default EventForm;
