import { message } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { localService } from "../../../Services/LocalStorageService";
import SignUpForm from "./SignUpForm/SignUpForm";

function SignUp() {
  const navigate = useNavigate();
  const options = { maxCount: 2 };
  const { status, content, countMess } = useSelector(state => state.AlertSlice);
  useEffect(() => {
    if (localService.getUserInfo()) {
      navigate("/home", { replace: true });
    }
    message.config(options);
    // message.info("Welcome!", 0.8);
  }, []);
  useEffect(() => {
    status ? message.success(content, 1) : message.error(`Đăng ký failed lần ${countMess}: ${content}`);
  }, [content, countMess]);

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-[#141e30] to-[#208f68]">
      <div className="w-1/2 rounded-xl bg-black bg-opacity-50 shadow-2xl">
        <h2 className="my-6 text-center text-3xl font-bold">Đăng ký</h2>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
