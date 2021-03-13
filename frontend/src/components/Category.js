import React, { useState, useEffect } from "react";
import HeadLine from "../components/common/HeadLine";
import axios from "axios";
import { SERVER } from "../server";

function Category() {
  const [category, setCategory] = useState([]);

  function getCategory() {
    axios.get(SERVER + "categories/").then((data) => setCategory(data.data));
  }
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <HeadLine title="All" subtitle="Category" />
      <div style={{ display: "flex" }}>
        {category.map((item) => {
          return (
            <div
              style={{
                marginRight: 10,
              }}
            >
              <h1 key={item.id}>{item.title}</h1>
              <h3>Hello</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Category;
