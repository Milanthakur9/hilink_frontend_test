// import Image from "next/image";
import React from "react";
// import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Image from "next/image";

interface CreatorProfileProps {
  width?: number;
  height?: number;
  src: string;
  alt: string;
}

const CreatorProfile = ({ src, width, height, alt }: CreatorProfileProps) => {
  return (
    <Box
      sx={{
        borderRadius: "100px",
        overflow: "hidden",
        width: width,
        height: height,
        "& img": {
          objectFit: "cover",
          height: "100%",
          width: "100%",
        },
      }}
    >
      <Image src={src} alt={alt} height={20} width={20} />
    </Box>
  );
};

export default CreatorProfile;
