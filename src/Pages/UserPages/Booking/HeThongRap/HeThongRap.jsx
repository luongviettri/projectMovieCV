import React, { useEffect, useState } from "react";
import Ant from "../../../../Components/Ant Design";
import QuanLyRapService from "../../../../Services/RapService";
import RapLichChieu from "./RapLichChieu";
import { useSelector } from "react-redux";

function HeThongRap() {
  const [heThongRap, setHeThongRap] = useState([]);
  const { filmBooked } = useSelector(state => state.QuanLyPhimSlice);
  useEffect(() => {
    QuanLyRapService.LayThongTinLichChieuPhim(null, { maPhim: filmBooked.maPhim }).then(res => {
      setHeThongRap(res.content.heThongRapChieu);
    });
  }, []);
  const renderContent = heThongRap => {
    return heThongRap.map(rap => {
      return {
        tab: <img src={rap.logo} alt="...." width={50} />,
        Jsx: (
          <>
            <h1 className="text-2xl text-white">Hệ thống rạp {rap.tenHeThongRap}</h1>
            <RapLichChieu lichChieu={rap.cumRapChieu[0]} />
          </>
        )
      };
    });
  };
  return (
    <Ant.Tab
      ArrayForMap={renderContent(heThongRap)}
      tabPosition="left"
      style={{ height: "90%" }}
      className="cursor-pointer  user-scrollbar"
    />
  );
}

export default HeThongRap;
