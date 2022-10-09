/* eslint-disable */

import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../../Assets/Images";
import Buttons from "../Buttons";
import { ImageGradBottom } from "../ImageGrad";

function Item(props) {
  let { hinhAnh, moTa, hot, maPhim, tenPhim, ngayKhoiChieu } = props;
  return (
    <div>
      <ImageGradBottom
        style={{
          backgroundImage: `url('${hinhAnh}')`
        }}>
        <div className="absolute top-1/2 left-16 w-[35%] -translate-y-1/2">
          <p className="text-lg">
            Action <span className="mx-2">|</span> 18+ <span className="mx-2">|</span>
            <span>Ngày khởi chiếu {moment(ngayKhoiChieu).format("DD - MM - YYYY")}</span>
          </p>
          {hot && <p className="text-xl text-red-500">Phim Hot</p>}
          <p className="my-10 w-4/5 break-words text-4xl font-bold">{tenPhim}</p>
          <p className="hidden">{maPhim}</p>
          {/* <p className="mb-8">{moTa}</p> */}
          {/* <div className="flex items-center">
            <Link to={`/booking/${maPhim}/theater`}>
              <Buttons.Bg className="mr-10 !cursor-pointer rounded-full" content="Đặt vé" />
            </Link>
            <button className="flex items-center overflow-hidden bg-transparent">
              <img className="rounded-full bg-white" src={Images.playButton} alt="" />
              Trailer
            </button>
          </div> */}
        </div>
      </ImageGradBottom>
    </div>
  );
}

export default Item;
