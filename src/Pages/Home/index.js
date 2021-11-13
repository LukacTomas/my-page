import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Seo } from "Seo";
import { useLanguage } from "Hooks";
import { useData } from "./config";
import { Jobs } from "./Jobs";
import { LearnMore } from "./Learnmore";
import Rocket from "./Rocket";
import Moon from "./Moon";
import RocketAnimation from "./Animation";

export const Home = () => {
  const lang = useLanguage();
  const data = useData(lang);
  const { page } = data;

  return (
    <div>
      <Seo seo={data.helmet} />
      <RocketAnimation />
      <Grid
        sx={{ flexGrow: 1, my: "2vh", px: "2vw" }}
        direction="row"
        justifyContent="space-between"
        alignItems="top"
        container
        spacing={12}
      >
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              margin: "10vh auto",
              maxWidth: "300px",
            }}
          >
            <Moon />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxWidth: "450px",
              zIndex: 2,
              margin: { xs: "0 auto", md: 0 },
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              style={{ textShadow: "0 0 15px #bc7754" }}
            >
              {page.name}
            </Typography>
            <Typography variant="h3" component="h1">
              <Jobs jobs={page.jobs} />
            </Typography>
          </Box>
          <Box
            sx={{
              justifyContent: "flex-end",
              margin: "5vh auto",
              maxWidth: "500px",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "justify" }}
              style={{ zIndex: 6, textShadow: "0 0 5px #fff" }}
            >
              {page.text}
              <LearnMore ButtonText={page.callToAction} />
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <Rocket popupText={page.popUpText} />
      </Box>
    </div>
  );
};
