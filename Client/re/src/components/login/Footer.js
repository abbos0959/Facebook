import React from "react";
import { Link } from "react-router-dom";
// import "../../../src/pages/Login/login.css"

export const Footer = () => {
   return (
      <div className="login_footer">
         <div className="login_footer_wrap">
            <Link to="/">O'zbek</Link>
            <Link to="/">English (US)</Link>
            <Link to="/">Français (France)</Link>
            <Link to="/">العربية</Link>
            <Link to="/">한국어</Link>
            <Link to="/">Italiano</Link>
            <Link to="/">Español</Link>
            <Link to="/">Português (Brasil)</Link>
            <Link to="/">Deutsch</Link>
            <Link className="footer_square">
               <i className="plus_icon"></i>
            </Link>
         </div>
      </div>
   );
};
