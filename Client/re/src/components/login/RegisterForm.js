import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { RegisterInput } from "../Inputs/registerInput/RegisterInput";
export const RegisterForm = () => {
   const oy = [
      "Yanvar",
      "Fevral",
      "Mart",
      "Aprel",
      "May",
      "Iyun",
      "Iyul",
      "Avgust",
      "Sentabr",
      "Oktabr",
      "Noyabr",
      "Dekabr",
   ];
   const mon = new Date();

   const registerValue = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      bYear: new Date().getFullYear(),
      bMonth: new Date().getMonth() + 1,
      bDay: new Date().getDate(),
      gender: "",
   };
   const [user, setUser] = useState(registerValue);
   const { first_name, last_name, email, password, bYear, bMonth, bDay, gender } = user;

   const handleRegisterChange = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
      console.log(value, name, "ssssssssssssssssss");
   };

   const year = Array.from(new Array(108), (val, index) => bYear - index);
   const month = Array.from(new Array(12), (val, i) => 1 + i);

   const getDays = () => {
      return new Date(bYear, bMonth, 0).getDate();
   };
   const Days = Array.from(new Array(getDays()), (val, index) => 1 + index);

   const registerValidate = Yup.object({
      first_name: Yup.string()
         .required("Ism  kiritishingiz shart")
         .min(2, "Ism minimal  2 harfdan kam bo'lmasligi kerak")
         .max(30, "Ism maximal  30 harfdan oshmasligi kerak")
         .matches(/^[aA-zZ]+$/, "Ismda faqat harflar ishtirok etishi kerak"),
      last_name: Yup.string()
         .required("Familiya  kiritishingiz shart")
         .min(2, "Familiya minimal  2 harfdan kam bo'lmasligi kerak")
         .matches(/^[aA-zZ]+$/, "Familiyada faqat harflar ishtirok etishi kerak")
         .max(30, "Familiya maximal  30 harfdan oshmasligi kerak"),

      email: Yup.string()
         .required("Email yoki telefon  raqam kiriting")
         .email("bu email yaroqsiz")
         .max(100),
      password: Yup.string()
         .required("Siz parol kiritishingiz shart")
         .max(25, "Parolning maximal uzunligi 25 belgidan oshmasligi kerak")
         .min(4, "Parolning minimal uzunligi 4 belgidan kam bo'lmasligi kerak"),
   });

   return (
      <div className="blur">
         <div className="register">
            <div className="register_header">
               <i className="exit_icon"></i>
               <span>Ro'yhatdan o'tish</span>
               <span>Bu tez va oson</span>
            </div>

            <Formik
               enableReinitialize
               initialValues={registerValue}
               validationSchema={registerValidate}
            >
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
                           <select name="bDay" value={bDay} onChange={handleRegisterChange}>
                              {Days.map((val, i) => (
                                 <option key={i} value={val}>
                                    {val}
                                 </option>
                              ))}
                           </select>
                           <select name="bMonth" value={bMonth} onChange={handleRegisterChange}>
                              {month.map((val, i) => (
                                 <option key={i} value={val}>
                                    {val}
                                 </option>
                              ))}
                           </select>
                           <select name="bYear" value={bYear} onChange={handleRegisterChange}>
                              {year.map((val, i) => (
                                 <option value={val} key={i}>
                                    {val}
                                 </option>
                              ))}
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
