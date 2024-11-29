"use client";
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import SettingHeader from "../settings/SettingHeader";
import UncontrolledRte from "@/components/richTextEditor/UncontrolledRte";

function Page() {
  const theme = useTheme();
  const router = useRouter();
  const white = theme.palette?.customColors.primaryWhite;
  return (
    <div>
      <Box sx={{ width: { md: "80%", xs: "95%" }, margin: "0 auto" }}>
        <SettingHeader />
        <Typography
          onClick={() => router.back()}
          sx={{
            textDecoration: `underline solid ${white}`,
            margin: "20px 0px",
            "&:hover": { cursor: "pointer" },
          }}
        >
          ← Back to Settings
        </Typography>

        <Typography sx={{ margin: "2% 0" }}>Event Terms of Service</Typography>

        <UncontrolledRte />
      </Box>
    </div>
  );
}

export default Page;
