/* eslint-disable */
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { QuanLyPhimActions } from "../../Redux/Slices/QuanLyPhimSlice";
import Item from "../Carousel/Item";

function Fade() {
  const dispatch = useDispatch();
  const { danhSachBanner } = useSelector(state => state.QuanLyPhimSlice);
  useEffect(() => {
    dispatch(QuanLyPhimActions.getBannerFilmsInfo());
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    speed: 3000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    className: "h-full w-full"
  };
  const renderBanners = () => {
    return danhSachBanner.map((banner, index) => {
      return (
        <Fragment key={index.toString() + banner.maBanner}>
          <Item {...banner} />
        </Fragment>
      );
    });
  };
  return (
    <div className="mx-auto h-full w-full">
      <Slider {...settings}>{renderBanners()}</Slider>
    </div>
  );
}

export default Fade;
