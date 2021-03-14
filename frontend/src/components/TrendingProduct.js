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
    axios.get(SERVER + "trending/products/").then((data) => {
      setTrendingPost(data.data);
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
      <div style={{ display: "flex" }}>
        {trendingPost.map((item) => {
          console.log(item);
          return (
            <div>
              <h3>{item.product.title}</h3>
              <img
                src={item.product.image}
                alt=""
                style={{
                  width: 150,
                  height: 150,
                  margin: 5,
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TrendingProduct;
