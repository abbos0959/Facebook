import React from "react";
import "./RegisterInput.css";
import { useMediaQuery } from "react-responsive";

import { useField, ErrorMessage } from "formik";

export const RegisterInput = ({ placeholder, bottom, ...props }) => {
   const [field, meta] = useField(props);
   const View1 = useMediaQuery({
      query: "(min-width:539px)",
   });
   const View2 = useMediaQuery({
      query: "(min-width:850px)",
   });
   const View3 = useMediaQuery({
      query: "(min-width:1170px)",
   });
   const test1 = View3 && field.name === "first_name";
   const test2 = View3 && field.name === "last_name";

   //  console.log(field, "ssssssssssssssssss");
   //  console.log(bottom, "botttttttttttttttttttttttt");

   return (
      <div className="input_wrap register_input_wrap">
         <input
            className={meta.touched && meta.error ? "input_error_border" : ""}
            type={field.type}
            name={field.name}
            style={{
               width: `${
                  View1 && (field.name === "first_name" || field.name === "last_name")
                     ? "90%"
                     : View1 && (field.name === "email" || field.name === "password")
                     ? "350px"
                     : "350px"
               }`,
            }}
            {...field}
            {...props}
            placeholder={placeholder}
         />

         {meta.touched && meta.error && (
            <div
               className={View3 ? "input_error input_error_desctop" : "input_error"}
               style={{
                  transform: "translateY(8px)",
                  left: `${test1 ? "-170%" : test2 ? "103%" : ""}`,
               }}
            >
               {meta.touched && meta.error && <ErrorMessage name={field.name} />}
               {meta.touched && meta.error && (
                  <div
                     className={
                        View3 && field.name !== "last_name"
                           ? "error_arrow_left"
                           : View3 && field.name === "last_name"
                           ? "error_arrow_right"
                           : !View3 && "error_arrow_bottom"
                     }
                  ></div>
               )}
            </div>
         )}
         {meta.touched && meta.error && <i className="error_icon"></i>}
      </div>
   );
};
