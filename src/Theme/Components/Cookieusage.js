import React, { useState, useEffect, useRef } from "react";
import { Button, Snackbar, Slide } from "@mui/material/";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

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

    const waitForUnLoad = setTimeout(() => {
      setSnackOpen(false);
    }, 10000);

    return () => {
      clearTimeout(waitForLoad);
      clearTimeout(waitForUnLoad);
    };
  }, []);

  const handleSnackClose = () => setSnackOpen(false);

  const action = (
    <Button color="primary" size="small" onClick={handleSnackClose}>
      OK
    </Button>
  );

  return (
    <Snackbar
      action={action}
      open={snackOpen}
      onClose={handleSnackClose}
      TransitionComponent={TransitionUp}
      message="I love snacks"
      key={"TransitionUp"}
    />
  );
};
