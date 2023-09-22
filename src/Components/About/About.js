import "../About/About.css";
import React from "react";
import { Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <div className="main">
      <section className="about">
        <Grid>
          <Typography>
            I am Celin Castro, a proficient full-stack web developer with an
            extensive background in sales. My ability to fluently speak both
            Spanish and English has greatly facilitated effective communication
            and collaboration with diverse individuals. What distinguishes me is
            my unwavering resilience, adaptability, and influential abilities,
            which contribute to my success in the field.
          </Typography>
        </Grid>
      </section>
    </div>
  );
}
