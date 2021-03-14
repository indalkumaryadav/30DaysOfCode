import React, { useEffect, useState } from "react";
import axios from "axios";
import { SERVER } from "../server";
import HeadLine from "./common/HeadLine";

function Product() {
  const [allproduct, setAllProduct] = useState([]);
  const getProduct = () => {
    axios.get(SERVER + "products/").then((data) => {
      console.log(data.data);
      setAllProduct(data.data);
    });
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <HeadLine title="All" subtitle="Products" />
      <div>
        {allproduct.map((item) => {
          return (
            <div>
              <h1>{item.title}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
