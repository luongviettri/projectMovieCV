/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import { QuanLyPhimThunks } from "../Thunks/PhimThunk";
import { localService } from "../../Services/LocalStorageService";

const initialState = {
  danhSachBanner: [],
  danhSachPhim: [],
  popularFilms: [],
  filmDetail: null,
  filmBooked: {
    maPhim: 1486,
    tenPhim: "The Gentlemen",
    biDanh: "the-gentlemen",
    trailer: "https://www.youtube.com/embed/R1v0uFms68U",
    hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/the-gentlemen_gp08.jpg",
    moTa: "Sheriff's Deputy Rick Grimes leads a group of survivors in a world overrun by zombies.",
    maNhom: "GP08",
    hot: false,
    dangChieu: false,
    sapChieu: true,
    ngayKhoiChieu: "2021-07-24T11:46:59.147",
    danhGia: 3
  },
  filmList: [],
  activeKeyAdmin: null
};
const { getBanners, getListFilmByDate, getBannerFilmsInfo, getFilmComingSoon, getFilmInfoById, getFilmList, } = QuanLyPhimThunks;
const QuanLyPhimSlice = createSlice({
  name: "PhimSlice",
  initialState,
  reducers: {
    layDanhSachBannerAction: () => { },
    setBanners: (state, { payload }) => {
      state.danhSachBanner = [payload, ...state.danhSachBanner];
    },
    setBookedFilmFromDetail: (state, { payload }) => {
      state.filmBooked = payload ? payload : state.filmDetail;
      localService.setBookedFilm(payload ? payload : state.filmDetail);
    },
    setActiveKeyAction: (state, action) => {
      // console.log(action);
      console.log('action.payload: >>>>>>', action.payload);
      state.activeKeyAdmin = action.payload;
    }
  },
  extraReducers: {
    //! lấy banner==>
    [getBanners.fulfilled]: (state, { payload }) => {
      return state;
    },
    [getBanners.rejected]: () => { },
    //! lấy danh sách phim phổ biến
    [getListFilmByDate.fulfilled]: (state, { payload }) => {
      return { ...state, popularFilms: payload.content.items };
    },
    [getListFilmByDate.rejected]: () => { },
    // ! lấy thông tin trang detail:
    [getFilmInfoById.fulfilled]: (state, { payload }) => {
      return { ...state, filmDetail: payload.content };
    },
    [getFilmInfoById.rejected]: (_, { payload }) => {
      console.log("payload: ", payload);
    },
    // ! lấy thông tin trang detail:
    [getFilmList.fulfilled]: (state, { payload }) => {
      console.log('payload: ', payload);
      // return { ...state, filmList: payload.content }
      state.danhSachPhim = payload.content;
    },
    [getFilmList.rejected]: (_, { payload }) => {
      console.log("thất bại nên vô đây");
    },
    // //! search film
    // [searchFilm.fulfilled]: (state, { payload }) => {
    //   // console.log('payload: ', payload);
    //   console.log("Thành công rồi nghen");
    //   // return { ...state, filmList: payload?.content }
    // },
    // [searchFilm.rejected]: (_, { payload }) => {
    //   console.log("thất bại nên vô đây");
    // },
  }
});
const { setBanners, setBookedFilmFromDetail, setActiveKeyAction } = QuanLyPhimSlice.actions;
export const QuanLyPhimActions = {
  getBanners,
  getBannerFilmsInfo,
  getListFilmByDate,
  getFilmComingSoon,
  getFilmInfoById,
  getFilmList,
  setBanners,
  setBookedFilmFromDetail,
  setActiveKeyAction
};
export default QuanLyPhimSlice.reducer;
