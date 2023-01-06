import React from "react";
import Lottie from "react-lottie";
import animationData from "./lunaNewYear.json";
export default function ComingSoonAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
      <h1 className="display-2 text-center text-white">
        <b>Giao diện mobile hiện đang được xây dựng</b>
      </h1>
    </div>
  );
}
