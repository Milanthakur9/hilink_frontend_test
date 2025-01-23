"use client";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { FitScreen } from "@mui/icons-material";
import { Button, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

// icons
import EditIcon from "@mui/icons-material/Edit";
import BlockIcon from "@mui/icons-material/Block";

export default function DataTable() {
  const router = useRouter();
  const theme = useTheme();
  const [clickedBlockIds, setClickedBlockIds] = React.useState<Set<number>>(
    new Set()
  );

  const handleBlockClick = (id: number) => {
    setClickedBlockIds((prev) => new Set(prev).add(id));
  };

  const handleUnblockClick = (id: number) => {
    // setClickedBlockIds((prev) => new Set(prev).delete(id));
    // setClickedBlockIds((prev) => new Set(prev).delete(id));
    // setClickedBlockIds(!clickedBlockIds);
    setClickedBlockIds((prev) => {
      const newSet = new Set(prev); // Create a copy of the current set
      newSet.delete(id); // Remove the id from the set
      return newSet; // Return the updated set
    });
  };

  const columns: GridColDef[] = [
    // {
    //   field: "id",
    //   minWidth: 150,
    //   headerName: "Order Id",
    //   flex: 1,
    //   headerAlign: "center",
    //   align: "center",
    // },
    {
      field: "userType",
      minWidth: 170,
      headerName: "user Type",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "CustomerName",
      minWidth: 170,
      headerName: "User Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Email",
      minWidth: 170,
      headerName: "Email",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    // {
    //   field: "SoldTickets",
    //   minWidth: 170,
    //   headerName: "Sold Tickets",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   flex: 1,
    //   headerAlign: "center",
    //   align: "center",
    // },
    {
      field: "edit",
      minWidth: 190,
      headerName: "Edit",
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
          startIcon={<EditIcon />}
          variant="contained"
          color="primary"
          onClick={() => router.push(`/editUserDetails/`)}
        >
          Edit User
        </Button>
      ),
    },
    // {
    //   field: "block",
    //   minWidth: 170,
    //   headerName: "Block",
    //   flex: 1,
    //   headerAlign: "center",
    //   align: "center",
    //   sortable: false,
    //   renderCell: (params) => (
    //     <Button
    //       sx={{
    //         background: "transparent",
    //         border: `1px solid ${theme.palette.customColors.orange}`,
    //         transition: "all .4s linear",
    //         "&:hover": {
    //           background: theme.palette.customColors.orange,
    //           transform: "scale(0.90)",
    //         },
    //       }}
    //       startIcon={<BlockIcon />}
    //       variant="contained"
    //       color="primary"
    //     >
    //       Block User
    //     </Button>
    //   ),
    // },
    {
      field: "Block",
      minWidth: 190,
      headerName: "Block Events",
      flex: 1,
      headerAlign: "center",
      align: "center",
      sortable: false,
      renderCell: (params) =>
        clickedBlockIds?.has(params.id as number) ? (
          <Button
            sx={{
              background: ` ${
                // clickedBlockIds.has(params.id as number) ? "red" : "red"
                clickedBlockIds.has(params.id as number) ? "red" : "transparent"
              }`,
              border: `1px solid red`,
              color: theme.palette.customColors.primaryWhite,
              opacity: clickedBlockIds.has(params.id as number) ? 1 : 0.5,
              transition: "all .4s linear",
              "&:hover": {
                transform: "scale(0.90)",
              },
            }}
            startIcon={<BlockIcon />}
            onClick={() => handleUnblockClick(params.id as number)}
            // onClick={() => handleBlockClick(params.id as number)}
            variant="contained"
            color="primary"
          >
            Unblock Event
          </Button>
        ) : (
          <Button
            sx={{
              background: ` ${
                clickedBlockIds.has(params.id as number) ? "red" : "transparent"
              }`,
              border: `1px solid red`,
              color: theme.palette.customColors.primaryWhite,
              // opacity: clickedBlockIds ? 1 : 0.2,
              opacity: clickedBlockIds.has(params.id as number) ? 1 : 0.5,
              transition: "all .4s linear",
              "&:hover": {
                transform: "scale(0.90)",
              },
            }}
            startIcon={<BlockIcon />}
            onClick={() => handleBlockClick(params.id as number)}
            // onClick={() => handleBlockClick(params.id as number)}
            variant="contained"
            color="primary"
          >
            Block Event
          </Button>
        ),
    },
  ];

  const rows = [
    {
      id: 1,
      userType: "Attendee",
      CustomerName: "Snow",
      Email: "example@gmail.com",
      field: 35,
      SoldTickets: 4,
    },
    {
      id: 2,
      userType: "Creator",
      CustomerName: "Lannister",
      Email: "example@gmail.com",
      field: 42,
      SoldTickets: 4,
    },
    {
      id: 3,
      userType: "Attendee",
      CustomerName: "Lannister",
      Email: "example@gmail.com",
      field: 45,
      SoldTickets: 4,
    },
    {
      id: 4,
      userType: "Attendee",
      CustomerName: "Stark",
      Email: "example@gmail.com",
      field: 16,
      SoldTickets: 4,
    },
    {
      id: 5,
      userType: "Creator",
      CustomerName: "Targaryen",
      Email: "example@gmail.com",
      field: null,
      SoldTickets: 4,
    },
    {
      id: 6,
      userType: "Attendee",
      CustomerName: "Melisandre",
      Email: "example@gmail.com",
      field: 150,
      SoldTickets: 4,
    },
    {
      id: 7,
      userType: "Creator",
      CustomerName: "Clifford",
      Email: "example@gmail.com",
      field: 44,
      SoldTickets: 4,
    },
    {
      id: 8,
      userType: "Creator",
      CustomerName: "Frances",
      Email: "example@gmail.com",
      field: 36,
      SoldTickets: 4,
    },
    {
      id: 9,
      userType: "Attendee",
      CustomerName: "Roxie",
      Email: "example@gmail.com",
      field: 65,
      SoldTickets: 4,
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
        // sx={{
        //   border: 0,
        //   width: "100%",
        // }}
        sx={{
          border: 0,
          width: "100%",
          "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
            display: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            msOverflowStyle: "none", // for Internet Explorer and Edge
            scrollbarWidth: "none", // for Firefox
          },
        }}
      />
    </Paper>
  );
}
