/* eslint-disable */

import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <section className="page_404 text-black h-screen py-28">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="text-3xl">
                  Hình như có gì đó sai sai
                </h3>
                <p className="text-2xl" >Trang bạn đang tìm hiện không có nà</p>
                {/* <div href className="link_404  glow-on-hover flex"><span className="my-auto">Go to Home</span></div> */}
                <NavLink className="link_404" to="/home">Go to Home  </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )


}

export default NotFound;
