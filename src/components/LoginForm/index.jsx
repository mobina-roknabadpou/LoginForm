import React from "react";
import style from "./style.module.css";
import NavigationBar from "../NavigationBar/index.jsx";
import { useState, useEffect } from "react";
import { VALID_EMAIL } from "../PattenValidation/validation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormControl from "../FormControl/index.jsx";

function LoginForm() {
  const [email, setEmail] = useState({
    value: "",
    isValidate: false,
  });

  const [password, setPassword] = useState({
    value: "",
  });

  useEffect(() => {
    const result = VALID_EMAIL.test(email.value);
    setEmail({ ...email, isValidate: result });
    console.log("email", email.isValidate);
  }, [email.value]);

  return (
    <div className={style.container}>
      <NavigationBar />
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
          form={style.form}
          btnSubmit={style.btnSubmit}
          optionItem={style.optionItem}
        />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          closeButton={false}
          style={{ fontSize: "14px", lineHeight: "24px" }}
        />
      </div>
    </div>
  );
}

export default LoginForm;
