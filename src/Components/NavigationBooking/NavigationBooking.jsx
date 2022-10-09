/* eslint-disable */
import React from "react";
import { useLocation } from "react-router-dom";
import BookNavItem from "./BookNavItem";

function NavigationBooking({ history }) {
  let location = useLocation();
  const uri = location.pathname;
  return (
    <ul className="flex w-2/3 justify-around text-2xl">
      <BookNavItem content={"01. Thông tin phim"} active={uri.includes("theater")} />
      <BookNavItem content={"02. Choose seats"} active={uri.includes("seat")} />
      <BookNavItem content={"03. Payment"} active={uri.includes("pay")} />
      <BookNavItem content={"04. Success"} active={uri.includes("success")} />
    </ul>
  );
}

export default NavigationBooking;
