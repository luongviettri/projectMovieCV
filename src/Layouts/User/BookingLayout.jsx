/* eslint-disable */

import { message } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Glowing from "../../Components/Buttons/Glowing/Glowing";
import { DownArrow } from "../../Components/DownArr";
import { ImageBgRight } from "../../Components/ImageGrad";
import NavigationBooking from "../../Components/NavigationBooking/NavigationBooking";
import PlayButton from "../../Pages/UserPages/MovieDetail/PlayButton";
import Trailer from "../../Pages/UserPages/MovieDetail/Trailer";
import { QuanLyPhimActions } from "../../Redux/Slices/QuanLyPhimSlice";
import { localService } from "../../Services/LocalStorageService";

function BookingLayout() {
  const { filmDetail } = useSelector(state => state.QuanLyPhimSlice);
  const navigate = useNavigate();
  let moTa = filmDetail?.moTa.replace(/<[^>]+>/g, ""); //! chỗ này replace tag thành text
  useEffect(() => {
    let user = localService.getUserInfo();
    if (!user) {
      // message.error("Đăng nhập dô bạn êi !!");
      // navigate("/home");
      const agree = confirm("Bạn hãy đăng nhập để đặt bộ phim này nhé ?");
      agree ? navigate("/login") : navigate("/home")

    }
  });
  return (
    <>
      <ImageBgRight backgroundImage={filmDetail?.hinhAnh}>
        <div className="relative flex h-screen items-center">
          <div className="ml-14 w-2/5">
            <p>
              Action <span className="mx-3">|</span> 18+ <span className="mx-3">|</span> 3 h 2 m
            </p>
            <h1 className="my-10 w-4/5 break-words text-4xl font-bold">{filmDetail?.tenPhim}</h1>
            <p className="mb-8">{moTa}</p>
            <div className="flex w-2/5 cursor-pointer items-center">
              <Trailer trailer={filmDetail?.trailer} />
            </div>
          </div>
        </div>
        <p className="absolute bottom-12 left-1/2 -translate-x-1/2 text-lg font-bold">Order ticket right now</p>
        <a href="#heThongRap" className="absolute bottom-5 left-1/2 -translate-x-1/2">
          <DownArrow />
        </a>
      </ImageBgRight>
      <div className="absolute -bottom-11 right-0 w-full">
        <NavigationBooking />
      </div>
      <Outlet />
    </>
  );
}

export default BookingLayout;
