import React from "react";
import SuatChieu from "../../../../Components/RoomCineComp/SuatChieu/SuatChieu";

function SuatChieuPhim({ lstSuatChieu }) {
  let renderSuatChieu = () => {
    return lstSuatChieu.map((suat, key) => {
      return <SuatChieu suat={suat} key={key} />;
    });
  };
  return <div>{renderSuatChieu()}</div>;
}

export default SuatChieuPhim;
