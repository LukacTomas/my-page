import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { LanguageMenu } from "./Language";
import { Menu } from "./Menu";

export const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ minHeight: "100px" }}
        elevation={0}
        position="static"
        color="transparent"
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <LanguageMenu />
          </Box>
          <Box sx={{ my: 7 }}>
            <Menu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
