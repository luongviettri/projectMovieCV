import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: true,
  countMess: 0,
  content: "Chào mừng bạn đến với Cinema"
};
const AlertSlice = createSlice({
  name: "AlertSlice",
  initialState,
  reducers: {
    setAlert: (state, { payload }) => {
      let { status, content } = payload;
      ++state.countMess;
      state.status = status;
      state.content = content;
    }
  }
});

export const { setAlert } = AlertSlice.actions;
export default AlertSlice.reducer;
