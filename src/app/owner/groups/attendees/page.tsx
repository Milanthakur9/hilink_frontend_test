"use client";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";

function Page() {
  const theme = useTheme();
  const orange = theme.palette.customColors.orange;
  return (
    <div>
      <Box
        sx={{
          width: { md: "80%", xs: "95%" },
          margin: "0 auto",
          padding: "3% 0%",
        }}
      >
        {/* data 1 */}
        <Box>
          <Box sx={{ marginTop: "2%" }}>
            <Box>
              <Typography variant="h3" sx={{ margin: "5px 0px" }}>
                Attendees
              </Typography>
            </Box>
          </Box>
          <Divider
            sx={{ marginTop: "2%", background: orange, opacity: 0.4 }}
          ></Divider>

          <Box sx={{ textAlign: "center", marginTop: "5%" }}>
            <Typography variant="h5" sx={{ opacity: 0.5 }}>
              Once people begin purchasing tickets, attendee information will
              appear here!
            </Typography>
          </Box>

          {/* search bar start  */}

          {/* search bar end  */}
        </Box>
      </Box>
    </div>
  );
}

export default Page;
