import React from "react";
import { Modal, Box, Typography } from "@mui/material";
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Gamemodal({ open, closeModal, getPoints }) {
  return (
    <Modal open={open} onClose={closeModal}>
      <Box style={modalStyle}>
        <Typography align="center" variant="h6" component="h2">
          Game Over
        </Typography>
        <Typography align="center" sx={{ mt: 2 }}>
          Good game. You have collected {getPoints()} points. Wanna try again?
          Check back again, features are comming soon ...
        </Typography>
      </Box>
    </Modal>
  );
}

export default React.memo(Gamemodal);
