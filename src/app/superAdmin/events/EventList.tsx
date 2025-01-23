// import * as React from "react";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import Paper from "@mui/material/Paper";
// import { FitScreen } from "@mui/icons-material";
// import { Button, useTheme } from "@mui/material";
// import { useRouter } from "next/navigation";
// import EditIcon from "@mui/icons-material/Edit";
// import BlockIcon from "@mui/icons-material/Block";

// export default function DataTable() {
//   var theme = useTheme();
//   var router = useRouter();

//   const columns: GridColDef[] = [
//     {
//       field: "id",
//       headerName: "Event Id",
//       flex: 1,
//       headerAlign: "center",
//       align: "center",
//     },
//     {
//       field: "organizationName",
//       headerName: "organization Name",
//       flex: 1,
//       headerAlign: "center",
//       align: "center",
//     },
//     {
//       field: "EventName",
//       headerName: "Event Name",
//       flex: 1,
//       headerAlign: "center",
//       align: "center",
//     },
//     // {
//     //   field: "Location",
//     //   headerName: "Location",
//     //   type: "number",
//     //   flex: 1,
//     //   headerAlign: "center",
//     //   align: "center",
//     // },
//     {
//       field: "SoldTickets",
//       headerName: "Sold Tickets",
//       description: "This column has a value getter and is not sortable.",
//       sortable: false,
//       flex: 1,
//       headerAlign: "center",
//       align: "center",
//     },
//     {
//       field: "edit",
//       minWidth: 170,
//       headerName: "Edit Events",
//       flex: 1,
//       headerAlign: "center",
//       align: "center",
//       sortable: false,
//       renderCell: (params) => (
//         <Button
//           sx={{
//             background: "transparent",
//             border: `1px solid ${theme.palette.customColors.orange}`,
//             transition: "all .4s linear",
//             "&:hover": {
//               background: theme.palette.customColors.orange,
//               transform: "scale(0.90)",
//             },
//           }}
//           startIcon={<EditIcon />}
//           variant="contained"
//           color="primary"
//           onClick={() => router.push(`/owner/groups/visuals/`)}
//         >
//           Edit Event
//         </Button>
//       ),
//     },
//     {
//       field: "Block",
//       minWidth: 170,
//       headerName: " Block Events",
//       flex: 1,
//       headerAlign: "center",
//       align: "center",
//       sortable: false,
//       renderCell: (params) => (
//         <Button
//           sx={{
//             background: "transparent",
//             border: `1px solid red`,
//             color: "red",
//             transition: "all .4s linear",
//             "&:hover": {
//               // background: "red",
//               transform: "scale(0.90)",
//             },
//           }}
//           startIcon={<BlockIcon />}
//           variant="contained"
//           color="primary"
//           // onClick={() => router.push(`/owner/groups/visuals/`)}
//         >
//           Block Event
//         </Button>
//       ),
//     },
//   ];

//   const rows = [
//     {
//       id: 1,
//       organizationName: "TBG",
//       EventName: "Snow",
//       field: 35,
//       SoldTickets: 4,
//     },
//     {
//       id: 2,
//       organizationName: "XYZ",
//       EventName: "Lannister",
//       field: 42,
//       SoldTickets: 4,
//     },
//     {
//       id: 3,
//       organizationName: "Tester",
//       EventName: "Lannister",
//       field: 45,
//       SoldTickets: 4,
//     },
//     {
//       id: 4,
//       organizationName: "ORG",
//       EventName: "Stark",
//       field: 16,
//       SoldTickets: 4,
//     },
//     {
//       id: 5,
//       organizationName: "MT",
//       EventName: "Targaryen",
//       field: null,
//       SoldTickets: 4,
//     },
//     {
//       id: 6,
//       organizationName: "RE",
//       EventName: "Melisandre",
//       field: 150,
//       SoldTickets: 4,
//     },
//     {
//       id: 7,
//       organizationName: "I-11",
//       EventName: "Clifford",
//       field: 44,
//       SoldTickets: 4,
//     },
//     {
//       id: 8,
//       organizationName: "E8",
//       EventName: "Frances",
//       field: 36,
//       SoldTickets: 4,
//     },
//     {
//       id: 9,
//       organizationName: "TRP",
//       EventName: "Roxie",
//       field: 65,
//       SoldTickets: 4,
//     },
//   ];

//   const paginationModel = { page: 0, pageSize: 5 };

//   return (
//     <Paper sx={{ width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{ pagination: { paginationModel } }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//         sx={{ border: 0, width: "100%" }}
//       />
//     </Paper>
//   );
// }

import * as React from "react";
import { useState } from "react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { FitScreen } from "@mui/icons-material";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import EditIcon from "@mui/icons-material/Edit";
import BlockIcon from "@mui/icons-material/Block";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";

export default function DataTable() {
  const theme = useTheme();
  const orange = theme.palette.customColors.orange;
  const router = useRouter();

  const [filterEventName, setFilterEventName] = useState("");
  const [filterOrganizationName, setFilterOrganizationName] = useState("");
  const [clickedBlockIds, setClickedBlockIds] = useState<Set<number>>(
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
    {
      field: "id",
      headerName: "Event Id",
      flex: 1,
      headerAlign: "center",
      minWidth: 150,
      align: "center",
    },
    // {
    //   field: "organizationName",
    //   headerName: "Organization Name",
    //   flex: 1,
    //   headerAlign: "center",
    //   align: "center",
    // },
    {
      field: "EventName",
      headerName: "Event Name",
      flex: 1,
      headerAlign: "center",
      minWidth: 150,
      align: "center",
    },
    {
      field: "organizationName",
      headerName: "Organization Name",
      flex: 1,
      headerAlign: "center",
      minWidth: 150,
      align: "center",
    },
    {
      field: "SoldTickets",
      headerName: "Sold Tickets",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
      headerAlign: "center",
      minWidth: 150,
      align: "center",
    },
    {
      field: "edit",
      minWidth: 190,
      headerName: "Edit Events",
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
          onClick={() => router.push(`/owner/groups/visuals/`)}
        >
          Edit Event
        </Button>
      ),
    },
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
    { id: 1, organizationName: "TBG", EventName: "Snow", SoldTickets: 4 },
    { id: 2, organizationName: "XYZ", EventName: "Lannister", SoldTickets: 4 },
    {
      id: 3,
      organizationName: "Tester",
      EventName: "Lannister",
      SoldTickets: 4,
    },
    { id: 4, organizationName: "ORG", EventName: "Stark", SoldTickets: 4 },
    { id: 5, organizationName: "MT", EventName: "Targaryen", SoldTickets: 4 },
    { id: 6, organizationName: "RE", EventName: "Melisandre", SoldTickets: 4 },
    { id: 7, organizationName: "I-11", EventName: "Clifford", SoldTickets: 4 },
    { id: 8, organizationName: "E8", EventName: "Frances", SoldTickets: 4 },
    { id: 9, organizationName: "TRP", EventName: "Roxie", SoldTickets: 4 },
  ];

  // Filter rows based on inputs
  const filteredRows = rows.filter(
    (row) =>
      row.EventName.toLowerCase().includes(filterEventName.toLowerCase()) &&
      row.organizationName
        .toLowerCase()
        .includes(filterOrganizationName.toLowerCase())
  );

  return (
    <>
      {/* filter start  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: { md: 0, xs: 2 },
          flexDirection: { md: "row", xs: "column" },
          marginBottom: "1rem",
          padding: "3% 0",
        }}
      >
        <Box sx={{ width: { md: "48%", xs: "100%" } }}>
          <Typography variant="subtitle1" sx={{ marginBottom: "5px" }}>
            Filter by Event Name
          </Typography>
          <TextField
            label="Events Name"
            variant="outlined"
            value={filterEventName}
            size="small"
            onChange={(e) => setFilterEventName(e.target.value)}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                color: orange,
                "& .MuiOutlinedInput-notchedOutline": {
                  // background: ` ${hexToRGBA(
                  //   theme.palette.customColors.orange,
                  //   0.2
                  // )}`,
                  boxShadow: ` 0 8px 32px 0 ${hexToRGBA(
                    theme.palette.customColors.orange,
                    0.12
                  )}`,
                  borderColor: orange,
                  borderWidth: "1px",
                  borderRadius: "35px",
                },
              },
              "& .MuiInputLabel-outlined": {
                color: "#ff914d",
              },
            }}
          />
        </Box>
        <Box sx={{ width: { md: "48%", xs: "100%" } }}>
          <Typography variant="subtitle1" sx={{ marginBottom: "5px" }}>
            Filter By Organizations Name
          </Typography>
          <TextField
            label="Organizations Name"
            variant="outlined"
            size="small"
            value={filterOrganizationName}
            onChange={(e) => setFilterOrganizationName(e.target.value)}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                color: orange,
                "& .MuiOutlinedInput-notchedOutline": {
                  // background: ` ${hexToRGBA(
                  //   theme.palette.customColors.orange,
                  //   0.2
                  // )}`,
                  boxShadow: ` 0 8px 32px 0 ${hexToRGBA(
                    theme.palette.customColors.orange,
                    0.12
                  )}`,
                  borderColor: orange,
                  borderWidth: "1px",
                  borderRadius: "35px",
                },
              },
              "& .MuiInputLabel-outlined": {
                color: "#ff914d",
              },
            }}
          />
        </Box>
      </Box>
      {/* filter end  */}
      <Paper sx={{ width: "100%", padding: 2 }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0, width: "100%" }}
        />
      </Paper>
    </>
  );
}
