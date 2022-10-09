/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { history } from "../../App";
import { localService } from "../../Services/LocalStorageService";
import NguoiDungThunk from "../Thunks/NguoiDungThunk";

const initialState = {
  userLogin: localService.getUserInfo() || {},
  userList: [],
  userEdit: null
};
const { setUserLogin, signUpAndLoged, setUserSignUp, getUserList, deleteUser, editUser, getUserEdit, searchUser } = NguoiDungThunk;

const NguoiDungSlice = createSlice({
  name: "NguoiDungSlice",
  initialState,
  reducers: {
    userLogout: state => {
      localService.removeUserInfo();
      state.userLogin = {};
      location.href = "/";
    }
  },
  extraReducers: {
    //! Login
    [setUserLogin.fulfilled]: (state, { payload }) => {
      state.userLogin = payload.content;
      localService.setUserInfo(payload.content);
      history.back();
    },
    [setUserLogin.rejected]: (_, { payload }) => {
      message.error("Sai tài khoản hoặc mật khẩu");
      console.log("slice handle ERROR");
      console.log(payload);
    },
    //! SignUp
    [setUserSignUp.fulfilled]: () => {
      history.back();
    },
    [setUserSignUp.rejected]: () => {
      // history.back();
    },
    //! SignUp Then Loged
    [signUpAndLoged.fulfilled]: (state, { payload }) => {
      console.log("state: ", state);
      console.log("payload: ", payload);
      console.log("history: ", history);
    },
    [signUpAndLoged.rejected]: (_, { payload }) => {
      console.log("_: ", _);
      console.log("payload: ", payload);
    },
    //! lấy danh sách người dùng
    [getUserList.fulfilled]: (state, { payload }) => {
      return { ...state, userList: payload }
    },
    [getUserList.rejected]: (_, { payload }) => {
      console.log("that bai thi vo day");
    },
    //! lấy thông tin người dùng cần sửa nà
    [getUserEdit.fulfilled]: (state, { payload }) => {
      return { ...state, userEdit: payload.content }
    },
    [getUserEdit.rejected]: (_, { payload }) => {
      console.log("that bai thi vo day");
    },
    // ! edit user information
    [editUser.fulfilled]: (state, { payload }) => {
      // console.log("Thành công rồi nha");
      message.success("Cập nhật thành công rồi nà", 1);
      // setTimeout(()=>{},[])
      setTimeout(() => {
        window.location.href = "/admin/users";
      }, 1000);
    },
    [editUser.rejected]: (_, { payload }) => {
      console.log("that bai thi vo day");
    },
    //! searchUser
    [searchUser.fulfilled]: (state, { payload }) => {
      return { ...state, userList: payload.content }
    },
    [searchUser.rejected]: (_, { payload }) => {
      console.log("that bai thi vo day");
    },
  }
});

const { userLogout } = NguoiDungSlice.actions;
export const NguoiDungSliceActions = { userLogout, setUserLogin, signUpAndLoged, getUserList, deleteUser, editUser, getUserEdit, searchUser };
export default NguoiDungSlice.reducer;
