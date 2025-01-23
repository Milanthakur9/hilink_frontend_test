import Permissions from "@/app/creator/events/dashboard/components/permissions";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";

function TeamRole() {
  return (
    <>
      <Grid container justifyContent="flexStart" alignItems="center" mb={4}>
        <Grid item xs={12} md={4} lg={4}>
          <Box
            sx={{
              padding: "20%",
              width: "100%",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
              transition: "all .3s linear",
              borderRadius: "10px",
              "&:hover": {
                // transform: "scale(1.1)",
                // boxShadow:'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;',
                // border:'1px solid #ff914d'
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#202524",
                marginBottom: "3%",
                width: 120,
                height: 120,
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                transition: "all .3s linear",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            >
              <PersonIcon sx={{ color: "#ff914d", fontSize: "80px" }} />
            </Avatar>
            <Typography
              sx={{ color: "#fff" }}
              variant="h6"
              align="center"
              mt={2}
            >
              Sartaj Gill
            </Typography>
            <Typography
              sx={{ color: "#fff" }}
              variant="body2"
              align="center"
              mt={1}
            >
              Owner
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
              variant="caption"
              align="center"
              mt={1}
            >
              Last Login: A day ago
            </Typography>

            <Permissions />
            {/* <HostPermissions /> */}
            {/* <DoormanPermissions /> */}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default TeamRole;
