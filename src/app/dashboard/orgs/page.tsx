"use client";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import CreatorFooter from "@/app/creator/events/dashboard/components/CreatorFooter";
import CreatorHeader from "@/app/creator/events/dashboard/components/CreatorHeader";
import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
// import axios from "axios";

// icons
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/interceptor/axiosInterceptor";

function Page() {
  var theme = useTheme();
  var router = useRouter();
  var orange = theme.palette.customColors.orange;
  var dark1 = theme.palette.customColors.primaryDark1;

  const [organizations, setOrganizations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrganizations = async () => {
    try {
      setIsLoading(true); // Indicate loading state
      const response = await axiosInstance.get("/v1/organization/list");
      if (response.data.success) {
        setOrganizations(response.data.data); // Assuming the list of organizations is in `data.data`
      } else {
        setError(response.data.message || "Failed to fetch organizations.");
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false); // End loading state
    }
  };

  useEffect(() => {
    fetchOrganizations();
  }, []);

  return (
    <>
      <CreatorHeader />
      <Box
        sx={{
          width: { md: "90%", xs: "95%" },
          margin: "4% auto",
          paddingBottom: "10%",
        }}
      >
        <Typography variant="h1">My Organizations</Typography>

        <Box sx={{ width: "100%", display: "flex", gap: 4, flexWrap: "wrap" }}>
          {isLoading ? (
            <Typography>Loading...</Typography>
          ) : error ? (
            <Typography color="error">{error}</Typography>
          ) : (
            organizations.map((org) => (
              <Box
                key={org.id}
                onClick={() => router.push(`/organization/`)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "200px",
                  marginTop: "50px",
                  width: { md: "30%", xs: "100%" },
                  borderRadius: "20px",
                  padding: "30px",
                  cursor: "pointer",
                  background: `repeating-linear-gradient(${hexToRGBA(
                    dark1,
                    0.9
                  )},${hexToRGBA(dark1, 0.9)})`,
                  boxShadow: `${hexToRGBA(
                    orange,
                    0.6
                  )} 0px 10px 20px -10px, ${hexToRGBA(
                    orange,
                    0.6
                  )} 0px 30px 20px -45px, ${hexToRGBA(
                    orange,
                    0.6
                  )}  0px -2px 6px 0px inset`,
                }}
              >
                <Box>
                  <Typography variant="h3">{org.name}</Typography>
                  <Typography>{org.role}</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <Typography>Manage Organization</Typography>{" "}
                  <DoubleArrowIcon sx={{ color: orange, cursor: "pointer" }} />
                </Box>
              </Box>
            ))
          )}
          <Box
            onClick={() => router.push(`/organization/create`)}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "200px",
              marginTop: "50px",
              width: { md: "30%", xs: "100%" },
              borderRadius: "20px",
              padding: "30px",
              cursor: "pointer",
              background: `repeating-linear-gradient(${hexToRGBA(
                dark1,
                0.9
              )},${hexToRGBA(dark1, 0.9)})`,
              boxShadow: `${hexToRGBA(
                orange,
                0.6
              )} 0px 10px 20px -10px, ${hexToRGBA(
                orange,
                0.6
              )} 0px 30px 20px -45px, ${hexToRGBA(
                orange,
                0.6
              )}  0px -2px 6px 0px inset`,
            }}
          >
            <Box>
              <Typography variant="h3">+ New Organization</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <Typography>Create Organization</Typography>{" "}
              <DoubleArrowIcon sx={{ color: orange, cursor: "pointer" }} />
            </Box>
          </Box>
        </Box>
      </Box>
      <CreatorFooter />
    </>
  );
}

export default Page;
