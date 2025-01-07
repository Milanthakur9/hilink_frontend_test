import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

// Switch
import Switch, { SwitchProps } from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "@emotion/styled";
import { Margin } from "@mui/icons-material";

// switch start
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({}) => ({
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
        backgroundColor: "#151618",
        opacity: 1,
        border: 0,
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
      // color: theme.palette.grey[100],
      // ...theme.applyStyles('dark', {
      //   color: theme.palette.grey[600],
      // }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#ff914d",
    opacity: 1,
  },
}));

const style = {
  borderRadius: "30px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "60%", xs: "95%" },
  margin: { md: "0", xs: "40px 0 50px 0" },
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const orders = [
  {
    id: 1,
    title: "View orders",
    subTitle: `Allows the user to view all orders through the "Orders" tab`,
  },
  {
    id: 2,
    title: "Search Orders",
    subTitle: `Allows the user to search orders`,
  },
  {
    id: 3,
    title: "View Order",
    subTitle: `Allows the user to click into individual orders through the orders list`,
  },
  {
    id: 4,
    title: "Scan Ticket",
    subTitle: `Allows the user to scan tickets for an order`,
  },
  {
    id: 5,
    title: "View Pending Order",
    subTitle: `Allows the user to view all of the pending orders for an event`,
  },
  {
    id: 6,
    title: "Access Attendee Files",
    subTitle: `Allows the user to access attendee files`,
  },
];

const attendee = [
  {
    id: 1,
    title: "View attendees",
    subTitle: `Allows the user to view a list of all attendees`,
  },
  {
    id: 2,
    title: "View attendee page",
    subTitle: `Allows the user to click into an attendee from the attendee list`,
  },
];

function DoormanPermissions() {
  var theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          margin: "20px 0",
          padding: "20px",
        }}
      >
        <Box>
          <Button
            onClick={handleOpen}
            sx={{
              width: "100%",
              border: `1px solid ${theme.palette.customColors.orange}`,
              borderRadius: "5px",
            }}
          >
            Edit Permissions
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          <Button
            sx={{
              width: "49%",
              border: `1px solid ${theme.palette.customColors.orange}`,
              borderRadius: "5px",
            }}
          >
            Contact
          </Button>
          <Button
            sx={{
              width: "49%",
              border: `1px solid ${theme.palette.customColors.orange}`,
              borderRadius: "5px",
            }}
          >
            Remove
          </Button>
        </Box>
      </Box>

      {/* modal start  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            onClick={handleClose}
            sx={{
              cursor: "pointer",
              fontSize: "30px",
              position: "absolute",
              right: "5%",
              top: "3%",
              transition: "all .4s linear",
              "&:hover": {
                color: theme.palette.customColors.orange,
                transform: "rotate(-180deg)",
              },
            }}
          />
          <Typography
            id="modal-modal-title"
            variant="h2"
            sx={{ textAlign: "center" }}
          >
            Edit Permissions
          </Typography>
          <Box
            sx={{
              height: "350px",
              overflowY: "scroll",
              padding: "0 12px",
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
            {/* attendee */}
            <Typography
              id="modal-modal-description"
              variant="h5"
              sx={{ margin: "20px 0" }}
            >
              Attendee
            </Typography>
            {attendee.map((item) => {
              return (
                <Box key={item.id} sx={{ display: "flex", margin: "20px 0" }}>
                  <Box>
                    <FormControlLabel
                      label=""
                      control={<IOSSwitch sx={{ m: 1 }} />}
                      // label="iOS style"
                    />
                  </Box>
                  <Box>
                    <Typography variant="h4">{item.title}</Typography>
                    <Typography>{item.subTitle}</Typography>
                  </Box>
                </Box>
              );
            })}
            {/* attendee */}

            {/* orders */}
            <Typography
              id="modal-modal-description"
              variant="h5"
              sx={{ margin: "20px 0" }}
            >
              Orders
            </Typography>
            {orders.map((item) => {
              return (
                <Box key={item.id} sx={{ display: "flex", margin: "20px 0" }}>
                  <Box>
                    <FormControlLabel
                      label=""
                      control={<IOSSwitch sx={{ m: 1 }} />}
                      // label="iOS style"
                    />
                  </Box>
                  <Box>
                    <Typography variant="h4">{item.title}</Typography>
                    <Typography>{item.subTitle}</Typography>
                  </Box>
                </Box>
              );
            })}
            {/* orders */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 4,
                margin: "40px 0",
              }}
            >
              <Button
                onClick={handleClose}
                sx={{
                  border: `1px solid ${theme.palette.customColors.orange}`,
                  paddingInline: "20px",
                  fontSize: "20px",
                }}
              >
                Cancle
              </Button>
              <Button
                sx={{
                  background: theme.palette.customColors.orange,
                  paddingInline: "20px",
                  fontSize: "20px",
                  color: theme.palette.customColors.primaryWhite,
                }}
              >
                + Save
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default DoormanPermissions;
