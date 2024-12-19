"use client";
import { Box, Button, Divider, InputBase, Typography, useTheme } from "@mui/material";
import React from "react";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
// icon
import SearchIcon from "@mui/icons-material/Search";
import VerifiedIcon from '@mui/icons-material/Verified';
// table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  member: string,
  email: string,
  otp: number,
  verified: number,
  // protein: string
) {
  return { member, email, otp, verified };
}

const rows = [
  createData("Hilink", '0', 0, 0),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Page() {
  const theme = useTheme();
  const orange = theme.palette.customColors.orange;
  const white = theme.palette.customColors.primaryWhite;
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
          <Box
            sx={{
              p: "2px 14px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              //   border: "1px solid #ff914d",
              margin: "1% auto 0",
              borderRadius: "20px",
              background: `${hexToRGBA(
                theme.palette.customColors.primaryDark1,
                0.2
              )}`,
              boxShadow: `0 8px 32px 0 ${hexToRGBA(orange, 0.12)}`,
              border: `1px solid ${white}`,
              backdropFilter: "blur( 4px )",
            }}
          >
            <SearchIcon sx={{ color: "#fff" }} />
            <InputBase
              sx={{ ml: 1, flex: 1, color: "#ff914d" }}
              placeholder="Search (Event Name , Email ,Oreder #)"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Box>
          {/* search bar end  */}
          <Box sx={{ margin: "20px 0" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Member Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">OTP</TableCell>
                    <TableCell align="center">Verified</TableCell>
                    {/* <TableCell align="center">Last Login</TableCell> */}
                    {/* <TableCell align="center"> </TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.member}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Sartaj Gill
                      </TableCell>
                      <TableCell align="center">
                        gills1enterprises@gmail.com
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          sx={{
                            border: `1px solid ${orange}`,
                            paddingInline: "25px",
                            color: orange,
                            fontWeight: "normal",
                          }}
                        >
                          Send OTP
                        </Button>
                      </TableCell>
                      <TableCell align="center">
                      <Button startIcon={<VerifiedIcon/>}
                          sx={{
                            border: `1px solid ${orange}`,
                            paddingInline: "25px",
                            color: orange,
                            fontWeight: "normal",
                          }}
                        >
                          Verified
                        </Button>
                      </TableCell>
                      {/* <TableCell align="center">2 days ago</TableCell> */}
                      {/* <TableCell align="center"><ContentCopyIcon/> </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Page;
