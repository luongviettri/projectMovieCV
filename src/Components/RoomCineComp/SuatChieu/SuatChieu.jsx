/* eslint-disable */
import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TicketSliceActions } from "../../../Redux/Slices/TicketSlice";
import { SuatStyled } from "./SuatChieu.styled";

function SuatChieu({ suat }) {
  let { ngayChieuGioChieu } = suat;
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  let handleBookLichChieu = suat => {
    setClicked(!clicked);
    dispatch(TicketSliceActions.setSuatChieu({ suat, clicked: !clicked }));
  };
  return (
    <SuatStyled clicked={clicked} onClick={() => handleBookLichChieu(suat)}>
      {moment(ngayChieuGioChieu).format("DD/MM/yyyy,  h:MM:ss a")}
    </SuatStyled>
  );
}

export default SuatChieu;
