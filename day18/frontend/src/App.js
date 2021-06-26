import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Slider from "./components/SliderContent";

const App = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log("Indal Kumar");
  }, [state]);
  return (
    <>
      <NavBar style={{ color: "red" }} />
      <Slider />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>{state}</h1>
        <button
          onClick={() => {
            setState(state + 1);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setState(state - 1);
          }}
        >
          Decrease
        </button>
      </div>
    </>
  );
};

export default App;
