import React, { useState, useEffect } from "react";
import HeadLine from "../components/common/HeadLine";
import axios from "axios";
import { SERVER } from "../server";
import { Link } from "react-router-dom";
import {
  Card,
  Grid,
  Button,
  Typography,
  CardContent,
  CardActions,
  CardMedia,
  Container,
  Box,
} from "@material-ui/core";

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
      <HeadLine title="ALl" subtitle="category" />
      <Container>
        <Grid container spacing={3}>
          {category.map((item) => {
            return (
              <Grid
                item
                sm={3}
                xs={6}
                md={2}
                lg={2}
                style={{
                  cursor: "pointer",
                }}
                key={item.id}
              >
                <Card
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    fontWeight: "bold",
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                  }}
                >
                  <CardActions>
                    <Link to={`/category/product/${item.id}`}>
                      <CardContent>
                        {/* <CardMedia image={item.image} style={{ height: 100 }} /> */}
                        <Box>
                          <Typography align="center" variant="h5" color="white">
                            {item.title}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
export default Category;
