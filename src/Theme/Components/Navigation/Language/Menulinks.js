import React from "react";
import {MenuItem, Link} from "@mui/material/";

import { styled } from "@mui/system";
import { useLanguage, useCurrentPage } from "Hooks";

const MyLink = styled(Link)({
  color: "white",
  fontSize: "1rem",
  padding: "0 5px",
  margin: "0",
  textDecoration: "none",
});

export default function Menulinks({ handleClose }) {
  const language = useLanguage();
  const page = useCurrentPage();

  return (
    <>
      <MenuItem disabled={language === "sk"} onClick={handleClose}>
        <MyLink href={`/sk/${page}`}>SK</MyLink>
      </MenuItem>
      <MenuItem disabled={language === "en"} onClick={handleClose}>
        <MyLink href={`/en/${page}`}>EN</MyLink>
      </MenuItem>
    </>
  );
}
