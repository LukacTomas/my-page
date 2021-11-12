import React, { Suspense } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
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
            <Suspense fallback={<></>}>
              <LanguageMenu />
            </Suspense>
          </Box>
          <Box sx={{ my: 7 }}>
            <Suspense fallback={<></>}>
              <Menu />
            </Suspense>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
