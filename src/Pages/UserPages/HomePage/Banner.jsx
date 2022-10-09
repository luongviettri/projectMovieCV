import React from "react";
import { DownArrow } from "../../../Components/DownArr";
import Slider from "../../../Components/Slider";

function Banner() {
  return (
    <>
      <Slider.Fade />
      <a className="absolute bottom-0 left-1/2 block -translate-y-1/2" href="#popular">
        <DownArrow />
      </a>
    </>
  );
}

export default Banner;
