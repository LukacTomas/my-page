import React from "react";
import { Grid } from "@mui/material";
import { useLanguage } from "Hooks";
import { useData } from "./config";

import { LeftPanel } from "./Leftpanel";
import RightPanel from "./Rightpanel";
import { Seo } from "Seo";

const Resume = () => {
  const lang = useLanguage();

  // load data based on current language
  const data = useData(lang);

  return (
    <>
      <Seo seo={data.helmet} />
      <Grid
        container
        spacing={2}
        direction="row-reverse"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={6} lg={4}>
          <RightPanel data={data} />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <LeftPanel />
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
