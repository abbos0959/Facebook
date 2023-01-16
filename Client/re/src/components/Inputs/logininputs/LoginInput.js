import React from "react";
import "./LoginInput.css";

import { useField, ErrorMessage } from "formik";

export const LoginInput = ({ placeholder, bottom, ...props }) => {
   const [field, meta] = useField(props);
   //  console.log(field, "ssssssssssssssssss");
   //  console.log(bottom, "botttttttttttttttttttttttt");

   return (
      <div className="input_wrap">
         {meta.touched && meta.error && !bottom && (
            <div className="input_error" style={{ transform: "translateY(5px)" }}>
               {meta.touched && meta.error && <ErrorMessage name={field.name} />}
               {meta.touched && meta.error && <div className="error_arrow_top"></div>}
            </div>
         )}
         <input
            className={meta.touched && meta.error ? "input_error_border" : ""}
            type={field.type}
            name={field.name}
            {...field}
            {...props}
            placeholder={placeholder}
         />

         {meta.touched && meta.error && bottom && (
            <div className="input_error">
               {meta.touched && meta.error && <ErrorMessage name={field.name} />}
               {meta.touched && meta.error && <div className="error_arrow_bottom"></div>}
            </div>
         )}
         {meta.touched && meta.error && (
            <i className="error_icon" style={{ top: `${!bottom && "63%"}` }}></i>
         )}
      </div>
   );
};
