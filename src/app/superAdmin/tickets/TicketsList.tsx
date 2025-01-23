import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { FitScreen } from "@mui/icons-material";
import { Box, Button, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export default function DataTable() {
  var theme = useTheme();
  var router = useRouter();
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Ticket Id",
      flex: 1,
      headerAlign: "center",
      minWidth: 150,
      align: "center",
    },
    // {
    //   field: "Date",
    //   headerName: "Date",
    //   flex: 1,
    //   headerAlign: "center",
    //   align: "center",
    // },
    {
      field: "CustomerName",
      headerName: "Ticket Name",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "edit",
      minWidth: 190,
      headerName: "View Ticket",
      flex: 1,
      headerAlign: "center",
      align: "center",
      sortable: false,
      renderCell: (params) => (
        <Button
          sx={{
            background: "transparent",
            border: `1px solid ${theme.palette.customColors.orange}`,
            transition: "all .4s linear",
            "&:hover": {
              background: theme.palette.customColors.orange,
              transform: "scale(0.90)",
            },
          }}
          startIcon={<VisibilityIcon />}
          variant="contained"
          color="primary"
          onClick={() => router.push(`/owner/groups/visuals/`)}
        >
          View
        </Button>
      ),
    },
    {
      field: "Refunds",
      minWidth: 190,
      headerName: "Refunds Ticket",
      flex: 1,
      headerAlign: "center",
      align: "center",
      sortable: false,
      renderCell: (params) => (
        // <Button
        //   sx={{
        //     background: "transparent",
        //     border: `1px solid ${theme.palette.customColors.orange}`,
        //     borderRaidus: "200px",
        //     padding: "10px",
        //     width: "30px",
        //     height: "40px",
        //     transition: "all .4s linear",
        //     "&:hover": {
        //       background: theme.palette.customColors.orange,
        //       transform: "scale(0.90)",
        //     },
        //   }}
        //   startIcon={<CheckIcon />}
        //   variant="contained"
        //   color="primary"
        //   // onClick={() => router.push(`/owner/groups/visuals/`)}
        // >
        //   {/* View */}
        // </Button>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            alignSelf: "center",
            lineHeight: "52px",
            marginTop: "10px",
          }}
        >
          <CheckIcon
            sx={{
              border: `1px solid ${theme.palette.customColors.orange}`,
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              padding: "2px",
              cursor: "pointer",
              transition: "all .3s linear",
              "&:hover": { background: theme.palette.customColors.orange },
            }}
          />
          <CloseIcon
            sx={{
              border: `1px solid red`,
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              padding: "2px",
              cursor: "pointer",
              transition: "all .3s linear",
              "&:hover": { background: "red" },
            }}
          />
        </Box>
      ),
    },
    // {
    //   field: "Location",
    //   headerName: "Location",
    //   type: "number",
    //   flex: 1,
    //   headerAlign: "center",
    //   align: "center",
    // },
    // {
    //   field: "RefundsTickets",
    //   headerName: "Refunds Tickets",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   flex: 1,
    //   headerAlign: "center",
    //   align: "center",
    // },
  ];

  const rows = [
    {
      id: 1,
      Date: "20-1-25",
      CustomerName: "Snow",
      Location: "London",
      field: 35,
      RefundsTickets: 4,
    },
    {
      id: 2,
      Date: "20-1-25",
      CustomerName: "Lannister",
      Location: "London",
      field: 42,
      RefundsTickets: 4,
    },
    {
      id: 3,
      Date: "20-1-25",
      CustomerName: "Lannister",
      Location: "London",
      field: 45,
      RefundsTickets: 4,
    },
    {
      id: 4,
      Date: "20-1-25",
      CustomerName: "Stark",
      Location: "London",
      field: 16,
      RefundsTickets: 4,
    },
    {
      id: 5,
      Date: "20-1-25",
      CustomerName: "Targaryen",
      Location: "London",
      field: null,
      RefundsTickets: 4,
    },
    {
      id: 6,
      Date: "20-1-25",
      CustomerName: "Melisandre",
      Location: "London",
      field: 150,
      RefundsTickets: 4,
    },
    {
      id: 7,
      Date: "20-1-25",
      CustomerName: "Clifford",
      Location: "London",
      field: 44,
      RefundsTickets: 4,
    },
    {
      id: 8,
      Date: "20-1-25",
      CustomerName: "Frances",
      Location: "London",
      field: 36,
      RefundsTickets: 4,
    },
    {
      id: 9,
      Date: "20-1-25",
      CustomerName: "Roxie",
      Location: "London",
      field: 65,
      RefundsTickets: 4,
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper sx={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0, width: "100%" }}
      />
    </Paper>
  );
}
