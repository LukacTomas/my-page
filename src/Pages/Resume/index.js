import React, { Suspense } from "react";
import { Grid } from "@mui/material";
import { Seo } from "Seo";
import { useLanguage } from "Hooks";
import { useData } from "./config";
import Loading from "Shared/Loading";
const LeftPanel = React.lazy(() => import("./Leftpanel"));
const RightPanel = React.lazy(() => import("./Rightpanel"));

//import { LeftPanel } from "./Leftpanel";
//import { RightPanel } from "./Rightpanel";

export default function Resume() {
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
          <Suspense fallback={<Loading />}>
            <RightPanel data={data} />
          </Suspense>
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <Suspense fallback={<Loading />}>
            <LeftPanel />
          </Suspense>
        </Grid>
      </Grid>
    </>
  );
}
