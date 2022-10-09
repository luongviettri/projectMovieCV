/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { localService } from "../../Services/LocalStorageService";
import { DatVeThunk } from "../Thunks/DatVeThunk";

const initialState = {
  infoSuatChieuRap: [],
  danhSachGhe: [],
  gheDaDat: []
};
const { DatVeAsyncAction, LayDanhSachGhe } = DatVeThunk;
const TicketSlice = createSlice({
  name: "TicketSlice",
  initialState,
  reducers: {
    setSuatChieu: (state, { payload }) => {
      let { suat, clicked } = payload;
      if (clicked) {
        state.infoSuatChieuRap = [...state.infoSuatChieuRap, suat];
      } else {
        let indexSuatChieu = state.infoSuatChieuRap.findIndex(item => item.maLichChieu === suat.maLichChieu);

        state.infoSuatChieuRap.splice(indexSuatChieu, 1);
      }
    },
    datGhe: (state, { payload }) => {
      let { maGhe, giaVe } = payload;
      let indexGhe = state.gheDaDat.findIndex(ghe => ghe.maGhe === maGhe);
      if (indexGhe == -1) {
        state.gheDaDat = [...state.gheDaDat, payload];
      }
    },
    huyDatGhe: (state, { payload }) => {
      let { maGhe, giaVe } = payload;
      let indexGhe = state.gheDaDat.findIndex(ghe => ghe.maGhe === maGhe);
      if (indexGhe > -1) {
        state.gheDaDat.splice(indexGhe, 1);
      }
    }
  },
  extraReducers: {
    [DatVeAsyncAction.rejected]: () => {},
    [DatVeAsyncAction.fulfilled]: () => {},
    // LayDanhSachGhe
    [LayDanhSachGhe.rejected]: () => {
      localService.removeSeat();
      message.error("Chọn suất chiếu please!");
      history.back();
    },
    [LayDanhSachGhe.fulfilled]: (state, { payload }) => {
      state.danhSachGhe = payload.content.danhSachGhe;
      localService.removeSeat();
      localService.setSeat(payload.content.danhSachGhe);
    }
  }
});

const { setSuatChieu, setDanhSachGhe, datGhe, huyDatGhe } = TicketSlice.actions;
export const TicketSliceActions = {
  setSuatChieu,
  setDanhSachGhe,
  datGhe,
  huyDatGhe,
  DatVeAsyncAction,
  LayDanhSachGhe
};
export default TicketSlice.reducer;
