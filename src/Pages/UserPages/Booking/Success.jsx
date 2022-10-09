/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Buttons from "../../../Components/Buttons";
import CheckCircle from "../../../Components/CheckCircle/CheckCircle";
import Section from "../../../Components/Section/Section.styled";
import { Title } from "../../../Components/Section/Title";

function Success() {
  const timeOut = 6; //after X seconds redirect to Detail page
  let [timmer, setTimmer] = useState(timeOut);
  const navigate = useNavigate();
  useEffect(() => {
    const myInterval = setInterval(() => {
      setTimmer(timmer--);
    }, 900);

    setTimeout(function () {
      navigate("/detail");
    }, timeOut * 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <Section hasBG={{ small: "right" }} final>
      <div className="flex h-full items-center justify-center">
        <div className="w-1/2">
          <CheckCircle className="mx-auto w-1/4" />
          <p className="mt-5 text-center text-3xl font-bold">Successfully purchased</p>
          <div className="mt-5 text-center text-xl">
            <Link to={"/detail"}>
              <Buttons.Bg className="rounded-lg" content="View tickets" />
            </Link>
          </div>
          <p className="text-center">Chuyển trang trong {timmer} giây</p>
        </div>
      </div>
    </Section>
  );
}

export default Success;
