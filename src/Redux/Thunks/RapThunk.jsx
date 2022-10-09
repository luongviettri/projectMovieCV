import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import QuanLyRapService from "../../Services/RapService";

const LayThongTinHeThongRap = createAsyncThunk("QuanLyRap/LayThongTinHeThongRap", async () => {
  try {
    return QuanLyRapService.LayThongTinHeThongRap();
  } catch (error) {
    isRejectedWithValue(error);
  }
});

export const quanLyRapThunk = {
  LayThongTinHeThongRap
};
