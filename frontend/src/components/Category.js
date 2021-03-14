import React, { useState, useEffect } from "react";
import HeadLine from "../components/common/HeadLine";
import axios from "axios";
import { SERVER } from "../server";
import { Grid, Card, CardActionArea, Box, Typography } from "@material-ui/core";
import "./category.css";

function Category() {
  const [category, setCategory] = useState([]);

  function getCategory() {
    axios.get(SERVER + "categories/").then((data) => {
      setCategory(data.data);
    });
  }
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      {/* <HeadLine title="All" subtitle="Category" /> */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {category.map((item) => {
          return (
            <div
              className="category"
              style={{ marginRight: 10, cursor: "pointer" }}
            >
              <img
                src={item.image}
                alt=""
                width={60}
                height={60}
                style={{ margin: 0 }}
              />
              <h3 style={{ textAlign: "center" }}>Title</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Category;
