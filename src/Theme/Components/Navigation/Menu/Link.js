import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/system";

const StyledLink = styled(RouterLink)(({ theme }) => ({
  borderRadius: "2rem",
  color: theme.palette.primary.main,
  height: 48,
  lineHeight: "48px",
  fontSize: "1.5rem",
  margin: "2vw",
  padding: "15px 25px",
  textDecoration: "none",
  transition: "all 300ms",

  "&:hover": {
    boxShadow: `0 0 15px ${theme.palette.primary.hover}`,
    color: theme.palette.primary.hover,
    textShadow: `0 0 5px ${theme.palette.primary.hover}`,
  },
}));

export const Link = ({ id, to, text }) => {
  return (
    <StyledLink id={id} to={to}>
      {text}
    </StyledLink>
  );
};
