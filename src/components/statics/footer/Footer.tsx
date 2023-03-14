import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet"></link>

function Footer() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Box className="box2">
          <div className="copyright">
            <Typography variant="subtitle2" gutterBottom translate="no">
              © 2023 Copyright | Esthelina Cake | Designed by Scarlet Martins
            </Typography>
          </div>
          <div className="social-icon-footer">
            <a href="https://www.instagram.com/esthelinacake/" target="blank">
              <InstagramIcon />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5511948673143&text=Oi,%20vim%20do%20Instagram%20e%20gostaria%20de%20fazer%20uma%20encomenda!%20"
              target="blank"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;
