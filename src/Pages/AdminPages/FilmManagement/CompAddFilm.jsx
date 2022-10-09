/* eslint-disable */

import React from "react";
import { Button, Checkbox, DatePicker, Form, Input, InputNumber, Select, Switch } from "antd";
import { useFormik } from "formik";
import { useState } from "react";
import moment from "moment/moment";
const { Item } = Form;
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { QuanLyPhimThunks } from "../../../Redux/Thunks/PhimThunk";
import { QuanLyPhimActions } from "../../../Redux/Slices/QuanLyPhimSlice";
export default function CompAddFilm() {

    const [imgSrc, setImgSrc] = useState(null);
    const dispatch = useDispatch();
    //! lấy thông tin từ form==> gửi lên API
    const formik = useFormik({
        initialValues: {
            tenPhim: "",
            trailer: "",
            moTa: "",
            ngayKhoiChieu: "",
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: "",
            hinhAnh: null
        },
        validationSchema: yup.object().shape({
            tenPhim: yup
                .string()
                .required("Vui lòng nhập tài khoản"),
            trailer: yup
                .string()
                .required("Vui lòng nhập trailer"),
            moTa: yup.string().required("Vui lòng nhập mô tả"),
            // hot: yup.,
            ngayKhoiChieu: yup.string().required("Vui lòng chọn ngày khởi chiếu"),
            // danhGia: yup.string().required("Vui lòng nhập số sao"),
            danhGia: yup.number("Vui lòng nhập số nguyên dương")
                .integer("Vui lòng nhập số nguyên dương").required("Vui lòng nhập vào").typeError("Vui lòng nhập số nguyên dương từ 1 đến 10"),
            hinhAnh: yup.mixed().required('Vui lòng chọn ảnh')

        }),
        onSubmit: values => {
            values.maNhom = "GP05";
            // ! logic: cần gửi dữ liệu này lên API nhưng API nhận vào dữ liệu dạng formData  ( vì có hình ảnh) ==> phải convert dữ liệu trên giao diện sang dữ liệu dạng formData
            // !1. Tạo đối tượng formData
            let formData = new FormData();
            for (let key in values) {
                if (key !== "hinhAnh") {
                    formData.append(key, values[key]); //! nó nhận vào ts1: tên , ts2: giá trị==>  dùng for in để ko repeat code
                } else {
                    //! nhưng đối với dữ liệu dạng hình ảnh thì phải truyền 3ts
                    formData.append("File", values.hinhAnh, values.hinhAnh.name);
                    console.log(formData.get("File"));
                }
            }
            dispatch(QuanLyPhimThunks.addFilm(formData));
        }
    });
    const onFinish = values => {
        console.log("Success:", values);
    };

    const onFinishFailed = errorInfo => {
        console.log("Failed:", errorInfo);
    };
    const handleChange = value => {
        console.log(`selected ${value}`);
    };
    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
        formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
    }
    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }
    const handleChangeInputNumber = (name) => {
        console.log('name: ', name);
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }
    const handleChangeFile = (event) => {
        // ! lấy file từ event
        let file = event.target.files[0];
        if (
            //! giới hạn dữ liệu là ảnh
            file.type == "image/jpeg" ||
            file.type == "image/jpg" ||
            file.type == "image/gif" ||
            file.type == "image/png"
        ) {
            // ! đem dữ liệu file lưu vào formik
            formik.setFieldValue("hinhAnh", file);
            // ! đọc file để hiển thị ảnh lên giao diện chứ ko liên quan đến gán dữ liệu vào formik
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                setImgSrc(event.target.result);
            };
        }

    }
    return (
        <div className="container">
            <h1 className="px-8 py-4 text-3xl text-black">Thêm phim:</h1>
            <Form
                onSubmitCapture={() => {
                    formik.handleSubmit();
                }}
                labelCol={{
                    span: 4
                }}
                wrapperCol={{
                    span: 14
                }}
                layout="horizontal"
                initialValues={{
                    remember: true
                }}
                autoComplete="on">
                <Item className="text-white" label="Tên phim">
                    <Input name="tenPhim" onChange={formik.handleChange} />
                    {formik.errors.tenPhim && formik.touched.tenPhim && (
                        <p className="text-red-500">{formik.errors.tenPhim}</p>
                    )}
                </Item>
                <Item className="text-white" label="Trailer">
                    <Input name="trailer" onChange={formik.handleChange} />
                    {formik.errors.trailer && formik.touched.trailer && <p className="text-red-500">{formik.errors.trailer}</p>}
                </Item>
                <Item label="Mô tả">
                    <Input
                        name="moTa"
                        onChange={formik.handleChange}
                    />
                    {formik.errors.moTa && formik.touched.moTa && <p className="text-red-500">{formik.errors.moTa}</p>}
                </Item>
                <Item className="text-white" label="Ngày khởi chiếu">
                    <DatePicker onChange={handleChangeDatePicker} format={"DD/MM/YYYY"} />
                    {formik.errors.ngayKhoiChieu && formik.touched.ngayKhoiChieu && <p className="text-red-500">{formik.errors.ngayKhoiChieu}</p>}
                </Item>
                <Item className="text-white" label="Đang chiếu" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch("dangChieu")} />
                    {/* {formik.errors.soDt && formik.touched.soDt && <p className="text-red-500">{formik.errors.soDt}</p>} */}
                </Item>
                <Item className="text-white" label="Sắp chiếu" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch("sapChieu")} />
                    {/* {formik.errors.soDt && formik.touched.soDt && <p className="text-red-500">{formik.errors.soDt}</p>} */}
                </Item>
                <Item className="text-white" label="Hot" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch("hot")} />
                    {/* {formik.errors.soDt && formik.touched.soDt && <p className="text-red-500">{formik.errors.soDt}</p>} */}
                </Item>
                {/* <Item className="text-white" label="Loại người dùng">
                    <Select
                        defaultValue="KhachHang"
                        style={{
                            width: "100%"
                        }}
                        onChange={handleChange}>
                        <Option value="KhachHang">Khách hàng</Option>
                        <Option value="QuanTri">Quản lý</Option>
                    </Select>
                </Item> */}
                <Item label="Số sao">
                    <InputNumber
                        min={1}
                        max={10}
                        style={{ width: "20%" }}
                        onChange={handleChangeInputNumber("danhGia")}
                    // onChange={formik.handleChange}
                    />
                    {formik.errors.danhGia && formik.touched.danhGia && <p className="text-red-500">{formik.errors.danhGia}</p>}

                </Item>
                <Item label="Hình ảnh">
                    <input type="file" onChange={handleChangeFile} accept="image/*" />
                    {formik.errors.hinhAnh && formik.touched.hinhAnh && <p className="text-red-500">{formik.errors.hinhAnh}</p>}
                    <br />
                    <img src={imgSrc} alt="..." width={150} height={150} />

                </Item>
                <Item
                    wrapperCol={{
                        offset: 4,
                        span: 14
                    }}
                >
                    <Button
                        // onClick={() => {
                        // }}
                        htmlType="submit"
                        type="primary">
                        Thêm phim
                    </Button>
                </Item>
            </Form>
        </div>
    );
}
