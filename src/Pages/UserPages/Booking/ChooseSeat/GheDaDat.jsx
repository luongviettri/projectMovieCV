/* eslint-disable */
import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import CurrencyFormater from "../../../../Utils/Common/CurrencyFormater";

function GheDaDat() {
  // lấy ghe đã đặt từ state
  const { gheDaDat } = useSelector(state => state.TicketSlice);
  let renderGheDaDat = () => {
    return _.sortBy(gheDaDat, ["maGhe"]).map((ghe, key) => {
      let { tenGhe, giaVe } = ghe;
      return (
        <tr key={key}>
          <td>{tenGhe}</td>
          <td>{CurrencyFormater.format(giaVe)}</td>
        </tr>
      );
    });
  };
  return (
    <tbody>
      {renderGheDaDat()}
      <tr className="border-t-2">
        <td className="text-xl">Tổng cộng</td>
        <td>
          {CurrencyFormater.format(
            gheDaDat.reduce((sum, item) => {
              sum += item.giaVe;
              return sum;
            }, 0)
          )}
        </td>
      </tr>
    </tbody>
  );
}

export default GheDaDat;
