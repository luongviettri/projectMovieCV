/* eslint-disable */
import _ from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Buttons from "../../../Components/Buttons";
import Cards from "../../../Components/Cards";
import Section from "../../../Components/Section/Section.styled";
import { Title } from "../../../Components/Section/Title";
import { QuanLyPhimActions } from "../../../Redux/Slices/QuanLyPhimSlice";

export default function MovieList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(QuanLyPhimActions.getFilmList());
  }, []);
  const { danhSachPhim } = useSelector(state => state.QuanLyPhimSlice);
  let firstAndLast = _.chunk(danhSachPhim, 4);
  let moviesSection = _.chunk(firstAndLast, 2);
  const renderCards = arr => {
    return arr?.map((item, key) => <Cards.Movie movieDetail={item} key={key} />);
  };
  const renderContent = moviesSection => {
    // bỏ đầu đuôi do khác background
    moviesSection.shift();
    moviesSection.pop();
    return moviesSection.map((item, key) => {
      return (
        <div key={key}>
          <Section hasBG={{ big: "top left", small: "bottom right" }}>
            <div className="mx-auto mt-10 flex w-11/12">{renderCards(item[0])}</div>
          </Section>
          <Section hasBG={{ big: "bottom left", small: "top right" }}>
            <div className="mx-auto mt-10 flex w-11/12">{renderCards(item[1])}</div>
          </Section>
        </div>
      );
    });
  };
  return (
    <>
      <Title className="mx-auto mt-20 w-11/12">Movies</Title>
      <div className="mx-auto mt-6 w-11/12">
        <div className="flex w-3/5 justify-around">
          <Buttons.Bg content="Alltimes" />
          <Buttons.Trans content="Popular now" />
          <Buttons.Trans content="Alltimes" />
          <Buttons.Trans content="Alltimes" />
          <Buttons.Trans content="Alltimes" />
        </div>
      </div>
      {/* first Section */}
      <Section hasBG={{ big: "bottom left", small: "right" }}>
        <div className="mx-auto mt-10 flex w-11/12">{renderCards(firstAndLast.shift())}</div>
      </Section>
      {renderContent(moviesSection)}
      {/* Last Section */}
      <Section hasBG={{ big: "left" }} final>
        <div className="mx-auto mt-10 flex w-11/12">{renderCards(firstAndLast.pop())}</div>
      </Section>
    </>
  );
}
