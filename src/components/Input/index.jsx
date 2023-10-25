import React, { useState } from "react";
import style from "./style.module.css";
import { Icon } from "react-icons-kit";
import { eyeDisabled } from "react-icons-kit/ionicons/eyeDisabled";
import { eye } from "react-icons-kit/ionicons/eye";

function Input(props) {
  const { 
    name,
    id, 
    typeInput, 
    state, 
    setState, 
    isvisible
  } = props;
  const [type, setType] = useState("password");
  const icon = type === "password" ? eyeDisabled : eye;

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <div className={style.container}>
      <label htmlFor={id} className={style.label}>
        {name}
      </label>
      <input
        type={isvisible ? type : typeInput}
        id={id}
        className={style.inputForm}
        value={state.value}
        onChange={(e) => setState({ ...state, value: e.target.value })}
        required
        autoComplete="off"
      />
      {isvisible && state.value && (
        <span onClick={handleToggle} className={style.icon}>
          <Icon 
          icon={icon} 
          size={24} 
          className={style.eyeIcon} />
        </span>
      )}
    </div>
  );
}

export default Input;
