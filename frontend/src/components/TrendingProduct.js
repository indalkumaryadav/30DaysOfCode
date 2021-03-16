import React, { useState, useEffect } from "react";
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

function TrendingProduct() {
  const [trendingProduct, setTrendingProduct] = useState([]);

  function getTrendingProduct() {
    axios.get(SERVER + "trending/products/").then((data) => {
      setTrendingProduct(data.data);
    });
  }
  useEffect(() => {
    getTrendingProduct();
  }, []);
  return (
    <>
      <div>
        <HeadLine title="Trending" subtitle="Products" />
      </div>

      <Grid container spacing={3}>
        {trendingProduct.map((item) => {
          return (
            <Grid
              item
              sm={3}
              xs={6}
              md={2}
              lg={2}
              style={{ cursor: "pointer" }}
            >
              <Card>
                <Link to={`/product/details/${item.id}`}>
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

export default TrendingProduct;
