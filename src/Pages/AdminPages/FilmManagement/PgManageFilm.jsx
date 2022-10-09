/* eslint-disable */

import { Button, Input, PageHeader, Table } from "antd";
import React, { Fragment, useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { QuanLyPhimActions } from "../../../Redux/Slices/QuanLyPhimSlice";
import { AudioOutlined, SearchOutlined, EditOutlined, DeleteOutlined, CalendarOutlined } from "@ant-design/icons";
import { QuanLyPhimThunks } from "../../../Redux/Thunks/PhimThunk";
const { Search } = Input;
function PgManageFilm() {

  const { danhSachPhim: filmList } = useSelector(state => state.QuanLyPhimSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(QuanLyPhimActions.setActiveKeyAction(2));
  }, [])
  const navigate = useNavigate();
  // ! debounce search
  const searchRef = useRef(null);
  //! lấy phim về và hiển thị ra giao diện
  useEffect(() => {
    dispatch(QuanLyPhimActions.getFilmList());
  }, []);
  const handleChange = (event) => {
    const { value } = event.target;
    // ! lấy kí tự cần tìm==> gọi API ==> khi trả về thì lấy data gán lại state 
    if (value) {
      if (searchRef.current) {
        clearTimeout(searchRef.current);
      }
      searchRef.current = setTimeout(() => {
        dispatch(QuanLyPhimActions.getFilmList(value));
      }, 300);
    }
    dispatch(QuanLyPhimActions.getFilmList());
  }
  const onSearch = value => {
    if (value) {
      dispatch(QuanLyPhimActions.getFilmList(value));
    }
    dispatch(QuanLyPhimActions.getFilmList());
  };

  function removeTags(string) {
    // !function remove tag in description
    return string
      .replace(/<[^>]*>/g, " ")
      .replace(/\s{2,}/g, " ")
      .trim();
  }
  const handleDeleteFilm = (filmID) => {
    // console.log("delete film");
    if (window.confirm("Bạn có chắc muốn xóa hem dạ ?")) {
      // console.log('filmID: ', filmID);
      dispatch(QuanLyPhimThunks.deleteFilm(filmID));
      // dispatch(xoaFilmAction(film.maPhim));
      // console.log("delete this film");
    }
  }

  const data = filmList;

  const columns = [
    {
      title: <p className="text-center">Mã phim</p>,
      dataIndex: "maPhim",
      key: "maPhim",
      width: "10rem",
      ellipsis: true,
      render: (text, record, index) => {
        return <p className="text-center">{text}</p>
      }
    },
    {
      title: <p className="text-center">Hình ảnh</p>,
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (text, record, index) => {
        return (
          <div className="flex justify-center items-center" key={index} >
            <img
              src={text}
              alt="abc"
              width={50}
              height={50}
              onError={e => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/200/300`;
              }}
            />
          </div>
        );
      },
      width: "15%",
      ellipsis: true,
    },
    {
      title: <p className="text-center">Tên phim</p>,
      dataIndex: "tenPhim",
      key: "tenPhim",
      width: "100%",
      ellipsis: true,
      render: (text, record, index) => {
        return <p className="text-center">{text}</p>
      }
    },
    {
      title: <p className="text-center">Mô tả</p>,
      dataIndex: "moTa",
      key: "moTa",
      render: (text, record, index) => {
        return (
          // <div></div>
          <Fragment >
            {removeTags(text).length > 50 ? removeTags(text).substr(0, 50) + "..." : removeTags(text)}
          </Fragment>
        );
      },
      width: "100%",
      ellipsis: true,
    },
    {
      title: <p className="text-center">Hành động</p>,
      dataIndex: "hanhDong",
      key: "hanhDong",
      render: (text, record, index) => {
        return (
          <div className="text-center">
            <NavLink to={`edit/${record.maPhim}`} className="mr-2 text-2xl">
              <span className="text-green-300">
                <EditOutlined />
              </span>
            </NavLink>

            <span
              onClick={() => {
                handleDeleteFilm(record.maPhim);
              }}
              className="cursor-pointer text-2xl mx-4"
              to="/">
              <span
                className="text-red-500">
                <DeleteOutlined />
              </span>
            </span>
            {/* <NavLink to="/" className="mr-2 text-2xl" >
              <span className="text-blue-300">
                <CalendarOutlined />
              </span>
            </NavLink> */}
          </div>
        );
      },
      width: "30%",
      ellipsis: true,

    }
  ];
  return (
    <div className=" mx-auto bg-slate-300">
      <PageHeader className="site-page-header" onBack={() => navigate("/admin")} title="Film Management" />
      <div className="container">
        <div className="flex justify-between p-4">
          <div className="col-6">
            <Button
              type="primary"
              onClick={() => {
                navigate("add");
              }}>
              Tạo phim mới
            </Button>
          </div>
          <div className="col-6 text-3xl text-black">
            {/* //! làm chức năng search user */}
            <Search placeholder="Tìm phim" onChange={handleChange} onSearch={onSearch} enterButton />
          </div>
        </div>
      </div>
      <Table align={"center"} rowKey={record => record.tenPhim} columns={columns} dataSource={data} />
    </div>
  );
}

export default PgManageFilm;
