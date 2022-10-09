import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { localService } from "../../Services/LocalStorageService";
import { LOCALSTORAGE_USER_INFO } from "../../Utils/Settings/config";
import Buttons from "../Buttons";
import LogoDesc from "../WelCome/LogoDesc";
import { Header } from "./Header.styled";
import { useDispatch } from "react-redux";
import { NguoiDungSliceActions } from "../../Redux/Slices/NguoiDungSlice";

export default function HeaderCommon() {
  let { hoTen, accessToken } = localService.getUserInfo(LOCALSTORAGE_USER_INFO) || {};
  const dispatch = useDispatch();
  let handleLogOut = () => {
    dispatch(NguoiDungSliceActions.userLogout());
  };
  const [scrollDirection, setScrollDirection] = useState(null);
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);
  return (
    <Header isShow={scrollDirection}>
      <div className="flex w-1/6 cursor-pointer items-center">
        <Link className="text-base text-white" to="/">
          <LogoDesc textSmall />
        </Link>
      </div>
      <div className="flex w-5/6 items-center justify-between">
        <ul className="flex w-2/5 list-none items-center justify-around text-xl">
          <li>
            <Link className="text-white hover:font-semibold  hover:text-primaryLight" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white hover:font-semibold  hover:text-primaryLight" to="/movies">
              Movies
            </Link>
          </li>
          <li>
            <Link className="text-white hover:font-semibold  hover:text-primaryLight" to="/home/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="text-white hover:font-semibold  hover:text-primaryLight" to="/home/schedule">
              Schedule
            </Link>
          </li>
        </ul>
        <div className="ml-2 mt-2 flex h-full w-1/4 items-center">
          {!accessToken ? (
            <>
              <NavLink to="/login">
                <Buttons.Glowing className="mr-3 w-12" content="Login" />
              </NavLink>
              <NavLink to="/signup">
                <Buttons.Glowing className="mr-3 w-12" content="Sign Up" />
              </NavLink>
            </>
          ) : (
            <>
              <p className="mr-5 text-xl">Hello {hoTen}</p>
              <button onClick={handleLogOut}>
                <Buttons.Glowing className="w-12" content="Logout" />
              </button>
            </>
          )}
        </div>
      </div>
    </Header>
  );
}
