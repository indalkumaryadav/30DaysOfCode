import React, { useState, useEffect } from "react";
import { SERVER } from "../server";
import axios from "axios";
import HeadLine from "./common/HeadLine";
import {
  Card,
  Grid,
  Button,
  Typography,
  CardContent,
  CardActions,
  CardMedia,
} from "@material-ui/core";

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
      <Grid container spacing={3}>
        {brand.map((item) => {
          return (
            <Grid
              item
              sm={3}
              xs={6}
              md={2}
              lg={2}
              style={{ marginTop: 10, cursor: "pointer" }}
            >
              <Card>
                <CardContent>
                  <CardMedia image={item.logo} style={{ height: 120 }} />

                  <Typography align="center" variant="h5">
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
export default Brand;
