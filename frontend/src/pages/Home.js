import React from "react";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import { Container } from "@material-ui/core";
import TrendingProduct from "../components/TrendingProduct";
import Category from "../components/Category";
import MostViewedProduct from "../components/MostViewedProduct";
import Brand from "../components/Brand";
import { CssBaseline } from "@material-ui/core";
import Product from "../components/Product";

function Home() {
  return (
    <>
      <CssBaseline />

      <NavBar />

      <Slider />

      <Container>
        <Category />
        <TrendingProduct />
        <Product />
        <MostViewedProduct />
        <Brand />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
