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

const team = [
  {
    id: 1,
    title: "View team members",
    subTitle: "Allows the user to view team members in the relevant scope",
  },
  {
    id: 2,
    title: "Add team members",
    subTitle: "Allows the user to invite / add new team members",
  },
  {
    id: 3,
    title: "Edit permissions",
    subTitle: "Allows the user to edit existing members' permissions",
  },
  {
    id: 4,
    title: "Remove team members",
    subTitle: "Allows the user to remove team members",
  },
];

const blasts = [
  {
    id: 1,
    title: "View SMS blasts",
    subTitle: "Allows the user to view SMS blasts analytics",
  },
  {
    id: 2,
    title: "Send SMS blasts",
    subTitle: "Allows the user to send SMS blasts",
  },
  {
    id: 3,
    title: "Export Attendees to Mailchimp",
    subTitle:
      "Allows the user to export attendees to new or existing Mailchimp audiences",
  },
];

const payouts = [
  {
    id: 1,
    title: "View account balance",
    subTitle: "Allows the user to see the group's current balance",
  },
  {
    id: 2,
    title: "View payouts",
    subTitle: "Allows the user to view past payouts made to the group",
  },
  {
    id: 3,
    title: "Add bank account",
    subTitle: "Allows the user to add bank accounts to the group",
  },
  {
    id: 4,
    title: "View disputes",
    subTitle: "Allows the user to view disputes",
  },
  {
    id: 5,
    title: "Initiate Payouts",
    subTitle:
      "Allows the user to initiate a new payout to your default bank account.",
  },
];

const event = [
  {
    id: 1,
    title: "Edit Event Settings",
    subTitle: `Allows the user to edit settings on the event page ("Settings" tab)`,
  },
  {
    id: 2,
    title: "Edit Event Tables",
    subTitle: `Allows the user to create, remove, or edit existing / new tables`,
  },
  {
    id: 3,
    title: "Edit Event Tickets",
    subTitle: `Allows the user to create, remove, or edit existing / new tickets`,
  },
  {
    id: 4,
    title: "Edit Event Tracking Links",
    subTitle: `Allows the user to create, remove, or edit existing / new tracking links`,
  },
  {
    id: 5,
    title: "Edit Event Visuals",
    subTitle: `Allows the user to access the "Visuals" tab on the event (flyer, color, etc.)`,
  },
  {
    id: 6,
    title: "Delete Event",
    subTitle: `Allows the user to delete events on the group`,
  },
  {
    id: 7,
    title: "Create Event",
    subTitle: `Allows the user to create / publish new events on the group`,
  },
  {
    id: 8,
    title: "View / Send Complimentary Tickets",
    subTitle: `Allows the user to view, send, and update complimentary tickets and manage the guest-list`,
  },
  {
    id: 9,
    title: "View Host Tracking Links",
    subTitle: `Allows the user to view host tracking links`,
  },
  {
    id: 10,
    title: "View Host Breakdown",
    subTitle: `View a breakdown of each host's attributed orders`,
  },
  {
    id: 11,
    title: "Add / Remove promo codes",
    subTitle: `Allows the user to add & remove promo codes`,
  },
  {
    id: 12,
    title: "Duplicate Event",
    subTitle: `Allows the user to duplicate events.`,
  },
  {
    id: 13,
    title: "Enable Kickbacks",
    subTitle: `Allows the user to enable and configure Kickbacks for your event`,
  },
  {
    id: 14,
    title: "Add Affiliates",
    subTitle: `Allows the user to add and manage affiliates for their event`,
  },
  {
    id: 15,
    title: "View Event Scan Pins",
    subTitle: `Allows the user to view your ticket scan pins`,
  },
  {
    id: 16,
    title: "Edit Ticket Scan Pins",
    subTitle: `Allows the user to disable, create and send ticket scan pins to contacts.`,
  },
  {
    id: 17,
    title: "View Event Services",
    subTitle: `Allows the user to view booked and available event services`,
  },
  {
    id: 18,
    title: "Book & Manage Event Services",
    subTitle: `Book new services, edit and manage bookings, cancel bookings.`,
  },
  {
    id: 19,
    title: "View Total Collected Fees",
    subTitle: `Allows the user to view the total collected fees`,
  },
];

const orders = [
  {
    id: 1,
    title: "View orders",
    subTitle: `Allows the user to view all orders through the "Orders" tab`,
  },
  {
    id: 2,
    title: "Filter orders",
    subTitle: `Allows the user to filter through orders in the orders list`,
  },
  {
    id: 3,
    title: "Search Orders",
    subTitle: `Allows the user to search orders`,
  },
  {
    id: 4,
    title: "View Order",
    subTitle: `Allows the user to click into individual orders through the orders list`,
  },
  {
    id: 5,
    title: "Resend Receipt",
    subTitle: `Allows the user to resend receipt emails for orders of their choice`,
  },
  {
    id: 6,
    title: "Refund Order",
    subTitle: `Allows the user to refund an order of their choice`,
  },
  {
    id: 7,
    title: "Refund Order and Resell",
    subTitle: `Allows the user to refund the order and open the associated tickets for resale`,
  },
  {
    id: 8,
    title: "Scan Ticket",
    subTitle: `Allows the user to scan tickets for an order`,
  },
  {
    id: 9,
    title: "View Pending Order",
    subTitle: `Allows the user to view all of the pending orders for an event`,
  },
  {
    id: 10,
    title: "Access Attendee Files",
    subTitle: `Allows the user to access attendee files`,
  },
];

const group = [
  {
    id: 1,
    title: "Edit Group Profile",
    subTitle: `Allows the user to edit visuals on the group (header image)`,
  },
  {
    id: 2,
    title: "Edit Group Settings",
    subTitle: `Allows the user to edit settings / info on the group`,
  },
  {
    id: 3,
    title: "Create Group",
    subTitle: `Allows the user to create groups`,
  },
  {
    id: 4,
    title: "View Organization Ranking Bar",
    subTitle: `Allows the user to view the organizing ranking bar`,
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
    title: "Filter attendees",
    subTitle: `Allows the user to filter the attendees list`,
  },
  {
    id: 3,
    title: "View attendee page",
    subTitle: `Allows the user to click into an attendee from the attendee list`,
  },
  {
    id: 4,
    title: "View global attendees list",
    subTitle: `Allows the user to view all attendees that have attended any event on the group`,
  },
];

function Permissions() {
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
            {/* Analytics  */}
            <Typography
              id="modal-modal-description"
              variant="h5"
              sx={{ margin: "20px 0" }}
            >
              Analytics
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Box>
                <FormControlLabel
                  label=""
                  control={<IOSSwitch sx={{ m: 1 }} />}
                  // label="iOS style"
                />
              </Box>
              <Box>
                <Typography variant="h4">View sales analytics</Typography>
                <Typography>
                  Allows the user to see various analytics for their relevant
                  scope
                </Typography>
              </Box>
            </Box>
            {/* Analytics */}

            {/* Teams */}
            <Typography
              id="modal-modal-description"
              variant="h5"
              sx={{ margin: "20px 0" }}
            >
              Teams
            </Typography>
            {team.map((item) => {
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
            {/* Teams */}

            {/* Blasts */}
            <Typography
              id="modal-modal-description"
              variant="h5"
              sx={{ margin: "20px 0" }}
            >
              Blasts
            </Typography>
            {blasts.map((item) => {
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
            {/* Blasts */}

            {/* payouts */}
            <Typography
              id="modal-modal-description"
              variant="h5"
              sx={{ margin: "20px 0" }}
            >
              Payouts
            </Typography>
            {payouts.map((item) => {
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
            {/* payouts */}

            {/* Event */}
            <Typography
              id="modal-modal-description"
              variant="h5"
              sx={{ margin: "20px 0" }}
            >
              Event
            </Typography>
            {event.map((item) => {
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
            {/* Event */}

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

            {/* group */}
            <Typography
              id="modal-modal-description"
              variant="h5"
              sx={{ margin: "20px 0" }}
            >
              Group
            </Typography>
            {group.map((item) => {
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
            {/* group */}

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

export default Permissions;
