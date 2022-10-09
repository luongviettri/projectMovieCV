import React from "react";
import { Images } from "../../../../Assets/Images";
import Buttons from "../../../../Components/Buttons";
import Progress from "../../../../Components/Progress";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

function BookedFilm() {
  const navigate = useNavigate();
  const { filmBooked } = useSelector(state => state.QuanLyPhimSlice);
  const { infoSuatChieuRap } = useSelector(state => state.TicketSlice);
  let { tenPhim, ngayKhoiChieu, danhGia, moTa, hot, hinhAnh } = filmBooked;
  const key = "oneTime";
  let handleChonGhe = () => {
    if (infoSuatChieuRap.length == 1) {
      navigate(`/booking/seat`);
    } else {
      message.error({ content: "Vui lòng chọn 1 khung giờ chiếu", key });
    }
  };

  return (
    <div className="px-2">
      <div className="flex justify-around">
        <div className="w-1/4">
          <img width="auto" src={hinhAnh} alt="..." />
        </div>
        <div className="flex w-1/3 flex-col items-center justify-center ">
          <div className="flex items-center justify-center">
            <Progress.Circle rating={`${danhGia}`} active />
          </div>
          <a onClick={handleChonGhe}>
            <Buttons.Spinning content="Chọn ghế" />
          </a>
        </div>
      </div>
      <div className="mt-3 text-lg">
        <p>Tên phim: {tenPhim}</p>
        <p>Ngày khởi chiếu: {moment(ngayKhoiChieu).format("DD - MM - YYYY")}</p>
        {hot ? (
          <div>
            <span className="mr-4">Phim này Hot ghê:</span>
            <img src={Images.hot} alt="..." width={15} style={{ display: "inline" }} />
          </div>
        ) : (
          <></>
        )}
        <p>Mô tả: {moTa}</p>
      </div>
    </div>
  );
}

export default BookedFilm;
