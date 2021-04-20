import logo from "./logo.svg";
import "./App.css";
import Row from "./components/Row/Row";
import React, { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState([
    { username: null },
    { username: null },
    { username: null },
    { username: null },
    { username: null },
    { username: null },
    { username: null },
    { username: null },
    { username: null },
    { username: null },
  ]);
  return (
    <div
      className="indal"
      style={{
        display: "flex",
        overflow: "hidden",
        overflowX: "scroll",
        cursor: "pointer",
      }}
    >
      {state.map((item) => (
        <div>
          <Row />
        </div>
      ))}
    </div>
  );
}

export default App;
