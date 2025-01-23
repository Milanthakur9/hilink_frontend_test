"use client";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import {
  Box,
  Button,
  Divider,
  FormControl,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
// icon
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "50%", xs: "80%" },
  bgcolor: "#151618",
  // border: '2px solid #000',

  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  borderRadius: "25px",
  p: 4,
};
function FinanceSettings() {
  const theme = useTheme();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [custom, setCustom] = React.useState(false);
  const handleCustomOpen = () => setCustom(true);
  const handleCustomClose = () => setCustom(false);

  return (
    <>
      <Box>
        <Typography variant="h3">Finance Settings</Typography>
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
          alignItems: "center",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        {/* FinanceBtnCard start  */}
        <Box
          sx={{
            width: { md: "32%", xs: "100%" },
            minHeight: "200px",
            border: "1px solid #ff914d",
            borderRadius: "20px",
            padding: "20px",
            marginTop: "3%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}
          >
            BANKS & DEBIT CARDS
          </Typography>

          <Box>
            <Divider sx={{ background: "#ff914d", opacity: 0.4 }} />
            <Button
              onClick={handleOpen}
              sx={{
                width: "100%",
                background: "#ff914d",
                color: "#fff",
                fontSize: "18px",
                padding: "10px",
                borderRadius: "25px",
                marginTop: "15px",
                textTransform: "capitalize",
              }}
            >
              {" "}
              + Add Bank Account
            </Button>

            {/* Popup end  */}
          </Box>
        </Box>
        {/* FinanceBtnCard end  */}

        {/* FinanceBtnCard start  */}
        <Box
          sx={{
            width: { md: "32%", xs: "100%" },
            minHeight: "200px",
            border: "1px solid #ff914d",
            borderRadius: "20px",
            padding: "20px",
            marginTop: "3%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}
          >
            Custom Fees
          </Typography>

          <Box>
            <Divider sx={{ background: "#ff914d", opacity: 0.4 }} />
            <Button
              onClick={handleCustomOpen}
              sx={{
                width: "100%",
                background: "#ff914d",
                color: "#fff",
                fontSize: "18px",
                padding: "10px",
                borderRadius: "25px",
                marginTop: "15px",
                textTransform: "capitalize",
              }}
            >
              {" "}
              Add Custom Fee
            </Button>
          </Box>
        </Box>
        {/* FinanceBtnCard end  */}

        {/* FinanceBtnCard start  */}
        <Box
          sx={{
            width: { md: "32%", xs: "100%" },
            minHeight: "200px",
            border: "1px solid #ff914d",
            borderRadius: "20px",
            padding: "20px",
            marginTop: "3%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}
          >
            DISPUTES
          </Typography>
          <Box>
            <Divider sx={{ background: "#ff914d", opacity: 0.4 }} />
            <Button
              onClick={() => router.push(`/disputes`)}
              sx={{
                width: "100%",
                background: "#ff914d",
                color: "#fff",
                fontSize: "18px",
                padding: "10px",
                borderRadius: "25px",
                marginTop: "15px",
                textTransform: "capitalize",
              }}
            >
              {" "}
              Check Disputes
            </Button>
          </Box>
        </Box>
        {/* FinanceBtnCard end  */}
      </Box>

      <Box>
        {/* modal start  */}
        {/* model 1  */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              sx={{
                fontSize: "5.2vh",
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              {" "}
              Add Bank Account
            </Typography>

            {/* Account Holder name start */}
            <Box sx={{ marginTop: "3%" }}>
              <TextField
                autoComplete="off"
                id="outlined-basic"
                // label="venue Name"
                placeholder="Account Holder Name"
                size="small"
                variant="outlined"
                sx={{
                  // background: "rgba( 32, 37, 36, 0.25 )",
                  // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  background: `${hexToRGBA(
                    theme.palette.customColors.primaryDark1,
                    0.2
                  )}`,
                  boxShadow: `0 8px 32px 0 ${hexToRGBA(
                    theme.palette.customColors.orange,
                    0.12
                  )}`,
                  // border: `1px solid ${theme.palette.customColors.primaryWhite}`,
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
            {/* Account Holder name end  */}

            {/* Routing Number start */}
            <Box sx={{ marginTop: "3%" }}>
              <TextField
                autoComplete="off"
                id="outlined-basic"
                // label="venue Name"
                placeholder="Routing Number"
                size="small"
                variant="outlined"
                sx={{
                  background: `${hexToRGBA(
                    theme.palette.customColors.primaryDark1,
                    0.2
                  )}`,
                  boxShadow: `0 8px 32px 0 ${hexToRGBA(
                    theme.palette.customColors.orange,
                    0.12
                  )}`,
                  // border: `1px solid ${theme.palette.customColors.primaryWhite}`,
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
            {/* Routing Number end  */}

            {/* Account Number start */}
            <Box sx={{ marginTop: "3%" }}>
              <TextField
                autoComplete="off"
                id="outlined-basic"
                // label="venue Name"
                placeholder="Account Number"
                size="small"
                variant="outlined"
                sx={{
                  background: `${hexToRGBA(
                    theme.palette.customColors.primaryDark1,
                    0.2
                  )}`,
                  boxShadow: `0 8px 32px 0 ${hexToRGBA(
                    theme.palette.customColors.orange,
                    0.12
                  )}`,
                  // border: `1px solid ${theme.palette.customColors.primaryWhite}`,
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
            {/* Account Number end  */}

            <Button
              sx={{
                color: "#fff",
                background: "#ff914d",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 4px )",
                border: "1px solid #ff914d",
                textTransform: "none",
                width: "100%",
                mb: 4,
                align: "center",
                marginTop: "3%",
              }}
              variant="contained"
              //   align="center"
              //   mb={4}
            >
              Add Bank Account
            </Button>
            <CloseIcon
              onClick={handleClose}
              sx={{
                color: "#fff",
                position: "absolute",
                right: "3%",
                top: "5%",
                fontSize: "30px",
                "&:hover": { color: "#ff914d", cursor: "pointer" },
              }}
            />
          </Box>
        </Modal>
        {/* modal 1 end  */}

        {/* model 2  */}
        <Modal
          open={custom}
          onClose={handleCustomClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              sx={{
                fontSize: "5.2vh",
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              {" "}
              Add Custom Fees
            </Typography>
            <Typography sx={{ margin: "20px 0", textAlign: "center" }}>
              This fee will be active for all events under this group.
            </Typography>
            {/* Account Holder name start */}
            <Box sx={{ marginTop: "3%" }}>
              <TextField
                autoComplete="off"
                id="outlined-basic"
                // label="venue Name"
                placeholder=" Name of Fee"
                size="small"
                variant="outlined"
                sx={{
                  // background: "rgba( 32, 37, 36, 0.25 )",
                  // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  background: `${hexToRGBA(
                    theme.palette.customColors.primaryDark1,
                    0.2
                  )}`,
                  boxShadow: `0 8px 32px 0 ${hexToRGBA(
                    theme.palette.customColors.orange,
                    0.12
                  )}`,
                  // border: `1px solid ${theme.palette.customColors.primaryWhite}`,
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    color: "#ff914d",
                    fontFamily: "Arial",
                    fontWeight: "noraml",
                    borderRadius: "25px",
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
            {/* Account Holder name end  */}

            <Box
              sx={{
                margin: "3% 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: { md: "row", xs: "column" },
              }}
            >
              <Box sx={{ width: { md: "10%", xs: "100%" } }}>
                <FormControl fullWidth>
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                  <Select
                    sx={{
                      background: `${hexToRGBA(
                        theme.palette.customColors.primaryDark1,
                        0.2
                      )}`,
                      boxShadow: `0 8px 32px 0 ${hexToRGBA(
                        theme.palette.customColors.orange,
                        0.12
                      )}`,
                      border: `1px solid ${theme.palette.customColors.orange}`,
                      borderRadius: "20PX",
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    // label="Age"
                    size="small"
                    // onChange={handleChange}
                  >
                    <MenuItem value="%">%</MenuItem>
                    <MenuItem value="$">$</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ width: { md: "88%", xs: "100%" } }}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  // label="venue Name"
                  placeholder=" Name of Fee"
                  size="small"
                  variant="outlined"
                  sx={{
                    // background: "rgba( 32, 37, 36, 0.25 )",
                    // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",

                    // border: `1px solid ${theme.palette.customColors.primaryWhite}`,
                    backdropFilter: "blur( 4px )",
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      background: `${hexToRGBA(
                        theme.palette.customColors.primaryDark1,
                        0.2
                      )}`,
                      boxShadow: `0 8px 32px 0 ${hexToRGBA(
                        theme.palette.customColors.orange,
                        0.12
                      )}`,
                      color: "#ff914d",
                      fontFamily: "Arial",
                      fontWeight: "noraml",
                      borderRadius: "25px",
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
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { md: "row", xs: "column" },
              }}
            >
              <Box sx={{ width: { md: "48%", xs: "100%" } }}>
                <Button
                  sx={{
                    color: theme.palette.customColors.primaryWhite,
                    background: theme.palette.customColors.orange,
                    backdropFilter: "blur( 4px )",
                    textTransform: "uppercase",
                    width: "100%",
                    mb: 4,
                    align: "center",
                    marginTop: "3%",
                  }}
                  variant="contained"
                  //   align="center"
                  //   mb={4}
                >
                  cancle
                </Button>
              </Box>
              <Box sx={{ width: { md: "48%", xs: "100%" } }}>
                <Button
                  sx={{
                    color: theme.palette.customColors.primaryWhite,
                    background: theme.palette.customColors.orange,
                    backdropFilter: "blur( 4px )",
                    textTransform: "uppercase",
                    width: "100%",
                    mb: 4,
                    align: "center",
                    marginTop: "3%",
                  }}
                  variant="contained"
                  //   align="center"
                  //   mb={4}
                >
                  create fee
                </Button>
              </Box>
            </Box>

            <CloseIcon
              onClick={handleCustomClose}
              sx={{
                color: "#fff",
                position: "absolute",
                right: "3%",
                top: "5%",
                fontSize: "30px",
                "&:hover": { color: "#ff914d", cursor: "pointer" },
              }}
            />
          </Box>
        </Modal>
        {/* model 2 end */}
        {/* modal end  */}
      </Box>
    </>
  );
}

export default FinanceSettings;
