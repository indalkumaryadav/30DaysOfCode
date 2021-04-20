import React, { useEffect, useState } from "react";
import "./row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  return (
    <div
      className="row"
      style={{
        width: 400,
        height: 400,
        backgroundColor: "red",
      }}
    >
      <div className="row__posters"></div>
    </div>
  );
}

export default Row;
