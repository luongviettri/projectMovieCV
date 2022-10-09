import { combineReducers } from "redux";
import AlertSlice from "./AlertSlice";
import NguoiDungSlice from "./NguoiDungSlice";
import QuanLyPhimSlice from "./QuanLyPhimSlice";
import TicketSlice from "./TicketSlice";
import RapSlice from "./RapSlice";
import QuanLyModalSlice from "./QuanLyModalSlice";
import LoadingSlice from "./LoadingSlice";
const reducer = combineReducers({
  AlertSlice,
  NguoiDungSlice,
  QuanLyPhimSlice,
  QuanLyModalSlice,
  RapSlice,
  TicketSlice,
  LoadingSlice
});
export default reducer;
