import React, { useEffect } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";
import { Drawer } from "@mui/material";
import { useLocation } from "react-router-dom";

import { paths } from "Config";
import { useLanguage } from "Hooks";

import { Link } from "./Link";

const MyIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: "2rem",
  margin: "0 1em",
  color: theme.palette.primary.main,
  boxShadow: `0 0 15px ${theme.palette.primary.hover}`,
  textDecoration: "none",
  transition: "all 300ms",
  zIndex: 1000,

  "&:hover": {
    boxShadow: `0 0 25px ${theme.palette.primary.hover}`,
    color: theme.palette.primary.hover,
    textShadow: `0 0 5px ${theme.palette.primary.hover}`,
  },
}));

export const LinksMobile = () => {
  const [open, setOpen] = React.useState(false);
  const lang = useLanguage();
  const pathsForCurrentLanguage = Object.values(paths[lang]);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <Drawer
        sx={{
          position: "fixed",
          overflowY: "hidden",
          top: 0,
          right: 0,

          width: "100vw",
          maxHeight: "100vh",
          "& .MuiDrawer-paper": {
            width: "100vw",
          },
          zIndex: `${!open ? -1 : 999}`,
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        {pathsForCurrentLanguage.map((path) => (
          <Link
            key={path.route}
            id={path.id}
            to={path.route}
            text={`${path.icon} ${path.title}`}
            onClick={() => setOpen((state) => !state)}
          />
        ))}
      </Drawer>
      <MyIconButton size="large" onClick={() => setOpen((state) => !state)}>
        {!open ? <MenuIcon /> : <CloseIcon />}
      </MyIconButton>
    </>
  );
};
