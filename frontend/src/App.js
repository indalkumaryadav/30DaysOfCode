import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { Switch, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import AddToCart from "./components/AddCart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MostViewedProductDetail from "./components/MostViewedProductDetails";
import CategoryProduct from "./components/CategoryProduct";
function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/product/details/:id" component={ProductDetails} exact />
      <Route path="/about" component={About} exact />
      <Route path="/add/cart" component={AddToCart} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/signup" component={SignUp} exact />
      <Route path="/category/product/:id" component={CategoryProduct} exact />
      <Route
        path="/most/viewed/product/details"
        component={MostViewedProductDetail}
        exact
      />
    </Switch>
  );
}

export default App;
