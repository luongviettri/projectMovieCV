import React from "react";
import { Title } from "../../../Components/Section/Title";
import Slider from "../../../Components/Slider";

function PopularNow() {
  return (
    <div id="popular" className="mx-auto flex h-full w-11/12 flex-col py-10">
      <Title>Popular Now</Title>
      <div className="mt-10 w-11/12 self-center">
        <Slider.Dragable />
      </div>
    </div>
  );
}

export default PopularNow;
