"use client";
import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";
import Switch, { SwitchProps } from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "@emotion/styled";

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

// switch end

function Webhooks() {
  return (
    <div>
      <Box>
        <Typography
          variant="h1"
          sx={{ color: "#fff", fontSize: "35px", fontWeight: "bold" }}
        >
          Webhooks
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            fontSize: "18px",
            lineHeight: "22px",
            margin: "2% 0%",
          }}
        >
          Webhooks are automated messages sent from HILINK when something happens,
          allowing you to receive real-time updates about your events.
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            fontSize: "18px",
            lineHeight: "35px",
            margin: "2% 0%",
          }}
        >
          Your webhook secret key is{" "}
          <mark
            style={{
              background: "#202524",
              border: "1px solid #ff914d",
              padding: "4px 20px",
              color: "#ff914d",
              borderRadius: "5px",
            }}
          >
            {" "}
            84acb9ef-1a63-4e1a-ac3a-c5b077446999
          </mark>{" "}
          and will appear in a header in each request named{" "}
          <mark
            style={{
              background: "#202524",
              border: "1px solid #ff914d",
              padding: "4px 20px",
              color: "#ff914d",
              borderRadius: "5px",
            }}
          >
            {" "}
            HILINK-Secret
          </mark>
          . Contact support to regenerate your secret key.
        </Typography>

        <Divider sx={{ background: "#ff914d", opacity: 0.4 }} />

        {/* Webhook Endpoint box start */}
        <Box sx={{ display: "flex", alignItems: "center", margin: "3% 0%" }}>
          <Box sx={{ marginRight: "20px" }}>
            <Typography sx={{ color: "#fff", fontSize: "18px" }}>
              Webhook Endpoint
            </Typography>
          </Box>
          <Box sx={{ width: "60%" }}>
            <TextField
              id="outlined-basic"
              // label="venue Name"
              placeholder="https:// enter your url"
              size="small"
              variant="outlined"
              sx={{
                background: "rgba( 255, 145, 77, 0.25 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 4px )",
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
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
        {/* Webhook Endpoint box end */}

        <Divider sx={{ background: "#ff914d", opacity: 0.4 }} />

        {/* Response Body box start  */}
        <Box sx={{ margin: "2% 0%" }}>
          <Typography
            variant="h2"
            sx={{ color: "#fff", fontSize: "35px", fontWeight: "bold" }}
          >
            New Order
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "18px",
              lineHeight: "22px",
              margin: "2% 0%",
            }}
          >
            This webhook is fired every time an attendee makes a successful
            purchase
          </Typography>
          {/* enable switch box start  */}
          <Box sx={{ display: "flex", alignItems: "center", margin: "2% 0%" }}>
            <Box sx={{ marginRight: "20px" }}>
              <Typography sx={{ color: "#fff", fontSize: "18px" }}>
                Enable Webhook
              </Typography>
            </Box>
            <Box>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label=""
              />
            </Box>
          </Box>
          {/* enable switch box end */}
          {/* btn start  */}
          <Button
            sx={{
              border: "1px solid #ff914d",
              background: "#202524",
              borderRadius: "5px",
              color: "#ff914d",
              paddingInline: "20px",
              textTransform: "capitalize",
            }}
          >
            Test Webhook
          </Button>
          {/* btn end  */}
          {/* detail summary start */}
          <Box sx={{ margin: "2% 0%" }}>
            <details>
              <summary style={{ cursor: "pointer", color: "#ff914d" }}>
                View Example Response Body
              </summary>
              <p
                style={{
                  border: "1px solid #ff914d",
                  background: "#202524",
                  padding: "25px",
                  borderRadius: "10px",
                  width: "95%",
                  marginTop: "1%",
                }}
              >
                {
                  <code style={{ color: "#fff" }}>
                    const body &#61; &#123; <br />
                    type &#58; `new_order`, <br />
                    account_first_name: `Jamal`, <br />
                    account_last_name: `Jenkins`, <br />
                    account_email: `jjenz@yahoo.com`, <br />
                    account_phone: `+17267177272`, <br />
                    items: [ <br />
                    &#123; <br />
                    item_id: `5e1f5b1b1b1b1b1b1b1b1b1b`, <br />
                    name: `General Admission`, <br />
                    price: 20 <br />
                    &#125; <br />
                    ], <br />
                    date_purchased: 2020-01-01T00:00:00.000Z, <br />
                    order_number: 128291, <br />
                    promo_code: HILINK20, <br />
                    subtotal: 20, <br />
                    total: 22.41, <br />
                    event_name: `Devante Birthday Bash`, <br />
                    event_start: 2020-01-01T00:00:00.000Z, <br />
                    event_end: 2020-01-02T00:00:00.000Z, <br />
                    event_id: 5e1f5b1b1b1b1b1b1b1b1b1b, <br />
                    tracking_link: HILINK-tracking-1, <br />
                    &#125; <br />
                  </code>
                }
              </p>
            </details>
          </Box>
          {/* detail summary end */}
        </Box>
        {/* Response Body box end  */}

        <Divider sx={{ background: "#ff914d", opacity: 0.4 }} />

        {/* Response Body box start  */}
        <Box sx={{ margin: "2% 0%" }}>
          <Typography
            variant="h2"
            sx={{ color: "#fff", fontSize: "35px", fontWeight: "bold" }}
          >
            New Pending Order (Approval Required)
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "18px",
              lineHeight: "22px",
              margin: "2% 0%",
            }}
          >
            This webhook is fired every time a new pending order is created and
            is awaiting your approval.
          </Typography>
          {/* enable switch box start  */}
          <Box sx={{ display: "flex", alignItems: "center", margin: "2% 0%" }}>
            <Box sx={{ marginRight: "20px" }}>
              <Typography sx={{ color: "#fff", fontSize: "18px" }}>
                Enable Webhook
              </Typography>
            </Box>
            <Box>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label=""
              />
            </Box>
          </Box>
          {/* enable switch box end */}
          {/* btn start  */}
          <Button
            sx={{
              border: "1px solid #ff914d",
              background: "#202524",
              borderRadius: "5px",
              color: "#ff914d",
              paddingInline: "20px",
              textTransform: "capitalize",
            }}
          >
            Test Webhook
          </Button>
          {/* btn end  */}
          {/* detail summary start */}
          <Box sx={{ margin: "2% 0%" }}>
            <details>
              <summary style={{ cursor: "pointer", color: "#ff914d" }}>
                View Example Response Body
              </summary>
              <p
                style={{
                  border: "1px solid #ff914d",
                  background: "#202524",
                  padding: "25px",
                  borderRadius: "10px",
                  width: "95%",
                  marginTop: "1%",
                }}
              >
                <code style={{ color: "#fff" }}>
                  const body &#61; &#123; <br />
                  type: `new_order_request`, <br />
                  account_first_name: `Jamal`, <br />
                  account_last_name: `Jenkins`, <br />
                  account_email: `jjenz@yahoo.com`, <br />
                  account_phone: `+17267177272`, <br />
                  items: [ <br />
                  &#123; <br />
                  item_id: 5e1f5b1b1b1b1b1b1b1b1b1b, <br />
                  name: General Admission, <br />
                  price: 20 <br />
                  &#125; <br />
                  ], <br />
                  date_purchased: 2020-01-01T00:00:00.000Z, <br />
                  promo_code: HILINK20, <br />
                  subtotal: 20, <br />
                  total: 22.41, <br />
                  event_name: Devante Birthday Bash, <br />
                  event_start: 2020-01-01T00:00:00.000Z, <br />
                  event_end: 2020-01-02T00:00:00.000Z, <br />
                  event_id: 5e1f5b1b1b1b1b1b1b1b1b1b, <br />
                  tracking_link: HILINK-tracking-2, <br />
                  &#125; <br />
                </code>
              </p>
            </details>
          </Box>
          {/* detail summary end */}
        </Box>
        {/* Response Body box end  */}

        <Divider sx={{ background: "#ff914d", opacity: 0.4 }} />

        <Box sx={{ margin: "3% 0%", display: "flex" }}>
          <Box sx={{ marginRight: "20px" }}>
            <Button
              sx={{
                border: "1px solid #ff914d",
                background: "#202524",
                borderRadius: "5px",
                color: "#ff914d",
                paddingInline: "20px",
              }}
            >
              Discard
            </Button>
          </Box>
          <Box>
            <Button
              sx={{
                background: "#ff914d",
                borderRadius: "5px",
                color: "#fff",
                paddingInline: "20px",
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Webhooks;
