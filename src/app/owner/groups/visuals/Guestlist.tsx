import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import GuestImage1 from "../../../../assets/background_patterns/guest1.webp";
import GuestImage2 from "../../../../assets/background_patterns/guest2.webp";
import GuestImage3 from "../../../../assets/background_patterns/guest3.webp";

function Guestlist() {
  var theme = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const handleOpenVisible = () => {
    setIsVisible(true);
  };
  const handleCloseVisible = () => {
    setIsVisible(false);
  };
  var white = theme.palette.customColors.primaryWhite;
  const Guestlist = [
    {
      id: 1,
      image: GuestImage1,
    },
    {
      id: 2,
      image: GuestImage2,
    },
    {
      id: 3,
      image: GuestImage3,
    },
  ];
  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: "1%" }}>
        Guestlist Preview
      </Typography>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          // background: "#ff914d",
          background: `${hexToRGBA(
            theme.palette.customColors.primaryDark1,
            0.2
          )}`,
          boxShadow: `0 8px 32px 0 ${hexToRGBA(
            theme.palette.customColors.orange,
            0.22
          )}`,
          border: `1px solid ${theme.palette.customColors.primaryWhite}`,
          borderRadius: "15px",
          padding: "2%",
        }}
      >
        <Box sx={{ width: "fit-content" }}>
          <Box sx={{ display: "flex", width: "fit-content", margin: "0 auto" }}>
            {Guestlist.map((item) => {
              return (
                <Box
                  key={item.id}
                  sx={{
                    width: "80px",
                    height: "80px",
                    marginLeft: "-20px",
                    background: white,
                    borderRadius: "50%",
                  }}
                >
                  <Image
                    src={item.image}
                    style={{ borderRadius: "50%", padding: "5px" }}
                    alt=""
                    height={80}
                    width={80}
                  />
                </Box>
              );
            })}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", width: "100%" }}
            >
              David and{" "}
              {!isVisible && (
                <span
                  style={{ transform: isVisible ? "scale(1)" : "scale(0)" }}
                >
                  10 {"  "}
                </span>
              )}
              others going
            </Typography>
            <Box>
              {!isVisible && (
                <VisibilityIcon
                  onClick={handleOpenVisible}
                  sx={{
                    color: theme.palette.customColors.primaryWhite,
                    fontSize: "25px",
                    "&:hover": { cursor: "pointer" },
                  }}
                />
              )}

              {isVisible && (
                <VisibilityOffIcon
                  onClick={handleCloseVisible}
                  sx={{
                    color: theme.palette.customColors.primaryWhite,
                    "&:hover": { cursor: "pointer" },
                  }}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Guestlist;
