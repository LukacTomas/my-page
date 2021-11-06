import React from "react";
import { Grid } from "@mui/material";
import { useLanguage } from "Hooks";
import { useData } from "./config";

const Resume = () => {
  const lang = useLanguage();

  // load data based on current language
  const data = useData(lang);

  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row-reverse"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={6} lg={4}>
          LEFT
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          RIGHT
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
