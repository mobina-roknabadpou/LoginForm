import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { ic_warning } from "react-icons-kit/md/ic_warning";
import { checkmark } from "react-icons-kit/icomoon/checkmark";
import Icon from "react-icons-kit";
function Toast({ message, showToast, onClose, flag }) {
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast, onClose]);
  console.log(showToast, message, onClose);
  return (
    <div className={style.container}>
      <div
        className={style.toast}
        style={{
          opacity: showToast ? 1 : 0,
          background: flag ? "#D95C5C" : "lightGreen",
        }}
      >
        {!flag ? (
          <Icon icon={checkmark} size={20} className={style.icon} />
        ) : (
          <Icon icon={ic_warning} size={20} className={style.icon} />
        )}{" "}
        <span> {message}</span>
      </div>
    </div>
  );
}

export default Toast;
