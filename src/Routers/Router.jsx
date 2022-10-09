import { nanoid } from "@reduxjs/toolkit";
import UserTemplate from "@Templates/UserTemplate";
import React from "react";

export const routerUserTemplate = [];

const renderUserTemplate = (() => {
  //Need Declare same id to react can't switch case properly in react-router
  const idUserTemplate = nanoid();
  return routerUserTemplate.map(({ componentPage, path }) => (
    <UserTemplate key={idUserTemplate} Component={componentPage} path={path} exact />
  ));
})();

export const routerTemplates = [...renderUserTemplate];
