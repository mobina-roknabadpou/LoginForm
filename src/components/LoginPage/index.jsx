import React from "react";
import style from "./style.module.css";
import NavigationBar from "../NavigationBar/index.jsx";
import { useState, useEffect } from "react";
import { VALID_EMAIL } from "../PattenValidation/validation";
import "react-toastify/dist/ReactToastify.css";
import FormControl from "../FormControl/index.jsx";

function LoginForm() {
  const [email, setEmail] = useState({
    value: "",
    isValid: false,
  });

  const [password, setPassword] = useState({
    value: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [flag, setFlag] = useState(true);
  const showToastNotification = (message, flag) => {
    setToastMessage(message);
    setShowToast(true);
    setFlag(flag);
  };

  const closeToast = () => {
    setShowToast(false);
    setToastMessage("");
  };

  useEffect(() => {
    const result = VALID_EMAIL.test(email.value);
    setEmail({ ...email, isValid: result });
    console.log("email", email.isValid);
  }, [email.value]);

  return (
    <div className={style.container}>
      <NavigationBar
        toastMessage={toastMessage}
        showToast={showToast}
        closeToast={closeToast}
        flag={flag}
      />
      <div className={style.formControl}>
        <div className={style.title}>
          <h3>ورود از طریق ایمیل</h3>
          <span>لطفا ایمیل و رمز عبور خود را وارد کنید.</span>
        </div>
        <FormControl
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          classNameForm={style.form}
          classNameBtnSubmit={style.btnSubmit}
          classNameOptionItem={style.optionItem}
          showToastNotification={showToastNotification}
        />
      </div>
    </div>
  );
}

export default LoginForm;
