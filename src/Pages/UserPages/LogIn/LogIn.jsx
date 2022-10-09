/* eslint-disable */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { localService } from "../../../Services/LocalStorageService";
import LogInForm from "./LoginForm/LogInForm";

function LogIn() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localService.getUserInfo()) {
      navigate(-1, { replace: true }); k
    }
  }, []);
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-[#141e30] to-[#243b55]">
      <div className="w-1/3 p-10 shadow-2xl shadow-gray-600">
        <h2 className="text-center text-3xl font-bold">Đăng nhập</h2>
        <LogInForm />
      </div>
    </div>
  );
}

export default LogIn;
