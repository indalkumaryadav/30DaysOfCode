import React, { useEffect, useState } from "react";
import axios from "axios";
import { SERVER } from "../server";
import HeadLine from "./common/HeadLine";
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

function Product() {
  const [allproduct, setAllProduct] = useState([]);
  const getProduct = () => {
    axios.get(SERVER + "all/products/").then((data) => {
      setAllProduct(data.data);
    });
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <HeadLine title="All" subtitle="Products" />

      <Grid container spacing={3}>
        {allproduct.map((item) => {
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
                <Link to={`/product/details/${item.id}`}>
                  <CardContent>
                    <CardMedia image={item.image} style={{ height: 250 }} />
                    <Typography align="center" variant="h5">
                      {item.title}
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

export default Product;
