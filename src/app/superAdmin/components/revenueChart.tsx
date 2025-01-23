import React from "react";
import { Box, useTheme } from "@mui/material";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    date: "Nov 12",
    events: 13,
  },
  {
    date: "Nov 13",
    events: 15,
  },
  {
    date: "Nov 14",
    events: 12,
  },
  {
    date: "Nov 15",
    events: 18,
  },
  {
    date: "Nov 16",
    events: 10,
  },
  {
    date: "Nov 17",
    events: 6,
  },
  {
    date: "Nov 18",
    events: 18,
  },
  {
    date: "Nov 19",
    events: 18,
  },
];
function RevenueChart() {
  var theme = useTheme();
  var orange = theme.palette.customColors.orange;
  return (
    <>
      {/* <Box sx={{ display: "flex", flexDirection: { md: "row", xs: "column" } }}>
        <Box sx={{ width: { md: "32%", xs: "95%" } }}></Box>
        <Box sx={{ width: { md: "32%", xs: "95%" } }}></Box>
        <Box sx={{ width: { md: "32%", xs: "95%" } }}></Box>
      </Box> */}

      {/* Chart start  */}
      <Box sx={{ marginTop: "3%", overflow: "hidden" }}>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="events" stroke={orange}></Line>
            {/* <CartesianGrid/> */}
            <Tooltip />
            <XAxis dataKey="date" interval={"preserveStartEnd"} />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </Box>
      {/* chart end  */}
    </>
  );
}

export default RevenueChart;
