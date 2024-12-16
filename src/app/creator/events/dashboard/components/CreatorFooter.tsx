import * as React from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  ListItemText,
  Divider,
  Container,
} from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InputAdornment from "@mui/material/InputAdornment";
import Svlogo from "../../../../../assets/branding/HL_Clean_Transparent.svg";
import Image from "next/image";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
// import Divider from '@mui/material/Divider';
export default function CreatorFooter() {
  return (
    <Box sx={{ flexGrow: 1, background: "#151618" }}>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Box>
              <Image src={Svlogo} height="50" alt="hilink logo" />
            </Box>
            <Box>
              <Typography sx={{ color: "#fff", margin: "3% 0%" }}>
                Providing the world with tools to create incredible experiences
              </Typography>
              <Typography variant="h6" sx={{ color: "#fff" }}>
                {`Subscribe to "HOSTED" - our weekly newsletter`}
              </Typography>
            </Box>
            <Box>
              <FormControl
                sx={{ m: 1, width: "75%", borderBottom: "1px solid #ff914d" }}
                variant="standard"
              >
                <InputLabel
                  htmlFor="standard-adornment-password"
                  sx={{ color: "#ff914d" }}
                >
                  Enter your email
                </InputLabel>
                <Input
                  // id="standard-adornment-password"
                  type="email"
                  sx={{ paddingBottom: "5px" }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton>
                        <SendIcon sx={{ color: "#ff914d" }} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              sx={{ color: "#ff914d", fontWeight: "bold" }}
              variant="h5"
              gutterBottom
            >
              HILINK
            </Typography>
            <ListItemText
              sx={{
                color: "#fff",
                "&:hover": {
                  cursor: "pointer",
                  textDecoration: "underline 1px #fff",
                },
              }}
              primary="Careers"
            />
            <ListItemText
              sx={{
                color: "#fff",
                "&:hover": {
                  cursor: "pointer",
                  textDecoration: "underline 1px #fff",
                },
              }}
              primary="Magazine"
            />
            <ListItemText
              sx={{
                color: "#fff",
                "&:hover": {
                  cursor: "pointer",
                  textDecoration: "underline 1px #fff",
                },
              }}
              primary="HILINK TV"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              sx={{ color: "#ff914d", fontWeight: "bold" }}
              variant="h6"
            >
              Resources
            </Typography>
            {/* <List> */}
            <ListItemText
              sx={{
                color: "#fff",
                "&:hover": {
                  cursor: "pointer",
                  textDecoration: "underline 1px #fff",
                },
              }}
              primary="Support"
            />
            <ListItemText
              sx={{
                color: "#fff",
                "&:hover": {
                  cursor: "pointer",
                  textDecoration: "underline 1px #fff",
                },
              }}
              primary="Request A Demo"
            />
            <ListItemText
              sx={{
                color: "#fff",
                "&:hover": {
                  cursor: "pointer",
                  textDecoration: "underline 1px #fff",
                },
              }}
              primary="FAQ"
            />
            <ListItemText
              sx={{
                color: "#fff",
                "&:hover": {
                  cursor: "pointer",
                  textDecoration: "underline 1px #fff",
                },
              }}
              primary="Tutorials"
            />
            {/* </List> */}
            {/* <InstagramIcon /> */}
            {/* <TwitterIcon /> */}
            {/* <LinkedInIcon /> */}
            {/* <LinkedInIcon /> */}
          </Grid>
        </Grid>
        <Divider
          sx={{
            background: "#ff914d !important",
            opacity: "0.2",
            width: "100%",
            margin: "2% auto",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column-reverse" },
            justifyContent: "space-between",
            alignItems: { md: "center", xs: "start" },
          }}
        >
          <Box>
            <InstagramIcon sx={{ color: "#fff" }} />
            <TwitterIcon sx={{ color: "#fff", marginLeft: "20px" }} />
            <LinkedInIcon sx={{ color: "#fff", marginLeft: "20px" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              alignItems: { md: "center", xs: "start" },
            }}
          >
            <ListItemText
              sx={{
                color: "#fff",
                "&:hover": {
                  cursor: "pointer",
                  textDecoration: "underline 1px #fff",
                },
              }}
              primary=" ©  HILINK all rights reserved."
            />
            <ListItemText
              sx={{
                color: "#fff",
                "&:hover": {
                  cursor: "pointer",
                  textDecoration: "underline 1px #fff",
                },
                paddingLeft: { md: "20px", xs: "0px" },
              }}
              primary="Privacy Policy"
            />
            <ListItemText
              sx={{
                color: "#fff",
                "&:hover": {
                  cursor: "pointer",
                  textDecoration: "underline 1px #fff",
                },
                paddingLeft: { md: "20px", xs: "0px" },
              }}
              primary="Terms of Service"
            />
          </Box>
        </Box>
      </Container>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} HILINK. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
