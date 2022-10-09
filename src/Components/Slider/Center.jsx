/* eslint-disable */
import React from "react";
import Slider from "react-slick";
import Cards from "../Cards";
import DownArr from "../DownArr/DownArr";

function Center({ NewsArr }) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      >
        <div className="-rotate-90  absolute bottom-0 left-1/2 -translate-y-1/2">
          <DownArr />
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      >
        <div className="rotate-90  absolute bottom-0 left-1/2 -translate-y-1/2">
          <DownArr />
        </div>
      </div>
    );
  }
  const settings = {
    centerMode: true,
    centerPadding: "20%",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    speed: 700,
    cssEase: "linear",
    nextArrow: < SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const renderCards = news => {
    return news?.map((item, key) => {
      return (
        <div className="px-9" key={key}>
          <Cards.InName CardDetail={item} />
        </div>
      );
    });
  };
  return <Slider {...settings}>{renderCards(NewsArr)}</Slider>;
}

export default Center;
