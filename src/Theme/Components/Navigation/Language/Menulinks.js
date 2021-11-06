import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { BrowserRouter, Link } from "react-router-dom";
import { styled } from "@mui/system";
import { useLanguage } from "Hooks";

const MyLink = styled(Link)({
  color: "white",
  fontSize: "1rem",
  padding: "0 5px",
  margin: "0",
  textDecoration: "none",
});

export default function Menulinks({ handleClose }) {
  const language = useLanguage();
  const page = "resume/";
  return (
    <BrowserRouter>
      <MenuItem disabled={language === "sk"} onClick={handleClose}>
        <MyLink to={`/sk/${page}`}>SK</MyLink>
      </MenuItem>
      <MenuItem disabled={language === "en"} onClick={handleClose}>
        <MyLink to={`/en/${page}`}>EN</MyLink>
      </MenuItem>
    </BrowserRouter>
  );
}
