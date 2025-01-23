import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { FitScreen } from "@mui/icons-material";

const columns: GridColDef[] = [
  // {
  //   field: "id",
  //   headerName: "Order Id",
  //   flex: 1,
  //   headerAlign: "center",
  //   align: "center",
  // },
  {
    field: "userType",
    headerName: "user Type",
    flex: 1,
    headerAlign: "center",
    minWidth: 150,
    align: "center",
  },
  {
    field: "CustomerName",
    headerName: "user Name",
    flex: 1,
    minWidth: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "eventName",
    headerName: "Event Name",
    type: "number",
    minWidth: 150,
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "organizationName",
    headerName: "organization Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    minWidth: 150,
    headerAlign: "center",
    align: "center",
  },
];

const rows = [
  {
    id: 1,
    userType: "Creator",
    CustomerName: "Snow",
    eventName: "Holiday Party",
    field: 35,
    organizationName: "TBG",
  },
  {
    id: 2,
    userType: "Attendee",
    CustomerName: "Lannister",
    eventName: "Night Party",
    field: 42,
    organizationName: "XYZ",
  },
  {
    id: 3,
    userType: "Creator",
    CustomerName: "Lannister",
    eventName: "Sunday Party",
    field: 45,
    organizationName: "LRN",
  },
  {
    id: 4,
    userType: "Creator",
    CustomerName: "Stark",
    eventName: "Late Night Party",
    field: 16,
    organizationName: "ORG",
  },
  {
    id: 5,
    userType: "Attendee",
    CustomerName: "Targaryen",
    eventName: "Weekend Party",
    field: null,
    organizationName: "MT",
  },
  {
    id: 6,
    userType: "Attendee",
    CustomerName: "Melisandre",
    eventName: "Annual Party",
    field: 150,
    organizationName: "RE",
  },
  {
    id: 7,
    userType: "Creator",
    CustomerName: "Clifford",
    eventName: "Birthday Party",
    field: 44,
    organizationName: "I-11",
  },
  {
    id: 8,
    userType: "Creator",
    CustomerName: "Frances",
    eventName: "Bachelor Party",
    field: 36,
    organizationName: "E8",
  },
  {
    id: 9,
    userType: "Attendee",
    CustomerName: "Roxie",
    eventName: "Party",
    field: 65,
    organizationName: "TRP",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
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
