import React from "react";
import { Card } from "./InName.style";

function InName({ CardDetail }) {
  let { Title, content, image } = CardDetail;
  return (
    <Card>
      <div className="h-4/5 w-full">
        <img className="mx-auto block max-h-full w-full opacity-80" src={image} alt="" />
      </div>
      <div className="absolute bottom-10 left-1/2 mx-auto w-11/12 -translate-x-1/2">
        <p className="text-xl font-semibold text-yellow-500">
          {Title.length > 50 ? `${Title.slice(0, 50)}...` : Title}
        </p>
        <p>{content.length > 150 ? `${content.slice(0, 150)}...` : content}</p>
      </div>
    </Card>
  );
}

export default InName;
