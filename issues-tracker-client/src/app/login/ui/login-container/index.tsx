"use client";

import { useState } from "react";
import RegisterForm from "./RegisterForm";
import SigninForm from "./SigninForm";

export type LoginState = "signin" | "register";

const LoginContainer = () => {
  const [loginActive, setLoginActive] = useState<LoginState>("signin");

  const onChangeActive = (navState: LoginState) => {
    setLoginActive(navState);
  };
  return (
    <div className="login-form flex flex-col">
      <div className="nav flex border-indigo-500 border-b-2">
        <button
          className={`flex-1 p-4 ${
            loginActive === "signin" && "bg-indigo-500"
          }`}
          onClick={() => onChangeActive("signin")}
        >
          Login
        </button>
        <button
          className={`flex-1 p-4 ${
            loginActive === "register" && "bg-indigo-500"
          }`}
          onClick={() => onChangeActive("register")}
        >
          Sign up
        </button>
      </div>
      <div className="flex flex-col">
        {loginActive === "signin" ? <SigninForm /> : null}
        {loginActive === "register" ? <RegisterForm /> : null}
      </div>
    </div>
  );
};

export default LoginContainer;
