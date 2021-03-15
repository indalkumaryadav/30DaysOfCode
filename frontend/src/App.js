import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { Switch, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import AddToCart from "./components/AddCart";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/product/details/:id" component={ProductDetails} exact />
      <Route path="/about" component={About} exact />
      <Route path="/add/cart" component={AddToCart} exact />
    </Switch>
  );
}

export default App;
