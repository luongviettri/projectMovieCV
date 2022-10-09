import React from "react";
import { Form, Select } from "antd";
import { useDispatch } from "react-redux";
import { maNhom } from "../../../../Utils/Settings/config";
import { NguoiDungSliceActions } from "../../../../Redux/Slices/NguoiDungSlice";
import { Container, Input, Label } from "../../../../Components/InputRaiseUp/InputRaiseUp";
import Buttons from "../../../../Components/Buttons";

function SignUpForm() {
  const { Option } = Select;
  const dispatch = useDispatch();
  const onFinish = values => {
    values.maNhom = maNhom;
    dispatch(NguoiDungSliceActions.signUpAndLoged(values));
  };

  return (
    <Form
      className="mx-auto grid w-2/3 grid-cols-12 gap-10"
      name="Sign Up"
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off">
      <Form.Item
        className="col-span-6"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Please input your password!"
          }
        ]}>
        <Container>
          <Input placeholder="Nhập tên tài khoản" name="taiKhoan" required />
          <Label>Tài Khoản</Label>
        </Container>
      </Form.Item>
      <Form.Item
        className="col-span-6"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!"
          }
        ]}>
        <Container>
          <Input placeholder="Mật khẩu" name="taiKhoan" required type="password" />
          <Label>Mật khẩu</Label>
        </Container>
      </Form.Item>
      <Form.Item
        className="col-span-6"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}>
        <Container>
          <Input placeholder="Nhập email" name="taiKhoan" required />
          <Label>Email</Label>
        </Container>
      </Form.Item>
      <Form.Item
        className="col-span-6"
        name="hoTen"
        rules={[
          {
            required: true,
            message: "Please input your fullname!"
          }
        ]}>
        <Container>
          <Input placeholder="Nhập họ và tên" name="taiKhoan" required />
          <Label>Họ và tên</Label>
        </Container>
      </Form.Item>
      <Form.Item
        className="col-span-6"
        name="soDT"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}>
        <Container>
          <Input placeholder="Nhập số điện thoại" name="taiKhoan" required type="number" />
          <Label>Số điện thoại</Label>
        </Container>
      </Form.Item>
      <Form.Item
        className="col-span-6"
        name="gender"
        label={<p className="mt-3 mb-0 pb-0 text-white">Chọn giới tính</p>}
        rules={[
          {
            required: true,
            message: "Please input your gender!"
          }
        ]}>
        <Select placeholder="Chọn giới tính" allowClear>
          <Option value="male">Nam</Option>
          <Option value="female">Nữ</Option>
          <Option value="other">Khác</Option>
        </Select>
      </Form.Item>

      <Form.Item className="col-span-12 mx-auto">
        <button type="submit">
          <Buttons.Bg className="w-full rounded-lg" content="Đăng ký ngay" />
        </button>
      </Form.Item>
    </Form>
  );
}

export default SignUpForm;
