import React from "react";
import { Title } from "../Section/Title";

function BookNavItem({ content, ...restProps }) {
  return <>{restProps.active ? <Title>{content}</Title> : <ul className="text-xl font-medium">{content}</ul>}</>;
}

export default BookNavItem;
