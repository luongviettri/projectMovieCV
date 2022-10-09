import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Buttons from "../../../../Components/Buttons";
import { Container, Input, Label } from "../../../../Components/InputRaiseUp/InputRaiseUp";
import { NguoiDungSliceActions } from "../../../../Redux/Slices/NguoiDungSlice";

function LogInForm() {
  const dispatch = useDispatch();
  let handleSubmit = e => {
    e.preventDefault();
    let payload = {
      taiKhoan: e.target["taiKhoan"].value,
      matKhau: e.target["matKhau"].value
    };
    dispatch(NguoiDungSliceActions.setUserLogin(payload));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Input placeholder="Nhập tên tài khoản" name="taiKhoan" required />
        <Label>Tài Khoản</Label>
      </Container>
      <Container className="my-5">
        <Input placeholder="Nhập mật khẩu" type="password" name="matKhau" required />
        <Label>Mật khẩu</Label>
      </Container>
      <Buttons.Spinning type="submit" content="Đăng nhập" />
      <p className="my-5 text-xl">Bạn chưa có tài khoản?</p>
      <Link to="/signup">
        <Buttons.Glowing content="Đăng ký tại đây" className="!w-2/3" />
      </Link>
    </form>
  );
}

export default LogInForm;
