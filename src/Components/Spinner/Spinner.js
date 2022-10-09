import React from "react";
import { PulseLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="fixed left-0 top-0 h-screen w-screen">
      <PulseLoader color="#36d7b7" />
    </div>
  );
}

export default Spinner;
