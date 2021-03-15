import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";

function Footer() {
  return (
    <footer>
      <Container>
        <Paper>
          <Typography variant="h5" component="h3">
            Muskan Butik Garment
          </Typography>
          <Typography component="p">@2018 All right reserved</Typography>
        </Paper>
      </Container>
    </footer>
  );
}

export default Footer;
