/* eslint-disable */
import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { history } from "../../../App";
import Buttons from "../../Buttons";
import { Card } from "./WithName.style";
import { QuanLyPhimActions } from "../../../Redux/Slices/QuanLyPhimSlice";
import { message } from "antd";

function WithName(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();
  return (
    <Card backgroundImage={props.hinhAnh}>
      <Card.Content>
        <div className="mb-5 text-center">
          <button
            onClick={() => {
              // ! vấn đề: ở trong movie khi click vào tên phim thì ko render lại giao diện
              // todo: nếu đang ở trong movies thì reload lại giao diện, home thì ko cần==> dùng navigate cho nhanh
              if (Object.keys(param).length === 0) { //! check nếu như param ko có thì đang ở ngoài home
                return navigate(`/movies/${props.maPhim}`);
              }
              return window.location.href = `/movies/${props.maPhim}`
            }}
            className="cursor-pointer font-sans text-2xl font-bold leading-relaxed tracking-wider text-white transition-all ease-linear hover:text-[#a7171a]">
            {props.tenPhim.length > 18 ? `${props.tenPhim.slice(0, 18)}...` : props.tenPhim}
          </button>
        </div>
        <div className="text-center">
          <Buttons.Bg
            content="Đặt vé ngay"
            className="mb-3 w-4/6 cursor-pointer rounded-lg"
            onClick={() => {
              dispatch(QuanLyPhimActions.setBookedFilmFromDetail(props));
              navigate(`/booking/${props.maPhim}/theater`);
            }}
          />
          <Buttons.Trans content="Watch later"

            className="w-4/6 cursor-pointer rounded-lg " />
        </div>
      </Card.Content>
    </Card>
  );
}

export default WithName;
