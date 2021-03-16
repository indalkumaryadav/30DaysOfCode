import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import About from "../pages/About";
function Footer() {
  return (
    <footer>
      <Container>
        <Paper p={3}>
          <Grid container align="center">
            <Grid item sm={3} xs={6} md={2} lg={2}>
              <Typography variant="h5">ABOUT</Typography>
              <Typography variant="h6">About Us</Typography>
              <Typography variant="h6">Contact Us</Typography>
              <Typography variant="h6">Contact Us</Typography>
              <Typography variant="h6">Contact Us</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography variant="h5">POLICY</Typography>
              <Typography variant="h6">Paymets</Typography>
              <Typography variant="h6">Shipments</Typography>
              <Typography variant="h6">FAQs</Typography>
              <Typography variant="h6">FAQs</Typography>
              <Typography variant="h6">FAQs</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography variant="h5">SOCIAL</Typography>
              <Typography variant="h6">FaceBook</Typography>
              <Typography variant="h6">Instagram</Typography>
              <Typography variant="h6">Twitter</Typography>
              <Typography variant="h6">Twitter</Typography>
              <Typography variant="h6">Twitter</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper style={{ padding: 10 }}>
          <Typography variant="h5" align="center">
            Muskan Butik Garment
          </Typography>
          <Typography component="p" align="center">
            @2018 All right reserved
          </Typography>
        </Paper>
      </Container>
    </footer>
  );
}

export default Footer;
