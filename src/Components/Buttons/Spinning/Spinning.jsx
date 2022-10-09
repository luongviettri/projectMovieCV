import React from "react";
import { Trail, Dot } from "./Spinning.styled";
import "./Spinning.css";
function Spinning({ content }) {
  return (
    <button className="cursor-pointer border-none">
      <Trail>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        {content}
      </Trail>
    </button>
  );
}

export default Spinning;
