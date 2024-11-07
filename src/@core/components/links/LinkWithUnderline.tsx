import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

type LinkWithUnderlineProps = {
  link: string;
  linkTitle: string;
  target?: "_blank" | "_self";
};

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: "underline",
  color: `${theme.palette.primary.main} !important`,
}));

const LinkWithUnderline = ({
  link,
  linkTitle,
  target = "_self",
}: LinkWithUnderlineProps) => {
  return (
    <Typography component={LinkStyled} href={link} target={target}>
      {linkTitle}
    </Typography>
  );
};

export default LinkWithUnderline;
