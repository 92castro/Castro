import "../Home/Home.css";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <div className="main">
      <section className="home">
        <Grid>
          <Box className="intro">
            <Typography>Welcome, my name is</Typography>
            <div class="flyinTxtCont">
              <h1 class="flyIn lineOne">Celin Castro</h1>
              <h4>An Intrepid Human Being</h4>
            </div>
          </Box>
        </Grid>
      </section>
    </div>
  );
}
