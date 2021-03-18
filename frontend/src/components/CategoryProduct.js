import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import HeadLine from "../components/common/HeadLine";
import axios from "axios";
import { SERVER } from "../server";
import { Link } from "react-router-dom";
import AllProduct from "./common/AllProduct";
import SingleProduct from "./common/SingleProduct";
import {
  Card,
  Grid,
  Button,
  Typography,
  CardContent,
  CardActions,
  CardMedia,
  Container,
  Box,
  CssBaseline,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import NavBar from "./NavBar";

function CategoryProduct() {
  const { id } = useParams();
  const [categoryProducts, setCategoryProduct] = useState([]);
  function getCategory(id) {
    axios.get(`${SERVER}singlecategoris/${id}`).then((data) => {
      console.log(data);
      setCategoryProduct(data.data);
    });
  }
  useEffect(() => {
    getCategory(id);
  }, []);

  return (
    <>
      <div>
        <NavBar />
        <CssBaseline />
      </div>
      <Container>
        <Grid container spacing={3}>
          {categoryProducts.map((item) => {
            return (
              <Grid container direction="column">
                {categoryProducts.map((item, i) => (
                  <Box key={i} container="div">
                    <>
                      <HeadLine title={item?.title} subtitle="Products" />
                      <AllProduct
                        products={item?.products}
                        categorytitle={item?.title}
                        categoryid={item?.id}
                      />
                    </>
                  </Box>
                ))}
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default CategoryProduct;
