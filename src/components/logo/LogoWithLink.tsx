import Image from "next/image";
import Link from "next/link";
import React from "react";
import svgLogo from "@/assets/branding/HL_Clean_Transparent.svg";
import whiteLogo from "@/assets/branding/HL_Clean_Transparent_white.svg";

interface LogoWithLinkProps {
  logoHeight?: string;
  logoWidth?: string;
  link?: string;
  logoColor?: "orange" | "white";
}

const LogoWithLink = (props: LogoWithLinkProps) => {
  const {
    link = "/",
    logoHeight = "28px",
    logoWidth = "85px",
    logoColor = "orange",
  } = props;

  return (
    <Link
      href={link}
      style={{
        display: "table",
      }}
    >
      <Image
        style={{ width: logoWidth, height: logoHeight }}
        alt="logo"
        src={logoColor === "orange" ? svgLogo : whiteLogo}
      />
    </Link>
  );
};

export default LogoWithLink;
