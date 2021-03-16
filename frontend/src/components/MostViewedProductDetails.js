import React from "react";
import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";
import MostViewedProduct from "./MostViewedProduct";
function MostViewedProductDetails() {
  return (
    <>
      <Container>
        <Paper>
          <Typography>Most Viewed Product</Typography>
        </Paper>
      </Container>

      <MostViewedProduct />
    </>
  );
}

export default MostViewedProductDetails;
