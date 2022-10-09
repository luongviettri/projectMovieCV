/* eslint-disable */

import React, { useRef } from "react";
import { Button, PageHeader, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import NguoiDungSlice, { NguoiDungSliceActions } from "../../../Redux/Slices/NguoiDungSlice";
import { QUAN_TRI } from "../../../Utils/Settings/config";
import { EditOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import Ant from "../../../Components/Ant Design";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Input, Space } from "antd";
import { useState } from "react";
import { QuanLyPhimActions } from "../../../Redux/Slices/QuanLyPhimSlice";
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const { Search } = Input;
export default function PgManageUsers() {
  let navigate = useNavigate();
  ////////////////////////////////////////////////////////////////////////////////////////////////todo:
  //! lấy dữ liệu về
  const { userList } = useSelector(state => state.NguoiDungSlice);
  // ! debounce search
  const searchRef = useRef(null);
  // setData(userList);
  const dispatch = useDispatch();
  // ! dùng useEffect để gọi dữ liệu và lưu về slice
  useEffect(() => {
    dispatch(NguoiDungSliceActions.getUserList());
    dispatch(QuanLyPhimActions.setActiveKeyAction(1));
  }, []);
  let data = userList;
  // ! chỉnh lại mảng data
  // ! thêm button
  const handleEditUser = userEdit => {
    navigate(`edit/${userEdit.taiKhoan}`);
  };
  const handleDeleteUser = userAccount => {
    dispatch(NguoiDungSliceActions.deleteUser(userAccount));
  };
  // ! chỉnh lại mảng columns
  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "hoTen",
      sorter: (a, b) => a.hoTen.length - b.hoTen.length,
      sortDirections: ["descend"],
      ellipsis: true,
      width: "15rem",
      render: (text, record, index) => {
        return (
          <p>{text.length > 20 ? text.slice(0, 20) + "..." : text}</p>
        )
      }
    },
    {
      title: "Email",
      dataIndex: "email",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.email.length - b.email.length,
      width: "20rem",
      ellipsis: true,
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      defaultSortOrder: "descend",
      width: "15rem",
      ellipsis: true,
    },
    {
      title: "Mã User",
      dataIndex: "maLoaiNguoiDung",
      defaultSortOrder: "descend",
      render: (text, record, index) => {
        return text == QUAN_TRI ? <Tag color="magenta">Quản trị</Tag> : <Tag color="cyan">Khách hàng</Tag>;
      },
      width: "10rem",
      ellipsis: true,
    },
    {
      title: "Tùy chỉnh",
      defaultSortOrder: "descend",
      render: (text, record, index) => {
        return (
          <div className="flex gap-4">
            <Button
              onClick={() => {
                // console.log('record: ', record);
                // console.log('text: ', text);
                handleEditUser(record);
              }}
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
            />
            <Button
              className="ml-4"
              onClick={() => {
                handleDeleteUser(text.taiKhoan);
              }}
              type="default"
              shape="circle"
              icon={<DeleteOutlined />}
            />
          </div>
        );
      },
      width: "20%"
    }
  ];
  // ! filter data
  const handleChange = (event) => {
    const { value } = event.target;
    // ! lấy kí tự cần tìm==> gọi API ==> khi trả về thì lấy data gán lại state 
    if (value) {
      if (searchRef.current) {
        clearTimeout(searchRef.current);
      }
      searchRef.current = setTimeout(() => {
        dispatch(NguoiDungSliceActions.searchUser(value));
      }, 300);
    }
    dispatch(NguoiDungSliceActions.getUserList());
  }
  const onSearch = value => {
    if (value) {
      dispatch(NguoiDungSliceActions.searchUser(value));
    }
    dispatch(NguoiDungSliceActions.getUserList());
  };
  return (
    <div className=" mx-auto bg-slate-300">
      <PageHeader className="site-page-header" onBack={() => navigate("/admin")} title="User Management" />
      <div className="container">
        <div className="flex justify-between p-4">
          <div className="col-6">
            <Button
              // className="glow-on-hover"
              type="primary"
              onClick={() => {
                navigate("add");
              }}>
              Tạo người dùng mới
            </Button>
          </div>
          <div className="col-6 text-3xl text-black">
            {/* //! làm chức năng search user */}
            <Search
              placeholder="Tìm người dùng"
              onChange={handleChange}
              onSearch={onSearch}
              enterButton
            />
          </div>
        </div>
      </div>

      <Table
        scroll={{ x: 'max-content' }}
        rowKey={record => record.email} columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
