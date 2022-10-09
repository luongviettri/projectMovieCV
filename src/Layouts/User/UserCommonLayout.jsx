import React from "react";
import ModalVideo from "react-modal-video";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer";
import HeaderCommon from "../../Components/Header/HeaderCommon";
import { closeModal } from "../../Redux/Slices/QuanLyModalSlice";

const UserCommonLayout = () => {
  // useEffect(() => {  // ! chỗ này chỉnh khi vào detail thì nhảy lên đầu trang
  //   window.scrollTo(0, 0);
  // });
  const dispatch = useDispatch();
  const { isOpen, videoLink } = useSelector(state => state.QuanLyModalSlice);
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId={videoLink} onClose={handleCloseModal} />
      <HeaderCommon />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserCommonLayout;
