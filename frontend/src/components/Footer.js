import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import About from "../pages/About";
function Footer() {
  return (
    <footer style={{ marginTop: 10 }}>
      <Container>
        <Paper style={{ padding: 10 }}>
          <Typography variant="h5" align="center">
            Muskan Butik Garment
          </Typography>
          <Typography component="p" align="center">
            @2021 All right reserved
          </Typography>
        </Paper>
      </Container>
    </footer>
  );
}

export default Footer;
