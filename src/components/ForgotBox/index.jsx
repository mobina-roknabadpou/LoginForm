import React from "react";

function ForgotBox({reminder}) {
  return (
    <>
      <div className={reminder}>
        <span>رمز عبور خود را فراموش کرده ام</span>
        <span>ورود از طریق شماره تلفن همراه</span>
      </div>
    </>
  );
}

export default ForgotBox;
