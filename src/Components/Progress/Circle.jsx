import React from "react";
import "../../Assets/Style/circle.css";

function Circle({ rating }) {
  return (
    <div className={`c100 p${rating * 10} orange`}>
      <span className="font-medium !text-primaryDark">{rating}/10</span>
      <div className="slice">
        <div className="bar" />
        <div className="fill" />
      </div>
    </div>
  );
}

export default Circle;
