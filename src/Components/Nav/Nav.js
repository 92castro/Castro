import "../Nav/Nav.css";
import { React } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Grid, Box, Button } from "@mui/material";

export default function Nav() {
  return (
    <div class="sidenav">
      <Box>
        <a href="#home">Celin Castro</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </Box>
      <Grid class="social">
        <Grid>
          <Button
            style={{ transform: "scale(2)" }}
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/celin-castro/"
            target="_blank"
          />
          <Button
            style={{ transform: "scale(2)" }}
            startIcon={<GitHubIcon />}
            href="https://github.com/92castro"
            target="_blank"
          />
          <Button
            style={{ transform: "scale(2)" }}
            startIcon={<EmailIcon />}
            href="mailto:celin92castro@gmail.com"
            target="_blank"
          />
        </Grid>
      </Grid>
    </div>
  );
}
