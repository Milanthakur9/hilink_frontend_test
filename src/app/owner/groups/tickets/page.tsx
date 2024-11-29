"use client";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
// icon
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/navigation";

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
  status: string,
  price: number,
  sold: string,
  openSale: string,
  endSale: string
) {
  return { name, status, price, sold, openSale, endSale };
}

const rows = [
  createData("Hilink", "On Sale", 10, "0 / No Limit", "No data", "No data"),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Page() {
  const theme = useTheme();
  const router = useRouter();
  const orange = theme.palette?.customColors.orange;
  const white = theme.palette?.customColors.primaryWhite;
  return (
    <div>
      <Box
        sx={{
          width: { md: "80%", xs: "95%" },
          margin: "0 auto",
          padding: "3% 0%",
        }}
      >
        <Box>
          {/* <Typography sx={{fontSize:'30px'}}>tj — Tickets</Typography> */}
          <Typography variant="h3">Tickets</Typography>
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
                Ticket Types
              </Typography>
            </Box>
            <Box sx={{ width: { md: "fit-content", xs: "100%" } }}>
              <Button
                onClick={() => router.push("/owner/groups/tickets/create/")}
                sx={{
                  background: orange,
                  color: white,
                  paddingInline: "20px",
                  borderRadius: "5px",
                }}
              >
                + Add Ticket Type
              </Button>
            </Box>
          </Box>

          <Box sx={{ margin: "20px 0" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center"> Price</TableCell>
                    <TableCell align="center">Sold</TableCell>
                    <TableCell align="center">Open Sale</TableCell>
                    <TableCell align="center"> End Sale</TableCell>
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
                      <TableCell align="center">{row.status}</TableCell>
                      <TableCell align="center"> $ {row.price}</TableCell>
                      <TableCell align="center">{row.sold}</TableCell>
                      <TableCell align="center">{row.openSale}</TableCell>
                      <TableCell align="center">{row.endSale}</TableCell>
                      <TableCell align="center">
                        {" "}
                        <EditIcon
                          onClick={() =>
                            router.push("/owner/groups/tickets/edit/")
                          }
                          sx={{
                            fontSize: "25px",
                            marginRight: "10px",
                            "&:hover": { cursor: "pointer" },
                          }}
                        />{" "}
                        <ContentCopyIcon
                          sx={{ "&:hover": { cursor: "pointer" } }}
                        />{" "}
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
      </Box>
    </div>
  );
}

export default Page;
