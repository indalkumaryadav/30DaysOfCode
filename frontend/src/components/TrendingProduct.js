import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER } from "../server";
import HeadLine from "./common/HeadLine";
import {
  Grid,
  Box,
  Card,
  Typography,
  CardHeader,
  CardMedia,
} from "@material-ui/core";

function TrendingProduct() {
  const [trendingPost, setTrendingPost] = useState([]);

  function getTrendingProduct() {
    axios
      .get(SERVER + "trending/products/")
      .then((data) => setTrendingPost(data.data));
  }
  useEffect(() => {
    getTrendingProduct();
  }, []);
  return (
    <>
      <div>
        <HeadLine title="Trending" subtitle="Products" />
      </div>
      <div style={{ display: "flex" }}>
        {trendingPost.map((item) => {
          return (
            <Grid md={3}>
              <Box style={{ margin: 4 }}>
                <Card>
                  <Typography>Undal</Typography>
                  <CardMedia image={item.product.image} title="Paella dish" />
                </Card>
              </Box>
            </Grid>
          );
        })}
      </div>
    </>
  );
}

export default TrendingProduct;
