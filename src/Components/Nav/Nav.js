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
                Celin Castro
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
    </div>
  );
}
