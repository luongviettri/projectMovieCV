import React from "react";
import { GlowingStyle, GlowingBg, Content } from "./Glowing.style";

function Glowing(props) {
  let { content, className } = props;
  return (
    <GlowingStyle className={className}>
      <Content>{content}</Content>
      <GlowingBg />
    </GlowingStyle>
  );
}

export default Glowing;
