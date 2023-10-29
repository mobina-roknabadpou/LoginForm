import React from "react";
import Logo from "../Icons/Logo/index.jsx";
import style from "./style.module.css";

function Header() {
  return (
    <div className={style.container}>
      <div className={style.auth}>
        <Logo />
        <button className={style.btn}>ثبت نام</button>
      </div>
    </div>
  );
}

export default Header;
