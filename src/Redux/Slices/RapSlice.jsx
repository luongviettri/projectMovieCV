import { createSlice } from "@reduxjs/toolkit";
import { quanLyRapThunk } from "../Thunks/RapThunk";

const initialState = {
  HeThongRap: []
};
const { LayThongTinHeThongRap } = quanLyRapThunk;
const RapSlice = createSlice({
  name: "RapSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [LayThongTinHeThongRap.fulfilled]: (state, { payload }) => {
      state.HeThongRap = payload;
    }
  }
});

export const RapSliceActions = { LayThongTinHeThongRap };
export default RapSlice.reducer;
