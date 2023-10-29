import React from "react";

function Options({ classNameOptionItem }) {
  return (
    <>
      <div className={classNameOptionItem}>
        <span>رمز عبور خود را فراموش کرده ام</span>
        <span>ورود از طریق شماره تلفن همراه</span>
      </div>
    </>
  );
}

export default Options;
