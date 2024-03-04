import React from "react";
import "./login.css";
import RightPart from "../../component/Login/RightPart";
import { useLocation } from "react-router-dom";
function Login() {
  const location=useLocation();
 if(location.pathname=="/login"){
  document.body.classList.add("pt-0")
 }
  return (
    <div className="login__wrapper">
      <div className="lw__left__part">
        <div className="lw__lp__img h-100">
          <img src="/img/login-img.png" alt="" />
        </div>
      </div>
      <RightPart />
    
    </div>
  );
}

export default Login;
