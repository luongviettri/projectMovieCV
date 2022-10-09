/* eslint-disable */
import { message } from "antd";
import moment from "moment/moment";
import React from "react";
import { useDispatch } from "react-redux";
import { history } from "../../../App";
import { openModal, openModalWithVideoLink } from "../../../Redux/Slices/QuanLyModalSlice";
import Buttons from "../../Buttons";
import { Card } from "./WithTag.style";


function WithTag({ movie, tag }) {
  // ! start: chỗ này làm modal
  const dispatch = useDispatch();
  const handleOpenModalWithVideo = (videoLink) => {
    const linkEdited = youtube_parser(videoLink);
    dispatch(openModalWithVideoLink(linkEdited));
  };
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url?.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }

  // ! end: chỗ này làm modal
  return (
    <Card tag={tag} backgroundImage={movie.hinhAnh} >
      <Card.Content>
        <div className="mb-5 text-center">
          <button
            onClick={() => {
              // window.location.href = `/movies/${movie.maPhim}`
              history.push(`/movies/${movie.maPhim}`)
            }}
            className="font-sans text-xl font-bold leading-relaxed tracking-wider custom-movie-title ">{movie.tenPhim}</button>
          <p className="text-1xl font-sans font-bold leading-relaxed tracking-wider">{moment(movie.ngayKhoiChieu).format("DD/MM")}</p>
          <p className="text-1xl font-sans font-bold leading-relaxed tracking-wider">{movie.moTa.substring(3, 50)}...</p>
        </div>
        <div className="text-center">
          <button onClick={() => { //! tạm thời bọc Buttons.Bg trong button này để hoàn thiện UX
            // message.success("Chức năng hiện đang được phát triển ạ");
            handleOpenModalWithVideo(movie.trailer);
          }}>
            <Buttons.Bg content="Watch trailer" className="rounded-md cursor-pointer " />
          </button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default WithTag;
