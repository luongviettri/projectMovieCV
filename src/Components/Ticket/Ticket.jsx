/* eslint-disable */
import React, { useEffect } from "react";
import JsBarcode from "jsbarcode";
import { useSelector } from "react-redux";
import "./Ticket.css";
import { TicketStyled } from "./Ticket.styled";
import CurrencyFormater from "../../Utils/Common/CurrencyFormater";
import moment from "moment";
function Ticket({ ticket }) {
  useEffect(() => {
    JsBarcode("#barcode", "ODEON CINEMA PRESENTS", {
      displayValue: false
    });
  }, []);
  const { tenPhim, hinhAnh } = useSelector(state => state.QuanLyPhimSlice.filmBooked);
  const { infoSuatChieuRap, gheDaDat } = useSelector(state => state.TicketSlice);
  let { ngayChieuGioChieu, tenRap } = infoSuatChieuRap;
  let { tenGhe, giaVe, loaiGhe } = gheDaDat[0];

  return (
    <TicketStyled bgIMG={hinhAnh}>
      <div className="holes-top" />
      <div className="title">
        <p className="text-lg text-gray-300">{tenRap}</p>
        <p className="text-3xl font-extrabold">{tenPhim}</p>
      </div>
      <div className="mx-auto mt-5">
        <table>
          <tbody>
            <tr>
              <th>LOẠI</th>
              <th>ROW</th>
              <th>SEAT</th>
            </tr>
            <tr>
              <td>{loaiGhe}</td>
              <td>H</td>
              <td>{tenGhe}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th>GIÁ</th>
              <th>NGÀY</th>
              <th>GIỜ</th>
            </tr>
            <tr>
              <td>{CurrencyFormater.format(giaVe)}</td>
              <td> {moment(ngayChieuGioChieu).format("MM/DD")} </td>
              <td> {moment(ngayChieuGioChieu).format("hh:mm")} </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="holes-lower" />
      <div className="mt-10">
        <svg id="barcode"></svg>
      </div>
    </TicketStyled>
  );
}

export default Ticket;
