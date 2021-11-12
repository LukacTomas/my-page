import React, { Suspense } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
//import Menu from "./Menu";
//import LanguageMenu from "./Language";
const LanguageMenu = React.lazy(() => import("./Language"));
const Menu = React.lazy(() => import("./Menu"));

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
            <Suspense fallback={<div>Loading...</div>}>
              <LanguageMenu />
            </Suspense>
          </Box>
          <Box sx={{ my: 7 }}>
            <Suspense fallback={<div>Loading...</div>}>
              <Menu />
            </Suspense>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
