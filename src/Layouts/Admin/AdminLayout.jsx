/* eslint-disable */
import React, { useState } from "react";
import { Link, Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import { DesktopOutlined, FileOutlined, TeamOutlined, TagsOutlined } from "@ant-design/icons";
import { Layout, Menu, PageHeader } from "antd";
import { Images } from "../../Assets/Images";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { QUAN_TRI } from "../../Utils/Settings/config";
import QuanLyPhimSlice, { QuanLyPhimActions } from "../../Redux/Slices/QuanLyPhimSlice";
import AdminAnimation from "../../Pages/AdminPages/AdminAnimation";
const { Header, Content, Footer, Sider } = Layout;
const AdminLayout = () => {
  // const path = useP
  console.log(window.location.pathname);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const { activeKeyAdmin } = useSelector(state => state.QuanLyPhimSlice);
  const { userLogin } = useSelector(state => state.NguoiDungSlice); //! lấy thông tin đăng nhập của user
  // ! xử lý: Nếu chưa Login hoặc ko phải người quản trị ( LocalStorage chưa có token ) thì mời đi thẳng về trang login nghen.
  if (!localStorage.getItem("user")) {
    confirm("Hãy đăng nhập loại tài khoản QUẢN TRỊ để vào trang admin");
    return <Navigate to="/home" replace={true} />
  }
  if (userLogin.maLoaiNguoiDung != QUAN_TRI) {
    confirm("Hãy đăng nhập loại tài khoản QUẢN TRỊ để vào trang admin");
    return <Navigate to="/home" replace={true} />
  }
  function getItem(label, key, icon, children) {
    return {
      label,
      key,
      icon,
      children
    };
  }

  const items = [
    getItem(
      "Quản lý người dùng",
      "1",
      <Link to="users">
        <TeamOutlined />
      </Link>
    ),
    getItem(
      "Quản lý phim",
      "2",
      <Link to="films">
        <DesktopOutlined />
      </Link>
    ),
    getItem(
      "Quản lý đặt vé",
      "3",
      <Link to="tickets">
        <TagsOutlined />
      </Link>
    ),
    getItem(
      "Xuất báo cáo",
      "4",
      <Link to="export">
        <FileOutlined />
      </Link>
    )
  ];
  // ! logic: có avatar ( click vào avatar sẽ đi đến trang profile ) , và button đăng xuất
  const operations = (
    <>
      <button onClick={() => {
        // history.push("/profile");
        console.log("Di den trang profile");
      }} >
        <div className="flex gap-6 justify-center items-center">
          <div style={{ width: 50, height: 50, display: "flex", justifyContent: "center", alignItems: "center" }}
            className="ml-5 rounded-full bg-red-200 text-2xl"
          >
            {userLogin.taiKhoan.substr(0, 1)}

          </div>
          <div>
            Hello! {userLogin.taiKhoan}
          </div>
        </div>
      </button>
      <button className="text-white pl-4" onClick={() => {
        localStorage.removeItem("user");
        // ! đẩy user về login ==>> dùng lệnh này thay vì navigate hoặc history để load lại trang ===> xóa hết dữ liệu của user cũ
        window.location.href = "/home"
      }}>Đăng xuất </button>
    </>
  )
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <Link to="/admin">
          <div className="mx-auto w-10">
            <img src={Images.gifLogo} alt="..." width={"100%"} />
          </div>
        </Link>
        <Menu theme="dark" selectedKeys={[`${activeKeyAdmin}`]} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }} >
          <div className="flex justify-end items-center pr-10 text-white">{operations}</div>
        </Header>
        <Content >
          {/* nếu đã login role admin thì welcome không thì đá ra notFound */}
          {true ? (
            <>
              {window.location.pathname == "/admin" ? <>
                <AdminAnimation />
                <h1 className="title-admin py-5 text-center text-3xl">Chào mừng bạn đến với ADMIN PAGE</h1>
              </> : <Outlet />}
            </>
          ) : (
            <Navigate to="/notfound" replace />
          )}
        </Content>
        <Footer
          style={{
            height: "2rem",
            padding: "0 50px",
            textAlign: "center",
            backgroundColor: "gray"
          }}>
          Sun Design ©2022 Created by Sun's Team
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
