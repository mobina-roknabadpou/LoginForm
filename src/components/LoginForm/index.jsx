import React from "react";
import style from "./style.module.css";
import NavigationBar from "../NavigationBar/index.jsx";
import Input from "../Input/index.jsx";
import { useState, useEffect } from "react";
import { VALID_EMAIL, VALID_PASSWORD } from "../PattenValidation/validation";

function LoginForm() {
  const [email, setEmail] = useState({
    value: "",
    isValidate: false,
  });
  const [password, setPassword] = useState({
    value: "",
    isValidate: false,
  });

  useEffect(() => {
    const result = VALID_EMAIL.test(email.value);
    result && setEmail({ ...email, isValidate: true });
    console.log(result);
    console.log("email", email.isValidate);
  }, [email.value]);

  useEffect(() => {
    const result = VALID_PASSWORD.test(password.value);
    console.log(result);
    result && setPassword({ ...password, isValidate: true });
    console.log("password", password.isValidate);
  }, [password.value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.isValidate || !!password.isValidate) {
      alert("فرمت ایمیل صحیح نیست!");
    } else if (!email.isValidate || !password.isValidate) {
      alert("نام کاربری یا رمز ورودی صحیح نمی باشد.");
    }else{

    }
  };
  return (
    <div className={style.container}>
      <NavigationBar />
      <div className={style.controlForm}>
        <div className={style.title}>
          <h3>ورود از طریق ایمیل</h3>
          <span>لطفا ایمیل و رمز عبور خود را وارد کنید.</span>
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
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
            className={style.btnSubmit}
            disabled={!email.value || !password.value}
          >
            ورود
          </button>
          <div className={style.reminder}>
            <span>رمز عبور خود را فراموش کرده ام</span>
            <span>ورود از طریق شماره تلفن همراه</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
