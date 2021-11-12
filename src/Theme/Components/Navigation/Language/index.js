import * as React from "react";

import Language from "@mui/icons-material/Language";
import MenuLinks from "./Menulinks";

import { IconButton, Menu } from "@mui/material";
import { styled } from "@mui/system";

const MyIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: "2rem",
  color: theme.palette.primary.main,
  boxShadow: `0 0 15px ${theme.palette.primary.hover}`,
  textDecoration: "none",
  transition: "all 300ms",

  "&:hover": {
    boxShadow: `0 0 25px ${theme.palette.primary.hover}`,
    color: theme.palette.primary.hover,
    textShadow: `0 0 5px ${theme.palette.primary.hover}`,
  },
}));

export default function LanguageMenu() {
  const [menuEl, setMenuEl] = React.useState(null);
  const open = Boolean(menuEl);

  const handleClick = (event) => setMenuEl(event.currentTarget);
  const handleClose = () => setMenuEl(null);

  return (
    <>
      <MyIconButton
        id="languageButton"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Language />
      </MyIconButton>
      <Menu anchorEl={menuEl} open={open} onClose={handleClose}>
        <MenuLinks handleClose={handleClose} />
      </Menu>
    </>
  );
}
