import "../Nav/Nav.css";
import { React } from "react";
import { Link } from "react-scroll";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Grid, Box, Button } from "@mui/material";

export default function Nav() {
  return (
    <div class="container">
      <Grid>
        <Box className="pages">
          <ul>
            <li>
              <Link to="home" smooth={true} duration={600}>
                Castro
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={600}>
                About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={600}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={600}>
                Contact
              </Link>
            </li>
          </ul>
        </Box>
      </Grid>

      <Grid class="social">
        <Button
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/celin-castro/"
          target="_blank"
        />
        <Button
          startIcon={<GitHubIcon />}
          href="https://github.com/92castro"
          target="_blank"
        />
        <Button
          startIcon={<EmailIcon />}
          href="mailto:celin92castro@gmail.com"
          target="_blank"
        />
      </Grid>
    </div>
  );
}
