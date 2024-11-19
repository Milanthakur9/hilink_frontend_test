import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

type CustomLinkProps = {
  linkTextColor?: string;
  link: string;
  linkTitle: string;
  target?: "_blank" | "_self";
};

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: `${theme.palette.customColors.primaryWhite} !important`,
}));

const CustomLink = ({ link, linkTitle, target = "_self" }: CustomLinkProps) => {
  return (
    <Typography component={LinkStyled} href={link} target={target}>
      {linkTitle}
    </Typography>
  );
};

export default CustomLink;
