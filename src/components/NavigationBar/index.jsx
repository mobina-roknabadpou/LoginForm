import React from "react";
import Logo from "../Icons/Logo/index.jsx";
import style from "./style.module.css";
import Toast from "../Toast/index.jsx";

function NavigationBar({ toastMessage, showToast, closeToast, flag }) {
  return (
    <div className={style.container}>
      <div className={style.auth}>
        <Logo />
        <Toast
          message={toastMessage}
          showToast={showToast}
          onClose={closeToast}
          flag={flag}
        />
        <button className={style.btn}>ثبت نام</button>
      </div>
    </div>
  );
}

export default NavigationBar;
