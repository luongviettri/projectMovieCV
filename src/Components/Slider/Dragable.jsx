/* eslint-disable */

import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { QuanLyPhimActions } from "../../Redux/Slices/QuanLyPhimSlice";
import Cards from "../Cards";
import DownArr from "../DownArr/DownArr"
/**
 * nhận vào Array cards (info film className children) và setting slider
 *
 * trả ra slider AutoPlay width full parent's width
 */
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

function Dragable({ newSetting }) {
  const dispatch = useDispatch();
  const { popularFilms } = useSelector(state => state.QuanLyPhimSlice);
  useEffect(() => {
    const action = QuanLyPhimActions.getListFilmByDate();
    dispatch(action);
  }, []);
  const renderPopularFilms = () => {
    return popularFilms.map((film, index) => {
      return (
        <div key={index.toString()} className="w-1/4 p-2">
          <Cards.WithName  {...film} />
        </div>

      )
    })
  }
  const settings = {
    dots: false,
    adaptiveHeight: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 700,
    cssEase: "linear",
    nextArrow: < SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <Slider {...settings} {...newSetting}>
      {renderPopularFilms()}
    </Slider>
  );
}

export default Dragable;
