import React from "react";
import style from "./style.module.css";
import NavigationBar from "../NavigationBar/index.jsx";
import Input from "../Input/index.jsx";
import { useState, useEffect } from "react";
import { VALID_EMAIL, VALID_PASSWORD } from "../PattenValidation/validation";
import ForgotBox from "../ForgotBox/index.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const notify = () => {
    if (!email.isValidate) {
      // alert("فرمت ایمیل صحیح نیست!");
      toast.warn("فرمت ایمیل صحیح نیست.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        closeButton: false,
        style: { background: "#D95C5C" },
      });
    } else if (!email.isValidate || !password.isValidate) {
      // alert("نام کاربری یا رمز ورودی صحیح نمی باشد.");
      toast.warn("نام کاربری یا رمز ورودی صحیح نمی باشد.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        closeButton: false,
        style: { background: "#D95C5C" },
      });
    } else {
      toast.success("با موفقیت انجام شد!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        closeButton: false,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      email: email.value,
      password: password.value,
    };
    console.log(info);
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
            onClick={notify}
          >
            ورود
          </button>
          <ForgotBox reminder={style.reminder} />
        </form>
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
