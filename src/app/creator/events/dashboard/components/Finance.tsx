import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import HelpIcon from "@mui/icons-material/Help";
import Image from "next/image";
// import MailchimpLogo from '../../mailchimp-logo.webp'
import UsFlag from "../../../../../../us-flag.png";

function Finance() {
  // const [isView,setIsView] = React.useState(true)
  // const handleOpenView = ()=> {
  //   setIsView(true)
  // }
  // const handleCloseView = ()=> {
  //   setIsView(false)
  // }
  return (
    <Box sx={{ width: { md: "80%", xs: "95%" }, margin: "2% auto" }}>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ width: { md: "40%", xs: "100%" } }}>
            {/* account start  */}
            <Box
              sx={{
                border: "1px solid #ff914d",
                borderRadius: "20px",
                padding: "20px",
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}
              >
                Account Status
              </Typography>
              <Divider
                sx={{ background: "#ff914d", opacity: 0.4, margin: "3% 0%" }}
              />

              {/* disabled box start  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "3% 0%",
                }}
              >
                <Box>
                  <Typography sx={{ color: "#fff" }}>Sell Tickets</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    sx={{
                      border: "1px solid #ff914d",
                      borderRadius: "25px",
                      color: "#ff914d",
                      padding: "5px 20px",
                    }}
                  >
                    disabled
                  </Button>
                  <HelpIcon
                    sx={{ color: "#fff", fontSize: "30px", marginLeft: "5px" }}
                  />
                </Box>
              </Box>
              {/* disabled box end */}

              {/* disabled box start  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "3% 0%",
                }}
              >
                <Box>
                  <Typography sx={{ color: "#fff" }}>
                    Transfer Balance
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    sx={{
                      border: "1px solid #ff914d",
                      borderRadius: "25px",
                      color: "#ff914d",
                      padding: "5px 20px",
                    }}
                  >
                    disabled
                  </Button>
                  <HelpIcon
                    sx={{ color: "#fff", fontSize: "30px", marginLeft: "5px" }}
                  />
                </Box>
              </Box>
              {/* disabled box end */}

              <Typography
                sx={{
                  color: "#fff",
                  textDecoration: "underline 1px solid",
                  textAlign: "center",
                  margin: "25px 0px 20px",
                  cursor: "pointer",
                }}
              >
                View Info Requirements
              </Typography>

              <Button
                sx={{
                  borderRadius: "5px",
                  color: "#fff",
                  background: "#ff914d",
                  width: "100%",
                  padding: "5px",
                  textTransform: "capitalize",
                  fontSize: "18px",
                }}
              >
                Submit Required Info
              </Button>
            </Box>
            {/* account end  */}

            {/* balance start  */}
            <Box
              sx={{
                border: "1px solid #ff914d",
                borderRadius: "20px",
                padding: "20px",
                marginTop: "3%",
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}
              >
                Balance
              </Typography>
              <Divider
                sx={{ background: "#ff914d", opacity: 0.4, margin: "3% 0%" }}
              />

              {/* disabled box start  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "3% 0%",
                }}
              >
                <Box>
                  <Typography sx={{ color: "#fff" }}>Available</Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff" }}>$0.00</Typography>
                  {/* <HelpIcon sx={{color:'#fff',fontSize:'30px',marginLeft:'5px'}}/> */}
                </Box>
              </Box>
              {/* disabled box end */}

              {/* disabled box start  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "3% 0%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ color: "#fff" }}>Pending</Typography>
                  <HelpIcon
                    sx={{ color: "#fff", fontSize: "30px", marginLeft: "5px" }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff" }}>$0.00</Typography>
                </Box>
              </Box>
              {/* disabled box end */}

              {/* disabled box start  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "3% 0%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ color: "#fff" }}>
                    Instant Available
                  </Typography>
                  <HelpIcon
                    sx={{ color: "#fff", fontSize: "30px", marginLeft: "5px" }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff" }}>$0.00</Typography>
                </Box>
              </Box>
              {/* disabled box end */}
            </Box>
            {/* balance end  */}

            {/* setting start  */}
            <Box
              sx={{
                border: "1px solid #ff914d",
                borderRadius: "20px",
                padding: "20px",
                marginTop: "3%",
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}
              >
                Settings
              </Typography>
              <Divider
                sx={{ background: "#ff914d", opacity: 0.4, margin: "3% 0%" }}
              />

              {/* disabled box start  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "3% 0%",
                }}
              >
                <Box>
                  <Typography sx={{ color: "#fff" }}>Country</Typography>
                </Box>
                <Box>
                  <Image
                    src={UsFlag}
                    alt="mailchimp-logo"
                    height={30}
                    width={30}
                  ></Image>
                  {/* <Typography sx={{color:'#fff'}}>$0.00</Typography> */}
                  {/* <HelpIcon sx={{color:'#fff',fontSize:'30px',marginLeft:'5px'}}/> */}
                </Box>
              </Box>
              {/* disabled box end */}

              {/* disabled box start  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "3% 0%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ color: "#fff" }}>Currency</Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff" }}>USD</Typography>
                </Box>
              </Box>
              {/* disabled box end */}

              {/* disabled box start  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "3% 0%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ color: "#fff" }}>
                    Instant Available
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff" }}>EVENTS BY TEST</Typography>
                </Box>
              </Box>
              {/* disabled box end */}

              <Typography
                sx={{ color: "#fff", textAlign: "center", marginTop: "20px" }}
              >
                Payout Schedule: Manual
              </Typography>
            </Box>
            {/* setting end  */}

            {/* FinanceBtnCard start  */}
            <Box
              sx={{
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
                  sx={{
                    width: "100%",
                    background: "#ff914d",
                    color: "#fff",
                    fontSize: "18px",
                    padding: "5px",
                    borderRadius: "5px",
                    marginTop: "15px",
                    textTransform: "capitalize",
                  }}
                >
                  {" "}
                  + Add Bank Account
                </Button>
              </Box>
            </Box>
            {/* FinanceBtnCard end  */}

            {/* FinanceBtnCard start  */}
            <Box
              sx={{
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
                  sx={{
                    width: "100%",
                    background: "#ff914d",
                    color: "#fff",
                    fontSize: "18px",
                    padding: "5px",
                    borderRadius: "5px",
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
                  sx={{
                    width: "100%",
                    background: "#ff914d",
                    color: "#fff",
                    fontSize: "18px",
                    padding: "5px",
                    borderRadius: "5px",
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
          <Box sx={{ width: { md: "55%", xs: "100%" } }}>
            <Box
              sx={{
                minHeight: "280px",
                border: "1px solid #ff914d",
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "20px",
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}
              >
                PAYOUTS
              </Typography>
              <Box>
                <Divider sx={{ background: "#ff914d", opacity: 0.4 }} />
                <Typography
                  sx={{ color: "#fff", textAlign: "center", margin: "2% 0%" }}
                >
                  You currently have no payment history.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </Box>
  );
}

export default Finance;
