import React from "react";
import style from "./style.module.css";
import { useState, useEffect } from "react";
import { VALID_EMAIL } from "../PattenValidation/validation";
import "react-toastify/dist/ReactToastify.css";
import Form from "../Form/index.jsx";
import Toast from "../Toast/index.jsx";
import Header from "../Header/index.jsx";

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
      <Header />
      <div className={style.formControl}>
        <Form
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          formClassName={style.form}
          btnSubmitClassName={style.btnSubmit}
          optionItemClassName={style.optionItem}
          titleClassName={style.title}
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
