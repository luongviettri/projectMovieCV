/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./Slices/root";

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk,
      serializableCheck: false
    })
});
if (module.hot) {
  module.hot.accept("./Slices/root.jsx", () => {
    const hotReducer = require("./Slices/root.jsx").default;
    store.replaceReducer(hotReducer);
  });
}

export default store;
