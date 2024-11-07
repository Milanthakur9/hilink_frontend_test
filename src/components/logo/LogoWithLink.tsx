import Image from "next/image";
import Link from "next/link";
import React from "react";
import svgLogo from "@/assets/branding/HL_Clean_Transparent.svg";

interface LogoWithLinkProps {
  logoHeight?: string;
  logoWidth?: string;
  link?: string;
}

const LogoWithLink = (props: LogoWithLinkProps) => {
  const { link = "/", logoHeight = "28px", logoWidth = "85px" } = props;

  return (
    <Link href={link} style={{ display: "flex", alignItems: "center" }}>
      <Image
        style={{ width: logoWidth, height: logoHeight }}
        alt="logo"
        src={svgLogo}
      />
    </Link>
  );
};

export default LogoWithLink;
