/* eslint-disable */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import moment from "moment";
import { history } from "../../App";
import QuanLyPhimService from "../../Services/QuanLyPhimService";
import { display_loading, hide_loading } from "../Slices/LoadingSlice";
import { QuanLyPhimActions } from "../Slices/QuanLyPhimSlice";

const getBanners = createAsyncThunk("QuanLyPhimThunk/LayDanhSachBanner", async (_, { rejectWithValue }) => {
  try {
    const result = await QuanLyPhimService.LayDanhSachBanner();
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const getBannerFilmsInfo = createAsyncThunk("QuanLyPhimThunk/Banner", async (_, { rejectWithValue, dispatch }) => {
  try {
    const banners = await dispatch(getBanners());
    let { content } = banners.payload;
    content.forEach(async function (phim) {
      await QuanLyPhimService.LayThongTinPhim(null, { maPhim: phim.maPhim }).then(res => {
        let payload = { ...res.content, hinhAnh: phim.hinhAnh };
        dispatch(QuanLyPhimActions.setBanners(payload));
      });
    });
  } catch (error) {
    return rejectWithValue(error);
  }
});
const getListFilmByDate = createAsyncThunk(
  "QuanLyPhimThunk/LayDanhSachPhimPhanTrang",
  async (_, { rejectWithValue }) => {
    try {
      // ! tạo tham số cần thiết cho url nà
      const objectPath = {
        maNhom: "GP05",
        soTrang: "1",
        soPhanTuTrenTrang: "10"
      };
      // ! gọi và gửi lên slice nà
      const result = await QuanLyPhimService.LayDanhSachPhimPhanTrang(null, objectPath);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const getFilmInfoById = createAsyncThunk("QuanLyPhimThunk/LayThongTinPhim", async (maPhim, { rejectWithValue }) => {
  try {
    const result = await QuanLyPhimService.LayThongTinPhim(null, { maPhim });
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});
const getFilmList = createAsyncThunk(
  "QuanLyPhimThunk/LayDanhSachPhim",
  async (tenPhim, { rejectWithValue, dispatch }) => {
    try {
      const objectPath = {
        maNhom: "GP05",
        tenPhim
      };
      const result = await QuanLyPhimService.LayDanhSachPhim(null, objectPath);
      console.log("result: ", result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const addFilm = createAsyncThunk(
  "QuanLyPhimThunk/ThemPhimUploadHinh",
  async (objectFilm, { rejectWithValue, dispatch }) => {
    dispatch(display_loading());
    try {
      const result = await QuanLyPhimService.ThemPhimUploadHinh(objectFilm);
      message.success("Thêm phim thành công rồi nà", 1);
      setTimeout(() => {
        dispatch(hide_loading());
        // history.push('/');
        window.location.href = "/admin/films";
      }, 1000);
      // console.log('result: ', result);
      // return result;
    } catch (error) {
      message.error(error.response.data.content);
      dispatch(hide_loading());
      return rejectWithValue(error);
    }
  }
);
//! delete
const deleteFilm = createAsyncThunk("QuanLyPhimThunk/XoaPhim", async (maPhim, { rejectWithValue, dispatch }) => {
  dispatch(display_loading());
  try {
    const objectPath = { maPhim: maPhim };
    const result = await QuanLyPhimService.XoaPhim(null, objectPath);
    message.success("Xóa phim thành công rồi nà", 1);
    setTimeout(() => {
      dispatch(hide_loading());
      dispatch(getFilmList());
      // window.location.href = "/admin/films"
    }, 1000);
    // return result;
  } catch (error) {
    message.error("sai gi do goy");
    dispatch(hide_loading());
    return rejectWithValue(error);
  }
});
// ! edit film
const editFilm = createAsyncThunk(
  "QuanLyPhimThunk/CapNhatPhimUpload",
  async (FilmEdited, { rejectWithValue, dispatch }) => {

    dispatch(display_loading());
    try {
      const result = await QuanLyPhimService.CapNhatPhimUpload(FilmEdited);
      message.success("Bạn đã đổi thành công");
      setTimeout(() => {
        dispatch(hide_loading());
        window.location.href = "/admin/films";
      }, 1000);
      // return result;
    } catch (error) {
      console.log("error: ", error);
      message.error(error.response.data.content);
      dispatch(hide_loading());
      return rejectWithValue(error);
    }
  }
);
//! search film
// const searchFilm = createAsyncThunk(
//   "QuanLyPhimThunk/LayDanhSachPhim",
//   async (tenPhim, { rejectWithValue, dispatch }) => {
//     try {
//       // const objectSearch = {
//       //   MaNhom: "GP05",
//       //   tenPhim: tenPhim
//       // }
//       console.log('objectSearch: ', objectSearch);
//       // const result = await QuanLyPhimService.LayDanhSachPhim(null, objectSearch);
//       // console.log('result: ', result);
//       // return result;
//     } catch (error) {
//       // return rejectWithValue(error);
//     }
//   }
// )
export const QuanLyPhimThunks = {
  getBannerFilmsInfo,
  getFilmInfoById,
  getBanners,
  getListFilmByDate,
  getFilmList,
  addFilm,
  deleteFilm,
  editFilm
};
