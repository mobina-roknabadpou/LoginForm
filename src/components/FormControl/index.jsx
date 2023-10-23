import React from "react";
import Options from "../Options/index.jsx";
import style from "./style.module.css";
import { postData } from "../../services/postInfo.js";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeDisabled } from "react-icons-kit/ionicons/eyeDisabled";
import { eye } from "react-icons-kit/ionicons/eye";

const FormControl = ({
  email,
  setEmail,
  password,
  setPassword,
  classNameForm,
  classNameBtnSubmit,
  classNameOptionItem,
  showToastNotification,
}) => {
  const [type, setType] = useState("password");
  const [isLoading, setIsloading] = useState(false);
  const icon = type === "password" ? eyeDisabled : eye;

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.isValid) {
      showToastNotification("فرمت ایمیل صحیح نیست", true);
      return;
    }
    const info = {
      UserName: email.value,
      password: password.value,
    };
    postData(info, showToastNotification, setIsloading);
  };

  return (
    <>
      <form className={classNameForm} onSubmit={handleSubmit}>
        <div className={style.container}>
          <label htmlFor="email" className={style.label}>
            ایمیل
          </label>
          <input
            type="text"
            id="email"
            className={style.inputForm}
            value={email.value}
            onChange={(e) => setEmail({ ...email, value: e.target.value })}
            required
            autoComplete="off"
          />
        </div>
        <div className={style.container}>
          <label htmlFor="password" className={style.label}>
            رمز عبور
          </label>
          <input
            type={type}
            id="password"
            className={style.inputForm}
            value={password.value}
            onChange={(e) =>
              setPassword({ ...password, value: e.target.value })
            }
            required
            autoComplete="off"
          />
          {password.value && (
            <span onClick={handleToggle} className={style.icon}>
              <Icon icon={icon} size={24} className={style.eyeIcon} />
            </span>
          )}
        </div>
        <button
          className={classNameBtnSubmit}
          disabled={!isLoading && (!email.value || !password.value)}
        >
          {!isLoading ? <p>ورود</p> : "isloading"}
        </button>
        <Options optionItem={classNameOptionItem} />
      </form>
    </>
  );
};

export default FormControl;
