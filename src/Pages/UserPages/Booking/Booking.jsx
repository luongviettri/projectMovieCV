/* eslint-disable */

import React, { useEffect, useState } from "react";
import HeThongRap from "./HeThongRap/HeThongRap";
import Section from "../../../Components/Section/Section.styled";
import { Title } from "../../../Components/Section/Title";
import BookedFilm from "./BookedFilm/BookedFilm";
import OtherOfRap from "./HeThongRap/OtherOfRap";
import { Navigate } from "react-router-dom";
import { localService } from "../../../Services/LocalStorageService";
import { message } from "antd";
function Booking() {
  const [isAccess, setIsAccess] = useState(true);
  useEffect(() => {
    let filmBooked = localService.getBookedFilm();
    !filmBooked && message.error("Chọn cho tớ 1 phim yk!");
    setIsAccess(filmBooked);
  }, []);

  return (
    <>
      {isAccess ? (
        <>
          <Section id="heThongRap" hasBG={{ small: "right" }} final>
            <div className="relative top-1/2 mx-auto w-11/12 -translate-y-1/2">
              <div className="mt-8 flex">
                <div className="w-2/5">
                  <p className="mb-4 text-xl font-semibold ">Chọn lịch chiếu</p>
                  <HeThongRap />
                </div>
                <div className="w-3/5">
                  <BookedFilm />
                </div>
              </div>
            </div>
          </Section>
          {/* <Section hasBG={{ big: "left" }} final>
            <div className="mx-auto my-5 w-11/12 ">
              <Title>Phim khác tại { }</Title>
              <OtherOfRap />
            </div>
          </Section> */}
        </>
      ) : (
        <Navigate to={"/"} replace />
      )}
    </>
  );
}

export default Booking;
