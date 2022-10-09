/* eslint-disable */
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Cards from "../../../Components/Cards";
import { Title } from "../../../Components/Section/Title";

function ComingSoon() {
  let { popularFilms } = useSelector(state => state.QuanLyPhimSlice);
  const soLuongPhimCanThiet = 4;
  const renderFilmsComingSoon = () => {
    popularFilms.length > soLuongPhimCanThiet
      ? (popularFilms = popularFilms.slice(0, soLuongPhimCanThiet))
      : popularFilms;
    return popularFilms.map((film, index) => {
      return (
        <Fragment key={index.toString()}>
          <div className="w-1/4 p-2">
            <Cards.WithTag tag={index + 1} movie={film} />
          </div>
        </Fragment>
      );
    });
  };
  return (
    <div className="mx-auto flex h-full w-11/12 flex-col py-10">
      <Title>Coming Soon</Title>
      <div className="h-11/12 mt-10 flex overflow-hidden">{renderFilmsComingSoon()}</div>
    </div>
  );
}

export default ComingSoon;
