import "../Home/Home.css";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <div className="main">
      <section className="home">
        <Grid>
          <Box>
            <Typography>Welcome, my name is</Typography>
            <Typography>Celin Castro</Typography>
          </Box>
          <Box></Box>
        </Grid>
      </section>
    </div>
  );
}
