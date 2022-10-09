/* eslint-disable */

import React, { useState } from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../../Redux/Slices/QuanLyModalSlice";
import PlayButton from "./PlayButton";
export default function Trailer({ trailer }) {
  const { isOpen } = useSelector(state => state.QuanLyModalSlice);
  const dispatch = useDispatch();
  // ! start. chỗ này để lọc link thành videoID
  function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url?.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }
  const myUrl = youtube_parser(trailer);
  // ! end. chỗ này để lọc link thành videoID

  const handleOpenModal = () => {
    dispatch(openModal());
  };
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <React.Fragment>
      <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId={myUrl} onClose={handleCloseModal} />
      <button onClick={handleOpenModal}>
        <PlayButton />
      </button>
    </React.Fragment>
  );
}
