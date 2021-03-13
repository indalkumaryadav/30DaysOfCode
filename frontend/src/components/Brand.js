import React, { useState, useEffect } from "react";
import { SERVER } from "../server";
import axios from "axios";
import HeadLine from "./common/HeadLine";

function Brand() {
  const [brand, setBrand] = useState([]);
  function getAllBrand() {
    axios.get(SERVER + "brand/").then((data) => setBrand(data.data));
  }
  useEffect(() => {
    getAllBrand();
  }, []);
  return (
    <>
      <div>
        <HeadLine title="All" subtitle="Brand" />
      </div>
      <div style={{ display: "flex" }}>
        {brand.map((item) => {
          return (
            <div>
              <h1>{item.title} dd</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Brand;
