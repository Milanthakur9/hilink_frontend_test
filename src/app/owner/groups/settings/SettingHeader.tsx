"use client";
import React from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  useTheme,
  FormControl,
  TextField,
} from "@mui/material";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// modal
import Modal from "@mui/material/Modal";
// icon
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
// select
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "50%", xs: "100%" },
  bgcolor: "#151618",
  border: "none",
  outline: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const ButtonData = [
  {
    name: "Export Event Report",
    icons: <NoteAddIcon />,
    link: "/",
    modalName: "report",
  },
  {
    name: "Request Full Event Refund",
    icons: <CurrencyExchangeIcon />,
    link: "/",
    modalName: "refund",
  },
];

const checkBoxData = [
  {
    name: "Email",
  },
  {
    name: "First Name",
  },
  {
    name: "Last Name",
  },
  {
    name: "Order Date/Time",
  },
  {
    name: "Order Status",
  },
  {
    name: "Order Number",
  },
  {
    name: "# of Tickets",
  },
  {
    name: "Tickets Purchased",
  },
  {
    name: "Tickets Scanned",
  },
  {
    name: "Order Subtotal",
  },
  {
    name: "Discount Amount",
  },
  {
    name: "Refund Amount",
  },
  {
    name: "Order Total",
  },
  {
    name: "Hilink Fee",
  },
  {
    name: "Custom Fees",
  },
  {
    name: "Detected Gender",
  },
  {
    name: "Instagram",
  },
  {
    name: "LinkedIn",
  },
  {
    name: "Twitter",
  },
  {
    name: "Phone Number",
  },
  {
    name: "Billing Address Line 1",
  },
  {
    name: "Billing Address Line 2",
  },
  {
    name: "Billing Address City",
  },
  {
    name: "Billing Address State",
  },
  {
    name: "Billing Address Zip",
  },
  {
    name: "Billing Address Country",
  },
  {
    name: "Promo Code",
  },
  {
    name: "Tracking Link",
  },
  {
    name: "Custom Checkout Field",
  },
];

function SettingHeader() {
  const [refund, setRefund] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setRefund(event.target.value as string);
  };

  const [openReport, setOpenReport] = React.useState(false);
  const [openRefund, setOpenRefund] = React.useState(false);
  // const handleOpen = () => setOpenReport(true);
  // const handleClose = () => setOpenRefund(false);
  const theme = useTheme();
  const orange = theme.palette.customColors.orange;
  const white = theme.palette?.customColors.primaryWhite;
  return (
    <div>
      <Box>
        <Box sx={{ marginTop: "2%" }}>
          <Box>
            <Typography variant="h3">Settings</Typography>
          </Box>
        </Box>
        <Divider sx={{ marginTop: "2%" }}></Divider>
        {ButtonData.map((item) => {
          return (
            <Button
              key={item.name}
              onClick={
                item.modalName === "report"
                  ? () => setOpenReport(true)
                  : () => setOpenRefund(true)
              }
              startIcon={item.icons}
              sx={{
                background: orange,
                color: `${theme.palette.customColors.primaryWhite}`,

                transition: "all .1s linear",
                margin: "10px 10px 10px 0",
                borderRadius: "5px",
                "&:hover": { cursor: "pointer", transform: "scale(1.05)" },
              }}
            >
              {" "}
              {item.name}{" "}
            </Button>
          );
        })}
        <Divider sx={{ marginTop: "0" }}></Divider>

        {/* modal 1 start */}
        <Modal
          open={openReport}
          onClose={() => setOpenReport(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              sx={{
                fontSize: "35px",
                fontWeight: "bold",
                textAlign: "center",
                margin: "2% 0",
              }}
            >
              Export Event Report
            </Typography>
            <Typography sx={{ fontSize: "16px", textAlign: "center" }}>
              The export is a list of all orders. Select which data fields you
              would like included.
            </Typography>
            <Box sx={{ width: "fit-content", margin: "0 auto" }}>
              <FormGroup sx={{ margin: "10px 0" }}>
                <FormControlLabel
                  control={<Checkbox sx={{ color: orange }} />}
                  label="Select All"
                />
              </FormGroup>
            </Box>
            {/* checkBoxData list start  */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                alignItems: "center",
                width: "80%",
                margin: "2% auto",
                height: "200px",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: theme.palette.customColors.orange, // Customize scrollbar thumb color
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: theme.palette.customColors.primaryDark2, // Customize scrollbar track color
                },
              }}
            >
              {checkBoxData.map((item) => {
                return (
                  <Box key={item.name} sx={{ width: "32%" }}>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox sx={{ color: orange }} />}
                        label={item.name}
                      />
                    </FormGroup>
                  </Box>
                );
              })}
            </Box>

            {/* checkBoxData list start  */}
            <Box
              sx={{
                textAlign: "center",
                width: "fit-content",
                margin: "0 auto",
              }}
            >
              <FormGroup sx={{ margin: "10px 0" }}>
                <FormControlLabel
                  control={<Checkbox sx={{ color: orange }} />}
                  label="Include cancelled orders?"
                />
              </FormGroup>
              <Button
                sx={{
                  background: orange,
                  transition: "all .1s linear",
                  fontWeight: "normal",
                  paddingInline: "20px",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                Export Report
              </Button>
            </Box>
          </Box>
        </Modal>
        {/* modal 1 end */}
        {/* modal 2 start */}

        <Modal
          open={openRefund}
          onClose={() => setOpenRefund(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              sx={{
                fontSize: "35px",
                fontWeight: "bold",
                textAlign: "center",
                margin: "2% 0",
              }}
            >
              Refund Full Event Refund
            </Typography>
            <Typography sx={{ fontSize: "16px", textAlign: "center" }}>
              If you would like to refund EVERY ATTENDEE of your event all at
              once, fill out the brief form below to submit a request.
            </Typography>

            <Box sx={{ minWidth: 120, margin: "2% 0" }}>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                  placeholder="Select a refund reason"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={refund}
                  // label="Age"
                  onChange={handleChange}
                  sx={{
                    // Apply custom styles to the root element
                    background: ` ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.2
                    )}`,
                    boxShadow: ` 0 8px 32px 0 ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.12
                    )}`,
                    borderRadius: 20,
                    "&:hover": {
                      backgroundColor: ` ${hexToRGBA(
                        theme.palette.customColors.primaryDark1,
                        0.2
                      )}`, // Change background on hover
                    },
                    "& .MuiSelect-icon": {
                      color: orange, // Customize the dropdown arrow
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: orange, // Customize the border color
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: orange, // Focused state border color
                    },
                  }}
                >
                  <MenuItem value="Select a refund reason">
                    Select a refund reason
                  </MenuItem>
                  <MenuItem value="Venue Issues">Venue Issues</MenuItem>
                  <MenuItem value="Weather Issues">Weather Issues</MenuItem>
                  <MenuItem value="Artist Cancellaction">
                    Artist Cancellaction
                  </MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box
              sx={{
                height: "250px",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: theme.palette.customColors.orange, // Customize scrollbar thumb color
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: theme.palette.customColors.primaryDark2, // Customize scrollbar track color
                },
              }}
            >
              <TextField
                autoComplete="off"
                id="outlined-basic"
                multiline
                rows={4}
                placeholder="Elaborate on the reason for the Refund"
                variant="outlined"
                size="small"
                sx={{
                  marginTop: "2% 0",
                  //   border:` 1px solid ${theme.palette.customColors.primaryWhite}`,
                  backdropFilter: "blur( 4px )",
                  width: "99%",
                  "& .MuiOutlinedInput-root": {
                    color: orange,
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
              <TextField
                autoComplete="off"
                id="outlined-basic"
                multiline
                rows={4}
                placeholder="Write an update for the attendees"
                variant="outlined"
                size="small"
                sx={{
                  margin: "2% 0",
                  //   border:` 1px solid ${theme.palette.customColors.primaryWhite}`,
                  backdropFilter: "blur( 4px )",
                  width: "99%",
                  "& .MuiOutlinedInput-root": {
                    color: orange,
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
              <TextField
                autoComplete="off"
                id="outlined-basic"
                multiline
                rows={4}
                placeholder="let attendees know where questions and concerns should be directed"
                variant="outlined"
                size="small"
                sx={{
                  marginTop: "2% 0",
                  //   border:` 1px solid ${theme.palette.customColors.primaryWhite}`,
                  backdropFilter: "blur( 4px )",
                  width: "99%",
                  "& .MuiOutlinedInput-root": {
                    color: orange,
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

            <Box sx={{ margin: "3% 0", textAlign: "center" }}>
              <Typography
                sx={{
                  color: white,
                  opacity: 0.5,
                  textAlign: "left",
                  fontSize: "16px",
                }}
              >
                Requests are processed every Friday, and if approved can take
                3-5 business days to be issued. Processing fees are not
                refunded.
              </Typography>
              <Button sx={{ background: orange, margin: "2% 0 0" }}>
                Request Full Event Refund
              </Button>
            </Box>
          </Box>
        </Modal>
        {/* modal 2 end */}
      </Box>
    </div>
  );
}

export default SettingHeader;
