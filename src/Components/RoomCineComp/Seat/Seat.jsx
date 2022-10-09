/* eslint-disable */
import React, { useState } from "react";
import { SeatStyled, Booked, SeatVip, Reserved } from "./Seat.styled";
import { useDispatch } from "react-redux";
import { TicketSliceActions } from "../../../Redux/Slices/TicketSlice";

function Seat({ seat }) {
  let { tenGhe, daDat, loaiGhe } = seat;
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  let handleReserved = () => {
    setClicked(false);
    dispatch(TicketSliceActions.huyDatGhe(seat));
  };
  let handleBooking = () => {
    setClicked(true);
    dispatch(TicketSliceActions.datGhe(seat));
  };
  if (daDat) {
    return <Booked>X</Booked>;
  }
  if (clicked) {
    return <Reserved onClick={handleReserved}>{tenGhe}</Reserved>;
  }
  if (loaiGhe == "Vip") {
    return <SeatVip onClick={handleBooking}>{tenGhe}</SeatVip>;
  } else {
    return <SeatStyled onClick={handleBooking}>{tenGhe}</SeatStyled>;
  }
}

export default Seat;
