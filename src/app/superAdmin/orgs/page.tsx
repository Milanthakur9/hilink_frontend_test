"use client";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import CreatorFooter from "@/app/creator/events/dashboard/components/CreatorFooter";
import CreatorHeader from "@/app/creator/events/dashboard/components/CreatorHeader";
import { Box, TextField, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
// import axios from "axios";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/interceptor/axiosInterceptor";

function Page() {
  const theme = useTheme();
  const router = useRouter();
  const orange = theme.palette.customColors.orange;
  const dark1 = theme.palette.customColors.primaryDark1;

  const [organizations, setOrganizations] = useState<any[]>([]);
  const [filteredOrganizations, setFilteredOrganizations] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>(""); // State for search input
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrganizations = async () => {
    try {
      setIsLoading(true); // Indicate loading state
      const response = await axiosInstance.get("/v1/organization/list");
      if (response.data.success) {
        const orgs = response.data.data;
        setOrganizations(orgs); // Set the organizations
        setFilteredOrganizations(orgs); // Initially set filtered list as the complete list
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);

    // Filter organizations based on search text
    const filtered = organizations.filter((org) =>
      org.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOrganizations(filtered);
  };

  return (
    <>
      {/* <CreatorHeader /> */}
      <Box
        sx={{
          width: { md: "80%", xs: "95%" },
          margin: "4% auto",
          // padding: "2%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            alignItems: { md: "center", xs: "flex-start" },
            gap: 3,
          }}
        >
          <Box>
            <Typography variant="h1">Organizations</Typography>
          </Box>
          <Box sx={{ width: { md: "60%", xs: "100%" } }}>
            <TextField
              autoComplete="off"
              id="outlined-basic"
              placeholder="Search Organization"
              variant="outlined"
              size="small"
              value={searchText}
              onChange={handleSearch} // Update state on change
              sx={{
                marginTop: "2% 0",
                backdropFilter: "blur( 4px )",
                width: "99%",
                "& .MuiOutlinedInput-root": {
                  color: orange,
                  "& .MuiOutlinedInput-notchedOutline": {
                    background: ` ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.2
                    )}`,
                    boxShadow: ` 0 8px 32px 0 ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.12
                    )}`,
                    borderColor: orange,
                    borderWidth: "1px",
                    borderRadius: "25px",
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#ff914d",
                },
              }}
            />
          </Box>
        </Box>

        <Box sx={{ width: "100%", display: "flex", gap: 4, flexWrap: "wrap" }}>
          {isLoading ? (
            <Typography>Loading...</Typography>
          ) : error ? (
            <Typography color="error">{error}</Typography>
          ) : filteredOrganizations.length > 0 ? (
            filteredOrganizations.map((org) => (
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
                    alignItems: "center",
                  }}
                >
                  <Typography>Manage Organization</Typography>{" "}
                  <DoubleArrowIcon sx={{ color: orange }} />
                </Box>
              </Box>
            ))
          ) : (
            <Typography>No organizations found.</Typography>
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
                alignItems: "center",
              }}
            >
              <Typography>Create Organization</Typography>{" "}
              <DoubleArrowIcon sx={{ color: orange }} />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <CreatorFooter /> */}
    </>
  );
}

export default Page;
