import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { ic_warning } from "react-icons-kit/md/ic_warning";
import { checkmark } from "react-icons-kit/icomoon/checkmark";
import Icon from "react-icons-kit";

function Toast({ message, showToast, onClose, toastState }) {
  const isWarning = toastState === "warning";
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => onClose(), 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast, onClose]);

  return (
    <div
      className={`${style.container} ${showToast ? style.show : ""}`}
      style={{
        background: isWarning ? "#D95C5C" : "lightGreen",
      }}
    >
      <div className={style.toast}>
          <Icon 
          icon={ isWarning ? ic_warning : checkmark} 
          size={20} 
          className={style.icon} />
        <span> {message}</span>
      </div>
    </div>
  );
}

export default Toast;
