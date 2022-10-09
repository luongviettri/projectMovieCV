import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../../../Components/Buttons";
import { useDispatch } from "react-redux";
import { QuanLyPhimActions } from "../../../Redux/Slices/QuanLyPhimSlice";

function Detail(props) {
  let moTa = props?.moTa?.replace(/<[^>]+>/g, ""); //! chỗ này replace tag thành text
  const dispatch = useDispatch();
  let handleDatVe = () => {
    dispatch(QuanLyPhimActions.setBookedFilmFromDetail());
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-3/4 w-11/12 items-center">
        <div className="item-center flex w-2/5 justify-center">
          <img src={props.hinhAnh} alt="" />
        </div>
        <div className="flex h-3/4 w-3/5 flex-col justify-between">
          <h1 className="text-3xl font-semibold"> {props.tenPhim} </h1>
          <div className="flex w-3/4 items-center justify-between">
            <Buttons.Trans className="cursor-pointer" content="2D" />
            <Buttons.Trans className="cursor-pointer" content="3D" />
            <p className="inline">
              {props.biDanh} <span className="mx-3">|</span> {props.danhGia} <span className="mx-3">|</span>{" "}
              {moment(props.ngayKhoiChieu).format("DD/MM")}
            </p>
            <Link to={`/booking/${props.maPhim}/theater`} onClick={handleDatVe}>
              <Buttons.Bg className="cursor-pointer" content="Đặt vé" />
            </Link>
          </div>
          <p>{moTa}</p>
          <ul>
            <li>Director: Trí</li>
            <li>Actor: Trí</li>
            <li>Country: Viet Nam</li>
            <li>Language: VietNamese</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Detail;
