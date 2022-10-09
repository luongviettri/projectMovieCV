/* eslint-disable */

import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { history } from "../../../../App";
import { DSGhe } from "../../../../Assets/Dummy/DSGhe";
import Buttons from "../../../../Components/Buttons";
import NavigationBooking from "../../../../Components/NavigationBooking/NavigationBooking";
import Screen from "../../../../Components/RoomCineComp/Screen/Screen";
import Seat from "../../../../Components/RoomCineComp/Seat/Seat";
import Section from "../../../../Components/Section/Section.styled";
import { Title } from "../../../../Components/Section/Title";
import { useSelector, useDispatch } from "react-redux";
import QuanLyDatVeService from "../../../../Services/DatVeService";
import { TicketSliceActions } from "../../../../Redux/Slices/TicketSlice";
import GheDaDat from "./GheDaDat";

function ChooseSeat() {
  // check if local has maLichChieu, MaPhim, login
  const { infoSuatChieuRap, danhSachGhe, gheDaDat } = useSelector(state => state.TicketSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TicketSliceActions.LayDanhSachGhe());
  }, []);

  let renderGheDaDat = () => {
    return (
      <>
        <div className="h-96 overflow-auto p-4">
          <table className="w-full">
            <thead className="text-lg">
              <tr>
                <th>Số ghế</th>
                <th>Giá tiền</th>
              </tr>
            </thead>
            <GheDaDat />
          </table>
        </div>
        <Link to={"/booking/pay"}>
          <Buttons.Bg className="relative bottom-0 left-1/2 mt-5 -translate-x-1/2 rounded-lg" content="Payment" />
        </Link>
      </>
    );
  };
  return (
    <>
      <Section hasBG={{ small: "right", big: "top" }} final>
        <div className="mx-auto translate-y-10">
          <div className="mt-5 flex">
            <div className="h-full w-1/4">
              <p className="px-4 text-2xl font-bold text-yellow-500">Thông tin vé đã đặt</p>
              {renderGheDaDat()}
            </div>
            <div className="w-3/4">
              <Screen />
              <div className="mx-auto grid w-11/12 grid-cols-16 gap-3">
                {danhSachGhe.map((seat, index) => {
                  return <Seat seat={seat} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default ChooseSeat;
