import React from "react";
import "./input.css";

const Input = ({ label, placeholder, ...otherProps }) => {
  return (
    <div className="form-input">
      {label && <label className="input-label">{label}</label>}
      <input type="text" placeholder={placeholder} {...otherProps} />
    </div>
  );
};

export default Input;
