/* eslint-disable */
import { createAsyncThunk } from "@reduxjs/toolkit";
import QuanLyDatVeService from "../../Services/DatVeService";

const LayDanhSachGhe = createAsyncThunk("QuanLyDatVe/LayDanhSachGhe", async (_, { getState, rejectWithValue }) => {
  let { maLichChieu } = getState().TicketSlice.infoSuatChieuRap[0];
  try {
    return await QuanLyDatVeService.LayDanhSachPhongVe(null, { maLichChieu });
  } catch (error) {
    return rejectWithValue(error);
  }
});
const DatVeAsyncAction = createAsyncThunk("QuanLyDatVe/DatVe", async (thongTinDatVe, { getState, rejectWithValue }) => {
  try {
    const { infoSuatChieuRap, gheDaDat } = getState().TicketSlice;
    let { maLichChieu } = infoSuatChieuRap;
    const payload = {
      maLichChieu,
      danhSachVe: gheDaDat
    };
    QuanLyDatVeService.DatVe(payload);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const DatVeThunk = {
  LayDanhSachGhe,
  DatVeAsyncAction
};
