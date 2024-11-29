"use client";
// import theme from '@/@core/theme/theme';
import {
  Box,
  Button,
  Divider,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
// icon
import RefreshIcon from "@mui/icons-material/Refresh";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SearchIcon from "@mui/icons-material/Search";

import { hexToRGBA } from "@/@core/utils/hex-to-rgba";

// table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: string
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Hilink", 0, 0, 0, "0.00"),
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
              {/* <Typography sx={{fontSize:'18px',margin:'5px 0px'}}>tj — Team</Typography> */}
              <Typography variant="h3">Team</Typography>
            </Box>
            {/* <Box sx={{display:'flex',alignItems:'center'}}>
                    <Typography sx={{fontSize:'20px'}}>Ended </Typography>
                    <Typography sx={{marginLeft:'10px',color:orange}}>-- 9 days ago</Typography>
                    <RefreshIcon sx={{marginLeft:'10px'}}/>
                </Box> */}
          </Box>
          <Divider sx={{ marginTop: "2%" }}></Divider>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <Box sx={{ width: { md: "fit-content", xs: "100%" } }}>
              <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
                Tracking Links
              </Typography>
            </Box>
            <Box sx={{ width: { md: "fit-content", xs: "100%" } }}>
              <Button
                sx={{
                  background: orange,
                  color: white,
                  paddingInline: "20px",
                  borderRadius: "5px",
                }}
              >
                + Add Team Member
              </Button>
            </Box>
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
                    <TableCell align="center">Access Level</TableCell>
                    <TableCell align="center">Date Added</TableCell>
                    <TableCell align="center">Last Login</TableCell>
                    {/* <TableCell align="center"> </TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
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
                          owner
                        </Button>
                      </TableCell>
                      <TableCell align="center">11 days ago</TableCell>
                      <TableCell align="center">2 days ago</TableCell>
                      {/* <TableCell align="center"><ContentCopyIcon/> </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        {/* data 1 */}
        <Box sx={{ padding: "15% 0%" }}></Box>
        {/* data 2 */}
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <Box>
              <Typography>1 result(s)</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Last Updated 10:51am </Typography>
              <RefreshIcon sx={{ marginLeft: "10px" }} />
            </Box>
            <Box>
              <Button
                sx={{
                  background: orange,
                  color: white,
                  paddingInline: "20px",
                  marginRight: "20px",
                  borderRadius: "5px",
                }}
              >
                Previous
              </Button>
              <Button
                sx={{
                  background: orange,
                  color: white,
                  paddingInline: "20px",
                  borderRadius: "5px",
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
          <Divider sx={{ marginTop: "2%" }}></Divider>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <Box sx={{ width: { md: "fit-content", xs: "100%" } }}>
              <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
                Tracking Links
              </Typography>
            </Box>
            <Box sx={{ width: { md: "fit-content", xs: "100%" } }}>
              <Button
                sx={{
                  background: orange,
                  color: white,
                  paddingInline: "20px",
                  borderRadius: "5px",
                }}
              >
                + Create Tracking Link
              </Button>
            </Box>
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
              boxShadow: `0 8px 32px 0 ${hexToRGBA(
                theme.palette.customColors.orange,
                0.12
              )}`,
              border: `1px solid ${theme.palette.customColors.primaryWhite}`,
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
                    <TableCell>Link</TableCell>
                    <TableCell align="center">Clicks</TableCell>
                    <TableCell align="center">Tickets Sold</TableCell>
                    <TableCell align="center">Conversion Rate</TableCell>
                    <TableCell align="center">Revenue Generated</TableCell>
                    <TableCell align="center"> </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.calories}</TableCell>
                      <TableCell align="center">{row.fat}</TableCell>
                      <TableCell align="center">{row.carbs}</TableCell>
                      <TableCell align="center">{row.protein}</TableCell>
                      <TableCell align="center">
                        <ContentCopyIcon />{" "}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        {/* data 2 */}
        <Box sx={{ padding: "15% 0%" }}></Box>
        {/* data 3*/}
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <Box>
              <Typography>1 result(s)</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Last Updated 12:42pm </Typography>
              <RefreshIcon sx={{ marginLeft: "10px" }} />
            </Box>
            <Box>
              <Button
                sx={{
                  background: orange,
                  color: white,
                  paddingInline: "20px",
                  marginRight: "20px",
                  borderRadius: "5px",
                }}
              >
                Previous
              </Button>
              <Button
                sx={{
                  background: orange,
                  color: white,
                  paddingInline: "20px",
                  borderRadius: "5px",
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
          <Divider sx={{ marginTop: "2%" }}></Divider>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <Box sx={{ width: { md: "fit-content", xs: "100%" } }}>
              <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
                Ticket Scanner Pins
              </Typography>
            </Box>
            <Box sx={{ width: { md: "fit-content", xs: "100%" } }}>
              <Button
                sx={{
                  background: orange,
                  color: white,
                  paddingInline: "20px",
                  borderRadius: "5px",
                }}
              >
                + Add Ticket Scanner Pin
              </Button>
            </Box>
          </Box>
          {/* search bar start  */}
          <Box
            sx={{
              p: "2px 14px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              // border: "1px solid #ff914d",
              margin: "1% auto 0",
              borderRadius: "20px",
              background: `${hexToRGBA(
                theme.palette.customColors.primaryDark1,
                0.2
              )}`,
              boxShadow: `0 8px 32px 0 ${hexToRGBA(
                theme.palette.customColors.orange,
                0.12
              )}`,
              border: `1px solid ${theme.palette.customColors.primaryWhite}`,
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
                    {/* <TableCell>Link</TableCell> */}
                    <TableCell align="center">Pin</TableCell>
                    <TableCell align="center">Sent To</TableCell>
                    {/* <TableCell align="center">Conversion Rate</TableCell> */}
                    {/* <TableCell align="center">Revenue Generated</TableCell> */}
                    {/* <TableCell align="center"> </TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {/* {row.name} */}
                      </TableCell>
                      <TableCell align="center">
                        {/* {row.calories} */}
                      </TableCell>
                      {/* <TableCell align="center">{row.fat}</TableCell>
                                <TableCell align="center">{row.carbs}</TableCell>
                                <TableCell align="center">{row.protein}</TableCell>
                                <TableCell align="center"><ContentCopyIcon/> </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box>
            <Typography sx={{ textAlign: "center", fontSize: "16px" }}>
              No ticket scanner pins.
            </Typography>
          </Box>
        </Box>
        {/* data 3 */}
        <Box sx={{ padding: "5% 0%" }}></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "2% 0%",
          }}
        >
          <Box>
            <Typography>0 result(s)</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography>Last Updated 12:42pm</Typography>
            <RefreshIcon sx={{ marginLeft: "10px" }} />
          </Box>
          <Box>
            <Button
              sx={{
                background: orange,
                color: white,
                paddingInline: "20px",
                marginRight: "20px",
                borderRadius: "5px",
              }}
            >
              Previous
            </Button>
            <Button
              sx={{
                background: orange,
                color: white,
                paddingInline: "20px",
                borderRadius: "5px",
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Page;
