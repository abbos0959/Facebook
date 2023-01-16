import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { RegisterInput } from "../Inputs/registerInput/RegisterInput";
export const RegisterForm = () => {
   const registerValue = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      bYear: "",
      bMonth: "",
      bDay: "",
      gender: "",
   };
   const [user, setUser] = useState(registerValue);

   const handleRegisterChange = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
   };
   return (
      <div className="blur">
         <div className="register">
            <div className="register_header">
               <i className="exit_icon"></i>
               <span>Ro'yhatdan o'tish</span>
               <span>Bu tez va oson</span>
            </div>

            <Formik initialValues={registerValue}>
               {(formik) => (
                  <Form className="register_form">
                     <div className="reg_line">
                        <RegisterInput
                           type="text"
                           placeholder="Ism kiriting"
                           name="first_name"
                           onchange={handleRegisterChange}
                        />
                        <RegisterInput
                           type="text"
                           placeholder="Familiya kiriting"
                           name="last_name"
                           onchange={handleRegisterChange}
                        />
                     </div>
                     <div className="reg_line">
                        <RegisterInput
                           type="text"
                           placeholder="Email kiriting"
                           name="email"
                           onchange={handleRegisterChange}
                        />
                     </div>
                     <div className="reg_line">
                        <RegisterInput
                           type="password"
                           placeholder="Parol kiriting"
                           name="password"
                           onchange={handleRegisterChange}
                        />
                     </div>
                     <div className="reg_col">
                        <div className="reg_line_header">
                           Tug'ilgan sana <i className="info_icon"></i>
                        </div>
                        <div className="reg_grid">
                           <select name="bDay">
                              <option value="">12</option>
                           </select>
                           <select name="bMonth">
                              <option value="">12</option>
                           </select>
                           <select name="bYear">
                              <option value="">12</option>
                           </select>
                        </div>
                     </div>
                     <div className="reg_col">
                        <div className="reg_line_header">
                           Jinsingizni Tanlang <i className="info_icon"></i>
                        </div>
                        <div className="reg_grid">
                           <label htmlFor="female">
                              Ayol
                              <input
                                 type="radio"
                                 name="gender"
                                 id="female"
                                 value="female"
                                 onChange={handleRegisterChange}
                              />
                           </label>
                           <label htmlFor="male">
                              Erkak
                              <input
                                 type="radio"
                                 name="gender"
                                 id="male"
                                 value="male"
                                 onChange={handleRegisterChange}
                              />
                           </label>
                        </div>
                     </div>
                     <div className="reg_btn_wrapper">
                        <button className="blue_btn open_signup">Ro'yhatdan o'tish</button>
                     </div>
                  </Form>
               )}
            </Formik>
         </div>
      </div>
   );
};
