/* eslint-disable */

import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { result } from "lodash";
import QuanLyNguoiDungService from "../../Services/NguoiDungService";
import { StartLoading } from "../../Utils/Common/handleLoading";
import { setAlert } from "../Slices/AlertSlice";
import LoadingSlice, { display_loading, hide_loading } from "../Slices/LoadingSlice";

const setUserLogin = createAsyncThunk("NguoiDungThunk/Login", async (thongTinDangNhap, { rejectWithValue }) => {
  console.log('thongTinDangNhap: ', thongTinDangNhap);
  try {
    const result = await QuanLyNguoiDungService.DangNhap(thongTinDangNhap);
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});
const setUserSignUp = createAsyncThunk("NguoiDungThunk/SignUp", async (thongTinDangKy, { rejectWithValue }) => {
  try {
    return await QuanLyNguoiDungService.DangKy(thongTinDangKy);
  } catch (error) {
    return rejectWithValue(error);
  }
});
const signUpAndLoged = thongTinDangKy => async dispatch => {
  // succes signin then loggedIn
  const { taiKhoan, matKhau } = thongTinDangKy;
  const signedUp = await dispatch(setUserSignUp(thongTinDangKy));
  if (setUserSignUp.rejected.match(signedUp)) {
    let payload = { status: false, content: signedUp.payload.response.data.content };
    return dispatch(setAlert(payload));
  }
  if (setUserSignUp.fulfilled.match(signedUp)) {
    let payload = { status: true, content: signedUp.message };
    dispatch(setAlert(payload));
    return dispatch(setUserLogin({ taiKhoan, matKhau }));
  }
};
const getUserList = createAsyncThunk("NguoiDungThunk/LayDanhSachNguoiDung", async () => {
  const result = await QuanLyNguoiDungService.LayDanhSachNguoiDung();
  return result.content;
});
// const deleteUser = createAsyncThunk(
//   'NguoiDungThunk/XoaNguoiDung',
//   async (userAccount) => {
//     const result = await QuanLyNguoiDungService.XoaNguoiDung(userAccount);
//     console.log('result: ', result);
//     // return result.content;
//   }
// )
const deleteUser = createAsyncThunk("NguoiDungThunk/XoaNguoiDung", async (userAccount, { rejectWithValue, dispatch }) => {
  try {
    const taiKhoanCanXoa = {
      TaiKhoan: userAccount
    };
    const result = await QuanLyNguoiDungService.XoaNguoiDung(null, taiKhoanCanXoa);
    dispatch(getUserList());
    message.success("Xóa thành công rồi ạ", 2);
  } catch (error) {
    if (error.response.data.statusCode == 500) {
      return message.error(error.response.data.content, 3)
    }
    return rejectWithValue(error);
  }
});
const getUserEdit = createAsyncThunk(
  'NguoiDungThunk/LayThongTinNguoiDung',
  async (account, { rejectWithValue, dispatch }) => {
    dispatch(display_loading());
    try {
      const taiKhoanCanLay = {
        taiKhoan: account
      }
      const result = await QuanLyNguoiDungService.LayThongTinNguoiDung(null, taiKhoanCanLay);
      dispatch(hide_loading());
      return result;
    } catch (error) {
      dispatch(hide_loading());
      return rejectWithValue(error);
    }
  }
)
const editUser = createAsyncThunk(
  'NguoiDungThunk/CapNhatThongTinNguoiDung',
  async (userEdited, { rejectWithValue, dispatch }) => {
    try {
      const result = await QuanLyNguoiDungService.CapNhatUser(userEdited);
      return result;

    } catch (error) {
      message.error(error.response.data.content)
      return rejectWithValue(error);
    }
  }
)
const searchUser = createAsyncThunk(
  'NguoiDungThunk/TimKiemNguoiDung',
  async (userName, { rejectWithValue, dispatch }) => {
    try {
      const objectSearch = {
        MaNhom: "GP01",
        tuKhoa: userName
      }
      const result = await QuanLyNguoiDungService.TimKiemNguoiDung(null, objectSearch);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)
const NguoiDungThunk = {
  setUserLogin,
  setUserSignUp,
  signUpAndLoged,
  getUserList,
  deleteUser,
  editUser,
  getUserEdit,
  searchUser
};

export default NguoiDungThunk;
