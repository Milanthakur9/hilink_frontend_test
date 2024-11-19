// react
import React from "react";
// material
import { Box, Divider, InputBase, Typography } from "@mui/material";
import Image from "next/image";
import Ink from "../../../../../../quill.svg";
import Message from "../../../../../../message.webp";
// icons
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SellIcon from "@mui/icons-material/Sell";
import MessageIcon from "@mui/icons-material/Message";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
// table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";

// pagination
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

// table functions
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#151618",
    color: "#ff914d",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#202524",
    color: "#ff914d",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  tickets: number,
  TotalSpend: number,
  LastPurchase: number,
  protein: number
) {
  return { name, tickets, TotalSpend, LastPurchase, protein };
}

const rows = [
  createData("Sartaj Gill", 1, 0, 13, 0),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Marketing() {
  return (
    <Box sx={{ width: "80%", margin: "3% auto" }}>
      <div>
        <Box>
          <Box>
            {/* New SMS & view sms start  */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* <Box sx={{width:'49%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px',borderRadius:'5px',background:`linear-gradient(to right,#e58245,#ff9c5e)`}}> */}
              <Box
                sx={{
                  width: "49%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: "5px",
                  background: `linear-gradient(to right,#06aed4 0%, #1570ef 100%)`,
                }}
              >
                <Typography sx={{ color: "#fff" }}>
                  + New SMS Campaign
                </Typography>
                <Image src={Ink} alt="Ink" height={30} width={30}></Image>
              </Box>
              {/* <Box sx={{width:'49%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px',borderRadius:'5px',background:`linear-gradient(to right,#ff914d,#fff)`}}> */}
              <Box
                sx={{
                  width: "49%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: "5px",
                  background: `linear-gradient(145deg, #66c61c 0%, #053321 100%)`,
                }}
              >
                <Typography sx={{ color: "#fff" }}>
                  View SMS Campaigns
                </Typography>
                <Image src={Message} alt="Ink" height={30} width={30}></Image>
              </Box>
            </Box>
            {/* New SMS & view sms end  */}

            <Divider
              sx={{ background: "#ff914d", opacity: 0.4, margin: "2% 0% 3%" }}
            />

            {/* Attendees start */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "3% 0%",
              }}
            >
              <Box sx={{ width: "fit-content" }}>
                <Typography
                  variant="h2"
                  sx={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}
                >
                  Attendees
                </Typography>
              </Box>
              <Box sx={{ width: "80%" }}>
                {/* search bar start  */}
                <Box
                  sx={{
                    p: "2px 24px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    border: "1px solid #ff914d",
                    // margin: "4% auto 0",
                    borderRadius: "20px",
                    background: "rgba( 255, 145, 77, 0.25 )",
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 4px )",
                  }}
                >
                  {/* <IconButton sx={{ p: '10px' }} aria-label="menu"> */}
                  {/* <MenuIcon /> */}
                  <SearchIcon sx={{ color: "#fff" }} />

                  {/* </IconButton> */}
                  <InputBase
                    sx={{ ml: 1, flex: 1, color: "#ff914d" }}
                    placeholder="Search (Name,Email,Phone Number)"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                </Box>
                {/* search bar end  */}
              </Box>
            </Box>
            {/* Attendees end */}

            {/* filter & tag start  */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "49.5%",
                  border: "1px solid #ff914d",
                  background: "#202524",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{ color: "#fff", fontSize: "20px", fontWeight: "normal" }}
                >
                  FILTER
                </Typography>
                <FilterAltIcon sx={{ color: "#ff914d", marginLeft: "10px" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "49.5%",
                  border: "1px solid #ff914d",
                  background: "#202524",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{ color: "#fff", fontSize: "20px", fontWeight: "normal" }}
                >
                  TAG
                </Typography>
                <SellIcon sx={{ color: "#ff914d", marginLeft: "10px" }} />
              </Box>
            </Box>
            {/* filter & tag end  */}

            {/* table  start*/}
            <Box sx={{ marginTop: "5px" }}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>
                        <PanoramaFishEyeIcon sx={{ color: "#fff" }} />
                      </StyledTableCell>
                      <StyledTableCell>Name</StyledTableCell>
                      <StyledTableCell align="center"> Tickets</StyledTableCell>
                      <StyledTableCell align="center">
                        Total Spend
                      </StyledTableCell>
                      <StyledTableCell align="center">Contact</StyledTableCell>
                      <StyledTableCell align="center"> Tags</StyledTableCell>
                      <StyledTableCell align="center">
                        {" "}
                        Last Purchase
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell
                          sx={{ color: "#fff" }}
                          component="th"
                          scope="row"
                        >
                          <PanoramaFishEyeIcon sx={{ color: "#fff" }} />
                        </StyledTableCell>
                        <StyledTableCell
                          sx={{ color: "#fff" }}
                          component="th"
                          scope="row"
                        >
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell sx={{ color: "#fff" }} align="center">
                          {row.tickets}
                        </StyledTableCell>
                        <StyledTableCell sx={{ color: "#fff" }} align="center">
                          $ {row.TotalSpend}
                        </StyledTableCell>
                        <StyledTableCell sx={{ color: "#fff" }} align="center">
                          <MessageIcon sx={{ color: "#fff" }} />
                          <LocalPhoneIcon sx={{ color: "#fff" }} />
                        </StyledTableCell>
                        <StyledTableCell sx={{ color: "#fff" }} align="center">
                          <AddCircleIcon sx={{ color: "#fff" }} />
                        </StyledTableCell>
                        <StyledTableCell sx={{ color: "#fff" }} align="center">
                          {" "}
                          Nov {row.LastPurchase}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* pagination start  */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "3% 0%",
                }}
              >
                <Stack spacing={2}>
                  <Pagination count={1} color="primary" />
                </Stack>
              </Box>
              {/* pagination end  */}
            </Box>
            {/* table end */}
          </Box>
        </Box>
      </div>
    </Box>
  );
}

export default Marketing;
