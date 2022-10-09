/* eslint-disable */
import React from "react";
import { useMediaQuery } from "react-responsive";
import Construction from "../Construction/Construction";
function Test() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)"
  });
  return <div className="h-screen">
    {isDesktopOrLaptop ? <div className="bg-red-600">b</div> : <Construction />}
    </div>;
}

export default Test;
