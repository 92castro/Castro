import "../About/About.css";
import React from "react";
import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <div className="main">
      <section className="about">
        <Box>
          <p className="aboutMe">
            I'm a web developer and sales professional who values collaboration
            and positivity. I'm dedicated to creating user-friendly websites and
            believe in the strength of teamwork. When I'm not coding, I enjoy
            hiking and playing video games. With a friendly and optimistic
            outlook, I'm always eager to connect, share ideas, and make the most
            of every opportunity.
          </p>
        </Box>
      </section>
    </div>
  );
}
