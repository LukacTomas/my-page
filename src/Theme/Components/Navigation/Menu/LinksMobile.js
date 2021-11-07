import React, { useEffect } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";
import { Drawer, Typography, Link as MuiLink } from "@mui/material";
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

const MyDrawer = styled(Drawer)(({ open }) => ({
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
  a: {
    position: "relative",
    height: "78px",
    textAlign: "center",
  },
}));

const Nav = styled("nav")(({ theme }) => ({
  boxShadow: `0 0 0.2em  ${theme.palette.primary.main}`,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  padding: "1.5em",
  position: "relative",
  top: "20vh",
  width: "100vw",
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
      <MyDrawer variant="persistent" anchor="right" open={open}>
        <Nav>
          <Typography align="center" variant="h4">
            🚀Tomas Lukac🚀
          </Typography>
          <Typography align="center" variant="h5">
            📫 lukactv@gmail.com
          </Typography>
          <Typography align="center" variant="h6">
            <MuiLink
              href="https://github.com/LukacTomas"
              color="inherit"
              underline="none"
              target="_blanck"
            >
              github.com/LukacTomas
            </MuiLink>
          </Typography>
          {pathsForCurrentLanguage.map((path) => (
            <Link
              key={path.route}
              id={path.id}
              to={path.route}
              text={`${path.icon} ${path.title}`}
            />
          ))}
        </Nav>
      </MyDrawer>
      <MyIconButton size="large" onClick={() => setOpen((state) => !state)}>
        {!open ? <MenuIcon /> : <CloseIcon />}
      </MyIconButton>
    </>
  );
};
