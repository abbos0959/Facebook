import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/login/LoginForm";
import { Footer } from "../../components/login/Footer";
import { RegisterForm } from "../../components/login/RegisterForm";
export const Login = () => {
   return (
      <div className="login">
         <div className="login_wrapper">
            <LoginForm />
            <RegisterForm />
            <Footer />
         </div>
      </div>
   );
};
