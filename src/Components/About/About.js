import "../About/About.css";
import React from "react";
import { Box } from "@mui/material";

export default function About() {
  return (
    <div className="main">
      <section className="about">
        <Box>
          <h1 id="intro">Who I Am</h1>
          <span class="wave">👋</span>
          <p className="aboutMe">
            Hello there, I'm Celin, a web developer and seasoned sales
            professional. What truly ignites my passion is the act of creating
            and building, whether it's in the realm of coding or the joy of
            building new relationships and collaborating. I pride myself on
            being a dedicated problem solver and a closer in the world of sales.
            When I'm not immersed in work, you'll often find me hiking in the
            great outdoors or online gaming sessions with my friends. Positivity
            is the compass that keeps me moving forward, guiding me through
            every endeavor.
          </p>
        </Box>
      </section>
    </div>
  );
}
