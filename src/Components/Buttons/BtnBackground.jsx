import React from "react";
import { ButtonBackground, DashBg, Overlay, Text } from "./Button.styled";

function BtnBackground({ content, className, ...restProps }) {
  return (
    <ButtonBackground
      className={className} {...restProps}>
      <DashBg />
      <Overlay />
      <Text>{content}</Text>
    </ButtonBackground>
  );
}

export default BtnBackground;
