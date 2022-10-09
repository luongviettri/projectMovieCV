/* eslint-disable */
import React, { useEffect, useState } from "react";
import QuanLyRapService from "../../../../Services/RapService";
import SuatChieuPhim from "./SuatChieuPhim";

function RapLichChieu({ lichChieu }) {
  const renderCumRap = () => {
    return (
      <div className="my-4 ">
        <p>{lichChieu?.tenCumRap}</p>
        <p className="text-base">{lichChieu?.diaChi}</p>
        <p className="text-base">
          <SuatChieuPhim lstSuatChieu={lichChieu?.lichChieuPhim} />
        </p>
      </div>
    );
  };
  return <div className="h-128  overflow-y-scroll text-lg text-white">{renderCumRap()}</div>;
}

export default RapLichChieu;
