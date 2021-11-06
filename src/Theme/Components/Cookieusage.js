import React, { useState, useEffect, useRef } from "react";
import { Snackbar, Slide } from "@mui/material/";
import MuiAlert from "@mui/material/Alert";

const Transitionup = (props) => {
  return <Slide {...props} direction="up" />;
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Cookieusage = () => {
  const [snackOpen, setSnackOpen] = useState(false);
  const firstLoadRef = useRef(true);

  useEffect(() => {
    const firstLoad = firstLoadRef.current;
    // check if first load
    if (firstLoad) firstLoadRef.current = false;
    if (!firstLoad) return;

    const waitForLoad = setTimeout(() => {
      setSnackOpen(true);
    }, 1500);

    return () => {
      clearTimeout(waitForLoad);
    };
  }, []);

  const handleSnackClose = () => setSnackOpen(false);

  return (
    <Snackbar
      open={snackOpen}
      onClose={handleSnackClose}
      TransitionComponent={Transitionup}
      key={"Transitionup"}
      autoHideDuration={10000}
    >
      <Alert onClose={handleSnackClose} severity="info" sx={{ width: "100%" }}>
        By continueing you agree with cookies!
      </Alert>
    </Snackbar>
  );
};
