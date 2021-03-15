import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SERVER } from "../server";
import { Container, Paper, Grid, Button, Typography } from "@material-ui/core";

function ProductDetails() {
  const { id } = useParams();

  const [allproduct, setAllProduct] = useState([]);

  const getProduct = (id) => {
    axios.get(`http://127.0.0.1:8000/api/all/products/5/`).then((data) => {
      console.log(data.data);
      setAllProduct(data.data);
    });
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <Container>
      <Paper>
        <Typography>Product's Details {id}</Typography>
      </Paper>
    </Container>
  );
}

export default ProductDetails;
