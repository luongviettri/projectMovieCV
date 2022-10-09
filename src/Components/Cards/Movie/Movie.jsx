import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../../../Assets/Images";
import Buttons from "../../Buttons";
import { OverLay, Wrapper } from "./Movie.style";

function Movie({ movieDetail }) {
  let { hinhAnh, tenPhim, maPhim, ngayKhoiChieu, danhGia } = movieDetail;
  return (
    <Wrapper>
      <img src={hinhAnh} width={"100%"} alt="" />
      <OverLay>
        <div className="relative">
          Ngày khởi chiếu: <br /> {moment(ngayKhoiChieu).format("DD - MM - YYYY")}
          <span className="absolute top-6">
            <img src={Images.hot} width={15} alt="" />
          </span>
        </div>
        <div className="relative">
          Đánh giá: {danhGia}
          <span className="absolute top-0">
            <img src={Images.star} width={20} alt="" />
          </span>
        </div>
        <div className="mt-1 flex justify-around">
          <Link to={`/booking/${maPhim}/theater`}>
            <Buttons.Bg content="Đặt vé" className="rounded-lg" />
          </Link>
          <Buttons.Trans content="Trailer" className="rounded-lg" />
        </div>
      </OverLay>
      <div className="mt-4 text-xl font-semibold">{tenPhim}</div>
    </Wrapper>
  );
}

export default Movie;

// {
//   "maPhim": 10109,
//   "tenPhim": "The Witcher 1",
//   "biDanh": "the-witcher-1",
//   "trailer": "https://www.youtube.com/watch?v=-dLHnwdTzcw",
//   "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-witcher-1_gp03.jpg",
//   "moTa": "Cùng dấn thân vào một cuộc phiêu lưu xa xôi thú vị, hai chị em Anna và Elsa đi đến chốn rừng sâu để tìm kiếm sự thật về bí ẩn cổ xưa của vương quốc mình. Tất cả những gì Anna & Elsa biết về bản thân, lịch sử và gia đình của họ đều bị thử thách khi họ bị cuốn vào một chuyến đi đầy quả cảm đến với vùng đất phía bắc bí ẩn ngoài Arendelle được báo trước.",
//   "maNhom": "GP03",
//   "ngayKhoiChieu": "2022-09-21T12:45:19.803",
//   "danhGia": 10,
//   "hot": true,
//   "dangChieu": true,
//   "sapChieu": true
// }
