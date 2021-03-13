import React from "react";
import { Grid, Box } from "@material-ui/core";

function HeadLine({ title, subtitle }) {
  return (
    <Grid
      container
      style={{
        justifyContent: "center",
        borderBottom: "3px solid green",
        marginTop: 30,
      }}
    >
      <Box
        style={{
          fontWeight: "bold",
          fontSize: 20,
          textTransform: "uppercase",
          color: "blue",
          marginRight: 10,
        }}
      >
        {title}
      </Box>
      <Box
        style={{
          fontWeight: "bold",
          fontSize: 20,
          textTransform: "uppercase",
          color: "red",
        }}
      >
        {subtitle}
      </Box>
    </Grid>
  );
}

export default HeadLine;
