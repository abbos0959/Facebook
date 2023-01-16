import React, { useState } from "react";
import "./login.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { LoginInput } from "../../components/Inputs/logininputs/LoginInput";

export const Login = () => {
   const loginInfo = {
      email: "",
      password: "",
   };
   const [login, setLogin] = useState(loginInfo);
   const { email, password } = login;

   const handleLoginchange = (e) => {
      const { name, value } = e.target;
      setLogin({ ...login, [name]: value });
   };
   const loginValidation = Yup.object({
      email: Yup.string()
         .required("siz email kiritishingiz shart")
         .email("bu email yaroqsiz")
         .max(100),
      password: Yup.string().required("siz parol kiritishingiz shart"),
   });

   return (
      <div className="login">
         <div className="login_wrapper">
            <div className="login_wrap">
               <div className="login_1">
                  <img src="../../icons/facebook.svg" alt="" />
                  <span>
                     Facebook orqali hayotingizning eng yaxshi onlarini boshqalarga ham ulashing.
                  </span>
               </div>
               <div className="login_2">
                  <div className="login_2_wrap">
                     <Formik initialValues={{ email, password }} validationSchema={loginValidation}>
                        {(formik) => (
                           <Form>
                              <LoginInput
                                 type="text"
                                 name="email"
                                 placeholder="Email yoki telefon raqam kiriting"
                                 onchange={handleLoginchange}
                              />
                              <LoginInput
                                 name="password"
                                 type="password"
                                 placeholder="Parol kiriting"
                                 onchange={handleLoginchange}
                                 bottom
                              />
                              <button className="blue_btn"> Kirish</button>
                           </Form>
                        )}
                     </Formik>
                     <Link to="/forgot" className="forgot_password">
                        Parolni unutdingizmi ?
                     </Link>
                     <div className="sign_splitter"></div>
                     <button className="blue_btn open_signup"> Hisob Yaratish</button>
                  </div>
                  <Link to="/" className="sign_extra">
                     <b>Sahifa yaratish</b> Biznes yoki brand uchun
                  </Link>
               </div>
            </div>
            <div className="register"></div>
         </div>
      </div>
   );
};
