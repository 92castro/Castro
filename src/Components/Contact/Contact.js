import "../Contact/Contact.css";
import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <div className="main">
      <section className="contact">
        <Typography>CONNECT WITH ME</Typography>
        <Grid className="socials">
          <Button
            style={{ transform: "scale(3)" }}
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/celin-castro/"
            target="_blank"
          />
          <Button
            style={{ transform: "scale(3)" }}
            startIcon={<GitHubIcon />}
            href="https://github.com/92castro"
            target="_blank"
          />
          <Button
            style={{ transform: "scale(3)" }}
            startIcon={<EmailIcon />}
            href="mailto:celin92castro@gmail.com"
            target="_blank"
          />
        </Grid>
      </section>
    </div>
  );
}
