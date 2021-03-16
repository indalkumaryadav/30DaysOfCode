import React, { useState, useEffect } from "react";
import HeadLine from "./common/HeadLine";
import axios from "axios";
import { SERVER } from "../server";
import {
  Card,
  Grid,
  Button,
  Typography,
  CardContent,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
function MostViewedProduct() {
  const [mvproduct, setMvProduct] = useState([]);
  function getData() {
    axios.get(SERVER + "product/view/").then((data) => {
      setMvProduct(data.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <HeadLine title="Most Viewed" subtitle="Products" />

      <Grid container spacing={3}>
        {mvproduct.map((item) => {
          return (
            <Grid
              item
              sm={3}
              xs={6}
              md={2}
              lg={2}
              style={{ marginTop: 10, cursor: "pointer" }}
              key={item.id}
            >
              <Card>
                <Link to="/most/viewed/product/details">
                  <CardContent>
                    <CardMedia
                      image={item.product.image}
                      style={{ height: 250 }}
                    />
                    <Typography align="center" variant="h5">
                      {item.product.title}
                    </Typography>
                  </CardContent>
                </Link>

                <Link to="/add/cart">
                  <CardActions style={{ padding: 0 }}>
                    <Button variant="contained" fullWidth>
                      Add To Cart <AddShoppingCartIcon />
                    </Button>
                  </CardActions>
                </Link>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default MostViewedProduct;
