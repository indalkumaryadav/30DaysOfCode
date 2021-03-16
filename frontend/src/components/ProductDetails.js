import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SERVER } from "../server";
import {
  Container,
  Paper,
  Grid,
  Button,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import NavBar from "../components/NavBar";
import MostViewedProduct from "./MostViewedProduct";
import { Link } from "react-router-dom";
function ProductDetails() {
  const { id } = useParams();

  const [allproduct, setAllProduct] = useState([]);

  const getProduct = (id) => {
    axios.get(`http://127.0.0.1:8000/api/all/products/${id}/`).then((data) => {
      setAllProduct(data.data);
    });
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <>
      <div>
        <CssBaseline />
        <NavBar />
      </div>
      <Container style={{ marginTop: 10 }}>
        <Paper>
          <Grid container>
            {allproduct.map((item) => {
              return (
                <Grid item md={6}>
                  <img src={item.image} height={500} />
                </Grid>
              );
            })}
            <Grid item md={6} sm={12} xs={6}>
              <h1>Content Details</h1>
              <p>
                lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam quisquam commodi quam debitis dolorem pariatur dolorum
                expedita soluta facilis ipsam optio delectus aspernatur, neque
                at excepturi consequatur temporibus id corporis.
              </p>
              <Link to="/add/cart">
                <Button color="secondary"> Add To Cart</Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
        <Paper>
          <MostViewedProduct />
        </Paper>
      </Container>
    </>
  );
}

export default ProductDetails;
