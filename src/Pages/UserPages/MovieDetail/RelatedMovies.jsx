import React from "react";
import { Title } from "../../../Components/Section/Title";
import Slider from "../../../Components/Slider";

function RelatedMovies() {
  return (
    <div className="mx-auto h-full w-11/12">
      <Title>Related Movies</Title>
      <div className="mt-5">
        <Slider.Dragable newSetting={{ slidesToShow: 4 }} />
      </div>
    </div>
  );
}

export default RelatedMovies;
