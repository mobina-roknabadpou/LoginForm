import React from "react";
import Logo from "../Icons/Logo/index.jsx";
import style from "./style.module.css";
import Toast from "../Toast/index.jsx";

function NavigationBar({ toastMessage, showToast, closeToast, toastState }) {
  return (
    <div className={style.container}>
      <div className={style.auth}>
        <Logo />
        <Toast
          message={toastMessage}
          showToast={showToast}
          onClose={closeToast}
          toastState={toastState}
        />
        <button className={style.btn}>ثبت نام</button>
      </div>
    </div>
  );
}

export default NavigationBar;
