import React from "react";
import style from "./style.module.css";
import NavigationBar from "../NavigationBar/index.jsx";
import { useState, useEffect } from "react";
import { VALID_EMAIL } from "../PattenValidation/validation";
import "react-toastify/dist/ReactToastify.css";
import Form from "../Form/index.jsx";
import Toast from "../Toast/index.jsx";

function LoginPage() {
  const [email, setEmail] = useState({
    value: "",
    isValid: false,
  });
  const [password, setPassword] = useState({
    value: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastState, setToastState] = useState("warning");

  const showToastNotification = (message, toastState) => {
    setToastMessage(message);
    setShowToast(true);
    setToastState(toastState);
  };

  const closeToast = () => {
    setShowToast(false);
    setToastMessage("");
  };

  useEffect(() => {
    const result = VALID_EMAIL.test(email.value);
    setEmail({ ...email, isValid: result });
  }, [email.value]);

  return (
    <div className={style.container}>
      <NavigationBar
        toastMessage={toastMessage}
        showToast={showToast}
        closeToast={closeToast}
      />
      <div className={style.formControl}>
        <Form
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          classNameForm={style.form}
          classNameBtnSubmit={style.btnSubmit}
          classNameOptionItem={style.optionItem}
          classNameTitle={style.title}
          showToastNotification={showToastNotification}
        />
      </div>
      <Toast
        message={toastMessage}
        showToast={showToast}
        onClose={closeToast}
        toastState={toastState}
      />
    </div>
  );
}

export default LoginPage;
