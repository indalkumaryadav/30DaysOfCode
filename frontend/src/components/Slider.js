import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import axios from "axios";
import { SERVER } from "../server";

function Slider() {
  const [slider, setSlider] = useState([]);

  const getSlider = () => {
    axios.get(SERVER + "slider/").then((data) => {
      setSlider(data.data);
    });
  };
  useEffect(() => {
    getSlider();
  }, []);
  return (
    <>
      <Carousel>
        {slider.map((slide) => {
          return (
            <item key={slide.id}>
              <img src={slide.image} width="100%" height="300" />
            </item>
          );
        })}
      </Carousel>
    </>
  );
}

export default Slider;
