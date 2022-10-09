import { message } from "antd";
import React from "react";
import { ButtonTrans, Overlay, Text } from "./Button.styled";

function BtnTrans({ content, className }) {
  return (
    <ButtonTrans href="#_" className={className}
      onClick={() => {
        message.success("Chức năng đang được phát triển ạ")
      }}
    >
      <Overlay />
      <Text>{content}</Text>
    </ButtonTrans>
  );
}

export default BtnTrans;
