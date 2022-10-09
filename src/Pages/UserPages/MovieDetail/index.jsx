/* eslint-disable */
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ImageBgRight } from "../../../Components/ImageGrad";
import Section from "../../../Components/Section/Section.styled";
import { QuanLyPhimActions } from "../../../Redux/Slices/QuanLyPhimSlice";
import Detail from "./Detail";
import ModalPopupVideo from "./ModalPopupVideo";
import PlayButton from "./PlayButton";
import RelatedMovies from "./RelatedMovies";
import Trailer from "./Trailer";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// chính là banner khác nội dung
function MovieDetail(props) {
  //! logic: khi vào trang detail===> lấy ID ==> gọi API lấy thông tin phim===> render ra giao diện
  const { id } = useParams();
  const { filmDetail } = useSelector(state => state.QuanLyPhimSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(QuanLyPhimActions.getFilmInfoById(id));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let moTa = filmDetail?.moTa.replace(/<[^>]+>/g, ""); //! chỗ này replace tag thành text

  return (
    <>
      <ImageBgRight /* truyền url */ backgroundImage={filmDetail?.hinhAnh}>
        <div className="relative flex h-screen items-center">
          <div className="ml-14 w-2/5">
            <p>
              Action <span className="mx-3">|</span> 18+ <span className="mx-3">|</span> 3 h 2 m
            </p>
            <h1 className="my-10 w-4/5 break-words text-4xl font-bold">{filmDetail?.tenPhim}</h1>
            <p className="mb-8">{moTa}</p>
            <div className="flex w-2/5 cursor-pointer items-center">
              <Trailer trailer={filmDetail?.trailer} />
            </div>
          </div>
        </div>
      </ImageBgRight >
      <Section hasBG={{ small: "right", big: "bottom left" }}>
        <Detail {...filmDetail} />
      </Section>
      <Section hasBG={{ big: "top left", small: "bottom right" }}>
        {
          <ModalPopupVideo trailer={filmDetail?.trailer} />
          ||
          ""}


      </Section>
      <Section hasBG={{ small: "right" }} final>
        <RelatedMovies />
      </Section>
    </>
  );
}

export default MovieDetail;
