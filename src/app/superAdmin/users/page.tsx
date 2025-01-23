"use client";
import React from "react";
import UserList from "../users/UserList";
import { Box, Typography, useTheme } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useRouter } from "next/navigation";
function Page() {
  var theme = useTheme();
  var router = useRouter();
  var orange = theme.palette.customColors.orange;
  return (
    <>
      <Box sx={{ width: { md: "85%", xs: "95%" }, margin: "0 auto" }}>
        <Box
          sx={{ margin: "3% 0", display: "flex", alignItems: "center", gap: 2 }}
        >
          <ArrowCircleLeftIcon
            onClick={() => router.back()}
            sx={{ cursor: "pointer", fontSize: "55px", color: orange }}
          />
          <Typography variant="h3">Total Users</Typography>
        </Box>
        <UserList />
      </Box>
    </>
  );
}

export default Page;
