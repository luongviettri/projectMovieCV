import React from "react";
import { Images } from "../../Assets/Images";

function LogoDesc({ textSmall }) {
  return textSmall ? (
    <div className="flex">
      <div className="flex w-1/2 items-end justify-end">
        <img className="h-full w-1/2" src={`${Images.gifLogo}`} alt="..." />
      </div>
      <div className="text-md w-1/2">
        <p>Đông Sun</p>
        <p>Cinema</p>
      </div>
    </div>
  ) : (
    <div className="flex">
      <div className="flex h-40 w-1/3 items-center justify-center">
        <img className="h-full w-full" src={`${Images.gifLogo}`} alt="..." />
      </div>
      <div className="h-40 w-2/3 text-5xl font-bold text-white">
        <p>Đông Sun</p>
        <p>Cinema</p>
        <p>Center</p>
      </div>
    </div>
  );
}

export default LogoDesc;
