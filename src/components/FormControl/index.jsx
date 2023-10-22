import React from "react";
import Options from "../Options/index.jsx";
import Input from "../Input/index.jsx";
import { notifyError } from "../Notify/notify.js";
import { postData } from "../../services/postInfo.js";

const FormControl = ({
  email,
  setEmail,
  password,
  setPassword,
  form,
  btnSubmit,
  optionItem,
}) => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.isValidate) {
      notifyError("فرمت ایمیل صحیح نیست!");
      return;
    }
    const info = {
      UserName: email.value,
      password: password.value,
    };
    postData(info);
  };

  return (
    <>
      <form className={form} onSubmit={handleSubmit}>
        <Input
          name="ایمیل"
          type="text"
          id="email"
          state={email}
          setState={setEmail}
        />
        <Input
          name="رمز عبور"
          type="password"
          id="password"
          state={password}
          setState={setPassword}
        />
        <button
          className={btnSubmit}
          disabled={!email.value || !password.value}
        >
          ورود
        </button>
        <Options optionItem={optionItem} />
      </form>
    </>
  );
};

export default FormControl;
